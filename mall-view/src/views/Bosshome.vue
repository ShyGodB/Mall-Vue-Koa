<template>
    <div id="bosshome">
        <el-tabs class="tabs" tab-position="left">
            <el-tab-pane label="个人信息">
                <boss-info></boss-info>
            </el-tab-pane>

            <el-tab-pane label="创建店铺">
                <create></create>
            </el-tab-pane>

            <el-tab-pane label="店铺管理">
                <store></store>
            </el-tab-pane>

            <el-tab-pane label="商品管理">
                <goods></goods>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>


<script>
import Bossinfo from '../components/bosshome/Bossinfo.vue'
import Create from '../components/bosshome/Create.vue'
import Store from '../components/bosshome/Store.vue'
import Goods from '../components/bosshome/Goods.vue'

export default {
    name: 'bosshome',
    components: {
        'boss-info': Bossinfo,
        'create': Create,
        'store': Store,
        'goods': Goods
    },
    created() {
        if(this.$session.getAll().token !== 'boss') {
            this.$router.push('/404');
        }
    }
}
</script>


<style scoped>
#bosshome {
    margin: 60px 40px 0 40px;
    min-height: 610px;
}
</style>
