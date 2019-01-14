var routeBuilder = require('./route-builder');
var IndexPerformance = require('../models/IndexPerformance');
var seed = require('../seed');

var routes = [{
        path: '/api/setupData',
        type: 'get',
        method: "setupData"
    }, {
        path: '/api/fetchData',
        type: 'get',
        method: "fetchData"
    }, {
        path: '/api/removeData',
        type: 'get',
        method: "removeData"
    }];
    
 var methods = { 
     setupData: function (req, res) {
        IndexPerformance.remove().then(
            () => {
              return  Promise.all([IndexPerformance.create(seed.bseData), IndexPerformance.create(seed.djData)]);
            }
        ).then(
            (results) => {
                res.send(results);
            },
            err => {
                console.log(err);
            }
        )
    },

    fetchData: function (req, res) {
        IndexPerformance.find().then(
            (results) => {
                let bseData, djData;
                bseData = results.filter(result => result.Index === 'BSE');
                djData = results.filter(result => result.Index === 'DJIA');
                res.send({bseData, djData});
            },
            err => {
                console.log(err);
            }
        )
    },

    removeData: function (req, res) {
        IndexPerformance.remove().then(
            () => {
                return IndexPerformance.find();
            },
            err => {
                console.log(err);
            }
        ).then(
            (results) => {
                res.send(results);
            },
            err => {
                console.log(err);
            }
        )
    }
};

module.exports = function (app) {
    return routeBuilder(app, routes, methods);
}