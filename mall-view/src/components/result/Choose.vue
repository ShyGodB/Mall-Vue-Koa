<template>
    <div id="choose">
        <div class="brand">
            <el-row :gutter="20">
                <el-col :span="2">
                    <div class="brand-title title">
                        机器品牌:
                    </div>
                </el-col>

                <el-col :span="20">
                    <div class="brand-body">
                        <ul>
                            <li v-for="item in computers" :key="item.name">
                                <a href="#" title="item.name">
                                    <img :src="item.img" :alt="item.name">
                                </a>
                            </li>
                        </ul>
                    </div>
                </el-col>

                <el-col :span="2">
                    <div class="brand-more">
                        <span>更多</span>
                        <i class="el-icon-plus"></i>
                    </div>
                </el-col>
            </el-row>
        </div>

        <div class="type">
            <el-row :gutter="20">
                <el-col :span="2">
                    <div class="type-tile title">
                        机器类型:
                    </div>
                </el-col>

                <el-col :span="20">
                    <div class="type-body">
                        <ul>
                            <li v-for="item in types" :key="item">
                                <a href="#" title="item">
                                    {{item}}
                                </a>
                            </li>
                        </ul>
                    </div>
                </el-col>

                <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
        </div>

        <div class="capacity-disk">
            <el-row :gutter="20">
                <el-col :span="2">
                    <div class="capacity-disk-title title">
                        硬盘容量:
                    </div>
                </el-col>

                <el-col :span="20">
                    <div class="capacity-disk-body">
                        <ul>
                            <li v-for="item in disk" :key="item">
                                <a href="#" title="item">
                                    {{item}}
                                </a>
                            </li>
                        </ul>
                    </div>
                </el-col>
                <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
        </div>

        <div class="capacity-memory">
            <el-row :gutter="20">
                <el-col :span="2">
                    <div class="capacity-memory-title title">
                        内存容量:
                    </div>
                </el-col>

                <el-col :span="20">
                    <div class="capacity-memory-body">
                        <ul>
                            <li v-for="item in memory" :key="item">
                                <a href="#" title="item">
                                    {{item}}
                                </a>
                            </li>
                        </ul>
                    </div>
                </el-col>
                <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
        </div>

        <div class="CPU">
            <el-row :gutter="20">
                <el-col :span="2">
                    <div class="CPU-title title">
                        CPU类型:
                    </div>
                </el-col>

                <el-col :span="20">
                    <div class="CPU-body">
                        <ul>
                            <li v-for="item in cpu" :key="item">
                                <a href="#" title="item">
                                    {{item}}
                                </a>
                            </li>
                        </ul>
                    </div>
                </el-col>

                <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
        </div>

        <div class="conditions">
            <el-row :gutter="20">
                <el-col :span="2">
                    <div class="conditions-title title">
                        筛选条件:
                    </div>
                </el-col>

                <el-col :span="20">
                    <div class="conditions-body">
                        <ul>
                            <li v-for="item in conditions" :key="item">
                                <a href="#" title="item">
                                    {{item}}
                                </a>
                            </li>
                        </ul>
                    </div>
                </el-col>

                <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
        </div>
    </div>
</template>


<script>

export default {
    name: 'choose',
    data() {
        return {
            computers: [
                {
                    name: '戴尔',
                    img: '//img20.360buyimg.com/popshop/jfs/t5734/66/8958452339/6938/b84b1828/59804402N1c4e5159.jpg'
                },
                {
                    name: '联想',
                    img: '//img20.360buyimg.com/popshop/jfs/t1/7730/1/1440/6292/5bce7447E8c0dc0cf/15668b30fabe0850.jpg'
                },
                {
                    name: '惠普',
                    img: '//img30.360buyimg.com/popshop/jfs/t5788/54/8901914018/7250/d980df7a/598035b4N9cd3ed1e.jpg'
                },
                {
                    name: '海尔',
                    img: '//img20.360buyimg.com/popshop/jfs/t21412/118/1184001277/3682/4a88a8cb/5b221dd6N8b93f2ef.jpg'
                },
                {
                    name: '外星人',
                    img: '//img30.360buyimg.com/popshop/jfs/t616/227/1460539799/2609/68794690/54daf836N393128ad.jpg'
                },
                {
                    name: '神舟',
                    img: '//img30.360buyimg.com/popshop/jfs/t6781/295/1360629027/4140/210c5587/59803674N3ea83874.jpg'
                },
                {
                    name: '雷神',
                    img: '//img20.360buyimg.com/popshop/jfs/t1/33410/24/10791/17291/5ccfdbf4Ef1d48fc5/1c81c9085ac13bbd.jpg'
                },
                {
                    name: '华为',
                    img: '//img30.360buyimg.com/popshop/jfs/t1/21713/1/5027/5175/5c38740eE4ccfc381/0bedaba1e05119ac.jpg'
                },
                {
                    name: '小米',
                    img: '//img20.360buyimg.com/popshop/jfs/t1/906/28/10166/2645/5bc93b63Eb0813c2e/600c61f344607414.jpg'
                }
            ],
            types: [ '台式机', '笔记本', '一体机', '游戏本', '平板电脑', '服务器' ],
            disk: ['128GB', '256GB', '512GB', '1TB', '2TB', '3TB', '4TB', '5TB', '8TB'],
            memory: ['2GB', '4GB', '8GB', '16GB', '32GB'],
            cpu: ['Intel/英特尔至强E5', 'Intel/英特尔酷睿i7', 'Intel/英特尔酷睿i5','INTEL XEON', 'Intel/英特尔酷睿i3'],
            conditions: ['芯片类型', '适用场景', '显存容量', '配置类型', '相关分类']
        }
    }
}
</script>


<style scoped>
#choose {
    border: 1px solid #eeeeee;
    border-radius: 10px;
    margin-bottom: 20px;
}
.brand {
    height: 50px;
}
.type, .capacity-disk, .capacity-memory, .CPU, .conditions {
    height: 30px;
    line-height: 30px;
}
li {
    list-style-type: none;
    display: inline-block;
    float: left;
    margin-left: 15px;
}
.brand li {
    border: 1px solid #dddddd;
    padding: 2px;
}
a {
    color: #005aa0;
    text-decoration: none;
    list-style: none;
}
.brand, .type, .capacity-disk, .capacity-memory, .CPU {
    border-bottom: 1px solid #eeeeee;
    color: #000000;
    font-size: 18px;
    padding: 5px 10px;
}
.conditions {
    color: #000000;
    font-size: 18px;
    padding: 5px 10px;
}
.brand-more {
    background: #aaaaaa;
    padding: 1px 6px;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
    margin-right: 20px;
}
</style>
