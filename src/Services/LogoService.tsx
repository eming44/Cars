export function getLogo(manufacturer: string) {
    switch(manufacturer) {
        case "Audi":
            return "audilogo.png";
        case "BMW":
            return "bmwlogo.png";
        case "Ferrari":
            return "ferrarilogo.png";
        case "Lamborghini":
            return "lamborghinilogo.png";
        case "Bugatti":
            return "bugattilogo.png";
        case "Mercedes-Benz":
            return "mercedeslogo.png";
        case "Porsche":
            return "porschelogo.png";
    }
}