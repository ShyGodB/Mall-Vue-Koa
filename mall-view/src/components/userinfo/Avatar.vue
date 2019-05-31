<template>
    <div id="avatar">
        <div class="avatar-avatar">

        </div>

        <div class="avatar-upload">
            <el-upload
            class="upload-demo"
            ref="upload"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            list-type="picture"
            :auto-upload="false">
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">确定修改</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </div>
    </div>
</template>

<div class="avatar">

</div>
<script>

export default {
    name: 'avatar',
    data() {
        return {
            fileList: []
        }
    },
    methods: {
        submitUpload() {
            this.$refs.upload.submit();
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        }
    }
}
</script>


<style scoped>
.avatar-avatar {
    width: 144px;
    height: 144px;
    margin: 20px 0  0 20px; ;
    border: 1px solid #ffffff;
    border-radius: 50%;
    background-image: url(../../../public/img/tt.png);
    background-size: 144px 144px;
}
.avatar-upload {
    margin-top: 30px;
}
</style>
