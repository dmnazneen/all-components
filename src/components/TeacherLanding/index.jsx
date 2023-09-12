import React from 'react';
import Stats from './Stats';
import andimg from '../../assets/images/&.png'
import teacher from '../../assets/images/teachers.png'
import { Circle } from 'phosphor-react';
const data = [
    {
        heading: 'Proof of quality',
        desc: 'Check any pro’s work samples, client reviews, and identity verification.'
    },
    {
        heading: 'No cost until you hire',
        desc: 'Interview potential fits for your job, negotiate rates, and only pay for work you approve.'
    },
    {
        heading: 'Safe and secure',
        desc: 'Focus on your work knowing we help protect your data and privacy. We’re here with 24/7 support if you need it'
    }
]
const Index = () => {
    return (
        <div>
            <Stats />
            <div className='py-16'>
                <div className='relative text-[36px] text-center text-blue-600 font-semibold'>
                    <section className='absolute -z-10 w-full top-9'><img src={andimg} alt="&.png" className='mx-auto' /></section>
                    <section>
                        <span className='text-black'>We Have </span>
                        Highly Experienced
                        <br />
                        <span className='text-black'>&</span>
                        <br />
                        Expert Teachers
                    </section>
                </div>
                <div className='flex px-24 py-16'>
                    <div className='w-1/2'>
                        {
                            data.map((m, index) => (
                                <div className='mb-3' key={index}>
                                    <section className='flex gap-2 text-2xl text items-center text-blue-600 font-semibold'>
                                        <Circle weight='fill' />
                                        <p>{m.heading}</p>
                                    </section>
                                    <p className='pl-8 py-3'>{m.desc}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className='w-1/2'>
                        <img src={teacher} alt='teacher avatar' className='ml-auto' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;