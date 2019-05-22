<template>
    <div class="register">
        <div class="register-step">
            <el-steps :active="active" finish-status="success">
                <el-step title="验证手机号"></el-step>
                <el-step title="填写账号信息"></el-step>
                <el-step title="设置支付方式"></el-step>
                <el-step title="注册成功"></el-step>
            </el-steps>
        </div>

        <div class="register-body" v-if="step === 1">
            <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="mobile">
                <el-form-item label="手机" prop="age" :rules="[{ required: true, message: '手机号不能为空'},{ type: 'number', message: '手机号必须为数字值'}]">
                    <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="验证码" prop="age"" class="vercode">
                    <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
                    <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
                    <el-button @click="resetForm('numberValidateForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>

        <div class="register-body" v-if="step === 2">
            <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="mobile">
                <el-form-item label="昵称" prop="age" :rules="[{ required: true, message: '手机号不能为空'},{ type: 'number', message: '手机号必须为数字值'}]">
                    <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="Email" prop="age"" class="vercode">
                    <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
                    <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
                    <el-button @click="resetForm('numberValidateForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>

        <div class="register-body" v-if="step === 3">
            <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="mobile">
                <el-form-item label="支付宝" prop="age" :rules="[{ required: true, message: '手机号不能为空'},{ type: 'number', message: '手机号必须为数字值'}]">
                    <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="微信" prop="age" :rules="[{ required: true, message: '手机号不能为空'},{ type: 'number', message: '手机号必须为数字值'}]">
                    <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="密码" prop="age"" class="vercode">
                    <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
                    <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
                    <el-button @click="resetForm('numberValidateForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>

        <div class="register-body success" v-if="step === 4">
            <h2> ^_^ 恭喜你！注册成功！</h2>
            <el-button style="margin-top:12px;" @click="complete">完成</el-button>
        </div>
    </div>
</template>


<script>
export default {
    name: 'regist-login',
    data() {
        return {
            step: 1,
            active: 0,
            numberValidateForm: {
                age: ''
            }
        };
    },
    methods: {
        next() {
            if (this.active++ > 2) {
                this.active = 0;
            }
            if(this.step < 4) {
                this.step++;
            } else {
                this.step = 1;
            }
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        complete() {
            this.$router.push({path:'/'});
        }
    }
}
</script>


<style scoped>
.register {
    width: 60%;
    min-height: 500px;
    margin: 40px auto 0;
}

.register .register-body {
    margin-top: 40px;
}
</style>
