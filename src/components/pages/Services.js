import React, { useEffect } from 'react';
import '../css/contact.css';
// import banner from '../img/home/banner.png'
import banner from '../img/gif_for_top/bbl.gif'
import AOS from 'aos';



//ACCORDIAN css
import '../css/Pages.css';
import ButtLift from '../img/home/butt.jpg'

import TestMoni from './TestMoni'
import Board from './Board'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';




export default function Services() {
    useEffect(() => {
        AOS.init({
            duration: 500,
            easing: "ease-out-cubic",
        });
    }, []);

    const faqData = [
        {
            question: "What is the cost of a Brazilian Butt Lift?",
            answer: "Brazilian Butt Lift costs vary depending on individual factors. Dr. Garg's office provides transparent pricing breakdowns during consultations, typically including surgeon fees, anesthesia, and facility costs. Geographic location and surgical complexity can also influence the final cost."
        },
        {
            question: " Am I a good candidate for a Brazilian Butt Lift?",
            answer: "Ideal BBL candidates generally have enough body fat for harvesting and are in overall good health. During your consultation with us we can assess your individual health and body composition to determine if BBL is right for you."
        }
        ,
        {
            question: "What is the recovery process like after a Brazilian Butt Lift?",
            answer: "Following your BBL, expect some temporary discomfort and swelling. The first week is typically the most challenging.  Complete recovery can take several weeks to 2-3 months. "
        }
        ,
        {
            question: "What are the risks associated with a Brazilian Butt Lift?",
            answer: "As with any surgery, BBL carries some potential risks, such as infection, bleeding, asymmetry, and fat necrosis (formation of hard lumps)."
        },
        {
            question: "Can I see before and after photos of Brazilian Butt Lift results",
            answer: "Yes, we offer a gallery of high-quality before and after photos showcasing real patient results (with their consent). These images can help you visualize potential outcomes and shape your expectations."
        }
        ,
        {
            question: "Does insurance cover Brazilian Butt Lift surgery?",
            answer: "Brazilian Butt Lift surgery is typically considered an elective procedure and is not covered by most insurance plans."
        }
        ,
        {
            question: "What happens if I don't have enough fat for a Brazilian Butt Lift?",
            answer: " If you don't have sufficient fat for a conventional BBL, you might be better suited for a Skinny BBL. This procedure involves liposuction of fat from multiple areas to gather enough fat for transfer to your buttocks."
        }
        ,
        {
            question: "How long will my results from a Brazilian Butt Lift last?",
            answer: "With proper care, including maintaining a healthy weight and regular exercise, BBL results can be long-lasting for many years."
        }
        ,
        {
            question: "How can I prepare for a Brazilian Butt Lift surgery?",
            answer: "Eating healthy meals and  drinking plenty of water within the weeks of your surgical treatment will  help your digestive system and your body  to defend from infections."
        }
        ,
        {
            question: "What are the differences between a Brazilian Butt Lift and buttock implants?",
            answer: "Buttock implants are typically made of silicone material and offer immediate volume. However, BBL utilizes your own fat for a natural look and feel. Implants may also feel less natural and can have a different complication profile."
        }
        ,
        {
            question: "What is Sculptra BBL?",
            answer: "Sculptra BBL is a non-surgical alternative for getting a fuller, more lifted appearance of the buttocks. It utilizes an injectable filler composed of poly-L-lactic acid, which stimulates collagen production in the skin, leading to a gradual increase in volume and improvement over time."
        }
    ];

    return (
        <>
            <div className="banner">
                <img src={banner} alt="" />
                <h2 className='px-2 py-1'>Brazilian Butt Lift</h2>
            </div>


            <div className="tab-container" style={{ overflow: "hidden" }}>
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
                        <h1>Brazilian Butt Lift(BBL) in Los Angeles & Beverly Hills</h1>
                        <img src={ButtLift} alt="" height={350} data-aos="fade-right" style={{ float: "right" }} />
                        <p><span className='italic'>Brazilian Butt Lift(BBL) </span>is a cosmetic surgery enhancing the size and shape of the buttocks through fat transfer. It includes harvesting fats from different body areas through liposuction and injecting  it into the buttocks, resulting in a curvier and more excellent proportionate appearance. <span className='italic'>Ideal for the ones searching for buttock enlargements without implants, a Brazilian Butt Lift gives natural results.</span> </p>
                        <h2 className='services-heding-h2'>Understanding Brazilian Butt Lift(BBL)</h2>
                        <h3 className='services-heding-h4'><FontAwesomeIcon icon={faCheck} className='mark' />  What is a Brazilian Butt Lift?</h3>
                        <p>You may wonder what Brazilian butt lift is. The Brazilian Butt Lift (BBL) is a cosmetic surgery procedure designed to enhance the appearance of your buttocks, specifically focusing on both shape and volume. It achieves this by strategically transferring fat harvested from other areas of your body. Here's a closer look at the process: </p>
                        <ul className='li-services'>
                            <li><strong>Liposuction: </strong> During this initial step, a tumescent solution (local anesthesia) is injected into targeted areas like your abdomen, hips, or thighs. This solution helps numb the area and facilitates the fat removal process. A thin surgical cannula (tube) is then inserted, and a specialized suction device gently removes unwanted fat deposits.</li>
                            <li><strong>Fat Processing: </strong> The harvested fat isn't directly injected into the buttocks. It undergoes a meticulous processing step to ensure optimal viability for transfer. This process typically involves gentle purification to remove excess fluids and debris, leaving behind healthy fat cells for transfer.</li>
                            <li><strong>Fat Transfer & Sculpting: </strong> Once processed, the fat is strategically injected into specific areas of your buttocks using blunt cannulas. Dr. Garg will carefully sculpt and reshape the buttocks with the transferred fat to achieve your desired outcome, aiming for a natural-looking, curvier appearance.</li>
                        </ul>
                        <p>Unlike traditional butt augmentation with implants, the BBL offers a significant advantage: natural-looking results. Since the procedure utilizes your own body fat, the final outcome seamlessly integrates with your existing tissues, creating a more organic and harmonious aesthetic.</p>

                        <h2>Benefits of Brazilian Butt Lift Surgery</h2>
                        <p>Brazilian Butt Lift (BBL) offers a multitude of advantages for those seeking a curvier, more balanced physique. Look at the key benefits:</p>
                        <ul className='li-services'>
                            <li><strong>Curvier Buttocks:</strong> BBL effectively achieves fuller, rounder buttocks with the use of fat transfer. Excess fat is harvested from areas like the stomach, processed, and strategically injected into the buttocks, sculpting a shapelier look.</li>
                            <li><strong>Improved Body Proportions: </strong> Did you know that in about 80% of cases, buttocks can be asymmetrical? BBL can address these disproportions, creating a more balanced and aesthetically pleasing silhouette with defined curves.</li>
                            <li><strong>Natural Enhancement: </strong> BBL utilizes your own body fat, ensuring a natural look and experience, distinguishing it from implant-based buttock augmentation procedures.</li>
                            <li><strong>Long-lasting Results: </strong> With proper Brazilian butt lift aftercare, BBL results can be long-lasting, making it a worthwhile investment despite the  cost.</li>
                            <li><strong>Scar Minimization: </strong> BBL uses small incisions, leading to minimal scarring that typically fades over time.</li>
                            <li><strong>Confidence Boost:</strong> Beyond aesthetics, BBL can significantly improve self-image and boost confidence by creating a physique you love.</li>
                        </ul>
                        <h2>Ideal Candidates for Brazilian Butt Lift(BBL)</h2>
                        <p>Ideal candidates for a Brazilian Butt Lift typically have sufficient body fat in the body areas for liposuction, transfer, and are in suitable health and fitness. Those looking for the BBL process must understand its limitations and feature realistic expectations.
                            However, individuals with certain medical conditions or unrealistic expectations may not be appropriate candidates. Factors along with the Brazilian butt lift cost ought to additionally be considered while determining candidacy for a BBL.</p>

                        <h3 className='services-heding-h3'> <FontAwesomeIcon icon={faCheck} className='mark' /> Alternatives to BBL Surgery</h3>
                        <p>While BBL can be a transformative procedure, it's not suitable for everyone. Individuals with certain medical conditions, unrealistic expectations, or limited body fat may not be ideal candidates. For patients who may not be good candidates for a BBL due to limited body fat or other reasons, alternative options exist:</p>
                        <ul>
                            <li><strong>Buttock Implants:</strong> Silicone or saline implants can be surgically inserted to augment buttock size and shape.</li>
                            <li><strong>Non-Surgical Fillers:</strong> Injectable fillers offer a less invasive option for subtle buttock enhancement with temporary results.</li>
                        </ul>


                    </div>


                    <div className="tab-pane fade" id="nav-Before" role="tabpanel" aria-labelledby="nav-Before-tab">
                        <h2 className='services-heding-h2'>WHAT TO EXPECT AFTER SURGERY</h2>
                        <h3 className='services-heding-h3'> <FontAwesomeIcon icon={faCheck} className='mark' />  The Procedure </h3>
                        <p>The BBL procedure itself typically involves the following steps:
                        </p>
                        <ul>
                            <li> <strong>Liposuction: </strong>  Fat is meticulously harvested from targeted areas like your abdomen or thighs using a minimally invasive technique.
                            </li>
                            <li> <strong>Fat Processing: </strong>The harvested fat is then processed to ensure optimal viability for transfer.
                            </li>
                            <li><strong>Fat Transfer & Sculpting: </strong> The processed fat is then strategically injected into specific areas of your buttocks, sculpted, and reshaped to achieve your desired outcome.</li>
                            <li><strong>Closure:</strong> The tiny incisions are then closed with sutures.</li>
                        </ul>
                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Recovery</h3>
                        <p>Following your BBL, you can expect some temporary side effects like soreness, swelling, and downtime. Proper recovery is crucial for optimal results and includes:</p>
                        <ul>
                            <li><strong>Pain Management:</strong> Dr. Garg will prescribe medication to manage any discomfort.</li>
                            <li><strong>BBL Pillow: </strong> Using a specially designed BBL pillow helps minimize pressure on the buttocks during sleep and sitting.</li>
                            <li><strong>Compression Garment: </strong> Wearing a compression garment as directed helps reduce swelling and support healing.</li>
                        </ul>
                        <h3> <FontAwesomeIcon icon={faCheck} className='mark' /> Follow-Up Care</h3>
                        <p>Dr. Garg will provide detailed post-operative care instructions, including medication management, continued compression garment use, and potentially massage techniques to optimize your results. </p>
                        <h2>Life After Brazilian Butt Lift Surgery</h2>
                        <p>Following your Brazilian Butt Lift (BBL), proper recovery is essential to achieve optimal results and enjoy your new curves. Here's what you can expect:</p>
                        <h3> <FontAwesomeIcon icon={faCheck} className='mark' /> BBL Recovery Process</h3>
                        <ul>
                            <li><strong>Initial Discomfort:</strong> Expect some soreness and swelling in the buttocks area, especially during the first week or two. Dr. Garg will prescribe medication to manage any discomfort.</li>
                            <li><strong>Gradual Improvement:</strong> You'll gradually experience reduced swelling and increased mobility over the following weeks. Most patients can return to work within a week, but strenuous activity should be avoided for 6-8 weeks to allow for proper healing.</li>
                            <li><strong>Long-Term Recovery:</strong> Full recovery from BBL can take several months, depending on your individual healing process. Be patient and follow Dr. Garg's post-operative instructions carefully.</li>
                        </ul>
                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Lifestyle Adjustments for Optimal Results </h3>
                        <ul>
                            <li><strong>Minimize Pressure: </strong> Avoid sitting directly on your buttocks for extended periods, especially during the first few weeks. Use a BBL pillow for support when sitting or sleeping.</li>
                            <li><strong>Activity Restrictions: </strong> Avoid strenuous activities like weightlifting or high-impact exercise for at least 6-8 weeks, as instructed by Dr. Garg. Light walking and gentle stretching are encouraged to promote circulation and healing.</li>
                            <li><strong>Maintain a Healthy Lifestyle: </strong>A balanced diet and regular exercise are essential for maintaining your overall health and promoting long-term BBL results.</li>
                            <ul className='exercise'>
                                <li className='exercise'><strong>Exercise:</strong> Regular exercise helps maintain muscle tone and supports the transferred fat cells, contributing to long-lasting results. Low-impact exercises like walking, swimming, or stationary cycling are ideal during initial recovery. Dr. Garg can advise you on the most suitable exercise regimen for each stage of healing.</li>
                            </ul>
                        </ul>
                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Long-Term Results</h3>
                        <p>With proper care, BBL results can be long-lasting. Maintaining a healthy weight through a balanced diet and regular exercise is vital for preserving your enhanced curves. Dr. Garg will provide personalized guidance on maintaining your BBL results and achieving your long-term body contouring goals.</p>
                        <h2>Brazilian Butt Lift: Recovery, Results, and Before & After Photos</h2>
                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> The BBL Recovery Journey</h3>
                        <p>Following your Brazilian Butt Lift (BBL), experiencing some initial soreness and swelling is normal. Recovery typically ranges from a few weeks to 2-4 months, depending on your individual healing process and strict adherence to Dr. Garg's post-operative instructions.  Here's a general breakdown of what to expect:</p>
                        <ul>
                            <li><strong>The First Week:</strong> Expect the first week to be the most challenging, with soreness and swelling. Focus on rest and pain management as prescribed by Dr. Garg.</li>
                            <li><strong>Weeks 2-4:</strong> Swelling and discomfort should gradually improve during this time. Light activity like walking is encouraged, but avoid strenuous exercise, direct pressure on your buttocks, and extended sitting. Dr. Garg will provide specific instructions on gradually increasing your activity level.</li>
                            <li><strong>Beyond 4 Weeks:</strong> With continued healing and Dr. Garg's guidance, you can gradually resume most activities, including exercise.</li>
                        </ul>
                        <h3> <FontAwesomeIcon icon={faCheck} className='mark' /> Long-Lasting Results</h3>
                        <p>With proper care, which includes following Dr. Garg's post-operative instructions, maintaining a healthy weight, and regular exercise, BBL results can be long-lasting. You can enjoy your enhanced curves for years to come.</p>
                        <h3> <FontAwesomeIcon icon={faCheck} className='mark' /> Before & After Photos:</h3>
                        <p>Curious to see the transformative effects of BBL? We offer a gallery of high-quality before and after photos showcasing real patient results (with their consent). These images can help you visualize the potential outcome and shape your expectations.</p>
                    </div>


                    {/* ------------------------------------------------------------------------------------------>> Why Choose us <<------------------------------------------------------------------------------------------------------------------------------ */}
                    <div className="tab-pane fade why-choose" id="why-choose" role="tabpanel" aria-labelledby="nav-why-choose">
                        <h2>Why Choose Dr. Garg for Your Brazilian Butt Lift?</h2>
                        <p>Brazilian Butt Lift (BBL) can be a transformative procedure to sculpt and enhance your shape. But with so many surgeons offering BBL, why choose Dr. Garg? Here's what sets him apart:</p>
                        <p>This is some placeholder content for the Before & After Photos tab.</p>
                        <h3 > <FontAwesomeIcon icon={faCheck} className='mark' /> Experience & Expertise </h3>
                        <ul>
                            <li><strong>Credentials: </strong> Dr. Garg is a <i>Diplomate American Board of Cosmetic Surgery</i> with extensive experience performing BBL procedures. This ensures he possesses the highest qualifications and surgical skills to deliver exceptional results.</li>
                            <li><strong>Advanced Techniques: </strong> Dr. Garg stays at the forefront of BBL advancements, utilizing minimally invasive liposuction techniques and meticulous fat transfer methods for optimal outcomes.</li>
                            <li><strong>Proven Track Record:</strong> Dr. Garg has a successful history of satisfied patients who have achieved their desired BBL goals.</li>
                        </ul>

                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Natural-Looking Results</h3>
                        <ul>
                            <li><strong>Artistic Vision :</strong> Dr. Garg combines his surgical expertise with an artistic eye for body contouring. He understands the nuances of creating natural-looking curves that complement your unique body shape.</li>
                            <li><strong>Customization: </strong> Dr. Garg doesn't offer a one-size-fits-all approach. He takes the time to understand your goals, assess your anatomy, and design a personalized BBL plan to achieve your desired look.</li>
                        </ul>

                        <h3> <FontAwesomeIcon icon={faCheck} className='mark' /> Safety & Patient Care:</h3>
                        <ul>
                            <li><strong>Patient Safety First: </strong> Dr. Garg prioritizes your safety above all else. He adheres to the highest safety standards and utilizes advanced techniques to minimize risks associated with BBL.</li>
                            <li><strong>Open Communication:</strong> Dr. Garg values clear communication. He will discuss all aspects of the procedure, answer your questions thoroughly, and ensure you feel confident and well-informed throughout your BBL journey.</li>
                            <li><strong>Compassionate Bedside Manner:</strong> Dr. Garg understands the personal nature of BBL surgery. He is known for his compassionate and attentive approach, ensuring your comfort and well-being during every step of the process.</li>
                        </ul>
                        <h3> <FontAwesomeIcon icon={faCheck} className='mark' /> Hear from Our Satisfied Patients</h3>
                        <p>Numerous satisfied patients have shared positive reviews about Dr. Garg and Shape U Deserve.  These testimonials showcase Dr. Garg's dedication to achieving beautiful, natural-looking results that exceed expectations.</p>
                        <blockquote> <em>"Quote about positive experience with recovery and results from Patient A" </em>- Patient  Testimonials.</blockquote>
                    </div>
                    {/* ------------------------------------------------------------------------------------------>> Why Choose us <<------------------------------------------------------------------------------------------------------------------------------ */}



                    <div className="tab-pane fade" id="nav-expect" role="tabpanel" aria-labelledby="nav-expect-tab">
                        <h2 className='services-heding-h2'>Brazilian Butt Lift Surgery Costs</h2>
                        <p>The cost of your Brazilian Butt Lift (BBL) surgery can vary depending on several factors. Here's a breakdown of the key elements that influence BBL costs:</p>
                        <ul>
                            <li><strong>Surgeon's Fee: </strong> Dr. Garg's experience and expertise play a significant role in determining the surgeon's fee.</li>
                            <li><strong>Anesthesia Costs: </strong>The type of anesthesia used (general vs. awake liposuction) can impact the cost.</li>
                            <li><strong>Facility Fees:</strong> The surgical facility where your BBL is performed will have associated fees.</li>
                            <li><strong>Additional Costs: </strong> Factors like pre-operative tests, post-operative medications, and garments may also influence the total price.</li>
                        </ul>
                        <p><strong>Transparent Pricing: </strong> Dr. Garg is committed to provide a detailed breakdown of these components to make sure patients have a clear knowledge of the Brazilian butt lift cost and related prices. This ensures you can make informed decisions about your body contouring goals.</p>
                        <h2 className='services-heding-h2'>Brazilian Butt Lift Procedure Explained:</h2>
                        <p>Brazilian Butt Lift (BBL) is a multi-step procedure designed to enhance the shape and volume of your buttocks using your own body fat. The key steps involved:</p>
                        <h3 className='services-heding-h3'> <FontAwesomeIcon icon={faCheck} className='mark' /> Consultation </h3>
                        <p>During your initial consultation with Dr. Garg, a board-certified plastic surgeon, you'll have the opportunity to discuss:</p>
                        <ul>
                            <li>Your desired goals for buttock enhancement</li>
                            <li>Your medical history to ensure candidacy</li>
                            <li>Realistic expectations for the procedure and recovery process</li>
                        </ul>
                        <h3 className='services-heding-h3'> <FontAwesomeIcon icon={faCheck} className='mark' /> Pre-Operative Instructions</h3>
                        <p>Prior to your BBL, Dr. Garg will provide detailed instructions to prepare you for the procedure. These may include:</p>
                        <ul>
                            <li>Obtaining medical clearance if necessary</li>
                            <li>Avoiding smoking for a specific period (consult Dr. Garg for details)</li>
                            <li>Adhering to a specific diet and avoiding certain medications that can increase bleeding risk.</li>
                        </ul>
                        <h2 className='services-heding-h2'>Realistic Expectations and Risks of BBL:</h2>
                        <p>Brazilian Butt Lift (BBL) is a transformative procedure, but it's important to have realistic expectations and understand the potential risks involved.</p>
                        <h3 className='services-heding-h3'>Realistic Expectations:</h3>
                        <ul>
                            <li><strong>Individualized Results: </strong> BBL results can vary depending on several factors, including your body shape, skin elasticity, and adherence to post-operative care. A thorough consultation with Dr. Garg allows you to discuss your goals and establish realistic expectations for your unique outcome.</li>
                            <li><strong>Long-lasting Results:</strong> With proper care, BBL results can be long-lasting, allowing you to enjoy your enhanced curves for years to come.</li>
                        </ul>
                        <h3 className='services-heding-h3'>  <FontAwesomeIcon icon={faCheck} className='mark' />  Understanding BBL Risks </h3>
                        <p>While BBL is generally safe,  like any surgery, it carries some potential risks.</p>
                        <ul>
                            <li><strong>Infection:</strong> As with any surgical procedure, there's a slight risk of infection. Dr. Garg follows strict hygiene protocols to minimize this risk.</li>
                            <li><strong>Bleeding:</strong>Bleeding is a potential risk during and after surgery. Dr. Garg's experience and meticulous technique help minimize this risk.</li>
                            <li><strong> Fat Necrosis:</strong> In rare cases, some transferred fat cells may die, leading to fat necrosis (formation of hard lumps). Early detection and treatment can minimize complications.</li>
                            <li> <strong>Transient Numbness:</strong>Temporary numbness in the buttocks is a common side effect that typically resolves within weeks or months.</li>
                            <li><strong>Asymmetry:</strong> While Dr. Garg is highly skilled in achieving symmetry, slight asymmetry can occur. Post-operative massage techniques can help improve symmetry.</li>
                        </ul>
                        <p>Consultation with Dr. Garg is crucial to discuss your individual goals, medical history, and candidacy for BBL. During this consultation, he will explain the procedure in detail, address your specific expectations, and discuss the potential risks involved. This open communication ensures you make an informed decision about BBL and feel confident about your upcoming surgery.
                        </p>


                    </div>

                    <div className="tab-pane fade nav-faq " id="nav-faq" role="tabpanel" aria-labelledby="nav-faq-tab">
                        <h2>BBL: Frequently Asked Questions (FAQs)</h2>
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

                        <p>We will provide the information and various sources to help you arrange your finances for the procedure. Here are some options for you -
                        </p>
                        <ul>
                            <li>We are very transparent about our costing structure. At the time of the consultation, we will share the details of the costs involved.
                            </li>
                            <li>Financing options like third parties financing will be discussed at the time of the consultation as well.</li>
                        </ul>
                        <i>While BBLs are typically elective and not covered by insurance, there may be exceptions. We recommend checking with your provider for specific coverage details.

                        </i>
                        <h2>Schedule Your Free Brazilian Butt Lift Consultation Today! </h2>
                        <p>Take the first step towards your dream body. Schedule a Free Consultation today at Dr. Garg's office.

                        </p>
                        During your consultation, Dr. Garg will:
                        <ul>
                            <li>Discuss your goals for a Brazilian Butt Lift
                            </li>
                            <li>Assess your candidacy</li>
                            <li>Recommend the best approach to achieve your desired outcome

                            </li>
                        </ul>

                        <p> Don't wait to start your body transformation journey. <i>Schedule your free consultation today and see if BBL is right for you!</i></p>

                    </div>
                </div>
            </div>
            <Board />
            <TestMoni />
        </>
    );
}
