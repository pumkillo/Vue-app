<template>
  <nav>
    <router-link :to="{ name: 'home' }">Main Page</router-link>
    <router-link :to="{ name: 'gallery' }">Gallery</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
@import "@/assets/css/variables.scss";
body {
  // background-image: url($morning-background-url);
  // background-repeat: no-repeat;
  // background-size: cover;
}
</style>
