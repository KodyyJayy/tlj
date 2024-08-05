import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import '../css/reviews.css'

const reviews = [
    "I contacted Adele because I wanted to practice Spanish after several years of not engaging with it. My goals were pretty modest. Firstly, I wanted to gain confidence in my ability to have a basic conversation about a multitude of topics. Secondly, I wanted to have fun learning a language. Adele’s tuition appealed to me because she was able to work flexibly around my schedule, offering a combination of evening and weekend sessions. Additionally, I have a young child and there were times where my daughter needed to be in the session with us. Adele’s experience with children was evident and she was able to accommodate. Adele provided a fun and relaxed approach to learning that met my specific needs. Over the course of ten weeks I went from finding it difficult to remember basic words, to being able to speak confidently when I took my family on our first holiday to Spain. I would absolutely recommend Adele for learners of different abilities as she really excels at providing a bespoke learning package. And most importantly- she made it fun! - Roseanna (Hull, UK)",
    "I had Adele as a tutor throughout my GCSE Spanish period and also for my A-Level Spanish period too. During the time I was studying, she helped me build my confidence and a passion for the subject and was a significant role in helping me achieve the grade I wanted. Adele made all learning so fun and was super interactive throughout sessions, making them enjoyable and putting me at ease with her supportive teaching. As well as being approachable, Adele is super knowledgeable in different aspects of the language and knows the curriculum like the back of her hand. I couldn't recommend her more! Thank you so much! - Gabbie (Howden, UK)"
]

const Reviews = () => {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: true}, [Autoplay({delay: 30000})])

    useEffect(() => {
        if (emblaApi) {
        console.log(emblaApi.slideNodes()) // Access API
        }
    }, [emblaApi])

    return (
        <div className="reviews">
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {
                        reviews.map(function(text, i) {
                            return (
                                <div key={i} className="embla__slide">{text}</div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Reviews