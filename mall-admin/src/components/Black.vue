<template>
    <div id="boss">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="商家" name="first">
                <black-boss></black-boss>
            </el-tab-pane>

            <el-tab-pane label="店铺" name="second">
                <black-store></black-store>
            </el-tab-pane>

            <el-tab-pane label="客户" name="third">
                <black-god></black-god>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>


<script>
import Boss from './black/Boss.vue'
import Store from './black/Store.vue'
import God from './black/God.vue'


export default {
    name: 'boss',
    components: {
        'black-boss': Boss,
        'black-store': Store,
        'black-god': God
    },
    data() {
        return {
            activeName: 'first'
        }
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    },
};
</script>


<style scoped>
</style>
