'use strict'

var Game = {};

(function() {
    var buttons,
        ganaA = {
            "rock" : ["scissors","lizard"],
            "scissors" : ["lizard","paper"],
            "paper" : ["rock","spock"],
            "spock" : ["rock", "scissors"],
            "lizard" : ["spock", "paper"]
        },
        computerSelected,
        playerSelected,
        result;

    var computer = function() {
        var options = ["rock", "scissors", "paper", "spock", "lizard"];
        computerSelected = options[ parseInt(Math.random() * 5) ];
        resultComputer.innerHTML = document.getElementById(computerSelected).innerHTML;
        verify();
    };

    var human = function() {
        var i = 5;
        while (i--) {
            buttons[i].onclick = selectOption;
        }
    };

    var selectOption = function() {
        Game.reset();

        playerSelected = this.id;
        result.innerHTML = document.getElementById( playerSelected ).innerHTML;
        computer();
    };

    var verify = function () {

        if ( playerSelected == computerSelected ){
            result.setAttribute('style', 'border: 8px solid red !important');
            resultComputer.setAttribute('style', 'border: 8px solid red !important');
        }else if ( ganaA[playerSelected].indexOf(computerSelected) != -1 ){
            result.setAttribute('style', 'border: 8px solid red !important');
        }else{
            resultComputer.setAttribute('style', 'border: 8px solid red !important');
        }
    };

    this.reset = function () {
        result.setAttribute('style', 'border: 8px solid grey !important');
        resultComputer.setAttribute('style', 'border: 8px solid grey !important');
    }

    this.initialize = function() {
        var info = document.getElementById('info');

        result = document.getElementById('result');
        buttons = document.getElementsByClassName('button');
        human();
    }

}).call(Game)


window.onload = function() {
    Game.initialize();
}
