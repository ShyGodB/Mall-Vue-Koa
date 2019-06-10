const ruleMethods = {
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


export const rules = {
    mobile: [{ validator: ruleMethods.checkMobile, trigger: 'blur' }],
    vercode: [{ validator: ruleMethods.checkVercode, trigger: 'blur' }],
    username: [{ validator: ruleMethods.checkUsername, trigger: 'blur' }],
    email: [{ validator: ruleMethods.checkEmail, trigger: 'blur' }],
    password: [{ validator: ruleMethods.checkPassword, trigger: 'blur' }],
    repassword: [{ validator: ruleMethods.checkRepassword, trigger: 'blur' }],
    realname: [{ validator: ruleMethods.checkRealname, trigger: 'blur' }],
    idcard: [{ validator: ruleMethods.checkIdcard, trigger: 'blur' }],
    businesslicense: [{ validator: ruleMethods.checkBusinesslicense, trigger: 'blur' }]
}
