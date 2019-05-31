<template>
    <div class="shopbody">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="全部商品" name="first">
                <allgood></allgood>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>


<script>
import Allgood from './Allgood'

export default {
    name: 'shopbody',
    components: {
        'allgood': Allgood
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
    }
}
</script>


<style scoped>

</style>
