<template>
    <div id="good-box">
        <div class="good-box-left el-col-9">
            <div class="img-big">
                <el-carousel arrow="never" indicator-position="none" :autoplay="false" height="400px" ref="big">
                    <el-carousel-item v-for="(item,index) in imgList" :key="index" name="index" :ref="'box'+index">
                        <div class="mainBox" @mouseover="move">
                            <img :src="item.url" class="mainImage" @mouseover="overBigActive(index)" alt="">
                			<span class="lay"></span>
                		</div>
                    </el-carousel-item>
                </el-carousel>
            </div>

            <div class="img-small">
                <a v-for="(item, index) in imgList" :key="index">
                    <img :src="item.url" @mouseover="overSmallActive(index)" alt="加载失败">
                </a>
            </div>

            <div class="img-super">
                <el-carousel arrow="never" indicator-position="none" :autoplay="false" height="400px" ref="super">
                    <el-carousel-item v-for="(item,index) in imgList" :key="index" name="index">
                        <div class="superBox">
                            <img :src="item.url" class="superImage" alt="">
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>

        <div class="good-box-right el-col-14">
            <div class="good-info">
                <div class="description-box">
                    <h3>{{good.description}}</h3>
                </div>

                <div class="name-box">
                    <span class="instruction">名称</span>
                    <span class="name">{{good.name}}</span>
                </div>

                <div class="price-box">
                    <span class="instruction">价格</span>
                    <span class="price">¥ {{good.new_price}}</span>
                </div>

                <div class="num-box">
                    <span class="instruction">数量</span>
                    <el-input-number v-model="num" @change="handleChange" :min="1" :max="999" label="描述文字"></el-input-number>
                </div>
            </div>

            <div class="good-button">
                <el-button type="danger" @click="buyNow">立即购买</el-button>
                <el-button type="success" @click="addToCart">加入购物车</el-button>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    name: 'body-good',
    data() {
        return {
            num: 1,
            imgList: [],
            good: []
        }
    },
    methods: {
        move() {
            const mainBox = document.getElementsByClassName("mainBox");
            const lay = document.getElementsByClassName("lay");
            const superBox = document.getElementsByClassName("superBox");
            const superImage = document.getElementsByClassName("superImage");
            const imgSuper = document.getElementsByClassName('img-super')[0];

            for(let i = 0; i < mainBox.length; i++) {
                mainBox[i].onmouseover = function(){
                    lay[i].style.display = "block";
                    superBox[i].style.display = "block";
                    imgSuper.style.zIndex = 9;
                }

                mainBox[i].onmouseout = function(){
                    lay[i].style.display = "none";
                    superBox[i].style.display = "none";
                    imgSuper.style.zIndex = -9;
                }

                mainBox[i].onmousemove = function( ev ){
                    var ev = ev || event;
                    var scale = 2;

                    var x = ev.clientX - lay[i].offsetWidth/2 - mainBox[i].offsetLeft - 180;
                    var y = ev.clientY - lay[i].offsetHeight/2 - mainBox[i].offsetTop - 160;

                    lay[i].style.width = parseInt( mainBox[i].offsetWidth / scale ) + "px";
                    lay[i].style.height = parseInt( mainBox[i].offsetHeight / scale ) + "px";

                    superImage[i].style.width = mainBox[i].offsetWidth * scale + "px";
                    superImage[i].style.height = mainBox[i].offsetHeight * scale + "px";

                    if( x < 0 ){
                        x = 0;
                    }
                    if( x >= mainBox[i].offsetWidth - lay[i].offsetWidth ){
                        x = mainBox[i].offsetWidth - lay[i].offsetWidth;
                    }
                    if( y < 0 ){
                        y = 0;
                    }
                    if( y >= mainBox[i].offsetHeight - lay[i].offsetHeight ){
                        y = mainBox[i].offsetHeight - lay[i].offsetHeight;
                    }

                    lay[i].style.left = x + "px";
                    lay[i].style.top = y + "px";

                    var left = scale * lay[i].offsetLeft;
                    var top = scale * lay[i].offsetTop;
                    superImage[i].style.left = -left + "px";
                    superImage[i].style.top = -top + "px";
                }
            }
        },
        overSmallActive(index) {
            this.$refs.big.setActiveItem(index);
        },
        overBigActive(index) {
            this.$refs.super.setActiveItem(index);
        },
        handleChange(value) {
            console.log(value);
        },
        buyNow() {
            this.$message({
                showClose: true,
                message: '支付功能暂未实现',
                type: 'error'
            });
        },
        addToCart() {
            const session = this.$session.getAll();
            if(session !== {} && session.userinfo.god_id) {
                const god_id = session.userinfo.god_id;
                const good_id = this.good.id;
                const store_id = this.good.store_id;
                const store_name = this.good.store_name;
                const name = this.good.name;
                const num = this.num;
                const old_price = this.good.old_price;
                const new_price = this.good.new_price;
                const subtotal = num * new_price;
                const description = this.good.description;
                const img = this.good.img_1;
                const data = {
                    god_id: god_id,
                    good_id: good_id,
                    store_id: store_id,
                    store_name: store_name,
                    name: name,
                    num: num,
                    old_price: old_price,
                    new_price: new_price,
                    subtotal: subtotal,
                    description: description,
                    img: img
                };
                axios({
                    url: '/api/view/add-good-to-car',
                    method: 'post',
                    data: data
                }).then(res => {
                    if(res.status === 200) {
                        this.$message({
                            showClose: true,
                            message: res.data.msg,
                            type: 'success'
                        });
                    }
                })
            } else {
                this.$message({
                    showClose: true,
                    message: '当前账号为商家账号，请切换！',
                    type: 'error'
                });
            }

        }
    },
    created() {
        const id = this.$route.params.id;
        axios({
            url: '/api/view/get-good',
            method: 'post',
            data: {
                id: id
            }
        }).then(res => {
            const data = res.data[0];
            if(data !== undefined) {
                this.imgList = [
                    {url: require('../../' + data.img_1.substring(data.img_1.length - 32))},
                    {url: require('../../' + data.img_2.substring(data.img_2.length - 32))},
                    {url: require('../../' + data.img_3.substring(data.img_3.length - 32))},
                    {url: require('../../' + data.img_4.substring(data.img_4.length - 32))},
                    {url: require('../../' + data.img_5.substring(data.img_5.length - 32))}
                ];
                this.good = data
            } else {
                this.$message({
                    showClose: 'true',
                    message: '暂无商品！',
                    type: 'warning'
                })
            }
        })
    }
}
</script>


<style scoped>
.good-box-left {
    width: 402px;
    margin-right: 20px;
}
h2 {
    color: #ff5000;
}


/* 大图片 */
.img-big {
    margin-bottom: 40px;
    border: 1px solid #dddddd;
}
.mainBox {
    width: 400px;
    height: 400px;
    left: 0;
    top: 0;
    position: relative;

}
.mainImage {
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
}
.lay {
    background: orange;
    opacity: 0.5;
    position: absolute;
    cursor: move;
    display: none;
}


/* 超大图片 */
.img-super {
    width: 402px;
    height: 402px;
    top: 200px;
    left: 580px;
    z-index: -9;
    position: absolute;
}
.superBox {
    width: 400px;
    height: 400px;
    display: none;
    overflow: hidden;
    position: absolute;
    border: 1px solid #dddddd;
}
.superImage {
    width: 100%;
    height: 100%;
    position: absolute;
    display: block;
}


/* 小图片 */
.img-small {
    text-align: center;
}
.img-small img {
    width: 50px;
    height: 50px;
}
.img-small img:hover {
    padding: 3px;
    border: 1px solid #ff0000;
}


/* 右侧 */
.good-box-right {
    height: 400px;
    position: relative;
}
.description-box, .name-box, .price-box {
    margin-bottom: 40px;
}
.instruction {
    margin-right: 40px;
}
.price {
    color: #ff5000;
    font-size: 32px;
    font-weight: 700;
}
.good-button {
    position: absolute;
    bottom: 10px;
}
</style>
