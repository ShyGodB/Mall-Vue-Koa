<template>
    <div id="avatar">
        <div class="change-box">
            <el-upload
            action="/api/view/upload-image-test"
            list-type="picture-card"
            :on-progress="progress"
            :multiple="false"
            :limit="6"
            accept="image/*">
                <el-button type="primary">点击上传</el-button>
            </el-upload>
        </div>


        <el-row>
            <el-col :span="8">
                <div class="cropper-box">
                    <VueCropper
                    ref="cropper"
                    :img="imgSrc"
                    :autoCrop="true"
                    :centerBox="true"
                    :outputSize="option.size"
                    :outputType="option.outputType"
                    ></VueCropper>
                </div>

                <el-button type="success" @click="tailor">裁剪</el-button>
                <el-button type="info" @click="upload">上传</el-button>
            </el-col>

            <el-col :span="16">
                <h2> 图片预览区 </h2>
                <div class="img-preview">
                    <div class="preview preview-img1" :style="{backgroundImage: 'url(' + src + ')' }"></div>

                    <div class="preview preview-img2" :style="{backgroundImage: 'url(' + src + ')' }"></div>

                    <div class="preview preview-img3" :style="{backgroundImage: 'url(' + src + ')' }"></div>
                </div>
            </el-col>
        </el-row>


    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'avatar',
    data() {
        return {
            imgSrc: require('../../../assets/tt.png'),
            src: "",
            fileList: [],
            bossinfo: {},
            option: {
                size: 1,
                outputType: 'png'
            }
        }
    },
    methods: {
        tailor() {
            this.$refs.cropper.getCropData((data) => {
              this.src = data;
            })
        },
        upload() {
            const id = this.$session.getAll().userinfo.id;
            const base64 = this.src;
            axios({
                method: 'post',
                url: '/api/view/update-boss-avatar',
                data: {
                    base64: base64,
                    id: id
                }
            }).then(res => {
                if(res.status === 200) {
                    const url = res.data.msg;
                    const userinfo = this.$session.getAll().userinfo;
                    userinfo.avatar_url = url;
                    this.$session.set('userinfo', userinfo);
                    this.$message({
                        message: '恭喜你！头像修改成功！',
                        type: 'success'
                    });
                } else {
                    this.$message({
                        message: '出错了，请重试！',
                        type: 'error'
                    })
                }
            })
        },
        progress(event, file, fileList) {
            this.imgSrc = file.url;
        }
    },
    created() {
        if(this.$session.exists()) {
            const bossinfo = this.$session.getAll().userinfo;
            this.bossinfo = bossinfo;
            const url = bossinfo.avatar_url;
        } else {
            this.$router.push("/");
            this.src = 'assets/tt.png';
            this.$message({
                showClose: true,
                message: '尚未登陆，请登录',
                type: 'warning'
            })
        }
    }
}
</script>


<style scoped>
#avatar {
    margin: 0 20px 20px 20px;
}
.cropper-box {
    width: 300px;
    height: 300px;
    margin: 0 0 20px;
}
.change-box {
    margin-bottom: 20px;
}
.vue-cropper {
    margin-bottom: 20px;
}
.el-col-8 button {
    margin-left: 40px;
}
.img-preview {
    height: 220px;
    padding-top: 20px;
    border: 1px solid #000;
    border-radius: 10px;
}
.preview {
    float: left;
    margin-left: 20px;
    border: 1px solid #ffffff;
    border-radius: 50%;
    background-size: cover;
}
.preview-img1 {
    width: 180px;
    height: 180px;
}
.preview-img2 {
    width: 144px;
    height: 144px;
}
.preview-img3 {
    width: 100px;
    height: 100px;
}
h2 {
    margin-bottom: 10px;
}
</style>
