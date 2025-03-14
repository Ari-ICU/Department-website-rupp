import React from 'react';
import { Link } from 'react-router-dom';

const CopyRight = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='text-center text-gray-200 py-5'>
            <p>
                &copy; {currentYear} Department of Computer Science. All rights reserved. Developed by 
                <Link to="/developer" className='text-red-500 hover:underline'> 4th-Year, 25th Generation.</Link>
            </p>
        </footer>
    );
};

export default CopyRight;