<script>
export default {
  props:{
    product:{
      type:Object,
      required:true
    }
  }
}
</script>

<template>
  <div>
<div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div class="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
    <img
      :src="product.image"
      class="h-full w-full object-cover"
    />
  </div>
  <div class="p-6">
    <div class="mb-2 flex items-center justify-between">
      <p class="block overflow-hidden font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
        {{product.title.split(' ').slice(0,2).join(' ')}}
      </p>
      <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
        ${{product.price}}
      </p>
    </div>
    <p class="block overflow-hidden font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
      {{product.description.split(' ').slice(0,10).join(' ')}}
    </p>
  </div>
  <div class="p-6 pt-0">
    <button
      class="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      Add to Cart
    </button>
  </div>
</div>
  </div>
</template>

<style lang="">
  
</style>