import * as MUTATION_TYPES from "./mutation_types";


export default {
    saveClientCode({ commit }, payload) {
        commit(MUTATION_TYPES.SAVE_CLIENT_CODE, payload)
    },
    saveAccessToken({commit}, payload){
        commit(MUTATION_TYPES.SAVE_ACCESS_TOKEN, payload)
    }
}