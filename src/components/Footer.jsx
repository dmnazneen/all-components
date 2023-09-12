import { PenNib } from 'phosphor-react';
import React from 'react';
import fb from '../assets/images/facebook 1.png';
import ig from '../assets/images/instagram 1.png';
import ttr from '../assets/images/twitter 1.png'

const Footer = () => {
    return (
        <div className='py-10 px-16 text-text_black bg-light_gray'>
            <div className='flex justify-between flex-wrap'>
                <div className='max-w-[300px]'>
                    <section className='flex items-center gap-2 pt-6 pb-4'>
                        <PenNib size={20} />
                        <h1 className='font-semibold text-lg'>Tutoring Platform</h1>
                    </section>
                    <p>Our platform is designed to provide
                        students of all ages and backgrounds </p>
                    <section>
                        <h1 className='font-semibold text-lg pt-6 pb-4'>Contact Information</h1>
                        <p><span className='font-semibold'>Phone :</span> +96605023457590</p>
                        <p><span className='font-semibold'>Email  :</span> Coredevs@ltd.com</p>
                    </section>
                    <section>
                        <h1 className='font-semibold text-lg pt-6 pb-4'>Social Media</h1>
                        <ul className='flex gap-5'>
                            <li><a href="/home"><img src={fb} alt='facebook logo icon' /></a></li>
                            <li><a href="/home"><img src={ig} alt='instagram logo icon' /></a></li>
                            <li><a href="/home"><img src={ttr} alt='twitter logo icon' /></a></li>
                        </ul>
                    </section>
                </div>
                {
                    footerdata.map((item, index) => (
                        <section key={index} className='w-[170px]'>
                            <h1 className='font-semibold text-lg pt-6 pb-4'>{item.heading}</h1>
                            <ul>
                                {
                                    item.links.map((m, index) =>
                                        <li key={index} className='pb-3'>
                                            <a href={m.link}>{m.title}</a>
                                        </li>
                                    )
                                }
                            </ul>
                        </section>
                    ))
                }
            </div>
            <p className='mt-16'>Copyright © 2023 All rights reserved by Core Devs Ltd.</p>
        </div>
    );
}

export default Footer;

const footerdata = [
    {
        heading: 'Navigation',
        links: [{
            title: 'Home',
            link: '/home',
        }, {
            title: 'Find Tutor',
            link: '/home',
        }, {
            title: 'Tutor Job',
            link: '/home',
        }, {
            title: 'Login',
            link: '/home',
        }]
    }, {
        heading: 'For Teachers',
        links: [{
            title: 'Get Paid',
            link: '/home',
        }, {
            title: 'Subscription',
            link: '/home',
        }, {
            title: 'Online teaching Guide',
            link: '/home',
        }, {
            title: 'How to get jobs',
            link: '/home',
        }]
    }, {
        heading: 'For Students',
        links: [{
            title: 'How to hire',
            link: '/home',
        }, {
            title: 'Payment',
            link: '/home',
        }, {
            title: 'Teacher ranking',
            link: '/home',
        }, {
            title: 'Share a story',
            link: '/home',
        }, {
            title: 'How it works',
            link: '/home',
        }]
    }, {
        heading: 'Help and Support',
        links: [{
            title: 'Feedback',
            link: '/home',
        }, {
            title: 'Contact us',
            link: '/home',
        }, {
            title: 'Privacy policy',
            link: '/home',
        }, {
            title: 'Terms and conditions',
            link: '/home',
        }]
    }
]