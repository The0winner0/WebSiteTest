import SvgElement from './SvgElements'; // Adjust path if needed

export default function CustomerChoiceSection() {
    return (
        <div className="customer-choice-section-container">
            <div className="customer-choice-inner-container">
                <div className="customer-choice-heading-wrapper">
                    <h2 className="customer-choice-heading">Why Customers Choose Kinesis</h2>
                </div>
                <div className="customer-choice-svg-group-container">
                    <div className="customer-choice-svg-group-inner">
                        <div className="customer-choice-svg-item profitability-svg-item">
                            <SvgElement id="increasedProfitability" />
                        </div>
                        <div className="customer-choice-svg-item efficiency-svg-item">
                            <SvgElement id="improvedEfficiency" />
                        </div>
                        <div className="customer-choice-svg-item safety-svg-item">
                            <SvgElement id="saferEnvironment" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}