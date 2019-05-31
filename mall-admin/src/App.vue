<template>
    <div id="app">
        <el-row :gutter="20">
            <el-col :span="4" class="left">
                <nav-left></nav-left>
            </el-col>

            <el-col :span="20" class="right">
                <div class="right-top">
                    <slider></slider>
                </div>

                <div class="right-content">
                    <right-content></right-content>
                </div>
            </el-col>
        </el-row>
    </div>
</template>


<script>
import Nav from './views/Nav.vue'
import Slider from './views/Slider.vue'
import Content from './views/Content.vue'


export default {
    name: 'app',
    components: {
        'nav-left': Nav,
        'slider': Slider,
        'right-content': Content
    }
}
</script>


<style>
#app {
    min-height: 400px;
    height: 100%;
}
.el-col-4 {
    height: 100%;
    min-height: 800px;
    background: #404040;
}
.right-content {
    margin-top: 20px;
}
</style>
