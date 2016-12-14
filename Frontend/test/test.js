var assert = require('assert');
var $http = require("http");
var Gebruikers = require("../src/js/services/gebruikers.service");

describe("Gebruikers", function () {
    describe("#getHuidigeGebruiker(gebruikersData, gebruikersId, gebruikserService)", function () {
        it("De juiste gebruiker zou terug moeten gegeven worden zonder fout", function () {
            Gebruikers;
            var gebruikers = [{_id: 1, name: "Matthias"}, {_id:2 , name: "Pieter"}];
            Gebruikers.getHuidigeGebruiker(gebruikers, 1, Gebruikers);
            asser.equals("Matthias", Gebruikers.gebruiker);
        })
    })
})

describe("Gebruikers", function () {
    describe("#storeUser(gebruikerId)", function () {
        it("Id van de User moet in de localstorage zitten", function () {
            Gebruikers;
            Gebruikers.storeUser(1);
            assert.equals(1, Gebruikers._$window.localStorage.getItem("userData"));
        })
    })
})

describe("Gebruikers", function () {
    describe("#checkUserService(gebruikerData, credentialData, gebruikersService))", function () {
        it("De naam en het password moeten gelijk zijn en het id van de user zal stored zijn in localStorage", function () {
            Gebruikers;
            Gebruikers.checkUserService([{_id: 1,name:"Matthias", password: "1234"},{_id: 2, name: "Pieter", password:"4567"}], {name:"Matthias", password: "1234"}, Gebruikers);
            assert.equals(1, Gebruikers._$window.localStorage.getItem("userData"));
        })
    })
})