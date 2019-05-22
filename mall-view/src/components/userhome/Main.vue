<template>
    <div id="user-main">
        <el-row class="user-main-row" :gutter="20">
            <el-col :span="3" class="user-main-left">
                <h3> 全部功能</h3>
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                    <el-menu-item index="1">
                        <i class="el-icon-menu"></i>
                        <span slot="title">我的购物车</span>
                    </el-menu-item>

                    <el-menu-item index="2">
                        <i class="el-icon-setting"></i>
                        <span slot="title">已购买的商品</span>
                    </el-menu-item>

                    <el-menu-item index="3">
                        <i class="el-icon-setting"></i>
                        <span slot="title">购买过的店铺</span>
                    </el-menu-item>

                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">我的心愿单</span>
                    </el-menu-item>

                    <el-menu-item index="5">
                        <i class="el-icon-setting"></i>
                        <span slot="title">我的收藏夹</span>
                    </el-menu-item>

                    <el-menu-item index="6">
                        <i class="el-icon-setting"></i>
                        <span slot="title">退换货</span>
                    </el-menu-item>
                </el-menu>
            </el-col>

            <el-col :span="14" class="user-main-middle">
                <div class="user-main-middle-user">
                    <div class="userinfo">
                        <span>头像</span> |
                        <span>昵称</span> |
                        <span>收货地址</span> |
                        <span>优惠信息</span>
                    </div>

                    <div class="choice-buy">
                        <span>待付款</span> |
                        <span>待发货</span> |
                        <span>待收获</span> |
                        <span>待评价</span> |
                        <span>退款</span>
                    </div>
                </div>

                <div class="user-main-middle-goods">
                    <div class="goods-top">
                        <div class="prompt">
                            根据浏览，猜你喜欢
                        </div>
                        <div class="switch-button">
                            换一组
                        </div>
                    </div>

                    <div class="goods-end">
                        猜测的商品
                    </div>
                </div>
            </el-col>

            <el-col :span="6" class="user-main-right">
                <div class="right-top">

                </div>

                <div class="right-main">

                </div>

                <div class="right-end">

                </div>
            </el-col>
        </el-row>
    </div>
</template>


<script>

export default {
    name: 'user-main',
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>


<style scoped>
/* 总体 */
#user-main {
    width: 100%;
    padding: 10px;
    min-height: 600px;
    background: #FFFFFF;
}

/* 左 */
.user-main-middle  {
    min-height: 720px;
}
h3 {
    color: #ff5000;
    text-align: center;
    margin-bottom: 10px;
}

/* 中 */
.user-main-middle {
    margin: 0 20px;
    min-height: 720px;
    background: #DDDDDD;
}

/* 中 - 个人信息 */
.user-main-middle-user  {
    width: 100%;
    height: 100px;
    border: 1px solid #C0C4CC;
    border-radius: 4px;
    margin-bottom: 12px;
}
.userinfo, .choice-buy {
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 20px;
}

/* 中 - 商品区域 */
.user-main-middle-goods {
    width: 100%;
    min-height: 600px;
}
.goods-top {
    width: 100%;
    height: 32px;
    border: 1px solid #C0C4CC;
    border-radius: 4px;
    line-height: 32px;
    background: #FF0000;
}
.prompt {
    float: left;
}
.switch-button {
    float: right;
}
.goods-end {
    width: 100%;
    margin: 6px 0;
    min-height: 400px;
    border: 1px solid #C0C4CC;
    border-radius: 4px;
}

/* 右 */
.user-main-right {
    min-height: 720px;
    padding: 10px;
    background: #EEEEEE;
}
.user-main-right .right-top {
    width: 100%;
    height: 60px;
    background: #cccccc;
    margin-bottom: 20px;
}
.user-main-right .right-main {
    width: 100%;
    height: 540px;
    background: #BBBBBB;
    margin-bottom: 20px;
}
.user-main-right .right-end {
    width: 100%;
    height: 40px;
    background: #AAAAAA;
    margin-bottom: 20px;
}
</style>
