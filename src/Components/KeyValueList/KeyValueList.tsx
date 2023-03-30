import { FunctionComponent } from "react";
import { KeyValueListProps } from "./KeyValueListProps";
import s from './KeyValueList.module.css';

export const KeyValueList : FunctionComponent<KeyValueListProps> = ({ items }) => {
    const keys = Object.keys(items);
    const formatedKeys = keys.map(k => (k.charAt(0).toUpperCase() + k.slice(1)).replace(/([a-z])([A-Z])/g, '$1 $2'));
    const values = Object.values(items);
    const listItems = keys.map((k, i) => 
        <li className={s.listItem} key={i.toString()}>
            <h3 className={s.title}>{`${formatedKeys[i]}:`}</h3>
            <p className={s.value}>{values[i]}</p>
        </li>
    )

    return(
        <ul className={s.list}>{listItems}</ul>
    );
}