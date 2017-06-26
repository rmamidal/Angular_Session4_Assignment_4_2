///<reference path="reference1.ts" />
namespace VehicleNameSpace {
    // Function created with same namespace.
    export function vehicleSpeed(vehicle: VehicleNameSpace.IVehicle) {
        console.log(`${vehicle.name} with model ${vehicle.model} drives at speed of ${vehicle.speed} Kmph`);
    }
}