import React from 'react';
import '../css/contact.css';
import banner from '../img/home/daddymakeoverbaner.jpeg'


//ACCORDIAN css
import '../css/Pages.css';
import daddyMakeover from '../img/home/daddyMakeover.jpg'

import TestMoni from './TestMoni'
import Board from './Board'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function DaddyMakeover() {

    const faqData = [
        {
            question: "What does a daddy makeover consist of? ",
            answer: "Daddy Makeovers are customizable procedures tailored to your specific needs. They often combine procedures like liposuction, tummy tuck (abdominoplasty), and gynecomastia surgery (for enlarged male breasts) to address stubborn fat deposits, loose skin, and achieve a more sculpted physique."
        },
        {
            question: " What is the recovery time for a daddy makeover?",
            answer: "Recovery time varies depending on the specific procedures performed. Dr. Garg will provide a detailed recovery timeline during your consultation. Generally, expect a few days to a week of rest followed by gradual reintroduction of activities."
        }
        ,
        {
            question: "Is there anything I can do to prepare for a Daddy Makeover before surgery?",
            answer: "Absolutely! Maintaining a healthy diet, staying hydrated, and stopping smoking (if applicable) can optimize your healing process. Dr. Garg will provide specific pre-operative instructions during your consultation."
        }
        ,
        {
            question: "How can I choose the right surgeon for my Daddy Makeover? ",
            answer: "Look for a qualified surgeon with extensive experience performing body contouring procedures for men. Consider factors like Dr. Garg's expertise, understanding of your goals, and a focus on natural-looking results. Read patient reviews and see before and after photos to gauge the surgeon's skills."
        },
        {
            question: "What are the differences between a Daddy Makeover and procedures like liposuction or tummy tuck alone?",
            answer: "A Daddy Makeover combines multiple procedures for a comprehensive body transformation. Liposuction or tummy tuck alone address specific concerns, while a Daddy Makeover offers a more tailored approach to sculpting your physique."
        }
        ,
        {
            question: "What kind of anesthesia is typically used during a Daddy Makeover?",
            answer: "The type of anesthesia used depends on the complexity of your procedure. Dr. Garg will discuss the options with you during your consultation, such as general anesthesia for more extensive procedures or local anesthesia with sedation for less complex ones."
        }
        ,
        {
            question: "What should I wear to my Daddy Makeover consultation?",
            answer: "Comfort is key! Wear loose-fitting clothing that allows Dr. Garg to easily examine the areas you wish to address."
        }
        ,
        {
            question: "Is it common to feel self-conscious about getting a Daddy Makeover?",
            answer: " Absolutely! It's normal to feel some apprehension. Dr. Garg and our team create a supportive and confidential environment to discuss your concerns and answer all your questions openly."
        }
        ,
        {
            question: " How long will the results of a Daddy Makeover last?",
            answer: "The results of your Daddy Makeover can be long-lasting with a healthy lifestyle that includes maintaining a balanced diet and regular exercise."
        }
        ,
        {
            question: "Can I finance a Daddy Makeover? ",
            answer: "We understand that financing can be helpful. At Shape U Deserve, we can discuss potential financing options available through third-party providers (subject to credit approval)."
        }
    ];

    return (
        <>
            <div className="banner">
                <img src={banner} alt="" style={{ height: "500px" }} />
                <h2 className='px-2 py-1' >Daddy Makeover </h2>
            </div>
            <div className="tab-container">
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active overview" id="nav-Overview-tab" data-bs-toggle="tab" data-bs-target="#nav-Overview" type="button" role="tab" aria-controls="nav-Overview" aria-selected="true">Overview</button>
                        <button className="nav-link expect" id="nav-expect-tab" data-bs-toggle="tab" data-bs-target="#nav-expect" type="button" role="tab" aria-controls="nav-expect" aria-selected="false">Before Procedure - What to Expect</button>
                        <button className="nav-link" id="nav-Before-tab" data-bs-toggle="tab" data-bs-target="#nav-Before" type="button" role="tab" aria-controls="nav-Before" aria-selected="false">After Procedure - What to Expect</button>
                        <button className="nav-link" id="nav-why-choose-tab" data-bs-toggle="tab" data-bs-target="#why-choose" type="button" role="tab" aria-controls="nav-why-choose" aria-selected="false">Why choose us</button>
                        <button className="nav-link" id="nav-faq-tab" data-bs-toggle="tab" data-bs-target="#nav-faq" type="button" role="tab" aria-controls="nav-faq" aria-selected="false">FAQ</button>
                        <button className="nav-link" id="nav-financing-tab" data-bs-toggle="tab" data-bs-target="#nav-financing" type="button" role="tab" aria-controls="nav-financing" aria-selected="false">Insurance & Financing</button>
                    </div>
                </nav>



                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-Overview" role="tabpanel" aria-labelledby="nav-Overview-tab">
                        <h1>Daddy Makeover in Los Angeles & Beverly Hills</h1>
                        <img src={daddyMakeover} alt="" height={400} style={{ float: "right" }} />
                        <p>Fatherhood is a journey filled with joy, laughter, and unconditional love. But let's face it, dads don't always prioritize their own well-being. Between sleepless nights, endless diaper changes, and the constant demands of workplace and family life, a man's physique can take a backseat. Studies show that over 60% of fathers experience significant weight gain within the first five years of fatherhood.</p>
                        <p>The good news? You don't have to settle for a body that doesn't reflect how you feel on the inside. Enter the Daddy Makeover, a combination of cosmetic procedures designed to help dads reclaim their pre-fatherhood body confidence and achieve a more sculpted, youthful appearance.</p>
                        <br />
                        <h2>What is a Daddy Makeover?</h2>
                        <p>A Daddy Makeover is a customized treatment plan tailored to address your specific concerns. It can include a variety of procedures, such as liposuction to eliminate stubborn fat deposits, sometimes an abdominoplasty (tummy tuck) to tighten loose skin and create a more toned midsection, or gynecomastia surgery (male breast reduction) for enlarged chest tissue. Dr. Garg, a well-qualified cosmetic surgeon conveniently located in Los Angeles and Beverly Hills, has extensive experience in performing successful Daddy Makeovers, helping fathers achieve natural-looking, long-lasting results.</p>
                        <br />
                        <h2>Benefits of a Daddy Makeover with Dr. Garg:</h2>
                        <ul>
                            <li><strong>Regain Confidence: </strong> Look and feel your best with a physique that reflects your active lifestyle.</li>
                            <li><strong>Improved Body Image: </strong> Eliminate stubborn pockets of fat and tighten loose skin for a more sculpted appearance.</li>
                            <li><strong>Customized Treatment:</strong> Dr. Garg works closely with you to create a personalized plan that addresses your specific needs and goals.</li>
                            <li><strong>Experienced Surgeon: </strong> Benefit from Dr. Garg's expertise and commitment to patient care in Los Angeles and Beverly Hills</li>
                        </ul>

                        <br />
                        <h2>Addressing Common Concerns: What a Daddy Makeover Can Target</h2>
                        <p>Stubborn belly fat, loose skin, and a loss of muscle definition are just some of the concerns dads often face. Daddy Makeover can address these specific issues and help you achieve a more sculpted, youthful appearance.</p>
                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Here's how a Daddy Makeover can target your specific concerns:</h3>
                        <ul>
                            <li><strong>Stubborn Belly Fat: </strong> Years of work stress, late-night snacks and prioritizing family time can lead to unwanted fat deposits around the midsection. Liposuction or a tummy tuck (abdominoplasty) can effectively eliminate these stubborn pockets of fat, resulting in a flatter, more toned stomach.</li>
                            <li><strong>Loose Skin and Stretch Marks: </strong>  Weight fluctuations can leave the skin loose with stretch marks. A tummy tuck can tighten loose skin in the abdominal area, while other procedures may address stretch marks depending on their severity. Dr. Garg will discuss the best options for your specific needs during your consultation.</li>
                            <li><strong>Gynecomastia (Enlarged Male Breasts): </strong> Enlarged chest tissue, also known as gynecomastia, can be a source of embarrassment for men. Daddy Makeovers can incorporate gynecomastia surgery to reshape and reduce the size of male breasts, restoring a masculine chest contour you always deserve.</li>
                            <li><strong>Loss of Muscle Definition: </strong> The demands of fatherhood can make it challenging to maintain muscle definition. Daddy Makeovers can't directly add muscle, but procedures like liposuction can help reveal existing muscle definition by eliminating overlying fat deposits. Additionally, Dr. Garg can discuss options to further enhance your belly tone by High Definition Liposuction. .</li>
                        </ul>
                        <li>The beauty of a Daddy Makeover lies in its customization. Dr. Garg will work closely with you to understand your specific concerns and goals. He will then create a personalized treatment plan that addresses your unique needs, whether it's focusing on eliminating belly fat, tightening loose skin, or a combination of procedures.</li>
                        <br />
                        <h2>Benefits of a Daddy Makeover:</h2>
                        <p>A Daddy Makeover is more than just cosmetic procedures; it's an investment in yourself, your confidence, and your overall well-being. Here's how a Daddy Makeover can significantly enhance your life:</p>
                        <h3>1. Sculpt Your Ideal Physique:</h3>
                        <ul>
                            <li><strong>Eliminate Stubborn Fat: </strong> Daddy Makeovers often incorporate liposuction or maybe sometimes tummy tucks to target unwanted fat deposits , resulting in a sculpted and toned physique. Liposuction removes stubborn fat pockets, while a tummy tuck gets rid of excess loose skin  to create a flatter stomach.</li>
                            <li><strong>Rediscover Muscle Definition: </strong> While Daddy Makeovers can't directly add muscle, procedures like liposuction can reveal existing muscle you've worked hard for. Imagine the frustration of having a toned core hidden under a layer of fat – liposuction can help showcase your body definition.</li>
                        </ul>
                        <br />
                        <h3>2. Boost Confidence and Social Interaction:</h3>
                        <ul>
                            <li><strong>Feel Great in Your Own Skin: </strong> Stepping out with a physique you're proud of can significantly impact your self-esteem. When you look good, you feel good. A Daddy Makeover can help you approach social settings with renewed confidence, allowing you to fully engage and enjoy interactions.</li>
                            <li><strong>Embrace New Activities: </strong> Feeling self-conscious about your body can hold you back from trying new things. A Daddy Makeover can eliminate that barrier, allowing you to participate in activities you might have previously avoided, like joining a sports league or hitting the beach with your family.</li>
                        </ul>
                        <br />
                        <h3>
                            3. Enhance Energy Levels and Well-being:
                        </h3>
                        <ul>
                            <li><strong>Improved Physical Fitness:  </strong>By eliminating excess fat and tightening loose skin, Daddy Makeovers can improve your range of motion and make physical  activities more comfortable. It can be a kickstart to gain muscles. This can lead to increased energy levels and a renewed motivation to stay active.</li>
                            <li><strong>Long-Term Health Benefits: </strong> Studies show that maintaining a healthy weight and body composition can reduce the risk of chronic diseases like heart disease and diabetes. Daddy Makeovers can be a kickstart to a healthier lifestyle, promoting long-term well-being.</li>
                        </ul>
                        <br />
                        <h3>4. Expand Your Wardrobe Options:</h3>
                        <ul>
                            <li><strong>Break Free from Baggy Clothes: </strong> Loose-fitting clothing can hide your physique, but it can also make you feel frumpy and self-conscious. A Daddy Makeover can allow you to confidently wear more fitted clothing styles that flatter your new, sculpted figure.</li>
                            <li><strong>Express Your Personal Style: </strong> When  confident with your appearance, you're more likely to experiment with fashion and express your personal style. A Daddy Makeover can open the door to exploring new clothing options and feeling confident in whatever you wear.</li>
                        </ul>
                        <br />
                        <h3>5. Project a Youthful and Energetic Image:</h3>
                        <ul>
                            <li><strong>Regain Your Youthful Look: </strong> The procedures included in a Daddy Makeover can address signs of aging like loose skin and stretch marks, giving you a more youthful and energetic appearance.</li>
                            <li><strong>First Impressions Matter: </strong>  In your professional  and personal life, first impression  does matter. A sculpted physique and confident demeanor can create a positive and youthful image that reflects your active lifestyle and inner vitality.</li>
                        </ul>
                        <br />
                        <h2>Ideal Candidates for Daddy Makeover</h2>
                        <p>The  body features like stubborn fat deposits, loose skin, and a physique that doesn't reflect your active lifestyle. If you're a man considering a Daddy Makeover to reclaim your confidence and achieve a more sculpted appearance, here's how to determine if it's right for you:</p>
                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Ideal Candidates:</h3>
                        <ul>
                            <li><strong>Ready to Embrace Change: </strong> You're committed to improving your appearance and overall well-being through a combination of cosmetic procedures and a healthy lifestyle.</li>
                            <li><strong>Realistic Expectations: </strong> You understand that Daddy Makeovers enhance your existing physique, not create an entirely new one. Dr. Garg will discuss achievable goals during your consultation.</li>
                            <li><strong>Good Overall Health: </strong> You're in good physical health and free from any major medical conditions that could impact surgery.</li>
                        </ul>
                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Common Concerns Addressed by Daddy Makeovers:</h3>
                        <ul>
                            <li><strong>Stubborn Fat Deposits: </strong> Liposuction can target unwanted fat deposits around the abdomen, chest, or flanks.</li>
                            <li><strong>Loose Skin and Stretch Marks: </strong> A tummy tuck (abdominoplasty) can tighten loose skin in the midsection, while other procedures may address stretch marks depending on their severity.</li>
                            <li><strong>Gynecomastia: </strong> Daddy Makeovers can incorporate gynecomastia surgery to reshape and reduce the size of male breasts.</li>
                            <li><strong>Loss of Muscle Definition: </strong> While not directly adding muscle, liposuction can reveal existing muscle definition by eliminating overlying fat.</li>
                        </ul>
                        <p>The best way to determine candidacy for a Daddy Makeover is to schedule a personalized consultation with Dr. Garg. During this meeting, he will:</p>
                        <ul>
                            <li>Discuss your goals and specific concerns about post-fatherhood body changes.</li>
                            <li>Evaluate your overall health and medical history to ensure you're a good candidate for surgery.</li>
                            <li>Recommend the most suitable procedures to achieve your desired results, creating a tailored treatment plan.</li>
                        </ul>
                    </div>


                    <div className="tab-pane fade" id="nav-Before" role="tabpanel" aria-labelledby="nav-Before-tab">
                        <h2>Daddy Makeover: Recovery, Results, and Before & After Photos</h2>
                        <p>The journey towards a more sculpted and confident you doesn't end after your Daddy Makeover procedures. Here's a roadmap outlining what to expect in terms of recovery, the transformative results you can achieve, and a glimpse into the possibilities with before & after photo gallery.</p>
                        <br />
                        <h3>1. Recovery:</h3>
                        <p>Following your Daddy Makeover, you'll enter a crucial recovery phase to optimize healing and support your new physique. Dr. Garg and his team will provide comprehensive post-operative care instructions, including:</p>
                        <ul>
                            <li>Pain Management: You'll receive a personalized pain management plan to ensure your comfort throughout the recovery process.</li>
                            <li>Rest and Activity Restrictions: Specific guidelines will be provided regarding rest and activity  resumption to promote optimal healing and minimize the risk of complications.</li>
                            <li>Wound Care: Detailed instructions for proper wound care will be given to minimize scarring and ensure a smooth recovery. Dr. Garg's team will be available to address any concerns you may have during this time.</li>
                        </ul>
                        <br />
                        <h3><FontAwesomeIcon icon={faCheck} className='mark' />  Long-Term Results</h3>
                        <p>Daddy Makeovers deliver long-lasting improvements designed to enhance your confidence and overall well-being. Here are some of the transformative results you can expect:</p>
                        <ul>
                            <li>Sculpted Physique: Witness the sculpted results you've envisioned, whether it's a flatter stomach thanks to a tummy tuck, a more defined chest from liposuction, or a restored masculine contour following gynecomastia surgery.</li>
                            <li>Improved Body Image: As you recover and see the dramatic changes in before & after photo gallery, you'll experience a significant boost in self-esteem and confidence. Imagine feeling comfortable and empowered in any clothing you choose.</li>
                            <li>Increased Energy Levels: By eliminating excess fat and addressing loose skin, Daddy Makeovers can improve your range of motion and make physical activity more enjoyable. This can lead to increased energy levels and a renewed motivation to stay healthy.</li>
                        </ul>

                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Before & After Photos</h3>
                        <p>While words can describe the potential, our before & after photo gallery offers a powerful testament to the transformative power of Daddy Makeovers performed by Dr. Garg. Browse real patient results and see the dramatic improvements in physique and overall appearance.</p>
                    </div>



                    {/* ------------------------------------------------------------------------------------------>> Why Choose us <<------------------------------------------------------------------------------------------------------------------------------ */}
                    <div className="tab-pane fade why-choose" id="why-choose" role="tabpanel" aria-labelledby="nav-why-choose">
                        <h2>Why Choose Dr. Garg at Shape U Deserve for Daddy Makeover?</h2>
                        <p>Choosing the right doctor for your Daddy Makeover is crucial. At Shape U Deserve, Dr. Garg stands out for his exceptional qualifications, experience, and dedication  in helping dads to achieve the natural-looking, sculpted results.</p>
                        <br />
                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Why Dr. Garg is the Perfect Choice for Your Daddy Makeover:</h3>
                        <ul>
                            <li><strong>Extensive Experience:  </strong>Dr. Garg possesses extensive experience performing body contouring procedures specifically for men. He understands the unique challenges dads face, such as stubborn fat deposits and loose skin.</li>
                            <li><strong>Natural-Looking Results: </strong> Dr. Garg prioritizes achieving natural-looking results that complement your body type. He believes in enhancing your existing physique, not creating an entirely new one.</li>
                            <li><strong>Compassionate Understanding: </strong> Fatherhood is a rewarding yet demanding journey. Dr. Garg understands the physical changes that can occur and is dedicated to helping you regain your confidence through a Daddy Makeover.</li>
                        </ul>
                        <p>Beyond Dr. Garg's expertise, Shape U Deserve offers a comprehensive and supportive environment to ensure a positive Daddy Makeover experience:</p>
                        <ul>
                            <li><strong>Personalized Approach:  </strong>We believe in a one-size-fits-one approach. Dr. Garg will take the time to understand your goals, concerns, and medical history to create a customized treatment plan tailored to your unique needs.</li>
                            <li><strong>Advanced Technology: </strong> Shape U Deserve utilizes the latest advancements in body contouring technology to ensure optimal results with minimal downtime.</li>
                            <li><strong>Supportive Environment: </strong> Our team is dedicated to providing a welcoming and supportive atmosphere throughout your entire Daddy Makeover journey. We'll answer your questions, address your concerns, and guide you every step of the way.</li>
                        </ul>
                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Hear from Our Satisfied Patients</h3>
                        <p>Numerous satisfied patients have shared positive reviews about Dr. Garg and Shape U Deserve.  These testimonials showcase Dr. Garg's dedication to achieving beautiful, natural-looking results that exceed expectations.</p>
                        <blockquote> <em>"Quote about positive experience with recovery and results from Patient A" </em>- Patient  Testimonials.</blockquote>

                    </div>
                    {/* ------------------------------------------------------------------------------------------>> Why Choose us <<------------------------------------------------------------------------------------------------------------------------------ */}



                    <div className="tab-pane fade" id="nav-expect" role="tabpanel" aria-labelledby="nav-expect-tab">
                        <h2>Daddy Makeover Process: A Step-by-Step Guide</h2>
                        <p>Taking the leap towards a Daddy Makeover can be exciting, but navigating the process can feel overwhelming. Here's a detailed roadmap outlining each step, highlighting Dr. Garg's expertise to ensure a smooth and successful transformation:</p>
                        <h3>1. Consultation:</h3>
                        <p>This initial meeting is the cornerstone of your Daddy Makeover journey. Dr. Garg, a well-qualified cosmetic surgeon with extensive experience in Daddy Makeovers, fosters a welcoming environment where you can openly discuss your goals and concerns. Here's what you can expect:</p>
                        <ul>
                            <li><strong>In-Depth Discussion: </strong> Dr. Garg actively listens as you share your desired outcomes, specific areas of concern (stubborn belly fat, loose skin), and your overall vision for your physique. He encourages open communication to understand your motivations and expectations.</li>
                            <li><strong>Comprehensive Evaluation: </strong> Dr. Garg will conduct a thorough physical examination and review your medical history. This ensures you're a suitable candidate for surgery and helps Dr. Garg identify any potential concerns. Blood tests may also be recommended to assess your overall health.</li>
                            <li><strong>Personalized Treatment Plan: </strong> Based on your goals, body composition, and health, Dr. Garg will craft a customized Daddy Makeover plan. He explains the rationale behind each procedure recommendation, ensuring you understand the benefits and potential risks involved. This plan might include liposuction, tummy tuck (abdominoplasty), gynecomastia surgery, or a combination tailored to your unique needs.</li>
                        </ul>
                        <br />
                        <h3>2. Preoperative Preparation</h3>
                        <p>Once you've decided to move forward we will guide you through pre-operative preparations, ensuring your body is optimized for successful surgery and recovery. Here's what you can expect:</p>
                        <ul>
                            <li><strong>Detailed Instructions: </strong> You'll receive clear and comprehensive pre-operative instructions, including dietary adjustments to optimize your health and healing. Dr. Garg may also advise on modifying or stopping certain medications to minimize potential complications.</li>
                            <li><strong>Personalized Support: </strong> The team will address any questions you have regarding post-operative supplies like compression garments, which can aid healing and support your new physique.</li>
                            <li><strong>Preparation for Anesthesia: </strong> Dr. Garg works closely with a board-certified anesthesiologist to discuss your anesthesia options and ensure a safe and comfortable surgical experience.</li>
                        </ul>
                        <br />
                        <h3>3. The Procedures</h3>
                        <p>The specific procedures involved in your Daddy Makeover will depend on your customized treatment plan. Here's a closer look at some common procedures Dr. Garg expertly performs:</p>
                        <ul>
                            <li><strong>Liposuction: </strong> Dr. Garg utilizes advanced liposuction techniques to remove unwanted fat deposits from areas like the abdomen, flanks, or chest. His meticulous approach ensures optimal results while minimizing scarring.</li>
                            <li><strong>Tummy Tuck (Abdominoplasty): </strong> Dr. Garg personalizes tummy tucks to address loose skin, tighten abdominal muscles, and create a flatter, more toned midsection. He leverages his expertise to achieve natural-looking results that complement your body type.</li>
                            <li><strong>Gynecomastia Surgery: </strong> For men experiencing enlarged male breasts, Dr. Garg offers gynecomastia surgery. This procedure reshapes and reduces breast tissue, restoring a more masculine chest contour. Dr. Garg prioritizes minimizing scarring and ensuring a natural appearance.</li>
                        </ul>
                        <br />
                        <h3>4. Recovery:</h3>
                        <p>Following your Daddy Makeover procedures, you'll enter a recovery phase. Dr. Garg will provide detailed instructions on post-operative care, including:</p>
                        <ul>
                            <li><strong>Pain Management: </strong> Medication may be prescribed to manage any discomfort.</li>
                            <li><strong>Rest and Activity Restrictions: </strong> Specific guidelines will be provided regarding rest and activity  resumption to promote optimal healing.</li>
                            <li><strong>Wound Care: </strong> Instructions will be given for proper wound care to minimize scarring and ensure optimal healing.</li>
                        </ul>
                        <br />
                        <h3>5. Follow-up Appointments:</h3>
                        <p>Regular follow-up appointments with Dr. Garg are crucial to monitor your healing progress and ensure optimal results. During these visits, Dr. Garg will:</p>
                        <ul>
                            <li><strong>Assess Healing: </strong> He will monitor the healing of your incisions and address any questions or concerns you may have.</li>
                            <li><strong>Evaluate Results: </strong> Dr. Garg will assess the overall outcome and make adjustments to your post-operative care plan if necessary.</li>
                            <li><strong>Celebrate Your Transformation: </strong> As you recover and witness the results of your Daddy Makeover, Dr. Garg will be there to celebrate your transformation with you.</li>
                        </ul>
                        <br />
                        <h2>Understanding the Cost of Daddy Makeover </h2>
                        <p>At Shape U Deserve, we understand that transparency is key when considering a Daddy Makeover. We are committed to providing upfront and honest information about the costs associated with your transformation journey.</p>
                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Understanding Daddy Makeover Costs:</h3>
                        <p>The total cost of your Daddy Makeover will vary depending on several factors, including:</p>
                        <ul>
                            <li><strong>The specific procedures chosen: </strong> Liposuction, tummy tuck, gynecomastia surgery, or a combination of these procedures will all impact the overall cost.</li>
                            <li><strong>The complexity of your individual case: </strong> The extent of the procedures and the amount of time required will influence the cost.</li>
                            <li><strong>Anesthesia fees: </strong> The type of anesthesia used will be factored into the overall cost.</li>
                            <li><strong>Facility fees: </strong> The fees associated with using the surgical facility will be included.</li>
                        </ul>
                        <br />
                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Financing Options:</h3>
                        <p>We understand that financing can be a helpful tool for managing the cost of your Daddy Makeover. We partner with  reputed third-party financing providers to offer various financing options (subject to credit approval). Our team can assist you in exploring these options during your consultation.</p>
                        <p>The best way to determine the specific cost of your Daddy Makeover is to schedule a consultation with Dr. Garg. During this personalized meeting, he will discuss your goals, evaluate your needs, and recommend the most suitable procedures to achieve your desired results. You'll then receive a transparent cost breakdown for your customized treatment plan.</p>
                    </div>

                    <div className="tab-pane fade nav-faq " id="nav-faq" role="tabpanel" aria-labelledby="nav-faq-tab">
                        <h2>Daddy Makeover: Frequently Asked Questions (FAQs)</h2>
                        {/* ----------------------------------------- start accordion-------------------------------------------------------------------------------------------------------------------------
----------------------------------------- start accordion---------------------------------------------------------------------- */}
                        <div className="accordion" id="accordionExample">
                            {faqData.map((item, index) => (
                                <div className="accordion-item" key={`accordionItem${index}`}>
                                    <h2 className="accordion-header" id={`heading${index + 1}`}>
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index + 1}`} aria-expanded="false" aria-controls={`collapse${index + 1}`}>
                                            {item.question}
                                        </button>
                                    </h2>
                                    <div id={`collapse${index + 1}`} className="accordion-collapse collapse" aria-labelledby={`heading${index + 1}`} data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            {item.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* ----------------------------------------- start accordion----------------------------------------------------------------------
----------------------------------------- start accordion---------------------------------------------------------------------- */}

                    </div>
                    <div className="tab-pane fade" id="nav-financing" role="tabpanel" aria-labelledby="nav-financing-tab">
                        <h2>Insurance & Financing</h2>
                        <p>At Shape U Deserve, we believe transparency is key when considering a Daddy Makeover. Here's what you need to know about pricing, financing options, and insurance coverage:</p>
                        <br />
                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Transparent Pricing Structure:</h3>
                        <p>The total cost of your Daddy Makeover will vary depending on several factors, including:</p>
                        <ul>
                            <li>The specific procedures chosen (liposuction, tummy tuck, gynecomastia surgery, etc.)</li>
                            <li>The complexity of your individual case</li>
                            <li>Anesthesia fees</li>
                            <li>Facility fees</li>
                        </ul>
                        <p>During your consultation with Dr. Garg, you'll receive a detailed breakdown of the estimated costs associated with your personalized treatment plan. This open communication ensures you can make informed decisions about your investment in yourself.</p>
                        <br />
                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Financing Options:</h3>
                        <p>We understand that financing can be a helpful tool for managing the cost of your Daddy Makeover. We partner with reputable third-party financing providers to offer various financing options. Our team can assist you in exploring these options during your consultation.</p>
                        <br />
                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Insurance Coverage:</h3>
                        <p><strong>It's important to note that Daddy Makeovers are typically considered cosmetic procedures and are not usually covered by insurance.</strong> However, in some rare cases, a portion of the procedure might be covered if deemed medically necessary. We recommend contacting your insurance provider directly to inquire about potential coverage for specific procedures within your Daddy Makeover plan.</p>
                        <p>Investing in a Daddy Makeover is an investment in your confidence, well-being, and a more sculpted physique. Dr. Garg and our team are committed to providing you with clear information about the costs associated with your transformation journey.</p>
                        <br />
                        <h2>Schedule Your Free Daddy Makeover Consultation Today</h2>
                        <p>Schedule your FREE Daddy Makeover consultation at Shape U Deserve today!</p>
                        <p>This personalized meeting is your opportunity to:</p>
                        <ul>
                            <li>Connect with Dr. Garg: Discuss your goals and concerns directly with Dr. Garg, a highly experienced and qualified surgeon dedicated to helping men achieve natural-looking, sculpted results.</li>
                            <li>Explore Your Options: Dr. Garg will listen attentively to your unique needs and recommend the most suitable procedures to address your concerns, whether it's liposuction for stubborn fat deposits, a tummy tuck for loose skin, or gynecomastia surgery for enlarged male breasts.</li>
                            <li>Get Answers: Have all your questions answered in a supportive and confidential environment. Dr. Garg and our team are committed to ensuring you feel comfortable and informed throughout your consultation.</li>
                            <li>Receive a Personalized Plan: Dr. Garg will create a customized Daddy Makeover plan tailored to your specific needs and desired outcomes. You'll receive a transparent breakdown of the estimated costs, explore potential financing options (if applicable), and discuss any questions you have about insurance coverage.</li>
                        </ul>
                        <p>A Daddy Makeover is more than just a physical transformation; it's an investment in your confidence, well-being, and a renewed sense of self. Don't wait any longer to take the first step towards a more sculpted you.</p>
                        <strong>Schedule your FREE Daddy Makeover consultation today. Take control of your journey and unlock a path to enhanced well-being.</strong>
                        <br />
                        <ul>
                            <li><strong>Phone: </strong> <i>Contact us at <span style={{ color: "blue", }}>+1 424-666-1260</span> to schedule your consultation.</i> </li>
                            <li><strong>Online Form: </strong> Fill out our convenient online form to request a consultation at your earliest convenience. We'll get back to you promptly to confirm your appointment.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Board />
            <TestMoni />
        </>

    );
}
