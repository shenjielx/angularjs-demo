var model = {
    products:[
        {
            name: "Product #1",
            description: "A product",
            category: "Category #1",
            price: 100
        },
        {
            name: "Product #2",
            description: "A product",
            category: "Category #2",
            price: 120
        },
        {
            name: "Product #3",
            description: "A product",
            category: "Category #3",
            price: 130
        },
        {
            name: "Product #4",
            description: "A product",
            category: "Category #2",
            price: 140
        },
        {
            name: "Product #5",
            description: "A product",
            category: "Category #1",
            price: 150
        }
    ]
};
angular.module("sportsStore")
    .controller("sportsStoreCtrl",function ($scope) {
        angular.forEach(model.products,function(item){
            var temp ={
                name : item.name + '01',
                description: item.description + ' 01',
                category: item.category,
                price: 150+1
            };
            model.products.push(temp);
        });
        angular.forEach(model.products,function(item){
            var temp ={
                name : item.name + '02',
                description: item.description + ' 02',
                category: item.category,
                price: 150+12
            };
            model.products.push(temp);
        });
        $scope.data = model;
    });