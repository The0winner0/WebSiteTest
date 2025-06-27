import PageHeading from '../../components/PageHeading'; // Adjust path if needed

export default function PlatformSection() {
    return (
        <div className="platform-intro-section-container">
            <div className="platform-intro-inner-container">
                <div className="platform-intro-label-wrapper">
                    <div className="platform-intro-label-inner">
                        <div className="platform-intro-heading-container-small">
                            <PageHeading title={"Platform"} />
                        </div>
                    </div>
                </div>
                <div className="platform-intro-content-wrapper">
                    <div className="platform-intro-content-inner">
                        <div className="platform-intro-heading-container-large">
                            <h2 className="platform-intro-heading-large">Kinesis makes real-time Location Visibility easy and accessible</h2>
                        </div>
                        <div className="platform-intro-subheading-container">
                            <p className="platform-intro-subheading" style={{ fontSize: '2rem' }}>A sensor-to-API location visibility platform</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}