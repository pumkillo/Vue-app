<template>
  <div class="search-bar">
    <input type="text" v-model.lazy="query" placeholder="Search..." />
  </div>
  <div class="weather-data" v-if="Object.keys(weather).length !== 0">
    <img :src="icon" alt="icon" />
    <p>{{ weather.name }}, {{ weather.sys.country }}</p>
    <p>{{ Math.round(weather.main.temp) }}C</p>
    <p>{{ datetime.time }}</p>
    <p>{{ datetime.date }}</p>
    <p>{{ datetime.year }}</p>
    <p>{{ weather.weather[0].description }}</p>
  </div>
</template>

<script>
import {
  weather_api_key,
  weather_api_url,
  icon_base_url,
  month_names,
} from "@/assist/constants.js";
import axios from "axios";

export default {
  name: "weather-info",
  data() {
    return {
      weather: {},
      query: "",
      datetime: "",
    };
  },

  computed: {
    icon: function () {
      return `${icon_base_url}${this.weather.weather[0].icon}@2x.png`;
    },
  },

  watch: {
    // eslint-disable-next-line no-unused-vars
    query(newQuery, oldQuery) {
      axios
        .get(
          `${weather_api_url}weather?q=${newQuery}&units=metric&appid=${weather_api_key}`
        )
        .then((response) => (this.weather = response.data));
    },
  },

  mounted() {
    this.query = "Tomsk";
    this.getTime();

    this.intervalId = setInterval(this.getTime, 2000);
  },

  beforeUnmount() {
    if (this.intervalId) clearInterval(this.intervalId);
  },

  methods: {
    getTime() {
      let datetime = new Date();
      let date = `${datetime.getDate()} ${month_names[datetime.getMonth()]}`;
      let time = `${datetime.getHours()}:${datetime.getMinutes()}`;
      let year = `${datetime.getFullYear()}`;
      this.datetime = { date: date, time: time, year: year };
    },
  },
};
</script>

<style scoped></style>
