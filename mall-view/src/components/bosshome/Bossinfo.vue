<template>
    <div id="info-boss">
        <div class="top">
            <div class="top-left">
                <div class="mb-3">
                    <h4 class="mb-3"> 用户信息 && 设置</h4>
                </div>
                <div>
                    <span class="title"> 昵称：</span>
                    <input :placeholder="bossinfo.nickname" id="name"  type="text" class="data_mobile bg-light" :value="bossdata.nickname" disabled="true">
                    <svg height="16" width="16" class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" aria-hidiven="true">
                        <path fill-rule="evenodiv" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z">
                        </path>
                    </svg>
                    <button class="btn sure"> 确定 </button>
                </div>
                <div>
                    <span class="title"> 性别：</span>
                    <input :placeholder="bossinfo.gender"  type="text" class="data_mobile bg-light" :value="bossdata.gender" disabled="">
                    <svg height="16" width="16" class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" aria-hidiven="true">
                        <path fill-rule="evenodiv" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z">
                        </path>
                    </svg>
                    <button class="btn sure"> 确定 </button>
                </div>
                <div>
                    <span class="title"> 生日：</span>
                    <input :placeholder="bossinfo.birthday"  type="text" class="data_mobile bg-light" :value="bossdata.birthday" disabled="">
                    <svg height="16" width="16" class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" aria-hidiven="true">
                        <path fill-rule="evenodiv" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z">
                        </path>
                    </svg>
                    <button class="btn sure"> 确定 </button>
                </div>
                <div>
                    <span class="title"> 邮箱：</span>
                    <input :placeholder="bossinfo.email"  type="email" class="data_mobile bg-light" :value="bossdata.email" disabled="">
                    <svg height="16" width="16" class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" aria-hidiven="true">
                        <path fill-rule="evenodiv" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z">
                        </path>
                    </svg>
                    <button class="btn sure"> 确定 </button>
                </div>
                <div>
                    <span class="title"> 手机：</span>
                    <input :placeholder="bossinfo.mobile"  type="text" class="data_mobile bg-light" :value="bossdata.mobile" disabled="">
                    <svg height="16" width="16" class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" aria-hidiven="true">
                        <path fill-rule="evenodiv" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z">
                        </path>
                    </svg>
                    <button class="btn sure"> 确定 </button>
                </div>
                <div>
                    <span class="title"> QQ：</span>
                    <input :placeholder="bossinfo.qq"  type="text" class="data_mobile bg-light" :value="bossdata.qq" disabled="">
                    <svg height="16" width="16" class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" aria-hidiven="true">
                        <path fill-rule="evenodiv" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z">
                        </path>
                    </svg>
                    <button class="btn sure"> 确定 </button>
                </div>
                <div>
                    <span class="title"> 微信：</span>
                    <input :placeholder="bossinfo.wechat"  type="text" class="data_mobile bg-light" :value="bossdata.wechat" disabled="">
                    <svg height="16" width="16" class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" aria-hidiven="true">
                        <path fill-rule="evenodiv" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z">
                        </path>
                    </svg>
                    <button class="btn sure"> 确定 </button>
                </div>
                <div>
                    <span class="title"> 微博：</span>
                    <input :placeholder="bossinfo.weibo"  type="text" class="data_mobile bg-light" :value="bossdata.weibo" disabled="">
                    <svg height="16" width="16" class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" aria-hidiven="true">
                        <path fill-rule="evenodiv" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z">
                        </path>
                    </svg>
                    <button class="btn sure"> 确定 </button>
                </div>
                <div>
                    <span class="title"> 个性签名：</span>
                    <input :placeholder="bossinfo.bio"  type="text" class="data_mobile bg-light" :value="bossdata.bio" disabled="">
                    <svg height="16" width="16" class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" aria-hidiven="true">
                        <path fill-rule="evenodiv" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z">
                        </path>
                    </svg>
                    <button class="btn sure"> 确定 </button>
                </div>
                <div>
                    <span class="title"> 注册时间：</span>
                    <input :placeholder="bossinfo.register_time"  type="text" class="data_mobile bg-light" value="" disabled="">
                    <svg height="16" width="16" class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" aria-hidiven="true">
                        <path fill-rule="evenodiv" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z">
                        </path>
                    </svg>
                    <button class="btn sure"> 确定 </button>
                </div>
            </div>

            <div class="top-middle"></div>

            <div class="top-right">
                <div class="mb-3">
                    <h4 class="mb-3"> 用户信息 && 设置</h4>
                </div>
                <div>
                    <span class="title"> ID：</span>
                    <input :placeholder="bossinfo.boss_id" id="name"  type="text" value="" disabled="true">
                </div>
                <div>
                    <span class="title"> 用户名：</span>
                    <input :placeholder="bossinfo.username" id="name"  type="text" value="" disabled="true">
                </div>
                <div>
                    <span class="title"> 实名：</span>
                    <input :placeholder="bossinfo.realname"  type="text" class="data_mobile bg-light" value="" disabled>
                </div>
                <div>
                    <span class="title"> 身份证号：</span>
                    <input :placeholder="bossinfo.idcard"  type="text" class="data_mobile bg-light" value="" disabled>
                </div>
                <div>
                    <span class="title"> 营业执照：</span>
                    <input :placeholder="bossinfo.businesslicense"  type="text" class="data_mobile bg-light" value="" disabled>
                </div>
            </div>
        </div>

        <div class="end">

        </div>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    name: 'info-boss',
    data() {
        return {
            bossinfo: {},
            bossdata: {
                nickname: '',
                gender: '',
                birthday: '',
                email: '',
                mobile: '',
                qq: '',
                wechat: '',
                weibo: '',
                bio: '',
                nickname: '',
            }
        };
    },
    methods: {
    },
    async created() {
        axios({
            url: '/api/view/getbossinfo',
            method: 'post',
            data: {
                boss_id: 'boss-13866666666'
            }
        })
            .then(res => {
                this.bossinfo = res.data;
            })
    }
}
</script>


<style scoped>
.top .top-left {
    float: left;
    margin-left: 40px;
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
.sure {
    display: none;
    padding: 3px;
}
span {
    color: orangered;
}
/* top-middle */
.top-middle {
    width: 144px;
    height: 144px;
    float: left;
    margin-left: 100px;
    border: 1px solid #FFFFFF;
    border-radius: 50%;
    background-image: url(../../../public/img/tt.png);
    background-size: cover;
}
.top-right {
    float: right;
}
</style>
