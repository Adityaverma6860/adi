import React from 'react';
import '../css/contact.css';
import banner from '../img/home/Thighliftbanner.jpeg';
//ACCORDIAN css
import '../css/Pages.css';
import thighlift from '../img/home/thighlift.jpg'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import TestMoni from './TestMoni'
import Board from './Board'





export default function ThighLiftSurgery() {

    const faqData = [
        {
            question: " What are the types of thigh lift surgery available?",
            answer: "Types of thigh lift surgery include Inner, outer, and full thigh lifts. Each type addresses extra thigh skin and tissue to match patient needs."
        },
        {
            question: "How long will the results of thigh lift surgery last?",
            answer: "Thigh lift surgery results usually last for 10–15 years as long as the patient maintains health, however aging, weight fluctuations and lifestyle can affect the longevity of results. Maintaining weight stability and a healthy lifestyle extends results."
        },
        {
            question: "What are the risks and complications associated with thigh lift surgery?",
            answer: "Thigh lift surgery has potential risks and complications -- infection, bleeding, scarring, and anesthesia side effects like any surgery. Discuss risks with your surgeon and follow post-op care recommendations to prevent problems."
        },
        {
            question: " Will I need liposuction in combination with a thigh lift? ",
            answer: "  Liposuction may enhance contouring and outcomes of the thigh lift surgery. Your surgeon will decide at the consultation to add liposuction to the procedure.  "
        },
        {
            question: "What are the alternatives to thigh lift surgery?",
            answer: "Laser therapy, radiofrequency, and targeted workouts may enhance tone and appearance without thigh lift surgery in borderline cases where these treatment modalities can help avoid the surgery. Find out if you are a candidate for such alternative treatments. An expert surgeon can help you explore your goals-based solutions. "
        },
        {
            question: "Is thigh lift surgery painful? ",
            answer: "Most thigh lift patients experience mild discomfort and pain in the postoperative period, but medicines usually help in pain control. Following your surgeon's pain management and recovery guidelines will help in reducing the pain. "
        },
        {
            question: " How long does it take to see results from thigh lift surgery?",
            answer: " Some instantaneous results are visible in the immediate postoperative period. However, the final outcomes of thigh lift surgery are visible in six months. After six months, the edema should subside, and results will be more appreciable."
        },
        {
            question: "Am I going to get the scars after thigh lift surgery?",
            answer: "Surgical scars are expected after thigh lift surgery. However, expert surgeons will make the incisions in a position that can hide the scars easily. Over time during the recovery, wound care can reduce scar visibility over time. Your surgeon will advise you on how to treat scars for maximum healing. "
        },
        {
            question: "Can thigh lift surgery be combined with other procedures?",
            answer: "Thigh lift surgery with liposuction, tummy tuck, or body lift may solve several conditions. Your surgeon may propose combining operations based on your health and cosmetic goals."
        },
        {
            question: " Does insurance cover thigh lift surgery?",
            answer: "Thigh lift surgery is cosmetic; thus, insurance usually doesn't cover it. In rare instances, insurance may cover the surgery for medical reasons. Finance or payment plans may help patients for surgical expenses. Financial enquiries should be discussed with your surgeon during consultation. "
        }
    ];

    return (
        <>
            <div className="banner">
                <img src={banner} alt="" style={{ height: "500px" }} />
                <h2 className='px-2 py-1' style={{color:"#8D8D8D"}}>Thigh Lift Surgery</h2>
            </div>
            <div className="tab-container">
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
                        <h1>Thigh Lift Surgery in Los Angeles & Beverly Hills </h1>
                        <img src={thighlift} alt="" height={300} style={{ float: "right", margin: "10px", }} />
                        <p>Are you concerned about excess fat or loose skin on your thighs or considering Thighplasty(thigh lift) to address loose skin at thighs? Perhaps you've experienced significant weight loss and desire a smoother, more toned appearance. <i>Thigh lift surgery can help!</i> This cosmetic procedure removes excess skin and fat, enhancing the shape, tone, and definition of your thighs.</p>

                        <p><strong>Focus on a Qualified Surgeon for Personalized Results:</strong> Choosing a well qualified surgeon with extensive experience in thigh lift procedures is crucial to maximizing safety and achieving your desired outcome. Skilled surgeons can tailor the surgery to your unique anatomy and aesthetic goals, leading to optimal results and minimizing risks.</p>
                        <h2>Understanding Thigh Lift Surgery Surgery and its Type</h2>
                        <p>Thigh lift surgery isn't a one-size-fits-all procedure. To address specific concerns and achieve your desired outcome, different types of thigh lifts target different areas. Here's an overview of the three main options:</p>
                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Inner Thigh Lift:</h3>
                        <ul>
                            <li>Targets sagging skin and excess fat on the inner thighs.</li>
                            <li>Tightens and tones the inner thigh area for a smoother appearance.</li>
                            <li>This procedure is ideal for those seeking lower body improvement and a more defined inner thigh.</li>
                        </ul>

                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Outer Thigh Lift:</h3>
                        <ul>
                            <li>Addresses sagging skin and concerns about suppleness in the outer thigh and hip area.</li>
                            <li>Tightens and elevates loose outer thigh skin, creating a more youthful appearance.</li>
                            <li>This procedure helps achieve a more balanced and proportional look in the hips and outer thighs.</li>
                            <li>Removes excess skin to enhance the outer thigh appearance.</li>
                        </ul>

                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Full Thigh Lift:</h3>
                        <ul>
                            <li>Combines inner and outer thigh lift procedures for comprehensive thigh contouring.</li>
                            <li>Achieves a balanced and sculpted look for the entire lower body.</li>
                            <li>Tightens and defines both inner and outer thighs, significantly enhancing overall proportion and symmetry.</li>
                        </ul>

                        <h2>Ideal Candidates for Thigh Lift Surgery</h2>
                        <p>Thigh lift surgery can be a transformative procedure for those seeking a smoother, more toned appearance in their thighs. Here are some characteristics of ideal candidates:</p>
                        <ul>
                            <li><strong>Loose Skin:</strong>  Whether due to aging, weight loss, or genetics, loose skin on the inner or outer thighs can be a source of self-consciousness. Thigh lift surgery removes excess skin and tightens the remaining tissue for a more sculpted look.</li>
                            <li><strong>Stable Weight: </strong> Maintaining a relatively stable weight is crucial for achieving optimal results and long-term satisfaction from thigh lift surgery.</li>
                            <li><strong>Healthy Lifestyle: </strong> Overall good health is essential for undergoing any surgery. Ideal candidates for thigh lift surgery are generally healthy and non-smokers, with realistic expectations about the procedure.</li>
                            <li><strong>Desire for Body Contouring:  </strong>Even with a healthy diet and exercise routine, some individuals may experience stubborn laxity in their thigh skin. Thigh lift surgery can address this concern, helping achieve a more sculpted and defined lower body.</li>
                        </ul>
                        <h3> <FontAwesomeIcon icon={faCheck} className='mark' /> Considering a Thigh Lift?</h3>
                        <p>If you're interested in learning more about how thigh lift surgery can help you achieve your body contouring goals, schedule a consultation with a well qualified cosmetic surgeon. Experts can assess your individual needs and determine if you're a good candidate for the procedure.</p>
                    </div>


                    <div className="tab-pane fade" id="nav-Before" role="tabpanel" aria-labelledby="nav-Before-tab">
                        <h2>Thigh Lift Surgery Procedures Explained</h2>
                        <h3> <FontAwesomeIcon icon={faCheck} className='mark' /> Consultation & Planning:</h3>
                        <p>A comprehensive consultation with a board-certified plastic surgeon is the first step towards achieving your thigh lift goals. During this consultation, the surgeon will:</p>
                        <ul>
                            <li><strong>Discuss Your Goals and Concerns:  </strong>Be open about your desired aesthetic outcome and any anxieties you might have.</li>
                            <li><strong>Review Your Medical History: </strong> This ensures you're medically fit for surgery and identifies any potential risks.</li>
                            <li><strong>Evaluate Your Anatomy:  </strong>Examining your thighs allows the surgeon to tailor the procedure to your unique needs.</li>
                            <li><strong>Explain Thigh Lift Options: </strong> Learn about the different types of thigh lifts (inner, outer, or full) and their suitability for your goals.</li>
                            <li><strong>Develop a Personalized Plan: </strong> The surgeon will recommend the best approach to achieve your desired results, considering your anatomy and expectations.</li>
                        </ul>
                        <h2>Realistic Expectations and Risks of Thigh Lift Surgery</h2>
                        <p>Thigh lift surgery can be a transformative procedure for achieving a smoother, more sculpted thigh appearance. However, like any surgery, it's crucial to set realistic expectations and understand the potential risks involved. Here's a breakdown to help you make an informed decision:</p>
                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Realistic Expectations:</h3>
                        <ul>
                            <li><strong>Improved Contour: </strong> Thigh lift surgery effectively removes excess skin and tightens underlying tissues, leading to a significant improvement in your thigh shape.</li>
                            <li><strong>Long-Lasting Results: </strong> The results of thigh lift surgery are permanent with regards to skin removal. However, maintaining a healthy weight and lifestyle is essential for maximizing the longevity of these improvements.</li>
                            <li><strong>Gradual Transformation: </strong> Healing takes time. While you'll see initial results immediately, it can take several weeks or months for the swelling to fully subside and for your final, sculpted thighs to emerge.</li>
                            <li><strong>Commitment to Recovery:  </strong>Following your surgeon's post-operative instructions carefully, including wearing compression garments and attending follow-up appointments, is crucial for optimal healing and successful outcomes.</li>
                        </ul>
                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Potential Risks and Complications:</h3>
                        <ul>
                            <li><strong>Infection:  </strong>As with any surgery, there's a risk of infection. Following proper hygiene protocols and taking prescribed antibiotics can help minimize this risk.</li>
                            <li><strong>Bleeding: </strong> Bleeding is a potential complication during and after surgery. Your surgeon will take steps to minimize this risk.</li>
                            <li><strong>Swelling and Bruising: </strong> Swelling and bruising are common after thigh lift surgery. These typically subside within a few weeks with proper care.</li>
                            <li><strong>Scarring: </strong> While the surgeon will use techniques to minimize scarring, some degree of scarring is inevitable. Scarring may improve over time.</li>
                            <li><strong>Asymmetry: </strong> While the goal is to achieve a symmetrical appearance, there's a slight chance of minor asymmetry after surgery.</li>
                            <li><strong>Numbness:  </strong>Temporary numbness in the operated area is common and usually resolves over time.</li>
                            <li><strong>Unsatisfactory Results: </strong> It's important to communicate your goals clearly with your surgeon. Revision surgery may be an option in rare cases if you're not satisfied with the initial results.</li>
                        </ul>
                        <p><strong>Remember: </strong> This is not an exhaustive list of potential risks. During your consultation, your board-certified plastic surgeon will discuss these risks in detail and address any specific concerns you may have.</p>
                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Making an Informed Decision:</h3>
                        <p>Thigh lift surgery can be a rewarding experience, but it's important to weigh the potential risks and benefits carefully. Discussing your goals and expectations openly with a qualified plastic surgeon is crucial for determining if thigh lift surgery is the right choice for you.</p>

                        <br />
                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> What to Expect During Surgery:</h3>
                        <p>Thigh lift surgery is typically performed under general anesthesia. Here's a general overview of the surgical steps:</p>
                        <ul>
                            <li><strong>Anesthesia Options: </strong> The type of anesthesia (general or local) will be determined based on the complexity of the surgery and your preferences.</li>
                            <li><strong>Precise Incision Placement: </strong> Incisions are strategically placed to minimize scarring and ensure optimal removal of excess skin.Inner thigh lift incisions typically follow the natural crease of the thigh for better concealment.</li>
                            <li><strong>Removing Excess Skin and Tightening Tissues: </strong> The surgeon removes excess skin and tightens underlying tissues to create a smoother, more defined thigh contour.</li>
                            <li><strong>Enhanced Results with Liposuction: </strong> In some cases, liposuction may be combined with thigh lift surgery to address stubborn pockets of fat, leading to a more comprehensive transformation.</li>
                            <li><strong>Meticulous Incision Closure: </strong> After making the necessary changes, the surgeon carefully closes the incisions to minimize scarring and promote optimal healing.</li>
                        </ul><br />
                        <h2>Thigh Lift Surgery Costs and Financing</h2>
                        <p>The cost of thigh lift surgery can vary depending on several factors specific to your needs. Here's a breakdown to help you understand:</p>
                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Factors Affecting Thigh Lift Costs:</h3>
                        <ul>
                            <li><strong>Type of Thigh Lift: </strong> The specific type of lift you choose (inner, outer, or full) impacts the overall cost.</li>
                            <li><strong>Surgical Complexity: </strong> The extent of the surgery based on your anatomy and desired results influences the cost.</li>
                            <li><strong>Anesthesia Fees: </strong> The type of anesthesia used (general or local) will factor into the overall price.</li>
                            <li><strong>Facility Fees: </strong>The surgical facility's operating room and related costs can vary.</li>
                            <li><strong>Surgeon's Expertise: </strong>The surgeon's experience and qualifications can influence the cost.</li>
                        </ul>
                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Transparent Cost Discussions During Your Consultation</h3>
                        <p>During your consultation, our board-certified plastic surgeon will thoroughly evaluate your anatomy and discuss your goals. This personalized approach allows for a transparent conversation about the estimated cost of your thigh lift surgery.</p>

                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Financing Options to Help You Achieve Your Goals</h3>
                        <p>We understand that the cost of surgery can be a consideration. We offer financing options to make your dream of a thigh lift more attainable.  During your consultation, our team can discuss available payment plans and potential third-party financing solutions.  We also have a dedicated page outlining financing options on our website:</p>
                    </div>



                    {/* ------------------------------------------------------------------------------------------>> Why Choose us <<------------------------------------------------------------------------------------------------------------------------------ */}
                    <div className="tab-pane fade why-choose" id="why-choose" role="tabpanel" aria-labelledby="nav-why-choose">
                        <h2>Why Choose Dr. Garg for Your Thigh Lift Surgery?</h2>
                        <p>When considering thigh lift surgery, choosing the right surgeon is paramount. Here's why Dr. Garg stands out and can be your trusted partner in achieving your desired results:</p>
                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Experience and Expertise:</h3>
                        <ul>
                            <li><strong>Board-Certified Plastic Surgeon:</strong> Dr. Garg is a board-certified plastic surgeon with extensive experience performing thigh lift procedures. This expertise ensures a deep understanding of thigh anatomy, surgical techniques, and the ability to deliver optimal outcomes.</li>
                            <li><strong>Proven Track Record: </strong> Dr. Garg has a proven track record of successful thigh lift surgeries. Patient testimonials and before-and-after photos on the website can provide valuable insights into his skills and the kind of results you can expect.</li>
                            <li><strong>Focus on Patient Care: </strong> Dr. Garg prioritizes personalized care and open communication. He takes the time to understand your unique goals, concerns, and medical history to create a customized treatment plan tailored to your needs.</li>
                        </ul>
                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Surgical Technique and Innovation:</h3>
                        <ul>
                            <li><strong>Advanced Techniques: </strong> Dr. Garg stays at the forefront of advancements in thigh lift surgery, utilizing the latest techniques to minimize scarring, optimize results, and promote faster recovery times.</li>
                            <li> <strong>Focus on Aesthetics: </strong> Dr. Garg has a keen eye for aesthetics and body proportions. He understands the importance of creating a natural-looking, balanced, and aesthetically pleasing outcome in your thighs that complements your overall physique.</li>
                        </ul>

                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Commitment to Your Journey:</h3>
                        <ul>
                            <li>Comprehensive Consultation: Dr. Garg provides comprehensive consultations where he thoroughly discusses all aspects of thigh lift surgery, including the procedure details, risks and benefits, and recovery expectations. He encourages you to ask questions and ensures you feel comfortable and informed throughout the process.</li>
                            <li>Supportive Staff: Dr. Garg has a dedicated and experienced team who will support you before, during, and after your surgery. They will address your concerns, answer your questions, and ensure a smooth and comfortable experience.</li>
                            <li>Long-Term Follow-Up: Dr. Garg prioritizes your long-term well-being. He schedules regular follow-up appointments to monitor your progress, address any concerns you may have, and ensure optimal healing and lasting results.</li>
                        </ul>
                        <p>Considering these factors, Dr. Garg offers a unique combination of expertise, surgical skill, and a commitment to patient care. He can be your trusted partner in achieving your dream body with thigh lift surgery.</p>
                        <i>Schedule a consultation today to discuss your goals and learn more about how Dr. Garg can help you achieve them.</i>
                        <br />
                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Hear from Our Satisfied Patients</h3>
                        <p>Numerous satisfied patients have shared positive reviews about Dr. Garg and Shape U Deserve. These testimonials showcase Dr. Garg's dedication to achieving beautiful, natural-looking results that exceed expectations.</p>
                        <blockquote> <em>"Quote about positive experience with recovery and results from Patient A" </em>- Patient  Testimonials.</blockquote>

                    </div>
                    {/* ------------------------------------------------------------------------------------------>> Why Choose us <<------------------------------------------------------------------------------------------------------------------------------ */}


                    {/* ------------------------------------------------------------------------->> WHAT TO EXPECT AFTER SURGERY <<---------------------------------------------------------------------------------------------------- */}
                    {/* ------------------------------------------------------------------------->> WHAT TO EXPECT AFTER SURGERY <<---------------------------------------------------------------------------------------------------- */}

                    <div className="tab-pane fade" id="nav-expect" role="tabpanel" aria-labelledby="nav-expect-tab">
                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Recovery and Follow-up:</h3>
                        <p>Following surgery, you'll receive detailed instructions on:</p>
                        <ul>
                            <li><strong>Pain Management: </strong> You'll receive proper pain medication to manage post-operative discomfort.</li>
                            <li><strong>Pain Management: </strong>Techniques to minimize swelling will be discussed to promote healing and a faster return to normal activities.</li>
                            <li><strong>Compression Garments: </strong> Wearing compression garments helps with swelling and supports the newly contoured thighs.</li>
                            <li><strong>Downtime and Activity Restrictions: </strong> You'll be informed about the expected downtime and activity limitations to ensure a safe and successful recovery.</li>
                            <li><strong>Follow-up Appointments: </strong> Regular follow-up appointments allow the surgeon to monitor your progress, address any concerns, and ensure optimal outcomes.</li>
                        </ul>
                        <h2>Thigh Lift Surgery: Results, and Before & After Photos</h2>
                        <p>Thigh lift surgery isn't just about removing excess skin; it's about empowering you to embrace a more confident you. Here's what you can expect on your journey to a smoother, more sculpted thigh appearance:</p>

                        <h3>Achieving Long-Lasting Transformation</h3>
                        <p>Thigh lift surgery permanently addresses laxity and excess skin by tightening underlying tissues and removing unwanted tissue. This dramatic improvement in your thigh contour can significantly boost your confidence and transform the way you feel in clothes.</p>
                        <p>Maintaining a healthy weight and lifestyle is key to maximizing the longevity of these results. While some natural changes may occur due to aging, you can enjoy the benefits of your surgery for years to come with a commitment to healthy habits.</p>

                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Before & After Photos:</h3>
                        <p>Imagine stepping into clothes you love with newfound confidence. Before and after photos, shared with patient consent, showcase the remarkable results that thigh lift surgery can achieve. These are not just pictures; they're a glimpse into your potential transformation. </p>
                        <p>By viewing these realistic visual representations, you can gain a clear understanding of the improvements possible and make informed decisions about your body contouring goals.</p>
                    </div>

                    {/* ------------------------------------------------------------------------->> WHAT TO EXPECT AFTER SURGERY <<---------------------------------------------------------------------------------------------------- */}
                    {/* ------------------------------------------------------------------------->> WHAT TO EXPECT AFTER SURGERY <<---------------------------------------------------------------------------------------------------- */}


                    <div className="tab-pane fade nav-faq " id="nav-faq" role="tabpanel" aria-labelledby="nav-faq-tab">
                        <h2>Thigh Lift: Frequently Asked Questions (FAQs)</h2>
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
                        <h2>Thigh Lift Surgery: Insurance and Financing Options</h2>
                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Transparent Cost Breakdown:</h3>
                        <p>At our practice, we believe in transparent pricing. We provide a detailed breakdown of thigh lift surgery costs, including anesthesia fees and surgeon fees. During your consultation, you'll receive a personalized cost estimate tailored to your specific needs and chosen procedure type. This upfront information empowers you to make informed decisions about your surgery.</p>
                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Financing Solutions to Help You Achieve Your Goals: </h3>
                        <p>We understand that the cost of surgery can be a consideration. To make thigh lift surgery more accessible, we offer a variety of financing options:</p>
                        <ul>
                            <li><strong>Third-Party Financing:  </strong>We partner with reputable third-party lenders to offer financing plans that fit your budget.</li>
                            <li><strong>Payment Installment Plans: </strong> We may offer in-house payment installment plans to help you manage the cost over time.</li>
                            <li><strong>Layaway Plans: </strong> In some cases, layaway plans may be available to allow you to save towards your surgery in advance.</li>
                            <li><strong>Cosmetic Surgery Finance:  </strong>We can guide you towards exploring cosmetic surgery financing options available through specialized lenders.</li>
                        </ul>
                        <p>Our dedicated team is here to help you find the most affordable and suitable financing option for your needs. Don't hesitate to discuss your financial considerations during your consultation.</p>

                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Insurance Coverage:</h3>
                        <p>Thigh lifts are typically considered cosmetic procedures and are generally not covered by insurance. However, some insurance plans may offer partial coverage in specific circumstances, such as addressing severe skin laxity that causes functional limitations. We recommend contacting your insurance provider directly to inquire about any potential coverage for your specific situation.</p>
                        <h2>Schedule Your Free Thigh Lift Surgery Consultation Today!</h2>
                        <p>Considering sculpting your thighs and achieving a smoother, more toned appearance? Schedule a FREE consultation with Dr. Garg at Shape U Deserve to discuss how thigh lift surgery can help you reach your goals.</p>
                        <p>During your consultation, our board-certified plastic surgeon will:</p>
                        <ul>
                            <li>Listen to your concerns and desired outcomes.</li>
                            <li>Perform a thorough examination to assess your candidacy.</li>
                            <li>Discuss the different thigh lift options available.</li>
                            <li>Create a personalized treatment plan tailored to your unique needs.</li>
                            <li>Address any questions you may have about the procedure.</li>
                        </ul>

                        <p>Don't wait any longer to enhance your facial contours! Schedule your FREE consultation today and discover how buccal fat removal can help you achieve a more sculpted and defined look.</p>
                        <i>Call us now at <span style={{ color: 'blue' }}>+1424-666-1260</span> or visit our website to book your consultation online!</i>
                    </div>
                </div>
            </div>
            <Board />

            <TestMoni />
        </>

    );
}
