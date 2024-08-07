import React from 'react'

import '../css/reviews.css'

import EmblaCarousel from './EmblaCarousel'

const reviews = [
    {
        content: "\"I contacted Adele because I wanted to practice Spanish after several years of not engaging with it. My goals were pretty modest. Firstly, I wanted to gain confidence in my ability to have a basic conversation about a multitude of topics. Secondly, I wanted to have fun learning a language. Adele’s tuition appealed to me because she was able to work flexibly around my schedule, offering a combination of evening and weekend sessions. Additionally, I have a young child and there were times where my daughter needed to be in the session with us. Adele’s experience with children was evident and she was able to accommodate. Adele provided a fun and relaxed approach to learning that met my specific needs. Over the course of ten weeks I went from finding it difficult to remember basic words, to being able to speak confidently when I took my family on our first holiday to Spain. I would absolutely recommend Adele for learners of different abilities as she really excels at providing a bespoke learning package. And most importantly - she made it fun!\"",
        author: "Roseanna (Hull, UK)"
    },
    {
        content: "\"I had Adele as a tutor throughout my GCSE Spanish period and also for my A-Level Spanish period too. During the time I was studying, she helped me build my confidence and a passion for the subject and was a significant role in helping me achieve the grade I wanted. Adele made all learning so fun and was super interactive throughout sessions, making them enjoyable and putting me at ease with her supportive teaching. As well as being approachable, Adele is super knowledgeable in different aspects of the language and knows the curriculum like the back of her hand. I couldn't recommend her more! Thank you so much!\"",
        author: "Gabbie (Howden, UK)"
    },

    {
        content: "\"I decided last year would be the year I finally tried to learn Spanish. I made a bit of progress with the app with the green bird (don’t want to say its name in case I get sued!) but was starting to struggle with grammar as it doesn’t really explain things very well. I found Adele’s page on TikTok and loved how straightforward her explanations were and plucked up the courage to ask about lessons. I’ve never done anything like this before but Adele immediately put me at ease. Lessons are fun (they’re supposed to be as this is something I’m doing by choice, it’s not school!).  She explains things so clearly in a way that makes sense to me. We also cover topics that are useful and relevant to me as someone who wants to be able to speak Spanish on holiday and maybe manage something on Netflix without reading all of the subtitles one day! It often just feels like we’re having a chat, but then by the end of the hour I’ve learned something new and I’m really seeing the progress that I’ve made already. I’d thoroughly recommend learning Spanish with Adele and I’m so glad I took a chance! ¡Gracias!\"",
        author: "Louise (Newcastle-Upon-Tyne, UK)"
    }
]

const OPTIONS = { loop: false }

const Reviews = () => {

    return (
        <div className="reviews" id="testimonials">
            <div className="reviews-inner">
                <h1>WHY CHOOSE ME?</h1>
                <h1>Here's what a few of my students have to say!</h1>
                <EmblaCarousel slides={reviews} options={OPTIONS} />
            </div>
        </div>
    )
}

export default Reviews