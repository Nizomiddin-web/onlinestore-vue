<script>
export default {
  data() {
    return {
      selectModel: "",
      sex: "",
      cars: [],
      boxStyle: ["box-1", "box-2"],
      isbox: false,
    };
  },
};
</script>

<template>
  <div>
    <form>
      <select v-model="selectModel" multiple name="" id="">
        <option value="uz">Uzbekiston</option>
        <option value="ru">Russia</option>
        <option value="qz">Qozog'iston</option>
        <option value="qr">Qirg'iziston</option>
        <option value="tr">Turkia</option>
      </select>
      <input
        v-model="sex"
        type="radio"
        name="Erkak"
        value="male"
        style="padding: 10px; margin: 10px;"
      />
      <input
        v-model="sex"
        type="radio"
        name="Ayol"
        value="female"
        style="padding: 10px;"
      />
      <br />
      <input
        v-model="cars"
        type="checkbox"
        name="cars"
        id="nexia"
        value="Nexia"
      />
      <label for="nexia">Nexia</label><br />
      <input
        v-model="cars"
        type="checkbox"
        name="cars"
        id="damas"
        value="Damas"
      />
      <label for="damas">Damas</label><br />
      <input
        v-model="cars"
        type="checkbox"
        name="cars"
        id="matiz"
        value="Matiz"
      />
      <label for="matiz">Matiz</label><br />
      <input
        v-model="cars"
        type="checkbox"
        name="cars"
        id="malibu"
        value="Malibu"
      />
      <label for="malibu">Malibu</label><br />
      <input
        v-model="cars"
        type="checkbox"
        name="cars"
        id="tiko"
        value="Tiko"
      />
      <label for="tiko">Tiko</label>
    </form>
    <h1>{{ selectModel }}</h1>
    <h1>{{ sex }}</h1>
    {{ cars }}

    <div class="box" v-bind:class="{ 'box-1': isbox }" @click="isbox = !isbox">
      Bu Quticha
    </div>
  </div>
</template>
<style scoped>
.box {
  margin: 10px;
  padding: 40px;
  background-color: rebeccapurple;
  border: 2px solid black;
}
.box-1 {
  background: coral;
}
</style>
