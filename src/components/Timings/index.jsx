// import React, { useRef } from 'react';
// import Popper from '../Popper'
import { Info } from 'phosphor-react';
import ReactPlayer from 'react-player';
const Index = () => {
    // array of the seven days
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    // data will be displayed where the availability of the 
    const dataa = [
        {
            start: '08.30 AM',
            end: '10.30 AM',
            available_days: ['Sun', 'Tue']
        }, {
            start: '08.30 AM',
            end: '10.30 AM',
            available_days: ['Mon', 'Thu']
        }, {
            start: '08.30 AM',
            end: '10.30 AM',
            available_days: ['Sun', 'Mon']
        }, {
            start: '08.30 AM',
            end: '10.30 AM',
            available_days: ['Sun', 'Sat']
        },
    ]
    return (
        <div className='relative'>
            <div className='h-40 w-80 border border-black bg-red-200'
            // onMouseEnter={() => teachRef.current.classList.remove('hidden')}
            >
                <p>Teacher name</p>
            </div>
            {/* <Popper modalRef={teachRef}> */}
            <div className="absolute bg-white rounded-3xl top-0 left-[350px] before:content-[''] before:absolute before:border-[20px] before:border-y-transparent before:border-l-transparent before:border-r-white before:top-32 before:-left-10 drop-shadow-xl">
                <div>
                    <div className='mx-10 mt-10'>
                        <div className='w-[314px] h-[226px] bg-red-100 rounded-md overflow-hidden mx-auto'>
                            <ReactPlayer
                                className='react-player fixed-bottom'
                                url='https://www.youtube.com/watch?v=IbA9z9iMEJs'
                                width='100%'
                                height='100%'
                                controls={true}
                            />
                        </div>
                        <p className='text-gray flex gap-4 py-4'>
                            <Info color='#0047FF' size={24} weight='bold' />
                            <span>Times are shown in your local time</span>
                        </p>
                    </div>
                    <div className='px-5 pb-3 text-sm text-center'>
                        <div className='flex text-black font-semibold justify-between gap-1'>
                            <p className='w-20 mr-4'>Time</p>
                            {
                                days.map(m => <p key={m} className='w-[34px]'>{m}</p>)
                            }
                        </div>
                        {
                            dataa.map((data, index) => (
                                <div key={index} className='bg-white drop-shadow-md border border-gray/10 flex justify-between gap-1 mt-2 rounded-xl'>
                                    <p className='w-20 mr-4 text-primary_blue py-1'>
                                        {data.start} <br />
                                        <span className='text-black text-[12px] leading-[8px]'>to</span> <br />
                                        {data.end}
                                    </p>
                                    {
                                        days.map(m => {
                                            let divclr;
                                            if (data.available_days.includes(m)) divclr = 'bg-primary_blue border border-gray/10 shadow-3xl'
                                            else divclr = 'bg-white'
                                            return (
                                                <p key={m} className='w-[34px]'><span className={`${divclr} w-[25px] h-full inline-block rounded-full`}></span></p>
                                            )
                                        })
                                    }
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
            {/* </Popper> */}
        </div>
    );
}

export default Index;
