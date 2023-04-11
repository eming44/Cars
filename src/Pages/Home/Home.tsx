import { FunctionComponent, useState, useLayoutEffect } from "react";
import Select, { SingleValue } from 'react-select';
import { Manufacturers } from "../../Enums/Manufacturers";
import { FerrariModels } from "../../Enums/FerrariModels";
import { LamborghiniModels } from "../../Enums/LamborghiniModels";
import { Engines } from "../../Enums/Engines";
import { Transmissions } from "../../Enums/Transmissions";
import { useNavigate, createSearchParams } from 'react-router-dom';
import { AudiModels } from "../../Enums/AudiModels";
import { BmwModels } from "../../Enums/BmwModels";
import s from './Home.module.css';

export const Home:FunctionComponent = () => {
    const manufacturerOptions = getEnumValuesAndKeys(Manufacturers);
    const engineOptions = getEnumValuesAndKeys(Engines);
    const transmissionOptions = getEnumValuesAndKeys(Transmissions);
    const minReleasedYear = 2000;
    const maxReleasedYear = new Date().getFullYear();

    const [isManufacturerSelected, setIsManufacturerSelected] = useState(false);
    const [selectedManufacturer, setSelectedManufacturer] = useState("");
    const [selectedModel, setSelectedModel] = useState("");
    const [modelsList, setModelsList] = useState<Array<{}>>();
    const [selectedEngine, setSelectedEngine] = useState("");
    const [selectedTransmission, setSelectedTransmission] = useState("");
    const [maxHp, setMaxHp] = useState(0);
    const [minHp, setMinHp] = useState(0);
    const [selectedReleasedYear, setSelectedReleasedYear] = useState(0);

    const navigate = useNavigate();
    const handleManufacturerChange = (newValue: SingleValue<{ value: string; label: Manufacturers; }>) => {
        console.log(newValue?.value);
        console.log(newValue?.value as string);
        setSelectedManufacturer(newValue?.value as string);
        switch(newValue?.value) {
            case Manufacturers.Audi:
                setModels(AudiModels);
                break;
            case Manufacturers.Bmw:
                setModels(BmwModels);
                break;
            case Manufacturers.Ferrari:
                setModels(FerrariModels);
                break;
            case Manufacturers.Lamborghini:
                setModels(LamborghiniModels);
                break;
        }
      };

    const handleModelChange = (newValue: SingleValue<{ value?: string}>) => {
      setSelectedModel(newValue?.value as string);
    };

    const handleEngineChange = (newValue: SingleValue<{ value: string; label: Engines; }>) => {
        setSelectedEngine(newValue?.value as string);
    }

    const handleTransmissionChange = (newValue: SingleValue<{ value: string; label: Transmissions; }>) => {
        setSelectedTransmission(newValue?.value as string);
    }

    const handleMaxHpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setMaxHp(+e.target.value);
    }

    const handleMinHpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setMinHp(+e.target.value);
    }

    const handleSelectedYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedReleasedYear(+e.target.value);
    }

    const handleSearchClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        navigate({
            pathname: "cars",
            search: createSearchParams({
                manufacturer: selectedManufacturer,
                model: selectedModel,
                engine: selectedEngine,
                transmission: selectedTransmission,
                minHp: getPath(minHp),
                maxHp: getPath(maxHp),
                releasedYear: getPath(selectedReleasedYear)
            }).toString()
        });
    }
     
    function setModels(models: Object) {
        const modelOptions = getEnumValuesAndKeys(models);
        setModelsList(modelOptions);
        setIsManufacturerSelected(true);
    }

    function getEnumValuesAndKeys(models: Object) {
        const values = Object.values(models);
        return values.map((k, i) => { return {value: values[i], label: values[i]} });
    }

    function getPath(parameter: number) {
        return parameter != 0 ? parameter.toString() : "";
    }

    return(
        <div className={s.container} style={{ backgroundImage: 'url(' + require('../../assets/home1.jpg') + ')'}}>
            <h1 className={s.title}>Cars Specifications</h1>
            <div className={s.searchBox}>
                <div className={s.selectContainer}>
                    <div className={s.horizontalBox}>
                        <div className={s.select}>
                            <p className={s.selectTitle}>Manufacturer</p>
                            <Select isClearable options={manufacturerOptions} placeholder={"All"} onChange={handleManufacturerChange}/>
                        </div>
                        <div className={s.select}>
                            <p className={s.selectTitle}>Model</p>
                            <Select isClearable isDisabled={!isManufacturerSelected} options={modelsList} placeholder={"All"} onChange={handleModelChange}/>
                        </div>
                    </div>
                    <div className={s.horizontalBox}>
                        <div className={s.select}>
                            <p className={s.selectTitle}>Engine</p>
                            <Select isClearable options={engineOptions} placeholder={"All"} onChange={handleEngineChange}/>
                        </div>
                        <div className={s.select}>
                            <p className={s.selectTitle}>Transmission</p>
                            <Select isClearable options={transmissionOptions} placeholder={"All"} onChange={handleTransmissionChange}/>
                        </div>
                    </div>
                    <div className={s.horizontalBox}>
                        <div className={s.select}>
                            <p className={s.selectTitle}>Minimum HP</p>
                            <input className={s.input} type={"number"} onChange={handleMinHpChange} min={0}/>
                        </div>
                        <div className={s.select}>
                            <p className={s.selectTitle}>Maximum HP</p>
                            <input className={s.input} type={"number"} onChange={handleMaxHpChange} min={0}/>
                        </div>
                    </div> 
                    <div className={s.selectYear}>
                        <p className={s.selectTitle}>Released Year</p>
                        <div className={s.releasedYearContainer}>
                            <p className={s.rangeTitles}>{selectedReleasedYear}</p>
                            <div className={s.rangeInputContainer}>
                                <p className={s.rangeTitles}>{minReleasedYear}</p>
                                <input className={s.yearRange} type={"range"} min={minReleasedYear} max={maxReleasedYear} defaultValue={0} onChange={handleSelectedYearChange}/>
                                <p className={s.rangeTitles}>{maxReleasedYear}</p>
                            </div>
                        </div>
                    </div>
                    <button className={s.searchBtn} onClick={handleSearchClick}>Search</button>
                </div>
            </div>
        </div>
    );
}