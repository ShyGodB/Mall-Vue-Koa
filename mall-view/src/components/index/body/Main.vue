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
.main-box .main-box-left {
    min-height: 600px;
    background: skyblue;
}
.main-box .main-box-right {
    min-height: 600px;
    background: blue;
}
</style>
