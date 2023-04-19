import { FunctionComponent, useLayoutEffect, useRef, useReducer } from "react"; 
import { CarouselItem } from "./CarouselItem/CarouselITem";
import { CarouselProps } from "./CarouselProps";
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";
import ReactDOM from "react-dom";
import s from './Carousel.module.css'; 

const initialState = { x: 0, index: 0, isLeftBtnVisible: false, isRightBtnVisible: true, step: 200, isAnimationTriggered: false };
const enum ACTIONS {
    INITIALIZE,
    PREVIOUS,
    NEXT,
}

type ReducerAction = {
    type: ACTIONS,
    payload: {}
}
  
const reducer = (state: typeof initialState, action: ReducerAction): typeof initialState => {
    switch (action.type) {
        case ACTIONS.INITIALIZE:
            return { ...state, ...action.payload }
        case ACTIONS.PREVIOUS:
            return { ...state, ...action.payload }
        case ACTIONS.NEXT:
            return { ...state, ...action.payload }
        default: 
            return initialState;
    }
}

export const Carousel : FunctionComponent<CarouselProps> = ({ urls, triggerReset }) => {
    const [{ x, index, isLeftBtnVisible, isRightBtnVisible, step, isAnimationTriggered }, dispatch] = useReducer(reducer, initialState);
    const listElement = useRef(null);
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
            dispatch({ type: ACTIONS.PREVIOUS, payload: { step: (+liMaxWidthValue)- liLeftRightMargin } })
        }
    }, []);

    useLayoutEffect(() => {
        dispatch({ type: ACTIONS.INITIALIZE, payload: { x: 0, index: 0, isRightBtnVisible: true, isLeftBtnVisible: false, isAnimationTriggered: true } })
    }, [triggerReset]);

    function move(direction: ACTIONS) {
        let xCoordinate = x;
        let newIndex = index;
        let newIsRightBtnVisible = isRightBtnVisible;
        let newIsLeftBtnVisible = isLeftBtnVisible;

        if (direction === ACTIONS.PREVIOUS) {
            if (xCoordinate != 0) {
                xCoordinate += step;
                newIndex = index - 1;
                newIsRightBtnVisible = true;
            }
        
            if (xCoordinate === 0) {
                newIsLeftBtnVisible = false;
            }
        }
        else if (direction === ACTIONS.NEXT) {
            if (xCoordinate > -step * (items.length - 1)) {
                xCoordinate -= step;
                newIndex = index + 1;
    
                if (!isLeftBtnVisible) {
                    newIsLeftBtnVisible = true;
                }
            }
            
            if (xCoordinate === -step * (items.length - 1)) {
                newIsRightBtnVisible = false;
            }
        }

        dispatch({ type: direction, payload: { x: xCoordinate, index: newIndex, isRightBtnVisible: newIsRightBtnVisible, isLeftBtnVisible: newIsLeftBtnVisible } })
    }

    return(
        <div className={`${s.container} ${isAnimationTriggered ? s.animateFadeIn : ''}`} onAnimationEnd={() => dispatch({ type: ACTIONS.PREVIOUS, payload: { isAnimationTriggered: false } }) }>
            { isLeftBtnVisible && <button className={`${s.btn} ${s.leftBtn}`} onClick={() => move(ACTIONS.PREVIOUS)}>{<MdOutlineNavigateBefore />}</button>}
            <div className={s.carousel}>
                <div className={s.slider} style={{transform: `translateX(${x}px)`}}>
                    <ul className={s.carouselUl}>
                        {items}
                    </ul>
                </div>
            </div>
            { isRightBtnVisible && <button className={`${s.btn} ${s.rightBtn}`} onClick={() => move(ACTIONS.NEXT)}>{<MdOutlineNavigateNext />}</button>}
        </div>
    );
}