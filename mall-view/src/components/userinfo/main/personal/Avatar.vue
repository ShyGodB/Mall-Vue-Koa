<template>
    <div id="avatar">
        <div class="avatar-avatar" :style="{backgroundImage: 'url(' + require('../../../../' + img) + ')' }" ref="pic">
        </div>

        <div class="avatar-upload">
            <el-upload
            action="#"
            ref="upload"
            :auto-upload="false"
            :file-list="fileList"
            list-type="picture-card"

            :on-preview="handlePreview"
            :on-remove="handleRemove">
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="changeAvatar">确定修改</el-button>
            <div slot="tip" class="el-upload__tip">上传图片不超过500kb</div>
            </el-upload>
        </div>
    </div>
</template>

<div class="avatar">

</div>
<script>
import axios from 'axios'

export default {
    name: 'avatar',
    data() {
        return {
            img: 'assets/tt.png',
            fileList: [],
            godinfo: {}
        }
    },
    methods: {
        changeAvatar() {
            const id = this.$session.getAll().userinfo.id;
            const file = this.$refs.upload.uploadFiles[0];
            const fd = new FormData();
            fd.append('avatar', file.raw);
            axios({
                url: `/api/view/update-god-avatar/${id}`,
                method: 'post',
                data: fd
            }).then(res => {
                if(res.status === 200) {
                    const url = res.data.avatar_url;
                    const userinfo = this.$session.getAll().userinfo;
                    userinfo.avatar_url = url;
                    this.$session.set('userinfo', userinfo);
                    this.img = url.substring(url.length - 38);
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
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        }
    },
    created() {
        if(this.$session.exists()) {
            const godinfo = this.$session.getAll().userinfo;
            this.godinfo = godinfo;
            const url = godinfo.avatar_url;
            this.img = url.substring(url.length - 38);
        } else {
            this.$router.push("/");
            this.img = 'assets/tt.png';
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
.avatar-avatar {
    width: 144px;
    height: 144px;
    margin: 20px 0  0 20px;
    border: 1px solid #ffffff;
    border-radius: 50%;
    background-position: center center;
    background-repeat:  no-repeat;
    background-size: 144px 144px;
}
.avatar-upload {
    margin-top: 30px;
}
</style>
