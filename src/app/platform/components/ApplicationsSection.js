import SvgElement from './SvgElements'; // Adjust path if needed

export default function ApplicationsSection() {
    return (
        <>
            <div className="applications-intro-container">
                <div className="applications-intro-inner-container">
                    <div className="applications-intro-heading-wrapper">
                        <h2 className="applications-intro-heading">Applications</h2>
                    </div>
                </div>
            </div>
            <div className="applications-details-container">
                <div className="applications-details-inner-container">
                    <div className="applications-svg-item location-tag-svg-item">
                        <SvgElement id="locationTag" />
                    </div>
                    <div className="applications-svg-item sensor-tag-svg-item">
                        <SvgElement id="sensorTag" />
                    </div>
                    <div className="applications-svg-item widget-tag-svg-item">
                        <SvgElement id="widgetTag" />
                    </div>
                </div>
            </div>
        </>
    );
}