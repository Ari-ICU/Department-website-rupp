import React from "react";
import CSAboutSection from "../components/banner/CSAboutSection";
import ContactSection from "../components/home/ContactSection"
import PartnershipSection from "../components/home/PartnershipSection";
import DepartmentHeader from "../components/home/DepartmentHeader";
import GetInTouchSection from "../components/contact/GetInTouchSection"
import { Helmet } from 'react-helmet';


const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Contact - Department of Computer Science</title>
                <meta name="description" content="Contact information for the Department of Computer Science at RUPP" />
                <link rel="canonical" href="/contact" />
                <meta property="og:title" content="Contact - Department of Computer Science" />
                <meta property="og:description" content="Contact information for the Department of Computer Science at RUPP" />
                <meta name="twitter:title" content="Contact - Department of Computer Science" />
                <meta name="twitter:description" content="Contact information for the Department of Computer Science at RUPP" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="keywords" content="RUPP, Computer Science, Contact, Department of Computer Science" />
                <meta name="author" content="Department of Computer Science, RUPP" />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="theme-color" content="#ffffff" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="RUPP Contact" />
                
            </Helmet>
            <div className='text-justify'>
                <CSAboutSection />
                <div className="pb-4 pt-16">
                    <ContactSection />

                </div>
                <div className="">
                    <GetInTouchSection />
                </div>
                <div className="pb-4">
                    <PartnershipSection />
                </div>

                <div className="">
                    <DepartmentHeader />
                </div>
            </div>
        </div>
    );
}

export default Contact;