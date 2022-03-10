<template>
  <div class="photo">
    <img :src="imageUrl" :alt="imageUrlId" />
    <div class="author">
      <h1>{{ authorName }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "photo-previw",
  props: ["authorName", "imageUrl", "imageUrlId"],
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/css/variables.scss";
.photo {
  position: relative;
  max-width: 300px;
  aspect-ratio: 1 / 1;
}
.photo > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.photo > .author {
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
