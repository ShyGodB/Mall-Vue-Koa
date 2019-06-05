<template>
    <div id="security">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="重要信息" name="first">
                <important></important>
            </el-tab-pane>

            <el-tab-pane label="密码修改" name="second">
                <password></password>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>


<script>
import Important from './security/Important.vue'
import Password from './security/Password.vue'

export default {
    name: 'security',
    components: {
        'important': Important,
        'password': Password
    },
    data() {
        return {
            activeName: 'first'
        };
    },
    methods: {
        handleClick(tab, event) {
            // console.log(tab, event);
        }
    }
}
</script>


<style scoped>
#security {
    margin-left: 40px;
}
</style>
