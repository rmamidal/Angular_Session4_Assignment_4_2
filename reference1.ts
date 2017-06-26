// Namespace vehicalnamespace created.
namespace VehicleNameSpace {
    //Interface.
    export interface IVehicle {
        type: string; // proprty type
        name: string; // proprty name
        model: string; // proprty model
        speed: number; // proprty Speed
    }
    // Function.
    export function vehicleDetails(vehicle: IVehicle) {
        console.log(`Type of Vehicle: ${vehicle.type},
         Name of Vehicle: ${vehicle.name}, 
         Model of Vehicle: ${vehicle.model}`);
    }
}