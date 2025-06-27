import FadeInSection from './FadeInSection';
import '../HomeCss/HomeLocation.css';

const rtlvCardData = [
    {
        id: 1,
        title: 'Increased Profitability',
        text: 'Through increased product quality and reliability—e.g. a logistics company can get timely alerts about the location and condition of their deliveries, and provide a better service to their customers.',
        delay: 300,
        rowClass: 'rtlv__feature-card-first-row'
    },
    {
        id: 2,
        title: 'Improved Efficiency',
        text: 'By optimising processes using reliable location information—e.g. a factory can track work items at various stages of production, and identify and address bottlenecks.',
        delay: 400,
        rowClass: 'rtlv__feature-card-first-row'
    },
    {
        id: 3,
        title: 'Safer Environment',
        text: 'Through access control for people and geofencing of assets—e.g. visitors can be restricted to specific areas of a plant, with an alert sent if they approach a hazardous zone.',
        delay: 500,
        rowClass: 'rtlv__feature-card-second-row'
    }
];

const RtlvCard = ({ id, title, text, delay, rowClass }) => (
    <div className={`rtlv__feature-card rtlv__feature-card-${id} ${rowClass}`}>
        <FadeInSection delay={delay}>
            <h3 className="rtlv__feature-title">{title}</h3>
            <p className="rtlv__feature-text">{text}</p>
        </FadeInSection>
    </div>
);

const Rtlv = () => {
    return (
        <section className="rtlv">
            <div className="rtlv__inner">
                <div className="rtlv__header">
                    <span className="rtlv__icon" aria-hidden="true" />
                    <h2 className="rtlv__heading">
                        Real Time Location Visibility.<br />
                        Kinesis gives you the ‘where’ and ‘how’ for your people and assets
                    </h2>
                </div>
                <div className="rtlv__features">
                    <div className="rtlv__features-first-row">
                        {rtlvCardData.slice(0, 2).map(card => (
                            <RtlvCard key={card.id} {...card} />
                        ))}
                    </div>
                    {rtlvCardData.slice(2).map(card => (
                         <RtlvCard key={card.id} {...card} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Rtlv;