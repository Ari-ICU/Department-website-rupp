import React from 'react';
import image1 from '../../assets/career/1.png';

const careerData = [
    {
        title: 'Introduction',
        content: "Software engineering is one of the most sought-after careers in today's digital world. With technology evolving rapidly, the role of software engineers has become more critical than ever. From building applications to solving complex problems, software engineers play a vital role in shaping the future. This blog explores what it means to be a software engineer, the challenges they face, and the rewards of this dynamic profession.",
    },
    {
        title: 'What Does a Software Engineer Do?',
        content: (
            <div className='text-lg'>
                <p className='mb-4'>Software engineers design, develop, and maintain software applications that power businesses, devices, and everyday life. Their responsibilities include:</p>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                    <li>Writing and testing code</li>
                    <li>Debugging and optimizing applications</li>
                    <li>Collaborating with teams to develop innovative solutions</li>
                    <li>Ensuring software security and performance</li>
                    <li>Keeping up with the latest programming languages and technologies</li>
                </ul>
            </div>
        ),
        images: image1
    },
    {
        title: 'Skills Required to Become a Software Engineer',
        content: (
            <div className='text-lg'>
                <p className='mb-4'>To thrive in this field, software engineers must possess a blend of technical and soft skills, including:</p>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                    <li>Programming Languages: Proficiency in languages like Python, Java, JavaScript, C++, or Swift.</li>
                    <li>Problem-Solving Abilities: The ability to think critically and troubleshoot issues efficiently.</li>
                    <li>Teamwork and Communication: Software development is rarely a solo task. Engineers must work with designers, product managers, and other stakeholders.</li>
                    <li>Continuous Learning: Technology evolves rapidly, requiring engineers to stay updated with new frameworks, tools, and best practices.</li>
                </ul>
            </div>
        ),
    },
    {
        title: 'Challenges of Being a Software Engineer',
        content: (
            <div className='text-lg'>
                <p className='mb-4'>Despite the challenges, software engineering is a highly rewarding profession:</p>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                    <li>Tight Deadlines: Projects often have strict deadlines, leading to long working hours and pressure to deliver quality code.</li>
                    <li>Debugging Complex Issues: Finding and fixing bugs can be time-consuming and frustrating.</li>
                    <li>Keeping Up with Technology: The industry changes frequently, requiring constant learning and adaptation.</li>
                    <li>Work-Life Balance: Balancing work and personal life can be difficult, especially when working on high-priority projects.</li>
                </ul>
            </div>
        ),
    },
    {
        title: 'The Rewards of a Software Engineering Career',
        content: (
            <div className='space-y-4'>
                <p>Despite the challenges, software engineering is a highly rewarding profession:</p>
                <ul className="list-disc ml-6 text-gray-700">
                    <li>High Demand and Job Security: With digital transformation across industries, the need for skilled software engineers continues to grow.</li>
                    <li>Competitive Salaries: Software engineers earn attractive salaries, with opportunities for growth.</li>
                    <li>Remote Work Opportunities: Many companies offer remote work, providing flexibility and better work-life balance</li>
                    <li>Impactful Work: Engineers build applications and systems that improve lives, from healthcare to entertainment and beyond.</li>
                </ul>
            </div>
        )
    },
    {
        title: 'Career Growth and Opportunities',
        content: (
            <div className='space-y-4'>
                <p>Software engineers have numerous career advancement opportunities, including:</p>
                <ul className="list-disc ml-6 text-gray-700">
                    <li>Becoming a Senior Engineer: Gaining experience and leading projects.</li>
                    <li>Specializing in a Niche Field: Such as AI, cybersecurity, cloud computing, or blockchain development.</li>
                    <li>Transitioning into Leadership: Moving into roles like software architect, project manager, or CTO.</li>
                    <li>Freelancing or Entrepreneurship: Building independent projects or starting a tech business.</li>
                </ul>
            </div>
        )
    },
    {
        title: '5. Conclusion',
        content: "A career in software engineering is challenging yet rewarding, offering endless learning opportunities, job security, and the chance to make a real impact. Whether you're just starting or looking to advance in your career, being a software engineer opens doors to innovation and growth. If you're passionate about technology and problem-solving, this might just be the perfect career for you!"
    },
    {
        title: 'References',
        content: (
            <ul className="list-disc ml-6 text-gray-700">
                <li>Sommerville, I. (2015). Software Engineering (10th ed.). Pearson.</li>
                <li>McConnell, S. (2004). Code Complete (2nd ed.). Microsoft Press.</li>
                <li>Pressman, R. S. (2019). Software Engineering: A Practitioner's Approach (9th ed.). McGraw-Hill.</li>
                <li>Brooks, F. P. (1995). The Mythical Man-Month: Essays on Software Engineering. Addison-Wesley.</li>
            </ul>

        )
    }
];

const CareerSection = () => {
    return (
        <div className="my-12">
            <div className="max-w-4xl mx-auto px-4">
                {careerData.map((section, index) => (
                    <div key={index} className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">{section.title}</h2>
                        {Array.isArray(section.content) || typeof section.content === 'object' ? (
                            <div className="">
                                {Array.isArray(section.content) ? (
                                    section.content.map((subContent, subIndex) => (
                                        typeof subContent === 'string' ? (
                                            <p key={subIndex} className="text-gray-700 mb-4">{subContent}</p>
                                        ) : (
                                            <div key={subIndex}>
                                                <h3 className="text-xl font-semibold mb-2 text-gray-800">{subContent.subtitle}</h3>
                                                <p className="text-gray-700 mb-4 text-lg">{subContent.text}</p>
                                            </div>
                                        )
                                    ))
                                ) : (
                                    <div className='text-lg'>{section.content}</div>
                                  
                                )}
                            </div>
                        ) : (
                            <p className="text-gray-700 text-lg">{section.content}</p>
                        )}
                        {section.images && <img src={section.images} alt="" className="w-full h-96 mt-4" />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CareerSection;