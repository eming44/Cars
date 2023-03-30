import { FunctionComponent, useState, useLayoutEffect, useRef } from "react"; 
import { CarouselItem } from "./CarouselItem/CarouselITem";
import { CarouselProps } from "./CarouselProps";
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";
import s from './Carousel.module.css'; 
import ReactDOM from "react-dom";

export const Carousel : FunctionComponent<CarouselProps> = ({ urls }) => {
    const [x, setX] = useState(0);
    const [index, setIndex] = useState(0);
    const [step, setStep] = useState(200);
    const listElement = useRef(null);
    const [isLeftBtnVisible, setIsLeftBtnVisible] = useState(false);
    const [isRightBtnVisible, setIsRightBtnVisible] = useState(true);
    const items = urls.slice(0).map((u, i) => 
        <li ref={listElement} className={s.carouselLi} key={i.toString()}><CarouselItem url={u} isMain={i === index} isLeft={i < index} /></li>
    );

    useLayoutEffect(() => {
        if (listElement.current != null) {
            let listElementNode = ReactDOM.findDOMNode(listElement.current) as HTMLDivElement;
            let liMaxWidth = window.getComputedStyle(listElementNode).getPropertyValue('max-width');
            let liMaxWidthValue = liMaxWidth.slice(0, liMaxWidth.length - 2);
            let liMargin = window.getComputedStyle(listElementNode).getPropertyValue('margin-left');
            let liLeftRightMargin = +liMargin.slice(1, 3) * 2;
            setStep((+liMaxWidthValue)- liLeftRightMargin);
        }
    }, [])

    function previous() {
        let xCoordinate = x;
        if (xCoordinate != 0) {
            xCoordinate += step;
            setX(xCoordinate);
            setIndex(index - 1);

            if (!isRightBtnVisible) {
                setIsRightBtnVisible(true);
            }
        }

        if (xCoordinate === 0) {
            setIsLeftBtnVisible(false);
        }
    }

    function next() {
        let xCoordinate = x;
        if (xCoordinate > -step * (items.length - 1)) {
            xCoordinate -= step;
            setX(xCoordinate);
            setIndex(index + 1);

            if (!isLeftBtnVisible) {
                setIsLeftBtnVisible(true);
            }
        }
        
        if (xCoordinate === -step * (items.length - 1)) {
            setIsRightBtnVisible(false);
        }
    }
    
    return(
        <div className={s.container}>
            { isLeftBtnVisible && <button className={`${s.btn} ${s.leftBtn}`} onClick={previous}>{<MdOutlineNavigateBefore />}</button>}
            <div className={s.carousel}>
                <div className={s.slider} style={{transform: `translateX(${x}px)`}}>
                    <ul className={s.carouselUl}>
                        {items}
                    </ul>
                </div>
            </div>
            { isRightBtnVisible && <button className={`${s.btn} ${s.rightBtn}`} onClick={next}>{<MdOutlineNavigateNext />}</button>}
        </div>
    );
}