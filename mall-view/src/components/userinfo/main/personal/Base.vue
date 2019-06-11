<template>
    <div id="baseinfo">
        <el-row>
            <el-col :span="12">
                <el-form :model="godinfo" status-icon :rules="rules" ref="godinfo" label-width="100px" class="demo-godinfo">
                    <el-form-item label="ID">
                        <el-input v-model="godinfo.god_id" disabled></el-input>
                    </el-form-item>

                    <el-form-item label="会员名">
                        <el-input v-model="godinfo.username" disabled></el-input>
                    </el-form-item>

                    <el-form-item label="昵称">
                        <el-input v-model="godinfo.nickname" @change="update('nickname')" ></el-input>
                    </el-form-item>

                    <el-form-item label="性别">
                        <el-radio-group v-model="godinfo.gender" @change="update('gender')" >
                            <el-radio label="男"></el-radio>
                            <el-radio label="女"></el-radio>
                            <el-radio label="保密"></el-radio>
                        </el-radio-group>
                    </el-form-item>

                    <el-form-item label="生辰">
                        <el-input v-model="godinfo.birthday" @change="update('birthday')" ></el-input>
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
import {rules} from '@/assets/js/rules.js'

export default {
    name: 'baseinfo',
    data() {
        return {
            godinfo: {},
            img: '',
            rules: rules
        };
    },
    methods: {
        update(token) {
            switch (token) {
                case 'nickname':
                    this.changeInfo(token, this.godinfo.nickname);
                    break;
                case 'gender':
                    this.changeInfo(token, this.godinfo.gender);
                    break;
                case 'birthday':
                    this.changeInfo(token, this.godinfo.birthday);
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
            this.img = url.substring(url.length - 38);
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
    background-size: 144px 144px;
}
</style>
