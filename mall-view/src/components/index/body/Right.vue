<template>
    <div id="right">
        <div class="right-top">
            <span>天猫</span>
            <span>聚划算</span>
            <span>天猫超市</span>
            <span>京东</span>
            <span>苏宁易购</span>
            <span>网易严选</span>
            <span>淘抢购</span>
            <span>电器城</span>
            <span>司法拍卖</span>
            <span>淘宝心选</span>
            <span>兴农扶贫</span>
            <span>飞猪旅行</span>
            <span>智能生活</span>
            <span>苏宁易购</span>
        </div>

        <div class="right-main">
            <el-row>
                <el-col :span="16">
                    <div class="right-main-left">
                        <div class="block">
                            <el-carousel height="550px">
                                <el-carousel-item v-for="src in srcs" :key="src">
                                    <img :src="src" alt="">
                                </el-carousel-item>
                            </el-carousel>
                        </div>
                    </div>
                </el-col>

                <el-col :span="8">
                    <div class="right-main-top">
                        <img class="right-main-right-avatar" :src="require('../../../' + src)">

                        <div class="god-name" >
                            Hi, Everyone！
                        </div>
                        <div class="right-main-right-chioces">
                            <a href="#" v-for="(item, key) in choices" :key="key">
                                <p> {{item.value}} </p>
                                <span> {{item.name}} </span>
                            </a>
                        </div>
                    </div>

                    <div class="right-main-end">
                        <div class=""></div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>


<script>
export default {
  name: 'right',
  data() {
      return {
          src: '',
          srcs: [
              'https://img1.360buyimg.com/pop/s590x470_jfs/t1/83058/35/212/139874/5ce66fd3Efd972928/3513c3119346209e.jpg!q90!cc_590x470.webp',
              'https://img20.360buyimg.com/babel/s590x470_jfs/t1/82599/14/558/99967/5ceb8b72E12ea2df8/75dae7963a64d79d.jpg!q90!cc_590x470.webp',
              'https://img1.360buyimg.com/pop/s590x470_jfs/t1/72603/36/599/96175/5ceca823E7fc75366/f77cd5c7871b19c7.jpg!q90!cc_590x470.webp',
              'https://img1.360buyimg.com/pop/s590x470_jfs/t1/40326/17/7116/91718/5ce2637fEd1f53997/96ab66f8ccea49d5.jpg!q90!cc_590x470.webp',
              'https://img1.360buyimg.com/pop/s590x470_jfs/t1/52221/14/763/96123/5ce7b3e2E1dc0c961/bbc1a94d225044cf.jpg!q90!cc_590x470.webp',
              'https://img1.360buyimg.com/pop/s590x470_jfs/t1/50207/36/971/64623/5ceb89d8E1ac2c005/55f3e604060b419c.jpg!q90!cc_590x470.webp'
          ],
          choices: [
              { name: '待收货', value: '0'},
              { name: '待发货', value: '0'},
              { name: '待付款', value: '0'},
              { name: '待评价', value: '0'},
          ]
      }
  },
  created() {
      if(this.$session.exists() && this.$session.getAll().token === 'god') {
          const godinfo = this.$session.getAll().userinfo;
          this.godinfo = godinfo;
          const url = godinfo.avatar_url;
          this.src = url.substring(url.length - 22);
      } else {
          this.$router.push("/");
          this.src = 'assets/tt.png';
          this.$message({
              showClose: true,
              message: '尚未登陆，请登录',
              type: 'warning'
          })
      }
  }
}
</script>


<style scoped>
#right {
    width: 100%;
    height: 100%;
}
.god-name {
    text-align: center;
}
.right-top {
    width: 96.5%;
    height: 30px;
    padding: 0 20px;
    color: #ffffee;
    background: #ff9000;
}
.right-top span {
    line-height: 30px;
    text-align: center;
    margin: 0 10px;
    cursor: pointer;
}
.el-breadcrumb__inner {
    color: #ffffff;
}
.right-main-left {
    height: 100%;
}
.el-row {
    height: 550px;
}
img {
    width: 100%;
    height: 100%;
}
.el-col-8 {
    float: right;
    height: 100%;;
}
.right-main-top {
    height: 200px;
}
.right-main-end {
    width: 100%;
    height: 300px;
    background-image: url(../../../../public/img/tb.png);
    background-size: 100% 300px;
}
.right-main-right-avatar {
    width: 84px;
    height: 84px;
    display: block;
    margin: 10px auto;
    background-size: 84px 84px;
    border: 1px solid #ffffff;
    border-radius: 50%;
}
.ight-main-right-chioces {
    width: 100%;
    height: 116px;
}
.right-main-right-chioces a {
    display: inline-block;
    width: 64px;
    height: 64px;
    padding: 10px 14px;
    text-align: center;
    text-decoration: none;
}
.right-main-right-chioces p {
    color: #ff5000;
    font-size: 18px;
    font-weight: 800;
}
</style>
