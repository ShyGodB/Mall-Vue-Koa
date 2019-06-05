<template>
    <div id="personal">
        <div class="personal-tabs">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="基本信息" name="first">
                    <baseinfo></baseinfo>
                </el-tab-pane>

                <el-tab-pane label="头像照片" name="second">
                    <avatar></avatar>
                </el-tab-pane>

                <el-tab-pane label="高级信息" name="third">
                    <Advanced></Advanced>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>


<script>
import Base from './personal/Base.vue'
import Avatar from './personal/Avatar.vue'
import Advanced from './personal/Advanced.vue'

export default {
    name: 'personal',
    components: {
        'baseinfo': Base,
        'avatar': Avatar,
        'Advanced': Advanced
    },
    data() {
        return {
            activeName: 'first'
        }
    },
    methods: {
        handleClick(tab, event) {
            // console.log(tab, event);
        }
    }
}
</script>


<style scoped>

</style>
