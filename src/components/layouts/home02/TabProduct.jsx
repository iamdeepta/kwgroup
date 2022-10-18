import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { SRLWrapper } from "simple-react-lightbox";

class TabProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    id: 1,
                    classnames: 'project-item green villa',
                    srcimg: 'assets/img/slider/kid_jacket.webp',
                    heading: 'KIDS JACKET',
                    // name01: 'CYLINDER BED, TOP & BOTTOM COMPOUND',
                    // name02: 'FEEDING MACHINE'
                },
                {
                    id: 2,
                    classnames: 'project-item architecture building construction',
                    srcimg: 'assets/img/slider/women_jacket.webp',
                    heading: 'WOMEN JACKET',
                    // name01: 'Architecture',
                    // name02: ''
                },
                {
                    id: 3,
                    classnames: 'project-item villa architecture building construction',
                    srcimg: 'assets/img/slider/men_jacket.webp',
                    heading: 'MEN JACKET',
                    // name01: 'Green House',
                    // name02: 'Villa'
                },
                {
                    id: 4,
                    classnames: 'project-item green villa',
                    srcimg: 'assets/img/slider/men_activewear.webp',
                    heading: 'MEN ACTIVEWEAR',
                    // name01: 'Green House',
                    // name02: 'Villa'
                },
                {
                    id: 5,
                    classnames: 'project-item architecture building construction',
                    srcimg: 'assets/img/slider/women_activewear.webp',
                    heading: 'WOMEN ACTIVEWEAR',
                    // name01: 'Architecture',
                    // name02: ''
                },
                {
                    id: 6,
                    classnames: 'project-item green',
                    srcimg: 'assets/img/slider/totalneck_activewear.webp',
                    heading: 'TOTALNECK ACTIVEWEAR',
                    // name01: 'Green House',
                    // name02: 'Villa'
                },
                {
                    id: 7,
                    classnames: 'project-item green',
                    srcimg: 'assets/img/slider/m7.webp',
                    heading: 'HIGH SPEED DIRECT DRIVE WITH THREE AUTOMATIC FUNCTIONS LOCKSTICH SEWING MACHINE',
                    // name01: 'Green House',
                    // name02: 'Villa'
                },
                {
                    id: 8,
                    classnames: 'project-item green',
                    srcimg: 'assets/img/slider/m8.webp',
                    heading: 'HIGH SPEED ELECTROMAGNETIC COMPUTERIZED OVERLOCK MACHINE(ALL-IN-ONE)',
                    // name01: 'Green House',
                    // name02: 'Villa'
                },
                {
                    id: 9,
                    classnames: 'project-item green',
                    srcimg: 'assets/img/slider/m9.webp',
                    heading: 'SUPER HIGH SPEED DIRECT DRIVE FOUR-THREAD OVERLOCK SEWING MACHINE',
                    // name01: 'Green House',
                    // name02: 'Villa'
                },
                {
                    id: 10,
                    classnames: 'project-item green',
                    srcimg: 'assets/img/slider/m10.webp',
                    heading: 'HIGH ACCURACY AUTOMATIC DOWN & FEATHER FILLING MACHINE',
                    // name01: 'Green House',
                    // name02: 'Villa'
                },
                {
                    id: 11,
                    classnames: 'project-item green',
                    srcimg: 'assets/img/slider/m11.webp',
                    heading: 'RICHPEACE COMPUTERIZED MULTI-NEEDLE CHAIN STITCH QUILTING MACHINE',
                    // name01: 'Green House',
                    // name02: 'Villa'
                }
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
            <div className="themesflat-project style-2 isotope-project has-margin mg15 data-effect clearfix">
                {
                this.state.projects.slice(0,6).map(data =>(
                <div className={data.classnames} key={data.id}>
                    <div className="inner">
                        <div className="thumb data-effect-item has-effect-icon w40 offset-v-19 offset-h-49">
                            <img src={data.srcimg} alt="altimage" style={{width: '100%', height: '270px', objectFit: 'cover'}} />
                            <div className="elm-link">
                                    <Link to={data.srcimg} className="icon-1 icon-search">
                                        
                                            <img src={data.srcimg} alt="altimage" style={{ width: '50px', height: '40px', opacity: '0', position: 'absolute', top: 0, left: 0 }} />
                                           
                                    </Link>
                                    {/* <Link to="#" className="icon-1" /> */}
                            </div>
                            <div className="overlay-effect bg-color-3" />
                        </div>
                        <div className="text-wrap" style={{height: '50px'}}>
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

export default (TabProduct);