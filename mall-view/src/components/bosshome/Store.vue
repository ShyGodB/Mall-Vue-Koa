<template>
    <div id="manage">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="基础信息" name="first">
                <manage-baseinfo></manage-baseinfo>
            </el-tab-pane>

            <!-- <el-tab-pane label="商品添加" name="second">
                <goods-addinfo></goods-addinfo>
            </el-tab-pane>

            <el-tab-pane label="角色管理" name="third">

            </el-tab-pane> -->
            <!-- <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane> -->
        </el-tabs>
    </div>
</template>


<script>
import Baseinfo from './store/Baseinfo'


export default {
    name: 'manage',
    components: {
        'manage-baseinfo': Baseinfo
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
};
</script>

<style scoped>
#manage {
    margin-left: 40px;
}
</style>
