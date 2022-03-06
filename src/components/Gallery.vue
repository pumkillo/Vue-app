<template>
  <input type="text" placeholder="" v-model.lazy="query" />
  <img :src="random_photo" alt="" id="random_photo" />
  <div class="phot-grid" v-if="response_array.length !== 0">
    <div class="photo" v-for="result in response_array" :key="result.id">
      <img :src="result.urls.small" alt="" />
      <p>{{ result.user.username }}</p>
    </div>
  </div>
</template>

<script>
import { unsplash_api_key, unsplash_api_url } from "@/assist/constants.js";
import axios from "axios";
export default {
  name: "v-gallery",
  data() {
    return {
      random_photo: "",
      query: "",
      response_array: [],
    };
  },
  mounted() {
    axios
      .get(`${unsplash_api_url}photos/random?client_id=${unsplash_api_key}`)
      .then((photo) => (this.random_photo = photo.data.urls.small));
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    query(newQuery, oldQuery) {
      axios
        .get(
          `${unsplash_api_url}search/photos?query=${newQuery}&client_id=${unsplash_api_key}`
        )
        .then((response) => {
          this.response_array = response.data.results;
          let el = document.getElementById("random_photo");
          if (el) {
            el.remove();
          }
        });
    },
  },
};
</script>

<style scoped></style>
