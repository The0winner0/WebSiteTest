import Image from 'next/image';

export default function ConfigAppSection() {
    return (
        <div className="config-app-section-container">
            <div className="config-app-section-inner-container">
                <div className="config-app-text-column">
                    <div className="config-app-text-wrapper">
                        <h2 className="config-app-heading">Configuration App</h2>
                        <p className="config-app-description">The Atoll Locate app helps you manage your BLE Tags and Beacons.</p>
                        <ul className="config-app-features-list">
                            <li>Scan for nearby BLE Tags and Beacons</li>
                            <li>Update device configuration</li>
                            <li>Locate devices on a map</li>
                        </ul>
                    </div>
                </div>
                <div className="config-app-gallery-column">
                    <div className="config-app-gallery-container">
                        <div className="config-app-image-gallery-group">
                            <figure className="gallery-item">
                                <Image loading="lazy" width="425" height="856" src="https://i0.wp.com/atollsolutions.com/wp-content/uploads/2024/03/Frame-3.png?fit=425%2C856&ssl=1" className="config-app-image config-app-image-three" alt="Configuration App Frame 3" sizes="(max-width: 425px) 100vw, 425px" />
                            </figure>
                            <figure className="gallery-item">
                                <Image loading="lazy" width="426" height="856" src="https://i0.wp.com/atollsolutions.com/wp-content/uploads/2024/03/Frame-1afs.png?fit=426%2C856&ssl=1" className="config-app-image config-app-image-one" alt="Configuration App Frame 1" sizes="(max-width: 426px) 100vw, 426px" />
                            </figure>
                            <figure className="gallery-item">
                                <Image loading="lazy" width="425" height="856" src="https://i0.wp.com/atollsolutions.com/wp-content/uploads/2024/03/Frame-2r3fsad.png?fit=425%2C856&ssl=1" className="config-app-image config-app-image-two" alt="Configuration App Frame 2" sizes="(max-width: 425px) 100vw, 425px" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}