const ruleMethods = {
    checkMobile: (rule, value, callback) => {
        const reg =  /^1[3|4|5|7|8][0-9]{9}$/g;
        if(!(reg.test(value))){
            callback(new Error('手机号码有误，请重新输入！'));
        } else {
            if(mobileArray.indexOf(value) !== -1) {
                callback(new Error("此手机号已被使用，请重新输入！"));
            } else {
                callback();
            }
        }
    },
    checkVercode: (rule, value, callback) => {
        const reg =  /[0-9]{6}$/g;
        if(!(reg.test(value))){
            callback(new Error('验证码有误，请重填'));
        } else {
            callback();
        }
    },
    checkNickname: (rule, value, callback) => {
        const reg = /^[\w\u4e00-\u9fa5]{1,16}$/g;
        if(!(reg.test(value))){
            callback(new Error("昵称有误，请重新输入！"));
        } else {
            callback();
        }
    },
    checkEmail: (rule, value, callback) => {
        const reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/g;
        if(!(reg.test(value))){
            callback(new Error("邮箱有误，请重新输入！"));
        } else {
            callback();
        }
    },
    checkPassword: (rule, value, callback) => {
        const reg =  /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/g;
        if(!(reg.test(value))){
            callback(new Error("密码长度应为6到16，且包含字母与数字"));
        } else {
            callback();
        }
    },
    checkRepassword: (rule, value, callback) => {
        const reg =  /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/g;
        if(!(reg.test(value))){
            callback(new Error("密码长度应为6到16，且包含字母与数字"));
        } else {
            if(this.ruleForm.password !== value) {
                callback(new Error("两次输入的密码不一致，请核对或重新输入！"));
            } else {
                callback();
            }
        }
    },
    checkRealname: (rule, value, callback) => {
        const reg =/^[\u4e00-\u9fa5]{2,4}$/g;
        if(!(reg.test(value))){
            callback(new Error("请输入真实姓名"));
        } else {
            callback();
        }
    },
    checkIdcard: (rule, value, callback) => {
        const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/g;
        if(!(reg.test(value))){
            callback(new Error("请输入正确的身份证号"));
        } else {
            callback();
        }
    },
    checkBusinesslicense: (rule, value, callback) => {
        const reg = /(^\d{15}$)|(^\d{18}$)/g;
        if(!(reg.test(value))){
            callback(new Error("请输入15或者18位的纯数字营业许可证（营业执照）号"));
        } else {
            callback();
        }
    }
};


export const rules = {
    mobile: [{ validator: ruleMethods.checkMobile, trigger: 'blur' }],
    vercode: [{ validator: ruleMethods.checkVercode, trigger: 'blur' }],
    nickname: [{ validator: ruleMethods.checkNickname, trigger: 'blur' }],
    email: [{ validator: ruleMethods.checkEmail, trigger: 'blur' }],
    password: [{ validator: ruleMethods.checkPassword, trigger: 'blur' }],
    repassword: [{ validator: ruleMethods.checkRepassword, trigger: 'blur' }],
    realname: [{ validator: ruleMethods.checkRealname, trigger: 'blur' }],
    idcard: [{ validator: ruleMethods.checkIdcard, trigger: 'blur' }],
    businesslicense: [{ validator: ruleMethods.checkBusinesslicense, trigger: 'blur' }]
}
