module.exports = function (app, routes, methods) {
    routes.forEach(function (route) {
        app[route.type](route.path, methods[route.method]);
    });
}