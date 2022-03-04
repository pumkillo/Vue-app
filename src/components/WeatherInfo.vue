<template>
  <div class="search-bar">
    <input
      type="text"
      v-model.trim="query"
      placeholder="Search..."
      @keypress.enter="getWeather"
    />
  </div>
  <div class="weather-data" v-if="Object.keys(weather).length !== 0">
    <img :src="getIcon" alt="icon" />
    <p>{{ weather.data.name }}, {{ weather.data.sys.country }}</p>
    <p>{{ Math.round(weather.data.main.temp) }}C</p>
    <p>
      {{ datetime }}
    </p>
    <p>{{ weather.data.weather[0].description }}</p>
  </div>
</template>

<script>
import {
  weather_api_key,
  weather_api_url,
  icon_base_url,
} from "@/assist/constants.js";
import axios from "axios";

export default {
  name: "weather-info",
  data() {
    return {
      datetime: "",
      query: "Tomsk",
      weather: {},
      time: {},
    };
  },
  computed: {
    getIcon() {
      return `${icon_base_url}${this.weather.data.weather[0].icon}@2x.png`;
    },
  },
  created() {
    this.intervalId = setInterval(
      () => (this.datetime = Date(Date.now())),
      1000
    );
  },

  // Если повесили таймер, то его нужно отключать
  beforeUnmount() {
    if (this.intervalId) clearInterval(this.intervalId);
  },

  methods: {
    getWeather() {
      axios
        .get(
          `${weather_api_url}weather?q=${this.query}&units=metric&appid=${weather_api_key}`
        )
        .then(this.setResult);
    },
    setResult(res) {
      this.weather = res;
    },
  },
};
</script>

<style scoped></style>
