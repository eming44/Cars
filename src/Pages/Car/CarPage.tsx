import { useState, FunctionComponent, useRef, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { getCar } from "../../CarsService";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useInView } from "react-intersection-observer";
import s from './CarPage.module.css';

export const CarPage : FunctionComponent = () => {
    const { id } = useParams();
    const car = getCar(id as string); 
    const [value, setValue] = useState('1');
    const [previousValue, setPreviousValue] = useState('1');
    const [isNext, setIsNext] = useState(true);
    const { ref: overviewRef, inView: isOverViewVisible } = useInView({ triggerOnce: true });
    const { ref: interiorContainerRef, inView: isInteriorContainerVisible } = useInView({ triggerOnce: true });
    const { ref: technicalSpecContainerRef, inView: isTechnicalSpecContainerVisible } = useInView({ triggerOnce: true });
    const { ref: engineTabRef, inView: isEngineTabVisible } = useInView();
    const { ref: transmissionTabRef, inView: isTransmissionTabVisible } = useInView();
    const { ref: brakesTabRef, inView: isBrakesTabVisible } = useInView();

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    useEffect(() => {
        setIsNext(+previousValue < +value);
        setPreviousValue(value);

    }, [value]);

    return(
        <div className={s.container}>
            <h1 className={`${s.title} ${isOverViewVisible ? s.fadeIn : ''}`}>{car?.manufacturer} {car?.model} {car?.modification}</h1>
            <div ref={overviewRef} className={s.overviewContainer}>
                <div className={`${s.overviewBox} ${isOverViewVisible ? s.fadeInDelayed : ''}`}>
                    <img className={s.logoImage} src={require('' + "../../assets/bmwlogo.png")} />
                    <h3>{car?.description}</h3>
                </div>
                <img className={`${s.mainImage} ${isOverViewVisible ? s.fadeIn : ''}`} src={require('' + "../../assets/" + car?.url)} />
                <div className={`${s.overViewDescription} ${isOverViewVisible ? s.fadeInDelayed : ''}`}>
                    <div className={s.specRow}>
                        <h3>Manufacturer:</h3>
                        <p className={s.specParagraph}>{car?.manufacturer}</p>
                    </div>
                    <div className={s.specRow}>
                        <h3>Model:</h3>
                        <p className={s.specParagraph}>{car?.model}</p>
                    </div>
                    <div className={s.specRow}>
                        <h3>Modification:</h3>
                        <p className={s.specParagraph}>{car?.modification}</p>
                    </div>
                    <div className={s.specRow}>
                        <h3>Generation:</h3>
                        <p className={s.specParagraph}>{car?.generation}</p>
                    </div>
                    <div className={s.specRow}>
                        <h3>Released Date:</h3>
                        <p className={s.specParagraph}>{car?.releaseDate}</p>
                    </div>
                    <div className={s.specRow}>
                        <h3>Fuel compsumtion:</h3>
                        <p className={s.specParagraph}>{car?.cfc} l/100</p>
                    </div>
                    <div className={s.specRow}>
                        <h3>Maximum Speed:</h3>
                        <p className={s.specParagraph}>{car?.maxSpeed} km/h</p>
                    </div>
                    <div className={s.specRow}>
                        <h3>Weight:</h3>
                        <p className={s.specParagraph}>{car?.weight} kg</p>
                    </div>
                </div> 
            </div>
            <div className={`${s .interiorContainer} ${isInteriorContainerVisible ? s.animateFadeInTop : ''}`} ref={interiorContainerRef}>
                <h1 className={s.title}>Interior Design</h1>
                {car?.interiorImageUrl && <img className={s.interiorDesignImg} src={require('' + "../../assets/" + car?.interiorImageUrl)} />} 
            </div>
            <div ref={technicalSpecContainerRef} className={`${s.technicalSpecContainer} ${isTechnicalSpecContainerVisible ? s.animateFadeInTop : ''}`}>
                <h1 className={s.title}>Technical Specifications</h1>
                <Box sx={{ width: "100%", typography: "body1", display: "flex", flexDirection: "column" }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                            <TabList className={s.tabs} onChange={handleChange} aria-label="lab API tabs example" 
                                sx={{ 
                                    "& div": { justifyContent: "space-between", width: 500, },
                                    "& .MuiTabs-indicator": { color: "#eb4034", backgroundColor: "#eb4034", border: 1 },
                                    "& button": { borderRadius: 2, backgroundColor: "#515151", color: "#ffffff" },
                                    "& button.Mui-selected": { backgroundColor: "#313131", color: "#ffffff" }
                                }}>
                                <Tab className={s.tab} label="Engine" value="1" />
                                <Tab className={s.tab} label="Transmission" value="2" />
                                <Tab className={s.tab} label="Wheels/Brakes" value="3" />
                            </TabList>
                        </Box>
                        <TabPanel ref={engineTabRef} className={`${s.tabPanel, s.tabPanelRight} ${isEngineTabVisible ? s.animateTabPanelRight : ''}`} value="1">
                        <div className={s.horizontalContainer}>
                            <img className={s.technicalSpecImg} src={require('' + "../../assets/bmwengine.png")} />
                            <div className={s.verticalDescription}>
                                <div className={s.specRow}>
                                    <h3>Horse power:</h3>
                                    <p className={s.specParagraph}>{car?.hp}</p>
                                </div>
                                <div className={s.specRow}>
                                    <h3>Engine Displacement:</h3>
                                    <p className={s.specParagraph}>{car?.engineDisplacement} mc3</p>
                                </div>
                                <div className={s.specRow}>
                                    <h3>Fuel Type:</h3>
                                    <p className={s.specParagraph}>{car?.fuel}</p>
                                </div>
                                <div className={s.specRow}>
                                    <h3>Cilinders:</h3>
                                    <p className={s.specParagraph}>{car?.numberCilinders}</p>
                                </div>
                                <div className={s.specRow}>
                                    <h3>Torque:</h3>
                                    <p className={s.specParagraph}>{car?.torque} nm</p>
                                </div>
                            </div>
                        </div>
                        </TabPanel>
                        <TabPanel ref={transmissionTabRef} className={`${s.tabPanel, isNext ? s.tabPanelLeft : s.tabPanelRight} ${isTransmissionTabVisible ? (isNext ? s.animateTabPanelLeft : s.animateTabPanelRight) : ''}`} value="2">
                        <div className={s.horizontalContainer}>
                            <img className={s.technicalSpecImg} src={require('' + "../../assets/transmission.png")} />
                            <div className={s.verticalDescription}>
                                <div className={s.specRow}>
                                    <h3>Transmission:</h3>
                                    <p className={s.specParagraph}>{car?.transmissionType}</p>
                                </div>
                                <div className={s.specRow}>
                                    <h3>Gears:</h3>
                                    <p className={s.specParagraph}>{car?.gears}</p>
                                </div>
                            </div>
                        </div>
                        </TabPanel>
                        <TabPanel ref={brakesTabRef} className={`${s.tabPanel, s.tabPanelLeft} ${isBrakesTabVisible ? s.animateTabPanelLeft : ''}`} value="3">
                        <div className={s.horizontalContainer}>
                            <img className={s.technicalSpecImg} src={require('' + "../../assets/carbrakes.png")} />
                            <div className={s.verticalDescription}>
                                <div className={s.specRow}>
                                    <h3>Front disc type:</h3>
                                    <p className={s.specParagraph}>{car?.frontDiscType}</p>
                                </div>
                                <div className={s.specRow}>
                                    <h3>Rare disc type:</h3>
                                    <p className={s.specParagraph}>{car?.frontDiscMaterial}</p>
                                </div>
                                <div className={s.specRow}>
                                    <h3>Front disc material:</h3>
                                    <p className={s.specParagraph}>{car?.frontPadsMaterial}</p>
                                </div>
                                <div className={s.specRow}>
                                    <h3>Rare disc material:</h3>
                                    <p className={s.specParagraph}>{car?.rareDiscType}</p>
                                </div>
                                <div className={s.specRow}>
                                    <h3>Front pads material:</h3>
                                    <p className={s.specParagraph}>{car?.rareDiscMaterial}</p>
                                </div>
                                <div className={s.specRow}>
                                    <h3>Rare pads material:</h3>
                                    <p className={s.specParagraph}>{car?.rarePadsMaterial}</p>
                                </div>
                            </div>
                        </div>
                        </TabPanel>
                    </TabContext>
                </Box>
            </div>
        </div>
    );
}