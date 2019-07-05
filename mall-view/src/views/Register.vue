<template>
    <div class="register">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane id="god" label="用户注册" name="first">
                <div class="register-god">
                    <div class="register-step">
                        <el-steps :active="activeGod" finish-status="success">
                            <el-step title="验证手机号"></el-step>
                            <el-step title="填写账号信息"></el-step>
                            <el-step title="注册成功"></el-step>
                        </el-steps>
                    </div>

                    <div class="register-body" v-if="activeGod == 0">
                        <el-form :model="ruleForm" :rules="godrules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="手机" prop="mobile">
                                <el-input v-model="ruleForm.mobile" maxlength="11" autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item label="验证码" prop="vercode">
                                <el-input v-model="ruleForm.vercode" maxlength="6" autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item>
                                <el-button @click="nextGod" type="primary" :disabled="notClick1">下一步</el-button>
                            </el-form-item>
                        </el-form>
                    </div>

                    <div class="register-body" v-if="activeGod == 1">
                        <el-form :model="ruleForm" :rules="godrules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="用户名" prop="username">
                                <el-input type="text" v-model="ruleForm.username" maxlength="16" autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item label="邮箱" prop="email">
                                <el-input type="text" v-model="ruleForm.email" autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item label="密码" prop="password" v-if="activeGod === 999">
                                <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item label="密码" prop="password">
                                <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item label="确认密码" prop="repassword">
                                 <el-input type="password" v-model="ruleForm.repassword" autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item>
                                <el-button @click="nextGod" type="primary" :disabled="notClick2">下一步</el-button>
                            </el-form-item>
                        </el-form>
                    </div>

                    <div class="register-body success" v-if="activeGod === 2">
                        <h2> ^_^ 恭喜你！注册成功！</h2>
                        <el-button style="margin-top:12px;" @click="complete">完成</el-button>
                    </div>
                </div>
            </el-tab-pane>

            <el-tab-pane id="boss" label="商家注册" name="second">
                <div class="register-god">
                    <div class="register-step">
                        <el-steps :active="activeBoss" finish-status="success">
                            <el-step title="验证手机号"></el-step>
                            <el-step title="填写账号信息"></el-step>
                            <el-step title="实名信息"></el-step>
                            <el-step title="注册成功"></el-step>
                        </el-steps>
                    </div>

                    <div class="register-body" v-if="activeBoss === 0">
                        <el-form :model="ruleForm" :rules="bossrules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="手机" prop="mobile">
                                <el-input v-model="ruleForm.mobile" maxlength="11" autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item label="验证码" prop="vercode">
                                <el-input v-model="ruleForm.vercode" maxlength="6" autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item>
                                <el-button @click="nextBoss" type="primary" :disabled="noClick1">下一步</el-button>
                            </el-form-item>
                        </el-form>
                    </div>

                    <div class="register-body" v-if="activeBoss === 1">
                        <el-form :model="ruleForm" :rules="bossrules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="用户名" prop="username">
                                <el-input type="text" v-model="ruleForm.username" maxlength="16" autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item label="邮箱" prop="email">
                                <el-input type="text" v-model="ruleForm.email" autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item label="密码" prop="password" v-if="activeBoss === 999">
                                <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item label="密码" prop="password">
                                <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item label="确认密码" prop="repassword">
                                 <el-input type="password" v-model="ruleForm.repassword" autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item>
                                <el-button @click="nextBoss" type="primary" :disabled="noClick2">下一步</el-button>
                            </el-form-item>
                        </el-form>
                    </div>

                    <div class="register-body" v-if="activeBoss === 2">
                        <el-form :model="ruleForm" :rules="bossrules" ref="ruleForm" label-width="100px" class="real">
                            <el-form-item label="真实姓名" prop="realname">
                                <el-input type="text" v-model="ruleForm.realname" autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item label="身份证号" prop="idcard">
                                <el-input type="text" v-model="ruleForm.idcard" maxlength="18" autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item label="营业许可证号" prop="businesslicense" v-if="activeBoss === 999">
                                <el-input type="text" v-model="ruleForm.businesslicense" maxlength="18" autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item label="营业许可证号" prop="businesslicense">
                                <el-input type="text" v-model="ruleForm.businesslicense" maxlength="18" autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item>
                                <el-button @click="nextBoss" type="primary" :disabled="noClick3">下一步</el-button>
                            </el-form-item>
                        </el-form>
                    </div>

                    <div class="register-body success" v-if="activeBoss === 3">
                        <h2> ^_^ 恭喜你！注册成功！</h2>
                        <el-button style="margin-top:12px;" @click="complete">完成</el-button>
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>


<script>
import axios from 'axios'
import md5 from 'md5'

export default {
    inject: ['reload'],
    name: 'regist-login',
    data() {
        const calculateMethods = {
            listMobile: () => {
                let mobileArray = [];
                const array = this.existUserArray;
                for(let i = 0; i < array.length; i++) {
                    mobileArray.push(array[i].mobile);
                }
                return mobileArray;
            },

            listUsername: () => {
                let usernameArray = [];
                const array = this.existUserArray;
                for(let i = 0; i < array.length; i++) {
                    usernameArray.push(array[i].username);
                }
                return usernameArray;
            },

            listEmail: () => {
                let emailArray = [];
                const array = this.existUserArray;
                for(let i = 0; i < array.length; i++) {
                    emailArray.push(array[i].email);
                }
                return emailArray;
            },

            listIdcard: () => {
                let idcardArray = [];
                const array = this.existUserArray;
                for(let i = 0; i < array.length; i++) {
                    idcardArray.push(array[i].idcard);
                }
                return idcardArray;
            },

            listBusinesslicense: () => {
                let busineslicenseArray = [];
                const array = this.existUserArray;
                for(let i = 0; i < array.length; i++) {
                    busineslicenseArray.push(array[i].busineslicense);
                }
                return busineslicenseArray;
            }

        };
        const addUser = {
            addGod: (data) => {
                axios({
                    url: '/api/view/addGod',
                    method: 'post',
                    data: {
                        usertype: 'god',
                        value: data
                    }
                }).then(res => {
                    if(res.status === 200) {
                        this.$session.start()
                        this.$session.set('token', res.data.token);
                        this.$session.set('userinfo', res.data.body);
                        this.reload();
                        // this.$router.push('/');
                    }
                })
            },

            addBoss: (data) => {
                axios({
                    url: '/api/view/addBoss',
                    method: 'post',
                    data: {
                        name: 'boss',
                        value: data
                    }
                }).then(res => {
                    if(res.status === 200) {
                        this.$session.start()
                        this.$session.set('token', res.data.token);
                        this.$session.set('userinfo', res.data.body);
                        this.reload();
                        // this.$router.push('/');
                    }
                })
            }
        }
        const godMethods = {
            checkMobile: (rule, value, callback) => {
                const mobileArray = calculateMethods.listMobile();
                const reg =  /^1[3|4|5|7|8][0-9]{9}$/g;
                if(!(reg.test(value))){
                    callback(new Error('手机号码有误，请重填'));
                } else {
                    if(mobileArray.indexOf(value) !== -1) {
                        callback(new Error("此手机号已被使用，请重新输入！"));
                    } else {
                        this.ruleForm.mobile = value;
                        this.god.mobile = value;
                        if(this.ruleForm.vercode.length === 6) {
                            this.notClick1 = false;
                            this.nextGod();
                        }
                        callback();
                    }
                }
            },
            checkVercode: (rule, value, callback) => {
                const reg =  /[0-9]{6}$/g;
                if(!(reg.test(value))){
                    callback(new Error('验证码有误，请重填'));
                } else {
                    this.ruleForm.vercode = value;
                    if(this.ruleForm.mobile.length === 11) {
                        this.notClick1 = false;
                        this.nextGod();
                    }
                    callback();
                }
            },
            checkUsername: (rule, value, callback) => {
                const usernameArray = calculateMethods.listUsername();
                const reg = /^[\w\u4e00-\u9fa5]{1,16}$/g;
                if(!(reg.test(value))){
                    callback(new Error("昵称有误，请重填"));
                } else {
                    if(usernameArray.indexOf(value) !== -1) {
                        callback(new Error("此昵称已被占用，请重新输入！"));
                    } else {
                        this.ruleForm.username = value;
                        this.god.username = value;
                        if(    this.ruleForm.email.length !==0
                            && this.ruleForm.password.length !== 0
                            && this.ruleForm.repassword.length !== 0
                            && this.ruleForm.password === this.ruleForm.repassword) {
                                this.notClick2 = false;
                                this.nextGod();
                                addUser.addGod(this.god);
                            }
                        callback();
                    }
                }
            },
            checkEmail: (rule, value, callback) => {
                const emailArray = calculateMethods.listEmail();
                const reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/g;
                if(!(reg.test(value))){
                    callback(new Error("邮箱有误，请重填"));
                } else {
                    if(emailArray.indexOf(value) !== -1) {
                        callback(new Error("此邮箱已被占用，请重新输入！"));
                    } else {
                        this.ruleForm.email = value;
                        this.god.email = value;
                        if(    this.ruleForm.username.length !==0
                            && this.ruleForm.password.length !== 0
                            && this.ruleForm.repassword.length !== 0
                            && this.ruleForm.password === this.ruleForm.repassword) {
                                this.notClick2 = false;
                                this.nextGod();
                                addUser.addGod(this.god);
                            }
                        callback();
                    }
                }
            },
            checkPassword: (rule, value, callback) => {
                console.log(value)
                const reg =  /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/g;
                if(!(reg.test(value))){
                    callback(new Error("密码长度应为6到16，且包含字母与数字"));
                } else {
                    this.ruleForm.password = value;
                    this.god.password = md5(value);
                    if(    this.ruleForm.email.length !==0
                        && this.ruleForm.password.length !== 0
                        && this.ruleForm.repassword.length !== 0) {
                            this.notClick2 = false;
                            this.nextGod();
                            addUser.addGod(this.god);
                        }
                    callback();
                }
            },
            checkRepassword: (rule, value, callback) => {
                const reg =  /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/g;
                if(!(reg.test(value))){
                    callback(new Error("密码长度应为6到16，且包含字母与数字"));
                } else {
                    this.ruleForm.repassword = value;
                    this.god.repassword = md5(value);
                    if(this.ruleForm.password !== value) {
                        callback(new Error("两次输入的密码不一致，请核对或重新输入！"));
                    } else {
                        if(    this.ruleForm.email.length !==0
                            && this.ruleForm.password.length !== 0
                            && this.ruleForm.password.length !== 0) {
                                this.notClick2 = false;
                                this.nextGod();
                                addUser.addGod(this.god);
                            }
                        callback();
                    }
                }
            }
        };
        const bossMethods = {
            checkMobile: (rule, value, callback) => {
                const mobileArray = calculateMethods.listMobile();
                const reg =  /^1[3|4|5|7|8][0-9]{9}$/g;
                if(!(reg.test(value))){
                    callback(new Error('手机号码有误，请重新输入！'));
                } else {
                    if(mobileArray.indexOf(value) !== -1) {
                        callback(new Error("此手机号已被使用，请重新输入！"));
                    } else {
                        this.ruleForm.mobile = value;
                        this.boss.mobile = value;
                        if(this.ruleForm.vercode.length === 6) {
                            this.noClick1 = false;
                            this.nextBoss();
                        }
                        callback();
                    }
                }
            },
            checkVercode: (rule, value, callback) => {
                const reg =  /[0-9]{6}$/g;
                if(!(reg.test(value))){
                    callback(new Error('验证码有误，请重填'));
                } else {
                    this.ruleForm.vercode = value;
                    if(this.ruleForm.mobile.length === 11) {
                        this.noClick1 = false;
                        this.nextBoss();
                    }
                    callback();
                }
            },
            checkUsername: (rule, value, callback) => {
                const usernameArray = calculateMethods.listUsername();
                const reg = /^[\w\u4e00-\u9fa5]{1,16}$/g;
                if(!(reg.test(value))){
                    callback(new Error("昵称有误，请重新输入！"));
                } else {
                    if(usernameArray.indexOf(value) !== -1) {
                        callback(new Error("此昵称已被占用，请重新输入！"));
                    } else {
                        this.ruleForm.username = value;
                        this.boss.username = value;
                        if(    this.ruleForm.email.length !==0
                            && this.ruleForm.password.length !== 0
                            && this.ruleForm.repassword.length !== 0
                            && this.ruleForm.password === this.ruleForm.repassword) {
                                this.noClick2 = false;
                                this.nextBoss();
                            }
                        callback();
                    }
                }
            },
            checkEmail: (rule, value, callback) => {
                const emailArray = calculateMethods.listEmail();
                const reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/g;
                if(!(reg.test(value))){
                    callback(new Error("邮箱有误，请重新输入！"));
                } else {
                    if(emailArray.indexOf(value) !== -1) {
                        callback(new Error("此邮箱已被占用，请重新输入！"));
                    } else {
                        this.ruleForm.email = value;
                        this.boss.email = value;
                        if(    this.ruleForm.username.length !==0
                            && this.ruleForm.password.length !== 0
                            && this.ruleForm.repassword.length !== 0
                            && this.ruleForm.password === this.ruleForm.repassword) {
                                this.noClick2 = false;
                                this.nextBoss();
                            }
                        callback();
                    }
                }
            },
            checkPassword: (rule, value, callback) => {
                const reg =  /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/g;
                if(!(reg.test(value))){
                    callback(new Error("密码长度应为6到16，且包含字母与数字"));
                } else {
                    this.ruleForm.password = value;
                    this.boss.password = md5(value);
                    if(    this.ruleForm.email.length !==0
                        && this.ruleForm.password.length !== 0
                        && this.ruleForm.password.length !== 0) {
                            this.noClick2 = false;
                            this.nextBoss();
                        }
                    callback();
                }
            },
            checkRepassword: (rule, value, callback) => {
                const reg =  /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/g;
                if(!(reg.test(value))){
                    callback(new Error("密码长度应为6到16，且包含字母与数字"));
                } else {
                    this.ruleForm.repassword = value;
                    this.boss.repassword = md5(value);
                    if(this.ruleForm.password !== value) {
                        callback(new Error("两次输入的密码不一致，请核对或重新输入！"));
                    } else {
                        if(    this.ruleForm.email.length !==0
                            && this.ruleForm.password.length !== 0
                            && this.ruleForm.password.length !== 0) {
                                this.noClick2 = false;
                                this.nextBoss();
                            }
                        callback();
                    }
                }
            },
            checkRealname: (rule, value, callback) => {
                const reg =/^[\u4e00-\u9fa5]{2,4}$/g;
                if(!(reg.test(value))){
                    callback(new Error("请输入真实姓名"));
                } else {
                    this.ruleForm.realname = value;
                    this.boss.realname = value;
                    if( this.ruleForm.idcard.length !== 0 && this.ruleForm.businesslicense.length) {
                        this.noClick3 = false;
                        addUser.addBoss(this.boss);
                        this.nextBoss();
                    }
                    callback();
                }
            },
            checkIdcard: (rule, value, callback) => {
                const idcardArray = calculateMethods.listIdcard();
                const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/g;
                if(!(reg.test(value))){
                    callback(new Error("请输入正确的身份证号"));
                } else {
                    if(idcardArray.indexOf(value) !== -1) {
                        callback(new Error("此身份证已经注册过了，请重新输入！有疑问请联系客服！"));
                    } else {
                        this.ruleForm.idcard = value;
                        this.boss.idcard = value;
                        if( this.ruleForm.realname.length !== 0 && this.ruleForm.businesslicense.length) {
                            this.noClick3 = false;
                            addUser.addBoss(this.boss);
                            this.nextBoss();
                        }
                        callback();
                    }
                }
            },
            checkBusinesslicense: (rule, value, callback) => {
                const businesslicenseArray = calculateMethods.listBusinesslicense();
                const reg = /(^\d{15}$)|(^\d{18}$)/g;
                if(!(reg.test(value))){
                    callback(new Error("请输入15或者18位的纯数字营业许可证（营业执照）号"));
                } else {
                    if(businesslicenseArray.indexOf(value) !== -1) {
                        callback(new Error("此营业许可证号已经注册过了，请重新输入！有疑问？联系客服！"));
                    } else {
                        this.ruleForm.businesslicense = value;
                        this.boss.businesslicense = value;
                        if( this.ruleForm.realname.length !== 0 && this.ruleForm.idcard.length) {
                            addUser.addBoss(this.boss);
                            this.noClick3 = false;
                            this.nextBoss();
                        }
                        callback();
                    }
                }
            }
        };
        return {
            ruleForm: {
                mobile: '',
                vercode: '',
                username: '',
                email: '',
                password: '',
                repassword: '',
                realname: '',
                idcard: '',
                businesslicense: ''
            },
            godrules: {
                mobile: [{ validator: godMethods.checkMobile, trigger: 'blur' }],
                vercode: [{ validator: godMethods.checkVercode, trigger: 'blur' }],
                username: [{ validator: godMethods.checkUsername, trigger: 'blur' }],
                email: [{ validator: godMethods.checkEmail, trigger: 'blur' }],
                password: [{ validator: godMethods.checkPassword, trigger: 'blur' }],
                repassword: [{ validator: godMethods.checkRepassword, trigger: 'blur' }]
            },
            bossrules: {
                mobile: [{ validator: bossMethods.checkMobile, trigger: 'blur' }],
                vercode: [{ validator: bossMethods.checkVercode, trigger: 'blur' }],
                username: [{ validator: bossMethods.checkUsername, trigger: 'blur' }],
                email: [{ validator: bossMethods.checkEmail, trigger: 'blur' }],
                password: [{ validator: bossMethods.checkPassword, trigger: 'blur' }],
                repassword: [{ validator: bossMethods.checkRepassword, trigger: 'blur' }],
                realname: [{ validator: bossMethods.checkRealname, trigger: 'blur' }],
                idcard: [{ validator: bossMethods.checkIdcard, trigger: 'blur' }],
                businesslicense: [{ validator: bossMethods.checkBusinesslicense, trigger: 'blur' }]
            },
            activeName: 'second',
            activeBoss: 0,
            activeGod: 0,
            noClick1: false,
            noClick2: false,
            noClick3: false,
            notClick1: false,
            notClick2: false,
            existBossArray: [],
            existGodArray: [],
            existUserArray: [],
            god: {},
            boss: {}
        };
    },
    methods: {
        handleClick(tab, event) {
            this.ruleForm = {
                mobile: '',
                vercode: '',
                username: '',
                email: '',
                password: '',
                repassword: '',
                realname: '',
                idcard: '',
                businesslicense: ''
            };
            this.boss = {};
            this.god = {};
        },
        nextBoss() {
            this.activeBoss++;
        },
        nextGod() {
            this.activeGod++;
        },
        complete() {
            this.$router.push({path:'/'});
        }
    },
    created() {
        axios({
            url: '/api/view/listAllUser',
            method: 'post',
        })
            .then(res => {
                console.log(res)
                this.existGodArray = res.data.god;
                this.existBossArray = res.data.boss;
                this.existUserArray =res.data.god.concat(res.data.boss);
            })
    }
}
</script>


<style scoped>
#god, #boss {
    margin-top: 20px;
}
.register {
    width: 60%;
    min-height: 500px;
    margin: 40px auto 0;
}
.register .register-body {
    margin-top: 40px;
}
</style>
