<template >
    <div id="goods-add">
        <el-form :model="goodinfo" :rules="rules" ref="goodinfo" label-width="100px" class="demo-ruleForm">
            <el-form-item label="名字" prop="name">
                <el-input v-model="goodinfo.name"></el-input>
            </el-form-item>

            <el-form-item label="价格" prop="price">
                <el-input v-model="goodinfo.price"></el-input>
            </el-form-item>

            <el-form-item label="描述" prop="description">
                <el-input v-model="goodinfo.description"></el-input>
            </el-form-item>

            <el-form-item label="品牌" prop="brand">
                <el-input v-model="goodinfo.brand"></el-input>
            </el-form-item>

            <div class="img-upload">
                <el-upload
                    class="upload-demo"
                    action="#"
                    accept="image/*"
                    :limit="6"
                    ref="upload"
                    :multiple="true"
                    :auto-upload="false"
                    :file-list="fileList"
                    list-type="picture-card"

                    :http-request:="submitUpload"
                    :on-success="success"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove">
                    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                    <div slot="tip" class="el-upload__tip">上传图片大小不超过5mb</div>
                </el-upload>
            </div>

            <img src="//img11.360buyimg.com/n1/s450x450_jfs/t1/14244/23/13114/176711/5c9d7523E679c07fb/b8141b3d825a8ed6.jpg" alt="">

            <el-form-item>
                <el-button type="primary" @click="submitUpload">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>


        <div class="prompt" v-for="url in urls">
            <img :src="url" alt="">
        </div>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    name: 'goods-add',
    data() {
        return {
            urls: [
                'https://g-search2.alicdn.com/img/bao/uploaded/i4/i1/2616970884/O1CN01ACI2g01IOueYSuLGo_!!0-item_pic.jpg_460x460Q90.jpg_.webp',
                'https://img.alicdn.com/imgextra/i2/2616970884/O1CN01tZNRp61IOudP7uxUa_!!0-item_pic.jpg_430x430q90.jpg',
                'https://img.alicdn.com/imgextra/i2/2616970884/O1CN01vGTzgM1IOub0mh1Ih_!!2616970884.jpg_430x430q90.jpg',
                'https://img.alicdn.com/imgextra/i3/2616970884/O1CN011IOuazFghFqCdof_!!2616970884.jpg_430x430q90.jpg',
                'https://img.alicdn.com/imgextra/i1/2616970884/TB2A8FAXjfguuRjSspkXXXchpXa_!!2616970884.jpg_430x430q90.jpg'
            ],
            imgsrc: '',
            fileList: [],
            goodinfo: {
                name: '',
                price: '',
                description: '',
                brand: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
            }
        };
    },
    methods: {
        submitUpload() {
            const files = this.$refs.upload.uploadFiles;
            const fd = new FormData();
            axios({
                url: '/api/view/addgoodinfo',
                method: 'post',
                data: fd
            }).then(res => {
                console.log(res.data);
            })
            // for(let i = 0; i < files.length; i++) {
            //     fd.append('files' + i, files[i].raw);
            // }
            // axios({
            //     url: '/api/view/addgood',
            //     method: 'post',
            //     data: this.goodinfo
            // }).then(res => {
            //     console.log(res.data);
            // })
        },
        beforeUpload(file) {
            const isLt2M = file.size / 1024 / 1024 < 5;
            if (!isLt2M) {
                this.$message.error('上传图片大小不能超过 2MB!');
            } else {
                this.goodinfo.img.push(file);
                console.log(this.goodinfo);
            }
            return isLt2M;
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        success(res, file, fileList) {
            this.$message({
                message: '恭喜你，上传成功',
                type: 'success'
            });
            this.imgsrc = res;
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
    }
}
</script>


<style scoped>
.img-upload {
    margin-left: 100px;
    margin-bottom: 20px;
}
</style>
