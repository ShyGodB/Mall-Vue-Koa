<template>
    <div id="good">
        <el-table
        :data="good.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%">

            <el-table-column
                label="id"
                width="55"
                prop="id">
            </el-table-column>

            <el-table-column
                label="store_id"
                width="120"
                prop="store_id">
            </el-table-column>

            <el-table-column
                label="store_name"
                width="120"
                prop="store_name">
            </el-table-column>

            <el-table-column
                label="boss_id"
                width="120"
                prop="boss_id">
            </el-table-column>

            <el-table-column
                label="boss_name"
                width="120"
                prop="boss_name">
            </el-table-column>

            <el-table-column
                label="name"
                width="120"
                prop="name">
            </el-table-column>

            <el-table-column
                label="old_price"
                width="120"
                prop="old_price">
            </el-table-column>

            <el-table-column
                label="new_price"
                width="120"
                prop="new_price">
            </el-table-column>

            <el-table-column
                label="brand"
                width="120"
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
    name: 'good',
    data() {
        return {
            search: '',
            good: []
        };
    },
    methods: {
        restore(index, row) {
            const id = row.id;
            axios({
                url: '/api/admin/restoreGood',
                method: 'post',
                data: {
                    id: id
                }
            }).then(res => {
                if(res.data.msg === '恢复成功') {
                    this.good.splice(index, 1);
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
            url: '/api/admin/List-DeletedGood-All',
            method: 'post'
        }).then(res => {
            this.good = res.data;
        })
    }
};
</script>


<style scoped>

</style>
