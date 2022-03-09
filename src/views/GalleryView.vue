<template>
  <div class="main"><v-gallery></v-gallery></div>
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

<style scoped lang="scss">
.main {
  margin: 46px auto 0 auto;
  width: 80vw;
  max-width: 1300px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
