<template>
    <div id="container">
        <div class="login-main">
            <!-- 登陆组件 -->
            <div class="login-box">
                <h3 class="login-box-title">
                    密码登录
                </h3>

                <div class="login-box-username">
                    <i class="el-icon-user-solid"></i>
                    <input type="text" v-model="form.username" placeholder=" 手机/用户名/邮箱"></input>
                </div>

                <div class="login-box-password">
                    <i class="el-icon-lock"></i>
                    <input type="password" v-model="form.password" placeholder=" 密码"></input>
                </div>

                <div class="login-button">
                    <button type="button" name="login-button" @click="login">登陆</button>
                </div>

                <div class="prompt">
                    <span class="password-forgot">忘记密码</span>
                    <span class="register-free">免费注册</span>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios'
import md5 from 'md5'

export default {
    inject: ['reload'],
    name: 'login',
    data() {
        return {
            form: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            const username = this.form.username;
            const password = md5(this.form.password);
            if(username.length === 0 || password.length === 0) {
                alert('账号密码均不能为空！')
            } else {
                const data = {
                    username: username,
                    password: password
                };
                axios({
                    url: '/api/view/login',
                    method: 'post',
                    data: data
                }).then(res => {
                        if(res.data.msg === '登录成功') {
                            this.$session.start()
                            this.$session.set('token', res.data.token);
                            this.$session.set('userinfo', res.data.body);
                            this.reload();
                            this.$router.push('/');
                        } else {
                            this.$message({
                                message: '登陆失败，账号或密码错误或者未注册',
                                type: 'error'
                            })
                        }
                    })
            }
        }
    }
}
</script>


<style scoped>
#container .login-main {
    width: 100%;
    margin-top: 40px;
    min-height: 570px;
    background-image: url(../../public/img/bg.png);
    background-size: 100%;
    position: relative;
}
#container .login-main .login-box {
    width: 20%;
    height: 300px;
    padding: 20px 30px;
    background: #FFFFFF;
    float: right;
    position: absolute;
    top: 60px;
    right: 100px;
}
#container .login-main .login-box h3 {
    display: block;
    margin-bottom: 30px;
}
#container .login-main .login-box i {
    margin-right: 10px;
}
#container .login-main input {
    width: 256px;
    height: 30px;
}
#container .login-main .login-box div {
    margin-bottom: 30px;
}
#container .login-main .login-box button {
    width: 100%;
    height: 40px;
    border: 1px solid #ff4400;
    border-radius: 6px;
    background: #ff4400;
    margin: 0 auto;
}
#container .login-main .login-box .prompt {
    float: right;
}
#container .login-main .login-box .password-forgot:hover {
    cursor: pointer;
    color: #ff4400;
}
#container .login-main .login-box .register-free:hover {
    cursor: pointer;
    color: #ff4400;
}
#container .login-main .login-box .prompt .password-forgot {
    margin: 10px;
}

/* 底部 */
#container .login-footer {
    margin-left: 30%;
    margin-top: 20px;
}
</style>
