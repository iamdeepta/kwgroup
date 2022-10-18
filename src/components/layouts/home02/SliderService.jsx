import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SliderService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slider: [
                {
                    id: 1,
                    srcimg: 'assets/img/slider/dyeing.webp',
                    heading: 'DYEING',
                    text: 'Our dyeing section is well equipped with all required machineries to handle 35000kg per day. '
                },
                {
                    id: 2,
                    srcimg: 'assets/img/slider/cutting.webp',
                    heading: 'CUTTING',
                    text: 'We adapt easily to different production requirements for mass, diversified, small and medium range production.'
                },
                {
                    id: 3,
                    srcimg: 'assets/img/slider/printing.webp',
                    heading: 'PRINTING',
                    text: 'Our state of the art printing facility can cater to more than 150000 pieces per day.'
                },
                {
                    id: 4,
                    srcimg: 'assets/img/slider/sewing.webp',
                    heading: 'SEWING',
                    text: 'We have sophisticated controlled machines to satisfy your needs with integrated systems, GSD & ERP & Advanced Production Planning.'
                },
                {
                    id: 5,
                    srcimg: 'assets/img/slider/quality.webp',
                    heading: 'QUALITY ASSURANCE',
                    text: `Our QC Officers make sure that all the parameters followed according to the clients' specification`
                },
                // {
                //     id: 6,
                //     srcimg: 'assets/img/imagebox/image-box-3-370x215.jpg',
                //     heading: 'METAL BUILDING SERVICES',
                //     text: 'In the past decade alone, we have completed more than 5 million square feet of metal building...'
                // }
            ]
        }
    }
    
    render() {
        return (
            <div className="themesflat-carousel-box has-arrows arrow-center offset-v-111 offset-h-21 arrow-circle arrow-style-2 data-effect clearfix"
                data-gap={30} data-column={3} data-column2={2} data-column3={1} data-auto="true">
                <div className="owl-carousel owl-theme owl-carousel-services">
                    {
                        this.state.slider.map(data =>(
                            <div className="themesflat-image-box style-2 clearfix" key={data.id}>
                                <div className="image-box-item">
                                    <div className="inner">
                                        <div className="thumb data-effect-item">
                                            <img src={data.srcimg} alt="altimage" />
                                            <div className="overlay-effect bg-color-accent" />
                                        </div>
                                        <div className="text-wrap">
                                            <h5 className="heading"><Link to="#">{data.heading}</Link></h5>
                                            <p>{data.text}</p>
                                            <div className="elm-readmore">
                                                <a href={"/services-detail-"+data.id}>DETAILS</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }             
                </div>
            </div>
        );
    }
}

export default SliderService;