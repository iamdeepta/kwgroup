import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Slider, TitleHeading } from '../layouts/home01/index'
import { Accordion, IconBox, Progress, Request, SliderService, TabProject, Partner } from '../layouts/home02/index'
import {Header, Footer, TopBar, BottomBar} from '../layouts/general/index'
import Testimonial from '../layouts/home02/Testimonial'
import TabProduct from '../layouts/home02/TabProduct'
import LazyLoad from "react-lazyload";
import { Helmet } from 'react-helmet-async'

//const [active_chat, setActiveChat] = useState(false);
  

class Home02 extends Component {
    constructor(props) {
        
        super(props);
        this.state = {
            headers: [
                {
                    id: 1,
                    logoweb: "assets/img/slider/logo.webp",
                    names: "Home",
                }
            ],
            ourservice: [
                {
                    id: 1,
                    classnames: 'heading',
                    title: 'OUR SERVICES',
                }
            ],
            leading: [
                {
                    id: 1,
                    classnames: 'heading text-white',
                    title: 'LEADING APPAREL MANUFACTURE'
                }
            ],
            choose: [
                {
                    id: 1,
                    classnames: 'heading',
                    title: 'WHY CHOOSE US?'
                }
            ],

            active_chat: true,
        }

        const activeChat = () => {
    if (window.scrollY > 50) {
      //setActiveChat(true);
      //AOS.init();
        this.setState({active_chat: true});
        
    }
  };

  window.addEventListener("scroll", activeChat);
    }
    render() {
        return (
            <>
                <Helmet>
        <title>KW GROUP | Home</title>
        <meta
          name="description"
          content="A global leader in apparel manufacturing and outsourcing."
        />
        <link rel="canonical" href="/" />
      </Helmet>
            <div className="header-fixed page no-sidebar header-style-3 topbar-style-3 site-header-absolute menu-has-search">
                <div id="wrapper" className="animsition">
                    <div id="page" className="clearfix">
                        <div id="site-header-wrap">
                            <TopBar />
                            {
                                this.state.headers.map((data,idx) =>(
                                    <Header data={data} key={idx}/>
                                ))
                            }
                        </div>
                        <div id="main-content" className="site-main clearfix">
                            <div id="content-wrap">
                                <div id="site-content" className="site-content clearfix">
                                    <div id="inner-content" className="inner-content-wrap">
                                        <div className="page-content">
                                            <div className="rev_slider_wrapper fullwidthbanner-container">
                                                <div id="rev-slider2" className="rev_slider fullwidthabanner">
                                                    <Slider/>
                                                </div>
                                                </div>
                                                {this.state.active_chat===true && <>
                                            {/* <LazyLoad height={200} offset={0} once={true}> */}
                                            <div className="row-services">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="themesflat-spacer clearfix" data-desktop={60} data-mobile={60} data-smobile={60} />
                                                            {
                                                                this.state.ourservice.map(data => (
                                                                    <TitleHeading data={data} key={data.id}/>
                                                                ))
                                                            }
                                                            <div className="themesflat-spacer clearfix" data-desktop="27" data-mobile="35" data-smobile="35"></div>
                                                            <SliderService />
                                                            <div className="themesflat-spacer clearfix" data-desktop={45} data-mobile={60} data-smobile={60} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row-iconbox bg-row-2">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="themesflat-spacer clearfix" data-desktop={60} data-mobile={60} data-smobile={60} />
                                                            {
                                                                this.state.leading.map(data => (
                                                                    <TitleHeading data={data} key={data.id}/>
                                                                ))
                                                            }
                                                            <div className="themesflat-spacer clearfix" data-desktop={25} data-mobile={35} data-smobile={35} />
                                                            <IconBox />
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <div className="themesflat-spacer clearfix" data-desktop={80} data-mobile={60} data-smobile={60} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>                
                                            <div className="row-whyus">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="themesflat-spacer clearfix" data-desktop={61} data-mobile={60} data-smobile={60} />
                                                            {
                                                                this.state.choose.map(data => (
                                                                    <TitleHeading data={data} key={data.id}/>
                                                                ))
                                                            }
                                                            <div className="themesflat-spacer clearfix" data-desktop={29} data-mobile={35} data-smobile={35} />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <Progress />
                                                        {/* <Accordion /> */}
                                                        <img src="assets/img/slider/accordion1.webp" className='whychooseus_img' alt="accordion" style={{width: '600px', height: '280px', objectFit: 'cover'}} />
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="themesflat-spacer clearfix" data-desktop={76} data-mobile={60} data-smobile={60} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <Request /> */}
                                            <div className="row-project clearfix">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="themesflat-spacer clearfix" data-desktop={60} data-mobile={60} data-smobile={60} />
                                                            <div className="position-relative">
                                                                <div className="themesflat-headings style-1 clearfix">
                                                                    <h2 className="heading ">OUR MACHINERIES</h2>
                                                                </div>
                                                                {/* <ul className="themesflat-filter style-1 filter-absolute clearfix">
                                                                    <li className="active">
                                                                        <Link to="#" data-filter="*">All</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#" data-filter=".green">GREEN HOUSE</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#" data-filter=".architecture">ARCHITECTURE </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#" data-filter=".construction">CONSTRUCTION </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#" data-filter=".villa">VILLA</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#" data-filter=".building">BUILDING</Link>
                                                                    </li>
                                                                </ul> */}
                                                            </div>                 
                                                            <div className="themesflat-spacer clearfix" data-desktop={40} data-mobile={35} data-smobile={35} />
                                                            <TabProject />
                                                            <div className="button-wrap has-icon icon-left size-14 pf21 text-center">
                                                            <a href="/machineries" className="themesflat-button bg-accent pd32"><span>LOAD MORE <span className="icon"><i className="ion-load-c" /></span></span></a>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* products */}
                                            <div className="row-project clearfix">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="themesflat-spacer clearfix" data-desktop={60} data-mobile={60} data-smobile={60} />
                                                            <div className="position-relative">
                                                                <div className="themesflat-headings style-1 clearfix">
                                                                    <h2 className="heading ">OUR PRODUCTS</h2>
                                                                </div>
                                                                {/* <ul className="themesflat-filter style-1 filter-absolute clearfix">
                                                                    <li className="active">
                                                                        <Link to="#" data-filter="*">All</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#" data-filter=".green">GREEN HOUSE</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#" data-filter=".architecture">ARCHITECTURE </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#" data-filter=".construction">CONSTRUCTION </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#" data-filter=".villa">VILLA</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#" data-filter=".building">BUILDING</Link>
                                                                    </li>
                                                                </ul> */}
                                                            </div>                 
                                                            <div className="themesflat-spacer clearfix" data-desktop={40} data-mobile={35} data-smobile={35} />
                                                            <TabProduct/>
                                                            <div className="button-wrap has-icon icon-left size-14 pf21 text-center">
                                                            <a href="/products" className="themesflat-button bg-accent pd32"><span>LOAD MORE <span className="icon"><i className="ion-load-c" /></span></span></a>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <Partner />
                                            <Testimonial />
                                                    {/* </LazyLoad> */}
                                                    </>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer />
                        {
                            this.state.headers.map((data,idx) =>(
                                <BottomBar data={data} key={idx}/>
                            ))
                        }
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Home02;