import React, { Component } from 'react';

class Progress extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="themesflat-content-box clearfix" data-margin="0 31px 0 0" data-mobilemargin="0 0 0 0">
                    <p className="font-size-16 no-margin">We have more than 22 years of experience in the textile manufacturing industry with globally recognised clients. We have facilities for fabric knitting/dyeing & garments printing/embroidery.</p>
                    <div className="themesflat-spacer clearfix" data-desktop={37} data-mobile={35} data-smobile={35} />
                    <div className="themesflat-progress style-1 height-10px clearfix">
                        <h3 className="title">Reliable as an outsourcing partner</h3>
                        <div className="perc-wrap">
                            <div className="perc"><span>100%</span></div>
                        </div>
                        <div className="progress-bg" data-percent={100} data-inviewport="yes">
                            <div className="progress-animate" />
                        </div>
                    </div>
                    <div className="themesflat-spacer clearfix" data-desktop={25} data-mobile={25} data-smobile={25} />
                    <div className="themesflat-progress style-1 height-10px clearfix">
                        <h3 className="title">Fully committed to clients' satisfaction</h3>
                        <div className="perc-wrap">
                            <div className="perc"><span>100%</span></div>
                        </div>
                        <div className="progress-bg" data-percent={100} data-inviewport="yes">
                            <div className="progress-animate" />
                        </div>
                    </div>
                    <div className="themesflat-spacer clearfix" data-desktop={26} data-mobile={26} data-smobile={26} />
                    <div className="themesflat-progress style-1 height-10px clearfix">
                        <h3 className="title">Possess world class machineries </h3>
                        <div className="perc-wrap">
                            <div className="perc"><span>100%</span></div>
                        </div>
                        <div className="progress-bg" data-percent={100} data-inviewport="yes">
                            <div className="progress-animate" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Progress;