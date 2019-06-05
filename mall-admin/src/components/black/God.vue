<template>
    <div id="god">
        <el-table
        :data="god.filter(data => !search || data.username.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%">

            <el-table-column
                label="id"
                width="55"
                prop="id">
            </el-table-column>

            <el-table-column
                label="god_id"
                width="150"
                prop="god_id">
            </el-table-column>

            <el-table-column
                label="username"
                width="120"
                prop="username">
            </el-table-column>

            <el-table-column
                label="mobile"
                width="120"
                prop="mobile">
            </el-table-column>

            <el-table-column
                label="email"
                width="200"
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
                    <el-button
                    size="mini"
                    type="success"
                    @click="restore(scope.$index, scope.row)">恢复</el-button>
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
        restore(index, row) {
            const id = row.id;
            axios({
                url: '/api/admin/restoreGod',
                method: 'post',
                data: {
                    id: id
                }
            }).then(res => {
                if(res.data.msg === '恢复成功') {
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
            url: '/api/admin/List-DeletedGod-All',
            method: 'post',
        }).then(res => {
            this.god = res.data;
        })
    }
};
</script>


<style scoped>

</style>
