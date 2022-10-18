import React, { Component } from 'react';

class Partner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            partner: [
                {
                    id: 1,
                    img: 'assets/img/slider/auchan.webp',
                    imgcolor: 'assets/img/slider/auchan.webp'
                },
                {
                    id: 2,
                    img: 'assets/img/slider/koton.webp',
                    imgcolor: 'assets/img/slider/koton.webp'
                },
                {
                    id: 3,
                    img: 'assets/img/slider/sergio_tacchini.webp',
                    imgcolor: 'assets/img/slider/sergio_tacchini.webp'
                },
                {
                    id: 4,
                    img: 'assets/img/slider/wildcraft.webp',
                    imgcolor: 'assets/img/slider/wildcraft.webp'
                },
                {
                    id: 5,
                    img: 'assets/img/slider/stokomani.webp',
                    imgcolor: 'assets/img/slider/stokomani.webp'
                },
                // {
                //     id: 6,
                //     img: 'assets/img/slider/hnm.png',
                //     imgcolor: 'assets/img/slider/hnm.png'
                // },
                {
                    id: 7,
                    img: 'assets/img/slider/macys.webp',
                    imgcolor: 'assets/img/slider/macys.webp'
                },
                // {
                //     id: 8,
                //     img: 'assets/img/slider/zara.png',
                //     imgcolor: 'assets/img/slider/zara.png'
                // },
                // {
                //     id: 9,
                //     img: 'assets/img/slider/soliver.png',
                //     imgcolor: 'assets/img/slider/soliver.png'
                // },
                // {
                //     id: 10,
                //     img: 'assets/img/slider/vogele.png',
                //     imgcolor: 'assets/img/slider/vogele.png'
                // },
                {
                    id: 11,
                    img: 'assets/img/slider/emirates_logo.webp',
                    imgcolor: 'assets/img/slider/emirates_logo.webp'
                },
                {
                    id: 12,
                    img: 'assets/img/slider/qatar_logo.webp',
                    imgcolor: 'assets/img/slider/qatar_logo.webp'
                },
                {
                    id: 13,
                    img: 'assets/img/slider/unilever_logo.webp',
                    imgcolor: 'assets/img/slider/unilever_logo.webp'
                },
                {
                    id: 14,
                    img: 'assets/img/slider/brac_logo.webp',
                    imgcolor: 'assets/img/slider/brac_logo.webp'
                },
                {
                    id: 15,
                    img: 'assets/img/slider/ipa_logo.webp',
                    imgcolor: 'assets/img/slider/ipa_logo.webp'
                },
                {
                    id: 15,
                    img: 'assets/img/slider/uk_gov_logo.jpg',
                    imgcolor: 'assets/img/slider/uk_gov_logo.jpg'
                }
            ]
        }
    }
    
    render() {
        return (
            <div className="row-partner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="themesflat-spacer clearfix" data-desktop={83} data-mobile={60} data-smobile={60} />
                            <div className="themesflat-carousel-box clearfix" data-gap={5} data-column={5} data-column2={3}
                                data-column3={2} data-auto="true">
                                <div className="owl-carousel owl-theme">
                                    {
                                        this.state.partner.map(data =>(
                                            <div className="themesflat-partner style-2 align-center clearfix" key={data.id}>
                                                <div className="partner-item">
                                                    <div className="inner">
                                                        <div className="thumb">
                                                            <img src={data.img} alt="altimage"
                                                                className="partner-default" style={{objectFit: 'contain', height:"100px", width: '150px'}} />
                                                            <img src={data.imgcolor} alt="altimage"
                                                                className="partner-color" style={{objectFit: 'contain', height:"100px", width: '150px'}} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="themesflat-spacer clearfix" data-desktop={66} data-mobile={60} data-smobile={60} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Partner;