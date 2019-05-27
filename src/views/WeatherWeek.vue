<template>
    <div class="weather-week">
        <div class="week-wrap">
            <div class="weeks">
                <div class="days">
                    <h4 class="day-name">СЕГОДНЯ</h4>
                    <img src="@/assets/images/soon.png" width="40px">
                    <h4 class="standart-text">МАКС.</h4>
                    <span class="deg-text">{{max_temp}}<sup>°</sup></span>
                </div>
            </div>
            <div class="weather-info">
                <div class="paragraph">
                    <h4 class="bold-text">ВЕТЕР</h4>
                    <p>{{speed}}м/ч</p>
                </div>
                <div class="paragraph">
                    <h4 class="bold-text">ВЛАЖНОСТЬ</h4>
                    <p>{{humidity}}%</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "weather-week",
        props: {
            weeksParam: {
                type: Object
            }
        },
        data() {
            return{
                max_temp: 0,
                speed: 0,
                humidity: 0,
                time: ''
            }
        },
        watch: {
            weeksParam(val){
                this.max_temp = (val.main.temp_max - 273.15).toFixed(0);
                this.speed = val.wind.speed;
                this.humidity = val.main.humidity;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .weather-week{
        padding: 0 30px;

        .week-wrap{
            padding: 10px;
            border: 1px solid #cecece77;
            border-radius: 3px;
            box-shadow: 0 0 3px 0 #3337;
        }
        .weeks{
            display: grid;
            .days{
                display: grid;
                justify-items: center;
                &:nth-child(1){
                    background-color: #4644a7;
                    position: relative;
                    &::before{
                        content: '';
                        position: absolute;
                        bottom: -10px;
                        left: calc(50% - 10px);
                        border-top: 10px solid #4644a7;
                        border-right: 10px solid transparent;
                        border-left: 10px solid transparent;
                    }
                }
                &:nth-child(2){
                    background-color: #5653d1;
                }
                .day-name{
                    color: white;
                }
                .deg-text{
                    margin: 0 0 21px;
                    word-spacing: -6px;
                    color: white;
                    font-size: 26px;
                    font-weight: 600;
                }
            }
        }
        .weather-info{
            display: grid;
            grid-template-columns: 1fr 1fr;
            .bold-text{
                font-weight: 600;
                color: #170031;
                font-size: 20px;
            }
            p{
                font-size: 15px;
                font-weight: 600;
                color: #170031;
            }
        }
        .standart-text{
            font-size: 16px;
            color: white;
            font-weight: 400;
        }
    }
</style>