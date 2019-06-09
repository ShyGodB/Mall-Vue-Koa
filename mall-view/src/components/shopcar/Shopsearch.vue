<template>
    <div id="shopsearch">
        <div class="shopsearch-left el-col-12">
            <a href="http://127.0.0.1:8080" class="shopsearch-left-icon"></a>
            <a href="#" class="shopsearch-left-text">购物车</a>
        </div>

        <div class="shopsearch-right el-col-12">
            <div class="shopsearch-right-search">
                <input type="text" v-model="userInput" placeholder="手机 || 电脑" ></input>
                <button type="button" id="" name="search" @click="search">搜索</button>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'shopsearch',
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
.shopsearch-right-search {
    width: 100%;
    border: 3px solid #FF0000;
    margin-top:  10px;
}
.shopsearch-right-search input{
    width: 70%;
    outline: none;
    border: 0;
    line-height: 30px;
    margin-left: 3px;
}
.shopsearch-right-search button {
    width: 60px;
    height: 30px;
    float: right;
    background: #ff0000;
    color: #FFFFFF;
    border: 1px solid #ff0000;
}
.shopsearch-left-icon {
    display: inline-block;
    margin-top: 2px;
    width: 134px;
    height: 42px;
    background: url(//misc.360buyimg.com/jdf/1.0.0/unit/global-header/5.0.0/i/jdlogo-201708-@1x.png) no-repeat 0 0;
    background-size: 134px 42px;
    text-indent: -20000px;
}
.shopsearch-left-text {
    display: inline-block;
    color: #666;
    width: 100px;
    height: 42px;
    line-height: 42px;
    font-size: 24px;
    font-weight: 900;
    background: #fff;
    position: relative;
    top: -5px;
    margin-left: 10px;
    text-decoration: none;
}
</style>
