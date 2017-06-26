///<reference path="reference1.ts" />
///<reference path="reference2.ts" />
// Consuming Interface.
let bike: VehicleNameSpace.IVehicle = {type:'2 Wheeler',name:'Activa', model:'3G', speed:110};

// Consuming function from reference1.
VehicleNameSpace.vehicleDetails(bike);

// Consuming function from reference2.
VehicleNameSpace.vehicleSpeed(bike);