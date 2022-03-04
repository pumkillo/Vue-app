<template>
  <p>{{ dayfact.title }}</p>
  <p>{{ dayfact.explanation }}</p>
  <img :src="dayfact.hdurl" alt="image" />
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
    axios.get(`${nasa_api_url}?api_key=${nasa_api_key}`).then((response) => {
      this.dayfact = response.data;
    });
  },
};
</script>

<style scoped></style>
