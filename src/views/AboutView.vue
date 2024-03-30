<script>
export default {
  data() {
    return {
      name: "",
      list: [],
      isNameError: false,
      winner: "",
      edit: false,
      edit_id: 0,
    };
  },
  methods: {
    add() {
      if (this.name.length < 5) {
        this.isNameError = true;
        setTimeout(() => {
          this.isNameError = false;
        }, 2000);
        return;
      }
      this.list.push(this.name);
      this.name = "";
    },
    randomChoice() {
      this.winner = this.list[Math.floor(Math.random() * this.list.length)];
    },
    backHandler() {
      this.winner = "";
    },
    deleteItem(id) {
      this.todos = this.todos.filter((value, index) => index !== id);
    },
    editItem(id) {
      this.edit = !this.edit;
      this.edit_id = id;
    },
  },
};
</script>

<template>
  <div v-if="!winner">
    <h1>Who are add?</h1>
    <input type="text" v-model="name" />
    <button
      style="background-color: blueviolet; padding: 4px; margin: 2px;"
      @click="add"
    >
      add
    </button>
    <p v-if="isNameError" style="color: red;">
      Ismi 5 harfdan kam bo'lmasligi kerak
    </p>
    <h4 v-for="(item, index) in list" :key="index">
      <input
        v-if="edit && edit_id == index"
        type="text"
        v-model="list[index]"
      />
      <span v-else>{{ item }}</span>
      <button
        v-if="edit && edit_id == index"
        style="background-color: greenyellow;"
        @click="edit = false"
      >
        Save
      </button>
      <button
        v-else
        style="background-color: greenyellow;"
        @click="editItem(index)"
      >
        edit
      </button>
      <button style="background-color: red;" @click="deleteItem(index)">
        delete
      </button>
    </h4>
    <button v-if="list.length == 3" @click="randomChoice">See Result</button>
  </div>
  <div v-else>
    <h1>{{ winner }}</h1>
    <button @click="backHandler">Back</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
