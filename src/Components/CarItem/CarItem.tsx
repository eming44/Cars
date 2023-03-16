import { FunctionComponent } from "react";
import { useState } from "react";
import {CSSTransition} from 'react-transition-group';
import { BsInfoCircle } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { CarItemProps } from "./CarItemProps";
import s from './CarItem.module.css';

export const CarItem : FunctionComponent<CarItemProps> = (props: CarItemProps) => {
    const [show, setShow] = useState<boolean>(false);
    const navigate = useNavigate();

    function toggleShow() {
        setShow(!show);
    }

    function mouseLeave() {
        setShow(false);
    }

    function navigateToDetailedCar() {
        navigate('/cars/' + props.id);
    }

    return(
        <div className={s.box}>
            <div className={s.card}>
                <div className={s.imageBox}>
                    <img className={s.cardImage} src={require('' + "../../assets/" + props.url)} />
                    <button className={s.viewMoreButton} onClick={navigateToDetailedCar}>View More</button>
                </div>
                <div className={s.headerContainer}>
                    <h4>{props.manufacturer}</h4>
                    <p>{props.model}</p>
                </div>
            </div>
            <div className={s.popup}>
                <CSSTransition key={props.manufacturer}
                    in={show}
                    timeout={1000}
                    unmountOnExit
                    classNames={{
                        enter: s.popupOpacityEnter,
                        enterActive: s.popupOpacityEnterActive,
                        exit: s.popupOpacityExit,
                        exitActive: s.popupOpacityExitActive,
                    }}>
                        <div id={s.popupContainer} onMouseLeave={mouseLeave}>
                            <p>Manufacturer: {props.manufacturer}</p>
                            <p>Model: {props.model}</p>
                        </div>
                    </CSSTransition>
                <button className={ s.infoBtn } onClick={toggleShow}>{<BsInfoCircle />}</button>
            </div>
        </div>
    );
}