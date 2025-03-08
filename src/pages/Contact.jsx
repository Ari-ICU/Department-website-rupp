import React from "react";
import CSAboutSection from "../components/banner/CSAboutSection";
import ContactSection from "../components/home/ContactSection"
import PartnershipSection from "../components/home/PartnershipSection";
import DepartmentHeader from "../components/home/DepartmentHeader";
import GetInTouchSection from "../components/contact/GetInTouchSection"

const Contact = () => {
    return (
        <div>
            <div>
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