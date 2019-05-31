<template>
    <div class="goodaddress">
        <div class="addaddress">
            <el-button type="text" @click="centerDialogVisible = true">新增收货地址</el-button>
            <span>您已创建n 个收货地址，最多可创建20个</span>
            <el-dialog
                title="提示"
                :visible.sync="centerDialogVisible"
                width="30%"
                center>
                    <span>需要注意的是内容是默认不居中的</span>
                    <span slot="footer" class="dialog-footer">
                    <el-button @click="centerDialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
              </span>
            </el-dialog>
        </div>

        <div class="address el-col-20" v-for="item in info" :key="item.mobile">
            <div class="address-name">{{item.name}}</div>
            <div class="address-info">
                <el-form  label-width="80px">
                    <el-form-item label="收货人">
                        <el-input v-model="item.name"></el-input>
                    </el-form-item>

                    <el-form-item label="所在地区">
                        <el-input v-model="item.area"></el-input>
                    </el-form-item>

                    <el-form-item label="地址">
                        <el-input v-model="item.address"></el-input>
                    </el-form-item>

                    <el-form-item label="手机号">
                        <el-input v-model="item.mobile"></el-input>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    name: 'goodaddress',
    data() {
        return {
            centerDialogVisible: false,
            info: [
                {
                    name: '方奇兵',
                    area: '广东省深圳市宝安区',
                    address: '西乡接到',
                    mobile: '18682210201'
                }
            ]
        }
    }
}
</script>


<style scoped>
.addaddress button {
    width: 100px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    padding: 0;
    color: #ffffff;
    margin-right: 10px;
    border: 1px solid #ff5000;
    border-radius: 20px;
    background: #ff5000;
}
.addaddress span {
    color: #aaaaaa;
}
.address {
    margin-top: 20px;
    border: 1px solid #aaaaaa;
    border-radius: 10px;
}
.address-name {
    padding: 10px;
    margin: 5px 0;
}
</style>
