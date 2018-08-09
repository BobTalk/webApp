import {mutations} from "./mutations"
//commit  赋值状态值
const actions = {
  addAction(store, num) {
    store.commit('ADD', num)
  },
  reduceAction(store, num) {
    store.commit('REDUCE', num)
  }
};
export default actions;
