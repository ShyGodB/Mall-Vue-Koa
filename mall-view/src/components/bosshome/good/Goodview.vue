<template>
    <div class="good-view">
        <el-table
        ref="multipleTable"
        :data="goodList.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        tooltip-effect="dark"
        @selection-change="handleSelectionChange"
        style="width: 100%">

            <el-table-column
            type="selection"
            width="55">
            </el-table-column>

            <el-table-column
            sortable
            prop="id"
            label="id"
            width="100">
            </el-table-column>

            <el-table-column
            label="store_id"
            sortable
            width="120"
            prop="store_id">
            </el-table-column>

            <el-table-column
            sortable
            prop="store_name"
            label="store_name"
            width="120">
            </el-table-column>

            <el-table-column
            sortable
            prop="name"
            label="name"
            width="120">
            </el-table-column>

            <el-table-column
            sortable
            prop="brand"
            label="品牌"
            width="120">
            </el-table-column>

            <el-table-column
            sortable
            prop="old_price"
            label="old_price"
            width="120">
            </el-table-column>

            <el-table-column
            sortable
            prop="new_price"
            label="new_price"
            width="120">
            </el-table-column>

            <el-table-column label="操作">
                <template slot="header" slot-scope="scope">
                    <el-input
                    v-model="search"
                    size="mini"
                    placeholder="输入关键字搜索 / name"/>
                </template>

                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'good-view',
    data() {
        return {
            search: '',
            goodList: []
        }
    },
    methods: {
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            const id = row.id;
            axios({
                url: '/api/view/delete-good',
                method: 'post',
                data: {
                    id: id
                }
            }).then(res => {
                if(res.data.msg === '删除成功') {
                    this.goodList.splice(index, 1);
                    this.$message({
                        showClose: true,
                        message: res.data.msg,
                        type: 'success'
                    });
                }
            })
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        formatter(row, column) {
            return row.address;
        }
    },
    created() {
        if(this.$session.exists() && this.$session.getAll().token === 'boss') {
            const boss_id = this.$session.getAll().userinfo.boss_id;
            axios({
                method: 'post',
                url: '/api/view/List-ValuableGood-All',
                data: {
                    boss_id: boss_id
                }
            }).then(res => {
                if(res.status === 200) {
                    this.goodList = res.data;
                }
            })
        } else {
            this.$message({
                showClose: true,
                message: '尚未登陆，请登录',
                type: 'warning'
            })
            this.$router.push("/");
        }
    }
}
</script>


<style scoped>

</style>
