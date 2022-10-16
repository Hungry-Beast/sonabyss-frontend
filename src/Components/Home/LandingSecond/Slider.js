import React, { useState, useEffect } from "react";
import MobileSlider from './MobileSlider'
import DesktopSlider from './DesktopSlider'

const useCheckMobileScreen = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return (width <= 650);
}

export default function Slider() {
    const isMobile = useCheckMobileScreen();

    return (
        <>
            {
                isMobile ? <MobileSlider /> : <DesktopSlider />
            }
        </>
    );
}
