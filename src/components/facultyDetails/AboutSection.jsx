import React from "react";

const AboutSection = () => {
    return (
        <section className=" my-16">
            <div className="max-w-4xl mx-auto space-y-8 p-4">
                {/* About Section */}
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p>
                            <span className="font-semibold">Asst. Prof. Dr. Heng Sovannarith </span>
                        </p>
                        <p>
                            <span className="font-semibold">RUPP 2005:</span>  B.Sc (Computer Science and Engineering)
                        </p>
                        <p>
                            <span className="font-semibold">RUPP 2011:</span>  B.A. in English (Professional Communication)
                        </p>
                        <p>
                            <span className="font-semibold">Ateneo De Manila University (Philippines), 2010:</span> M.Sc. (Computer Science),
                        </p>
                        <p>
                            <span className="font-semibold">Khon Kaen University (Thailand), 2019 :</span> Ph.D. (Computer Science)
                        </p>
                    </div>
                </div>
    
                <div className="border-t border-gray-200 my-8"></div>
    
                {/* Contact Section */}
                <div className="space-y-4 ">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Contact Info</h3>
                    <div className="space-y-2 flex items-center gap-6">
                        <p className="text-red-700 hover:text-red-600 p-2 px-6 bg-pink-100 rounded-full transition-colors">
                        <span className="font-normal">098 989 898</span>
                        </p>
                        <p className="text-red-700 hover:text-red-600 p-2 px-6 bg-pink-100 rounded-full transition-colors">
                            <span className="font-normal">example@gmail.com</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
