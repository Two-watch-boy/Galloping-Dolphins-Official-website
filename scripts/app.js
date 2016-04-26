var marcusArr = ["Bati 801", "9F", "Vindicator", "Casco", "Bagger", "Adder", "Rocoto", "Windsor", "Brawler", "Zion", "Dominator", "Commet", "Sanchez", "Osiris", "Vergo", "Dubsta", "Insurgent", "Sultan", "Kuruma", "Stanier", "Roosevelt", "Emperor", "Hakuchou", "T20","RH8", "Monroe", "Gang Burrito", "Jackel", "Furore GT", "Blista", "Cognoscenti Cabrio", "Dubsta 6x6", "Schafter", "Baller", "Banshee", "Buccaneer", "Primo", "Chino", "Faction", "Moonbeam", "Tornado", "Voodoo"];

var naomiArr = ["Dubsta", "Voltic", "Voodoo", "RH8", "Sultan RS", "Banshee", "Tornado", "Jester", "Slamvan", "Akuma", "Dubsta 6x6", "Habanero", "Surge", "Bifta", "Coquette", "Rebel", "Prairie", "Ruiner", "Futo", "Sanchez", "Penumbra", "Dominator", "Sabre Turbo", "Zion", "Panto", "Blista", "Comet", "Kuruma", "Bati 801"];

var paulArr = ["Surano", "Schwartzer", "Sentinel XS", "Furore GT", "Coquette", "Feltzer", "Commet", "RH8", "9F Cabrio", "Khamelion", "Double T", "Carbon RS", "Akuma", "Nemesis", "Sanchez", "Jackel", "Bagger", "Futo", "Panto", "Insurgent", "Dubsta 6x6", "Patriot", "Granger", "Brawler", "Kuruma", "Stratum", "Rhapsody", "Issi", "Slamvan", "Emperor", "Phonex", "Buccaneer", "Tornado", "Virgo", "Coquette Clasic", "Nightshade", "Chino", "Voltic", "Osiris", "Sultan RS", "Entity XF", "T20", "Infernus", "Vacca", "Zentorno", "Monroe"];

var mikeArr = ["T20", "Mamba", "Sterling", "Verlierer", "Dukes", "Schafter", "Massacro", "Banshee", "Slamvan", "Turismo R", "Sultan RS", "Stinger", "Blista", "HotKnife", "Roosevelt Vallor", "Windsor", "Fellon", "Zentorno", "Fellon GT", "Buccaneer", "Huntley S", "Brawler", "Dubsta 6x6", "Jester", "Double T", "Enduro", "Sanchez", "Bati 801", "Bagger"];

min = 0;
marcusMax = marcusArr.length - 1;
naomiMax = naomiArr.length -1;
paulMax = paulArr.length -1;
mikeMax = mikeArr.length -1;


$(document).ready(function() {


  $(window).bind('scroll', function () {
      if ($(window).scrollTop() > 1) {
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
     window.location.href= 'self_destruct/countdown_3.html'; // the redirect goes here

  },500);
}
