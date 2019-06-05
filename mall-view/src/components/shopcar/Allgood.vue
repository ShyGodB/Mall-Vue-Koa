<template>
    <div id="allgood">
        <el-table
        ref="multipleTable"
        :data="goods"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
            <el-table-column
            type="selection"
            width="55">
            </el-table-column>

            <el-table-column
            show-overflow-tooltip
            label="商品"
            prop="description">
            </el-table-column>

            <el-table-column
            show-overflow-tooltip
            width="80"
            label="单价"
            prop="new_price">
            </el-table-column>

            <el-table-column
            width="160"
            label="数量">
                <template slot-scope="scope">
                    <el-input-number v-model="goods[scope.$index].num" size="mini" @change="handleChange(scope.$index, scope.row)" :min="1" :max="999" label="描述文字"></el-input-number>
                </template>
            </el-table-column>

            <el-table-column
            show-overflow-tooltip
            width="120"
            label="小计"
            prop="subtotal">
            </el-table-column>

            <el-table-column
            show-overflow-tooltip
            width="160"
            label="操作"
            prop="edit">
                <template slot-scope="scope">
                    <el-button
                      size="mini"
                      type="danger"
                      @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <div class="allgood-result">
            <div class="allgood-result-left">
                <el-checkbox v-model="checked" @change="isAllGood">全选</el-checkbox>
            </div>

            <div class="allgood-result-right">
                <span id="choosenum">已选择: <strong>{{number}} </strong>件商品</span>
                <span id="allpay">总价: <strong>{{allpay}} </strong> 元</span>
                <button id="gopay" type="button" name="button" @click="goPay">去结算</button>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    name: 'allgood',
    data() {
        return {
            checked: false,
            checkedALl: false,
            checkedPart: false,
            number: 0,
            allpay: 0,
            goods: [],
            multipleSelection: []
        }
    },
    methods: {
        handleSelectionChange(val) {
            if(val.length === this.goods.length) {
                this.checkedALl = true;
                this.checkedPart = false;
            } else {
                this.checkedALl = false;
                this.checkedPart = true;
            }
            this.number = 0;
            this.allpay = 0;
            this.multipleSelection = val;
            let m = 0;
            for(let i = 0; i < val.length; i++) {
                this.number += val[i].num;
                m += Number(val[i].subtotal);
            }
            this.allpay = m.toFixed(2);
        },
        handleChange(index, row) {
            console.log(index, row);
            this.goods[index].subtotal = Number((row.new_price * row.num).toFixed(2));
            if(this.checkedALl === true || this.checked === true) {
                this.handleSelectionChange(this.goods);
            }
            // 事实更新数据表中的数据
            const id = row.id;
            const num = row.num;
            const subtotal = row.subtotal;
            axios({
                url: '/api/view/update-good-info-in-car',
                method: 'post',
                data: {
                    id: id,
                    num: num,
                    subtotal: subtotal
                }
            }).then(res => {
                console.log(res.data);
                if(res.status !== 200) {
                    this.$message({
                        showClose: true,
                        message: '更新数据出错，请重试！',
                        type: 'error'
                    });
                }
            })
        },
        handleDelete(index, row) {
            const id = row.id;
            this.$confirm('此操作将永久移除该商品, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
                axios({
                    url: '/api/view/delete-good-from-car',
                    method: 'post',
                    data: {
                        id: id
                    }
                }).then(res => {
                    if(res.status === 200) {
                        this.goods.splice(index, 1);
                        this.$message({
                          type: 'success',
                          message: res.data.msg
                        });
                    }
                })
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消删除'
              });
            });
        },
        isAllGood() {
            if(this.checked === true) {
                this.handleSelectionChange(this.goods);
            } else {
                this.allpay = 0;
            }
        },
        goPay() {
            alert('此功能尚未完善！')
        }
    },
    created() {

        const session = this.$session.getAll();
        if(session.token === 'god') {
            const god_id = session.userinfo.god_id;
            axios({
                url: '/api/view/list-goods-from-car',
                method: 'post',
                data: {
                    god_id: god_id
                }
            }).then(res => {
                if(res.status === 200) {
                    this.goods = res.data;
                }
            })
        } else {
            this.$router.push('/404');
        }
    }
}
</script>

<style scoped>
.allgood-result {
    margin-top: 20px;
}
.allgood-result-left {
    float: left;
    height: 35px;
    line-height: 35px;
    margin-left: 14px;
}
.allgood-result-right {
    height: 35px;
    line-height: 35px;
    float: right;
}

#choosenum {
    margin-right: 20px;
}
#allpay {
    margin-right: 20px;
}
#gopay {
    width: 66px;
    height: 40px;
    position: relative;
    bottom: 4px;
    color: #ffffff;
    background: #ff0000;
}
#choosenum strong {
    color: #ff0000;
    font-size: 18px;
    font-weight: 800;
}
#allpay strong {
    color: #ff0000;
    font-size: 24px;
    font-weight: 800;
}
</style>
