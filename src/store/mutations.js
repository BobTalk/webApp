import {state} from "./state"
//dispatch 逻辑处理
const mutations = {
  ADD(state, num) {
    state.count += num;
  },
  REDUCE(state, num) {
    state.count -= num;
  }
};
export default mutations
