<template id="">
    <div id="create">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
            <el-form-item label="店铺名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>

            <el-form-item label="店铺分类" prop="type">
                <el-select v-model="ruleForm.type" placeholder="请选择店铺类别">
                    <el-option label="生活" value="生活"></el-option>
                    <el-option label="运动" value="运动"></el-option>
                    <el-option label="知识" value="知识"></el-option>
                    <el-option label="科技" value="科技"></el-option>
                    <el-option label="娱乐" value="娱乐"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="店铺性质" prop="nature">
                <el-radio-group v-model="ruleForm.nature">
                    <el-radio label="转售"></el-radio>
                    <el-radio label="直销"></el-radio>
                    <el-radio label="代理"></el-radio>
                    <el-radio label="其它"></el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            ruleForm: {
                name: '',
                type: '',
                nature: '',
            },
            rules: {
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
                ],
                type: [
                    { required: true, message: '请选择活动区域', trigger: 'change' }
                ],
                nature: [
                    { required: true, message: '请选择活动资源', trigger: 'change' }
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    const session = this.$session.getAll();
                    if(session.token === 'boss') {
                        const data = {
                            boss_id: session.userinfo.boss_id,
                            boss_name: session.userinfo.username,
                            name: this.ruleForm.name,
                            type: this.ruleForm.type,
                            nature: this.ruleForm.nature
                        }
                        axios({
                            url: '/api/view/addstore',
                            method: 'post',
                            data: data
                        })
                            .then(res => {
                                if(res.status === 200) {
                                    if(res.data.msg === '恭喜你，创建成功！') {
                                        this.$message({
                                            showClose: true,
                                            message: res.data.msg,
                                            type: 'success'
                                        });
                                    } else {
                                        this.$message({
                                            showClose: true,
                                            message: res.data.msg,
                                            type: 'error'
                                        });
                                    }

                                }

                            })
                    } else {
                        this.$message({
                            showClose: true,
                            message: '尚未登陆/或权限不足，不能创建店铺！',
                            type: 'error'
                        });
                    }

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
#create {
    margin-left: 40px;
}
</style>
