<template>
    <div id="goods">
        <el-row>
            <el-col :span="4" id="left-box">
                <div class="good-left">
                    <a href="#" v-for="item in leftgoods" :key="item.name">
                        <div class="good-img">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="good-info">
                            <div class="good-price">
                                <i>¥</i>
                                <span>{{item.price}}</span>
                            </div>
                            <p>{{item.name}}</p>
                        </div>
                    </a>
                </div>
            </el-col>

            <el-col :span="19">
                <div class="good">
                    <div class="sorting">
                        <span>
                            <span>综合</span>
                            <i class="el-icon-bottom"></i>
                        </span>

                        <span>
                            <span>销量</span>
                            <i class="el-icon-bottom"></i>
                        </span>

                        <span>
                            <span>评价数</span>
                            <i class="el-icon-bottom"></i>
                        </span>

                        <span>
                            <span>新品</span>
                            <i class="el-icon-bottom"></i>
                        </span>

                        <span id='price-good-span'>
                            <span>价格</span>
                            <em>
                                <i class="el-icon-caret-top"></i>
                                <i class="el-icon-caret-bottom"></i>
                            </em>
                        </span>

                        <div class="sorting-right">
                            <span>共有<strong>989</strong>件商品</span>
                        </div>
                    </div>

                     <a href="#" v-for="(item, key) in goods" :key="key">
                        <div class="good-img-main">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="good-info">
                            <div class="good-price">
                                <i>¥</i>
                                <span>{{item.price}}</span>
                            </div>
                            <p>{{item.name}}</p>
                        </div>
                    </a>
                </div>
            </el-col>
        </el-row>
    </div>
</template>


<script>


export default {
  name: 'goods',
  data() {
      return {
          leftgoods: [
              {
                  name: '威龙远航 酷睿i5升四核/16G/GTX1060 吃鸡游戏组装电脑主机台式机DIY家用办公组装机 配置二（四核+16G+RX560）',
                  img: 'https://img10.360buyimg.com/n2/jfs/t1/47075/24/1080/170789/5cecc22dE6d60a29d/4e5fb156448b150a.jpg',
                  price: '1699.00'
              },
              {
                  name: '硕扬 i7 8700升8核/6G升8G显卡升32G大内存/游戏台式吃鸡电脑主机/DIY组装机',
                  img: 'https://img13.360buyimg.com/n2/jfs/t28468/189/1107313730/168750/9eb6b1d4/5cd698b5N5685fe71.jpg',
                  price: '2399.00'
              },
              {
                  name: '硕扬 i7 8700升E5十核/RX580 8G显卡/32G内存/游戏台式吃鸡电脑主机/DIY组装机',
                  img: 'https://img12.360buyimg.com/n2/jfs/t1/33771/4/12440/162633/5ced0758E293f0cc4/5498383bd42f4ac5.jpg',
                  price: '2689.00'
              },
              {
                  name: '威龙远航 酷睿i5升四核/16G/GTX1060 吃鸡游戏组装电脑主机台式机DIY家用办公组装机 配置一（四核+16G+RX560）',
                  img: 'https://img11.360buyimg.com/n2/jfs/t1/57678/24/1098/167248/5cecc617E21638904/68d91f365250a1da.jpg',
                  price: '1698.00'
              },
              {
                  name: '航向者i5 9400/RX580/GTX1060/32G内存游戏办公吃鸡台式组装电脑主机DIY组装机 主机 配置一/i3 8100/8G/RX560-4G',
                  img: 'https://img11.360buyimg.com/n2/jfs/t1/286/5/13719/101810/5bd81194Eed62c961/b7ef1f9ac1799284.jpg',
                  price: '1499.00'
              }
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
              },
              {
                  name: '未来人类(Terrans Force)T700 17.3英寸高性能游戏本(i7-8750H GTX1070 16G 512G PCIe*4+1T FHD144Hz WIN10)',
                  img: 'https://img11.360buyimg.com/jdcms/s300x300_jfs/t1/970/13/14372/60610/5bda56fcE64388577/87a6979e89b3e293.jpg!q90!cc_170x170.webp',
                  price: '12499.00'
              },
              {
                  name: '华为 HUAWEI P30 超感光徕卡三摄麒麟980AI智能芯片全面屏屏内指纹版手机8GB+64GB亮黑色全网通双4G手机双',
                  img: 'https://img11.360buyimg.com/jdcms/s300x300_jfs/t1/28692/26/12501/332089/5c98cc90E6c89e802/9c3ceb43a54dcb93.jpg!q90!cc_170x170.webp',
                  price: '3988.00'
              },
              {
                  name: '华硕（ASUS） 超薄笔记本电脑i5独显超清屏灵耀S4200/S4300商务办公轻薄金属超极本 冰钻金/2G独显 i5-8265U/4G内存/ITB硬盘/套餐一',
                  img: 'https://img13.360buyimg.com/jdcms/s300x300_jfs/t1/25161/12/8162/84017/5c750356E59beece7/86a823d440197564.jpg!q90!cc_170x170.webp',
                  price: '4599.00'
              },
              {
                  name: '神舟 （HASEE） 新锐A20-3140S1N 一体机台式电脑21.5英寸 （Intel 赛扬四核J3160 win7 4G 120G WIFI ）',
                  img: 'https://img11.360buyimg.com/jdcms/s300x300_jfs/t1/30428/37/4280/446081/5c7c9298Ef4c21135/25d447bbb85c3c38.jpg!q90!cc_170x170.webp',
                  price: '1699.00'
              },
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
              },
              {
                  name: '未来人类(Terrans Force)T700 17.3英寸高性能游戏本(i7-8750H GTX1070 16G 512G PCIe*4+1T FHD144Hz WIN10)',
                  img: 'https://img11.360buyimg.com/jdcms/s300x300_jfs/t1/970/13/14372/60610/5bda56fcE64388577/87a6979e89b3e293.jpg!q90!cc_170x170.webp',
                  price: '12499.00'
              },
              {
                  name: '华为 HUAWEI P30 超感光徕卡三摄麒麟980AI智能芯片全面屏屏内指纹版手机8GB+64GB亮黑色全网通双4G手机双',
                  img: 'https://img11.360buyimg.com/jdcms/s300x300_jfs/t1/28692/26/12501/332089/5c98cc90E6c89e802/9c3ceb43a54dcb93.jpg!q90!cc_170x170.webp',
                  price: '3988.00'
              },
              {
                  name: '华硕（ASUS） 超薄笔记本电脑i5独显超清屏灵耀S4200/S4300商务办公轻薄金属超极本 冰钻金/2G独显 i5-8265U/4G内存/ITB硬盘/套餐一',
                  img: 'https://img13.360buyimg.com/jdcms/s300x300_jfs/t1/25161/12/8162/84017/5c750356E59beece7/86a823d440197564.jpg!q90!cc_170x170.webp',
                  price: '4599.00'
              },
              {
                  name: '神舟 （HASEE） 新锐A20-3140S1N 一体机台式电脑21.5英寸 （Intel 赛扬四核J3160 win7 4G 120G WIFI ）',
                  img: 'https://img11.360buyimg.com/jdcms/s300x300_jfs/t1/30428/37/4280/446081/5c7c9298Ef4c21135/25d447bbb85c3c38.jpg!q90!cc_170x170.webp',
                  price: '1699.00'
              },
          ]
      }
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
.good a {
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
.good a:hover {
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
.sorting {
    width: 100%;
    height: 36px;
    line-height: 36px;
    padding: 5px;
    margin-bottom: 10px;
    background: #eeeeee;
}
.sorting>span {
    display: inline-block;
    color: #aaaaaa;
    border: 1px solid #aaaaaa;
    cursor: pointer;
    padding: 0 5px;
}
.sorting>div {
    display: inline-block;
    float: right;
    color: #aaaaaa;
    border: 1px solid #aaaaaa;
    padding: 0 5px;
    border-radius: 5px;
    margin-right: 10px;
    cursor: pointer;
}
strong {
    color: #ff5000;
}
em {
    display: inline-block;
    width: 13px;
    vertical-align: top;
}
.el-icon-caret-top {
    float: left;
    height: 12px;
    width: 13px;
    overflow: hidden;
}
.el-icon-caret-bottom {
    float: left;
    height: 12px;
    width: 13px;
    overflow: hidden;
}
</style>
