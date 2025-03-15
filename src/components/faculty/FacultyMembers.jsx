import React from 'react';
import { FaFacebookF, FaTelegramPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import p2 from '../../assets/img/dr-heng-sovanrith.png';
import p3 from '../../assets/img/professor/p1.png';

const FacultyMembers = () => {
    const deputyData = [
        {
            id: 1, // Added ID for detail page link
            name: "Dr. Heng Sovannrith",
            image: p2,
            position: "Assistant Professor",
            details: "Asst. Prof. Dr. Heng Sovannarith (2007): B.Sc. (Computer Science and Engineering), RUPP, 2005; B.A. in English (Professional Communication), RUPP, 2011; M.Sc. (Computer Science), Ateneo De Manila University (Philippines), 2010; Ph.D. (Computer Science), Khon Kaen University (Thailand), 2019.",
            facebook: "https://facebook.com/example",
            telegram: "https://t.me/example",
        },
        {
            id: 2, // Added ID for detail page link
            name: "Asst. Prof. Dr. Chor Chandara",
            image: p3,
            position: "Assistant Professor",
            details: "Asst. Prof. Dr. Heng Sovannarith (2007): B.Sc. (Computer Science and Engineering), RUPP, 2005; B.A. in English (Professional Communication), RUPP, 2011; M.Sc. (Computer Science), Ateneo De Manila University (Philippines), 2010; Ph.D. (Computer Science), Khon Kaen University (Thailand), 2019.",
            facebook: "https://facebook.com/example",
            telegram: "https://t.me/example",
        },
        {
            id: 3, // Added ID for detail page link
            name: "Asst. Prof. Dr. Chor Chandara",
            image: p3,
            position: "Assistant Professor",
            details: "Asst. Prof. Dr. Heng Sovannarith (2007): B.Sc. (Computer Science and Engineering), RUPP, 2005; B.A. in English (Professional Communication), RUPP, 2011; M.Sc. (Computer Science), Ateneo De Manila University (Philippines), 2010; Ph.D. (Computer Science), Khon Kaen University (Thailand), 2019.",
            facebook: "https://facebook.com/example",
            telegram: "https://t.me/example",
        },
        {
            id: 4, // Added ID for detail page link
            name: "Asst. Prof. Dr. Chor Chandara",
            image: p3,
            position: "Assistant Professor",
            details: "Asst. Prof. Dr. Heng Sovannarith (2007): B.Sc. (Computer Science and Engineering), RUPP, 2005; B.A. in English (Professional Communication), RUPP, 2011; M.Sc. (Computer Science), Ateneo De Manila University (Philippines), 2010; Ph.D. (Computer Science), Khon Kaen University (Thailand), 2019.",
            facebook: "https://facebook.com/example",
            telegram: "https://t.me/example",
        },
    ];

    return (
        <div className='my-16'>
            <div className='container mx-auto px-4'>
                <div className='space-y-10'>
                    <h1 className='text-3xl font-semibold '>Faculty Members</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {deputyData.map((deputy) => (
                            <div key={deputy.id} className='shadow-lg rounded-2xl p-4'>
                                <div className='gap-6 items-center'>
                                    {/* Image Container */}
                                    <div className="relative w-full h-96 mb-4 group">
                                        <img
                                            src={deputy.image}
                                            alt={deputy.name}
                                            className="w-full h-full rounded-2xl object-cover group-hover:brightness-90 transition-all duration-300"
                                        />

                                        {/* Social Media Overlay */}
                                        <div
                                            className="absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center"
                                        >
                                            {/* Social Icons Container */}
                                            <div className="absolute top-4 right-4 group-hover:bg-black/10 p-2 transition-all duration-300 rounded-2xl">
                                                <div className="space-y-2">
                                                    {/* Facebook Link */}
                                                    <div
                                                        className="bg-white p-3 rounded-full shadow-lg"
                                                    >
                                                        <Link to={deputy.facebook} className="text-gray-700 hover:text-red-600">
                                                            <FaFacebookF className="text-xl" />
                                                        </Link>
                                                    </div>

                                                    {/* Telegram Link */}
                                                    <div
                                                        className="bg-white p-3 rounded-full shadow-lg"
                                                    >
                                                        <Link to={deputy.telegram} className="text-gray-700 hover:text-red-400">
                                                            <FaTelegramPlane className="text-xl" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='space-y-6 max-w-md relative text-center'>
                                        <div className='space-y-2'>
                                            <h1 className='text-2xl font-semibold '>{deputy.name}</h1>
                                            <p className=''>{deputy.position}</p>
                                        </div>
                                        <Link to={`/faculty/${deputy.id}`} className='bg-red-900 px-6 py-2 text-gray-50 rounded-2xl'>
                                            View
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacultyMembers;
