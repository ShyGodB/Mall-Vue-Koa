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
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>


<script>
export default {
    name: 'god',
    data() {
        return {
            search: '',
            god: [
                {
                    id: 1,
                    god_id: 'god-13866666666',
                    username: 'killer',
                    mobile: '13866666666',
                    email: 'killer@qq.com'
                },
                {
                    id: 2,
                    god_id: 'god-18888888888',
                    username: 'god',
                    mobile: '18888888888',
                    email: 'god@qq.com'
                }
            ]
        };
    },
    methods: {
        handleDelete(index, row) {
            console.log(index, row);
        }
    }
};
</script>


<style scoped>

</style>
