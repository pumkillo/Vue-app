<template>
  <div class="main">
    <v-gallery />
  </div>
</template>

<script>
import vGallery from "@/components/Gallery.vue";

export default {
  name: "HomeView",
  components: {
    vGallery,
  },
};
</script>

<style lang="scss">
@import "@/assets/css/variables.scss";
.main {
  margin: 46px auto 0 auto;
  width: 80vw;
  max-width: 1300px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.photo > img,
#random_photo {
  border: 3px solid $white-color;
  border-radius: 8px;
  max-width: 1300px;
  max-height: 550px;
}
</style>
