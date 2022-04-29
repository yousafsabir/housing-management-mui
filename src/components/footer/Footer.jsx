import React from "react";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { ImInfinite } from "react-icons/im";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container grid">
                <div className="about-us">
                    <h4>About Us</h4>
                    <div className="divider"></div>
                    <p>
                        Creating huge empires from small investments, brick by
                        brick. Here at BRICK we don’t rush into business, we do
                        our research and homework and we plan actions
                        accordingly. With steady and gradual development we
                        build more in little investments.
                    </p>
                </div>
                <div className="important-links">
                    <h4>Important Links</h4>
                    <div className="divider"></div>
                    <div className="links-container">
                        {[
                            {
                                title: "Park View City Isb",
                                link: "/Park-View-City-Islamabad",
                            },
                            {
                                title: "Park View City Lahore",
                                link: "/Park-View-City-Lahore",
                            },

                            {
                                title: "Capital Smart City",
                                link: "/Capital-Smart-City",
                            },
                            {
                                title: "Lahore Smart City",
                                link: "/Lahore-Smart-City",
                            },
                            {
                                title: "DHA Multan",
                                link: "/DHA-Multan",
                            },
                            {
                                title: "Blog",
                                link: "",
                            },
                            {
                                title: "Career",
                                link: "",
                            },
                        ].map((cell) => (
                            <div className="link-cells">
                                <MdOutlineDoubleArrow />
                                <Link to={cell.link}>{cell.title}</Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="socials">
                    <h4>Get in Touch</h4>
                    <div className="divider"></div>
                    <div className="socials-cell">
                        <MdLocationPin style={{ fontSize: "2rem" }} />
                        <p>
                            Office # 17, First Floor Al-Hameed Plaza, G11
                            Markaz, Islamabad
                        </p>
                    </div>
                    <div className="socials-cell">
                        <BsFillTelephoneFill style={{ fontSize: "1.5rem" }} />
                        <p>Phone: 0334-2716561, 0333-3035333</p>
                    </div>
                    <div className="socials-cell">
                        <GrMail style={{ fontSize: "1.5rem" }} />
                        <p>Email: info@brickpk.com</p>
                    </div>
                    <p>Working Hours: Mon-Sat, 10:30AM-6:30PM</p>
                    <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                        Brick Branch Offices
                    </p>

                    <Link
                        to=""
                        className="socials-icon"
                        style={{ backgroundColor: "#1778f2" }}
                    >
                        <BsFacebook />
                    </Link>

                    <Link
                        to=""
                        className="socials-icon"
                        style={{ backgroundColor: "#f00075" }}
                    >
                        <BsInstagram />
                    </Link>
                </div>
            </div>
            <hr />
            <div className="container">
                <p style={{ display: "flex", alignItems: "center" }}>
                    &copy; 2022 -{" "}
                    <ImInfinite
                        style={{ fontSize: "1.5rem", marginInline: "6px" }}
                    />
                    All rights Reserved | designed and developed by
                    @yousafsabir7
                </p>
            </div>
        </footer>
    );
};

export default Footer;
