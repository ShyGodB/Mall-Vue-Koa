<template>
    <div id="god">
        <el-table
        :data="god.filter(data => !search || data.username.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%">

            <el-table-column
                label="id"
                width="100"
                sortable
                prop="id">
            </el-table-column>

            <el-table-column
                label="god_id"
                width="150"
                sortable
                prop="god_id">
            </el-table-column>

            <el-table-column
                label="username"
                width="120"
                sortable
                prop="username">
            </el-table-column>

            <el-table-column
                label="mobile"
                width="120"
                sortable
                prop="mobile">
            </el-table-column>

            <el-table-column
                label="email"
                width="200"
                sortable
                prop="email">
            </el-table-column>

            <el-table-column align="left">
                <template slot="header" slot-scope="scope">
                    <el-input
                    v-model="search"
                    size="mini"
                    placeholder="输入关键字搜索/ username"/>
                </template>
                <template slot-scope="scope">
                    <el-button size="mini" type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    name: 'god',
    data() {
        return {
            search: '',
            god: []
        };
    },
    methods: {
        handleDelete(index, row) {
            const id = row.id;
            axios({
                url: '/api/admin/deleteGod',
                method: 'post',
                data: {
                    id: id
                }
            }).then(res => {
                if(res.data.msg === '删除成功') {
                    this.god.splice(index, 1);
                    this.$message({
                        showClose: true,
                        message: res.data.msg,
                        type: 'success'
                    });
                }
            })
        }
    },
    created() {
        axios({
            url: '/api/admin/List-ValuableGod-All',
            method: 'post'
        }).then(res => {
            this.god = res.data;
        })
    }
};
</script>


<style scoped>

</style>
