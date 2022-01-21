import useWindowWidth from '../hooks/useWindowWidth';

export default function LayoutComponentOne() {
    const onSmallScreen = useWindowWidth(600); //parameter hishebe pass korlo 600

    return (
        <div>
            <h1>You are browsing on {onSmallScreen ? 'small' : 'large'} device</h1>
        </div>
    );
}
//useWindoWith hocce hook jeita parameter hishebe 600 pathiye dicce sob kaj oikhane kore upadate kore abar pathiye dey aikhane