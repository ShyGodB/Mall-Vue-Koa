<template>
    <div id="goods">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="商品添加" name="first">
                <good-add></good-add>
            </el-tab-pane>

            <el-tab-pane label="商品总览" name="second">
                <good-view></good-view>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>


<script>
import Goodview from './good/Goodview'
import Goodadd from './good/Goodadd'

export default {
    name: 'goods',
    components: {
        'good-view': Goodview,
        'good-add': Goodadd
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
