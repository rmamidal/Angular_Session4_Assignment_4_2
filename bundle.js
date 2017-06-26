// Namespace vehicalnamespace created.
var VehicleNameSpace;
(function (VehicleNameSpace) {
    // Function.
    function vehicleDetails(vehicle) {
        console.log("Type of Vehicle: " + vehicle.type + ",\n         Name of Vehicle: " + vehicle.name + ", \n         Model of Vehicle: " + vehicle.model);
    }
    VehicleNameSpace.vehicleDetails = vehicleDetails;
})(VehicleNameSpace || (VehicleNameSpace = {}));
///<reference path="reference1.ts" />
var VehicleNameSpace;
(function (VehicleNameSpace) {
    // Function created with same namespace.
    function vehicleSpeed(vehicle) {
        console.log(vehicle.name + " with model " + vehicle.model + " drives at speed of " + vehicle.speed + " Kmph");
    }
    VehicleNameSpace.vehicleSpeed = vehicleSpeed;
})(VehicleNameSpace || (VehicleNameSpace = {}));
///<reference path="reference1.ts" />
///<reference path="reference2.ts" />
// Consuming Interface.
var bike = { type: '2 Wheeler', name: 'Activa', model: '3G', speed: 110 };
// Consuming function from reference1.
VehicleNameSpace.vehicleDetails(bike);
// Consuming function from reference2.
VehicleNameSpace.vehicleSpeed(bike);
