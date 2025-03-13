import React from 'react';
import p1 from '../../assets/new/4.jpg';

const EventsNewSection = () => {
    const careerFairData = {
        location: "Phnom Penh",
        date: "March 25, 2025",
        university: "The Royal University of Phnom Penh (RUPP)",
        participatingCompaniesCount: "50+",
        sectors: "technology, finance, education, engineering, and business",
        quote: {
            text: "The Career Fair at RUPP is a great opportunity for students to connect directly with employers and learn what companies are looking for in new graduates. It helps bridge the gap between education and employment.",
            author: "Dr. Sok Chan, Dean of Faculty",
        },
        imageSrc: p1,
        imageAlt: "Career Fair at RUPP",
        studentTestimonial: {
            text: "Sokha Rith",
            detail: "I was able to meet recruiters from my dream company and even got invited for a second interview. This event really helped me take the first step in my career.",
        },
        futurePlans:
            "The Career Fair continues to be a key initiative by RUPP in supporting students' transition from university to the workforce. The university plans to expand future events by inviting more companies and offering additional career development programs.",
        contactInfo: "Visit RUPP's Career Center for more details.",
    };

    return (
        <div className="my-16">
            <div className="max-w-4xl mx-auto px-4">
                <section>
                    <h2 className="text-2xl font-bold  mb-4">
                        {careerFairData.location}, {careerFairData.date} - {careerFairData.university} Career Fair
                    </h2>
                    <p className="text-gray-700">
                        {careerFairData.university} successfully hosted its annual Career Fair, bringing together students, graduates, and leading companies from various industries.
                        The event provided a valuable platform for students to explore job and internship opportunities, network with industry professionals, and gain insights into career development.
                    </p>

                    <p className="text-gray-700 mt-4">
                        More than <strong>{careerFairData.participatingCompaniesCount}</strong> companies participated, representing sectors such as {careerFairData.sectors}.
                        Employers set up booths to showcase their companies, discuss job openings, and conduct on-the-spot interviews with potential candidates.
                        Students also had the opportunity to attend career talks and workshops led by industry experts, covering topics such as resume building, interview skills, and industry trends.
                    </p>

                    <p className="text-gray-700 mt-4 italic">
                        "{careerFairData.quote.text}"
                        {careerFairData.quote.author && (
                            <span className="font-semibold text-gray-900"> - {careerFairData.quote.author}</span>
                        )}
                    </p>

                    <div className="flex justify-center my-6">
                        <img
                            src={careerFairData.imageSrc}
                            alt={careerFairData.imageAlt}
                            className="max-w-full rounded-lg shadow-lg"
                        />
                    </div>

                    <p className="text-gray-700 mt-4">
                        Many students expressed enthusiasm about the event, with some securing interviews and internship offers on the spot.
                        <span className="font-semibold text-gray-900"> {careerFairData.studentTestimonial.text} </span> shared, "{careerFairData.studentTestimonial.detail}"
                    </p>

                    <p className="text-gray-700 mt-4">{careerFairData.futurePlans}</p>

                    <p className="text-gray-700 mt-4 font-semibold">
                        {careerFairData.contactInfo}
                    </p>
                </section>
            </div>
        </div>
    );
};

export default EventsNewSection;
