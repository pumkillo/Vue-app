import { createStore } from "vuex";

export default createStore({
  state: {
    time_of_day: "",
  },
  getters: {},
  mutations: {
    setDayTime(state, time_of_day) {
      state.time_of_day = time_of_day;
    },
  },
  actions: {
    get_time_of_day({ commit }, hours) {
      let time_of_day = "";
      if (hours >= 0 && hours < 6) {
        time_of_day = "night";
      }
      if (hours >= 6 && hours < 12) {
        time_of_day = "morning";
      }
      if (hours >= 12 && hours < 18) {
        time_of_day = "afternoon";
      }
      if (hours >= 18 && hours < 24) {
        time_of_day = "evening";
      }
      commit("setDayTime", time_of_day);
    },
  },
  modules: {},
});
