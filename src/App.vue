<template>
  <nav>
    <div class="nav-links">
      <router-link :to="{ name: 'home' }">Main Page</router-link>
      <router-link :to="{ name: 'gallery' }">Gallery</router-link>
    </div>
  </nav>
  <div class="background-image" alt="Background Image" :id="time_of_day" />
  <router-view
    :class="{
      dark: time_of_day == 'night' || time_of_day == 'evening',
      light: time_of_day == 'morning' || time_of_day == 'afternoon',
    }"
  />
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["time_of_day"]),
  },
};
</script>
