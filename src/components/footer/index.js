import React, { useEffect, useState } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

import './footer.scss'


function Footer(props) {

    return (
        <>
            <footer className="section bg-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="">
                                <h6 className="footer-heading text-uppercase text-white">Information</h6>
                                <ul className="list-unstyled footer-link mt-4">
                                    <li><a href="">Pages</a></li>
                                    <li><a href="">Our Team</a></li>
                                    <li><a href="">Contact</a></li>
                                    <li><a href="">Get Started</a></li>
                                </ul>
                            </div>
                        </div>
              
                        <div className="col-lg-3">
                            <div className="">
                                <h6 className="footer-heading text-uppercase text-white">Quick Links</h6>
                                <ul className="list-unstyled footer-link mt-4">
                                    <li><a href="">Home </a></li>
                                    <li><a href="">Search</a></li>
                                    <li><a href="">Donate</a></li>
                                    <li><a href="">About</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2">
                            <div className="">
                                <h6 className="footer-heading text-uppercase text-white">Help</h6>
                                <ul className="list-unstyled footer-link mt-4">
                                    <li><a href="">Sign Up </a></li>
                                    <li><a href="">Login</a></li>
                                    <li><a href="">Terms of Services</a></li>
                                    <li><a href="">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="">
                                <h6 className="footer-heading text-uppercase text-white">Contact Us</h6>
                                <p className="contact-info mt-4">Contact us if you need help</p>
                                <p className="contact-info">+01 123-456-7890</p>
                                <div className="mt-5">
                                    <ul>
                                        <li className="list-inline-item"><a href="#"><FacebookIcon className="fab facebook footer-social-icon " /></a></li>
                                        <li className="list-inline-item"><a href="#"><TwitterIcon className="fab twitter footer-social-icon " /></a></li>
                                        <li className="list-inline-item"><a href="#"><InstagramIcon className="fab insta footer-social-icon " /></a></li>

                                        <li className="list-inline-item"><a href="#"><LinkedInIcon className="fab linkedin footer-social-icon " /></a></li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <hr/>
                <div className="text-center mt-5 ">
                    <p className="footer-alt mb-0 f-14">2020 © HOPES, All Rights Reserved</p>
                </div>
                {/* <hr /> */}
            </footer>
        </>
    )
}

export default Footer;

