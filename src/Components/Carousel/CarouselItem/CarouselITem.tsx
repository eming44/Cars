import { FunctionComponent } from "react";
import { CarouselItemProps } from "./CarouselItemProps";
import s from "./CarouselItem.module.css"

export const CarouselItem : FunctionComponent<CarouselItemProps> = ({ url, isMain = false, isLeft }) => {
    return(
        <div className={s.perspectiveContainer}>
            <img src={require('' + "../../../assets/" + url)} className={`${isMain ? s.mainScaled : isLeft ? s.left : s.right} ${s.itemImg}`}/>
        </div>
    );
}