import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import menus from '../menu'

class Header extends Component {
    render() {
        const { location } = this.props;
        const header_color = location.pathname === '/' ? 'white' : 'black';
        return (
            <header id="site-header">
                <div id="site-header-inner" className="container">                    
                    <div className="wrap-inner clearfix">
                        <div id="site-logo" className="clearfix">
                            <div id="site-log-inner">
                                <Link to="/" onClick={() => {window.location.href="/"}} rel="home" className="main-logo">
                                    <img src={this.props.data.logoweb} alt="KW Group" width={40} height={29} data-retina="assets/img/slider/logo.webp" data-width={40} data-height={29} style={{ marginTop: '-10px' }} /><span style={{ fontSize: '20px', color: header_color, fontWeight: '600', marginLeft: '10px'}}>KW GROUP</span>
                                </Link>
                            </div>
                        </div>
                        <div className="mobile-button">
                            <span />
                        </div>
                        <nav id="main-nav" className="main-nav">
                            <ul id="menu-primary-menu" className="menu">
                                <li className={location.pathname==='/' ? "menu-item menu-item-has-children current-menu-item" : "menu-item menu-item-has-children" }>
                                            <a href="/">{'Home'}</a>
                                            
                                </li>
                                <li className={location.pathname==='/machineries' ? "menu-item menu-item-has-children current-menu-item" : "menu-item menu-item-has-children" }>
                                            <a href="/machineries">{'Machineries'}</a>
                                            
                                </li>
                                <li className={location.pathname==='/products' ? "menu-item menu-item-has-children current-menu-item" : "menu-item menu-item-has-children" }>
                                            <a href="/products">{'Products'}</a>
                                            
                                </li>
                                <li className={location.pathname==='/careers' ? "menu-item menu-item-has-children current-menu-item" : "menu-item menu-item-has-children" }>
                                            <a href="/careers">{'Careers'}</a>
                                            
                                </li>
                                <li className={location.pathname==='/contact-01' ? "menu-item menu-item-has-children current-menu-item" : "menu-item menu-item-has-children" }>
                                            <a href="/contact-01">{'Contact'}</a>
                                            
                                        </li>
                                {/* {
                                    menus.map(data => (
                                        <li className={data.name === this.props.data.names ? "menu-item menu-item-has-children current-menu-item" : "menu-item menu-item-has-children"} key={data.id}>
                                            <Link to="#">{data.name}</Link>
                                            <ul className="sub-menu">
                                                {
                                                    data.namesub.map(submenu => (
                                                        <li className={location.pathname === submenu.links ? "menu-item current-item" : "menu-item"}  key={submenu.id} ><Link to={submenu.links}  onClick={() => {window.location.href=submenu.links}}>{submenu.sub}</Link></li>
                                                    ))
                                                }
                                            </ul>
                                        </li>
                                    ))
                                } */}
                            </ul>
                        </nav>
                        {/* <div id="header-search">
                        <Link to="#" className="header-search-icon">
                            <span className="search-icon fa fa-search">
                            </span>
                        </Link>
                        <form role="search" method="get" className="header-search-form" action="#">
                            <label className="screen-reader-text">Search for:</label>
                            <input type="text" defaultValue name="s" className="header-search-field" placeholder="Search..." />
                            <button type="submit" className="header-search-submit" title="Search"><i className="fa fa-search" /></button>
                        </form>
                        </div> */}
                    </div>                 
                </div>
            </header>
        );
    }
}

export default withRouter(Header);