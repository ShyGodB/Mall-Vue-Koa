<template>
    <div id="good">
        <el-table
        :data="good.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%">

            <el-table-column
                label="id"
                width="60"
                sortable
                prop="id">
            </el-table-column>

            <el-table-column
                label="store_id"
                width="100"
                sortable
                prop="store_id">
            </el-table-column>

            <el-table-column
                label="store_name"
                width="120"
                sortable
                prop="store_name">
            </el-table-column>

            <el-table-column
                label="boss_id"
                width="160"
                sortable
                prop="boss_id">
            </el-table-column>

            <el-table-column
                label="boss_name"
                width="120"
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
                label="new_price"
                width="120"
                sortable
                prop="new_price">
            </el-table-column>

            <el-table-column
                label="brand"
                width="120"
                sortable
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
                    <el-button size="mini" type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <div class="pagination">
            <el-pagination ref="fenye" background @size-change="sizeChange" @current-change="change" layout="prev, pager, next" :hide-on-single-page="true" :page-count="pageNum"></el-pagination>
        </div>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    name: 'good',
    data() {
        return {
            search: '',
            good: [],
            pageNum: 1,
            allGood: []
        };
    },
    methods: {
        change(value) {
            this.good = this.allGood.slice(11 * (value - 1), 11 * value);
        },
        sizeChange(num) {
            console.log(num);
        },
        handleDelete(index, row) {
            const id = row.id;
            axios({
                url: '/api/admin/deleteGood',
                method: 'post',
                data: {
                    id: id
                }
            }).then(res => {
                if(res.data.msg === '删除成功') {
                    this.good.splice(index, 1);
                    this.$message({
                        showClose: true,
                        message: res.data.msg,
                        type: 'success'
                    });
                }
            })
        },
        listData() {
            axios({
                url: '/api/admin/List-ValuableGood-All',
                method: 'post'
            }).then(res => {
                this.allGood = res.data;
                this.pageNum = Math.floor(res.data.length / 11) + 1;
                this.good = res.data.slice(0, 11);
            })
        }
    },
    created() {
        this.listData();
    }
};
</script>


<style scoped>
.pagination {
    float: right;
    position: relative;
    top: 13px;
}
</style>
