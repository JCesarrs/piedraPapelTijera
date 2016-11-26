'use strict'

var Game = {};

(function() {
    var buttons,
        computerSelected,
        data = [
            { select:"rock", ganaA:["scissors","lizard"] },
            { select:"paper", ganaA:["rock","spock"] },
            { select:"scissors", ganaA:["lizard","paper"] },
            { select:"lizard", ganaA:["spock", "paper"] },
            { select:"spock", ganaA:["rock", "scissors"] }
        ],
        userSelected,
        resultUser,
        resultComputer;

    var computer = function() {
        computerSelected = parseInt(Math.random() * 5);
        resultComputer.innerHTML = document.getElementById( data[computerSelected].select ).innerHTML;
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
        resultUser.innerHTML = document.getElementById( this.id ).innerHTML;
        userSelected = this.getAttribute("data-value");
        computer();
    };

    var verify = function () {
        if ( userSelected == computerSelected ){
            resultUser.setAttribute('style', 'border: 8px solid red !important');
            resultComputer.setAttribute('style', 'border: 8px solid red !important');
        }else if ( data[userSelected].ganaA.indexOf( data[computerSelected].select ) != -1 ){
            resultUser.setAttribute('style', 'border: 8px solid red !important');
        }else{
            resultComputer.setAttribute('style', 'border: 8px solid red !important');
        }
    };

    this.reset = function () {
        resultUser.setAttribute('style', 'border: 8px solid grey !important');
        resultComputer.setAttribute('style', 'border: 8px solid grey !important');
    }

    this.initialize = function() {
        resultUser = document.getElementById('resultUser');
        resultComputer = document.getElementById('resultComputer');
        buttons = document.getElementsByClassName('button');
        human();
    }
}).call(Game)

window.onload = function() {
    Game.initialize();
}
