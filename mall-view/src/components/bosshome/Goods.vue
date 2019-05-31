<template>
    <div id="goods">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="商品总览" name="first">
                <goods-view></goods-view>
            </el-tab-pane>

            <el-tab-pane label="商品管理" name="second">
                <goods-manage></goods-manage>
            </el-tab-pane>

            <el-tab-pane label="小黑屋" name="third">
                <goods-blackhouse></goods-blackhouse>
            </el-tab-pane>

            <el-tab-pane label="其它" name="fourth">
                <goods-others></goods-others>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>


<script>
import Overview from './good/Overview'
import Manage from './good/Overview'
import Blackhouse from './good/Overview'
import Others from './good/Overview'

export default {
    name: 'goods',
    components: {
        'goods-view': Overview,
        'goods-manage': Manage,
        'goods-blackhouse': Blackhouse,
        'goods-others': Others,
    },
    data() {
        return {
            activeName: 'first'
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
};
</script>

<style scoped>
#goods {
    margin-left: 40px;
}
</style>
