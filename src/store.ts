import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      animating: false,
    };
  },
  getters: {
    getAnimating(state) {
      return state.animating;
    },
  },
  mutations: {
    animated(state, payload) {
      state.animating = payload.value;
    },
  },
});

export default store;
