import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

function Footer () {
    return (
    <div className='all'>
        <div className="container">
            <div className="row justify-content-space-around">

                <div className="col-md-3 col-sm-6" className='middle'>
                    <span className="daily1">
                    <em>Daily</em></span>
                    <span className="cious2">
                    <em>cious</em>
                    </span>
                    <ul className="list-unstyled">
                        <li>WBS Coding School</li>
                        <li>Dailycious Strasse 3, 10325 Berlin</li>
                        <li>Tel.:+49 170 500 300</li>
                        <li>Email: info@dailycious.de</li>
                    </ul>
                </div>

<div className="col-md-3 col-sm-6">
                    <h4 style={{textShadow: '2px 2px white'}}>Company</h4>
                    <ul className="list-unstyled" style={{textShadow: '2px 2px white'}}>
                        <li>DailyCious GmbH</li>
                        <li>WBS Coding School</li>
                        <li>Dailycious Strasse 3, 10325 Berlin</li>
                        <li>Tel.:+49 170 500 300</li>
                        <li>Email: info@dailycious.de</li>
                    </ul>
                </div>
            <div className="footer-bottom">
                <p className="text-xs-center">
                    &copy;{new Date().getFullYear()} DailyCious GmbH - All Rights Reserved
                </p>
            </div>
            </div>

        </div>

</div>
    )
};
export default Footer;

