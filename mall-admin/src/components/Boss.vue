<template>
    <div id="boss">
        <el-table
        size="medium"
        :data="boss.filter(data => !search || data.username.toLowerCase().includes(search.toLowerCase()))"
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
                    <el-button
                    size="mini"
                    type="danger"
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
    name: 'boss',
    data() {
        return {
            search: '',
            boss: [],
            allBoss: [],
            pageNum: 1
        }
    },
    methods: {
        change(value) {
            this.boss = this.allBoss.slice(11 * (value - 1), 11 * value);
        },
        sizeChange(num) {
            console.log(num);
        },
        handleDelete(index, row) {
            const id = row.id;
            axios({
                url: '/api/admin/deleteBoss',
                method: 'post',
                data: {
                    id: id
                }
            }).then(res => {
                if(res.data.msg === '删除成功') {
                    this.boss.splice(index, 1);
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
                url: '/api/admin/List-ValuableBoss-All',
                method: 'post'
            }).then(res => {
                this.allBoss = res.data;
                this.pageNum = Math.floor(res.data.length / 11) + 1;
                this.boss = res.data.slice(0, 11);
            })
        }
    },
    created() {
        this.listData();
    }
};
</script>


<style scoped>

</style>
