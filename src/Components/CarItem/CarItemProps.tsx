export interface CarItemProps {
    id: number,
    url: string,
    baseSpecs?: object,
    engineSpecs?: object,
    transmissionSpecs?: object,
    brakeWheelSpecs?: object
    description?: string,
    interiorImageUrls?: string[],
}