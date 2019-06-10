<template>
    <div id="important">
        <el-row>
            <el-col :span="12">
                <el-form :model="godinfo" status-icon :rules="rules" ref="godinfo" label-width="100px" class="demo-godinfo">
                    <el-form-item label="身份证号">
                        <el-input v-model="godinfo.idcard" @change="update('idcard')"></el-input>
                    </el-form-item>

                    <el-form-item label="邮箱">
                        <el-input v-model="godinfo.email" @change="update('email')"></el-input>
                    </el-form-item>

                    <el-form-item label="手机">
                        <el-input v-model="godinfo.mobile" @change="update('mobile')"></el-input>
                    </el-form-item>

                    <el-form-item label="微信">
                        <el-input v-model="godinfo.wechat" @change="update('wechat')"></el-input>
                    </el-form-item>

                    <el-form-item label="QQ">
                        <el-input v-model="godinfo.qq" @change="update('qq')"></el-input>
                    </el-form-item>

                    <el-form-item label="微博">
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

            },
            options: ['小学', '初中', '高中', '中专','大专','本科', '硕士', '博士','博士后', '保密']
        };
    },
    methods: {
        update(token) {
            switch (token) {
                case 'idcard':
                    this.changeInfo(token, this.godinfo.idcard);
                    break;
                case 'email':
                    this.changeInfo(token, this.godinfo.email);
                    break;
                case 'mobile':
                    this.changeInfo(token, this.godinfo.mobile);
                    break;
                case 'qq':
                    this.changeInfo(token, this.godinfo.qq);
                    break;
                case 'wechat':
                    this.changeInfo(token, this.godinfo.wechat);
                    break;
                case 'weibo':
                    this.changeInfo(token, this.godinfo.weibo);
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
        const godinfo = this.$session.getAll().userinfo;
        this.godinfo = godinfo;
        const url = godinfo.avatar_url;
        this.img = url.substring(url.length - 38);
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
