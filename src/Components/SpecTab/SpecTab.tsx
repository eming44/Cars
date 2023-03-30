import { FunctionComponent } from "react";
import { KeyValueList } from "../KeyValueList/KeyValueList";
import { SpecTabProps } from "./SpecTabProps";
import s from './SpecTab.module.css';

export const SpecTab : FunctionComponent<SpecTabProps> = ({ imgUrl, list }) => {
    return(
        <div className={s.horizontalContainer}>
            <img className={s.technicalSpecImg} src={require('' + "../../assets/" + imgUrl)} /> 
            <div className={s.listContainer}>
                <KeyValueList items={list} />
            </div>
        </div> 
    );
}