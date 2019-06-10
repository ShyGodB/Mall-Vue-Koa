<template >
    <div id="goods-add">
        <el-form :model="goodinfo" ref="goodinfo" label-width="100px" class="demo-ruleForm">
            <el-form-item label="名字">
                <el-input v-model="goodinfo.name"></el-input>
            </el-form-item>

            <el-form-item label="价格">
                <el-input v-model="goodinfo.price"></el-input>
            </el-form-item>

            <el-form-item label="描述">
                <el-input v-model="goodinfo.description"></el-input>
            </el-form-item>

            <el-form-item label="品牌">
                <el-input v-model="goodinfo.brand"></el-input>
            </el-form-item>

            <el-form-item label="标签">
                <el-input v-model="goodinfo.label" placeholder="每个标签使用 分开"></el-input>
            </el-form-item>

            <div class="img-upload">
                <el-upload
                    action="#"
                    :limit="5"
                    ref="upload"
                    :multiple="true"
                    :auto-upload="false"
                    :file-list="fileList"
                    list-type="picture-card"

                    :on-success="success"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove">
                    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                    <div slot="tip" class="el-upload__tip">上传图片大小不超过5mb</div>
                </el-upload>
            </div>

            <el-form-item>
                <el-button type="primary" @click="submitUpload">立即创建</el-button>
                <el-button @click="resetForm('goodinfo')">重置</el-button>
            </el-form-item>

        </el-form>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    name: 'goods-add',
    data() {
        return {
            fileList: [],
            goodinfo: {
                name: '',
                price: '',
                description: '',
                brand: '',
                label: ''
            }
        };
    },
    methods: {
        submitUpload() {
            const session = this.$session.getAll();
            const boss = session.userinfo;
            const goodinfo = this.goodinfo;
            axios({
                method: 'post',
                url: '/api/view/getstore',
                data: { boss_id: boss.boss_id}
            }).then(res => {
                if(res.status === 200) {
                    const store_id = res.data.id;
                    const store_name = res.data.name;
                    const boss_id = boss.boss_id;
                    const boss_name = boss.username;
                    const name = goodinfo.name;
                    const new_price = goodinfo.price;
                    const description = goodinfo.description;
                    const brand = goodinfo.brand;
                    const label = goodinfo.label;
                    const data = {
                        store_id: store_id,
                        store_name: store_name,
                        boss_id: boss_id,
                        boss_name: boss_name,
                        name: name,
                        new_price: new_price,
                        description: description,
                        brand: brand,
                        label: label
                    };
                    const fileArray = this.$refs.upload.uploadFiles;
                    const fd = new FormData();
                    for(let i = 0; i < fileArray.length; i++) {
                        fd.append('avatar', fileArray[i].raw);
                    }
                    axios({
                        url: '/api/view/add-good',
                        method: 'post',
                        data: fd,
                        params: data
                    }).then(res => {
                        if(res.status === 200) {
                            this.$message({
                                message: '添加成功',
                                type: 'success'
                            })
                        }
                        this.fileList = [];
                        this.goodinfo = {};
                    })
                }
            })
        },
        beforeUpload(file) {
            const isLt2M = file.size / 1024 / 1024 < 5;
            if (!isLt2M) {
                this.$message.error('上传图片大小不能超过 2MB!');
            } else {
                this.goodinfo.img.push(file);
                // console.log(this.goodinfo);
            }
            return isLt2M;
        },
        handleRemove(file, fileList) {
            // console.log(file, fileList);
        },
        handlePreview(file) {
            // console.log(file);
        },
        success(res, file, fileList) {
            this.$message({
                message: '恭喜你，上传成功',
                type: 'success'
            });
        },
        resetForm(formName) {
            this.$refs.upload.clearFiles();
        }
    }
}
</script>


<style scoped>
.img-upload {
    margin-left: 100px;
    margin-bottom: 20px;
}
#test {
    width: 100px;
    height: 100px;
}
</style>
