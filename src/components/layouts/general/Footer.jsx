import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Footer extends Component {
    render() {

        const window_width = window.innerWidth <= 600 ? 'none' : 'inherit';
        return (
            <footer id="footer" className="clearfix">
                <div id="footer-widgets" className="container">
                    <div className="themesflat-row gutter-30">
                        <div className="col span_1_of_3">
                            <div className="widget widget_text">
                                <div className="textwidget">
                                    <p style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                                        <img src="assets/img/slider/logo.webp" alt="imagealt" width={50} height={39} /><span style={{fontSize: '20px', color: 'white', fontWeight: '600', marginLeft: '10px',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>KW GROUP</span>
                                    </p>
                                    <p className="margin-bottom-15">We have over 22 years of experience able to help you 24 hours a
                                        day.</p>
                                    <ul>
                                        <li>
                                            <div className="inner">
                                                <span className="fa fa-map-marker" />
                                                <span className="text">House#424, Road#07, DOHS Baridhara, Dhaka, Bangladesh </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="inner">
                                                <span className="fa fa-phone" />
                                                <span className="text">CALL US : +88-02-8411765</span>
                                            </div>
                                        </li>
                                        <li className="margin-top-7">
                                            <div className="inner">
                                                <span className=" font-size-14 fa fa-envelope" />
                                                <span className="text">info@kwgroup-bd.com</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>{/* /.widget_text */}
                            <div className="themesflat-spacer clearfix" data-desktop={0} data-mobile={0} data-smobile={35} />
                        </div>{/* /.col */}
                        <div className="col span_1_of_3" style={{opacity: '0', display: window_width}}>
                            <div className="themesflat-spacer clearfix" data-desktop={0} data-mobile={0} data-smobile={0} />
                            <div className="widget widget_lastest">
                                <h2 className="widget-title"><span>RECENT POSTS</span></h2>
                                <ul className="lastest-posts data-effect clearfix">
                                    <li className="clearfix">
                                        <div className="thumb data-effect-item has-effect-icon">
                                            <img src="assets/img/news/post-1-65x65.jpg" alt="imagealt" />
                                            <div className="overlay-effect bg-color-2" />
                                            <div className="elm-link">
                                                <Link to="page-blog-single.html" className="icon-2" />
                                            </div>
                                        </div>
                                        <div className="text">
                                            <h3><Link to="page-blog-single.html">SMART BUILDING WITH CONCRETE SUSTAINABLE</Link></h3>
                                            <span className="post-date"><span className="entry-date">29 June 2018</span></span>
                                        </div>
                                    </li>
                                    <li className="clearfix">
                                        <div className="thumb data-effect-item has-effect-icon">
                                            <img src="assets/img/news/post-2-65x65.jpg" alt="imagealt" />
                                            <div className="overlay-effect bg-color-2" />
                                            <div className="elm-link">
                                                <Link to="page-blog-single.html" className="icon-2" />
                                            </div>
                                        </div>
                                        <div className="text">
                                            <h3><Link to="page-blog-single.html">HI-TECH WOODEN HOUSE BUILT WITHOUT GLUE</Link></h3>
                                            <span className="post-date"><span className="entry-date">31 June 2018</span></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col span_1_of_3" style={{opacity: '0', display: window_width}}>
                            <div className="themesflat-spacer clearfix" data-desktop={0} data-mobile={35} data-smobile={35} />
                            <div className="widget widget_tags">
                                <h2 className="widget-title margin-bottom-30"><span>TAGS</span></h2>
                                <div className="tags-list">
                                    <Link to="#">Building</Link>
                                    <Link to="#">Smart House</Link>
                                    <Link to="#">Costruction</Link>
                                    <Link to="#">Villa</Link>
                                    <Link to="#">Residential</Link>
                                    <Link to="#">Interior</Link>
                                    <Link to="#">Resort</Link>
                                    <Link to="#">Commercial</Link>
                                </div>
                            </div>
                        </div>{/* /.col */}
                        <div className="col span_1_of_3">
                            <div className="themesflat-spacer clearfix" data-desktop={0} data-mobile={35} data-smobile={35} />
                            {window.innerWidth > 600 ?
                                <>
                                    <div className="widget widget_instagram" style={{ marginTop: '30px'}}>
                                <h2 className="widget-title margin-bottom-30"><a href='/'>HOME</a></h2>
                                <h2 className="widget-title margin-bottom-30"><a href='/machineries'>MACHINERIES</a></h2>
                                        <h2 className="widget-title margin-bottom-30"><a href='/products'>PRODUCTS</a></h2>
                                        <h2 className="widget-title margin-bottom-30" ><a href='/careers'>CAREERS</a></h2>
                                <h2 className="widget-title margin-bottom-30"><a href='/contact-01'>CONTACT</a></h2>
                                {/* <div className="instagram-wrap data-effect clearfix col3 g10">
                                    <div className="instagram_badge_image has-effect-icon">
                                        <Link to="#" target="_blank" className="data-effect-item">
                                            <span className="item"><img src="assets/img/instagram/instagram-1-83x83.jpg"
                                                    alt="imagealt" /></span>
                                            <div className="overlay-effect bg-color-2" />
                                            <div className="elm-link">
                                                <span className="icon-3" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="instagram_badge_image has-effect-icon">
                                        <Link to="#" target="_blank" className="data-effect-item">
                                            <span className="item"><img src="assets/img/instagram/instagram-2-83x83.jpg"
                                                    alt="imagealt" /></span>
                                            <div className="overlay-effect bg-color-2" />
                                            <div className="elm-link">
                                                <span className="icon-3" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="instagram_badge_image has-effect-icon">
                                        <Link to="#" target="_blank" className="data-effect-item">
                                            <span className="item"><img src="assets/img/instagram/instagram-3-83x83.jpg"
                                                    alt="imagealt" /></span>
                                            <div className="overlay-effect bg-color-2" />
                                            <div className="elm-link">
                                                <span className="icon-3" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="instagram_badge_image has-effect-icon">
                                        <Link to="#" target="_blank" className="data-effect-item">
                                            <span className="item"><img src="assets/img/instagram/instagram-4-83x83.jpg"
                                                    alt="imagealt" /></span>
                                            <div className="overlay-effect bg-color-2" />
                                            <div className="elm-link">
                                                <span className="icon-3" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="instagram_badge_image has-effect-icon">
                                        <Link to="#" target="_blank" className="data-effect-item">
                                            <span className="item"><img src="assets/img/instagram/instagram-5-83x83.jpg"
                                                    alt="imagealt" /></span>
                                            <div className="overlay-effect bg-color-2" />
                                            <div className="elm-link">
                                                <span className="icon-3" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="instagram_badge_image has-effect-icon">
                                        <Link to="#" target="_blank" className="data-effect-item">
                                            <span className="item"><img src="assets/img/instagram/instagram-6-83x83.jpg"
                                                    alt="imagealt" /></span>
                                            <div className="overlay-effect bg-color-2" />
                                            <div className="elm-link">
                                                <span className="icon-3" />
                                            </div>
                                        </Link>
                                    </div>
                                </div> */}
                            </div>
                            </>
                                :
                                <>
                                    <div className="widget widget_instagram" style={{ marginTop: '0px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap',gap:'60px' }}>
                                <div>
                                        <h2 className="widget-title margin-bottom-30" ><a href='/'>HOME</a></h2>
                                            <h2 className="widget-title margin-bottom-30" ><a href='/machineries'>MACHINERIES</a></h2>
                                            <h2 className="widget-title margin-bottom-30" ><a href='/products'>PRODUCTS</a></h2>
                                        </div>
                                        <div style={{textAlign: 'right'}}>
                                            
                                            <h2 className="widget-title margin-bottom-30" ><a href='/careers'>CAREERS</a></h2>
                                            <h2 className="widget-title margin-bottom-30" ><a href='/contact-01'>CONTACT</a></h2>
                                            </div>
                                {/* <div className="instagram-wrap data-effect clearfix col3 g10">
                                    <div className="instagram_badge_image has-effect-icon">
                                        <Link to="#" target="_blank" className="data-effect-item">
                                            <span className="item"><img src="assets/img/instagram/instagram-1-83x83.jpg"
                                                    alt="imagealt" /></span>
                                            <div className="overlay-effect bg-color-2" />
                                            <div className="elm-link">
                                                <span className="icon-3" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="instagram_badge_image has-effect-icon">
                                        <Link to="#" target="_blank" className="data-effect-item">
                                            <span className="item"><img src="assets/img/instagram/instagram-2-83x83.jpg"
                                                    alt="imagealt" /></span>
                                            <div className="overlay-effect bg-color-2" />
                                            <div className="elm-link">
                                                <span className="icon-3" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="instagram_badge_image has-effect-icon">
                                        <Link to="#" target="_blank" className="data-effect-item">
                                            <span className="item"><img src="assets/img/instagram/instagram-3-83x83.jpg"
                                                    alt="imagealt" /></span>
                                            <div className="overlay-effect bg-color-2" />
                                            <div className="elm-link">
                                                <span className="icon-3" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="instagram_badge_image has-effect-icon">
                                        <Link to="#" target="_blank" className="data-effect-item">
                                            <span className="item"><img src="assets/img/instagram/instagram-4-83x83.jpg"
                                                    alt="imagealt" /></span>
                                            <div className="overlay-effect bg-color-2" />
                                            <div className="elm-link">
                                                <span className="icon-3" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="instagram_badge_image has-effect-icon">
                                        <Link to="#" target="_blank" className="data-effect-item">
                                            <span className="item"><img src="assets/img/instagram/instagram-5-83x83.jpg"
                                                    alt="imagealt" /></span>
                                            <div className="overlay-effect bg-color-2" />
                                            <div className="elm-link">
                                                <span className="icon-3" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="instagram_badge_image has-effect-icon">
                                        <Link to="#" target="_blank" className="data-effect-item">
                                            <span className="item"><img src="assets/img/instagram/instagram-6-83x83.jpg"
                                                    alt="imagealt" /></span>
                                            <div className="overlay-effect bg-color-2" />
                                            <div className="elm-link">
                                                <span className="icon-3" />
                                            </div>
                                        </Link>
                                    </div>
                                </div> */}
                                    </div>
                                </>}
                            
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;