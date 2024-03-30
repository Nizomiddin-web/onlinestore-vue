<script setup>
import { RouterView } from "vue-router";
import Footer from './components/footer/Footer.vue';
import Navbar from "./components/Navbar/Navbar.vue";
</script>

<template>
<div class="app">
  <Navbar />
  {{ $route.params.id }}
  <RouterView/>
  <Footer/>
</div>
</template>

<script>
export default {
  data() {
    return {
      item: "",
      is_edit: false,
      edit_id: "",
      todos: [],
    };
  },
  methods: {
    hi(e) {
      if (e.key == "Enter") {
        alert("Siz Enterni bosdingiz");
      } else {
        console.log(e);
      }
    },
    add(e) {
      e.preventDefault();
      if (this.is_edit) {
        this.todos[this.edit_id] = this.item;
        this.is_edit = false;
      } else {
        this.todos.push(this.item);
      }
      this.item = "";
    },
    deleteItem(id) {
      this.todos = this.todos.filter((val, key) => key !== id);
    },
    editHandler(id) {
      this.item = this.todos[id];
      this.is_edit = true;
      this.edit_id = id;
    },
  },
};
</script>

<style scoped>
.app{
  background-color: whitesmoke;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
