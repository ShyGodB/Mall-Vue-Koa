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
                <manage></manage>
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
import Manage from '../components/bosshome/Manage.vue'
import Goods from '../components/bosshome/Goods.vue'

export default {
    name: 'bosshome',
    components: {
        'boss-info': Bossinfo,
        'create': Create,
        'manage': Manage,
        'goods': Goods
    }
}
</script>


<style scoped>
#bosshome {
    margin: 60px 40px 0 40px;
    min-height: 510px;
}
</style>
