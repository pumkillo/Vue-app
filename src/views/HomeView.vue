<template>
  <div class="main">
    <weather-info></weather-info>
    <day-fact></day-fact>
  </div>
</template>

<script>
import dayFact from "@/components/DayFact.vue";
import weatherInfo from "@/components/WeatherInfo.vue";

export default {
  name: "HomeView",
  components: {
    weatherInfo,
    dayFact,
  },
};
</script>

<style lang="scss" scoped>
.main {
  margin: 46px auto 0 auto;
  justify-content: space-between;
  height: 100vh;
  width: 80vw;
  max-width: 1300px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
