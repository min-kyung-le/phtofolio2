import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      isMenuShow: true,
    };
  },
  getters: {
    getIsMenuShow(state) {
      return state.isMenuShow;
    },
  },
  mutations: {
    setIsMenuShow(state, payload) {
      state.isMenuShow = payload.value;
    },
  },
});

export default store;
