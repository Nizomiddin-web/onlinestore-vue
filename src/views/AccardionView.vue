<template>
  <div>
    <h1>Accordions</h1>
    <div
      v-for="(item, key) in accardions"
      :key="key"
      style="padding: 10px; border: 1px solid yellow; margin-bottom: 5px;"
    >
      <div
        @click="handleClick(key)"
        style="padding: 10px; border: 1px solid red; margin-bottom: 4px;"
      >
        {{ item.header }}
      </div>
      <div
        v-if="!is_click && current_id == key"
        style="padding: 10px; border: 1px solid red;"
      >
        {{ item.content }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      accardions: [
        {
          id: 1,
          header: "Header-1",
          content: "Content-1",
        },
        {
          id: 2,
          header: "Header-2",
          content: "Content-2",
        },
        {
          id: 3,
          header: "Header-3",
          content: "Content-3",
        },
      ],
      is_click: false,
      current_id: 0,
    };
  },
  watch: {
    is_click(val) {
      console.log(val);
    },
  },
  computed: {
    newComputed() {
      return this.accardions.filter((item, index) => item.id !== 1);
    },
  },
  methods: {
    handleClick(id) {
      this.is_click = !this.is_click;
      this.current_id = id;
    },
  },
  beforeCreate() {
    console.log("BeforeCreate");
  },
  created() {
    console.log("Created");
  },
  beforeMount() {
    console.log("BeforeMount");
  },
  mounted() {
    console.log("Mounted");
    localStorage.clear()
  },
  updated() {
    console.log("Updated");
  },
};
</script>
<style scoped></style>
