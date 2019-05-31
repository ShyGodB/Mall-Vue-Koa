<template>
    <div id="store">
        <el-table
        :data="store.filter(data => !search || data.username.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%">

            <el-table-column
                label="id"
                width="55"
                prop="id">
            </el-table-column>

            <el-table-column
                label="store_id"
                width="150"
                prop="store_id">
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
                    @click="restore(scope.$index, scope.row)">恢复</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>


<script>
export default {
    name: 'store',
    data() {
        return {
            search: '',
            store: [
                {
                    id: 1,
                    store_id: 'store-13866666666',
                    username: 'killer',
                    mobile: '13866666666',
                    email: 'killer@qq.com'
                },
                {
                    id: 2,
                    store_id: 'store-18888888888',
                    username: 'god',
                    mobile: '18888888888',
                    email: 'god@qq.com'
                }
            ]
        };
    },
    methods: {
        restore(index, row) {
            console.log(index, row);
        }
    }
};
</script>


<style scoped>

</style>
