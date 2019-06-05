<template>
    <div id="bossinfo">
        <el-tabs id="tab-info" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="基础信息设置" name="first">
                <baseinfo></baseinfo>
            </el-tab-pane>

            <el-tab-pane label="头像设置" name="second">
                <avatar></avatar>
            </el-tab-pane>

            <el-tab-pane label="密码修改" name="third">
                <password></password>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>


<script>
import axios from 'axios'
import Baseinfo from './base/Base.vue'
import Avatar from './base/Avatar.vue'
import Password from './base/Password.vue'


export default {
    name: 'bossinfo',
    components: {
        'baseinfo': Baseinfo,
        'avatar': Avatar,
        'password': Password
    },
    data() {
        return {
            activeName: 'first'
        }
    },
    methods: {
        handleClick(tab, event) {
            // console.log(tab, event);
        }
    }
}
</script>


<style scoped>
#bossinfo {
    margin-left: 30px;
}
</style>
