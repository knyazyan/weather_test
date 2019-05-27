import Vue from 'vue';

export default (data) => {
    return Vue.Api.Get(`http://api.openweathermap.org/data/2.5/weather?q=${data}&appid=362e8879dda11fc0d84b04fedf31f4ce`);

};
