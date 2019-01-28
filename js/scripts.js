function placesIveBeen() {
  this.place = [],
  this.currentId = 0
}

placesIveBeen.prototype.addPlaces = function(place) {
  place.id = this.assignId();
  this.places.push(place);
}

placesIveBeen.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

function Places(location, landMark, timeOfYear, comments) {
  this.location = location,
  this.landMark = landMark,
  this.timeOfYear = timeOfYear,
  this.comments = comments;
}

var barcelona = new Places("Spain", "Sagrada Familia", "2006", "Learned Spanish");
var london = new Places("England", "Shakespeare's Globe", "2008", "Had high tea errday");
var tokyo = new Places("Japan", "Tsukiji Market", "2010", "Best sushi of my life");
var berlin = new Places("Russia", "Brandenburg Gate", "2014", "cool");


$(document).ready(function() {
  $("#1").click(function() {
    $("#output1").append("<li>" + barcelona.location +  "</li>");   $("#output1").append("<li>" + barcelona.landMark + "</li>");
    $("#output1").append("<li>" + barcelona.timeOfYear + "</li>");
    $("#output1").append("<li>" + barcelona.comments + "</li>");
  });
  $("#2").click(function() {
    $("#output2").append("<li>" + london.location +  "</li>");   $("#output2").append("<li>" + london.landMark + "</li>");
    $("#output2").append("<li>" + london.timeOfYear + "</li>");
    $("#output2").append("<li>" + london.comments + "</li>");
  });
  $("#3").click(function() {
    $("#output3").append("<li>" + tokyo.location +  "</li>");   $("#output3").append("<li>" + tokyo.landMark + "</li>");
    $("#output3").append("<li>" + tokyo.timeOfYear + "</li>");
    $("#output3").append("<li>" + tokyo.comments + "</li>");
  });
  $("#4").click(function() {
    $("#output4").append("<li>" + berlin.location +  "</li>");   $("#output4").append("<li>" + berlin.landMark + "</li>");
    $("#output4").append("<li>" + berlin.timeOfYear + "</li>");
    $("#output4").append("<li>" + berlin.comments + "</li>");
  });
});
