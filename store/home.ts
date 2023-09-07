import { defineStore } from "pinia";

export const useHomestore = defineStore("home", {
  state() {
    return {
      counter: 0,
    };
  },
  actions: {
    addcounter() {
      this.counter++;
    },
  },
});
