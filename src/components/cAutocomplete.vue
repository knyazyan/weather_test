<template>
    <div class="autocomplete">
        <v-autocomplete
                append-icon="search"
                v-model="select"
                :items="inputItems"
                :item-text="itemText"
                :item-value="itemValue"
                :search-input.sync="search"
                :label="inputLabel"
                dense
                @keyup="keyup()"
        >
            <template v-slot:item="data">
                {{ data.item.city }} ({{ data.item.country }})
            </template>
        </v-autocomplete>
    </div>
</template>

<script>
    export default {
        name: "cAutocomplate",
        props: {
            value: {
                type: [String, Number, Boolean, Array],
                default: ""
            },
            inputItems: {
                type: Array
            },
            inputLabel: {
                type: String,
                default: ''
            },
            itemText: {
                type: String,
                default: ''
            },
            itemValue: {
                type: [String, Array],
                default: ''
            }
        },
        data () {
            return {
                loading: false,
                search: null,
                select: "",
                states: this.inputItems
            }
        },
        watch: {
            value(val) {
                this.select = val;
            },
            select(val) {
                this.$emit('input', val);
            },
            search (val) {
                val && val !== this.select && this.querySelections(val)
            }
        },
        methods: {
            querySelections (v) {
                this.loading = true;
                    this.items = this.states.filter(e => {
                        return (e.textName || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
                    });
                    this.loading = false
            },
            keyup(event) {
                this.$emit('keyup', event);
            }
        }
    }
</script>

<style lang="scss" scoped>
    /deep/.v-text-field > .v-input__control > .v-input__slot:before{
        display: none;
    }
    /deep/.v-text-field{
        margin: 0;
        padding: 0;
    }
    /deep/.v-autocomplete.v-input > .v-input__control .v-input__slot {
        margin: 0;
        & .v-select__slot {
            margin: 0;
            /*border: 1px solid rgba(31, 32, 65, 0.5);*/
            border-radius: 4px;
            font-size: 12px;
            line-height: 24px;
            color: rgba(31, 32, 65, 0.75);
            outline: none;

            & input {
                font-size: 12px;
                line-height: 24px;
                color: rgba(31, 32, 65, 0.75);
                border: none;
            }
        }
    }
    /deep/.v-text-field__details{
        height: 0;
    }
    /deep/.v-select__slot{
        padding: 0 5px;
    }
    /deep/.v-input .v-label{
        left: 5px!important;
        top: 7px;
        margin: 0;
        font-size: 12px;
        line-height: 24px;
        color: rgba(31, 32, 65, 0.75);
        &.v-label--active{
            display: none;
        }
    }
    /deep/.v-menu > .v-menu__content{
        left: 0!important;
        top: 45px!important;
    }
    /deep/.v-text-field .v-input__append-inner{
        align-self: unset;
        margin: 0;
    }
    /deep/.v-select.v-select--is-menu-active .v-input__icon--append .v-icon{
        transform: unset;
    }

</style>