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
    }
}