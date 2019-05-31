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
            prop="good">
            </el-table-column>

            <el-table-column
            show-overflow-tooltip
            width="80"
            label="单价"
            prop="price">
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
                      @click="handleEdit(scope.$index, scope.row)">删除</el-button>
                    <el-button
                      size="mini"
                      type="success"
                      @click="handleDelete(scope.$index, scope.row)">添加关注</el-button>
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
export default {
    name: 'allgood',
    data() {
        return {
            checked: false,
            checkedALl: false,
            checkedPart: false,
            number: 0,
            allpay: 0,
            goods: [
                {
                    good: '美国halo导汗带排汗带运动健身束发头带硅胶跑步骑行 一体型--LOGO版',
                    price: 87.90,
                    num: 1,
                    subtotal: 87.90,
                },
                {
                    good: '金士顿（Kingston）u盘闪存盘32g64g128g系统优盘商务办公车载高速刻字U盘USB3.0',
                    price: 134.90,
                    num: 2,
                    subtotal: 269.80,
                },
                {
                    good: '金士顿（Kingston）u盘闪存盘32g64g128g系统优盘商务办公车载高速刻字U盘USB2.0',
                    price: 134.90,
                    num: 2,
                    subtotal: 269.80,
                }
            ],
            multipleSelection: []
        }
    },
    methods: {
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
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
                m += val[i].subtotal;
            }
            this.allpay = m.toFixed(2);
        },
        handleChange(index, row) {
            this.goods[index].subtotal = Number((row.price * row.num).toFixed(2));
            if(this.checkedALl === true || this.checked === true) {
                this.handleSelectionChange(this.goods);
            }
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
