<template>
    <div id="store">
        <el-table
        :data="store.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%">

            <el-table-column
                label="id"
                width="100"
                sortable
                prop="id">
            </el-table-column>

            <el-table-column
                label="boss_id"
                width="150"
                sortable
                prop="boss_id">
            </el-table-column>

            <el-table-column
                label="boss_name"
                width="150"
                sortable
                prop="boss_name">
            </el-table-column>

            <el-table-column
                label="name"
                width="120"
                sortable
                prop="name">
            </el-table-column>

            <el-table-column
                label="type"
                width="120"
                sortable
                prop="type">
            </el-table-column>

            <el-table-column
                label="nature"
                width="200"
                sortable
                prop="nature">
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
                    @click="restore(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    name: 'store',
    data() {
        return {
            search: '',
            store: []
        };
    },
    methods: {
        restore(index, row) {
            const id = row.id;
            axios({
                url: '/api/admin/restoreStore',
                method: 'post',
                data: {
                    id: id
                }
            }).then(res => {
                if(res.data.msg === '恢复成功') {
                    this.store.splice(index, 1);
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
            url: '/api/admin/List-DeletedStore-All',
            method: 'post',
        }).then(res => {
            this.store = res.data;
        })
    }
};
</script>


<style scoped>

</style>
