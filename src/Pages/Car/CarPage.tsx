import { useState, FunctionComponent, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useInView } from "react-intersection-observer";
import { KeyValueList } from "../../Components/KeyValueList/KeyValueList";
import { Carousel } from "../../Components/Carousel/Carousel";
import { SpecTab } from "../../Components/SpecTab/SpecTab";
import { getCar } from "../../Services/CarsService";
import { getLogo } from "../../Services/LogoService";
import { GiCarDoor } from 'react-icons/gi'
import { GiCarSeat } from 'react-icons/gi'
import s from './CarPage.module.css';

export const CarPage : FunctionComponent = () => {
    const { id } = useParams();
    const car = getCar(id as string); 
    const [value, setValue] = useState('1');
    const [previousValue, setPreviousValue] = useState('1');
    const [isNext, setIsNext] = useState(true);
    const [resetCarousel, setResetCarousel] = useState(false);
    const [designUrls, setDesignUrls] = useState(car?.exteriorImageUrls);
    const [currentDesign, setCurrentDesign] = useState(false);
    const { ref: overviewRef, inView: isOverViewVisible } = useInView({ triggerOnce: true });
    const { ref: designContainerRef, inView: isDesignContainerVisible } = useInView({ triggerOnce: true });
    const { ref: technicalSpecContainerRef, inView: isTechnicalSpecContainerVisible } = useInView({ triggerOnce: true });
    const { ref: engineTabRef, inView: isEngineTabVisible } = useInView();
    const { ref: transmissionTabRef, inView: isTransmissionTabVisible } = useInView();
    const { ref: brakesTabRef, inView: isBrakesTabVisible } = useInView();

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    function setExteriorDesigns() {
        setCurrentDesign(false);
        setResetCarousel(!resetCarousel);
        setDesignUrls(car?.exteriorImageUrls);
    }

    function setInteriorDesigns() {
        setCurrentDesign(true);
        setResetCarousel(!resetCarousel);
        setDesignUrls(car?.interiorImageUrls);
        
    }

    useEffect(() => {
        setIsNext(+previousValue < +value);
        setPreviousValue(value);
    }, [value]);

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <div className={s.container}>
            <div className={s.section}>
                <h1 className={`${s.title} ${isOverViewVisible ? s.fadeIn : ''}`}>{car?.baseSpecs.manufacturer} {car?.baseSpecs.model} {car?.baseSpecs.modification}</h1>
                <div ref={overviewRef} className={s.overviewContainer}>
                    <div className={`${s.overviewBox} ${isOverViewVisible ? s.fadeInDelayed : ''}`}>
                        <img className={s.logoImage} src={require('' + "../../assets/" + getLogo(car!.baseSpecs.manufacturer))} />
                        <h3>{car?.description}</h3>
                    </div>
                    <div id={s.mainImageContainer}>
                        <img className={`${s.mainImage} ${isOverViewVisible ? s.fadeIn : ''}`} src={require('' + "../../assets/" + car?.url)} />
                    </div>
                    <div className={`${s.overViewDescription} ${isOverViewVisible ? s.fadeInDelayed : ''}`}>
                        <KeyValueList items={car!.baseSpecs} />
                    </div> 
                </div>
            </div>
            <div className={`${s.designContainer} ${isDesignContainerVisible ? s.animateFadeInTop : ''}`} ref={designContainerRef}>
                <h1 className={s.title}>{currentDesign ? "Interior Design" : "Exterior Design"}</h1>
                <div className={s.designPanel}>
                    <button className={s.designBtn} disabled={!currentDesign} onClick={setExteriorDesigns}><GiCarDoor /></button>
                    <button className={s.designBtn} disabled={currentDesign} onClick={setInteriorDesigns}><GiCarSeat /></button>
                </div>
                <Carousel urls={designUrls!} triggerReset={resetCarousel}/>
            </div>
            <div ref={technicalSpecContainerRef} className={`${s.technicalSpecContainer} ${isTechnicalSpecContainerVisible ? s.animateFadeInTop : ''}`}>
                <h1 className={s.title}>Technical Specifications</h1>
                <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                            <TabList className={s.tabs} onChange={handleChange}
                                sx={{ 
                                    "& div": { justifyContent: "space-between", maxWidth: 500, },
                                    "& .MuiTabs-indicator": { color: "#eb4034", backgroundColor: "#eb4034", border: 1 },
                                    "& button": { borderRadius: 2, backgroundColor: "#515151", color: "#ffffff" },
                                    "& button.Mui-selected": { backgroundColor: "#313131", color: "#ffffff" },
                                    '@media (max-width: 500px)': {
                                        "& button": { fontSize: "9px" },
                                        "& button.Mui-selected": { fontSize: "9px" }
                                      },
                                }}>
                                <Tab className={s.tab} label="Engine" value="1" />
                                <Tab className={s.tab} label="Transmission" value="2" />
                                <Tab className={s.tab} label="Wheels/Brakes" value="3" />
                            </TabList>
                        </Box>
                        <TabPanel ref={engineTabRef} className={`${s.tabPanel} ${s.tabPanelRight} ${isEngineTabVisible ? s.animateTabPanelRight : ''}`} value="1">
                            <SpecTab imgUrl={"bmwengine.png"} list={car!.engineSpecs} />
                        </TabPanel>
                        <TabPanel ref={transmissionTabRef} className={`${s.tabPanel} ${isNext ? s.tabPanelLeft : s.tabPanelRight} ${isTransmissionTabVisible ? (isNext ? s.animateTabPanelLeft : s.animateTabPanelRight) : ''}`} value="2">
                            <SpecTab imgUrl={"transmission.png"} list={car!.transmissionSpecs} />
                        </TabPanel>
                        <TabPanel ref={brakesTabRef} className={`${s.tabPanel} ${s.tabPanelLeft} ${isBrakesTabVisible ? s.animateTabPanelLeft : ''}`} value="3">
                            <SpecTab imgUrl={"carbrakes.png"} list={car!.brakeWheelSpecs} />
                        </TabPanel>
                    </TabContext>
                </Box>
            </div>
        </div>
    );
}