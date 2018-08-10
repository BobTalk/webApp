import {state} from "./state"

const mutations = {
  REDUCE(state, num) {
    state.count -= num;
  }
};
export default mutations
