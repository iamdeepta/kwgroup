import React, { Component } from 'react';
import { Link,withRouter } from 'react-router-dom';
import bannerhome1 from './data_banner';
import bannerhome2 from '../home02/data_banner';

class Slider extends Component {

    render() {
        const { location } = this.props;
        const mainContent = () =>{
            if(location.pathname === "/"){
                return(
                    <>
                        {
                            bannerhome1.map(data =>(
                                <li data-transition="random" key={data.id}>
                                    <div className='banner_overlay' style={{position:'absolute',top:'0',bottom:'0',left:'0',background:'rgb(0.5,0.5,0.5,0.7)',height: '100%', width: '100%', zIndex: 2}}></div>
                                    <img src={data.srcimg} alt="altimage" data-bgposition="center center" data-no-retina />
                                    <div style={{zIndex: 3}} className={data.classnames} data-x={data.datax} data-hoffset={data.datahset} data-y="['middle','middle','middle','middle']" data-voffset={data.datavset1} data-fontsize="['20','20','20','16']" data-lineheight="['70','70','40','24']" data-width="full" data-height="none" data-whitespace="normal" data-transform_idle="o:1;" data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_in="x:0px;y:[100%];" data-mask_out="x:inherit;y:inherit;" data-start={700} data-splitin="none" data-splitout="none" data-responsive_offset="on">
                                        A GLOBAL LEADER IN APPAREL MANUFACTURING & OUTSOURCING
                                    </div>
                                    <div style={{zIndex: 3, marginTop: '20px'}} className={data.classtext} data-x={data.datax} data-hoffset={data.datahset} data-y="['middle','middle','middle','middle']" data-voffset={data.datavset2} data-fontsize="['52','52','42','32']" data-lineheight="['65','65','45','35']" data-width="full" data-height="none" data-whitespace="normal" data-transform_idle="o:1;" data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_in="x:0px;y:[100%];" data-mask_out="x:inherit;y:inherit;" data-start={1000} data-splitin="none" data-splitout="none" data-responsive_offset="on">
                                        OUTSOURCE YOUR NEXT TEXTILE NEEDS
                                    </div>
                                    {/* <div className={data.classtext} data-x={data.datax} data-hoffset={data.datahset} data-y="['middle','middle','middle','middle']" data-voffset={data.datavset3} data-fontsize="['52','52','42','32']" data-lineheight="['65','65','45','35']" data-width="full" data-height="none" data-whitespace="normal" data-transform_idle="o:1;" data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_in="x:0px;y:[100%];" data-mask_out="x:inherit;y:inherit;" data-start={1000} data-splitin="none" data-splitout="none" data-responsive_offset="on">
                                        TO TAKE CARE OF YOUR WORK
                                    </div> */}
                                    <div style={{zIndex: 3}} className={data.classbtn} data-x={data.datax} data-hoffset={data.datahset} data-y="['middle','middle','middle','middle']" data-voffset={data.datavset} data-width="full" data-height="none" data-whitespace="normal" data-transform_idle="o:1;" data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_in="x:0px;y:[100%];" data-mask_out="x:inherit;y:inherit;" data-start={1000} data-splitin="none" data-splitout="none" data-responsive_offset="on">
                                        <a style={{zIndex: 3}} href="tel: +88028411765" className="themesflat-button bg-accent big"><span>GET IN TOUCH</span></a>
                                    </div>
                                </li>
                            ))
                        }
                    </>
                )
            }else if(location.pathname === "/home-02"){
                return(
                    <>
                        {
                            bannerhome2.map(data =>(
                                <li data-transition="random" key={data.id} style={{position: 'relative'}}>
                                    <div className='banner_overlay' style={{position:'absolute',top:'0',bottom:'0',left:'0',background:'rgb(0.5,0.5,0.5,0.7)',height: '100%', width: '100%', zIndex: 2}}></div>
                                    <img src={data.srcimg} alt="altimage" data-bgposition="center center" data-no-retina />
                                    <div style={{zIndex: 3}} className={data.classnames} data-x={data.datax} data-hoffset={data.datahset} data-y="['middle','middle','middle','middle']" data-voffset={data.datavset1} data-fontsize="['20','20','20','16']" data-lineheight="['70','70','40','24']" data-width="full" data-height="none" data-whitespace="normal" data-transform_idle="o:1;" data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_in="x:0px;y:[100%];" data-mask_out="x:inherit;y:inherit;" data-start={700} data-splitin="none" data-splitout="none" data-responsive_offset="on">
                                        A GLOBAL LEADER IN APPAREL MANUFACTURING & OUTSOURCING
                                    </div>
                                    <div style={{zIndex: 3,marginTop: '20px'}} className={data.classtext} data-x={data.datax} data-hoffset={data.datahset} data-y="['middle','middle','middle','middle']" data-voffset={data.datavset2} data-fontsize="['52','52','42','32']" data-lineheight="['65','65','45','35']" data-width="full" data-height="none" data-whitespace="normal" data-transform_idle="o:1;" data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_in="x:0px;y:[100%];" data-mask_out="x:inherit;y:inherit;" data-start={1000} data-splitin="none" data-splitout="none" data-responsive_offset="on">
                                        OUTSOURCE YOUR NEXT TEXTILE NEEDS
                                    </div>
                                    {/* <div className={data.classtext} data-x={data.datax} data-hoffset={data.datahset} data-y="['middle','middle','middle','middle']" data-voffset={data.datavset3} data-fontsize="['52','52','42','32']" data-lineheight="['65','65','45','35']" data-width="full" data-height="none" data-whitespace="normal" data-transform_idle="o:1;" data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_in="x:0px;y:[100%];" data-mask_out="x:inherit;y:inherit;" data-start={1000} data-splitin="none" data-splitout="none" data-responsive_offset="on">
                                        TO TAKE CARE OF YOUR WORK
                                    </div> */}
                                    <div style={{zIndex: 3}} className={data.classbtn} data-x={data.datax} data-hoffset={data.datahset} data-y="['middle','middle','middle','middle']" data-voffset={data.datavset} data-width="full" data-height="none" data-whitespace="normal" data-transform_idle="o:1;" data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_in="x:0px;y:[100%];" data-mask_out="x:inherit;y:inherit;" data-start={1000} data-splitin="none" data-splitout="none" data-responsive_offset="on">
                                        <a style={{zIndex: 3}} href="tel: +88028411765" className="themesflat-button bg-accent big"><span>GET IN TOUCH</span></a>
                                    </div>
                                </li>
                            ))
                        }
                    </>
                )
            }
        }
        return (
            
            <ul>             
                    {mainContent()}   
            </ul>
        );
    }
}

export default withRouter (Slider);