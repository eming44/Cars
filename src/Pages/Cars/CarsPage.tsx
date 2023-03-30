import { FunctionComponent } from "react";
import { CarItem } from "../../Components/CarItem/CarItem";
import { getCars } from "../../CarsService"
import s from './CarsPage.module.css';

export const CarsPage: FunctionComponent = () => {
    const cars = getCars();
    const itemsList = cars.map((x) => 
        <li className={s.listItem} key={x.id.toString()}><CarItem {...x}/></li>
    );

    return(
        <ul className={s.list}>
            {itemsList}
        </ul>
    );
};

export default CarsPage;