import { useState } from "react";
import "./Testimonials.css"

const testimonials = [
    {
        id: 1,
        author: "Nikki H.",
        review: ["I used Mousa Events for my daughter's wedding. Amanda is professional, very detailed and incredibly helpful with suggestions on creating the perfect experience for everyone! I highly recommend Mousa Events!"]
    },
    {
        id: 2,
        author: "Chelsea W.",
        review: ["My personal experience working with Amanda has been one of the best. I struggled with trying to plan my wedding on my own, so I contacted Amanda and she took over all the details allowing me to relax and enjoy all the days leading up to my special day. The best part of having Amanda plan my wedding was the personal friendship I gained with her. She was always there to answer your questions or concerns even if you called her late at night. For any event you're looking to plan, Amanda will take the stress off your shoulders and give you a day that creates lasting memories for you and your guest. I look forward to working with her for all my future events."]
    },
    {
        id: 3,
        author: "Chris F.",
        review: ["Amanda made my 60th birthday party a fun and stress free event! I have no reservations hiring her again for another event! She is amazing!"]
    },
    {
        id: 4,
        author: "Mike G.",
        review: ['Wow. 300 people in our backyard. Flo Rida as musical talent. A stage, lighting, sound, catering, bartending, flowers, tables, a DJ, parking valets, police officers, and on and on and on. And Amanda pulled it all off for us. She worked tirelessly for days and weeks to create the ultimate graduation party. And a huge success! As important to us, Amanda is truly professional, and just a really good person. She has a great warm but always "in control" style that enabled us to enjoy our event to the max, knowing that Amanda and her team would sweat all the details and make it all come together. We will be working with Amanda for any event we ever have, and can recommend her to anyone without any reservations whatsoever. She is the best.']
    },
    {
        id: 5,
        author: "Hien R.",
        review: ["I met Amanda when I was looking for venues for my wedding. When I met her at the Ramallah Club off Parental Road, I was really iffy about the place but couldn't say no to Amanada. She was so sweet and upfront about everything. She made you feel welcome and she didn't try to sugarcoat anything just to book the venue. After I found out she was a coordinator, I was sold! She was awesome! She has the game on lock! She was on it with my vendors and on me :) Definitely recommend her for any event! Love her! Thanks Amanda for making my wedding experience special."]
    },
    {
        id: 6,
        author: "Crystal M.",
        review: ["Amanda Mousa made my dreams come true and I hihgly recommend her services to anyone! Just days before my wedding, weather caused a crunch to change to an indoor reception venue and she executed flawlessly. I kept getting glimpses of her on wedding day and felt very confident knowing things were in her hands. Pressure, crowds, vendors, wedding party and more, she managed it all. Wouldn't have happened without her!"]
    },
    {
        id: 7,
        author: "Britt",
        review: [
            "Amanda and her team worked with my sister-in-law to plan our Gender Reveal party ahead of the birth of our first child. This was one of the more intimate celebrations we've had, and one of the most special. From initial conversations with Amanda, she listened to everything that was important to us and seamlessly orchestrated every last detail. The team worked in beautiful surprise touches and personalized them to my husband and me, knowing this was a huge moment for our little family. The evening flowed so smoothly, and all of our guests had a wonderful time eating and mingling leading up to the big reveal.",
            "We have had the pleasure of working with Mousa Events for family events year round - from smaller showers to giant wedding receptions and grad bashes - you name it, they can flawlessly plan it. And of course we are thrilled to have Amanda and her team planning our daughter's first birthday as we speak! If you are looking for attentive, detail-oriented, and talented event planners - look no further than Amanda and her team!"
        ]
    },
    {
        id: 8,
        author: "Lorraine K.",
        review: [
            `There aren't enough words to describe how incredible Amanda is. She took away all the worries I had of planning a wedding. Her constant reassurance kept me sane. My wedding was absolutely beautiful. She planned the entire thing and didn't miss a single beat. I still get compliments on how amazing everything turned out. Now I can't imagine planning anything without her. She will forever be in my "who do you recommend" book.`
        ]
    }
]

const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    const prevTestimonial = () => {
        setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
    };

    const nextTestimonial = () => {
        setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
    };

    return (
        <div className="testimonialBody">
            <p className="testimonialIntro">testimonials</p>
            <p className="introPara">At Mousa Events, we pride ourselves on creating unforgettable experiences for our clients. Don&apos;t just take our word for it—hear what our clients have to say! Scroll through some heartfelt testimonials from those who have entrusted us with their most important moments. From weddings and corporate events to birthday parties and more, see how we&apos;ve helped turn their visions into reality.</p>

            <div className="testimonialsContainer">
                <button className="scroll-btn left" onClick={prevTestimonial}><i className="fa-solid fa-arrow-left"></i></button>
                <div className="testimonial">
                    <i className="fa-solid fa-quote-left"></i>
                    {testimonials[current].review.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                    ))}
                    {/* <p>{testimonials[current].review}</p> */}
                    <i className="fa-solid fa-quote-right"></i>
                    <p className="testimonialAuthor"> -{testimonials[current].author}</p>
                </div>
                <button className="scroll-btn right" onClick={nextTestimonial}><i className="fa-solid fa-arrow-right"></i></button>
            </div>

        </div>

    );
}

export default Testimonials;
