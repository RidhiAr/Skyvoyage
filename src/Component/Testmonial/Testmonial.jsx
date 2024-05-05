import React from 'react';
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
import ava04 from '../../assets/images/ava-4.jpg'
import ava06 from '../../assets/images/ava-6.jpg'

const Testmonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: 2000,
        slidesToShow: 3,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    }


    return <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p>
            Amble, the ultimate travel planner, has transformed my trip planning experience! With a plethora of destinations and activities to choose from, there's something for every traveler. Their intuitive website and detailed travel guides make itinerary creation a joy. Highly recommended!
            </p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'> Hitaishi Goel</h6>
                    <p>customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>
            Thanks to Amble, planning my travels has become a breeze! From exotic getaways to cultural adventures, they have it all. Their user-friendly platform and comprehensive destination details make trip planning a delightful experience. I'm hooked!
            </p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava02} className='w-25 h-10 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Alena Kaur</h6>
                    <p>customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>
            Kudos to Amble for making event discovery a breeze! Whether it's festivals or workshops, their platform has it all. The website's simplicity and detailed event descriptions make planning my weekends stress-free. I'm a fan!
            </p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava04} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Ayush Jain</h6>
                    <p>customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>
            Amble is my go-to for seamless travel planning! Whether it's exploring hidden gems or indulging in popular attractions, they've got me covered. The website's ease of use and abundance of travel information ensure I craft unforgettable itineraries every time. 10/10 recommend!
            </p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Akrati Pandey </h6>
                    <p>customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>
            With Amble, travel exploration has never been more enjoyable! From breathtaking destinations to unique experiences, they offer a world of possibilities. Their platform's simplicity and detailed destination guides make planning my trips stress-free. Thumbs up!
            </p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava06} className='w-25 h-35 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Abhishek Kumar </h6>
                    <p>customer</p>
                </div>
            </div>
        </div>

    </Slider>

}

export default Testmonial