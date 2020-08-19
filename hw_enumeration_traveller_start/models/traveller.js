const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  //!! R E F A C T O R E D
  return this.journeys.map((journey)=>{
       return journey.startLocation;
     });
 
  // WORKS
  // const startLocations = this.journeys.map((journey)=>{
  //   return journey.startLocation;
  // });
  // return startLocations;

};

Traveller.prototype.getJourneyEndLocations = function () {

};

Traveller.prototype.getJourneysByTransport = function (transport) {

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
