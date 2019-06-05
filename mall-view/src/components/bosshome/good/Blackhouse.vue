<template>
    <div id="blackhouse-good">
        <el-table
        ref="multipleTable"
        tooltip-effect="dark"
        @selection-change="handleSelectionChange"
        :data="goodList.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%">

            <el-table-column
            type="selection"
            width="55">
            </el-table-column>

            <el-table-column
                label="id"
                sortable
                width="100"
                prop="id">
            </el-table-column>

            <el-table-column
                label="store_id"
                sortable
                width="100"
                prop="store_id">
            </el-table-column>

            <el-table-column
                label="store_name"
                sortable
                width="120"
                prop="store_name">
            </el-table-column>
            
            <el-table-column
                label="name"
                sortable
                width="100"
                prop="name">
            </el-table-column>

            <el-table-column
                label="old_price"
                sortable
                width="100"
                prop="old_price">
            </el-table-column>

            <el-table-column
                label="new_price"
                sortable
                width="120"
                prop="new_price">
            </el-table-column>

            <el-table-column
                label="brand"
                sortable
                width="100"
                prop="brand">
            </el-table-column>

            <el-table-column align="left">
                <template slot="header" slot-scope="scope">
                    <el-input
                    v-model="search"
                    size="mini"
                    placeholder="输入关键字搜索/ username"/>
                </template>
                <template slot-scope="scope">
                    <el-button size="mini" type="success"
                    @click="restore(scope.$index, scope.row)">恢复</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    name: 'blackhouse-good',
    data() {
        return {
            search: '',
            goodList: []
        };
    },
    methods: {
        restore(index, row) {
            const id = row.id;
            axios({
                url: '/api/view/restore-good',
                method: 'post',
                data: {
                    id: id
                }
            }).then(res => {
                if(res.data.msg === '恢复成功') {
                    this.goodList.splice(index, 1);
                    this.$message({
                        showClose: true,
                        message: res.data.msg,
                        type: 'success'
                    });
                }
            })
        },
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        formatter(row, column) {
            return row.address;
        }
    },
    created() {
        axios({
            url: '/api/view/List-DeletedGood-All',
            method: 'post'
        }).then(res => {
            this.goodList = res.data;
        })
    }
};
</script>


<style scoped>

</style>
