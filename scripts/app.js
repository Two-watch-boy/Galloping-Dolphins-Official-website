var marcusArr = ["Batti 801", "9F", "Vindicator", "Casco", "Bagger", "Adder", "Rocoto", "Windsor", "Brawler", "Zion", "Dominator", "Commet", "Sanchez", "Osiris", "Vergo", "Dubsta", "Insurgent", "Sultan", "Kuruma", "Stanier", "Roosevelt", "Emperor", "Hakuchou", "T20","RH8", "Monroe", "Gang Burrito", "Jackel", "Furore GT", "Blista", "Cognoscenti Cabrio", "Dubsta 6x6", "Schafter", "Baller", "Banshee", "Buccaneer", "Primo", "Chino", "fact", "Moonbeam", "Tornado", "Voodoo"];

var naomiArr = ["Dubsta", "Voltic", "Voodoo", "RH8", "Sultan RS", "Banshee", "Tornado", "Jester", "Slamvan", "Akuma", "Dubsta 6x6", "Habanero", "Surge", "Bifta", "Coquette", "Rebel", "Prairie", "Ruiner", "Futo", "Sanchez", "Penumbra", "Dominator", "Sabre Turbo", "Zion", "Panto", "Blista", "Comet", "Kuruma", "Batti 801"];

var paulArr = ["Surano", "Schwartzer", "Sentinel XS", "Furore GT", "Coquette", "Feltzer", "Commet", "RH8", "9F Cabrio", "Khamelion", "Double T", "Carbon RS", "Akuma", "Nemesis", "Sanchez", "Jackel", "Bagger", "Futo", "Panto", "Insurgent", "Dubsta 6x6", "Patriot", "Granger", "Brawler", "Kuruma", "Stratum", "Rhapsody", "Issi", "Slamvan", "Emperor", "Phonex", "Buccaneer", "Tornado", "Virgo", "Coquette Clasic", "Nightshade", "Chino", "Voltic", "Osiris", "Sultan RS", "Entity XF", "T20", "Infernus", "Vacca", "Zentorno", "Monroe"];

var mikeArr = ["T20", "Mamba", "Sterling", "Verlierer", "Dukes", "Schafter", "Massacro", "Banshee", "Slamvan", "Turismo R", "Sultan RS", "Stinger", "Blista", "HotKnife", "Roosevelt Vallor", "Windsor", "Fellon", "Zentorno", "Fellon GT", "Buccaneer", "Huntley S", "Brawler", "Dubsta 6x6", "Jester", "Double T", "end", "Sanchez", "Batti 801", "Bagger"];

min = 0;
marcusMax = marcusArr.length;
naomiMax = naomiArr.length;
paulMax = paulArr.length;
mikeMax = mikeArr.length;


$(document).ready(function() {

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
    console.log("random number", y-1);
    var carChosenMarcus = marcusArr[y-1];
    console.log("car selected", carChosenMarcus);
    $("#marcusRandomResult").empty();
    $("#marcusRandomResult").append('<p class="carOfPower">' + carChosenMarcus + '</p>');
  }

  function naomiArrVal(){
    var y = getRandomInt(0, naomiMax);
    console.log("random number", y-1);
    var carChosenNaomi = naomiArr[y-1];
    console.log("car selected", carChosenNaomi);
    $("#naomiRandomResult").empty();
    $("#naomiRandomResult").append('<p class="carOfPower">' + carChosenNaomi + '</p>');
  }

  function paulArrVal(){
    var y = getRandomInt(0, paulMax);
    console.log("random number", y-1);
    var carChosenPaul = paulArr[y-1];
    console.log("car selected", carChosenPaul);
    $("#paulRandomResult").empty();
    $("#paulRandomResult").append('<p class="carOfPower">' + carChosenPaul + '</p>');
  }

  function mikeArrVal(){
    var y = getRandomInt(0, mikeMax);
    console.log("random number", y-1);
    var carChosenMike = mikeArr[y-1];
    console.log("car selected", carChosenMike);
    $("#mikeRandomResult").empty();
    $("#mikeRandomResult").append('<p class="carOfPower">' + carChosenMike + '</p>');
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

  },500); // 5 seconds
}
