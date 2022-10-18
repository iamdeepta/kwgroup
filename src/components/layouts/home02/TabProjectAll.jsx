import React, { Component } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { SRLWrapper } from "simple-react-lightbox";

class TabProjectAll extends Component {
    // const { pathname } = useLocation();

    constructor(props) {
        
        super(props);
        this.state = {
            projects: [
                {
                    id: 1,
                    classnames: 'project-item green villa',
                    srcimg: 'assets/img/slider/m1.webp',
                    heading: 'CUFF STITCH & BOTTOM HEMMING CYLINDER BED, TOP & BOTTOM COMPOUND',
                    // name01: 'CYLINDER BED, TOP & BOTTOM COMPOUND',
                    // name02: 'FEEDING MACHINE'
                },
                {
                    id: 2,
                    classnames: 'project-item architecture building construction',
                    srcimg: 'assets/img/slider/m2.webp',
                    heading: 'SINGLE NEEDLE FOR PARTS JOINT WITH BINDER SIDE CUTTER, TOP & BOTTOM COMPOUND FEEDING',
                    // name01: 'Architecture',
                    // name02: ''
                },
                {
                    id: 3,
                    classnames: 'project-item villa architecture building construction',
                    srcimg: 'assets/img/slider/m3.webp',
                    heading: 'SUPER HIGH SPEED DIRECT DRIVE FOUR-THREAD OVERLOCK SEWING MACHINE',
                    // name01: 'Green House',
                    // name02: 'Villa'
                },
                {
                    id: 4,
                    classnames: 'project-item green villa',
                    srcimg: 'assets/img/slider/m4.webp',
                    heading: 'STEPPING MOTOR FEEDING ELECTRONIC LOCKSTITCH MACHINE',
                    // name01: 'Green House',
                    // name02: 'Villa'
                },
                {
                    id: 5,
                    classnames: 'project-item architecture building construction',
                    srcimg: 'assets/img/slider/m5.webp',
                    heading: 'LOW VIBRATION DIRECT DRIVE LOCKSTITCH MACHINE',
                    // name01: 'Architecture',
                    // name02: ''
                },
                {
                    id: 6,
                    classnames: 'project-item green',
                    srcimg: 'assets/img/slider/m6.webp',
                    heading: 'HIGH SPEED DIRECT DRIVE DOUBLE-NEEDLE AUTO LUBRICATION LOCKSTITCH MACHINE',
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
                this.state.projects.map(data =>(
                <div className={data.classnames} key={data.id}>
                    <div className="inner">
                        <div className="thumb data-effect-item has-effect-icon w40 offset-v-19 offset-h-49">
                            <img src={data.srcimg} alt="altimage" style={{width: '380px', height: '200px'}} />
                            <div className="elm-link">
                                <a href={data.srcimg} className="icon-1 icon-search" alt="machineimages" style={{position: 'relative'}}><img src={data.srcimg} alt="altimage" style={{width: '50px', height: '40px', opacity: '0', position:'absolute', top: 0, left: 0}} /></a>
                                    {/* <Link to="#" className="icon-1" /> */}
                            </div>
                            <div className="overlay-effect bg-color-3" />
                        </div>
                        <div className="text-wrap" style={{height: '120px'}}>
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

export default (TabProjectAll);