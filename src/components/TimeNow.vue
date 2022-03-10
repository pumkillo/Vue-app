<template>
  <h2>{{ datetime }}</h2>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "time-now",
  data() {
    return {
      datetime: "",
      hours: 25,
      time_of_day: "",
    };
  },
  watch: {
    hours(newHours) {
      this.get_time_of_day(newHours);
    },
  },
  mounted() {
    this.getTime();
    this.intervalId = setInterval(this.getTime, 2000);
  },
  beforeUnmount() {
    if (this.intervalId) clearInterval(this.intervalId);
  },
  methods: {
    ...mapActions(["get_time_of_day"]),
    getTime() {
      let datetime = new Date();

      let hours = datetime.getHours();
      let minutes = datetime.getMinutes();
      let weekday = Intl.DateTimeFormat("en-US", {
        weekday: "long",
      }).format(datetime);
      let day = datetime.getDate();
      let month = Intl.DateTimeFormat("en-US", {
        month: "long",
      }).format(datetime);
      let year = `${datetime.getFullYear()}`;
      this.hours = hours;
      this.datetime = this.formatDate(
        hours,
        minutes,
        weekday,
        day,
        month,
        year
      );
    },

    formatDate(hours, minutes, weekday, day, month, year) {
      hours = hours < 10 ? `0${hours}` : hours;
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      return `${hours}:${minutes} - ${weekday}, ${day} ${month} ${year}`;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/css/variables.scss";
.weather-vidget h2 {
  font-size: $big-title-text-size;
  margin-bottom: 40px;
}
</style>
