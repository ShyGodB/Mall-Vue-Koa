<template>
    <div id="search">
        <el-row>
            <el-col :span="6">
                <router-link to="/">
                    <div class="search-left"></div>
                </router-link>
            </el-col>

            <el-col :span="14">
                <div class="search-middle">
                    <div class="search-middle-box">
                        <input type="text" v-model="userInput" placeholder="手机 || 电脑" ></input>
                        <button type="button" id="" name="search" @click="search">搜索</button>
                    </div>

                    <div class="search-middle-suggestions">
                        <a href="javascript:;">
                            <router-link to="/result/笔记本电脑/complex">笔记本电脑</router-link>
                        </a> |

                        <a href="javascript:;">
                            <router-link to="/result/台式机/complex">台式机</router-link>
                        </a> |

                        <a href="javascript:;">
                            <router-link to="/result/平板电脑/complex">平板电脑</router-link>
                        </a> |

                        <a href="javascript:;">
                            <router-link to="/result/显示器/complex">显示器</router-link>
                        </a> |

                        <a href="javascript:;">
                            <router-link to="/result/显卡/complex">显卡</router-link>
                        </a> |

                        <a href="javascript:;">
                            <router-link to="/result/手机/complex">手机</router-link>
                        </a> |

                        <a href="javascript:;">
                            <router-link to="/result/电脑主机/complex">电脑主机</router-link>
                        </a>
                    </div>
                </div>
            </el-col>

            <el-col :span="4">
                <div class="search-right">
                    <div class="car-buy">
                        <a href="/shopcar">
                            <span>我的购物车</span>
                            <img id="buycar" src="../../public/icon/buy.svg" alt="">
                        </a>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>


<script>
export default {
    name: 'search',
    data() {
        return {
            userInput: ''
        }
    },
    methods: {
        search() {
            if(this.userInput === '') {
                this.$message({
                    message: '请输入内容！',
                })
            } else {
                this.$router.push({
                    name: 'result',
                    params: {
                        keyword: this.userInput,
                        item: 'complex'
                    }
                })
            }
        }
    }
}
</script>


<style scoped>
#search {
    width: 100%;
    height: 100px;
}

/* 左侧图片 */
.search-left {
    width: 90%;
    float: left;
    height: 90px;
    background-repeat: no-repeat;
    background-image: url(../../public/img/jd.png);
    background-size: 90% 90%;
}

/* 中间 -- 主体 -- 搜索部分 */
.search-middle {
    width: 90%;
    height: 100px;
    float: left;
    box-sizing: border-box;
    padding: 20px ;
}
.search-middle-box {
    width: 100%;
    border: 3px solid #FF0000;
}
.search-middle-box input{
    width: 70%;
    outline: none;
    border: 0;
    line-height: 30px;
    margin-left: 3px;
}
.search-middle-box button {
    width: 60px;
    height: 30px;
    float: right;
    background: #ff0000;
    color: #FFFFFF;
    border: 1px solid #ff0000;
}
.search-middle-suggestions {
    color: #AAAAAA;
    font-size: 14px;
    margin-top: 10px;
    text-align: center;
}
.search-middle-suggestions a {
    color: #AAAAAA;
    text-decoration: none;
}


/* 右边 -- 购物车 */
.search-right {
    width: 100%;
    float: right;
    height: 40px;
    padding: 25px 20px 25px 20px;
}
.search-right a {
    width: 64%;
    display: block;
    height: 34px;
    line-height: 34px;
    color: #000000;
    background: #F0F0F0;
    padding: 2px;
    border: 1px solid #F0F0F0;
    border-radius: 4px;
}
.search-right span {
    width: 60%;
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
</style>
