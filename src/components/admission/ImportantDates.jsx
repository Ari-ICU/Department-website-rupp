import React from 'react';

const ImportantDates = () => {
    const dates = [
        {
            title: 'Application Opens',
            date: '1 Jan',
            subtitle: 'Admission First Open for Bachelor Degree.',
            description: ' Our computer science along side with other departments have an opening of admission in the early Jan',
        },
        {
            title: 'Early Application Deadline',
            date: '2 Feb',
            subtitle: "Admission Closing for Bachelor Degree.",
            description: ' We stop accepting an application after 2 feb or earlier depending on the number of applyers.',
        },
        {
            title: 'Entrance Exam Date',
            date: '3 Feb',
            subtitle: 'Entrance Exam Date.',
            description: ' After applying, student are obedient to take an entrance exam host by Royal University of Phnom Penh. Only suitable candidate are accepted.',
        },
        {
            title: 'Results Announcement & Enrollment',
            date: '13 Feb',
            subtitle: 'Announcement of Result. We will announce the final result in early feb. ',
            description: 'Accepted candidate can do their payment after the result out.',
        },
    ];

    return (
        <div className=" my-16">
            <div className="container mx-auto px-4">
                <div className='flex flex-col xl:flex-row gap-6'>
                    <div className="mb-8">
                        <h2 className="text-3xl font-semibold mb-4">Important Date & Deadlines For Bachelor Degree</h2>
                        <p className="text-gray-600">
                            Check the important dates and deadline for bachelor degree enrollment. You don't want to lose the opportunity. Check it out Now!
                        </p>
                    </div>

                    <div className="space-y-4">
                        {dates.map((item, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-6">
                                <div className="grid grid-cols-12 items-center gap-4 justify-center">
                                    <div className="bg-pink-100 px-4 py-2 flex flex-col items-center col-span-4">
                                        <h3 className="text-lg font-normal mb-2">{item.title}</h3>
                                        <span className="text-pink-700 text-lg text-center rounded-md font-semibold">
                                            {item.date}
                                        </span>
                                       
                                    </div>
                                    <div className='col-span-8'>
                                    <h1 className="text-xl font-semibold mt-2">{item.subtitle}</h1>
                                        <p className="text-gray-600">{item.description}</p>
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

export default ImportantDates;