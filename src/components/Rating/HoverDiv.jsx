/* eslint-disable react/prop-types */
import UserRating from './UserRating';
import Stars from './Stars';

const HoverDiv = ({ rating, stars, ratingsArr, leaveRating = true }) => {
    const calcPercent = (arr) => {
        let info = [];
        for (let i = 1; i < 6; i++) {
            const calc = Math.floor((arr.filter(m => m === i).length / arr.length) * 100);
            info.push(calc);
        }
        return info
    }
    const info = calcPercent(ratingsArr)
    return (
        <div className="w-[370px] rounded bg-white">
            <div className='flex gap-4 items-center px-8 pt-4'>
                <span className='font-normal text-2xl'>{rating}</span>
                <Stars stars={stars} gap={'gap-2'} />
                <p className='text-blue text-sm ml-auto tracking-wider font-light'>Review({ratingsArr.length})</p>
            </div>
            <div className='px-8 border-b border-black/10 py-6 flex flex-col-reverse gap-1'>
                {
                    info.map((m, index) => {
                        const width = `${m}%`;
                        return (
                            <div key={index} className='flex items-center gap-4'>
                                <p>{index + 1}star</p>
                                <section className='h-3 w-[200px] bg-barbg rounded overflow-hidden'>
                                    <p style={{ height: '100%', width }} className='rounded bg-golden'></p>
                                </section>
                                <p className='ml-auto'>{m}%</p>
                            </div>
                        )
                    })
                }
            </div>
            {
                leaveRating && <UserRating />
            }
        </div>
    );
}

export default HoverDiv;
