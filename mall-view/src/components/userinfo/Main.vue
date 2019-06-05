<template>
    <div id="user-main">
        <el-tabs tab-position="left">
            <el-tab-pane label="个人信息" id="personal">
                <personal></personal>
            </el-tab-pane>

            <el-tab-pane label="安全设置" id="security">
                <security></security>
            </el-tab-pane>

            <el-tab-pane label="收货地址" id="goodaddress">
                <goodaddress></goodaddress>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>


<script>
import Personal from './main/Personal.vue'
import Security from './main/Security.vue'
import Goodaddress from './main/Goodaddress.vue'

export default {
    name: 'user-main',
    components: {
        'personal': Personal,
        'security': Security,
        'goodaddress': Goodaddress
    },
    data() {
        return {
            onOff: true,
            name: 'abc'
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>


<style scoped>
/* 总体 */
#user-main {
    width: 100%;
    padding: 0 10px;
    min-height: 600px;
    background: #FFFFFF;
}
#personal {
    margin-left: 10px;
}
#security, #goodaddress {
    margin-top: 20px;
}
</style>
