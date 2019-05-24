<template>
    <div id="search">
        <div class="search-top">
            <div class="search-top-left">

            </div>

            <div class="search-top-middle">
                <div class="search-top-middle-input">
                    <input type="text" placeholder="请输入内容" >
                    </input>
                    <button type="button" id="search" name="search">搜索</button>
                </div>

                <div class="search-top-middle-suggestions">
                    <span>笔记本电脑</span> |
                    <span>台式机</span> |
                    <span>平板电脑</span> |
                    <span>显示器</span> |
                    <span>显卡</span> |
                    <span>手机</span> |
                    <span>电脑主机</span>
                </div>
            </div>

            <div class="search-top-right">
                <a href="#">
                    <span>我的购物车</span>
                    <img id="buycar" src="../../public/img/icons/buy.svg" alt="">
                </a>
            </div>
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

            </div>

            <div class="goods">

            </div>
        </div>
    </div>
</template>


<script>

export default {
    name: 'search',
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
}
.choices {
    float: left;
    width: 100%;
    height: 200px;
    background: red;
    margin-top: 20px;
}
.goods {
    float: left;
    width: 100%;
    min-height: 600px;
    background: green;
}
</style>
