var app = angular.module('sampleApp', ['ngRoute']);

var marcusArr = ["Bati 801", "9F", "Vindicator", "Casco", "Bagger", "Adder", "Rocoto", "Windsor", "Brawler", "Zion Cabrio", "Dominator", "Comet", "Sanchez", "Osiris", "Virgo", "Dubsta", "Insurgent", "Sultan RS", "Kuruma (armored)", "Stanier", "Roosevelt", "Emperor", "Hakuchou", "T20","RH8", "Monroe", "Gang Burrito", "Jackal", "Furore GT", "Blista", "Cognoscenti Cabrio (armored)", "Dubsta 6x6", "Schafter V12 (armored)", "Baller", "Banshee 900R", "Buccaneer", "Primo", "Chino", "Faction", "Moonbeam", "Tornado", "Voodoo", "Fusilade"];

var naomiArr = ["Dubsta", "Voltic", "Voodoo", "RH8", "Sultan RS", "Banshee 900R", "Tornado", "Jester", "Slamvan", "Akuma", "Dubsta 6x6", "Habanero", "Surge", "Bifta", "Coquette", "Rebel", "Prairie", "Ruiner", "Futo", "Sanchez", "Penumbra", "Dominator", "Sabre Turbo", "Zion Cabrio", "Panto", "Blista", "Comet", "Kuruma", "Bati 801"];

var paulArr = ["Surano", "Schwartzer", "Sentinel XS", "Furore GT", "Coquette", "Feltzer", "Comet", "RH8", "9F Cabrio", "Khamelion", "Double T", "Carbon RS", "Akuma", "Nemesis", "Sanchez", "Jackal", "Bagger", "Futo", "Panto", "Insurgent", "Dubsta 6x6", "Patriot", "Granger", "Brawler", "Kuruma (armored)", "Stratum", "Rhapsody", "Issi", "Slamvan", "Emperor", "Phoenix", "Buccaneer", "Tornado", "Virgo", "Coquette Classic", "Nightshade", "Chino", "Voltic", "Osiris", "Sultan RS", "Entity XF", "T20", "Infernus", "Vacca", "Zentorno", "Monroe"];

var mikeArr = ["T20", "Mamba", "Sterling", "Verlierer", "Dukes", "Schafter V12 (armored)", "Massacro", "Banshee 900R", "Slamvan", "Turismo R", "Sultan RS", "Stinger", "Blista", "Hotknife", "Roosevelt Valor", "Windsor", "Felon", "Zentorno", "Felon GT", "Buccaneer", "Huntley S", "Brawler", "Dubsta 6x6", "Jester", "Double T", "Enduro", "Sanchez", "Bati 801", "Bagger"];

min = 0;
marcusMax = marcusArr.length - 1;
naomiMax = naomiArr.length -1;
paulMax = paulArr.length -1;
mikeMax = mikeArr.length -1;


$(document).ready(function() {

  $(window).bind('scroll', function () {
      if ($(window).scrollTop() > 0) {
          $('.navbar').addClass('fixed');
      } else {
          $('.navbar').removeClass('fixed');
      }
  });

  for (var a = 0; a <marcusArr.length; a++){
    // console.log ("Marcus", marcusArr[a]);
    $(".marcusCars").append('<li>' + marcusArr[a] + '</li>');
  }
  for (var b = 0; b <naomiArr.length; b++){
    // console.log ("Naomi", naomiArr[b]);
    $(".naomiCars").append('<li>' + naomiArr[b] + '</li>');
  }
  for (var c = 0; c <paulArr.length; c++){
      // console.log ("Paul", paulArr[c]);
      $(".paulCars").append('<li>' + paulArr[c] + '</li>');
  }
  for (var d = 0; d <mikeArr.length; d++){
        // console.log ("Mike", mikeArr[d]);
        $(".mikeCars").append('<li>' + mikeArr[d] + '</li>');
  }


  $(".selfDestruct").on("click", handleSelfDestruct);


  $("#marcusRandom").on("click", getRandomInt, marcusArrVal);
  $("#naomiRandom").on("click", getRandomInt, naomiArrVal);
  $("#paulRandom").on("click", getRandomInt, paulArrVal);
  $("#mikeRandom").on("click", getRandomInt, mikeArrVal);

  $( "#testMovingStuff" ).on("mousemove", getQuords);

  function marcusArrVal(){
    var y = getRandomInt(0, marcusMax);
    console.log("random number", y);
    var carChosenMarcus = marcusArr[y];
    console.log("car selected", carChosenMarcus);
    $("#marcusRandomResult").empty();
    $("#marcusRandomResult").append('<div class="progress progress-striped active"><div class="progress-bar progress-marcus progress-bar-warning" style="width: 0%"><span class="progress-value">Thinking</span></div></div>');
    for (var i = 0; i < 150; i ++){
      setTimeout(function () {
        $(".progress-marcus").css("width", i);
        // console.log("heres the value of i ",i);
        i++;
      },250);
    }
    setTimeout(function () {
      $("#marcusRandomResult").empty();
      $("#marcusRandomResult").append('<p class="carOfPower">' + carChosenMarcus + '</p>');
    },750);

  }

  function naomiArrVal(){
    var y = getRandomInt(0, naomiMax);
    console.log("random number", y);
    var carChosenNaomi = naomiArr[y];
    console.log("car selected", carChosenNaomi);
    $("#naomiRandomResult").empty();
    $("#naomiRandomResult").append('<div class="progress progress-striped active"><div class="progress-bar progress-naomi progress-bar-danger" style="width: 0%"><span class="progress-value">Thinking</span></div></div>');
    for (var i = 0; i < 150; i ++){
      setTimeout(function () {
        $(".progress-naomi").css("width", i);
        // console.log("heres the value of i ",i);
        i++;
      },250);
    }
    setTimeout(function () {
      $("#naomiRandomResult").empty();
      $("#naomiRandomResult").append('<p class="carOfPower">' + carChosenNaomi + '</p>');
    },750);
  }

  function paulArrVal(){
    var y = getRandomInt(0, paulMax);
    console.log("random number", y);
    var carChosenPaul = paulArr[y];
    console.log("car selected", carChosenPaul);
    $("#paulRandomResult").empty();
    $("#paulRandomResult").append('<div class="progress progress-striped active"><div class="progress-bar progress-paul" style="width: 0%"><span class="progress-value">Thinking</span></div></div>');
    for (var i = 0; i < 150; i ++){
      setTimeout(function () {
        $(".progress-paul").css("width", i);
        // console.log("heres the value of i ",i);
        i++;
      },250);
    }
    setTimeout(function () {
      $("#paulRandomResult").empty();
      $("#paulRandomResult").append('<p class="carOfPower">' + carChosenPaul + '</p>');
    },750);
  }

  function mikeArrVal(){
    var y = getRandomInt(0, mikeMax);
    console.log("random number", y);
    var carChosenMike = mikeArr[y];
    console.log("car selected", carChosenMike);
    $("#mikeRandomResult").empty();
    $("#mikeRandomResult").append('<div class="progress progress-striped active"><div class="progress-bar progress-mike progress-bar-success" style="width: 0%"><span class="progress-value">Thinking</span></div></div>');
    for (var i = 0; i < 150; i ++){
      setTimeout(function () {
        $(".progress-mike").css("width", i);
        // console.log("heres the value of i ",i);
        i++;
      },250);
    }
    setTimeout(function () {
      $("#mikeRandomResult").empty();
      $("#mikeRandomResult").append('<p class="carOfPower">' + carChosenMike + '</p>');
    },750);
  }

  function getRandomInt(min, max) {
    var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("heres the origional number", randomNum);
    return randomNum;
  }

});

function handleSelfDestruct(){
  $(".selfDestruct").val('(=--boom--=)');
  alert("Don't worry, this button doesn't actually work... yet...");
  setTimeout(function () {
     window.location.href= 'self_destruct/selfDestruct.html'; // the redirect goes here

  },500);
}

function getQuords( event ) {
  // var marginTop = parseInt($("#iconEmblum").css("margin-top"));
  // var marginLeft = parseInt($("#iconEmblum").css("margin-left"));
  // console.log((marginLeft + event.clientX), (marginTop + event.clientY));
  $("#marcusreact").css("margin-top", (4 - ((event.clientY) * 0.0008))+"%");
  $("#marcusreact").css("margin-left", (22 + ((event.clientX) * 0.0005))+"%");
  $("#naomireact").css("margin-top", (5 - ((event.clientY) * 0.0006))+"%");
  $("#naomireact").css("margin-left", (-8 + ((event.clientX) * 0.0003))+"%");
  $("#paulreact").css("margin-top", (7 - ((event.clientY) * 0.0007))+"%");
  $("#paulreact").css("margin-left", (-6 + ((event.clientX) * 0.0004))+"%");
  $("#mikereact").css("margin-top", (7 - ((event.clientY) * 0.0008))+"%");
  $("#mikereact").css("margin-left", (-6 + ((event.clientX) * 0.0005))+"%");
  // $("#testMovingStuff").css("margin-top", ((event.clientY) * 0.0001)+"%");
  // $("#testMovingStuff").css("margin-left", ((event.clientX) * 0.0001)+"%");
  // $("#house1").css("margin-top", (-30 + ((event.clientY) * 0.0015))+"%");
  // $("#house1").css("margin-left", (83 + ((event.clientX) * 0.0015))+"%");

}
