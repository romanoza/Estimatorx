﻿/// <reference path="../_ref.ts" />

module Estimator {
    "use strict";


    export class ProjectSummaryRepository {
        static $inject = ['$http'];

        urlBase: string = 'api/ProjectSummary';
        $http: ng.IHttpService;

        constructor($http: ng.IHttpService) {
            this.$http = $http;
        }

        query(request? :IQueryRequest): ng.IHttpPromise<IQueryResult<IProject>> {
            var config = {
                params: request
            };

            return this.$http.get<IQueryResult<IProject>>(this.urlBase, config);
        }
    }

    // register service
    angular.module(Estimator.applicationName)
        .service('projectSummaryRepository', ['$http', ProjectSummaryRepository]);

}  