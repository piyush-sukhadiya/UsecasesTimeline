'use strict';

export default class cardListService {

    constructor($http) {
        this.$http = $http;
    }

    saveNewCase(newCase) {
        return this.$http.post('/api/usecases', newCase).then((res) => res.data);
    }

}