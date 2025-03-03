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
                <div className="*:py-16">
                <ContactSection />
                    <div className="bg-red-900 ">
                        <GetInTouchSection />
                    </div>
                    <PartnershipSection />
                    <DepartmentHeader />
                </div>
               
            </div>
        </div>
    );
}

export default Contact;