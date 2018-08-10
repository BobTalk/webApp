import {mutations} from "./mutations"
//commit mutations
const actions = {
  reduceAction(store, num) {
    store.commit('REDUCE', num)
  }
};
export default actions;
