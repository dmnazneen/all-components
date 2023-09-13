import { Star } from 'phosphor-react';
import { useState } from 'react';

const UserRating = () => {
    const [userrating, setUserrating] = useState(null);
    const [hover, setHover] = useState(null);

    // sets the value of the rating given by the user.
    const onReview = (rating) => {
        setUserrating(rating)
    }
    return (
        <div className='flex justify-between px-8 py-4'>
            <p className='font-semibold'>Leave a rating</p>
            <div className='flex gap-4'>
                {
                    [1, 2, 3, 4, 5].map((m) => {
                        return (
                            <label
                                key={m}
                                onMouseEnter={() => setHover(m)}
                                onMouseLeave={() => setHover(null)}
                            >
                                <input hidden type='radio' name='rating' value={m} onClick={() => onReview(m)} />
                                {m <= (hover || userrating) ?
                                    <Star key={m} size={20} color='#FCA311' weight='fill' />
                                    :
                                    <Star key={m} size={20} />}
                            </label>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default UserRating;
