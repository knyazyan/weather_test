import * as mutation_types from "./mutation_types";

export default {
    [mutation_types.M_GET_WEATHER](state, payload) {
        state.weather = payload;
    },
    [mutation_types.M_GET_CITIES](state, payload) {
        state.cities = payload;
    },
};
