<template>
    <div id="goods">
        <el-row>
            <el-col :span="4" id="left-box">
                <div class="good-left">
                    <a :href="'/good/' + item.id" v-for="item in leftgoods" :key="item.name">
                        <div class="good-img">
                            <img :src="require('../../'+item.img_1.substring(item.img_1.length-32))" alt="">
                        </div>
                        <div class="good-info">
                            <div class="good-price">
                                <i>¥</i>
                                <span>{{item.new_price}}</span>
                            </div>
                            <p>{{item.description}}</p>
                        </div>
                    </a>
                </div>
            </el-col>

            <el-col :span="19">
                <div class="good">
                    <div class="sorting">
                        <a href="javascript:;" @click="switchTab(1)" v-bind:class="[num === 1 ? active : '']">
                            <span>综合</span>
                            <i class="el-icon-bottom"></i>
                        </a>

                        <a href="javascript:;" @click="switchTab(2)" v-bind:class="[num === 2 ? active : '']">
                            <span>销量</span>
                            <i class="el-icon-bottom"></i>
                        </a>

                        <a href="javascript:;" @click="switchTab(3)" v-bind:class="[num === 3 ? active : '']">
                            <span>新品</span>
                            <i class="el-icon-bottom"></i>
                        </a>

                        <a href="javascript:;" @click="switchTab(4)" v-bind:class="[num === 4 ? active : '']">
                            <div class="" v-if="onOff === false">
                                <span>价格</span>
                                <i class="el-icon-top"></i>
                            </div>

                            <div class="" v-if="onOff === true">
                                <span>价格</span>
                                <i class="el-icon-bottom"></i>
                            </div>
                        </a>

                        <div class="sorting-right">
                            <span>共有<strong> {{number}} </strong>件商品</span>
                        </div>
                    </div>

                     <a :href="'/good/' + item.id" v-for="(item, key) in goods" :key="key">
                        <div class="good-img-main">
                            <img :src="require('../../'+item.img_1.substring(item.img_1.length-32))" alt="">
                        </div>
                        <div class="good-info">
                            <div class="good-price">
                                <span style="display:block;">{{item.time}}</span>
                                <i>¥</i>

                                <span>{{item.new_price}}</span> |
                                <span>{{item.sale}}</span>
                            </div>
                            <p>{{item.description}}</p>
                        </div>
                    </a>
                </div>
            </el-col>
        </el-row>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    name: 'goods',
    data() {
        return {
            onOff: false,
            num: 1,
            number: null,
            active: 'active',
            leftgoods: [],
            goods: [],
            defaultGoods: [],
        }
    },
    methods: {
        switchTab(num) {
            this.num = num;
            const keyword = this.$route.params.keyword;
            if(this.num === 4) {
                this.onOff = !this.onOff;
            }
            switch(num) {
                case 1:
                    this.$router.push({
                        name: 'result',
                        params: {
                            keyword: keyword,
                            item: 'complex'
                        }
                    })
                    break;
                case 2:
                    this.$router.push({
                        name: 'result',
                        params: {
                            keyword: keyword,
                            item: 'sales'
                        }
                    })
                    break;
                case 3:
                    this.$router.push({
                        name: 'result',
                        params: {
                            keyword: keyword,
                            item: 'news'
                        }
                    })
                    break;
                case 4:
                    if(this.onOff) {
                        this.$router.push({
                            name: 'result',
                            params: {
                                keyword: keyword,
                                item: 'downprice'
                            }
                        })
                    } else {
                        this.$router.push({
                            name: 'result',
                            params: {
                                keyword: keyword,
                                item: 'upprice'
                            }
                        })
                    }
                    break;
                default:
                    break;
            }
        },
        listGood() {
            const keyword = this.$route.params.keyword;
            axios({
                method: 'post',
                url: '/api/view/list-good-by-keyword',
                data: {
                    keyword: keyword
                }
            }).then(res => {
                if(res.status === 200) {
                    if(res.data.length !== 0) {
                        this.number = res.data.length;
                        this.goods = res.data;
                        this.defaultGoods = res.data;
                        this.leftgoods = res.data.slice(0, 5);
                    } else {
                        this.$message({
                            message: '暂无符合您要求的商品商品',
                            type: 'error'
                        })
                    }
                }
            })
        },
        swap(array, index1, index2) {
            [array[index1], array[index2]] = [array[index2], array[index1]];
        },
        // 改进后的冒泡排序
        downSorting(array, sale) {
            const len = array.length;
            let num = 0;
            for(let i = 0; i < len; i++) {
                for(let j = 0; j < len-1-i; j++) {
                    num ++;
                    if(Number(array[j][sale]) < Number(array[j+1][sale])) {
                        this.swap(array, j, j+1);
                    }
                }
            }
            return array;
        },
        upSorting(array, sale) {
            const len = array.length;
            let num = 0;
            for(let i = 0; i < len; i++) {
                for(let j = 0; j < len-1-i; j++) {
                    num ++;
                    if(Number(array[j][sale]) > Number(array[j+1][sale])) {
                        this.swap(array, j, j+1);
                    }
                }
            }
            return array;
        }
    },
    mounted() {
        this.listGood();
    },
    beforeUpdate() {
        const item = this.$route.params.item;
        switch(item) {
            case 'complex':
                const data1 = this.defaultGoods;
                this.goods = this.upSorting(data1, 'id');
                break;
            case 'sales':
                const data2 = this.defaultGoods;
                this.goods = this.downSorting(data2, 'sale');
                break;
            case 'news':
                const data3 = this.defaultGoods;
                this.goods = this.downSorting(data3, 'time');
                break;
            case 'upprice':
                const data4 = this.defaultGoods;
                this.goods = this.upSorting(data4, 'new_price');
                break;
            case 'downprice':
                const data5 = this.defaultGoods;
                this.goods = this.downSorting(data5, 'new_price');
                break;
            default:
                break;
        }
    },
    updated() {
        this.listGood();
    }
}
</script>


<style scoped>
#goods {
    padding: 10px 20px;
    border: 1px solid #aaaaaa;
    border-radius: 20px;
}
#left-box {
    margin: 0 20px 0 0;
    border: 1px solid #aaaaaa;
    border-radius: 10px;
    margin-bottom: 80px;
}
.good {
    position: relative;
    width: 100%;
    height: 720px;
    float: left;
    margin: 0 0 5px 10px;
}
.good>a {
    display: inline-block;
    width: 230px;
    height: 305px;
    color: #666;
    float: left;
    padding: 10px 15px;
    position: relative;
    background: #ffffff;
    text-decoration: none;
}
.good>a:hover {
    background: #ffffff;
    text-decoration: none;
    width: 228px;
    height: 303px;
    border: 1px solid #bbbbbb;
    border-radius: 10px;
    box-shadow: #aaaaaa 5px 5px 10px;
}
.good-img {
    width: 200px;
    height: 200px;
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
.good-img-main {
    width: 150px;
    height: 150px;
    margin: 40px auto 18px;
    display: block;
    position: relative;
    overflow: hidden;
}
.good-img-main img {
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
    text-align: center;
}
.good-price i {
    margin-right: 3px;
}

/* 排序栏 */
.sorting {
    width: 100%;
    height: 36px;
    padding: 5px;
    line-height: 36px;
    margin-bottom: 10px;
    background: #eeeeee;
}
.sorting>div {
    display: inline-block;
    float: right;
    color: #aaaaaa;
    border: 1px solid #aaaaaa;
    padding: 0 5px;
    border-radius: 5px;
    margin-right: 10px;
}
strong {
    font-size: 20px;
    color: #ff5000;
}
em {
    display: inline-block;
    width: 13px;
    vertical-align: middle;
}
.sorting a {
    width: 60px;
    height: 30px;
    color: #000000;
    line-height: 30px;
    display: inline-block;
    text-align: center;
    list-style: none;
    text-decoration: none;
    border: 1px solid #000000;
}
.sorting a:hover {
    color: #00ff00;
}
.active {
    background: #ff0000;
    color: #ffffff;
}
</style>
