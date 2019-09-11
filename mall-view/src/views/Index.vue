<template>
    <div id="index" class="index">
        <header>
            <!-- 主要的活动 -->
            <div class="top-active">
                <search></search>
            </div>
        </header>

        <main>
            <!-- 主体部分,包含轮播图、分类，及右侧的服务项目 -->
            <div class="mainBox">
                <mainbox></mainbox>
            </div>

            <!-- 商品分类 -->
            <div class="goods-index">
                <goods></goods>
            </div>
        </main>
    </div>
</template>

<script>
// @ === /src

import Active from '../components/index/header/Active.vue'
import Mainbox from '../components/index/body/Main.vue'
import Goods from '../components/index/goods/Goods.vue'
import MainFooter from '../components/Footer.vue'
import Search from '../components/Search.vue'

export default {
    inject: ['reload'],
    name: 'home',
    components: {
        'active': Active,
        'mainbox': Mainbox,
        'goods': Goods,
        'footer-main': MainFooter,
        'search': Search
    },
    beforeCreate() {
        if (!this.$session.exists()) {
            this.$router.push('/')
        }
    },
    created() {
        // console.log(this.$session.getAll());
    }
}
</script>


<style scoped>
#index {
    margin: 0 40px;
}
main {
    margin-top: 20px;
}
.goods-index {
    margin-top: 40px;
}
</style>
