import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CopyRight = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className='text-center text-gray-300 py-5'>
            <p className="tracking-wide">
                &copy; {currentYear} {t("footer.Department of Computer Science. All rights reserved. Developed by ")}
                <Link to="/developer" className="text-red-800 hover:underline ">
                    {t("footer.4th-Year, 25th Generation.")}
                </Link>
            </p>

        </footer>
    );
};

export default CopyRight;
