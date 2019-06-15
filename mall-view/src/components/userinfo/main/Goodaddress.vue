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
                    <div class="add-address">
                        <el-form :model="newAddress" :rules="rules" label-width="80px">
                            <el-form-item label="收货人" prop="name">
                                <el-input v-model="newAddress.name"></el-input>
                            </el-form-item>

                            <el-form-item label="所在地区" prop="area">
                                <el-input v-model="newAddress.area"></el-input>
                            </el-form-item>

                            <el-form-item label="地址" prop="address">
                                <el-input v-model="newAddress.address"></el-input>
                            </el-form-item>

                            <el-form-item label="手机号" prop="mobile">
                                <el-input v-model="newAddress.mobile"></el-input>
                            </el-form-item>
                        </el-form>
                    </div>
                    <span slot="footer" class="dialog-footer">
                    <el-button @click="centerDialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="addaddress">确 定</el-button>
              </span>
            </el-dialog>
        </div>

        <div class="address el-col-20" v-for="item in info" :key="item.mobile">
            <div class="address-name">{{item.name}}</div>
            <div class="address-info">
                <el-form :rules="rules" label-width="80px">
                    <el-form-item label="收货人" prop="name">
                        <el-input v-model="item.name"></el-input>
                    </el-form-item>

                    <el-form-item label="所在地区" prop="area">
                        <el-input v-model="item.area"></el-input>
                    </el-form-item>

                    <el-form-item label="地址" prop="address">
                        <el-input v-model="item.address"></el-input>
                    </el-form-item>

                    <el-form-item label="手机号" prop="mobile">
                        <el-input v-model="item.mobile"></el-input>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    name: 'goodaddress',
    data() {
        return {
            centerDialogVisible: false,
            info: [],
            newAddress: {
                name: '',
                area: '',
                address: '',
                mobile: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入收货人姓名', trigger: 'blur' }
                ],
                area: [
                    { required: true, message: '请输入所处地区', trigger: 'blur' }
                ],
                address: [
                    { required: true, message: '请输入街道/区号', trigger: 'blur' }
                ],
                mobile: [
                    { required: true, message: '请输入手机号', trigger: 'blur' }
                ]
            },
        }
    },
    methods: {
        addaddress() {
            this.centerDialogVisible = false;
            const godId = this.$session.getAll().userinfo.id;
            this.newAddress.god_id = godId;
            axios({
                method: 'post',
                url: '/api/view/add-address',
                data: this.newAddress
            }).then(res => {
                console.log(res.data);
                if(res.status === 200) {
                    this.info = res.data;
                }
            })

        }
    },
    created() {
        const godId = this.$session.getAll().userinfo.id;
        axios({
            method: 'post',
            url: '/api/view/list-address-by-godId',
            data: {
                god_id: godId
            }
        }).then(res => {
            if(res.status === 200) {
                this.info = res.data;
            }
        })
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
