<template>
  <weather-info></weather-info>
  <day-fact></day-fact>
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
