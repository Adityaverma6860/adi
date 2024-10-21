import React, { useEffect } from 'react';
import '../css/contact.css';

//ACCORDIAN css
import '../css/Pages.css';
import lipo from '../img/home/lipo.jpg'
import banner from '../img/gif_for_top/lipo_suction.gif'
import AOS from 'aos';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import TestMoni from './TestMoni'
import Board from './Board'





export default function Liposuction() {

    useEffect(() => {
        AOS.init({
            duration: 500,
            easing: "ease-out-cubic",
        });
    }, []);

    const faqData = [
        {
            question: "Is liposuction surgery a weight loss surgery? ",
            answer: "Liposuction is not a weight loss surgery; it is recommended in healthy individuals who have pockets of stubborn fat deposits in certain body parts. It is not ideal for individuals who are morbidly obese to lose large volume fat, but it can be helpful for morbidly obese individuals who have recently lost weight after the weight loss process and have pockets of fat deposits in specific body areas. "
        },
        {
            question: "What areas of the body can be treated with the help of liposuction? ",
            answer: "  The common areas of the body where liposuction is performed are the arms, thighs, abdomen, chin, and neck."
        },
        {
            question: "What is the standard recovery time for liposuction?  ",
            answer: "  A minor lipo procedure would take 3-5 days, and a major lipo procedure would take 1-2 weeks. However, the doctor can advise the recovery time, as it depends on the nature of the surgery, the targeted body area, and the occupation of the patient. "
        },
        {
            question: "What is the estimated cost of liposuction surgery? ",
            answer: "The cost of liposuction surgery depends on the nature and technique of the surgery and the area of fat removal. During your consultation with the doctor, we will give you a complete breakdown of the surgery and its costs. "
        },
        {
            question: "What financing options do you offer?  ",
            answer: " Our team will help you find the financing options for your surgery, as we offer third-party financing. "
        },
        {
            question: "  What should I expect during the consultation? ",
            answer: "  Our consultations are FREE to discuss the procedure and recovery. During the consultations, we would discuss the goals, medication and medical history, and changes in the lifestyle, and any concerns if any, to ensure that you feel comfortable and confident during the procedure. "
        },
        {
            question: "How long does a consultation last?  ",
            answer: "We answer all your questions and concerns, so our consultation time is usually between 20 minutes and an hour. Our prospective patient can ask any question before the surgery. "
        },
        {
            question: "Is there any non-invasive liposuction procedure ",
            answer: "There are non-invasive procedures that claim to be the alternatives to the traditional liposuction. However, the efficacy and results with these non-invasive techniques are not well established yet. Example- CoolSculpting and Kybella.  "
        },
        {
            question: "What is the difference between liposuction and tummy tuck?  ",
            answer: " Both procedures focus on body contouring; liposuction removes fat from the body, whereas tummy tuck or abdominoplasty tightens muscles and removes the excess skin from the abdomen only. "
        },

        {
            question: " What is 360 liposuction? ",
            answer: "If you are looking for an hourglass figure or a perfect V-shape for men, 360 liposuction is for you. It targets the circumference of your abdomen, including the upper and lower side or the love handles. Your surgeon will work closely with you and help you understand the process, restrictions, and recovery time. If you are curious about the liposuction before and after results, we will share the testimonials and the outcomes of the previous surgeries."
        },
        {
            question: "  What are the benefits of liposuction for men?  ",
            answer: "Liposuction is not gender specific. Men have opted for liposuction to target their abs, abdominal muscles, and other areas e.g. Chest as well. Liposuction has transformed how they look and feel and helped them boost their confidence."
        }
    ];

    return (
        <>
            <div className="banner">

                {/* <img src={Banner} alt="Banner" /> */}
                <div className="banner"><img src={banner} alt="" />
                <h3 className='px-2 py-1'>Liposuction</h3>

             </div>

            </div>
            {/* <div className="banner"><img src={banner} alt="" /></div> */}
            <div className="tab-container" style={{ overflow: "hidden" }}>  
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active overview" id="nav-Overview-tab" data-bs-toggle="tab" data-bs-target="#nav-Overview" type="button" role="tab" aria-controls="nav-Overview" aria-selected="true">Overview</button>
                        <button className="nav-link" id="nav-Before-tab" data-bs-toggle="tab" data-bs-target="#nav-Before" type="button" role="tab" aria-controls="nav-Before" aria-selected="false">Before Procedure - What to Expect</button>
                        <button className="nav-link expect" id="nav-expect-tab" data-bs-toggle="tab" data-bs-target="#nav-expect" type="button" role="tab" aria-controls="nav-expect" aria-selected="false">After Procedure - What to Expect</button>
                        <button className="nav-link" id="nav-why-choose-tab" data-bs-toggle="tab" data-bs-target="#why-choose" type="button" role="tab" aria-controls="nav-why-choose" aria-selected="false">Why choose us</button>
                        <button className="nav-link" id="nav-faq-tab" data-bs-toggle="tab" data-bs-target="#nav-faq" type="button" role="tab" aria-controls="nav-faq" aria-selected="false">FAQ</button>
                        <button className="nav-link" id="nav-financing-tab" data-bs-toggle="tab" data-bs-target="#nav-financing" type="button" role="tab" aria-controls="nav-financing" aria-selected="false">Insurance & Financing</button>
                    </div>
                </nav>



                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-Overview" role="tabpanel" aria-labelledby="nav-Overview-tab">
                        <h1>Liposuction in Los Angeles & Beverly Hills </h1>
                        <img src={lipo} alt="" height={350} data-aos="fade-left" style={{ float: "right", margin: "10px", }} />

                        <p>Many of us struggle with weight gain. We opt various diets and routines, and some of us tried the gym and fitness regimes, but were unsuccessful in getting rid of the stubborn fat from our body. Liposuction can turn your dream into a reality. </p>
                        <p>With affordable pricing and experience in Liposuction, Dr Garg is one of the <i>top-rated surgeons in LA & Beverly Hills.</i> </p><br />

                        <div className="shadow-textt">
                            <h2>What is Liposuction? </h2>
                            <p><i>Liposuction also known as Lipoplasty</i> is a cosmetic procedure designed to remove unwanted and excess fat from different body parts. It's ideal for those who have achieved a healthy weight but struggle with pockets of fat that don't respond to diet or exercise. </p>
                            <p>Common areas treated with liposuction include the abdomen, thighs, arms, neck, or even the chin. And with the help of experienced and skilled surgeons like Dr Garg, you can get your desired body look and curves.</p>

                        </div>
                        <br />
                        <div className="shadow-text" data-aos="flip-right">
                            <h2>Benefits of Liposuction </h2>
                            <p>Apart from losing stubborn fat, liposuction gives you a new meaning to your body and self-confidence:</p>
                            <ul>
                                <li><strong>Improved Self-Confidence</strong></li>
                                <p>Look and feel your best in your clothes with a more sculpted physique.</p>
                                <li><strong>Enhanced Body Shape</strong></li>
                                <p>Achieve your desired curves and a more confident appearance.</p>
                                <li><strong>Better-Fitting Clothes</strong></li>
                                <p>Wear clothes that flatter your new body with ease.</p>
                                <li><strong>Improved Posture and Flexibility</strong></li>
                                <p>Liposuction can sometimes lead to improved posture and flexibility by removing excess weight that may have been straining your core muscles.</p>
                            </ul>
                        </div>


                        <br />

                        <h2>Ideal Candidates for Liposuction</h2>
                        <p>Are you a perfect candidate for the liposuction procedure? Let's check out-</p>
                        <ul>
                            <li>	Candidates should be in good health and free of certain medical conditions.
                            </li>
                            <li>Candidate’s skin elasticity should be good, but it is not always required. </li>
                            <li>Candidates preferably should not be morbidly obese, but it is not mandatory. In certain situations, liposuction can help morbidly obese candidates.</li>
                            <li>Candidates who have tried to get rid of the fat deposits with the help of diet and exercise but have not succeeded. </li>
                            <li>Candidates should be non-smokers, or in abstinence from smoking.</li>
                            <li>Candidates should have realistic expectations of the results after liposuction surgery.</li>
                        </ul>
                        <p><i>These criteria might help you consider yourself as our next liposuction candidate, but we highly recommend that you meet with experts to decide about your candidacy.</i></p><br />
                        <div className="shadow-text" data-aos="flip-down">
                            <h2>Understanding Liposuction Cost</h2>
                            <p>While we can't disclose exact prices here, we are committed to offering competitive liposuction costs in Los Angeles & Beverly Hills. </p>
                            <p>At the time of the consultation, we will give you a complete breakdown of the procedure and liposuction pricing according to the types of liposuction. As the most affordable liposuction in LA & Beverly Hills, we ensure that our liposuction costs are affordable than those of others in the area. So, if you are looking for liposuction near you, then look no further and book your consultation with us.</p>
                            <h2>Exploring Different Liposuction Techniques </h2>
                            <p>We understand the importance of liposculpting to address your specific concerns. Therefore, we offer different liposuction techniques to meet your needs to achieve best before and after results. </p>
                            <p>Our skilled and knowledgeable expert will guide you on quick liposuction recovery time and to eliminate/reduce liposuction side effects. Here's a breakdown of some popular options, along with their advantages and disadvantages:</p>

                        </div>
                        <br />
                        <ul style={{ listStyle: 'none' }}>
                            <li><h3>1. VASER-Assisted Liposuction</h3></li>
                            <p>This is Ultrasound-assisted liposuction(UAL). In this procedure, a metal rod is placed under the skin, and the surgeon uses ultrasonic energy to liquefy the fat cells before removing them from the body. This method liquefies the fat cells before the removal, giving much smoother results and brings high-definition liposuction results.  However, this procedure might be slightly expensive to others. This is commonly used for HD Liposuction.</p>
                            <li><h3>2. Power-Assisted Liposuction</h3></li>
                            <p>This is Power-assisted liposuction(PAL). In this procedure, we use a stainless-steel tool called a cannula, which moves back and forth to break your fat. The Cannula helps make fat removal faster and more precise.
                            </p>
                            <li><h3>3. Traditional Liposuction</h3></li>
                            <p>Traditional Liposuction technique involves removing the stubborn fat using manual liposuction cannulas after injecting a tumescent solution into the targeted fat areas to facilitate fat removal. This technique is still valuable in sculpting the body contour in certain body parts where precise liposuction is needed.</p>
                            <li><h3>4. Smart Lipo</h3></li>
                            <p>Smart Lipo uses laser energy to liquefy fat cells while also potentially tightening the skin. Laser assisted energy is used to melt the fat and subsequently aspirated with the help of a suction cannula. This is ideal for small volume liposuction, and sometimes may require more than two sittings.</p>
                            <li><h3>5. Air-Sculpt</h3></li>
                            <p>Air-Sculpt is a trademarked name for a tumescent liposuction technique. This technique uses constant flow of gas to assist in liposuction. This technique has no additional advantage, and in fact is more expensive to the patient.</p>
                        </ul>
                        <p><strong>Choosing the Right Technique</strong></p>
                        <p>The best liposuction technique for you depends on several factors, including your desired results, the areas to be treated, your skin elasticity, and your budget.</p>
                        <p>During consultation with Dr. Garg, he will discuss your individual needs and recommend the most suitable technique to achieve your goals.</p><br />
                        <h2>Liposuction: Risks and Benefits </h2>
                        <p>As we already discussed above the benefits of liposuction like:</p>
                        <ul>
                            <li>It will help enhance body contours by removing stubborn fat deposits resistant to diet and exercise.</li>
                            <li>It will improve self-confidence and self-esteem by achieving a more desired body shape.</li>
                        </ul>
                        <p>But liposuction might have some side risks and side effects(These are rare, but important to consider):</p>
                        <ul>
                            <li>Temporary numbness post-surgery in and around the area of operation.</li>
                            <li>Bruising, which is a common side effect.</li>
                            <li>Infection, although uncommon.</li>
                            <li>Uneven fat removal or skin irregularities (very rare).</li>
                        </ul>

                        <p>Our surgeon will discuss all the risks and side effects of liposuction in detail, and they will help identify the safest and least risky procedure for you, depending on your skin type and health condition.</p>

                    </div>


                    <div className="tab-pane fade" id="nav-Before" role="tabpanel" aria-labelledby="nav-Before-tab">

                        <h2> Liposuction Procedure </h2>
                        <p>We need to educate our patients about the procedure and the safety measures that will be taken during the procedure. We prioritise our patient's comfort, hygiene, and safety during the surgery. That's why we are discussing what liposuction will look like with us. Here's a step-by-step breakdown of what you can expect:</p>
                        <ol>
                            <li><strong>Anaesthesia:</strong>During your consultation, Dr. Garg will discuss your anaesthesia options based on the chosen procedure and your preferences.</li>
                            <ul>
                                <li><strong>Awake Liposuction:</strong> This uses local anaesthesia (tumescent solution) combined with oral or intravenous sedation to keep you comfortable but awake during the procedure.</li>
                                <li><strong>General Anesthesia:</strong> This option involves putting you into a sleep state for the entire procedure.</li>
                            </ul>
                            <li><strong>Incision:</strong> The surgeon will make tiny to small incisions to insert the tools, such as a cannula, that break down and extract the fat.</li>
                            <li><strong>Fat Removal:</strong> With the help of a cannula, the excess fat will be extracted from the body.</li>
                            <li><strong>Sculpting:</strong> With meticulous attention to detail, will sculpt the treated areas to achieve your desired body contour.</li>
                            <li><strong>Closing Incisions:</strong> Some incisions may be left open for drainage purposes, while others will be closed with sutures or adhesive strips.</li>
                            <li><strong>Recovery:</strong> The surgeons will closely monitor post-procedure for quick and smooth liposuction recovery. </li>
                        </ol>
                        <br />
                        <h2> Preparing for Your Liposuction Surgery </h2><br />
                        <h3><FontAwesomeIcon icon={faCheck} className='mark' />  Understanding Your Liposuction Procedure</h3>
                        <p>Before undergoing liposuction surgery, a thorough consultation is crucial to ensure both you and your doctor are on the same page.  We will then discuss in detail the requirements and candidacy of the surgery. Which is as follows:</p>
                        <ul>
                            <li><strong>Goal of the surgery:</strong> It is essential for the patient and the doctor to have a clear understanding of the area/s that they are targeting through this surgery. What is the result we aim for, and what are the possible outcomes of the surgery?</li>
                            <li><strong>Medical History Review:</strong> Our team will conduct and study the medical history to ensure the patient's safety. This helps ensure a safe and successful procedure.</li>
                            <li><strong>Physical Examination:</strong> Our doctors and team will conduct a physical exam to study the patient's skin and overall health. This will ensure good results and a quick recovery post-surgery.</li>
                            <li><strong>Open Communication:</strong> Our doctors and team understand the anxiety that a patient and his loved ones will experience before the surgery. Therefore, we welcome all sorts of questions and are pleased to answer them to clear all your doubts.</li>
                        </ul>


                        <p>We aim to educate our patients and ensure that they are fully aware of the process and are in good health (both mental and physical) to undergo the procedure and get the desired results with quick recovery.</p><br />
                        <h3><FontAwesomeIcon icon={faCheck} className='mark' />  Pre-Operative Instructions </h3>

                        <p>We must follow some restrictions before the surgery to minimise the cause of any risks. Following these instructions diligently will help you prepare for the safe and secure surgery and ensure a quick and smooth recovery. Here are some pre-operative instructions for all to follow:</p>

                        <ul>
                            <li><strong>Dietary requirements</strong>- To ensure that the patient has minimal loss of blood, we recommend that specific food items like red wine, garlic, certain herbal products etc. should be avoided. Otherwise, as such there are no food restrictions.</li>
                            <li><strong>Medication requirements</strong>—Doctors might need to adjust the medicines before the surgery to ensure that they do not interact with the procedure and that the process and recovery are smooth and quick.</li>
                            <li><strong>Avoid certain activities</strong>—Strenuous exercise, smoking, and other such activities must be avoided for a smooth operation and recovery. The doctors will discuss and advise such lifestyle changes.</li>
                        </ul>

                    </div>



                    {/* ------------------------------------------------------------------------------------------>> Why Choose us <<------------------------------------------------------------------------------------------------------------------------------ */}
                    <div className="tab-pane fade why-choose" id="why-choose" role="tabpanel" aria-labelledby="nav-why-choose">
                        <h2>Why Choose Dr. Garg- Shape U Deserve For Liposuction Procedure </h2>
                        <p> By choosing Dr. Garg at Shape U Deserve, you will be in safe and expert hands. Our team is known for attentiveness, skillful handling, and knowledge; you'll experience this same commitment from both the team and Dr. Garg. Here's how you will benefit by choosing us:</p>
                        <ul>
                            <li>State-of-the-art technology will treat you with smooth operation, minimal scarring, and quick recovery.</li>
                            <li>Patient-centred approach with personalised attention from both doctors and staff.</li>
                            <li>Skilled and knowledgeable doctors and staff.</li>
                            <li>Advanced technologies at the clinic to counter all your specific needs.</li>
                        </ul><br />
                        <h3> <FontAwesomeIcon icon={faCheck} className='mark' /> Hear from Our Satisfied Patients </h3>
                        <p>Numerous satisfied patients have shared positive reviews about Dr. Garg and Shape U Deserve.  These testimonials showcase Dr. Garg's dedication to achieving beautiful, natural-looking results that exceed expectations.</p>

                        <blockquote> <em>"Quote about positive experience with recovery and results from Patient A" </em>- Patient  Testimonials.</blockquote>

                    </div>
                    {/* ------------------------------------------------------------------------------------------>> Why Choose us <<------------------------------------------------------------------------------------------------------------------------------ */}


                    {/* ------------------------------------------------------------------------->> WHAT TO EXPECT AFTER SURGERY <<---------------------------------------------------------------------------------------------------- */}
                    {/* ------------------------------------------------------------------------->> WHAT TO EXPECT AFTER SURGERY <<---------------------------------------------------------------------------------------------------- */}

                    <div className="tab-pane fade" id="nav-expect" role="tabpanel" aria-labelledby="nav-expect-tab">
                        <h2>Liposuction: Recovery, Results, and Before & After Photos </h2>

                        <p>As you underwent liposuction surgery, our role is not over yet. Our team and doctors will schedule follow-ups post-surgery to ensure that liposuction recovery time is risk-free and infection-free.</p>
                        <p>Here are some procedures we will help you with during your recovery time.</p>
                        <br />
                        <h3><FontAwesomeIcon icon={faCheck} className='mark' />  What to Expect During Recovery </h3>
                        <ul>
                            <li><strong>Expected recovery time:</strong>Doctors will advise you of the time frame depending on the type of surgery and the area of fat and body we target.</li>
                            <li><strong>Results:</strong>We will try to match the desired results you are looking for, but more is needed to achieve a 100% result. Therefore, our doctors will help you analyse and understand the actual outcome that can be met before the procedure.</li>
                            <li><strong>Before-and-after photos:</strong>Our team will take pictures of the affected areas before and after the liposuction so the patients can see the difference afterwards.</li>
                        </ul>


                        <p><i>Come and discover the 360-degree transformation with Dr. Garg! </i></p>
                    </div>

                    {/* ------------------------------------------------------------------------->> WHAT TO EXPECT AFTER SURGERY <<---------------------------------------------------------------------------------------------------- */}
                    {/* ------------------------------------------------------------------------->> WHAT TO EXPECT AFTER SURGERY <<---------------------------------------------------------------------------------------------------- */}


                    <div className="tab-pane fade nav-faq " id="nav-faq" role="tabpanel" aria-labelledby="nav-faq-tab">
                        <h2>Liposuction: Frequently Asked Questions (FAQs)</h2>
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
                        <ul>
                            <li><strong>Transparent Pricing Structure: </strong> The pricing structure for body lift surgery typically includes several components that contribute to the total cost of the procedure. These components may encompass surgeon's fees, facility costs, anesthesia fees, pre-operative tests, post-operative care, and any additional services required for a successful outcome. By providing a breakdown of these costs, patients can understand the financial investment in body lift surgery and budget accordingly.</li><br />
                            <li><strong>Financing Options: </strong> For patients seeking financial assistance to cover the cost of body lift surgery, various financing options may be available to make the procedure more accessible. Healthcare credit cards, personal loans, payment plans offered by the practice, and financing programs designed explicitly for elective surgeries can help patients manage the upfront cost of the procedure. Exploring these financing options allows patients to proceed with their desired treatment without compromising their financial well-being.</li><br />
                            <li><strong>Insurance Coverage: </strong> While body lift surgery is a cosmetic procedure not covered by insurance, there may be exceptions where excess skin causes functional impairments or health issues. Patients should consult with insurance providers to inquire about potential coverage for body lift surgery. It is important to note that insurance policies vary, and coverage eligibility is determined based on medical necessity criteria set forth by the insurer.</li><br />
                        </ul>
                        <h2>Schedule Your Free Body lIft Surgery Consultation Today!</h2>
                        <p>Considering arm lift surgery and wanting to achieve sculpted, toned upper arms? Take the first step towards your dream physique by scheduling a free consultation with Dr. Garg, a board-certified cosmetic surgeon at Shape U Deserve.</p>
                        <p> <strong>Here's what you can expect during your consultation: </strong></p>
                        <ul>

                            <li><strong>Personalized Attention:</strong> Dr. Garg will listen attentively to your unique goals and concerns about arm lift surgery.</li>
                            <li><strong>Expert Insights: </strong> Dr. Garg will provide you with in-depth knowledge about the arm lift procedure, answer your questions, and address any anxieties you may have.</li>
                            <li><strong>Tailored Treatment Plan: </strong> Working together, you and Dr. Garg will develop a personalized treatment plan designed to achieve your desired arm shape and aesthetic goals.</li>
                        </ul>
                        <p> <i>Don't wait to achieve the look you've always desired. Schedule your free consultation today by calling <span style={{ color: 'blue' }}> +1 424-666-1260</span> or filling out our online form.</i> </p>

                    </div>
                </div>
            </div>
            <Board />

            <TestMoni />
        </>

    );
}
