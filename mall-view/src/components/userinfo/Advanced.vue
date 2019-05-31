<template>
    <div id="baseinfo">
        <el-row>
            <el-col :span="12">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="身份证号">
                        <el-input v-model="ruleForm.idcard"></el-input>
                    </el-form-item>

                    <el-form-item label="婚姻状况">
                        <el-radio-group v-model="ruleForm.marriage">
                            <el-radio label="已婚"></el-radio>
                            <el-radio label="未婚"></el-radio>
                            <el-radio label="保密"></el-radio>
                        </el-radio-group>
                    </el-form-item>

                    <el-form-item label="纯月收入">
                        <el-radio-group v-model="ruleForm.income">
                            <el-radio label="3000以下"></el-radio>
                            <el-radio label="3000-4999"></el-radio>
                            <el-radio label="4999-9999"></el-radio>
                            <el-radio label="10000以上"></el-radio>
                        </el-radio-group>
                    </el-form-item>

                    <el-form-item label="教育程度">
                        <el-radio-group v-model="ruleForm.education">
                            <el-radio label="小学"></el-radio>
                            <el-radio label="初中"></el-radio>
                            <el-radio label="高中"></el-radio>
                            <el-radio label="中专"></el-radio>
                            <el-radio label="大专"></el-radio>
                            <el-radio label="本科"></el-radio>
                            <el-radio label="硕士"></el-radio>
                            <el-radio label="博士"></el-radio>
                            <el-radio label="其它"></el-radio>
                            <el-radio label="保密"></el-radio>
                        </el-radio-group>
                    </el-form-item>

                    <el-form-item label="行业">
                        <el-radio-group v-model="ruleForm.industry">
                            <el-radio label="国有"></el-radio>
                            <el-radio label="民营"></el-radio>
                        </el-radio-group>
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
    name: 'baseinfo',
    data() {
        return {
            ruleForm: {
                idcard: '',
                marriage: '',
                income: '',
                education: '',
                industry: ''
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
