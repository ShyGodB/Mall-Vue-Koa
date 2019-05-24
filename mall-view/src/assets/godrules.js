const godMethods = {
    checkMobile: (rule, value, callback) => {
        const reg =  /^1[3|4|5|7|8][0-9]{9}$/g;
        if(!(reg.test(value))){
            callback(new Error('手机号码有误，请重填'));
        } else {
            this.ruleForm.mobile = value;
            callback();
        }
    },
    checkVercode: (rule, value, callback) => {
        console.log(rule);
        const reg =  /[0-9]{6}$/g;
        if(!(reg.test(value))){
            callback(new Error('验证码有误，请重填'));
        } else {
            this.ruleForm.vercode = value;
            callback();
        }
    },
    checkNickname: (rule, value, callback) => {
        const reg = /^[\w\u4e00-\u9fa5]{6,16}$/g;
        if(!(reg.test(value))){
            callback(new Error("昵称有误，请重填"));
        } else {
            this.ruleForm.nickname = value;
            callback();
        }
    },
    checkEmail: (rule, value, callback) => {
        const reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/g;
        if(!(reg.test(value))){
            callback(new Error("邮箱有误，请重填"));
        } else {
            this.ruleForm.email = value;
            callback();
        }
    },
    checkPassword: (rule, value, callback) => {
        console.log(1111)
        const reg =  /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/g;
        if(!(reg.test(value))){
            console.log(2222)
            callback(new Error("密码长度应为6到16，且包含字母与数字"));
        } else {
            console.log(3333)
            this.ruleForm.password = value;
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
                callback();
            }
        }
    },
};

export default {
    mobile: [{ validator: godMethods.checkMobile, trigger: 'blur' }],
    vercode: [{ validator: godMethods.checkVercode, trigger: 'blur' }],
    nickname: [{ validator: godMethods.checkNickname, trigger: 'blur' }],
    email: [{ validator: godMethods.checkEmail, trigger: 'blur' }],
    password: [{ validator: godMethods.checkPassword, trigger: 'blur' }],
    repassword: [{ validator: godMethods.checkRepassword, trigger: 'blur' }]
};
