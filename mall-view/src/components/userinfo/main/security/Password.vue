<template>
    <div class="password">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="旧密码" prop="old">
                <el-input type="password" v-model="ruleForm.old" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="新密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>


<script>
import axios from 'axios'
import md5 from 'md5'

export default {
    data() {
        const checkOld = (rule, value, callback) => {
            axios({
                method: 'post',
                url: '/api/view/update-god-password',
                data: {
                    token: '验证',
                    id: this.$session.getAll().userinfo.id,
                    password: md5(value)
                }
            }).then(res => {
                if(res.data.length === 0) {
                    callback(new Error('密码错误，请重新输入'));
                } else {
                    this.$message({
                        message: '输入正确，请继续！',
                        type: 'success'
                    })
                    this.num++;
                    callback();
                }
            })
        };
        const checkNew = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                this.num++;
                callback();
            }
        };
        const checkRe = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.pass) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                this.num++;
                callback();
            }
        };
        return {
            num: 0,
            ruleForm: {
                old: '',
                pass: '',
                checkPass: ''
            },
            rules: {
                old: [
                    { validator: checkOld, trigger: 'blur' }
                ],
                pass: [
                    { validator: checkNew, trigger: 'blur' }
                ],
                checkPass: [
                    { validator: checkRe, trigger: 'blur' }
                ],
            }
        }
    },
    methods: {
        submitForm(formName) {
            if(this.num !== 3) {
                this.resetForm('ruleForm');
                this.num = 0;
                this.$message({
                    message: '抱歉，信息错误，请重新输入！',
                    type: 'error'
                })
            } else {
                axios({
                    method: 'post',
                    url: '/api/view/update-god-password',
                    data: {
                        token: '修改',
                        id: this.$session.getAll().userinfo.id,
                        password: md5(this.ruleForm.checkPass)
                    }
                }).then(res => {
                    if(res.status === 200) {
                        this.$message({
                            message: '恭喜你！密码修改成功',
                            type: 'success'
                        })
                        this.resetForm('ruleForm');
                    }
                })
            }
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>


<style scoped>

</style>
