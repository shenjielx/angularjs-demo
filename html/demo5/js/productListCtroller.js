angular.module("sportsStore")
    .constant("productListActiveClass", "btn-primary")
    .constant("productListPageCount", 3)
    .controller("productListCtrl",function ($scope,$filter,productListActiveClass,productListPageCount,cart) {
        var selectedCategroy = null;
        $scope.selectedPage = 1;
        $scope.pageSize = productListPageCount;

        $scope.selectCategory = function(newCategory){
            selectedCategroy = newCategory;
            $scope.selectedPage = 1;
        };
        $scope.selectPage = function(newPage){
            $scope.selectedPage = newPage;
        }
        $scope.categoryFilterFn = function(product){
            return selectedCategroy == null || product.category == selectedCategroy;
        };
        $scope.getCategoryClass = function(category){
            return selectedCategroy == category ? productListActiveClass : "";
        };
        $scope.getPageClass = function(page){
            return $scope.selectedPage == page ? productListActiveClass : "";
        }
        $scope.addProductToCart=function(product){
            cart.addProduct(product.id,product.name,product.price);
        }
    });