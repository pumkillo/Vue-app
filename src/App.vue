<template>
  <weather-info></weather-info>
</template>

<script>
import weatherInfo from "@/components/WeatherInfo";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    weatherInfo,
  },
};
</script>

<style lang="scss">
@import "@/assets/css/variables.scss";
body {
  // background-image: url($morning-background-url);
  // background-repeat: no-repeat;
  // background-size: cover;
}
</style>
