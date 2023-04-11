import { FunctionComponent } from "react";
import { CarItem } from "../../Components/CarItem/CarItem";
import { getCars } from "../../Services/CarsService"
import { useSearchParams } from "react-router-dom";
import { CarItemProps } from "../../Components/CarItem/CarItemProps";
import s from './CarsPage.module.css';

export const CarsPage: FunctionComponent = () => {
    const [searchParams] = useSearchParams();
    const cars = getCars();
    let itemsList = [];
    let filters: Array<object> = [];

    for (const entry of searchParams.entries()) {
        const [param, value] = entry;
        filters.push({[param]: value})
    }

    if (checkFiltersAreEmpty()) {
        itemsList = createListItems(cars);
    }
    else {
        let filteredList = cars.filter(x => 
            (getFilterValue('manufacturer') === '' || x.baseSpecs.manufacturer === getFilterValue('manufacturer'))
            && (getFilterValue('model') === '' || x.baseSpecs.model === getFilterValue('model'))
            && (getFilterValue('engine') === '' || x.engineSpecs.fuelType === getFilterValue('engine'))
            && (getFilterValue('transmission') === '' || x.transmissionSpecs.transmission === getFilterValue('transmission'))
            && (getFilterValue('minHp') === '' || x.engineSpecs.horsePower >= +getFilterValue('minHp')!)
            && (getFilterValue('maxHp') === '' || x.engineSpecs.horsePower <= +getFilterValue('maxHp')!)
            && (getFilterValue('releasedYear') === '' || x.baseSpecs.releaseDate >= +getFilterValue('releasedYear')!))
        itemsList = createListItems(filteredList);
    }

    function getFilterValue(filter: string) {
        for (let i = 0; i < filters.length; i++) {
            if (Object.keys(filters[i]).toString() === filter) {
                return Object.values(filters[i]).toString();
            }
        }
    }

    function createListItems(cars: Array<CarItemProps>) {
        return cars.map(x => 
            <li className={s.listItem} key={x.id.toString()}><CarItem {...x}/></li>
        );
    }

    function checkFiltersAreEmpty() {
        let isEmpty = true;
        for (let i = 0; i < filters.length; i++) {
            if (Object.values(filters[i]).toString() != '') {
                isEmpty = false;
                break;
            }
        };
        return isEmpty;
    }

    return(
        <div className={s.container}>
            <ul className={s.list}>
            {itemsList.length > 0 
                ? itemsList 
                : <h1 className={s.errorMessage}>No matches found</h1>
            }
            </ul>
        </div>
    );
};

export default CarsPage;