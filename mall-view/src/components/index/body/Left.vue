<template>
      <div id="left">
            <div class="left-top">
                主题市场
            </div>

            <div class="left-end">
                <el-breadcrumb v-for="(item, key) in items" :key="item.id">
                    <el-breadcrumb-item>{{item.first}}</el-breadcrumb-item>
                    <el-breadcrumb-item>{{item.second}}</el-breadcrumb-item>
                    <el-breadcrumb-item>{{item.end}}</el-breadcrumb-item>
                    <i class="el-icon-arrow-right"></i>
                </el-breadcrumb>
            </div>
      </div>
</template>


<script>
export default {
  name: 'left',
  data() {
      return {
          items: [
              { first: '女装', second: '男装', end: '内衣' },
              { first: '鞋靴', second: '箱包', end: '配件' },
              { first: '童装', second: '玩具', end: '用品' },
              { first: '家电', second: '数码', end: '手机' },

              { first: '美食', second: '生鲜', end: '零食' },
              { first: '珠宝', second: '眼镜', end: '手表' },
              { first: '运动', second: '户外', end: '乐器' },
              { first: '游戏', second: '动漫', end: '影视' },

              { first: '鲜花', second: '宠物', end: '农资' },
              { first: '工具', second: '装修', end: '建材' },
              { first: '家具', second: '家饰', end: '家纺' },
              { first: '美妆', second: '洗护', end: '保健' },

              { first: '汽车', second: '用品', end: '二手' },
              { first: '办公', second: 'DIY', end: '电子' },
              { first: '百货', second: '餐厨', end: '保健' },
              { first: '学习', second: '卡券', end: '服务' },
          ]
      }
  }
}
</script>

<style scoped>
#left {
    height: 580px;
}
#left .left-top {
    width: 100%;
    height: 30px;
    color: #FFFFFF;
    text-align: center;
    background: #ff5000;
}
.el-breadcrumb {
     height: 28px;
     font-size: 14px;
     line-height: 34px;
     margin: 2px 0;
     padding: 0 20px;
}
.el-breadcrumb i {
    display: inline-block;
    float: right;
    height: 34px;
    line-height: 34px;
}
</style>
