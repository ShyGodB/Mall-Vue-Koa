<template>
    <div class="main-box">
        <el-row>
            <el-col :span="4">
                <div class="main-box-left">
                    <left></left>
                </div>
            </el-col>

            <el-col :span="20">
                <div class="main-box-right">
                    <right></right>
                </div>
            </el-col>
        </el-row>
    </div>
</template>


<script>
import Left from './Left.vue'
import Right from './Right.vue'


export default {
    name: 'mainBox',
    components: {
        'left': Left,
        'right': Right
    }
}
</script>


<style scoped>
.el-col-4, .el-col-20 {
    min-height: 580px;
    border: 1px solid #ff5000;
}
.main-box .main-box-left {
    height: 100%;
}
.main-box .main-box-right {
    min-height: 580px;
}
</style>
