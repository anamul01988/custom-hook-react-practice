import { useEffect, useState } from 'react';

const useWindowWidth = (screenSize) => { //hook er karone direct chole ashbe 600 ,screensize er moddhe, parameter name jekono dilei hoy
    const [onSmallScreen, setOnSmallScreen] = useState(false); //intially false diye rakhlam

    useEffect(() => {
        const checkScreenSize = () => {
            setOnSmallScreen(window.innerWidth < screenSize); //window.innerWidth hocce display er present size joto px ami rakhi aita o buil in functin js er
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize); //resize hoice click er moto js buil in function orthath display resize hoile checkScreenSize function call hoy 

        return () => window.removeEventListener('resize', checkScreenSize); //ager display size remove korte removeEventListener use hoice
    }, [screenSize]); //screenSize change hole useEffect hook kaj kore

    return onSmallScreen;
};

export default useWindowWidth; //aita rsc way rfc te sob gulai kora , jekono ekta follow korlei hoy tobe rsc te must function k export default kore dibo jeno sobai access pay
