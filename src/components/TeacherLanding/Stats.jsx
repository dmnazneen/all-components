import React from 'react';

const Stats = () => {
    return (
        <div className='bg-blue-600 text-white flex items-stretch justify-between text-lg px-40 py-16 text-center'>
            <div className='flex gap-8'>
                <div className='py-4'>
                    <span className='text-[48px] font-medium'>8K +</span>
                    <p>Success Stories</p>
                </div>
                <div className='bg-white rounded h-full w-[5px]'></div>
            </div>
            <div className='flex gap-8'>
                <div className='py-4'>
                    <span className='text-[48px] font-medium'>200 +</span>
                    <p>Expert Teacher</p>
                </div>
                <div className='bg-white rounded h-full w-[5px]'></div>
            </div>
            <div className='flex gap-8'>
                <div className='py-4'>
                    <span className='text-[48px] font-medium'>50K +</span>
                    <p>Worldwide Students</p>
                </div>
                <div className='bg-white rounded h-full w-[5px]'></div>
            </div>
            <div className='flex gap-8'>
                <div className='py-4'>
                    <span className='text-[48px] font-medium'>310 +</span>
                    <p>Trendy Subjects</p>
                </div>
                <div className='bg-transparent rounded h-full w-[5px]'></div>
            </div>
        </div>
    );
}

export default Stats;
