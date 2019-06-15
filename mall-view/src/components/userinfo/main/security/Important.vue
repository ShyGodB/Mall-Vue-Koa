<template>
    <div id="important">
        <el-row>
            <el-col :span="12">
                <el-form :model="godinfo" status-icon :rules="rules" ref="godinfo" label-width="100px" class="demo-godinfo">
                    <el-form-item label="身份证号" prop="idcard">
                        <el-input v-model="godinfo.idcard" @change="update('idcard')"></el-input>
                    </el-form-item>

                    <el-form-item label="邮箱" prop="email">
                        <el-input v-model="godinfo.email" @change="update('email')"></el-input>
                    </el-form-item>

                    <el-form-item label="手机" prop="mobile">
                        <el-input v-model="godinfo.mobile" @change="update('mobile')"></el-input>
                    </el-form-item>

                    <el-form-item label="微信" prop="wechat">
                        <el-input v-model="godinfo.wechat" @change="update('wechat')"></el-input>
                    </el-form-item>

                    <el-form-item label="QQ" prop="qq">
                        <el-input v-model="godinfo.qq" @change="update('qq')"></el-input>
                    </el-form-item>

                    <el-form-item label="微博" prop="weibo">
                        <el-input v-model="godinfo.weibo" @change="update('weibo')"></el-input>
                    </el-form-item>
                </el-form>
            </el-col>

            <el-col :span="12">
                <div class="avatar" :style="{backgroundImage: 'url(' + require('../../../../' + img) + ')' }" ref="pic">

                </div>
            </el-col>
        </el-row>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    name: 'important',
    data() {
        return {
            godinfo: {},
            img: '',
            rules: {
                idcard: [
                    { required: true, message: '请输入身份证号', trigger: 'blur' },
                    { min: 18, max: 18, message: '长度为 18 个字符', trigger: 'blur' }
                ],
                email: [
                    { required: true, message: '请输入身份证号', trigger: 'blur' }
                ],
                mobile: [
                    { required: true, message: '请输入身份证号', trigger: 'blur' }
                ],
                wechat: [
                    { required: true, message: '请输入身份证号', trigger: 'blur' }
                ],
                qq: [
                    { required: true, message: '请输入身份证号', trigger: 'blur' }
                ],
                weibo: [
                    { required: true, message: '请输入身份证号', trigger: 'blur' }
                ]
            },
            options: ['小学', '初中', '高中', '中专','大专','本科', '硕士', '博士','博士后', '保密']
        };
    },
    methods: {
        update(token) {
            switch (token) {
                case 'idcard':
                    if(this.godinfo.email !== '') {
                        this.changeInfo(token, this.godinfo.idcard);
                    }
                    break;
                case 'email':
                    if(this.godinfo.email !== '') {
                        this.changeInfo(token, this.godinfo.email);
                    }
                    break;
                case 'mobile':
                    if(this.godinfo.mobile !== '') {
                        this.changeInfo(token, this.godinfo.mobile);
                    }
                    break;
                case 'qq':
                    if(this.godinfo.qq !== '') {
                        this.changeInfo(token, this.godinfo.qq);
                    }
                    break;
                case 'wechat':
                    if(this.godinfo.wechat !== '') {
                        this.changeInfo(token, this.godinfo.wechat);
                    }
                    break;
                case 'weibo':
                    if(this.godinfo.weibo !== '') {
                        this.changeInfo(token, this.godinfo.weibo);
                    }
                    break;
            }
        },
        changeInfo(token, value) {
            const id = this.$session.getAll().userinfo.id;
            axios({
                method: 'post',
                url: '/api/view/update-god-info',
                data: {
                    id: id,
                    token: token,
                    value: value
                }
            }).then(res => {
                if(res.status === 200 && res.data.msg === '修改成功') {
                    this.updateSession();
                    this.$message({
                        showClose: true,
                        message: '恭喜你！' + res.data.msg + '！',
                        type: 'success'
                    })
                }
            })
        },
        updateSession() {
            this.$session.set('userinfo', this.godinfo);
        }
    },
    created() {
        if(this.$session.exists()) {
            const godinfo = this.$session.getAll().userinfo;
            this.godinfo = godinfo;
            const url = godinfo.avatar_url;
            this.img = url.substring(url.length - 22);
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
.avatar {
    width: 144px;
    height: 144px;
    margin: 20px auto;
    border: 1px solid #ffffff;
    border-radius: 50%;
    background-image: url(../../../../../public/img/tt.png);
    background-size: 144px 144px;
}
</style>
