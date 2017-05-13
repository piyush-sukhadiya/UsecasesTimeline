'use strict';

export default class cardListService {

    constructor($http) {
        this.$http = $http;
    }

    getUseCases() {
        return this.$http.get('/api/usecases').then((res) => res.data);
    }

}