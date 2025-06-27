import SvgElement from './SvgElements'; 

export default function TagsSection() {
    return (
        <>
            <div className="location-tags-intro-container">
                <div className="location-tags-intro-inner-container">
                    <div className="location-tags-content-wrapper">
                        <div className="location-tags-content-inner">
                            <div className="location-tags-heading-wrapper">
                                <h2 className="location-tags-heading">Tags for Location Visibility</h2>
                            </div>
                            <div className="location-tags-text-wrapper">
                                <p className="location-tags-description-primary">Atoll Solutions offers a wide range of standard and customisable Tags for all your Location Visibility needs. These devices can be used wherever you need low power sensors, widgets or location identifiers. Tags may be used for either movable applications (as a Tracker) or immovable applications (as a Beacon).</p>
                                <p className="location-tags-description-secondary">
                                    <span className="large-text">We offer three families of tags based on the supported technologies</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tag-families-section-container">
                <div className="tag-families-inner-container">
                    <div className="tag-families-svg-group-wrapper">
                        <div className="tag-families-svg-group-inner">
                            <div className="tag-families-svg-item ag-tag-svg-item">
                                <SvgElement id="agTag" />
                            </div>
                            <div className="tag-families-svg-item au-tag-svg-item">
                                <SvgElement id="auTag" />
                            </div>
                            <div className="tag-families-svg-item ac-tag-svg-item">
                                <SvgElement id="acTag" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}