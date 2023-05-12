import { AudiModels } from "../Enums/AudiModels";
import { BmwModels } from "../Enums/BmwModels";
import { BugattiModels } from "../Enums/BugattiModels";
import { Engines } from "../Enums/Engines";
import { FerrariModels } from "../Enums/FerrariModels";
import { LamborghiniModels } from "../Enums/LamborghiniModels";
import { Manufacturers } from "../Enums/Manufacturers";
import { MercedesModels } from "../Enums/MercedesModels";
import { PorscheModels } from "../Enums/PorscheModels";
import { Transmissions } from "../Enums/Transmissions";

const cars =  [
    { id: 0, url: 'audirs7.jpg', 
    baseSpecs: { manufacturer: Manufacturers.Audi, model: AudiModels.RS7, modification: "4.0 TFSI V8 quattro tiptronic MHEV", generation: "Sportback (C8)", releaseDate: 2019, fuelConsumption: "12.2-12.7", maximumSpeed: 250, acceleration: 3.6, weight: 1950 }, 
    engineSpecs: { horsePower: 600, engineDisplacement: 3996, fuelType: Engines.Petrol, cilindersNumber: 8, torque: 800 }, 
    transmissionSpecs: {  transmission: Transmissions.Automatic, gears: 8 }, 
    brakeWheelSpecs: { frontDiscType: "Ventilated", rareDiscType: "Ventilated", frontDiscMaterial: "Cast iron", rareDiscMaterial: "Cast iron", frontPadsMaterial: "Ceramic", rarePadsMaterial: "Ceramic"}, 
    description: "“The RS 7 Sportback is our interpretation of a five-door high-performance coupé with a grand tourer design,” said Oliver Hoffmann, Managing Director of Audi Sport GmbH. “With refinements to make it even more suitable for everyday use plus its incredible performance, what we have here is an outstanding piece of sports equipment for customers who like their cars to feature stunning design.”", 
    exteriorImageUrls: ["audirs7ext.jpg", "audirs7ext1.jpg", "audirs7ext2.jpg", "audirs7ext3.jpg",],
    interiorImageUrls: ["audirs7int.jpg", "audirs7int1.jpg", "audirs7int2.jpg", "audirs7int3.jpg",],
    trailerUrl: "https://www.youtube.com/embed/Leq8UI_EYt4" },

    { id: 1, url: 'audir8.jpg', 
    baseSpecs: { manufacturer: Manufacturers.Audi, model: AudiModels.R8, modification: "Performance 5.2 FSI V10", generation: "II Spyder", releaseDate: 2019, fuelConsumption: "13.3-13.5", maximumSpeed: 329, acceleration: 3.2, weight: 1695 }, 
    engineSpecs: { horsePower: 620, engineDisplacement: 5204, fuelType: Engines.Petrol, cilindersNumber: 10, torque: 580 }, 
    transmissionSpecs: {  transmission: Transmissions.Automatic, gears: 7 }, 
    brakeWheelSpecs: { frontDiscType: "Ventilated", rareDiscType: "Ventilated", frontDiscMaterial: "Cast iron", rareDiscMaterial: "Cast iron", frontPadsMaterial: "Ceramic", rarePadsMaterial: "Ceramic"}, 
    description: "The Audi R8 is a supercar from a dying breed. As makers add turbochargers to their cars to meet ever-stricter emissions targets, the naturally aspirated engine is falling out of favour. In some ways, the R8 is a fantastic last hurrah. But, while the 5.2-litre V10 is a focal point of the car, there's much more to the R8 than simply a big engine.", 
    exteriorImageUrls: ["audir8ext.jpg", "audir8ext1.jpg", "audir8ext2.jpg", "audir8ext3.jpg",],
    interiorImageUrls: ["audir8int.jpg", "audir8int1.jpg", "audir8int2.jpg", "audir8int3.jpg",],
    trailerUrl: "https://www.youtube.com/embed/acbpmyH4RAU" },

    { id: 2, url: 'bmwm4.jpg', 
    baseSpecs: { manufacturer: Manufacturers.Bmw, model: BmwModels.M4, modification: "CSL 3.0 M Steptronic", generation: "G82", releaseDate: 2022, fuelConsumption: "9.8-10.1", maximumSpeed: 307, acceleration: 3.7, weight: 1625 }, 
    engineSpecs: { horsePower: 550, engineDisplacement: 2993, fuelType: Engines.Petrol, cilindersNumber: 6, torque: 650 }, 
    transmissionSpecs: {  transmission: Transmissions.Automatic, gears: 8 }, 
    brakeWheelSpecs: { frontDiscType: "Ventilated", rareDiscType: "Ventilated", frontDiscMaterial: "Cast iron", rareDiscMaterial: "Cast iron", frontPadsMaterial: "Ceramic", rarePadsMaterial: "Ceramic"}, 
    description: "The new BMW M4 CSL represents a highly concentrated showcase for the racing craft of BMW M GmbH and its expertise in powertrain and chassis development and lightweight design. For example, the company can call on many years of experience in working with carbon fiber reinforced plastic (CFRP) for body, chassis, and interior components.", 
    exteriorImageUrls: ["bmwm4ext.jpg", "bmwm4ext1.jpg", "bmwm4ext2.jpg", "bmwm4ext3.jpg",],
    interiorImageUrls: ["bmwm4int.jpg", "bmwm4int1.jpg", "bmwm4int2.jpg", "bmwm4int3.jpg",],
    trailerUrl: "https://www.youtube.com/embed/oSpdlJRTTNk" },

    { id: 3, url: 'bmwm5.jpg', 
    baseSpecs: { manufacturer: Manufacturers.Bmw, model: BmwModels.M5, modification: "CS 4.4 V8 xDrive Steptronic", generation: "F90 LCI", releaseDate: 2021, fuelConsumption: "10.9-11.3", maximumSpeed: 305, acceleration: 3, weight: 1825 }, 
    engineSpecs: { horsePower: 635, engineDisplacement: 4395, fuelType: Engines.Petrol, cilindersNumber: 8, torque: 750 }, 
    transmissionSpecs: {  transmission: Transmissions.Automatic, gears: 8 }, 
    brakeWheelSpecs: { frontDiscType: "Ventilated", rareDiscType: "Ventilated", frontDiscMaterial: "Cast iron", rareDiscMaterial: "Cast iron", frontPadsMaterial: "Ceramic", rarePadsMaterial: "Ceramic"}, 
    description: "The new BMW M4 CSL represents a highly concentrated showcase for the racing craft of BMW M GmbH and its expertise in powertrain and chassis development and lightweight design. For example, the company can call on many years of experience in working with carbon fiber reinforced plastic (CFRP) for body, chassis, and interior components.", 
    exteriorImageUrls: ["bmwm5ext.jpg", "bmwm5ext1.jpg", "bmwm5ext2.jpg", "bmwm5ext3.jpg",],
    interiorImageUrls: ["bmwm5int.jpg", "bmwm5int1.jpg", "bmwm5int2.jpg", "bmwm5int3.jpg",],
    trailerUrl: "https://www.youtube.com/embed/vQXvyV0zIP4" },

    { id: 4, url: 'bmw3.jpg', 
    baseSpecs: { manufacturer: Manufacturers.Bmw, model: BmwModels.Series3, modification: "M340i", generation: "G20", releaseDate: 2022, fuelConsumption: "7.8-8.5", maximumSpeed: 250, acceleration: 4.4, weight: 1725 }, 
    engineSpecs: { horsePower: 374, engineDisplacement: 2998, fuelType: Engines.Petrol, cilindersNumber: 6, torque: 500 }, 
    transmissionSpecs: {  transmission: Transmissions.Automatic, gears: 8 }, 
    brakeWheelSpecs: { frontDiscType: "Ventilated", rareDiscType: "Ventilated", frontDiscMaterial: "Cast iron", rareDiscMaterial: "Cast iron", frontPadsMaterial: "Ceramic", rarePadsMaterial: "Ceramic"}, 
    description: "The BMW M340i comes with a powerful, inline six-cylinder engine that can produce around 382 hp. This powerful engine gets paired with an eight-speed transmission that can adjust depending on what drive mode you're in. This means that your shifts can increase in speed when you're in sports mode.", 
    exteriorImageUrls: ["bmw3ext.jpg", "bmw3ext1.jpg", "bmw3ext2.webp", "bmw3ext3.jpg",],
    interiorImageUrls: ["bmw3int.jpg", "bmw3int1.png", "bmw3int2.jpg", "bmw3int3.jpg",],
    trailerUrl: "https://www.youtube.com/embed/XaOrAnxEiI8" },

    { id: 5, url: 'bugattichiron.jpg', 
    baseSpecs: { manufacturer: Manufacturers.Bugatti, model: BugattiModels.Chiron, modification: "Super Sport 8.0 W16", generation: "Chiron", releaseDate: 2021, fuelConsumption: "40.3", maximumSpeed: 440, acceleration: 2.4, weight: 1995 }, 
    engineSpecs: { horsePower: 1600, engineDisplacement: 7993, fuelType: Engines.Petrol, cilindersNumber: 16, torque: 1600 }, 
    transmissionSpecs: {  transmission: Transmissions.Automatic, gears: 7 }, 
    brakeWheelSpecs: { frontDiscType: "Ventilated", rareDiscType: "Disc", frontDiscMaterial: "Cast iron", rareDiscMaterial: "Cast iron", frontPadsMaterial: "Ceramic", rarePadsMaterial: "Ceramic"}, 
    description: "As the follow-up to the legendary Veyron, the 2021 Chiron takes the brand's heritage and its predecessor's performance and melds them together into one stunning—and stunningly capable—machine. The Chiron's nearly $3 million price tag matches its extreme persona, but even for that kind of money it's almost a performance bargain. It's powered by a massive 16-cylinder engine that is a marvel of modern engineering, capable of propelling this hypercar to 300 mph and beyond.", 
    exteriorImageUrls: ["bugattichironext.jpg", "bugattichironext1.jpg", "bugattichironext2.jpg", "bugattichironext3.jpg",], 
    interiorImageUrls: ["bugattichironint.jpg", "bugattichironint1.jpg", "bugattichironint2.jpg", "bugattichironint3.jpg",],
    trailerUrl: "https://www.youtube.com/embed/NMThdHhrLoM" },

    { id: 10, url: 'ferrari296gtb.jpg', 
    baseSpecs: { manufacturer: Manufacturers.Ferrari, model: FerrariModels.gtb296, modification: "3.0 V6 PHEV F1 DCT", generation: "296 GTB", releaseDate: 2022, fuelConsumption: "6.4", maximumSpeed: 330, acceleration: 2.9, weight: 1470 }, 
    engineSpecs: { horsePower: 663, engineDisplacement: 2992, fuelType: Engines.Petrol, cilindersNumber: 6, torque: 740 }, 
    transmissionSpecs: {  transmission: Transmissions.Automatic, gears: 8 }, 
    brakeWheelSpecs: { frontDiscType: "Ventilated", rareDiscType: "Disc", frontDiscMaterial: "Cast iron", rareDiscMaterial: "Cast iron", frontPadsMaterial: "Ceramic", rarePadsMaterial: "Ceramic"}, 
    description: "Any doubts about Ferrari having neutered its latest creation by shoving a V6 amidships are dispelled as soon as the first time the 2022 Ferrari 296 GTB rumbles past. There’s a sonorous engine note crushing the air, a thunder of combustion that serves as a reminder that the gradual and inevitable demise of petrol power will one day leave a black hole in the automotive landscape. ", 
    exteriorImageUrls: ["ferrari296gtbext.jpg", "ferrari296gtbext1.jpg", "ferrari296gtbext2.jpg", "ferrari296gtbext3.jpg",],
    interiorImageUrls: ["ferrari296gtbint.jpg", "ferrari296gtbint1.jpg", "ferrari296gtbint2.jpg", "ferrari296gtbint3.jpg",],
    trailerUrl: "https://www.youtube.com/embed/D7Zv2kSBagc" },
 
    { id: 11, url: 'ferrarisf90.jpg', 
    baseSpecs: { manufacturer: Manufacturers.Ferrari, model: FerrariModels.sf90, modification: "4.0 V8 PHEV AWD F1", generation: "Spider", releaseDate: 2020, fuelConsumption: "7.9", maximumSpeed: 340, acceleration: 2.5, weight: 1670 }, 
    engineSpecs: { horsePower: 1000, engineDisplacement: 3990, fuelType: Engines.Petrol, cilindersNumber: 8, torque: 800 }, 
    transmissionSpecs: {  transmission: Transmissions.Automatic, gears: 8 }, 
    brakeWheelSpecs: { frontDiscType: "Ventilated", rareDiscType: "Disc", frontDiscMaterial: "Cast iron", rareDiscMaterial: "Cast iron", frontPadsMaterial: "Ceramic", rarePadsMaterial: "Ceramic"}, 
    description: "The SF90 Spider gets exactly the same powertrain as the coupe. That means a combined 986bhp and 664lb ft of torque to blow your barnet off, with the internal combustion engine looking after the rear wheels and two of the electric motors trying to keep up with the fronts.", 
    exteriorImageUrls: ["ferrarisf90ext.jpg", "ferrarisf90ext1.jpg", "ferrarisf90ext2.jpg", "ferrarisf90ext3.jpg",],
    interiorImageUrls: ["ferrarisf90int.jpg", "ferrarisf90int1.avif", "ferrarisf90int2.jpg", "ferrarisf90int3.jpg",],
    trailerUrl: "https://www.youtube.com/embed/bL7EHCyG1vg" },

    { id: 12, url: 'lamborghinihuracan.jpg', 
    baseSpecs: { manufacturer: Manufacturers.Lamborghini, model: LamborghiniModels.Huracan, modification: "5.2 V10 LDF", generation: "Tecnica", releaseDate: 2022, fuelConsumption: "7.1", maximumSpeed: 325, acceleration: 3.2, weight: 1379 }, 
    engineSpecs: { horsePower: 640, engineDisplacement: 5204, fuelType: Engines.Petrol, cilindersNumber: 10, torque: 565 }, 
    transmissionSpecs: {  transmission: Transmissions.Automatic, gears: 7 }, 
    brakeWheelSpecs: { frontDiscType: "Ventilated", rareDiscType: "Disc", frontDiscMaterial: "Cast iron", rareDiscMaterial: "Cast iron", frontPadsMaterial: "Ceramic", rarePadsMaterial: "Ceramic"}, 
    description: "The new Lamborghini Huracan Tecnica certainly sits closer to the white-knuckle Huracan STO than the Evo model where the firm’s supercar line-up now starts. But as it is, it’s a compelling alternative to Lambo’s hardest Huracan, being very nearly as exciting to drive, better to look at and a little easier to live with.", 
    exteriorImageUrls: ["lamborghinihuracanext.jpg", "lamborghinihuracanext1.jpg", "lamborghinihuracanext2.webp", "lamborghinihuracanext3.webp",], 
    interiorImageUrls: ["lamborghinihuracanint.avif", "lamborghinihuracanint1.jpg", "lamborghinihuracanint2.webp", "lamborghinihuracanint3.jpg",],
    trailerUrl: "https://www.youtube.com/embed/tpPkrhsKeXg" },

    { id: 13, url: 'lamborghinirevuelto.jpg', 
    baseSpecs: { manufacturer: Manufacturers.Lamborghini, model: LamborghiniModels.Revuelto, modification: "6.5 V12 HPEV", generation: "LB744", releaseDate: 2023, fuelConsumption: "7.1", maximumSpeed: 350, acceleration: 2.5, weight: 1772 }, 
    engineSpecs: { horsePower: 1015, engineDisplacement: 6498, fuelType: Engines.Petrol, cilindersNumber: 12, torque: 725 }, 
    transmissionSpecs: {  transmission: Transmissions.Automatic, gears: 8 }, 
    brakeWheelSpecs: { frontDiscType: "Ventilated", rareDiscType: "Disc", frontDiscMaterial: "Cast iron", rareDiscMaterial: "Cast iron", frontPadsMaterial: "Ceramic", rarePadsMaterial: "Ceramic"}, 
    description: "In the marque’s 60th anniversary year, Automobili Lamborghini presents Revuelto, the first super sports V12 hybrid plug-in HPEV (High Performance Electrified Vehicle). Revuelto defines a new paradigm in terms of performance, sportiness and driving pleasure from its unprecedented new architecture, innovative design, maximum-efficiency aerodynamics and a new carbon frame concept.", 
    exteriorImageUrls: ["lamborghinirevueltoext.jpg", "lamborghinirevueltoext1.jpg", "lamborghinirevueltoext2.jpg", "lamborghinirevueltoext3.jpg",], 
    interiorImageUrls: ["lamborghinirevueltoint.jpg", "lamborghinirevueltoint1.jpg", "lamborghinirevueltoint2.jpg", "lamborghinirevueltoint3.jpg",],
    trailerUrl: "https://www.youtube.com/embed/sitXeGjm4Mc" },

    { id: 6, url: 'mercedesamggtr.jpg', 
    baseSpecs: { manufacturer: Manufacturers.MercedesBenz, model: MercedesModels.AMGGTR, modification: "R 4.0 V8 DCT", generation: "AMG GT (C190, facelift)", releaseDate: 2017, fuelConsumption: "12.7", maximumSpeed: 318, acceleration: 3.6, weight: 1555 }, 
    engineSpecs: { horsePower: 585, engineDisplacement: 3982, fuelType: Engines.Petrol, cilindersNumber: 8, torque: 700 }, 
    transmissionSpecs: {  transmission: Transmissions.Automatic, gears: 7 }, 
    brakeWheelSpecs: { frontDiscType: "Ventilated", rareDiscType: "Disc", frontDiscMaterial: "Cast iron", rareDiscMaterial: "Cast iron", frontPadsMaterial: "Ceramic", rarePadsMaterial: "Ceramic"}, 
    description: "Like all GTs, the heart of the GT R is AMG’s stonking M178 twin-turbo 4-litre V8. This engine might feel familiar thanks to its use across a whole generation of AMG models from C-classes to G-classes, but for the GT it was a specific iteration designed for AMG’s supercar and motorsport programs. There were a whole range of small detail changes, but the most obvious difference was its dry-sump layout, a feature that allowed AMG to mount it much lower in the chassis than other AMG models.", 
    exteriorImageUrls: ["mercedesamggtrext.jpg", "mercedesamggtrext1.jpg", "mercedesamggtrext2.jpg", "mercedesamggtrext3.jpg",], 
    interiorImageUrls: ["mercedesamggtrint.jpg", "mercedesamggtrint1.jpg", "mercedesamggtrint2.jpg", "mercedesamggtrint3.jpg",],
    trailerUrl: "https://www.youtube.com/embed/csAXruiBLTs" },

    { id: 7, url: 'porsche911gt3.jpg', 
    baseSpecs: { manufacturer: Manufacturers.Porsche, model: PorscheModels.GT3911, modification: "GT3 4.0", generation: "911 (992)", releaseDate: 2021, fuelConsumption: "21.5", maximumSpeed: 320, acceleration: 3.9, weight: 1418 }, 
    engineSpecs: { horsePower: 510, engineDisplacement: 3996, fuelType: Engines.Petrol, cilindersNumber: 6, torque: 470 }, 
    transmissionSpecs: {  transmission: Transmissions.Manual, gears: 6 }, 
    brakeWheelSpecs: { frontDiscType: "Ventilated", rareDiscType: "Disc", frontDiscMaterial: "Cast iron", rareDiscMaterial: "Cast iron", frontPadsMaterial: "Ceramic", rarePadsMaterial: "Ceramic"}, 
    description: "With an exclusive naturally aspirated engine and race car-inspired components, the 2022 Porsche 911 GT3 is optimized for driver engagement and track-day glory. Porsche enhances its most visceral 911 variant with a control-arm front suspension—the first on a 911 road car—and an unusual rear wing that's mounted at the top instead of the bottom.", 
    exteriorImageUrls: ["porsche911gt3ext.jpg", "porsche911gt3ext1.jpg", "porsche911gt3ext2.jpg", "porsche911gt3ext3.jpg",], 
    interiorImageUrls: ["porsche911gt3int.jpg", "porsche911gt3int1.jpg", "porsche911gt3int2.jpg", "porsche911gt3int3.jpg", "porsche911gt3int4.jpg",],
    trailerUrl: "https://www.youtube.com/embed/XdBDWTLe49g" },

    { id: 8, url: 'porsche718gt4rs.jpg', 
    baseSpecs: { manufacturer: Manufacturers.Porsche, model: PorscheModels.GT4718, modification: "GT4 RS 4.0 PDK", generation: "718 Cayman (982)", releaseDate: 2022, fuelConsumption: "13.2", maximumSpeed: 315, acceleration: 3.4, weight: 1464 }, 
    engineSpecs: { horsePower: 493, engineDisplacement: 3996, fuelType: Engines.Petrol, cilindersNumber: 6, torque: 449 }, 
    transmissionSpecs: {  transmission: Transmissions.Automatic, gears: 7 }, 
    brakeWheelSpecs: { frontDiscType: "Ventilated", rareDiscType: "Disc", frontDiscMaterial: "Cast iron", rareDiscMaterial: "Cast iron", frontPadsMaterial: "Ceramic", rarePadsMaterial: "Ceramic"}, 
    description: "While the parts that have been used to make the new 718 Cayman GT4 RS are great, the total sum is even greater. It may seem like a track-honed weapon of a sports car, but you can easily tap into this car’s supreme ability on road too. With the RS, Porsche seems to have perfected the small mid-engined sports-car formula so the Cayman is no longer in the 911’s shadow. In fact, it may even be the other way around.", 
    exteriorImageUrls: ["porsche718gt4rsext.jpg", "porsche718gt4rsext1.jpg", "porsche718gt4rsext2.jpg", "porsche718gt4rsext3.jpg", "porsche718gt4rsext4.jpg",], 
    interiorImageUrls: ["porsche718gt4rsint.jpg", "porsche718gt4rsint2.jpg", "porsche718gt4rsint3.jpg",],
    trailerUrl: "https://www.youtube.com/embed/XdBDWTLe49g" },
];

export function getCars() {
    return cars;
}

export function getCar(id: string) {
    let numericId: number = +id;
    return cars.find(x => x.id === numericId);
}