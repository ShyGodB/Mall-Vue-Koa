<template>
    <div id="advanced">
        <el-row>
            <el-col :span="12">
                <el-form :model="godinfo" status-icon :rules="rules" ref="godinfo" label-width="100px" class="demo-godinfo">
                    <el-form-item label="身份证号" prop="idcard">
                        <el-input v-model="godinfo.idcard" @change="update('idcard')" maxlength="18"></el-input>
                    </el-form-item>

                    <el-form-item label="婚姻状况">
                        <el-radio-group v-model="godinfo.married" @change="update('married')">
                            <el-radio label="已婚"></el-radio>
                            <el-radio label="未婚"></el-radio>
                            <el-radio label="保密"></el-radio>
                        </el-radio-group>
                    </el-form-item>

                    <el-form-item label="纯月收入">
                        <el-radio-group v-model="godinfo.income" @change="update('income')">
                            <el-radio label="3000以下"></el-radio>
                            <el-radio label="3000-4999"></el-radio>
                            <el-radio label="4999-9999"></el-radio>
                            <el-radio label="10000以上"></el-radio>
                            <el-radio label="保密"></el-radio>
                        </el-radio-group>
                    </el-form-item>

                    <el-form-item label="教育程度">
                        <el-select v-model="godinfo.education" @change="update('education')">
                            <el-option v-for="(item, index) in options" :key="index" :value="item">
                            </el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="行业">
                        <el-radio-group v-model="godinfo.industry" @change="update('industry')">
                            <el-radio label="国有"></el-radio>
                            <el-radio label="民营"></el-radio>
                        </el-radio-group>
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
    name: 'advanced',
    data() {
        return {
            godinfo: {},
            img: '',
            rules: {
                idcard: [
                    { required: true, message: '请输入身份证号', trigger: 'blur' },
                    { min: 18, max: 18, message: '长度为 18 个字符', trigger: 'blur' }
                ]
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
                case 'married':
                    this.changeInfo(token, this.godinfo.married);
                    break;
                case 'income':
                    this.changeInfo(token, this.godinfo.income);
                    break;
                case 'education':
                    console.log(this.godinfo.education);
                    this.changeInfo(token, this.godinfo.education);
                    break;
                case 'industry':
                    this.changeInfo(token, this.godinfo.industry);
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
            console.log(url);
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
