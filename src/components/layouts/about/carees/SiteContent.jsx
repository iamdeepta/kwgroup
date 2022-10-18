import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class SiteContent extends Component {
    render() {
        return (
            <div id="site-content" className="site-content clearfix">
                <div id="inner-content" className="inner-content-wrap">
                    <div className="themesflat-spacer clearfix" data-desktop={80} data-mobile={60} data-smobile={60} />
                    <div className="themesflat-carousel-box data-effect clearfix" data-gap={0} data-column={1} data-column2={1}
                        data-column3={1} data-auto="true">
                        <div className="owl-carousel owl-theme">
                            <div className="themesflat-gallery style-1 clearfix">
                                <div className="gallery-item">
                                    <div className="inner">
                                        <div className="thumb">
                                            <img src="assets/img/slider/hero_1.webp" alt="imagealt" style={{height: '500px', objectFit: 'cover'}} />
                                            <div className="text-wrap">
                                                <span>We need you </span>
                                                <h5 className="heading">to join our team !</h5>
                                                <span>Apply now!</span>
                                                <a href="tel: +88028411765" className="themesflat-button bg-accent">APPLY NOW</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="themesflat-gallery style-1 clearfix">
                                <div className="gallery-item">
                                    <div className="inner">
                                        <div className="thumb">
                                            <img src="assets/img/slider/hero_2.webp" alt="imagealt" style={{height: '500px', objectFit: 'cover'}} />
                                            <div className="text-wrap">
                                                <span>We need you </span>
                                                <h5 className="heading">to join our team !</h5>
                                                <span>Apply now!</span>
                                                <Link to="#" className="themesflat-button bg-accent">APPLY NOW</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="themesflat-spacer clearfix" data-desktop={29} data-mobile={35} data-smobile={35} />
                    <div className="themesflat-headings style-2 clearfix">
                        <h2 className="heading">WE ARE HIRING</h2>
                        <div className="sep has-width w80 accent-bg clearfix" />
                        <p className="sub-heading font-size-16 line-height-28 text-666 margin-top-27 letter-spacing-01">
                            We are hiring talented people for our company. Feel free to apply.</p>
                    </div>
                    <div className="themesflat-spacer clearfix" data-desktop={22} data-mobile={22} data-smobile={22} />
                    <div className="themesflat-accordions style-4 has-icon icon-right iconstyle-1 clearfix">
                        <div className="accordion-item active">
                            <h3 className="accordion-heading"><span className="inner">QUALITY CONTROL </span></h3>
                            <div className="accordion-content clearfix">
                                <div className="themesflat-row clearfix">
                                    <div className="span_1_of_6">
                                        <div className="themesflat-content-box clearfix" data-margin="0 22px 0 0px"
                                            data-mobilemargin="0 22px 0 0px">
                                            <h6 className="name">About us</h6>
                                            <p>The primary responsibility of quality controller is to ensure products meet quality and efficiency standards set by the company.</p>
                                            <div className="themesflat-spacer clearfix" data-desktop={10} data-mobile={10}
                                                data-smobile={10} />
                                            <h6 className="name">Job Responsibilities:</h6>
                                            <div className="themesflat-list has-icon style-2 icon-left clearfix">
                                                <div className="inner">
                                                    <span className="item">
                                                        <span className="icon"><i className="fa fa-check" /></span>
                                                        <span className="text">Setting quality standards for the factory following buyer’s requirements.</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="themesflat-spacer clearfix" data-desktop={10} data-mobile={10}
                                                data-smobile={10} />
                                            <div className="themesflat-list has-icon style-2 icon-left  clearfix">
                                                <div className="inner">
                                                    <span className="item">
                                                        <span className="icon"><i className="fa fa-check" /></span>
                                                        <span className="text">Develop MIS for quality measurement and recording quality.</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="themesflat-spacer clearfix" data-desktop={10} data-mobile={10}
                                                data-smobile={10} />
                                            <div className="themesflat-list has-icon style-2 icon-left clearfix">
                                                <div className="inner">
                                                    <span className="item">
                                                        <span className="icon"><i className="fa fa-check" /></span>
                                                        <span className="text">Auditing inward fabric and trims and ensuring only quality goods are accepted.</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="themesflat-spacer clearfix" data-desktop={10} data-mobile={10}
                                                data-smobile={10} />
                                            <div className="themesflat-list has-icon style-2 icon-left clearfix">
                                                <div className="inner">
                                                    <span className="item">
                                                        <span className="icon"><i className="fa fa-check" /></span>
                                                        <span className="text">Monitor the quality of the product through the various stages of production. </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="span_1_of_6">
                                        <div className="themesflat-spacer clearfix" data-desktop={0} data-mobile={0}
                                            data-smobile={35} />
                                        <div className="themesflat-content-box clearfix" data-margin="0 12px 0 0px"
                                            data-mobilemargin="0 0 0 0">
                                            <h6 className="name">Requirements</h6>
                                            <div className="themesflat-list has-icon style-2 icon-left align-top clearfix">
                                                <div className="inner">
                                                    <span className="item">
                                                        <span className="icon"><i className="fa fa-check" /></span>
                                                        <span className="text">5-8 years of experience</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="themesflat-spacer clearfix" data-desktop={10} data-mobile={10}
                                                data-smobile={10} />
                                            <div className="themesflat-list has-icon style-2 icon-left align-top clearfix">
                                                <div className="inner">
                                                    <span className="item">
                                                        <span className="icon"><i className="fa fa-check" /></span>
                                                        <span className="text">B.S. degree in mechanical or manufacturing engineering</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="themesflat-spacer clearfix" data-desktop={10} data-mobile={10}
                                                data-smobile={10} />
                                            <div className="themesflat-list has-icon style-2 icon-left align-top clearfix">
                                                <div className="inner">
                                                    <span className="item">
                                                        <span className="icon"><i className="fa fa-check" /></span>
                                                        <span className="text">Excellent computer skills, including MS Office</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="themesflat-spacer clearfix" data-desktop={10} data-mobile={10}
                                                data-smobile={10} />
                                            <div className="themesflat-list has-icon style-2 icon-left align-top clearfix">
                                                <div className="inner">
                                                    <span className="item">
                                                        <span className="icon"><i className="fa fa-check" /></span>
                                                        <span className="text">Strong communication skills, including the ability to explain and teach methodologies.</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h3 className="accordion-heading"><span className="inner">QUALITY INSPECTOR</span></h3>
                            <div className="accordion-content clearfix">
                                <div className="themesflat-row clearfix">
                                    <div className="span_1_of_6">
                                        <div className="themesflat-content-box clearfix" data-margin="0 22px 0 0px"
                                            data-mobilemargin="0 22px 0 0px">
                                            <h6 className="name">About us</h6>
                                            <p>A Quality Inspector, or QA Inspector, is responsible for reviewing products and materials during manufacturing to make sure they meet company requirements. Their duties include measuring objects compared to their intended physical specifications, running quality tests and identifying defects.</p>
                                            <div className="themesflat-spacer clearfix" data-desktop={10} data-mobile={10}
                                                data-smobile={10} />
                                            <h6 className="name">Job Responsibilities:</h6>
                                            <div className="themesflat-list has-icon style-2 icon-left clearfix">
                                                <div className="inner">
                                                    <span className="item">
                                                        <span className="icon"><i className="fa fa-check" /></span>
                                                        <span className="text">Check the complete operations necessary for passing a new style.</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="themesflat-spacer clearfix" data-desktop={10} data-mobile={10}
                                                data-smobile={10} />
                                            <div className="themesflat-list has-icon style-2 icon-left  clearfix">
                                                <div className="inner">
                                                    <span className="item">
                                                        <span className="icon"><i className="fa fa-check" /></span>
                                                        <span className="text">Make sure either all terms are available or not.</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="themesflat-spacer clearfix" data-desktop={10} data-mobile={10}
                                                data-smobile={10} />
                                            <div className="themesflat-list has-icon style-2 icon-left clearfix">
                                                <div className="inner">
                                                    <span className="item">
                                                        <span className="icon"><i className="fa fa-check" /></span>
                                                        <span className="text">Check all the bundles in this manner that 100% of every bundle must be checked.</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="themesflat-spacer clearfix" data-desktop={10} data-mobile={10}
                                                data-smobile={10} />
                                            <div className="themesflat-list has-icon style-2 icon-left clearfix">
                                                <div className="inner">
                                                    <span className="item">
                                                        <span className="icon"><i className="fa fa-check" /></span>
                                                        <span className="text">Confirm the stitching alterations must be done right after QC inspection. </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="span_1_of_6">
                                        <div className="themesflat-spacer clearfix" data-desktop={0} data-mobile={0}
                                            data-smobile={35} />
                                        <div className="themesflat-content-box clearfix" data-margin="0 12px 0 0px"
                                            data-mobilemargin="0 0 0 0">
                                            <h6 className="name">Requirements</h6>
                                            <div className="themesflat-list has-icon style-2 icon-left align-top clearfix">
                                                <div className="inner">
                                                    <span className="item">
                                                        <span className="icon"><i className="fa fa-check" /></span>
                                                        <span className="text">5-8 years of experience</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="themesflat-spacer clearfix" data-desktop={10} data-mobile={10}
                                                data-smobile={10} />
                                            <div className="themesflat-list has-icon style-2 icon-left align-top clearfix">
                                                <div className="inner">
                                                    <span className="item">
                                                        <span className="icon"><i className="fa fa-check" /></span>
                                                        <span className="text">A keen eye for detail and a results-driven approach.</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="themesflat-spacer clearfix" data-desktop={10} data-mobile={10}
                                                data-smobile={10} />
                                            <div className="themesflat-list has-icon style-2 icon-left align-top clearfix">
                                                <div className="inner">
                                                    <span className="item">
                                                        <span className="icon"><i className="fa fa-check" /></span>
                                                        <span className="text">Responsible and trustworthy.</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="themesflat-spacer clearfix" data-desktop={10} data-mobile={10}
                                                data-smobile={10} />
                                            <div className="themesflat-list has-icon style-2 icon-left align-top clearfix">
                                                <div className="inner">
                                                    <span className="item">
                                                        <span className="icon"><i className="fa fa-check" /></span>
                                                        <span className="text">Familiarity with quality testing machines and systems.</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h3 className="accordion-heading"><span className="inner">OFFICE EXECUTIVE</span></h3>
                            <div className="accordion-content clearfix">
                                <div className="themesflat-row clearfix">
                                    <div className="span_1_of_6">
                                        <div className="themesflat-content-box clearfix" data-margin="0 22px 0 0px"
                                            data-mobilemargin="0 22px 0 0px">
                                            <h6 className="name">About us</h6>
                                            <p>Performing basic admin duties including printing, sending emails, and ordering office supplies. Assisting and coordinating with the sales team. Assisting the Front Office team. Assisting with inventory control.</p>
                                            <div className="themesflat-spacer clearfix" data-desktop={10} data-mobile={10}
                                                data-smobile={10} />
                                            <h6 className="name">Job Responsibilities:</h6>
                                            <div className="themesflat-list has-icon style-2 icon-left clearfix">
                                                <div className="inner">
                                                    <span className="item">
                                                        <span className="icon"><i className="fa fa-check" /></span>
                                                        <span className="text">Analyzing and making meaning of market research</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="themesflat-spacer clearfix" data-desktop={10} data-mobile={10}
                                                data-smobile={10} />
                                            <div className="themesflat-list has-icon style-2 icon-left  clearfix">
                                                <div className="inner">
                                                    <span className="item">
                                                        <span className="icon"><i className="fa fa-check" /></span>
                                                        <span className="text">Interacting with office visitors to make them feel welcomed</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="themesflat-spacer clearfix" data-desktop={10} data-mobile={10}
                                                data-smobile={10} />
                                            <div className="themesflat-list has-icon style-2 icon-left clearfix">
                                                <div className="inner">
                                                    <span className="item">
                                                        <span className="icon"><i className="fa fa-check" /></span>
                                                        <span className="text">Managing and inspiring employees by leading from the front</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="themesflat-spacer clearfix" data-desktop={10} data-mobile={10}
                                                data-smobile={10} />
                                            <div className="themesflat-list has-icon style-2 icon-left clearfix">
                                                <div className="inner">
                                                    <span className="item">
                                                        <span className="icon"><i className="fa fa-check" /></span>
                                                        <span className="text">Assisting and coordinating with the sales team. </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="span_1_of_6">
                                        <div className="themesflat-spacer clearfix" data-desktop={0} data-mobile={0}
                                            data-smobile={35} />
                                        <div className="themesflat-content-box clearfix" data-margin="0 12px 0 0px"
                                            data-mobilemargin="0 0px 0 0px">
                                            <h6 className="name">Requirements</h6>
                                            <div className="themesflat-list has-icon style-2 icon-left align-top clearfix">
                                                <div className="inner">
                                                    <span className="item">
                                                        <span className="icon"><i className="fa fa-check" /></span>
                                                        <span className="text">5-8 years of experience</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="themesflat-spacer clearfix" data-desktop={10} data-mobile={10}
                                                data-smobile={10} />
                                            <div className="themesflat-list has-icon style-2 icon-left align-top clearfix">
                                                <div className="inner">
                                                    <span className="item">
                                                        <span className="icon"><i className="fa fa-check" /></span>
                                                        <span className="text">Bachelor’s degree in business administration or similar field</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="themesflat-spacer clearfix" data-desktop={10} data-mobile={10}
                                                data-smobile={10} />
                                            <div className="themesflat-list has-icon style-2 icon-left align-top clearfix">
                                                <div className="inner">
                                                    <span className="item">
                                                        <span className="icon"><i className="fa fa-check" /></span>
                                                        <span className="text">Excellent organizational skills</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="themesflat-spacer clearfix" data-desktop={10} data-mobile={10}
                                                data-smobile={10} />
                                            <div className="themesflat-list has-icon style-2 icon-left align-top clearfix">
                                                <div className="inner">
                                                    <span className="item">
                                                        <span className="icon"><i className="fa fa-check" /></span>
                                                        <span className="text">Working knowledge of CRM platforms.</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h3 className="accordion-heading"><span className="inner">MERCHANDISER</span></h3>
                            <div className="accordion-content clearfix">
                                <div className="themesflat-row clearfix">
                                    <div className="span_1_of_6">
                                        <div className="themesflat-content-box clearfix" data-margin="0 22px 0 0px"
                                            data-mobilemargin="0 22px 0 0px">
                                            <h6 className="name">About us</h6>
                                            <p>Merchandisers plan and manage product ranges, inventory, displays and promotions. They collaborate with buyers, suppliers, analysts and retail teams to have the right products in stock, on the shelf and in attractive displays at the right price to interest customers and produce sales.</p>
                                            <div className="themesflat-spacer clearfix" data-desktop={10} data-mobile={10}
                                                data-smobile={10} />
                                            <h6 className="name">Job Responsibilities:</h6>
                                            <div className="themesflat-list has-icon style-2 icon-left clearfix">
                                                <div className="inner">
                                                    <span className="item">
                                                        <span className="icon"><i className="fa fa-check" /></span>
                                                        <span className="text">Planning and developing merchandising strategies.</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="themesflat-spacer clearfix" data-desktop={10} data-mobile={10}
                                                data-smobile={10} />
                                            <div className="themesflat-list has-icon style-2 icon-left  clearfix">
                                                <div className="inner">
                                                    <span className="item">
                                                        <span className="icon"><i className="fa fa-check" /></span>
                                                        <span className="text">Maintaining and tracking inventory.</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="themesflat-spacer clearfix" data-desktop={10} data-mobile={10}
                                                data-smobile={10} />
                                            <div className="themesflat-list has-icon style-2 icon-left clearfix">
                                                <div className="inner">
                                                    <span className="item">
                                                        <span className="icon"><i className="fa fa-check" /></span>
                                                        <span className="text">Liaising between customer and company.</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="themesflat-spacer clearfix" data-desktop={10} data-mobile={10}
                                                data-smobile={10} />
                                            <div className="themesflat-list has-icon style-2 icon-left clearfix">
                                                <div className="inner">
                                                    <span className="item">
                                                        <span className="icon"><i className="fa fa-check" /></span>
                                                        <span className="text">Forecasting sales and profits. </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="span_1_of_6">
                                        <div className="themesflat-spacer clearfix" data-desktop={0} data-mobile={0}
                                            data-smobile={35} />
                                        <div className="themesflat-content-box clearfix" data-margin="0 12px 0 0px"
                                            data-mobilemargin="0 0 0 0">
                                            <h6 className="name">Requirements</h6>
                                            <div className="themesflat-list has-icon style-2 icon-left align-top clearfix">
                                                <div className="inner">
                                                    <span className="item">
                                                        <span className="icon"><i className="fa fa-check" /></span>
                                                        <span className="text">5-8 years of experience</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="themesflat-spacer clearfix" data-desktop={10} data-mobile={10}
                                                data-smobile={10} />
                                            <div className="themesflat-list has-icon style-2 icon-left align-top clearfix">
                                                <div className="inner">
                                                    <span className="item">
                                                        <span className="icon"><i className="fa fa-check" /></span>
                                                        <span className="text">High school diploma/GED required.</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="themesflat-spacer clearfix" data-desktop={10} data-mobile={10}
                                                data-smobile={10} />
                                            <div className="themesflat-list has-icon style-2 icon-left align-top clearfix">
                                                <div className="inner">
                                                    <span className="item">
                                                        <span className="icon"><i className="fa fa-check" /></span>
                                                        <span className="text">Strong organisational and decision making skills.</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="themesflat-spacer clearfix" data-desktop={10} data-mobile={10}
                                                data-smobile={10} />
                                            <div className="themesflat-list has-icon style-2 icon-left align-top clearfix">
                                                <div className="inner">
                                                    <span className="item">
                                                        <span className="icon"><i className="fa fa-check" /></span>
                                                        <span className="text">Excellent communication skills, both written and verbal.</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="themesflat-spacer clearfix" data-desktop={78} data-mobile={60} data-smobile={60} />
                </div>
            </div>
        );
    }
}

export default SiteContent;