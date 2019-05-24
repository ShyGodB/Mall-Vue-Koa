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

                    <div class="register-body" v-if="stepGod === 1">
                        <el-form :model="ruleForm" :rules="godrules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="手机" prop="mobile">
                                <el-input v-model="ruleForm.mobile" maxlength="11" autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item label="验证码" prop="vercode">
                                <el-input v-model="ruleForm.vercode" maxlength="6" autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item>
                                <!-- <el-button @click="submitGod('mobile')">提交</el-button> -->
                                <el-button @click="nextGod" type="primary" :disabled="notClick1">下一步</el-button>
                            </el-form-item>
                        </el-form>
                    </div>

                    <div class="register-body" v-if="stepGod === 2">
                        <el-form :model="ruleForm" :rules="godrules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="昵称" prop="nickname">
                                <el-input type="text" v-model="ruleForm.nickname" maxlength="16" autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item label="邮箱" prop="email">
                                <el-input type="text" v-model="ruleForm.email" autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item label="密码" prop="password">
                                <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item label="确认密码" prop="repassword">
                                 <el-input type="password" v-model="ruleForm.repassword" autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item>
                                <!-- <el-button @click="submitGod('info')">提交</el-button> -->
                                <el-button @click="nextGod" type="primary" :disabled="notClick2">下一步</el-button>
                            </el-form-item>
                        </el-form>
                    </div>

                    <div class="register-body success" v-if="stepGod === 3">
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

                    <div class="register-body" v-if="stepBoss === 1">
                        <el-form :model="ruleForm" :rules="bossrules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="手机" prop="mobile">
                                <el-input v-model="ruleForm.mobile" maxlength="11" autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item label="验证码" prop="vercode">
                                <el-input v-model="ruleForm.vercode" maxlength="6" autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item>
                                <!-- <el-button @click="submitBoss('mobile')">提交</el-button> -->
                                <el-button @click="nextBoss" type="primary" :disabled="noClick1">下一步</el-button>
                            </el-form-item>
                        </el-form>
                    </div>

                    <div class="register-body" v-if="stepBoss === 2">
                        <el-form :model="ruleForm" :rules="bossrules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="昵称" prop="nickname">
                                <el-input type="text" v-model="ruleForm.nickname" maxlength="16" autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item label="邮箱" prop="email">
                                <el-input type="text" v-model="ruleForm.email" autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item label="密码" prop="password">
                                <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item label="确认密码" prop="repassword">
                                 <el-input type="password" v-model="ruleForm.repassword" autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item>
                                <!-- <el-button @click="submitBoss('info')">提交</el-button> -->
                                <el-button @click="nextBoss" type="primary" :disabled="noClick2">下一步</el-button>
                            </el-form-item>
                        </el-form>
                    </div>

                    <div class="register-body" v-if="stepBoss === 3">
                        <el-form :model="ruleForm" :rules="bossrules" ref="ruleForm" label-width="100px" class="real">
                            <el-form-item label="真实姓名" prop="realname">
                                <el-input type="text" v-model="ruleForm.realname" autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item label="身份证号" prop="idcard">
                                <el-input type="text" v-model="ruleForm.idcard" maxlength="18" autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item label="营业许可证号" prop="businesslicense">
                                <el-input type="text" v-model="ruleForm.businesslicense" maxlength="18" autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item>
                                <!-- <el-button @click="submitBoss('real')">提交</el-button> -->
                                <el-button @click="nextBoss" type="primary" :disabled="noClick3">下一步</el-button>
                            </el-form-item>
                        </el-form>
                    </div>

                    <div class="register-body success" v-if="stepBoss === 4">
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

            listNickname: () => {
                let nicknameArray = [];
                const array = this.existUserArray;
                for(let i = 0; i < array.length; i++) {
                    nicknameArray.push(array[i].nickname);
                }
                return nicknameArray;
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
        const adduser = {
            addGod: (data) => {
                axios({
                    url: '/api/view/addGod',
                    method: 'post',
                    data: {
                        name: 'god',
                        value: data
                    }
                });
            },

            addBoss: (data) => {
                axios({
                    url: '/api/view/addBoss',
                    method: 'post',
                    data: {
                        name: 'boss',
                        value: data
                    }
                });
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
            checkNickname: (rule, value, callback) => {
                const nicknameArray = calculateMethods.listNickname();
                const reg = /^[\w\u4e00-\u9fa5]{1,16}$/g;
                if(!(reg.test(value))){
                    callback(new Error("昵称有误，请重填"));
                } else {
                    if(nicknameArray.indexOf(value) !== -1) {
                        callback(new Error("此昵称已被占用，请重新输入！"));
                    } else {
                        this.ruleForm.nickname = value;
                        if(    this.ruleForm.email.length !==0
                            && this.ruleForm.password.length !== 0
                            && this.ruleForm.repassword.length !== 0
                            && this.ruleForm.password === this.ruleForm.repassword) {
                                this.notClick2 = false;
                                this.nextGod();
                                adduser.addGod(this.ruleForm);
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
                        if(    this.ruleForm.nickname.length !==0
                            && this.ruleForm.password.length !== 0
                            && this.ruleForm.repassword.length !== 0
                            && this.ruleForm.password === this.ruleForm.repassword) {
                                this.notClick2 = false;
                                this.nextGod();
                                adduser.addGod(this.ruleForm);
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
                    if(this.ruleForm.repassword !== value) {
                        callback(new Error("两次输入的密码不一致，请核对并重新输入！"));
                    } else {
                        if(    this.ruleForm.email.length !==0
                            && this.ruleForm.password.length !== 0
                            && this.ruleForm.password.length !== 0) {
                                this.notClick2 = false;
                                this.nextGod();
                                adduser.addGod(this.ruleForm);
                            }
                        callback();
                    }
                    callback();
                }
            },
            checkRepassword: (rule, value, callback) => {
                const reg =  /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/g;
                if(!(reg.test(value))){
                    callback(new Error("密码长度应为6到16，且包含字母与数字"));
                } else {
                    this.ruleForm.repassword = value
                    if(this.ruleForm.password !== value) {
                        callback(new Error("两次输入的密码不一致，请核对或重新输入！"));
                    } else {
                        if(    this.ruleForm.email.length !==0
                            && this.ruleForm.password.length !== 0
                            && this.ruleForm.password.length !== 0) {
                                this.notClick2 = false;
                                this.nextGod();
                                adduser.addGod(this.ruleForm);
                            }
                        callback();
                    }
                }
            },
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
            checkNickname: (rule, value, callback) => {
                const nicknameArray = calculateMethods.listNickname();
                const reg = /^[\w\u4e00-\u9fa5]{1,16}$/g;
                if(!(reg.test(value))){
                    callback(new Error("昵称有误，请重新输入！"));
                } else {
                    if(nicknameArray.indexOf(value) !== -1) {
                        callback(new Error("此昵称已被占用，请重新输入！"));
                    } else {
                        this.ruleForm.nickname = value;
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
                        if(    this.ruleForm.nickname.length !==0
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
                    if(this.ruleForm.repassword !== value) {
                        callback(new Error("两次输入的密码不一致，请核对并重新输入！"));
                    } else {
                        if(    this.ruleForm.email.length !==0
                            && this.ruleForm.password.length !== 0
                            && this.ruleForm.password.length !== 0) {
                                this.noClick2 = false;
                                this.next();
                            }
                        callback();
                    }
                    callback();
                }
            },
            checkRepassword: (rule, value, callback) => {
                const reg =  /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/g;
                if(!(reg.test(value))){
                    callback(new Error("密码长度应为6到16，且包含字母与数字"));
                } else {
                    this.ruleForm.repassword = value
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
                    if( this.ruleForm.idcard.length !== 0 && this.ruleForm.businesslicense.length) {
                        this.noClick3 = false;
                        addUser.addBoss(this.ruleForm);
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
                        if( this.ruleForm.realname.length !== 0 && this.ruleForm.businesslicense.length) {
                            this.noClick3 = false;
                            addUser.addBoss(this.ruleForm);
                            this.nextBoss();
                        }
                        callback();
                    }
                }
            },
            checkBusinesslicense: (rule, value, callback) => {
                console.log(value)
                const businesslicenseArray = calculateMethods.listBusinesslicense();
                const reg = /(^\d{15}$)|(^\d{18}$)/g;
                if(!(reg.test(value))){
                    callback(new Error("请输入15或者18位的纯数字营业许可证（营业执照）号"));
                } else {
                    if(businesslicenseArray.indexOf(value) !== -1) {
                        callback(new Error("此营业许可证号已经注册过了，请重新输入！有疑问？联系客服！"));
                    } else {
                        this.ruleForm.businesslicense = value;
                        if( this.ruleForm.realname.length !== 0 && this.ruleForm.idcard.length) {
                            console.log(this.ruleForm);
                            this.noClick3 = false;
                            addUser.addBoss(this.ruleForm);
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
                nickname: '',
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
                nickname: [{ validator: godMethods.checkNickname, trigger: 'blur' }],
                email: [{ validator: godMethods.checkEmail, trigger: 'blur' }],
                password: [{ validator: godMethods.checkPassword, trigger: 'blur' }],
                repassword: [{ validator: godMethods.checkRepassword, trigger: 'blur' }]
            },
            bossrules: {
                mobile: [{ validator: bossMethods.checkMobile, trigger: 'blur' }],
                vercode: [{ validator: bossMethods.checkVercode, trigger: 'blur' }],
                nickname: [{ validator: bossMethods.checkNickname, trigger: 'blur' }],
                email: [{ validator: bossMethods.checkEmail, trigger: 'blur' }],
                password: [{ validator: bossMethods.checkPassword, trigger: 'blur' }],
                repassword: [{ validator: bossMethods.checkRepassword, trigger: 'blur' }],
                realname: [{ validator: bossMethods.checkRealname, trigger: 'blur' }],
                idcard: [{ validator: bossMethods.checkIdcard, trigger: 'blur' }],
                businesslicense: [{ validator: bossMethods.checkBusinesslicense, trigger: 'blur' }]
            },
            activeName: 'first',
            stepBoss: 1,
            stepGod: 1,
            activeBoss: 0,
            activeGod: 0,
            noClick1: true,
            noClick2: true,
            noClick3: true,
            notClick1: true,
            notClick2: true,
            existBossArray: [],
            existGodArray: [],
            existUserArray: []
        };
    },
    methods: {
        handleClick(tab, event) {
            this.ruleForm = {
                mobile: '',
                vercode: '',
                nickname: '',
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
            if (this.activeBoss++ > 2) {
                this.activeBoss = 0;
            }
            if(this.stepBoss < 4) {
                this.stepBoss++;
            } else {
                this.stepBoss = 1;
            }
        },
        nextGod() {
            if (this.activeGod++ > 2) {
                this.activeGod = 0;
            }
            if(this.stepGod < 3) {
                this.stepGod++;
            } else {
                this.stepGod = 1;
            }
        },
        complete() {
            this.$router.push({path:'/'});
        }
    },
    async created() {
        axios({
            url: '/api/view/listAllUser',
            method: 'post',
        })
            .then(res => {
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
