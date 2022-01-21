import useWindowWidth from '../hooks/useWindowWidth';

export default function LayoutComponentTwo() {
    const onSmallScreen = useWindowWidth(768);

    return (
        <div className={onSmallScreen ? 'small' : 'large'}> 
            <h1>This is another component</h1>
        </div>
    );
}
//aita jodi app.js import kori and jsx a component hishebe output dekhte cai tahole console korlei dekhte parbo 768px er niche screen anle small dekhaccee