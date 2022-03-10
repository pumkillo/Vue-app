<template>
  <div class="search-bar-photo">
    <input type="text" placeholder="Search..." v-model.lazy="query" />
  </div>
  <img :src="random_photo" alt="Random photo" id="random_photo" />
  <div class="photo-grid">
    <photo-preview
      v-for="result in response_array"
      :key="result.id"
      :authorName="result.user.username"
      :imageUrl="result.urls.small"
      :imageUrlId="result.id"
    ></photo-preview>
  </div>
</template>

<script>
import { unsplash_api_key, unsplash_api_url } from "@/assist/constants.js";
import axios from "axios";
import photoPreview from "@/components/Photo.vue";
export default {
  name: "v-gallery",
  data() {
    return {
      random_photo: "",
      query: "",
      response_array: [],
    };
  },

  components: {
    photoPreview,
  },

  mounted() {
    axios
      .get(`${unsplash_api_url}photos/random?client_id=${unsplash_api_key}`)
      .then((photo) => (this.random_photo = photo.data.urls.small));
  },

  watch: {
    query(newQuery) {
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

<style scoped lang="scss">
@import "@/assets/css/variables.scss";
.search-bar-photo {
  width: 50vw;
  max-width: 600px;
  min-width: 250px;
  margin: 70px 0;
  border-radius: 10px;
}
.search-bar-photo > input {
  font-size: $small-title-text-size;
  width: 100%;
  border-radius: 10px;
}
.photo-grid {
  display: grid;
  grid-column-gap: 21px;
  grid-row-gap: 15px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.photo-grid > .photo {
  position: relative;
  max-width: 300px;
  aspect-ratio: 1 / 1;
}
.photo-grid > .photo > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.photo-grid > .photo > .author {
  background-color: $white-color;
  padding: 12px 50px;
  position: absolute;
  right: -3px;
  bottom: 7px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 7px 0px 7px 0px;
}
.author > h1 {
  color: $dark-blue-color !important;
}
</style>
