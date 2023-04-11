import { Engines } from "../../Enums/Engines"
import { Transmissions } from "../../Enums/Transmissions"

export interface CarItemProps {
    id: number,
    url: string,
    baseSpecs?: {
        manufacturer: string,
        model: string,
        modification: string,
        generation: string, 
        releaseDate: number,
        fuelConsumption: string, 
        maximumSpeed: number, 
        acceleration: number, 
        weight: number
    },
    engineSpecs?: {
        horsePower: number, 
        engineDisplacement: number, 
        fuelType: Engines, 
        cilindersNumber: number, 
        torque: number 
    },
    transmissionSpecs?: {
        transmission: Transmissions, 
        gears: number
    },
    brakeWheelSpecs?: {
        frontDiscType: string, 
        rareDiscType: string, 
        frontDiscMaterial: string, 
        rareDiscMaterial: string, 
        frontPadsMaterial: string, 
        rarePadsMaterial: string
    }
    description?: string,
    interiorImageUrls?: string[],
    trailerUrl?: string
}