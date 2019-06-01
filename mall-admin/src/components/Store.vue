<template>
    <div id="store">
        <el-table
        :data="store.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%">

            <el-table-column
                label="id"
                width="55"
                prop="id">
            </el-table-column>

            <el-table-column
                label="boss_id"
                width="150"
                prop="boss_id">
            </el-table-column>

            <el-table-column
                label="boss_name"
                width="150"
                prop="boss_name">
            </el-table-column>

            <el-table-column
                label="name"
                width="120"
                prop="name">
            </el-table-column>

            <el-table-column
                label="type"
                width="120"
                prop="type">
            </el-table-column>

            <el-table-column
                label="nature"
                width="200"
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
    inject: ['reload'],
    name: 'store',
    data() {
        return {
            search: '',
            store: []
        };
    },
    methods: {
        handleDelete(index, row) {
            const id = row.id;
            axios({
                url: '/api/admin/deleteStore',
                method: 'post',
                data: {
                    id: id
                }
            }).then(res => {
                if(res.data.msg === '删除成功') {
                    this.reload();
                }
            })
        }
    },
    created() {
        axios({
            url: '/api/admin/List-ValuableStore-All',
            method: 'post',
        }).then(res => {
            this.store = res.data;
        })
    }
};
</script>


<style scoped>

</style>
