<template>
    <button class=" bg-button-color  border border-gradient text-white text-center py-2 px-4">
        <slot/>
    </button>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.border-gradient {
  border-image: linear-gradient(to right, #4dc0b5, #3490dc);
  border-image-slice: 2;
}
</style>