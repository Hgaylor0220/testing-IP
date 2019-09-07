import { Galactic } from './test-project.js';
import 'bootstrap';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

$(document).ready(function() {
  $("#galacticAgeCal").submit(function(event){
    event.preventDefault();
    var userAge = $("#userAge").val();
    var galacticCalculation = new Galactic(userAge);
    galacticCalculation.ageCalculator();
    // $("#result").append(newSentence.letter);

  });
});
