import React, {useState} from 'react'

const Information = () => {

    const [mapIndex, setMapIndex] = useState(1);

    const headoffice = () => {
        setMapIndex(1);
    }

    const germany = () => {
        setMapIndex(2);
    }

    const newyork = () => {
        setMapIndex(3);
    }

    const dubai = () => {
        setMapIndex(4);
    }
  return (
      <>
          <div className="col-md-6">
                <div className="themesflat-spacer clearfix" data-desktop={0} data-mobile={0} data-smobile={35} />
                <div className="themesflat-headings style-2 clearfix">
                    <h2 className="heading">INFOMATION</h2>
                    <div className="sep has-width w80 accent-bg clearfix" />
                </div>
                <div className="themesflat-spacer clearfix" data-desktop={36} data-mobile={35} data-smobile={35} />
                <div className="themesflat-tabs style-1 w168 clearfix">
                    <ul className="tab-title clearfix">
                        <li className="item-title active" onClick={headoffice}>
                            <span className="inner">Head Office</span>
                        </li>
                        <li className="item-title" onClick={germany}>
                            <span className="inner">Germany</span>
                        </li>
                        <li className="item-title" onClick={newyork}>
                            <span className="inner">New York</span>
                        </li>
                        <li className="item-title" onClick={dubai}>
                            <span className="inner">Dubai</span>
                        </li>
                    </ul>
                    <div className="tab-content-wrap clearfix">
                        <div className="tab-content">
                            <div className="item-content">
                                <ul>
                                    <li className="clearfix">
                                        <div className="inner">
                                            <span className="fa fa-map-marker" />
                                            <span className="text">House#424, Road#07, DOHS Baridhara, Dhaka, Bangladesh </span>
                                        </div>
                                    </li>
                                    <li className="clearfix">
                                        <div className="inner">
                                            <span className="fa fa-phone" />
                                            <span className="text">CALL US : +88-02-8411765</span>
                                        </div>
                                    </li>
                                    <li className="clearfix">
                                        <div className="inner">
                                            <span className="fa fa-envelope" />
                                            <span className="text">EMAIL : info@kwgroup-bd.com</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="tab-content">
                            <div className="item-content">
                                <ul>
                                    <li className="clearfix">
                                        <div className="inner">
                                            <span className="fa fa-map-marker" />
                                            <span className="text">Stellwerk, str.48, 85386, Moosburg, Germany </span>
                                        </div>
                                    </li>
                                    <li className="clearfix">
                                        <div className="inner">
                                            <span className="fa fa-phone" />
                                            <span className="text">CALL US : +4915783801162</span>
                                        </div>
                                    </li>
                                    <li className="clearfix">
                                        <div className="inner">
                                            <span className="fa fa-envelope" />
                                            <span className="text">EMAIL : info@kwgroup-bd.com</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="tab-content">
                            <div className="item-content">
                                <ul>
                                    <li className="clearfix">
                                        <div className="inner">
                                            <span className="fa fa-map-marker" />
                                            <span className="text">50th West 34th st suite 7C10 New York NY 10001</span>
                                        </div>
                                    </li>
                                    <li className="clearfix">
                                        <div className="inner">
                                            <span className="fa fa-phone" />
                                            <span className="text">CALL US : +14049964957</span>
                                        </div>
                                    </li>
                                    <li className="clearfix">
                                        <div className="inner">
                                            <span className="fa fa-envelope" />
                                            <span className="text">EMAIL : info@kwgroup-bd.com</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="tab-content">
                            <div className="item-content">
                                <ul>
                                    <li className="clearfix">
                                        <div className="inner">
                                            <span className="fa fa-map-marker" />
                                            <span className="text">043-004, IRIS BAY TOWER Business Bay, Dubai, United Arab Emirates</span>
                                        </div>
                                    </li>
                                    <li className="clearfix">
                                        <div className="inner">
                                            <span className="fa fa-phone" />
                                            <span className="text">CALL US : +971524887007</span>
                                        </div>
                                    </li>
                                    <li className="clearfix">
                                        <div className="inner">
                                            <span className="fa fa-envelope" />
                                            <span className="text">EMAIL : info@kwgroup-bd.com</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="themesflat-spacer clearfix" data-desktop={20} data-mobile={35} data-smobile={35} />
                {/* <div className="themesflat-map"></div> */}
              <div className='contact_us_map'>
                  {mapIndex===1 && <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7300.452218020114!2d90.40487396977537!3d23.8105574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b2927d0e01%3A0xbb1ed529d3b13673!2sBaridhara%20DOHS!5e0!3m2!1sen!2sbd!4v1652597815879!5m2!1sen!2sbd" width="600" height="250" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}
                  {mapIndex === 2 && <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.1050816437123!2d11.928984015540557!3d48.4736979792517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e3c47af1ad561%3A0x57cad9f3c6821969!2sStillfair%20Apparels%20Ltd.!5e0!3m2!1sen!2sbd!4v1653224138038!5m2!1sen!2sbd" width="600" height="250" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}
                  {mapIndex === 3 && <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.574309276948!2d-73.98959498473135!3d40.749391579327906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a93e053ad7%3A0x361047efc20a2276!2sHerald%20Towers!5e0!3m2!1sen!2sbd!4v1653224257739!5m2!1sen!2sbd" width="600" height="250" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}
                  {mapIndex===4 && <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.5134427367398!2d55.25578052417047!3d25.185901832410014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d09681df43%3A0xc222838ff425a54!2sIris%20Bay%20-%20Business%20Bay%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sbd!4v1653224352343!5m2!1sen!2sbd" width="600" height="250" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}
                </div>
            </div>
      </>
  )
}

export default Information
