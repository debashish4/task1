import * as MUTATION_TYPES from "./mutation_types";

export default {
  [MUTATION_TYPES.SAVE_CLIENT_CODE](state, payload) {
    state.client_code = payload;
  },
  [MUTATION_TYPES.SAVE_ACCESS_TOKEN](state, payload){
    state.access_token = payload;
  }
}