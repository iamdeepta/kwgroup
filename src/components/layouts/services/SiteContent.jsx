import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class SiteContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [
                {
                    id: 1,
                    text01: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    text02: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'
                },
                {
                    id: 2,
                    text01: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    text02: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'
                },
                {
                    id: 3,
                    text01: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    text02: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'
                }
            ]
        }
    }
    
    render() {
        const { location } = this.props;
        return (
            location.pathname === '/services-detail-1' ?
            <>
                <div id="site-content" className="site-content clearfix">
                <div id="inner-content" className="inner-content-wrap">
                    <div className="themesflat-spacer clearfix" data-desktop={80} data-mobile={60} data-smobile={60} />
                    <div className="themesflat-row equalize sm-equalize-auto clearfix">
                        <div className="span_1_of_6 bg-f7f">
                            <div className="themesflat-spacer clearfix" data-desktop={60} data-mobile={60} data-smobile={60} />
                            <div className="themesflat-content-box clearfix" data-margin="0 10px 0 43px"
                                data-mobilemargin="0 15px 0 15px">
                                <div className="themesflat-headings style-2 clearfix">
                                    <div className="sup-heading">SPECIAL SERVICE</div>
                                    <h2 className="heading font-size-28 line-height-39">DYEING</h2>
                                    <div className="sep has-width w80 accent-bg margin-top-20 clearfix" />
                                    <p className="sub-heading margin-top-33 line-height-24">Our dyeing section is well equipped with all required machineries to handle 35000kg per day. </p>
                                </div>
                            </div>
                            <div className="themesflat-spacer clearfix" data-desktop={56} data-mobile={56} data-smobile={56} />
                        </div>
                        <div className="span_1_of_6 half-background style-2" style={{backgroundImage: `url(assets/img/slider/dyeing-sd.PNG)`}}>
                        </div>
                    </div>
                    <div className="themesflat-spacer clearfix" data-desktop={39} data-mobile={39} data-smobile={39} />
                    <div className="flat-content-wrap style-2 clearfix">
                        <h5 className="title">DYEING SECTION</h5>
                        <p>Generation Next Fashions Limited's Dyeing Section is well equipped with all required machineries for a dyeing capacity of 35000 kg/day. It has 3 stenter machines with the finishing capacity of 40000 kg/day and 3 open compactor machines, 4 tumble dyeing and 2 slitting machines, handle the material smoothly one Sclavos soft flow dyeing machine and sufficient number of fork lifts to handle the fabrics containers smoothly. Thus it can provide a wide range of special finishes. These include : peach and blushed finishe, wrinkle free, stain resistant, cool max etc. The company has an ultramodern process house which comprises the latest equipments and machineries in the world. Machines can dye polyester under high temperature and pressure conditions. It has the ability to produced dyed fabric without any piling due to low liquid pressure and double nozzle system. In the dyeing/finishing section they are both open and tubular fabric finishing lines. To continue having a perfect finish on fabrics it uses world class machinery with modern technology.
                        </p>
                            </div>
                    <div className="flat-content-wrap style-2 clearfix" style={{marginTop: '30px'}}>
                        <h5 className="title">DYEING FINISHING SECTION</h5>
                        <p>After passing the dyeing section, different fabric properties are added in finishing section by applying different finishes. By using a series of finishing machine, correct width, softness and appearance are maintained according to requirements. Then sampling is done for several times to test GSM, shrinkage & fastness properties. Finally, fabric is inspected & prepared for delivery.
                        </p>
                    </div>
                    <div className="themesflat-spacer clearfix" data-desktop={37} data-mobile={35} data-smobile={35} />
                    <div className="flat-content-wrap style-2 clearfix">
                        {/* <div className="item" style={{width: '100%'}}>
                            <div className="inner">
                                <div className="themesflat-spacer clearfix" data-desktop={10} data-mobile={10} data-smobile={10} />
                                <h5 className="title">OUR SERVICES INCLUDE:</h5>
                                <p>We have successfully completed projects in numerous states across the continental United States.
                                    Autora Construction Services has a proven track record of:</p>
                                <div className="themesflat-spacer clearfix" data-desktop={8} data-mobile={8} data-smobile={8} />
                                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                                    <div className="inner">
                                        <span className="item">
                                            <span className="icon"><i className="fa fa-check-circle" /></span>
                                            <span className="text">Interior Design Planning</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                                    <div className="inner">
                                        <span className="item">
                                            <span className="icon"><i className="fa fa-check-circle" /></span>
                                            <span className="text">Colour &amp; Finish Consultations</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                                    <div className="inner">
                                        <span className="item">
                                            <span className="icon"><i className="fa fa-check-circle" /></span>
                                            <span className="text">Architectural &amp; Custom Lighting</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                                    <div className="inner">
                                        <span className="item">
                                            <span className="icon"><i className="fa fa-check-circle" /></span>
                                            <span className="text">Glass &amp; Acrylic Specifications</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="item">
                            <div className="themesflat-spacer clearfix" data-desktop={0} data-mobile={0} data-smobile={35} />
                            <div className="themesflat-content-box clearfix" data-margin="0 0 0 11px" data-mobilemargin="0 0 0 0">
                                <div className="inner pd35 bg-ffc">
                                    <h5 className="title text-white line-height-24 padding-left-7">THIS AWESOME SERVICE BRINGS FULL
                                        INTEREST INFORMATION FOR YOUR PURPOSE</h5>
                                    <div className="themesflat-spacer clearfix" data-desktop={16} data-mobile={16}
                                        data-smobile={16} />
                                    <div className="button-wrap has-icon icon-right size-14">
                                        <Link to="#"
                                            className="themesflat-button bg-white color-333 w100 font-weight-400 no-letter-spacing pd26"><span>Download
                                                .PDF <span className="icon"><i className="fa fa-file-pdf-o" /></span></span></Link>
                                    </div>
                                    <div className="themesflat-spacer clearfix" data-desktop={6} data-mobile={6} data-smobile={6} />
                                    <div className="button-wrap has-icon icon-right size-14">
                                        <Link to="#"
                                            className="themesflat-button bg-white color-333 w100 font-weight-400 no-letter-spacing pd26 "><span>
                                                Download .DOC <span className="icon"><i
                                                        className="fa fa-file-word-o" /></span></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="themesflat-spacer clearfix" data-desktop={37} data-mobile={35} data-smobile={35} />
                    {/* <div className="flat-content-wrap style-2 clearfix">
                        <h5 className="title no-letter-spacing">CONTACT US FOR DESIGN-BUILD SERVICES TODAY</h5>
                        <div className="themesflat-spacer clearfix" data-desktop={27} data-mobile={27} data-smobile={27} />
                        <div className="themesflat-tabs style-2 title-w170 clearfix">
                            <ul className="tab-title clearfix ">
                                <li className="item-title active">
                                    <span className="inner">Our focus</span>
                                </li>
                                <li className="item-title">
                                    <span className="inner">Dedicated</span>
                                </li>
                                <li className="item-title">
                                    <span className="inner">Committed</span>
                                </li>
                            </ul>
                            <div className="tab-content-wrap clearfix">
                                {
                                    this.state.tabs.map(data =>(
                                        <div className="tab-content" key={data.id}>
                                            <div className="item-content">
                                                <p>{data.text01}</p>
                                                <p>{data.text02}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div> */}
                    <div className="themesflat-spacer clearfix" data-desktop={80} data-mobile={60} data-smobile={60} />
                </div>
            </div>
                </>
                
                :
                location.pathname === '/services-detail-2' ?
                    <>
                       
                <div id="site-content" className="site-content clearfix">
                <div id="inner-content" className="inner-content-wrap">
                    <div className="themesflat-spacer clearfix" data-desktop={80} data-mobile={60} data-smobile={60} />
                    <div className="themesflat-row equalize sm-equalize-auto clearfix">
                        <div className="span_1_of_6 bg-f7f">
                            <div className="themesflat-spacer clearfix" data-desktop={60} data-mobile={60} data-smobile={60} />
                            <div className="themesflat-content-box clearfix" data-margin="0 10px 0 43px"
                                data-mobilemargin="0 15px 0 15px">
                                <div className="themesflat-headings style-2 clearfix">
                                    <div className="sup-heading">SPECIAL SERVICE</div>
                                    <h2 className="heading font-size-28 line-height-39">CUTTING</h2>
                                    <div className="sep has-width w80 accent-bg margin-top-20 clearfix" />
                                    <p className="sub-heading margin-top-33 line-height-24">We adapt easily to different production requirements for mass, diversified, small and medium range production. </p>
                                </div>
                            </div>
                            <div className="themesflat-spacer clearfix" data-desktop={56} data-mobile={56} data-smobile={56} />
                        </div>
                        <div className="span_1_of_6 half-background style-2" style={{backgroundImage: `url(assets/img/slider/cutting-sd.PNG)`}}>
                        </div>
                    </div>
                    <div className="themesflat-spacer clearfix" data-desktop={39} data-mobile={39} data-smobile={39} />
                    <div className="flat-content-wrap style-2 clearfix">
                        <h5 className="title">CUTTING SECTION</h5>
                        <p>At GNFL, we have given enough effort as well as enough time in planning and developing our cutting space. We now have a complete set of solutions that optimize our production processes. Our cutting room adapts easily to different production requirements for mass production, diversified production, small and medium range production and ultimately, delivers significant savings in terms of production time and material consumptions. With unrivalled technical support from Lectra and powerful production equipment controlled by software, GNFL ensures optimum functioning of the production unit. Besides having the most advanced equipments, we value professionals and experienced & caring hands. The CAD department is responsible for patterns and marker making and supplying these to the cutting room. This is one of the most important rooms for a garments factory, as fabric consumption can be controlled from this unit. Fabrics; to be noted, incorporate 60% of the total cost of garments making. So, a 1% improvement of cutting efficiency can lead to a big cost saving at the end of the day. That's why we have employed well trained and skillful personnel in CAD section. There are numerous softwares used for CAD marker making. Lectra, Gerbar, Audaces are some of the most popular ones used.  
                        </p>
                    </div>
                    <div className="themesflat-spacer clearfix" data-desktop={37} data-mobile={35} data-smobile={35} />
                    
                    <div className="themesflat-spacer clearfix" data-desktop={37} data-mobile={35} data-smobile={35} />
                    
                    <div className="themesflat-spacer clearfix" data-desktop={80} data-mobile={60} data-smobile={60} />
                </div>
            </div>
                </>
                   
                    : 
                    location.pathname === '/services-detail-3' ?
                    <>
                       
                <div id="site-content" className="site-content clearfix">
                <div id="inner-content" className="inner-content-wrap">
                    <div className="themesflat-spacer clearfix" data-desktop={80} data-mobile={60} data-smobile={60} />
                    <div className="themesflat-row equalize sm-equalize-auto clearfix">
                        <div className="span_1_of_6 bg-f7f">
                            <div className="themesflat-spacer clearfix" data-desktop={60} data-mobile={60} data-smobile={60} />
                            <div className="themesflat-content-box clearfix" data-margin="0 10px 0 43px"
                                data-mobilemargin="0 15px 0 15px">
                                <div className="themesflat-headings style-2 clearfix">
                                    <div className="sup-heading">SPECIAL SERVICE</div>
                                    <h2 className="heading font-size-28 line-height-39">PRINTING</h2>
                                    <div className="sep has-width w80 accent-bg margin-top-20 clearfix" />
                                    <p className="sub-heading margin-top-33 line-height-24">Our state of the art printing facility can cater to more than 150000 pieces per day.</p>
                                </div>
                            </div>
                            <div className="themesflat-spacer clearfix" data-desktop={56} data-mobile={56} data-smobile={56} />
                        </div>
                        <div className="span_1_of_6 half-background style-2" style={{backgroundImage: `url(assets/img/slider/printing-sd.PNG)`}}>
                        </div>
                    </div>
                    <div className="themesflat-spacer clearfix" data-desktop={39} data-mobile={39} data-smobile={39} />
                    <div className="flat-content-wrap style-2 clearfix">
                        <h5 className="title">PRINTING SECTION</h5>
                        <p>We have a state-of-the-art printing facility with an experienced technical team where we can cater to more than 150,000 pcs/day.
                        </p>
                    </div>
                    <div className="themesflat-spacer clearfix" data-desktop={37} data-mobile={35} data-smobile={35} />
                    <div className="flat-content-wrap style-2 clearfix">
                        <div className="item" style={{width: '100%'}}>
                            <div className="inner">
                                <div className="themesflat-spacer clearfix" data-desktop={10} data-mobile={10} data-smobile={10} />
                                <h5 className="title">KINDS OF PANEL PRINTING:</h5>
                                {/* <p>We have successfully completed projects in numerous states across the continental United States.
                                    Autora Construction Services has a proven track record of:</p> */}
                                <div className="themesflat-spacer clearfix" data-desktop={8} data-mobile={8} data-smobile={8} />
                                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                                    <div className="inner">
                                        <span className="item">
                                            <span className="icon"><i className="fa fa-check-circle" /></span>
                                            <span className="text">Pigment Print</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                                    <div className="inner">
                                        <span className="item">
                                            <span className="icon"><i className="fa fa-check-circle" /></span>
                                            <span className="text">Rubber Print</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                                    <div className="inner">
                                        <span className="item">
                                            <span className="icon"><i className="fa fa-check-circle" /></span>
                                            <span className="text">Process Print</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                                    <div className="inner">
                                        <span className="item">
                                            <span className="icon"><i className="fa fa-check-circle" /></span>
                                            <span className="text">Foil Print</span>
                                        </span>
                                    </div>
                                                </div>
                                                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                                    <div className="inner">
                                        <span className="item">
                                            <span className="icon"><i className="fa fa-check-circle" /></span>
                                            <span className="text">Glitter Print</span>
                                        </span>
                                                    </div>
                                                    <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                                    <div className="inner">
                                        <span className="item">
                                            <span className="icon"><i className="fa fa-check-circle" /></span>
                                            <span className="text">Heat Transfer</span>
                                        </span>
                                    </div>
                                </div>
                                </div>
                            </div>
                                        </div>
                                        

                                        <div className="item" style={{width: '100%'}}>
                            <div className="inner">
                                <div className="themesflat-spacer clearfix" data-desktop={10} data-mobile={10} data-smobile={10} />
                                <h5 className="title">OUR PRINTING SECTION WITH MODERN TECHNOLOGY MACHINES INCLUDE:</h5>
                                {/* <p>We have successfully completed projects in numerous states across the continental United States.
                                    Autora Construction Services has a proven track record of:</p> */}
                                <div className="themesflat-spacer clearfix" data-desktop={8} data-mobile={8} data-smobile={8} />
                                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                                    <div className="inner">
                                        <span className="item">
                                            <span className="icon"><i className="fa fa-check-circle" /></span>
                                            <span className="text">Flock Machines</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                                    <div className="inner">
                                        <span className="item">
                                            <span className="icon"><i className="fa fa-check-circle" /></span>
                                            <span className="text">Expose Machines</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                                    <div className="inner">
                                        <span className="item">
                                            <span className="icon"><i className="fa fa-check-circle" /></span>
                                            <span className="text">Heat Press Machines</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                                    <div className="inner">
                                        <span className="item">
                                            <span className="icon"><i className="fa fa-check-circle" /></span>
                                            <span className="text">Curing Machines</span>
                                        </span>
                                    </div>
                                                </div>
                                                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                                    <div className="inner">
                                        <span className="item">
                                            <span className="icon"><i className="fa fa-check-circle" /></span>
                                            <span className="text">Octopus Printing Label Machines</span>
                                        </span>
                                    </div>
                                                  
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="themesflat-spacer clearfix" data-desktop={37} data-mobile={35} data-smobile={35} />
                    
                    <div className="themesflat-spacer clearfix" data-desktop={80} data-mobile={60} data-smobile={60} />
                </div>
            </div>
                        </>
                        
                        :

                       location.pathname === '/services-detail-4' ?
                    <>
                       
                <div id="site-content" className="site-content clearfix">
                <div id="inner-content" className="inner-content-wrap">
                    <div className="themesflat-spacer clearfix" data-desktop={80} data-mobile={60} data-smobile={60} />
                    <div className="themesflat-row equalize sm-equalize-auto clearfix">
                        <div className="span_1_of_6 bg-f7f">
                            <div className="themesflat-spacer clearfix" data-desktop={60} data-mobile={60} data-smobile={60} />
                            <div className="themesflat-content-box clearfix" data-margin="0 10px 0 43px"
                                data-mobilemargin="0 15px 0 15px">
                                <div className="themesflat-headings style-2 clearfix">
                                    <div className="sup-heading">SPECIAL SERVICE</div>
                                    <h2 className="heading font-size-28 line-height-39">SEWING</h2>
                                    <div className="sep has-width w80 accent-bg margin-top-20 clearfix" />
                                    <p className="sub-heading margin-top-33 line-height-24">We have sophisticated controlled machines to satisfy your needs with integrated systems, GSD & ERP & Advanced Production Planning.</p>
                                </div>
                            </div>
                            <div className="themesflat-spacer clearfix" data-desktop={56} data-mobile={56} data-smobile={56} />
                        </div>
                        <div className="span_1_of_6 half-background style-2" style={{backgroundImage: `url(assets/img/slider/sewing-sd.PNG)`}}>
                        </div>
                    </div>
                    <div className="themesflat-spacer clearfix" data-desktop={39} data-mobile={39} data-smobile={39} />
                    <div className="flat-content-wrap style-2 clearfix">
                        <h5 className="title">SEWING SECTION</h5>
                        <p>Generation Next Fashions Ltd has a target oriented unit Production System. We have over 2475 Stations running in 1 shift. We have sophisticated controlled machines to satisfy your needs with integrated system, GSD & ERP & advanced production planning. On our sewing floor we always ensure 100% safety of our operators, helpers as well as for our supervisors.
                        <br /><br />
                          We have sewing machines of all types which are arranged as a vertical line to assemble the garments. Our garments production system is responsible for the fabric being converted into garments. Production systems are manned according to the various factors; number of machines needed per garment, machine layout, total number of operators or helpers involved to sew a complete garment and number of pieces moving in a line during the making of a garment.                     
                        </p>
                    </div>
                    <div className="themesflat-spacer clearfix" data-desktop={37} data-mobile={35} data-smobile={35} />
                    
                    <div className="themesflat-spacer clearfix" data-desktop={37} data-mobile={35} data-smobile={35} />
                    
                    <div className="themesflat-spacer clearfix" data-desktop={80} data-mobile={60} data-smobile={60} />
                </div>
            </div>
                            </> 
                            
                            :

                            location.pathname === '/services-detail-5' ?
                    <>
                       
                <div id="site-content" className="site-content clearfix">
                <div id="inner-content" className="inner-content-wrap">
                    <div className="themesflat-spacer clearfix" data-desktop={80} data-mobile={60} data-smobile={60} />
                    <div className="themesflat-row equalize sm-equalize-auto clearfix">
                        <div className="span_1_of_6 bg-f7f">
                            <div className="themesflat-spacer clearfix" data-desktop={60} data-mobile={60} data-smobile={60} />
                            <div className="themesflat-content-box clearfix" data-margin="0 10px 0 43px"
                                data-mobilemargin="0 15px 0 15px">
                                <div className="themesflat-headings style-2 clearfix">
                                    <div className="sup-heading">SPECIAL SERVICE</div>
                                    <h2 className="heading font-size-28 line-height-39">QUALITY ASSURANCE</h2>
                                    <div className="sep has-width w80 accent-bg margin-top-20 clearfix" />
                                    <p className="sub-heading margin-top-33 line-height-24">We adapt easily to different production requirements for mass, diversified, small and medium range production. </p>
                                </div>
                            </div>
                            <div className="themesflat-spacer clearfix" data-desktop={56} data-mobile={56} data-smobile={56} />
                        </div>
                        <div className="span_1_of_6 half-background style-2" style={{backgroundImage: `url(assets/img/slider/qa-sd.PNG)`}}>
                        </div>
                    </div>
                    <div className="themesflat-spacer clearfix" data-desktop={39} data-mobile={39} data-smobile={39} />
                    <div className="flat-content-wrap style-2 clearfix">
                        <h5 className="title">QUALITY SECTION</h5>
                        <p>Quality determines the acceptability in the market. The primary purpose of the in-process auditing is to identify problems as early as possible. A problem may be caused by the operator, the machine or other factors. The inline audits help us to find specific problems in production. The only way to fix a problem is to find the problem. It is important to find errors as quickly as possible so that they can be corrected as fast as possible. Quality control is concerned with the garments specifications, measurements, fabric types, sewing quality, accessories quality etc. Our QC officers are responsible for making sure all the parameters are followed and each check mark is completed. Our quality control officers have sound knowledge on garment specifications, measurements, textile materials and accessories. GNFL's QC officers have knowledge of garment faults and defects and can detect them and take appropriate action on corrections. Our company's advanced management team along with our well-trained Quality Assurance team ensures the best quality of products to meet the International Standard. That's how we maintain the quality of products so that our customers are retained.  
                        </p>
                    </div>

                    <div className="flat-content-wrap style-2 clearfix" style={{marginTop: '30px'}}>
                        <h5 className="title">THE QUALITY TEAM FOLLOWS ALL STANDARDIZED INTERNATIONAL RULES:</h5>
                        <p>Fabric Inspection: 4 points system, sewing in process: Traffic Light System, Garment AQL: 2.5, in Line Process: 7 pcs system, Needle detection report: 9-point system. Moreover, the quality team creates various types of reports for maintaining the best quality: GSM check report and light box system etc.
                        </p>
                    </div>
                    <div className="themesflat-spacer clearfix" data-desktop={37} data-mobile={35} data-smobile={35} />
                    <div className="flat-content-wrap style-2 clearfix">
                        <div className="item" style={{width: '100%'}}>
                            <div className="inner">
                                <div className="themesflat-spacer clearfix" data-desktop={10} data-mobile={10} data-smobile={10} />
                                <h5 className="title">SUMMARY:</h5>
                                {/* <p>We have successfully completed projects in numerous states across the continental United States.
                                    Autora Construction Services has a proven track record of:</p> */}
                                <div className="themesflat-spacer clearfix" data-desktop={8} data-mobile={8} data-smobile={8} />
                                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                                    <div className="inner">
                                        <span className="item">
                                            <span className="icon"><i className="fa fa-check-circle" /></span>
                                            <span className="text">Production Lead Time: Basics - 90 days</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                                    <div className="inner">
                                        <span className="item">
                                            <span className="icon"><i className="fa fa-check-circle" /></span>
                                            <span className="text">AOP Yarn/Dye: 120 days</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                                    <div className="inner">
                                        <span className="item">
                                            <span className="icon"><i className="fa fa-check-circle" /></span>
                                            <span className="text">Special Orders: 45 - 60 days</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                                    <div className="inner">
                                        <span className="item">
                                            <span className="icon"><i className="fa fa-check-circle" /></span>
                                            <span className="text">Days for repeat: 60 - 90 days</span>
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                                    <div className="inner">
                                        <span className="item">
                                            <span className="icon"><i className="fa fa-check-circle" /></span>
                                            <span className="text">Total Workforce: 5,500</span>
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="themesflat-list has-icon style-1 icon-left size-16 clearfix">
                                    <div className="inner">
                                        <span className="item">
                                            <span className="icon"><i className="fa fa-check-circle" /></span>
                                            <span className="text">Export : 70 - 80 million USD per year</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="themesflat-spacer clearfix" data-desktop={37} data-mobile={35} data-smobile={35} />
                    
                    <div className="themesflat-spacer clearfix" data-desktop={80} data-mobile={60} data-smobile={60} />
                </div>
            </div>
                                </>
                                
                                :""
            
        );


    }

    
}

export default SiteContent;