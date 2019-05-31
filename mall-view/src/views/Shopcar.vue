<template>
    <div id="shopcar">
        <div class="shopcar-search">
            <shopsearch></shopsearch>
        </div>

        <div class="shopcar-body">
            <shopbody></shopbody>
        </div>
    </div>
</template>


<script>
import Shopsearch from '../components/shopcar/Shopsearch.vue'
import Shopbody from '../components/shopcar/Shopbody.vue'

export default {
    name: 'shopcar',
    components: {
        'shopsearch': Shopsearch,
        'shopbody': Shopbody
    },
    data() {
        return {

        }
    }
}
</script>


<style scoped>
#shopcar {
    margin: 20px 200px;
    min-height: 570px;
}
.shopcar-search {
    height: 57px;
    margin-bottom: 20px;
}
</style>
