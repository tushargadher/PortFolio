import React from "react";
import video from '../Media/video.mp4';
function Contect() {

    return (
        <>
            <div className="head" >Contact As</div>
            <div className="contectform" data-aos="fade-up">
                <video autoPlay muted loop id="video">
                    <source src={video} type="video/mp4" />
                </video>
                <div className="side-head">
                    <p className="side-p">GET IN TOUCH</p>
                    <p className="side-p" id="question">Have a project ? We would love to help.</p>
                    <p className="side-p" ><a href="mailto:tushargadher123@gmail.com" id="mail">tushargadher123@gmail.com</a></p>
                </div>

                <div className="left-head">
                    <div className="contect">
                        <h1>Contact Me</h1>
                        <p>
                            You can contact me at the places mentioned below. I will try to get back to you as fast as I can.
                        </p>
                        <div className="wrapContect">
                            <div className="contect-item">
                                <a href="https://www.linkedin.com/in/tushar-gadher-211bb2175/" >
                                    <i className='bx bxl-linkedin-square' style={{ color: "#0E76A8" }}></i>
                                </a>
                            </div>
                            <div className="contect-item">
                                <a href="https://wa.me/+919512887819" >
                                    <i className='bx bxl-whatsapp-square ' style={{ color: "#1AD03F" }} ></i>
                                </a>
                            </div>
                            <div className="contect-item">
                                <a href="https://www.facebook.com/tushar.gadher.568/" >
                                    <i className='bx bxl-facebook-circle ' style={{ color: "#1771E6" }}></i>
                                </a>
                            </div>

                            <div className="contect-item instagram">
                                <a href="https://www.instagram.com/tushargadher25/">
                                    <i className='bx bxl-instagram-alt ' style={{ color: "#E4405F" }}></i>
                                </a>

                            </div>
                            <div className="contect-item">
                                <a href="https://t.me/tushargadher"  >
                                    <i className='bx bxl-telegram  ' style={{ color: "#269FDE" }} ></i>
                                </a>
                            </div>
                      
                            <div className="contect-item">
                                <a href="https://twitter.com/Tushar71886645">
                                    <i className='bx bxl-twitter  ' style={{ color: "#1C93E4" }} ></i>

                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Contect;