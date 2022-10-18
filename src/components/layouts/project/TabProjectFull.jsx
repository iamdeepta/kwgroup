import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SRLWrapper } from "simple-react-lightbox";
class TabProjectFull extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    id: 1,
                    classnames: 'project-item jacket',
                    srcimg: 'assets/img/slider/kid_jacket.webp',
                    heading: 'LAKE MEADOWS APARTMENTS',
                    name01: 'Architecture',
                    name02: 'Building'
                },
                {
                    id: 2,
                    classnames: 'project-item jacket',
                    srcimg: 'assets/img/slider/women_jacket.webp',
                    heading: 'LAKE MEADOWS APARTMENTS',
                    name01: 'Architecture',
                    name02: 'Building'
                },
                {
                    id: 3,
                    classnames: 'project-item jacket',
                    srcimg: 'assets/img/slider/men_jacket.webp',
                    heading: 'LAKE MEADOWS APARTMENTS',
                    name01: 'Architecture',
                    name02: 'Building'
                },
                {
                    id: 4,
                    classnames: 'project-item jacket',
                    srcimg: 'assets/img/slider/jacket1.webp',
                    heading: 'LAKE MEADOWS APARTMENTS',
                    name01: 'Architecture',
                    name02: 'Building'
                },
                {
                    id: 5,
                    classnames: 'project-item jacket',
                    srcimg: 'assets/img/slider/jacket2.webp',
                    heading: 'LAKE MEADOWS APARTMENTS',
                    name01: 'Architecture',
                    name02: 'Building'
                },
                {
                    id: 6,
                    classnames: 'project-item jacket',
                    srcimg: 'assets/img/slider/jacket3.webp',
                    heading: 'LAKE MEADOWS APARTMENTS',
                    name01: 'Architecture',
                    name02: 'Building'
                },
                {
                    id: 7,
                    classnames: 'project-item jacket',
                    srcimg: 'assets/img/slider/jacket4.webp',
                    heading: 'LAKE MEADOWS APARTMENTS',
                    name01: 'Architecture',
                    name02: 'Building'
                },
                {
                    id: 8,
                    classnames: 'project-item jacket',
                    srcimg: 'assets/img/slider/jacket5.webp',
                    heading: 'LAKE MEADOWS APARTMENTS',
                    name01: 'Architecture',
                    name02: 'Building'
                },
                {
                    id: 9,
                    classnames: 'project-item jacket',
                    srcimg: 'assets/img/slider/jacket6.webp',
                    heading: 'LAKE MEADOWS APARTMENTS',
                    name01: 'Architecture',
                    name02: 'Building'
                },
                {
                    id: 10,
                    classnames: 'project-item jacket',
                    srcimg: 'assets/img/slider/jacket7.webp',
                    heading: 'LAKE MEADOWS APARTMENTS',
                    name01: 'Architecture',
                    name02: 'Building'
                },
                {
                    id: 11,
                    classnames: 'project-item jacket',
                    srcimg: 'assets/img/slider/jacket8.webp',
                    heading: 'LAKE MEADOWS APARTMENTS',
                    name01: 'Architecture',
                    name02: 'Building'
                },
                {
                    id: 12,
                    classnames: 'project-item jacket',
                    srcimg: 'assets/img/slider/jacket9.webp',
                    heading: 'LAKE MEADOWS APARTMENTS',
                    name01: 'Architecture',
                    name02: 'Building'
                },
                {
                    id: 13,
                    classnames: 'project-item activewear',
                    srcimg: 'assets/img/slider/men_activewear.webp',
                    heading: 'LAKE MEADOWS APARTMENTS',
                    name01: 'Architecture',
                    name02: 'Building'
                },
                {
                    id: 14,
                    classnames: 'project-item activewear',
                    srcimg: 'assets/img/slider/women_activewear.webp',
                    heading: 'LAKE MEADOWS APARTMENTS',
                    name01: 'Architecture',
                    name02: 'Building'
                },
                {
                    id: 15,
                    classnames: 'project-item activewear',
                    srcimg: 'assets/img/slider/totalneck_activewear.webp',
                    heading: 'LAKE MEADOWS APARTMENTS',
                    name01: 'Architecture',
                    name02: 'Building'
                },
                {
                    id: 16,
                    classnames: 'project-item ski',
                    srcimg: 'assets/img/slider/ski1.webp',
                    heading: 'LAKE MEADOWS APARTMENTS',
                    name01: 'Architecture',
                    name02: 'Building'
                },
                {
                    id: 17,
                    classnames: 'project-item ski',
                    srcimg: 'assets/img/slider/ski2.webp',
                    heading: 'LAKE MEADOWS APARTMENTS',
                    name01: 'Architecture',
                    name02: 'Building'
                },
                
                {
                    id: 18,
                    classnames: 'project-item workwear',
                    srcimg: 'assets/img/slider/workwear1.webp',
                    heading: 'LAKE MEADOWS APARTMENTS',
                    name01: 'Architecture',
                    name02: 'Building'
                },
                {
                    id: 19,
                    classnames: 'project-item workwear',
                    srcimg: 'assets/img/slider/workwear2.webp',
                    heading: 'LAKE MEADOWS APARTMENTS',
                    name01: 'Architecture',
                    name02: 'Building'
                },
                {
                    id: 20,
                    classnames: 'project-item workwear',
                    srcimg: 'assets/img/slider/workwear3.webp',
                    heading: 'LAKE MEADOWS APARTMENTS',
                    name01: 'Architecture',
                    name02: 'Building'
                },
                {
                    id: 21,
                    classnames: 'project-item swimshort',
                    srcimg: 'assets/img/slider/short1.webp',
                    heading: 'LAKE MEADOWS APARTMENTS',
                    name01: 'Architecture',
                    name02: 'Building'
                },
                {
                    id: 22,
                    classnames: 'project-item swimshort',
                    srcimg: 'assets/img/slider/short2.webp',
                    heading: 'LAKE MEADOWS APARTMENTS',
                    name01: 'Architecture',
                    name02: 'Building'
                },
                
                {
                    id: 23,
                    classnames: 'project-item denim',
                    srcimg: 'assets/img/slider/denim1.webp',
                    heading: 'LAKE MEADOWS APARTMENTS',
                    name01: 'Architecture',
                    name02: 'Building'
                },
                {
                    id: 24,
                    classnames: 'project-item denim',
                    srcimg: 'assets/img/slider/denim2.webp',
                    heading: 'LAKE MEADOWS APARTMENTS',
                    name01: 'Architecture',
                    name02: 'Building'
                },
                {
                    id: 25,
                    classnames: 'project-item denim',
                    srcimg: 'assets/img/slider/denim3.webp',
                    heading: 'LAKE MEADOWS APARTMENTS',
                    name01: 'Architecture',
                    name02: 'Building'
                },
                {
                    id: 26,
                    classnames: 'project-item denim',
                    srcimg: 'assets/img/slider/denim4.webp',
                    heading: 'LAKE MEADOWS APARTMENTS',
                    name01: 'Architecture',
                    name02: 'Building'
                },
            ]
        }
    }
    render() {
        const options = {
    settings: {
      autoplaySpeed: 3000,
      boxShadow: "none",
      caption: "",
      disableKeyboardControls: false,
      disablePanzoom: false,
      disableWheelControls: true,
      hideControlsAfter: false,
      lightboxTransitionSpeed: 0.3,
      lightboxTransitionTimingFunction: "linear",
      overlayColor: "rgba(30, 30, 30, 0.9)",
      slideAnimationType: "slide",
      slideSpringValues: [300, 50],
      slideTransitionSpeed: 0.6,
      slideTransitionTimingFunction: "linear",
      usingPreact: false,
    },
    caption: {},
    buttons: {},
    thumbnails: { showThumbnails: false },
    progressBar: {},
    translations: {}, // PRO ONLY
    icons: {}, // PRO ONLY
  };
        return (
            <SRLWrapper options={options}>
            <div className="themesflat-project style-1 isotope-project has-margin mg15 w25 data-effect clearfix">
                {
                this.state.projects.map(data =>(
                <div className={data.classnames} key={data.id}>
                    <div className="inner">
                        <div className="thumb data-effect-item has-effect-icon w40 offset-v-19 offset-h-49">
                            <img src={data.srcimg} alt="altimage" style={{width:'100%', height: '300px', objectFit: 'cover'}} />
                            <div className="elm-link">
                                <Link to={data.srcimg} className="icon-1 icon-search">
                                        
                                            <img src={data.srcimg} alt="altimage" style={{ width: '50px', height: '40px', opacity: '0', position: 'absolute', top: 0, left: 0 }} />
                                           
                                    </Link>
                                    {/* <Link to="#" className="icon-1" /> */}
                            </div>
                            <div className="overlay-effect bg-color-3" />
                        </div>
                        <div className="text-wrap">
                            <h5 className="heading">
                                <Link to="#">{data.heading}</Link>
                            </h5>
                            <div className="elm-meta">
                                <span>
                                    <Link to="#">{data.name01}</Link></span>
                                <span>
                                    <Link to="#">{data.name01}</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
                ))
                }
                </div>
                </SRLWrapper>
        );
    }
}

export default TabProjectFull;