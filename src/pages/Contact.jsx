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
                <div className="py-10">
                    <ContactSection />
                </div>
                <div className="bg-red-900">
                <GetInTouchSection />
                </div>
                <div className="py-10">
                <PartnershipSection />
                </div>
                <DepartmentHeader />
            </div>
        </div>
    );
}

export default Contact;