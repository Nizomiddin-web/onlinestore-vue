<script>
import axios from "axios";
import ProductCard from "@/components/card/ProductCard.vue";
import Sceleton from "@/components/sceleton/Sceleton.vue";
import SceletonView from "./SceletonView.vue";
import GradientIcon from "@/components/bootons/GradientIcon.vue";
import { mapState, mapActions,mapGetters } from "vuex";
export default {
  components: { ProductCard, SceletonView, GradientIcon },
  data() {
    return {};
  },
  computed: {
    ...mapState('product',["posts"]),
    ...mapGetters('product',["filter_prices"])
  },
  methods: {
    ...mapActions('product',["getPosts"]),
  },
  async mounted() {
    // await this.getPosts();
    this.$store.dispatch('product/getPosts')
  },
};
</script>

<template>
  <div class="container mx-auto">
    <div v-if="posts.length == 0">
      <SceletonView />
    </div>
    <div
      v-else
      class="grid grid-cols-1 gap-1 place-items-center md:grid-cols-4"
    >
      <ProductCard
        v-for="(item, index) in posts"
        :key="index"
        :product="item"
      />
    </div>
  </div>
</template>
