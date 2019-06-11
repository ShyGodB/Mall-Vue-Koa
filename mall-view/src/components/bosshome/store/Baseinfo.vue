<template id="">
    <div class="baseinfo">
        <div class="">
            <h4 class="mb-3"> 用户信息 && 设置</h4>
        </div>
        <div>
            <span class="title"> ID：</span>
            <input :placeholder="storeinfo.boss_id" type="text" :value="storedata.nature" disabled="true">
        </div>
        <div>
            <span class="title"> 名字：</span>
            <input :placeholder="storeinfo.name" type="text" :value="storedata.name" disabled="">
            <svg height="16" width="16" class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" aria-hidiven="true">
                <path fill-rule="evenodiv" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z">
                </path>
            </svg>
            <button class="btn sure"> 确定 </button>
        </div>
        <div>
            <span class="title"> 分类：</span>
            <input :placeholder="storeinfo.type" type="text" :value="storedata.type" disabled="true">
        </div>
        <div>
            <span class="title"> 性质：</span>
            <input :placeholder="storeinfo.nature" type="text" :value="storedata.nature" disabled="true">
        </div>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    name: 'baseinfo',
    data() {
        return {
            activeName: 'first',
            storeinfo: {
                name: '',
                type: '',
                nature: ''
            },
            storedata: {
                name: '',
                type: '',
                nature: ''
            }
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    },
    created() {
        if(this.$session.exists()) {
            const session = this.$session.getAll();
            if(session !== {} && session.userinfo.boss_id) {
                axios({
                    url: '/api/view/getstore',
                    method: 'post',
                    data: { boss_id : session.userinfo.boss_id}
                })
                    .then(res => {
                        if(res.status === 200) {
                            if(res.data.msg === '尚未创建店铺！') {
                                this.$message({
                                    showClose: true,
                                    message: res.data.msg
                                });
                            }
                            this.storeinfo = res.data;
                        }
                    })
            }
        } else {
            this.$message({
                showClose: true,
                message: '尚未登陆，请登录',
                type: 'warning'
            })
            this.$router.push("/");
        }
    }
};
</script>

<style scoped>
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
</style>
