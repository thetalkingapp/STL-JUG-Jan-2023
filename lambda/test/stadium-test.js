'use strict';

const test = require('ask-sdk-test');
const skillHandler = require('../index.js').handler;
const nock = require('nock');

const skillSettings = {
    appId: 'amzn1.ask.skill.00000000-0000-0000-0000-000000000000',
    userId: 'amzn1.ask.account.VOID',
    deviceId: 'amzn1.ask.device.VOID',
    locale: 'en-US',
};

const alexaTest = new test.AlexaTest(skillHandler, skillSettings);

describe('Hello World Skill', function() {
    describe('LaunchRequest', function() {
        alexaTest.test([
            {
                request: new test.LaunchRequestBuilder(skillSettings).build(),
                saysLike: 'Welcome to home field, you can say Hello or Help or you can ask which stadium your NFL football team plays in. Which would you like to try?', repromptsNothing: false, shouldEndSession: false,
            },
        ]);
    });

    describe('HelloWorldIntent', function() {
        alexaTest.test([
            {
                request: new test.IntentRequestBuilder(skillSettings, 'HelloWorldIntent').build(),
                says: 'Hello and welcome to home field!', repromptsNothing: true, 
            },
        ]);
    });

    describe('TeamStadiumIntent', function() {
        const scope = nock('http://localhost:8080')
            .get('/teams/patriots/stadium')
            .reply(200, 
                {
                    "capacity": 66829,
                    "city": "Foxborough",
                    "id": "636d29281007f43481c4e45d",
                    "name": "Gillette Stadium",
                    "roof": "Open",
                    "state": "Massachusetts",
                    "surface": "FieldTurf CORE",
                    "team": [
                        "Patriots"
                    ],
                    "year": "2002"
                }
            );

        alexaTest.test([
            {
                request: new test.IntentRequestBuilder(skillSettings, 'TeamStadiumIntent')
                .withSlot('team', 'patriots')
                .build(),
                says: 'The patriots play at Gillette Stadium.', repromptsNothing: true, 
            },
        ]);
    });


});