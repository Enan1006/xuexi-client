import React from 'react';

const Footer = () => {
    return (
        <footer class="footer p-10 bg-blue-600 text-white text-base-content">
            <div className='text-white'>

                <i class="text-white text-6xl fa-solid fa-books"></i>
                <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
            </div>
            <div className='text-white'>
                <span class="footer-title">Support</span>
                <a class="link link-hover">Our Instructors</a>
                <a class="link link-hover">Contact Us</a>
                <a class="link link-hover">Privacy Policy</a>
                <a class="link link-hover">Terms Conditions
                </a>
            </div>

            <div className='text-white'>
                <span class="footer-title">Information</span>
                <h4 className='text-lg font-semibold'>Call Us</h4>
                <p>+800 388 80 90</p>
                <h4 className='text-lg font-semibold'>Email Us</h4>
                <p>ihenan1006@gmail.com</p>
                <h4 className='text-lg font-semibold'>Location</h4>
                <p>Uttara-10, Uttara, Dhaka - 1230</p>
            </div>
        </footer>
    );
};

export default Footer;