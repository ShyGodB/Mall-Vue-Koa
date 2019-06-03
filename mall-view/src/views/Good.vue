<template>
    <div id="good">
        <div class="good-search">
            <search></search>
        </div>

        <div class="good-body">
            <good-box></good-box>
        </div>
    </div>
</template>


<script>
import axios from 'axios'
import Search from '../components/good/Search.vue'
import Good from '../components/good/Good.vue'

export default {
    name: 'good',
    components: {
        'search': Search,
        'good-box': Good
    },
    data() {
        return {

        }
    }
}
</script>


<style scoped>
#good {
    height: auto;
    padding: 0 100px;
}
.good-search {
    margin-bottom: 20px;
}
.good-body {
    height: 530px;
    padding: 0 80px;
}
.good-search a {
    margin-right: 0;
}
</style>
