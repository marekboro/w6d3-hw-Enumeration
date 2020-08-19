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
  return this.journeys.map((journey)=>{
    return journey.endLocation;
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  // using //!!  F I L T E R
  return this.journeys.filter((journey) => {
    return journey.distance >= minDistance;
  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
