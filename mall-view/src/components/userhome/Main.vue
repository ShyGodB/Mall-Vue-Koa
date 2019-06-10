<template>
    <div id="user-main">
        <el-row class="user-main-row">
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

            <el-col :span="18">
                <div class="info">
                    <el-row>
                        <el-col :span="6">
                            <div class="info-left">
                                <a href="/userinfo">
                                    <div class="info-left-avatar"></div>
                                </a>

                                <div class="info-left-nickname">
                                    半世浮尘半世缘
                                </div>

                                <div class="info-left-activity">
                                    <a href="#" id="activity-one"><span>京享值</span><span>1077</span></a>
                                    <a href="#" id="activity-two"><span>信用领</span><strong>10</strong><span>元卷</span></a>
                                </div>
                            </div>
                        </el-col>

                        <el-col :span="18">
                            <div class="info-right">
                                <div class="info-right-top">
                                    <span>我的收货地址</span>
                                    <span>我的优惠信息</span>
                                    <span>我的财产信息</span>
                                </div>

                                <div class="info-right-end">
                                    <a href="#" v-for="(item, key) in choices" :key="key">
                                        <p> {{item.value}} </p>
                                        <span> {{item.name}} </span>
                                    </a>
                                    <a href="#" id="icon-right">
                                        <i class="el-icon-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>

                <div class="main">
                    <el-row>
                        <el-col :span="17" id="main-left">
                            <div class="main-left-suggestions">
                                <span class="suggestions">商品推荐</span>
                                <span class="change">换一组</span>
                            </div>

                            <div class="main-left-goods">
                                <a href="#" v-for="item in goods" :key="item.name">
                                    <div class="good-img">
                                        <img :src="item.img" alt="">
                                    </div>
                                    <div class="good-info">
                                        <p>{{item.name}}</p>
                                        <div class="good-price">
                                            <i>¥</i>
                                            <span>{{item.price}}</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </el-col>

                        <el-col :span="7" id="main-right">
                            <div class="main-right-focus">
                                <div class="main-right-focus-top">
                                    我的关注
                                </div>

                                <div class="main-right-focus-end">
                                    <a href="#" v-for="(item, key) in focusinfo" :key="key">
                                        <p> {{item.value}} </p>
                                        <span> {{item.name}} </span>
                                    </a>
                                </div>
                            </div>

                            <div class="main-right-record">
                                <div class="main-right-record-top">
                                    <span>浏览记录</span>

                                    <div class="">
                                        <span>更多</span>
                                        <i class="el-icon-arrow-right"></i>
                                    </div>
                                </div>

                                <div class="main-right-record-end">
                                    <div class="block">
                                        <el-carousel height="275px">
                                            <el-carousel-item v-for="item in goods" :key="item.name">
                                                <a href="#" :title="item.name">
                                                    <img :src="item.img" :alt="item.name">
                                                </a>
                                            </el-carousel-item>
                                        </el-carousel>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
    </div>
</template>


<script>

export default {
    name: 'user-main',
    data() {
        return  {
            choices: [
                { name: '待收货', value: '0'},
                { name: '待发货', value: '0'},
                { name: '待付款', value: '0'},
                { name: '待评价', value: '0'},
                { name: '全部订单', value: '0'}
            ],
            focusinfo: [
                { name: '商品关注', value: '6'},
                { name: '店铺关注', value: '5'},
                { name: '收藏内容', value: '0'}
            ],
            goods: [
                {
                    name: '神舟(HASEE)战神G9-CT7PK 英特尔酷睿i7-9750H RTX2070 72%色域144Hz屏17.3英寸游戏笔记本电脑(16G 256G+1T)',
                    img: 'https://img11.360buyimg.com/jdcms/s300x300_jfs/t30184/307/1335420827/264135/afea3adb/5cdd0941N0fb13661.jpg!q90!cc_170x170.webp',
                    price: '10998.00'
                },
                {
                    name: '华硕顽石(ASUS) 畅玩版Y4000 14.0英寸窄边框笔记本电脑(酷睿i3 4G 128GSSD+500G MX110 2G独显)星空灰',
                    img: 'https://img11.360buyimg.com/jdcms/s300x300_jfs/t1/14244/23/13114/176711/5c9d7523E679c07fb/b8141b3d825a8ed6.jpg!q90!cc_170x170.webp',
                    price: '3599.00'
                },
                {
                    name: '技嘉AORUS15 RTX20系显卡AI智能游戏本144HZ电竞屏 15.6英寸窄边框笔记本电脑 RTX2060 6G独显 i7-8750H 16G内存 2TB机械+512G PCIe固态',
                    img: 'https://img14.360buyimg.com/jdcms/s300x300_jfs/t1/63177/33/417/86990/5ce96799E463ca64f/bddbc8900c2b623a.jpg!q90!cc_170x170.webp',
                    price: '11999.00'
                },
                {
                    name: 'Teeking户外男女跑步腰带手机腰包弹性健身运动包 荧光绿. S(64cm-70cm)',
                    img: 'https://img11.360buyimg.com/jdcms/s300x300_jfs/t1/79187/23/403/138928/5ce8ed7dE872e2e74/6bd89f8ce43deca5.jpg!q90!cc_170x170.webp',
                    price: '68.00'
                },
                {
                    name: '金士顿（Kingston）128GB Type-C USB3.1 U盘 DTDUO3C 双接口设计 支持苹果MacBook',
                    img: 'https://img14.360buyimg.com/jdcms/s300x300_jfs/t1/9769/33/3872/62351/5bd8622eE63441505/742444b8fd27453e.jpg!q90!cc_170x170.webp',
                    price: '189.90'
                },
                {
                    name: '华为 HUAWEI 畅享9 Plus 6GB+128GB 极光紫 全网通 四摄超清全面屏大电池 移动联通电信4G手机 双卡双待',
                    img: 'https://img11.360buyimg.com/jdcms/s300x300_jfs/t24601/251/1757078602/208490/a3be6016/5bbc12e0Nb7ea42ed.jpg!q90!cc_170x170.webp',
                    price: '1799.00'
                }
            ]
        }
    },
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
.info-left {
    width: 100%;
    height: 200px;
    background: #e2231a;
    z-index: 3;
}
.info-right {
    width: 100%;
    height: 200px;
    background: #eeeeee;
}
.info-right-top {
    padding: 30px 100px;
    color: #000000;
    font-size: 16px;
    font-weight: normal;
}
.info-right-top span {
    display: inline-block;
    padding: 0 20px;
    cursor: pointer;
}
.info-right-end {
    padding: 10px 100px;
    color: #000000;
    font-size: 18px;
    font-weight: normal;
}
.main-right-focus, .main-right-record {
    padding: 0 10px;
    border: 1px solid #000000;
    border-radius: 10px;
}
.main-right-record {
    height: 320px;
    margin-top: 20px;
}
.main-right-focus-top, .main-right-record-top {
    height: 25px;
    padding: 3px;
    border-bottom: 1px solid #aaaaaa;
}
.main-right-record-top>span {
    display: inline-block;
    float: left;
}
.main-right-record-top>div {
    display: inline-block;
    float: right;
}
.main-right-focus-end {
    padding: 10px 0;
}
.info-right-end a, .main-right-focus-end a {
    display: inline-block;
    width: 64px;
    height: 64px;
    padding: 10px 14px;
    color: #000000;
    text-align: center;
    text-decoration: none;
}
.main-right-focus-end a {
    padding: 10px 10px;
}
.info-right-end p, .main-right-focus-end p {
    color: #ff5000;
    font-size: 24px;
    font-weight: 800;
}
.info-right-end span, .main-right-focus-end span {
    font-size: 14px;
}
.info-right-end i {
    color: #ff5000;
    font-size: 40px;
    font-weight: 900;
}
.main {
    margin-top: 30px;
}
#main-left {
    height: 600px;
}
#main-right {
    height: 680px;
    /* background: green; */
}
.main-left-suggestions {
    width: 100%;
    height: 30px;
    line-height: 30px;
    background-color: #dddddd;
}
.main-left-suggestions .suggestions{
    display: inline-block;
    margin-left: 10px;
    float: left;
}
.main-left-suggestions .change{
    display: inline-block;
    margin-right: 10px;
    float: right;
}
/* 商品推荐 */
.main-left-goods {
    position: relative;
    width: 100%;
    height: 720px;
    float: left;
    margin: 0 0 5px 10px;
}
.main-left-goods a {
    display: inline-block;
    width: 200px;
    height: 305px;
    color: #666;
    float: left;
    margin-left: 30px;
    margin-top: 20px;
    position: relative;
    background: #dddddd;
    text-decoration: none;
}
.good-img {
    width: 150px;
    height: 150px;
    margin: 40px auto 18px;
    display: block;
    position: relative;
    overflow: hidden;
}
.good-img img {
    width: 100%;
    height: 100%;
    border: 0;
    vertical-align: middle;
}
.good-info {
    clear: both;
    padding: 0 16px 0;
    height: 65px;
    line-height: 24px;
}
.good-info p {
    height: 40px;
    font-size: 12px;
    line-height: 20px;
    text-align: left;
    color: #7d7d7d;
    transition: color ease 0.2s;
    overflow: hidden;
    text-overflow: ellipsis;
}
.good-price {
    color: #ff5000;
}
.good-price i {
    margin-right: 3px;
}
.block img {
    height: 100%;
}
.info-left {
    top: -10px;
    padding: 10px;
    position: relative;
    border: 1px solid #e2231a;
    border-radius: 10px;
    box-shadow: 5px 5px 20px #000000;
}
.info-left-avatar {
    width: 64px;
    height: 64px;
    margin: 0 auto;
    background-image: url(../../../public/img/tt.png);
    background-size: 64px 64px;
    border: 3px solid #e2231a;
    border-radius: 50%;
}
.info-left-nickname {
    margin: 20px 0;
    text-align: center;
    color: #ffffff;
}
.info-left-activity {
    margin: 30px 0;
}
#activity-one, #activity-two {
    color: #ffffff;
    display: inline-block;
    border: 1px solid #ffffff;
    text-decoration: none;
    margin: 0 12px;
    padding: 2px 6px;
    height: 24px;
    font-size: 14px;
    line-height: 24px;
    border-radius: 20px;
}
</style>
