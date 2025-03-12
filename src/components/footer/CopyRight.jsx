import React from 'react';

const CopyRight = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='text-center text-gray-500 py-5'>
            <p>
                &copy; {currentYear} Department of Computer Science. All rights reserved.
            </p>
        </footer>
    );
};

export default CopyRight;