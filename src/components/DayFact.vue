<template>
  <div class="dayFact-vidget">
    <h1>Day Fact</h1>
    <img :src="dayfact.url" alt="image" />
    <h2>{{ dayfact.title }}</h2>
    <h3>{{ dayfact.explanation }}</h3>
  </div>
</template>

<script>
import { nasa_api_key, nasa_api_url } from "@/assist/constants.js";
import axios from "axios";
export default {
  name: "day-fact",
  data() {
    return {
      dayfact: {},
    };
  },
  mounted() {
    axios
      .get(`${nasa_api_url}?api_key=${nasa_api_key}`)
      .then((response) => (this.dayfact = response.data));
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/css/variables.scss";
.dayFact-vidget {
  width: 50vw;
  min-height: 700px;
  border-radius: 10px;
  max-width: 680px;
  min-width: 300px;
  padding: 40px 35px;
}
.dayFact-vidget > img {
  margin-bottom: 15px;
  min-height: 300px;
  max-width: 700px;
  max-height: 280px;
}
.dayFact-vidget > h3 {
  line-height: 25px;
  text-indent: 20px;
  text-align: left;
}
.dayFact-vidget > h1 {
  font-size: $biggest-text-size;
  margin-bottom: 20px;
}
.dayFact-vidget > h2 {
  margin-bottom: 15px;
  font-size: $big-title-text-size;
}
</style>
