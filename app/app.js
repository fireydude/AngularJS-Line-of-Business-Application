/**
 * Created by Deb on 8/20/2014.
 */
(function () {
    "use strict";
    var app = angular.module("productManagement",
        [
            "common.services", 
            "ui.router",
            "ui.mask",
            "productResourceMock",
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
                    abstract: true,
                    url: "/prodcts/edit/:productId",
                    templateUrl: "app/products/productEditView.html",
                    controller: "ProductEditCtrl as vm",
                    resolve: {
                        productResource: "productResource",
                        product: function (productResource, $stateParams) {
                            var prod = productResource.get({ productId: $stateParams.productId });
                            return prod.$promise;
                        }
                    }
                })
                .state("productEdit.info", {
                    url: "/info",
                    templateUrl: "app/products/productEditInfoView.html"
                })
                .state("productEdit.price", {
                    url: "/price",
                        templateUrl: "app/products/productEditPriceView.html"
                        })
                .state("productEdit.tags", {
                        url: "/tags",
                        templateUrl: "app/products/productEditTagsView.html"
                })
                .state("productDetail", {
                    url: "/product/:productId",
                    templateUrl: "app/products/productDetailView.html",
                    controller: "ProductDetailCtrl as vm",
                    resolve: {
                        pr: "productResource",
                        product: function(pr, $stateParams) {
                            return pr.get({ productId: $stateParams.productId }).$promise;
                        }
                    }
                });
        }
    ]);
    
}());