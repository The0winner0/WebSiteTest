import Image from 'next/image';

export default function UseCasesSection() {
    return (
        <>
            <div className="use-cases-intro-container">
                <div className="use-cases-intro-inner-container">
                    <div className="use-cases-intro-heading-wrapper">
                        <h2 className="use-cases-intro-heading">Scales Across Use Cases</h2>
                    </div>
                </div>
            </div>
            <div className="use-cases-details-container">
                <div className="use-cases-details-inner-container">
                    <div className="use-cases-image-column">
                        <div className="use-cases-image-wrapper">
                            <Image
                                width="1800"
                                height="1062"
                                src="https://i0.wp.com/atollsolutions.com/wp-content/uploads/2024/01/Route-map-feature.jpg?fit=1800%2C1062&ssl=1"
                                className="route-map-feature-image"
                                alt="Route map feature"
                                sizes="(max-width: 1800px) 100vw, 1800px"
                                loading="lazy"
                            />
                        </div>
                    </div>
                    <div className="use-cases-text-column">
                        <div className="use-cases-text-wrapper">
                            <p className="use-cases-description">Get instant location visibility with existing infrastructure. There is no need for precise mapping of the site, minimizing the time to deploy. The platform provides seamless visibility across areas covered by different infrastructure, including in moving vehicles. </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}