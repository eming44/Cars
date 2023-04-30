import { FunctionComponent } from "react";
import { CarItem } from "../../Components/CarItem/CarItem";
import { getCars } from "../../Services/CarsService"
import { useSearchParams } from "react-router-dom";
import { CarItemProps } from "../../Components/CarItem/CarItemProps";
import { getLogo } from "../../Services/LogoService";
import React from "react";
import s from './CarsPage.module.css';

export const CarsPage: FunctionComponent = () => {
    const [searchParams] = useSearchParams();
    const cars = getCars();
    let itemsList = [];
    let filters: Array<object> = [];
    let filteredManufacturers: Array<string> = [];
    let sectionRefs: Array<{sectionRef: Object, sectionName: string}> = [];

    for (const entry of searchParams.entries()) {
        const [param, value] = entry;
        filters.push({[param]: value})
    }

    if (checkFiltersAreEmpty()) {
        filteredManufacturers = getFilteredManufacturers(cars);
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
            && (getFilterValue('releasedYear') === '' || x.baseSpecs.releaseDate >= +getFilterValue('releasedYear')!));

        filteredManufacturers = getFilteredManufacturers(filteredList);
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
        return filteredManufacturers.map((x, i) => {
            const sectionRef = React.createRef();
            sectionRefs.push({sectionRef: sectionRef, sectionName: x});
            return <div className={s.manufacturerSection} ref={sectionRef as React.RefObject<HTMLDivElement>}>
                <div className={s.horizontalContainer}>
                    <img className={s.sectionLogoImage} src={require('' + "../../assets/" + getLogo(x))} />
                    <div className={s.rightLine}/>
                    <h2 className={s.sectionTitle}>{x}</h2>
                </div>
                 <ul className={s.list}> {
                    cars.map(c => { 
                        if (c.baseSpecs?.manufacturer === x) {
                            return <li className={s.listItem} key={c.id.toString()}><CarItem {...c}/></li>
                        }
                    })
                } </ul>
            </div>
        });
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

    function getFilteredManufacturers(cars: Array<CarItemProps>) {
        let manufacturers: Array<string> = [];
        cars.forEach((e) => {
            if (!manufacturers.some((x) => x === e.baseSpecs?.manufacturer)) {
                manufacturers.push(e.baseSpecs?.manufacturer as string,)
            }
        })

        return manufacturers;
    }

    const navigationBtns = sectionRefs.map((x, i) => <li key={i} onClick={e => {
        const sectionRef = sectionRefs[i].sectionRef as React.RefObject<HTMLDivElement>;
        sectionRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }}>
        <div className={s.navBtnContainer}>
            <img className={s.logoImage} src={require('' + "../../assets/" + getLogo(x.sectionName))} />
            <button className={s.navBtn} >{x.sectionName}</button>
        </div>
    </li>);

    return(
        <div className={s.container}>
            <div className={s.listItemContainer}>
                {itemsList}
            </div>
            <div className={s.navigationContainer}>
                <h2 className={s.sectionTitle}>Filtered manufacturers</h2>
                <ul className={s.navigationListContainer}>
                    {navigationBtns}
                </ul>
            </div>
        </div>
    );
};

export default CarsPage;