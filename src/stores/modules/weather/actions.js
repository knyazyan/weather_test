import * as types from "./types";
import * as mutation_types from "./mutation_types";
import { GetWeather, GetCities } from "./api/methods";

export default {
    [types.A_GET_WEATHER] (context, payload) {
        GetWeather()
            .then(res => {
                context.commit(mutation_types.M_GET_WEATHER, res);
            });
    },
    [types.A_GET_CITIES] (context, payload) {
        return new Promise((resolve) => {
            GetCities(payload)
                .then(res => {
                    context.commit(mutation_types.M_GET_CITIES, res.data.data);
                    resolve(res);
                });
        })
    }
};
