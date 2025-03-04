import React from "react";
import CSAboutSection from "../components/about/CSAboutSection";
import ContactSection from "../components/home/ContactSection"
import PartnershipSection from "../components/home/PartnershipSection";
import DepartmentHeader from "../components/home/DepartmentHeader";
import GetInTouchSection from "../components/contact/GetInTouchSection"

const Contact = () => {
    return (
        <div>
            <div>
                <CSAboutSection />
                <div className="py-16">
                        <ContactSection />  
                        <div className="">
                        <GetInTouchSection />
                    </div>
                </div>
                <div className="py-16">
                    <PartnershipSection />  
                </div>
                
                <div className="pt-16">
                <DepartmentHeader />
               </div>
            </div>
        </div>
    );
}

export default Contact;