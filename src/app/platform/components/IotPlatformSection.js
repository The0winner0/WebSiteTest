import SvgElement from './SvgElements'; 

export default function IotPlatformSection() {
    return (
        <div className="iot-platform-section-container">
            <div className="iot-platform-inner-container">
                <div className="iot-platform-heading-wrapper">
                    <h2 className="iot-platform-heading">Configurable, End-To-End IoT Platform</h2>
                </div>
                <div className="iot-platform-svg-group-container">
                    <div className="iot-platform-svg-group-inner">
                        <div className="iot-platform-svg-item cloud-layer-svg-item">
                            <SvgElement id="cloudLayer" />
                        </div>
                        <div className="iot-platform-svg-item edge-layer-svg-item">
                            <SvgElement id="edgeLayer" />
                        </div>
                        <div className="iot-platform-svg-item infrastructure-layer-svg-item">
                            <SvgElement id="infrastructureLayer" />
                        </div>
                        <div className="iot-platform-svg-item sensor-layer-svg-item">
                            <SvgElement id="sensorLayer" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}