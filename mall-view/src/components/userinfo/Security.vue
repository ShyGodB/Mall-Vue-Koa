<template>
    <div id="security">
        <el-row>
            <el-col :span="12">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="身份证号">
                        <el-input v-model="ruleForm.idcard"></el-input>
                    </el-form-item>

                    <el-form-item label="手机">
                        <el-input v-model="ruleForm.mobile"></el-input>
                    </el-form-item>

                    <el-form-item label="邮箱">
                        <el-input v-model="ruleForm.email"></el-input>
                    </el-form-item>

                    <el-form-item label="微信">
                        <el-input v-model="ruleForm.wechat"></el-input>
                    </el-form-item>

                    <el-form-item label="QQ">
                        <el-input v-model="ruleForm.qq"></el-input>
                    </el-form-item>

                    <el-form-item label="微博">
                        <el-input v-model="ruleForm.weibo"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-col>

            <el-col :span="12">
                <div class="avatar">

                </div>
            </el-col>
        </el-row>
    </div>
</template>


<script>
export default {
    name: 'security',
    data() {
        return {
            ruleForm: {
                idcard: '',
                mobile: '',
                email: '',
                wechat: '',
                qq: '',
                weibo: ''
            },
            rules: {

            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    console.log(this.ruleForm);
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>


<style scoped>
.avatar {
    width: 144px;
    height: 144px;
    margin: 20px auto;
    border: 1px solid #ffffff;
    border-radius: 50%;
    background-image: url(../../../public/img/tt.png);
    background-size: 144px 144px;
}
</style>
