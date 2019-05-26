<template>
    <div class="weather">
        {{cities}}
        <v-autocomplete
                append-icon="keyboard_arrow_down"
                v-model="city"
                :items="cities"
                item-text="city"
                item-value="id"
                @keyup="getCitiesMethod($event)"
                dense
        ></v-autocomplete>
    </div>
</template>

<script>
    import * as types from "@/stores/modules/weather/types";

    export default {
        name: "weather",
        data() {
            return {
                city: "",
                cities: []
            }
        },
        mounted() {
            this.$store.dispatch("weather/" + types.A_GET_WEATHER)
        },
        computed: {
            // cities() {
            //     console.log(this.$store.getters['weather/getCities'])
            //     return this.$store.getters['weather/getCities']
            // }
        },
        methods: {
            getCitiesMethod(data) {
                this.$store.dispatch("weather/" + types.A_GET_CITIES, data.target.value)
                    .then(res => {
                        console.log(res.data.data)
                        this.cities = res.data.data;
                    })
                    .catch(err => {
                        return [];
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>