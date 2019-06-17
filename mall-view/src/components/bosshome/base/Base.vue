<template>
    <div id="base-info-boss">
        <div class="top">
            <div class="top-left el-col-8">

                <el-form :model="bossinfo" ref="bossinfo" label-width="70px" class="demo-ruleForm">
                    <el-form-item label="昵称" prop="nickname">
                        <el-input v-model="bossinfo.nickname" @change="update('nickname')" minlength="2" maxlength="20" show-word-limit></el-input>
                    </el-form-item>

                    <el-form-item label="性别" prop="gender">
                        <el-radio-group v-model="bossinfo.gender" @change="update('gender')" >
                            <el-radio label="男"></el-radio>
                            <el-radio label="女"></el-radio>
                            <el-radio label="保密"></el-radio>
                        </el-radio-group>
                    </el-form-item>

                    <el-form-item label="生日" prop="birthday">
                        <el-input v-model="bossinfo.birthday" @change="update('birthday')"></el-input>
                    </el-form-item>

                    <el-form-item label="邮箱" prop="email">
                        <el-input v-model="bossinfo.email" @change="update('email')"></el-input>
                    </el-form-item>

                    <el-form-item label="手机" prop="mobile">
                        <el-input v-model="bossinfo.mobile" @change="update('mobile')"></el-input>
                    </el-form-item>

                    <el-form-item label="QQ" prop="qq">
                        <el-input v-model="bossinfo.qq" @change="update('qq')"></el-input>
                    </el-form-item>

                    <el-form-item label="微信" prop="wechat">
                        <el-input v-model="bossinfo.wechat" @change="update('wechat')"></el-input>
                    </el-form-item>

                    <el-form-item label="微博" prop="weibo">
                        <el-input v-model="bossinfo.weibo" @change="update('weibo')"></el-input>
                    </el-form-item>

                    <el-form-item label="个性签名" prop="bio">
                        <el-input v-model="bossinfo.bio" @change="update('bio')" type="textarea" maxlength="100" :autosize="{minRows: 2, maxRows: 4}" placeholder="请输入内容" show-word-limit></el-input>
                    </el-form-item>
                </el-form>
            </div>

            <div class="top-middle" :style="{backgroundImage: 'url(' + require('../../../' + src) + ')' }"></div>

            <div class="top-right">

                <div class="info-right">
                    <span class="title"> 注册时间：</span>
                    <input :placeholder="bossinfo.register_time" type="text" class="data_mobile bg-light" value="" disabled="">
                </div>
                <div class="info-right">
                    <span class="title"> ID：</span>
                    <input :placeholder="bossinfo.boss_id"  type="text" value="" disabled="true">
                </div>
                <div class="info-right">
                    <span class="title"> 用户名：</span>
                    <input :placeholder="bossinfo.username" type="text" value="" disabled="true">
                </div>
                <div class="info-right">
                    <span class="title"> 实名：</span>
                    <input :placeholder="bossinfo.realname"  type="text" class="data_mobile bg-light" value="" disabled>
                </div>
                <div class="info-right">
                    <span class="title"> 身份证号：</span>
                    <input :placeholder="bossinfo.idcard"  type="text" class="data_mobile bg-light" value="" disabled>
                </div>
                <div class="info-right">
                    <span class="title"> 营业执照：</span>
                    <input :placeholder="bossinfo.businesslicense"  type="text" class="data_mobile bg-light" value="" disabled>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    name: 'base-info-boss',
    data() {
        return {
            radio: 3,
            bossinfo: {},
            src: '',
            rules: []
        }
    },
    methods: {
        update(token) {
            switch(token) {
                case 'nickname':
                    this.changeInfo(token, this.bossinfo.nickname);
                    break;
                case 'gender':
                    this.changeInfo(token, this.bossinfo.gender);
                    break;
                case 'birthday':
                    this.changeInfo(token, this.bossinfo.birthday);
                    break;
                case 'email':
                    this.changeInfo(token, this.bossinfo.email);
                    break;
                case 'mobile':
                    this.changeInfo(token, this.bossinfo.mobile);
                    break;
                case 'qq':
                    this.changeInfo(token, this.bossinfo.qq);
                    break;
                case 'wechat':
                    this.changeInfo(token, this.bossinfo.wechat);
                    break;
                case 'weibo':
                    this.changeInfo(token, this.bossinfo.weibo);
                    break;
                case 'bio':
                    this.changeInfo(token, this.bossinfo.bio);
                    break;
            }
        },
        changeInfo(token, value) {
            const id = this.$session.getAll().userinfo.id;
            axios({
                method: 'post',
                url: '/api/view/update-boss-info',
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
            this.$session.set('userinfo', this.bossinfo);
        }
    },
    created() {
        if(this.$session.exists()) {
            const bossinfo = this.$session.getAll().userinfo;
            this.bossinfo = bossinfo;
            const url = bossinfo.avatar_url;
            this.src = url.substring(url.length - 23);
            this.$message({
                showClose: true,
                message: '个人信息自动保存',
                type: 'warning'
            })
        } else {
            this.src = 'assets/tt.png';
            this.$message({
                showClose: true,
                message: '尚未登陆，请登录',
                type: 'warning'
            })
            this.$router.push("/");
        }
    }
}
</script>


<style scoped>
.top .top-left {
    float: left;
}
.el-input, .el-textarea {
    width: 100%;
}


/* top-middle */
.top-middle {
    width: 144px;
    height: 144px;
    float: left;
    margin-left: 100px;
    border: 1px solid #FFFFFF;
    border-radius: 50%;
    background-size: cover;
}


/* top-right */
.top-right {
    float: right;
}
.title-right, .info-right {
    margin-bottom: 10px;
}
input {
    display: inline-block;
    border: 0;
    width: 315px;
    margin-right: 0.5rem;
}
.title {
    display: inline-block;
    width: 90px;
    font-size: 18px;
    text-align: right;
    font-weight: 700;
}
span {
    color: orangered;
}
</style>
