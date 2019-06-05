<template>
    <div id="goods">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="商品总览" name="first">
                <good-view></good-view>
            </el-tab-pane>

            <el-tab-pane label="小黑屋" name="second">
                <black-house></black-house>
            </el-tab-pane>

            <el-tab-pane label="商品添加" name="third">
                <good-add></good-add>
            </el-tab-pane>


        </el-tabs>
    </div>
</template>


<script>
import Goodview from './good/Goodview'
import Goodadd from './good/Goodadd'
import Goodblack from './good/Blackhouse'

export default {
    name: 'goods',
    components: {
        'good-view': Goodview,
        'good-add': Goodadd,
        'black-house': Goodblack
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
#goods {
    margin-left: 40px;
}
</style>
