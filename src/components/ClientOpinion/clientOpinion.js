import React , { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import GetTestimonialsOperation from './getTestImonials.gql';
import classes from './clientOpinion.css';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import 'pure-react-carousel/dist/react-carousel.es.css';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';


const ClientOpinion = () => {
    const [slides, setSlides] = useState([]);
    const {queries: { getTestimonials }} = GetTestimonialsOperation;
    const { data } = useQuery(getTestimonials);
    const settings = {
        dots: false,
        infinite: false,
        accessibility: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // responsive: [
        // {
        //     breakpoint: 1024,
        //     settings: {
        //       slidesToShow: 3,
        //       slidesToScroll: 1,
        //       infinite: true,
        //       dots: true
        //     }
        //   },
        //   {
        //     breakpoint: 600,
        //     settings: {
        //       slidesToShow: 2,
        //       slidesToScroll: 1,
        //       initialSlide: 2
        //     }
        //   },
        //   {
        //     breakpoint: 480,
        //     settings: {
        //       slidesToShow: 1,
        //       slidesToScroll: 1
        //     }
        //   }
        // ]
    };
    useEffect(() => {
        if(data) {
            const arr = [...data.testimonials.items, ...data.testimonials.items];
            console.log('arr', arr)
            setSlides(arr)
        }
    }, [data]) 

    return (
        <div className={classes.testimonials}>
            <h3>Here is what our clients think about us and our work</h3>
             <CarouselProvider
               totalSlides={6}
               naturalSlideHeight={300}
               naturalSlideWidth={300}
               orientation='horizontal'
               dragStep={1}
               visibleSlides={3}
            >
                <Slider className={classes.slider}>
                { slides.length && slides.map((testimonial, index) => 
                    <Slide key={index}>
                        <div  className={classes.testimonial}>
                                <img src={testimonial.image}/>
                                <div className={classes.nameCountryDiv}>
                                    <span className={classes.title}>{testimonial.author}</span>
                                    <span className={classes.country}>
                                        <img src={testimonial.flag} />
                                    </span>
                                </div>
                                <p className={classes.job}>{testimonial.job}</p>
                                <p>{testimonial.testimonial_content}</p>
                            </div>
                    </Slide>   
                    ) }
                </Slider>
      </CarouselProvider>
            {/* <Slider {...settings}>
            { data && data.testimonials.items.map((testimonial, index) => 
                 <div key={index} className={classes.testimonial}>
                    <img src={testimonial.image}/>
                    <div className={classes.nameCountryDiv}>
                        <span className={classes.title}>{testimonial.author}</span>
                        <span className={classes.country}>
                            <img src={testimonial.flag} />
                        </span>
                    </div>
                    <p className={classes.job}>{testimonial.job}</p>
                    <p>{testimonial.testimonial_content}</p>
                </div>
            ) }
            </Slider> */}
        </div>
    )
};

export default ClientOpinion;