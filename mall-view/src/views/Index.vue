<template>
    <div id="index" class="index">
        <header>
            <!-- 主要的活动 -->
            <div class="top-active">
                <active></active>
            </div>

            <!-- 搜索相关 -->
            <div class="top-search">
                <search></search>
            </div>
        </header>

        <main>
            <!-- 主体部分,包含轮播图、分类，及右侧的服务项目 -->
            <div class="mainBox">
                <mainbox></mainbox>
            </div>

            <!-- 商品分类 -->
            <div class="goods-class">
                <cloth></cloth>
                <electronic></electronic>
            </div>
        </main>

        <footer>
            <footer-main></footer-main>
        </footer>
    </div>
</template>

<script>
// @ === /src

import Active from '../components/index/header/Active.vue'
import Search from '../components/index/header/Search.vue'
import Mainbox from '../components/index/body/Main.vue'
import Cloth from '../components/index/goods/clothes/Cloth.vue'
import Electronic from '../components/index/goods/electronics/Electronic.vue'
import MainFooter from '../components/Footer.vue'

export default {
    name: 'home',
    components: {
        'active': Active,
        'search':Search,
        'mainbox': Mainbox,
        'cloth': Cloth,
        'electronic': Electronic,
        'footer-main': MainFooter
    }

}
</script>


<style scoped>
#index {
    margin: 0 40px;
}
</style>
