<template>
    <div class="good">
        <a :href="'good/' + item.id" v-for="(item, index) in goods" :key="index">
            <div class="good-img">
                <img :src="require('../../../'+item.img_1.substring(item.img_1.length-32))" alt="">
            </div>
            <div class="good-info">
                <p>{{item.description}}</p>
                <div class="good-price">
                    <i>¥</i>
                    <span>{{item.new_price}}</span>
                </div>
            </div>
        </a>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    name: 'goods-index',
    data() {
        return {
            goods: [],
            allgood: [],
            url: ''
        }
    },
    created() {
        axios({
            method: 'post',
            url: '/api/view/list-all-good-from-good',
        }).then(res => {
            const a = res.data[3].img_1;
            const url = a.substring(a.length - 32);
            this.url = require('../../../' + url);
            if(res.status === 200) {
                if(res.data.length !== 0) {
                    this.allgood = res.data;
                    this.goods = res.data.splice(0, 10);
                } else {
                    this.$message({
                        showClose: 'true',
                        message: '暂无商品！',
                        type: 'warning'
                    })
                }
            }
        })
    }
}
</script>

<style scoped>
.good {
    position: relative;
    width: 100%;
    height: 720px;
    float: left;
    margin: 0 0 5px 10px;
}
.good a {
    display: inline-block;
    width: 230px;
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
.img{
    width:100px;
    height:100px;
}
</style>
