import Vue from 'vue';

export default (data) => {
    return Vue.Api.Get(`http://geodb-free-service.wirefreethought.com/v1/geo/cities?namePrefix=${data}&limit=5&offset=0&hateoasMode=false`);

};
