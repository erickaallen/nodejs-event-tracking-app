var express = require('express');
var dbRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var eventsData = [ 
    {
        name: 'Event 1',
        description: "First Event",
        date: '2016.01.01',
        time: '1:00 PM',
        duration: '1 Hour',
        location: {
            streetAddr: '101 East Main Street',
            city: 'Louisville',
            state: 'KY',
            zip: '11111',
            lon: 0,
            lat: 0
        },
        capacity: 100
    },
    {
        name: 'Event 2',
        description: "Second Event",
        date: '2016.02.02',
        time: '2:00 PM',
        duration: '2 Hours',
        location: {
            streetAddr: '202 East Main Street',
            city: 'Louisville',
            state: 'KY',
            zip: '22222',
            lon: 0,
            lat: 0
        },
        capacity: 200
    },
    {
        name: 'Event 3',
        description: "Third Event",
        date: '2016.03.03',
        time: '3:00 PM',
        duration: '3 Hours',
        location: {
            streetAddr: '303 East Main Street',
            city: 'Louisville',
            state: 'KY',
            zip: '33333',
            lon: 0,
            lat: 0
        },
        capacity: 300
    }
];

dbRouter.route('/AddEventData')
    .get(function(req, res) {
        var url = 'mongodb://localhost:27017/eventsApp';
        mongodb.connect(url, function(err, db) {
            var collection = db.collection('events');
            collection.insertMany(eventsData, function(err, results) {
                res.send(results);
                db.close();
            });
        });
    });

module.exports = dbRouter;