<template>
    <div id="advanced">
        <el-row>
            <el-col :span="12">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="ID">
                        <el-input v-model="ruleForm.godID"></el-input>
                    </el-form-item>

                    <el-form-item label="会员名">
                        <el-input v-model="ruleForm.memberName"></el-input>
                    </el-form-item>

                    <el-form-item label="昵称">
                        <el-input v-model="ruleForm.nickname"></el-input>
                    </el-form-item>

                    <el-form-item label="性别">
                        <el-radio-group v-model="ruleForm.gender">
                            <el-radio label="男"></el-radio>
                            <el-radio label="女"></el-radio>
                            <el-radio label="保密"></el-radio>
                        </el-radio-group>
                    </el-form-item>

                    <el-form-item label="生辰">
                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.birthday" style="width: 100%;"></el-date-picker>
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
    name: 'advanced',
    data() {
        return {
            ruleForm: {
                godID: '',
                memberName: '',
                nickname: '',
                gender: '',
                birthday: ''
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
