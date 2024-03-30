<template>
    <div class="grid grid-cols-4 gap-1 place-items-center h-screen">
        <ProductCardSceleton v-for="(item,index) in [1,2,3,4,5,6,7,8,9,10]" :key="index"/>
    </div>
</template>
<script>
import Sceleton from '@/components/sceleton/Sceleton.vue'
import ProductCardSceleton from '@/components/sceleton/ProductCardSceleton.vue'
export default {
    components:{Sceleton,ProductCardSceleton},
}
</script>
<style scoped>
    
</style>