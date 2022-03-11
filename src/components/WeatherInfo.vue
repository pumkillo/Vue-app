<template>
  <div class="weather-vidget">
    <time-now></time-now>
    <div class="search-bar-weather">
      <input type="text" v-model.lazy="query" placeholder="Search..." />
    </div>
    <div class="weather" v-if="Object.keys(weather).length !== 0">
      <h1>Weather in {{ weather.name }} right now</h1>
      <div class="weather-data">
        <div class="weather-main">
          <img :src="icon" alt="icon" id="icon" />
          <h3>{{ Math.round(weather.main.temp) }}&#xb0;C</h3>
        </div>
        <div class="weather-addition">
          <h3>Humidity: {{ weather.main.humidity }}%</h3>
          <h3>Feels like: {{ Math.round(weather.main.feels_like) }}&#xb0;C</h3>
          <h3>{{ weather.weather[0].description }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import timeNow from "@/components/TimeNow.vue";
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
      weather: {},
      query: "",
    };
  },

  components: { timeNow },

  computed: {
    icon: function () {
      return `${icon_base_url}${this.weather.weather[0].icon}@2x.png`;
    },
  },

  watch: {
    query(newQuery) {
      axios
        .get(
          `${weather_api_url}weather?q=${newQuery}&units=metric&appid=${weather_api_key}`
        )
        .catch((error) => console.log(error))
        .then((response) => (this.weather = response.data));
    },
  },

  mounted() {
    this.query = "Tomsk ";
  },

  methods: {},
};
</script>

<style scoped lang="scss">
@import "@/assets/css/variables.scss";
h1 {
  text-align: center;
}
.weather-vidget {
  border-radius: 10px;
  width: 25vw;
  height: 80vh;
  max-width: 400px;
  min-width: 200px;
  max-height: 411px;
  min-height: 200px;
  padding: 50px 10px 30px 10px;
}
.weather-vidget > .search-bar-weather {
  margin-left: -10px;
  width: 95%;
  max-width: 410px;
  align-self: start;
  margin-bottom: 40px;
  border-radius: 0px 10px 10px 0px;
}
.weather-vidget input {
  width: 90%;
}
.weather-vidget h1 {
  font-size: $small-title-text-size;
}
.weather-data {
  padding: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.weather-data > .weather-main {
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 15px;
  background-color: $white-color;
  border-radius: 10px;
  box-shadow: 0px 4px 16px rgba(1, 30, 54, 0.25);
}
.weather-data > .weather-main > img {
  width: 100px;
}
.weather-data > .weather-main > h3 {
  font-size: $biggest-text-size;
}
.weather-data > .weather-addition {
  overflow: hidden;
}
.weather-data > .weather-addition > h3 {
  text-align: left;
  line-height: 30px;
}
.weather-data > .weather-addition > h3:last-child {
  text-transform: capitalize;
}
</style>
