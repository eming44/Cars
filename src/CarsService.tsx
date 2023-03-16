const cars =  [
    { id: 0, url: 'audia3.jpg', manufacturer: "Audi", model: "A3", generation: "8Y", modification: "35 TFSI", releaseDate: 2020, acceleration: 8.4, maxSpeed: 232, hp: 150, engineDisplacement: 1498, torque: 250, numberCilinders: 4, fuel: "petrol", weight: 1320, cfc: "4.7-4.9", transmissionType: "Automatic", gears: 7, description: "" },
    { id: 1, url: 'audia5.jpg', manufacturer: "Audi", model: "A5", generation: "F5", modification: "50 TDI", releaseDate: 2019, acceleration: 5.3, maxSpeed: 250, hp: 286, engineDisplacement: 2967, torque: 620, numberCilinders: 6, fuel: "diesel", weight: 1700, cfc: "5.6-6.0", transmissionType: "Automatic", gears: 8, description: "" },
    { id: 2, url: 'audia7.jpg', manufacturer: "Audi", model: "A7", generation: "C8", modification: "55 TFSI", releaseDate: 2017, acceleration: 5.3, maxSpeed: 250, hp: 340, engineDisplacement: 2995, torque: 500, numberCilinders: 6, fuel: "petrol", weight: 1815, cfc: "6.8-7.2", transmissionType: "Automatic", gears: 7, description: "" },

    { id: 3, url: 'bmw3.jpg', manufacturer: "BMW", model: "3 Series", generation: "G20", modification: "M340i", releaseDate: 2022, acceleration: 4.4, maxSpeed: 250, hp: 374, engineDisplacement: 2998, torque: 500, numberCilinders: 6, fuel: "petrol", weight: 1725, cfc: "7.8-8.5", transmissionType: "Automatic", gears: 8, description: "The BMW M340i comes with a powerful, inline six-cylinder engine that can produce around 382 hp. This powerful engine gets paired with an eight-speed transmission that can adjust depending on what drive mode you're in. This means that your shifts can increase in speed when you're in sports mode.",  interiorImageUrl: "bmw3int.jpg", frontDiscType: "Ventilated", rareDiscType: "Ventilated", frontDiscMaterial: "Cast iron", rareDiscMaterial: "Cast iron", frontPadsMaterial: "Ceramic", rarePadsMaterial: "Ceramic"}, 
    { id: 4, url: 'bmw5.jpg', manufacturer: "BMW", model: "5 Series", generation: "G30", modification: "M550i", releaseDate: 2020, acceleration: 3.8, maxSpeed: 250, hp: 530, engineDisplacement: 4395, torque: 750, numberCilinders: 8, fuel: "petrol", weight: 1915, cfc: "9.7-10.0", transmissionType: "Automatic", gears: 8, description: "" },
    { id: 5, url: 'bmw8.jpg', manufacturer: "BMW", model: "8 Series", generation: "G16", modification: "M850i", releaseDate: 2022, acceleration: 3.9, maxSpeed: 250, hp: 530, engineDisplacement: 4395, torque: 750, numberCilinders: 8, fuel: "petrol", weight: 2010, cfc: "10.7-11", transmissionType: "Automatic", gears: 8, description: "" },
   
    { id: 6, url: 'mercedesc.jpg', manufacturer: "Mercedes-Benz", model: "C-class", generation: "W206", modification: "AMG C 43", releaseDate: 2022, acceleration: 4.6, maxSpeed: 250, hp: 408, engineDisplacement: 1991, torque: 500, numberCilinders: 4, fuel: "petrol", weight: 1690, cfc: "8.7-9.1", transmissionType: "Automatic", gears: 9, description: "" },
    { id: 7, url: 'mercedese.jpg', manufacturer: "Mercedes-Benz", model: "E-class", generation: "C238", modification: "AMG E 53", releaseDate: 2020, acceleration: 4.4, maxSpeed: 250, hp: 435, engineDisplacement: 2999, torque: 520, numberCilinders: 6, fuel: "petrol", weight: 1895, cfc: "8.6-8.9", transmissionType: "Automatic", gears: 9, description: "" },
    { id: 8, url: 'mercedess.jpg', manufacturer: "Mercedes-Benz", model: "S-class", generation: "Z223", modification: "S 680 V12", releaseDate: 2021, acceleration: 4.5, maxSpeed: 250, hp: 612, engineDisplacement: 5980, torque: 900, numberCilinders: 12, fuel: "petrol", weight: 2275, cfc: "13.4-14.4", transmissionType: "Automatic", gears: 9, description: "" },

    { id: 9, url: 'porschedakar.jpg', manufacturer: "Porsche", model: "911", generation: "Dakar (992)", modification: "3.0 AWD PDK", releaseDate: 2022, acceleration: 3.4, maxSpeed: 	240, hp: 480, engineDisplacement: 2981, torque: 570, numberCilinders: 6, fuel: "petrol", weight: 1605, cfc: "11.3", transmissionType: "Automatic", gears: 8, description: "" },
    
    { id: 10, url: 'porschecayenne.jpg', manufacturer: "Porsche", model: "Cayenne", generation: "III Coupe", modification: "Turbo GT 4.0 V8 Tiptronic S", releaseDate: 2021, acceleration: 3.3, maxSpeed: 300, hp: 640, engineDisplacement: 3996, torque: 850, numberCilinders: 8, fuel: "petrol", weight: 2220, cfc: "11.9", transmissionType: "Automatic", gears: 8, description: "" },
    { id: 11, url: 'ferrarisf90.jpg', manufacturer: "Ferrari", model: "SF90", generation: "Spider", modification: "4.0 V8 PHEV AWD F1", releaseDate: 2020, acceleration: 2.5, maxSpeed: 340, hp: 1000, engineDisplacement: 3990, torque: 800, numberCilinders: 8, fuel: "petrol / electric", weight: 1670, cfc: "7.9", transmissionType: "Automatic", gears: 8, description: "" },
  ];


export function getCars() {
    return cars;
}

export function getCar(id: string) {
    let numericId: number = +id;
    return cars.find(x => x.id === numericId);
}