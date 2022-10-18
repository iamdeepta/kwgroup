import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class IconBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iconbox : [
                {
                    id: 1,
                    icon: "autora-icon-author",
                    title: "OUR MISSION",
                    text: "Maximise quality  production and services standards at minimum costs  to society ensuring optimum benefits to all our stakeholders"
                },
                {
                    id: 2,
                    icon: "autora-icon-quality",
                    title: "OUR VISION",
                    text: "Satisfy Buyer's Needs and be a leading and sustainable ecofriendly textile fabric & apparel manufacturer in Bangladesh"
                },
                {
                    id: 3,
                    icon: "autora-icon-time",
                    title: "GOAL",
                    text: "Enhance customer, shareholders and employee satisfaction, optimise contribution and ensure ecofriendly manufacturing environment."
                },
                {
                    id: 4,
                    icon: "autora-icon-author",
                    title: "OBJECTIVES",
                    text: "Enhance productivity to increase market demands through ensuring committed and sound supply chain while maintaining the best governance norms"
                }
            ]
        }
    }
    
    render() {
        return (
            <div className="themesflat-row gutter-30 gutter-mobile clearfix">
                {
                    this.state.iconbox.map(data => (
                        <div className="col span_1_of_3" key={data.id}>
                            <div className="themesflat-spacer clearfix" data-desktop={0} data-mobile={0} data-smobile={35} />
                            <div
                                className="themesflat-icon-box icon-top align-center has-width w95 circle light-bg accent-color style-1 bg-white-column padding-inner clearfix">
                                <div className="icon-wrap">
                                    <i className={data.icon} />
                                </div>
                                <div className="text-wrap">
                                    <h5 className="heading"><Link to="#">{data.title}</Link></h5>
                                    <div className="sep clearfix" />
                                    <p className="sub-heading">{data.text}</p>
                                </div>
                            </div>
                            <div className="divider h35" />
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default IconBox;