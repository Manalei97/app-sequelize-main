const { membersTransformer } = require("./memberTransformers")
const { photosTransformer } = require("./photoTransformers")


var tripTransformer = function(trip){
    if(trip.Members){
        trip.Members = membersTransformer(trip.Members)
    }
    if(trip.Photos){
        trip.Photos = photosTransformer(trip.Photos)
    }
    return trip
}
var tripsTransformer = function(trips){
   return trips.map(trip =>tripTransformer(trip))
}

module.exports={
    tripTransformer,
    tripsTransformer
}