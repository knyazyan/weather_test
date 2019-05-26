import Vue from 'vue';

export default () => {
    return Vue.Api.Get('http://api.openweathermap.org/data/2.5/weather?q=YEREVAN&appid=362e8879dda11fc0d84b04fedf31f4ce');

};
