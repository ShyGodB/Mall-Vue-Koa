<template>
    <div id="result">
        <div class="search-top">
            <search></search>
        </div>

        <div class="search-header">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">全部商品分类</el-menu-item>
                <el-menu-item index="2">知识宇宙</el-menu-item>
                <el-menu-item index="3">科技世界</el-menu-item>
                <el-menu-item index="4">文化中心</el-menu-item>
                <el-menu-item index="5">女人世界</el-menu-item>
                <el-menu-item index="6">美食天下</el-menu-item>
                <el-menu-item index="7">生活</el-menu-item>
                <el-menu-item index="8">其它</el-menu-item>
            </el-menu>
        </div>

        <div class="search-body">
            <div class="choices">
                <choose></choose>
            </div>

            <div class="goods-result">
                <goods></goods>
            </div>
        </div>
    </div>
</template>


<script>
import axios  from 'axios'
import Search from '../components/Search.vue'
import Choose from '../components/result/Choose.vue'
import Goods  from '../components/result/Goods.vue'

export default {
    name: 'result',
    components: {
        'search': Search,
        'choose': Choose,
        'goods': Goods
    },
    data() {
        return {
            fits: ['fill'],
            url: '../../public/img/jd.png',
            restaurants: [],
            state: '',
            activeIndex: '1',
            activeIndex2: '1'
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>


<style scoped>
/* top */
#result {
    width: 100%;
    height: auto;
    float: left;
    margin-bottom: 100px;
}
#search .search-top {
    width: 100%;
    height: 100px;
}
#search .search-top div {
    float: left;
}
.search-top-left {
    width: 20%;
    height: 100px;
    background-repeat: no-repeat;
    background-image: url(../../public/img/jd.png)
}
.search-top-middle {
    width: 60%;
    height: 100px;
    margin-top: 20px;
}
.search-top-middle-input {
    width: 60%;
    margin-left: 170px;
    border: 3px solid #FF0000;
}
.search-top-middle-input input{
    width: 86%;
    outline: none;
    border: 0;
    line-height: 30px;
    margin-left: 3px;
}
.search-top-middle-input button {
    width: 60px;
    height: 30px;
    float: right;
    background: #ff0000;
    color: #FFFFFF;
    border: 1px solid #ff0000;
}
.search-top-middle-suggestions {
    width: 100%;
    color: #AAAAAA;
    font-size: 14px;
    margin-top: 10px;
    text-align: center;
}
.search-top-right {
    width: 120px;
    height: 44px;
    padding: 5px;
    margin-top: 20px;
    background: #F0F0F0;
    border: 1px solid #F0F0F0;
    border-radius: 4px;
}
.search-top-right a {
    height: 34px;
    line-height: 34px;
    color: #000000;
}
.search-top-right span {
    height: 34px;
    line-height: 34px;
    display: inline-block;
}
#buycar {
    width: 30px;
    height: 30px;
    line-height: 30px;
    vertical-align: middle;
}

/* header */
.search-header {
    float: left;
    padding: 0 40px;
    margin-bottom: 10px;
}
.choices {
    float: left;
    width: 100%;
}
.goods-result {
    float: left;
    width: 100%;
}
.search-body {
    height: auto;
    float: left;
    padding: 0 40px;
}
footer {
    margin-top: 2040px;
}
</style>
