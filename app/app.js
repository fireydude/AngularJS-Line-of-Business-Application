/**
 * Created by Deb on 8/20/2014.
 */
(function () {
    "use strict";
    var app = angular.module("productManagement",
        [
            "common.services", 
            "ui.router",
            "productResourceMock"
        ]);
        
    app.config(["$stateProvider",
                "$urlRouterProvider",
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state("home", {
                    url: "/",
                    templateUrl: "app/welcomeView.html"
                })
                // Products
                .state("productList", {
                    url: "/products",
                    templateUrl: "app/products/productListView.html",
                    controller: "ProductListCtrl as vm"
                })
                .state("productEdit", {
                    url: "/prodcts/edit/:productId",
                    templateUrl: "app/products/productEditView.html",
                    controller: "ProductEditCtrl as vm"
                })
                .state("productDetail", {
                    url: "/product/:productId",
                    templateUrl: "app/products/productDetailView.html",
                    controller: "ProductDetailCtrl as vm",
                    resolve: {
                        pr: "productResource",
                        product: function(pr, $stateParams) {
                            var productId = $stateParams.productId;
                            return pr.get({ productId: productId })
                                .$promise;
                        }
                    }
                });
        }
    ]);
    
}());