<template>
    <div class="weather">
        <div class="search">
            <div class="search-info">
                <img src="@/assets/images/soon.png" width="20px" height="20px">
                <span class="deg-text">{{weather != '' ? (weather.data.main.temp - 273.15).toFixed(0) : 0}}<sup>°</sup></span>
                <h3 class="geolocation">{{city}}</h3>
            </div>
            <cAutocomplete
                    class="search-cities"
                    v-model="city"
                    :inputItems="cities"
                    :itemText="'city'"
                    :itemValue="'city'"
                    @input="getWeather()"
                    @keyup.native="getCitiesMethod($event)"
            ></cAutocomplete>
        </div>
        <div class="weather-content">
            <WeatherWeek
                :weeksParam="weather.data"
            ></WeatherWeek>
        </div>
    </div>
</template>

<script>
    import cAutocomplete from "@/components/cAutocomplete";
    import WeatherWeek from "@/views/WeatherWeek";

    import * as types from "@/stores/modules/weather/types";

    export default {
        name: "weather",
        components: {
            cAutocomplete,
            WeatherWeek
        },
        data() {
            return {
                city: "",
                cities: [],
                weather: ''
            }
        },
        mounted() {

        },
        methods: {
            getCitiesMethod(data) {
                this.$store.dispatch("weather/" + types.A_GET_CITIES, data.target.value)
                    .then(res => {
                        this.cities = res.data.data;
                    })
                    .catch(err => {
                        return [];
                    })
            },
            getWeather() {
                this.$store.dispatch("weather/" + types.A_GET_WEATHER, this.city)
                    .then( res => {
                        this.weather = res;
                    })
                    .catch(err => {
                        this.weather = "";
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .weather{
        font-family: sans-serif;

        .search{
            display: flex;
            justify-content: space-between;
            padding: 10px 30px 0;
            margin-bottom: 10px;

            .search-info{
                display: flex;
                justify-content: center;
                align-items: center;
                .deg-text{
                    word-spacing: -6px;
                    font-size: 15px;
                    font-weight: 400;
                    color: #aeaeae;
                    margin: 0 5px;
                }
            }
            .geolocation{
                font-size: 15px;
                font-weight: 400;
                color: #aeaeae;
                margin: 0;
            }
            .search-cities{
                width: 150px;
            }
        }
    }

</style>