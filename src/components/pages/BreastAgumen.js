import React from 'react';
import '../css/contact.css';
import AOS from 'aos';
import { useEffect } from 'react';

//ACCORDIAN css
import '../css/Pages.css';
import BreastAgumentation from '../img/home/BreastAgumentation.png'
import banner from '../img/home/breasGIF.mp4'




import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import TestMoni from './TestMoni'
import Board from './Board'





export default function BodyLiftProcedure() {

    useEffect(() => {
        AOS.init({
            duration: 500,
            easing: "ease-out-cubic",
        });
    }, []);

    const faqData = [
        {
            question: "What does breast augmentation do? ",
            answer: "Breast augmentation is a surgical procedure that enhances breast size usually through the placement of implants, resulting in increased volume and improved breast shape. Sometimes, fat harvested from liposuction can be used for breast augmentation."
        },
        {
            question: "What is the difference between breast implants and breast augmentation? ",
            answer: " Breast implants are silicone or saline-filled sacs inserted during surgery to increase breast volume. Breast augmentation, on the other hand, is a broader term encompassing procedures to enhance breasts, including implants or fat transfer techniques."
        },
        {
            question: "What is the difference between a breast lift and breast augmentation?  ",
            answer: " A breast lift (mastopexy) addresses sagging breasts by reshaping and lifting the existing tissue for a more youthful appearance. Breast augmentation primarily focuses on increasing breast size using implants or fat transfer."
        },
        {
            question: "How do I know if I need a breast augmentation or breast lift?",
            answer: "A consultation with expert Dr. Garg can help you in understanding your particular anatomy and an appropriate plan to get the breast shape and aesthetics you are looking for."
        },
        {
            question: "How many years does breast augmentation last? ",
            answer: " The longevity of breast implants varies depending on factors like implant type, surgical technique, and individual characteristics. On average, high-quality implants can last for decades as long as they don't rupture, causing discomfort (capsular contracture) or causing any issues.  Replacement might be recommended for aesthetic reasons, such as a size change."
        },
        {
            question: " How can I get a boob job without implants? ",
            answer: " Individuals seeking breast enhancement without implants can opt for fat transfer to the breasts. This natural augmentation procedure involves using liposuction to extract fat from one body area and injecting it into the breasts to enhance volume and shape."
        },
        {
            question: "What age should you get breast augmentation? ",
            answer: "Breast augmentation is commonly performed on women in their 20s and 30s, but the ideal age depends on individual circumstances and goals. It's crucial to be done at an appropriate breast development stage and a stable weight for optimal results."
        },
        {
            question: "What options do you offer to afford breast implants?  ",
            answer: "We usually offer breast augmentation at very affordable prices. Additionally, we offer third party financing and a layaway program. "
        },
        {
            question: "What are the alternatives to breast augmentation surgery? ",
            answer: "Alternatives to traditional breast augmentation surgery include fat transfer procedures, , and breast lift surgeries, each offering unique benefits and outcomes."
        },
        {
            question: "Recovery after breast augmentation is most intense in the first week with swelling and soreness. Most daily activities resume within 2-3 weeks, and exercise ican be started after 6-8 weeks. Always follow your surgeon's instructions for a smooth recovery!"
        },
        {
            question: "Will breast implants affect my ability to breastfeed? ",
            answer: "Most women with breast implants can breastfeed successfully, factors such as the  baseline condition of the breasts before surgery. Consulting with a surgeon can provide personalized insights based on individual circumstances."
        },
    ];

    return (
        <>

            <div className="banner">
                <video className='sliderVid' src={banner} autoPlay muted loop style={{ width: '100%', }}></video>
                <h2 className='px-2 py-1' >Breast Augmentation</h2>
            </div>
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
                        <h1> Breast Augmentation Surgery in Los Angeles & Beverly Hills</h1>
                        <img src={BreastAgumentation} alt="" height={400} data-aos="zoom-out-left" style={{ float: "right", margin: "10px", }} />

                        <p>  Do you dream of a more balanced and symmetrical bust that complements your body shape? Breast augmentation surgery can be a transformative solution, helping you achieve the shape you've always desired. </p>
                        <p>
                            <strong> Whether you're looking to address low breast volume, variations in breast development, or changes due to weight fluctuations, this procedure can create a more symmetrical and aesthetically pleasing bust.</strong></p>

                        <p>Beyond physical enhancements, breast augmentation surgery can significantly boost your self-confidence. At our practice, led by a highly qualified and experienced surgeon specializing in breast augmentation, we prioritize providing a customized plan that caters to your unique needs and aspirations. </p>

                        <p>    Our expertise lies in guiding you through a journey that enhances your outward appearance and elevates your self-esteem. We ensure exceptional results and prioritize your comfort throughout the process.</p><br />

                        <h2><strong>Understanding Breast Augmentation Surgery (H2)</strong></h2>
                        <br />
                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> <strong>What is Breast Augmentation Surgery? </strong></h3>

                        <p>  Breast augmentation surgery is a transformative procedure crafted to improve breast size, shape, and symmetry, resulting in a more balanced and confident aesthetic outlook.
                        </p>
                        <p>Whether achieved through the placement of implants or innovative fat transfer techniques, this surgery addresses a spectrum of concerns, including rectifying breast asymmetry, post-pregnancy breast volume restoration or weight loss, and sculpting a desired figure.</p><br />

                        <h3><FontAwesomeIcon icon={faCheck} className='mark' />   How Can Breast Augmentation Surgery Benefit You?</h3>

                        <p>  However, the advantages of breast augmentation surgery transcend mere physical alterations. The psychological impact is profound, boosting self-confidence, emotional and overall well-being.</p>

                        <ul>
                            <li><strong>Increased Self-Confidence:</strong> Many patients report feeling more confident and comfortable in their own skin after achieving their desired breast shape and size.</li>
                            <li><strong>Enhanced Emotional Well-being:</strong> The emotional boost from a more balanced and aesthetically pleasing figure can significantly improve a woman's overall well-being.</li>
                            <li><strong>Body Image Satisfaction:</strong>By aligning your body with your inner vision of beauty, breast augmentation surgery can lead to greater satisfaction with your physical appearance.</li>
                        </ul>
                        <p><strong>Empowerment and Liberation:</strong> Many women describe a sense of empowerment and liberation after undergoing breast augmentation surgery. They feel their bodies better reflect their inner confidence and self-worth.</p>
                        <p><strong> Investment in Yourself:</strong>Consider breast augmentation surgery as an investment in yourself, a catalyst for positive change, and a pathway to a more confident and fulfilling future.</p><br />


                        <h2><strong>Ideal Candidates for Breast Augmentation Surgery </strong></h2>

                        <p> The ideal candidate for breast augmentation surgery is a woman in good overall health, free from any chronic medical conditions that could impact healing or surgery.  She possesses realistic expectations about the outcome and a sincere desire to enhance her appearance through this procedure.</p>
                        <p><i> Age is a factor</i> , but generally healthy women in their late teens to early 60s are suitable candidates. Maintaining a healthy Body Mass Index (BMI) is also recommended for optimal results.</p>
                        <p><i>  Additionally, timing is flexible.</i> You can choose this procedure anytime before or after childbearing. However, some surgeons may recommend waiting until after breastfeeding is complete to ensure optimal implant placement and a more predictable outcome.</p>
                        <p><i>Non-smokers are strongly preferred candidates.</i> Smoking hinders the healing process and can negatively impact the success of the procedure. A healthy lifestyle that prioritizes good nutrition and regular exercise is crucial for optimal healing and favorable outcomes post-surgery.</p>

                        <p><strong> A consultation with a qualified surgeon is crucial to determine candidacy and discuss your individual goals. </strong>During this consultation, the surgeon will assess your overall health, review your medical history, and perform a physical examination to determine the most suitable implant size, type, and placement technique for your desired outcome.</p><br />
                        <h2>Exploring Breast Implant Options for a Personalized Approach </h2>

                        <p>
                            Selecting the perfect breast implants is crucial for achieving a natural and personalized aesthetic outcome. During your consultation with a qualified surgeon, you'll discuss various implant options to determine the best fit for your body type, desired results, and overall goals. Here's an overview of key factors to consider:</p>
                        <br />


                        <h3><FontAwesomeIcon icon={faCheck} className='mark' />  Breast Implant Material Options</h3>
                        <ul>
                            <li><strong>Silicone Gel Implants:</strong> These popular implants offer a soft, natural feel that closely resembles breast tissue.
                            </li>
                            <li><strong>Saline Implants:</strong>Filled with sterile saltwater, saline implants are a safe choice. However, they may not provide the same natural feel as silicone gel implants, and some women experience a rippling effect.</li>
                        </ul>
                        <br />
                        <h3> <FontAwesomeIcon icon={faCheck} className='mark' /> Choosing Breast Implants</h3>


                        <p>Choosing the correct type of implants is a very crucial step for the best aesthetic outcome.Individuals with a slender body type and minimal breast tissue might not be suitable candidates for saline implants due to potential visibility of indentations. In these cases, silicone gel implants are often preferred for a more natural look and feel.</p>

                        {/* <table border="1" cellpadding="10" >
                                                        <thead style={{backgroundColor: "yellow'"}} >
                                                            <th> Characteristic</th>
                                                            <th>Silicone Gel Implants</th>
                                                            <th>Saline Implants</th>
                                                        </thead >
                                                        <tbody>
                                                            <tr>
                                                                <td> Feel</td>
                                                                <td>Soft and natural</td>
                                                                <td>Slightly Firmer </td>
                                                            </tr>
                                                            <tr>
                                                                <td> Consistency</td>
                                                                <td>Mimics breast tissue</td>
                                                                <td>Adjustable</td>
                                                            </tr>
                                                            <tr>
                                                                <td> Rupture Detection</td>
                                                                <td>Requires MRI</td>
                                                                <td>Visible deflation</td>
                                                            </tr>
                                                            <tr>
                                                                <td>  Rippling</td>
                                                                <td>Not evident</td>
                                                                <td>Sometimes rippling is very visible</td>
                                                            </tr>
                                                        </tbody>
                                                    </table> */}

                        <table class="table table-bordered" data-aos="flip-left">
                            <thead>
                                <tr>
                                    <th scope="col">Characteristic</th>
                                    <th scope="col">Silicone Gel Implants</th>
                                    <th scope="col">Last</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Feel</th>
                                    <td>Soft and natural</td>
                                    <td>Slightly Firmer </td>
                                </tr>
                                <tr>
                                    <th scope="row">Consistency</th>
                                    <td>Mimics breast tissue</td>
                                    <td>Adjustable</td>
                                </tr>
                                <tr>
                                    <th scope="row">Rupture Detection</th>
                                    <td>Requires MRI</td>
                                    <td>Visible deflation</td>
                                </tr>
                                <tr>
                                    <th scope="row">Rippling</th>
                                    <td>Not evident</td>
                                    <td>Sometimes rippling is very visible</td>
                                </tr>

                            </tbody>
                        </table>

                        <br />

                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Breast Implant Shape Options</h3>
                        <p><strong>Round Implants:</strong> These implants create a fuller bust with increased cleavage and projection. They're ideal for achieving a more dramatic and pronounced result.</p>
                        <p><strong>Teardrop Implants:</strong>Designed to mimic the natural tear-drop shape of the breast, these implants offer a subtle and realistic look. They're well-suited for restoring breast shape after weight loss or pregnancy, providing a proportionate appearance that complements your body's contours. However, teardrop implants are not suitable for everyone, and improper placement can lead to aesthetic concerns.</p>

                        <p>During your consultation, your surgeon might also discuss other implant characteristics, such as:</p>

                        <ul>
                            <li><strong>Smooth Implants:</strong>These are the most popular and widely used implants, with a lower risk of side effects.</li>
                            <li><strong>Textured Implants:</strong>These implants are less commonly used but may be indicated for certain situations. They have a rougher surface texture that can help reduce the risk of capsular contracture (scarring around the implant). However, textured implants have been linked to a rare complication called Breast Implant-Associated ALCL (anaplastic large cell lymphoma). </li>
                        </ul>
                        <p><strong><i>
                            Our surgeon will discuss the risks and benefits of textured implants with you in detail.</i></strong></p>

                    </div>


                    <div className="tab-pane fade" id="nav-Before" role="tabpanel" aria-labelledby="nav-Before-tab">

                        <h2>  <strong>Breast Augmentation Surgery Procedure Explained</strong> </h2>
                        <p>  Understanding the breast augmentation surgery process can alleviate anxiety and empower you to make informed decisions. Here's a step-by-step breakdown of what to expect:</p><br />
                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Consultation & Planning </h3>

                        <p> An open and honest conversation with your surgeon is crucial. During your consultation, you'll discuss your goals, medical history, desired outcomes, and any concerns you may have.  A thorough physical examination will assess your breast tissue and anatomy to determine the most suitable implant type, size, and placement for your unique needs.</p>

                        <p><strong>Visualizing Your Results:</strong>Visual aids such as implant sizers or advanced 3D imaging technology can provide a more precise idea of potential results.  This technology can significantly aid in the planning process and ensure you and your surgeon are aligned on the desired outcome of your breast augmentation.</p>
                        <br />
                        <h3> <FontAwesomeIcon icon={faCheck} className='mark' /> Surgical Technique </h3>
                        <p><strong> Anesthesia:</strong>The choice of anesthesia will be based on your preferences and your surgeon's recommendation, prioritizing both your comfort and safety during the procedure.  Breast augmentation can be performed under either conscious sedation or general anesthesia.</p>
                        <p><strong>Incision Placement:</strong>
                            There are various incision options available, each with specific benefits depending on your individual anatomy and desired outcome.  Common incision sites include:</p>

                        <ul>
                            <li><strong>Inframammary Fold:</strong>This incision is placed in the natural crease beneath the breast, offering excellent concealment.</li>
                            <li><strong>Periareolar:</strong>This incision is made around the edge of the areola, offering a discreet scar but potentially impacting nipple sensation in rare cases.</li>
                            <li><strong>Transaxillary:</strong>This incision is placed in the armpit, leaving no visible scars on the breast itself but might be a longer scar overall.</li>
                        </ul>




                        <p><strong> Implant Placement:</strong>Choosing between submuscular (beneath the chest muscle) and subglandular (beneath breast tissue) placement is an important decision with anatomical considerations that impact the final look and feel of the breasts.  Your surgeon will discuss the advantages and disadvantages of each option to help you determine the best fit for your goals.
                        </p>

                        <p><strong> Closure Techniques:</strong>Meticulous closure techniques minimize scarring and promote optimal healing post-surgery, ensuring a more aesthetically pleasing outcome. </p><br />

                        <h3><FontAwesomeIcon icon={faCheck} className='mark' />  Recovery</h3>

                        <p><strong>Immediately After Surgery:</strong>Following breast augmentation surgery, patients can expect to receive pain management, vital sign monitoring, and initial breast augmentation recovery care in a designated area to ensure a smooth transition from the operation.</p>
                        <p><strong>First Week:</strong>During the first week of recovery, it is essential to focus on managing pain, swelling, and bruising (if any). Patients may be advised to wear compression garments to support the healing process and are typically instructed to avoid strenuous activities that could interfere with recovery.</p>

                        <p><strong>Returning to Normal Activity:</strong>As the initial recovery phase progresses, patients can gradually resume daily activities, including work, exercise, and driving. It is essential to follow the surgeon's guidance regarding the pace at which activities can be reintroduced to prevent complications and ensure a successful recovery.</p>

                        <p><strong>Long-Term Recovery:</strong>While individual healing timelines may vary, most patients will start to experience their breasts feeling and looking their best within a few months post-surgery. Adhering to post-operative care instructions, attending follow-up appointments, and maintaining a healthy lifestyle is crucial for achieving optimal long-term results and ensuring the success of the breast augmentation procedure.</p>

                        <br />
                        <h2>Potential Risks and Complications of Breast Augmentation Surgery</h2>
                        <p> Informed consent is crucial for any surgical procedure. Understanding the potential risks associated with breast augmentation surgery empowers you to make informed decisions about your healthcare. Here's an overview of some common risks and complications to be aware of:</p>

                        <p><strong>Infection:</strong> As with any surgery, there's a risk of infection, which may require antibiotic treatment.</p>
                        <p><strong>Bleeding:</strong>Excessive bleeding during or after surgery can lead to complications and might necessitate additional intervention.</p>
                        <p><strong>Bruising and Swelling:</strong>These are common side effects that typically subside over time.</p>
                        <p><strong>Implant Rupture or Leakage:</strong>Specific to saline implants, rupture or leakage may occur, requiring implant replacement.</p>
                        <p><strong>Scar Tissue Formation:</strong> Capsular contracture, the development of scar tissue around the implant, can affect the appearance and feel of the breasts. If severe, it may necessitate capsular contracture repair surgery.</p>
                        <p><strong>Changes in Nipple Sensation:</strong>Temporary or permanent changes in nipple sensation can occur.</p>
                        <p><strong>Allergic Reaction:</strong>An allergic reaction to anesthesia or implant materials is a possibility.
                        </p>
                        <p><strong>Implant Shift:</strong>In rare cases, the implant may shift from its original position.</p>
                        <p><strong>Difficulty Breastfeeding:</strong>While some women breastfeed successfully after augmentation, there's a potential for difficulty.</p>

                        <p><i>The expertise of the surgeon is crucial in minimizing these risks.</i> Patients are advised to select a well qualified plastic surgeon with a proven track record performing breast augmentation procedures. Prioritizing thorough consultations and conducting comprehensive research can empower patients to make informed decisions about their surgery, ensuring optimal outcomes and reducing the likelihood of complications.
                        </p><br />
                        <h2> Understanding Breast Augmentation Surgery Costs:</h2>
                        <p>The cost of breast augmentation surgery can fluctuate significantly depending on several key factors that patients should consider before undergoing the procedure. These factors include:</p>

                        <ul>
                            <li><strong>Implant Type:</strong>The choice of implant material, size, and brand can significantly affect the overall cost.</li>
                            <li><strong>Anesthesia Costs:</strong> The type of anesthesia administered during the surgery (conscious sedation or general anesthesia) will impact the price.</li>
                            <li><strong>Facility Fees:</strong>Costs associated with the surgical facility where the procedure occurs, including operating room fees and equipment expenses, contribute to the total cost.</li>
                            <li><strong>Geographical Location:</strong> The cost of living and market rates for medical services in a specific geographical area can also influence the overall cost of the procedure.</li>
                            <li><strong>Surgeon's Fees:</strong>The expertise and experience of the surgeon performing the breast augmentation can influence the overall cost of the procedure.</li>
                        </ul>


                        <br />

                        <h3> <FontAwesomeIcon icon={faCheck} className='mark' /> Cost Range and Financing Options:</h3>
                        <p>While providing a specific cost is difficult due to variations, breast augmentation surgery can typically range from <strong>$7,000 to $15,000+</strong> depending on the factors mentioned above.  This is just a ballpark estimate, and actual costs may vary.</p>
                        <p>  For some patients, financing options can help manage the expenses associated with breast augmentation surgery. To learn more about financing options, please click here Link to financing resource: <a href="https://www.shapeudeserve.com/finance-and-payments">https://www.shapeudeserve.com/finance-and-payments</a> </p>
                        <br />
                        <h2> Breast Augmentation Alternatives: Exploring Your Options </h2>

                        <p> While breast augmentation surgery remains a popular choice for individuals seeking breast enhancement, it may not be the ideal solution for everyone. Several alternative procedures offer viable options for achieving desired results without using implants. These alternatives include:</p>

                        <ul>
                            <li><strong>Fat Transfer to the Breasts:</strong>This procedure utilizes liposuction to remove fat tissue from unwanted areas like the abdomen, thighs, or buttocks. The harvested fat is then processed and meticulously injected into the breasts to add volume and enhance shape.  Fat transfer offers a natural and tissue-friendly approach to breast augmentation, with the added benefit of body contouring in the donor area.
                            </li>
                            <li><strong>Breast Lift Surgery (Mastopexy):</strong>If you're experiencing sagging or drooping breasts due to weight fluctuations, pregnancy, or aging, a breast lift surgery may be a more suitable alternative. This procedure focuses on reshaping and lifting the breast tissue to achieve a more youthful and perky appearance. It's important to note that a breast lift typically won't significantly increase breast size.</li>
                            <i>Some additional non-surgical options you might consider include:</i>
                            <li><strong>External Breast Expanders:</strong>These temporary, silicone devices fit within a supportive bra to create the appearance of larger breasts. They are not suitable for long-term use but can be an option for a special occasion.
                            </li>
                            <li><strong>Breast Inserts:</strong>Inserts come in various shapes, sizes, and materials to provide subtle enhancement within a supportive bra.
                            </li>
                        </ul>



                        <p> During consultations with  an expert, individuals are encouraged to explore all available options to determine the most appropriate approach for their unique needs and goals. By discussing the benefits and limitations of each procedure, patients can gain a comprehensive understanding of the alternatives available, enabling them to make well-informed decisions.</p>

                        <p>  <i>Remember,</i> consulting with a qualified cosmetic surgeon is essential for discussing these alternatives and determining the best course of action for you.</p>

                    </div>



                    {/* ------------------------------------------------------------------------------------------>> Why Choose us <<------------------------------------------------------------------------------------------------------------------------------ */}
                    <div className="tab-pane fade why-choose" id="why-choose" role="tabpanel" aria-labelledby="nav-why-choose">


                        <h2>    Why Choose Dr. Garg for Your Breast Augmentation?</h2><br />
                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Expertise and Experience:</h3>
                        <p> Dr. Garg is a Diplomate American Board of Cosmetic Surgery with extensive experience performing breast augmentation procedures. This ensures he possesses the highest qualifications and surgical skills to deliver exceptional results. With over 23 years of experience and many successful procedures, Dr. Garg is a trusted expert in the field of breast augmentation.</p><br />
                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Focus on Patient Care:</h3>
                        <p> Dr. Garg prioritizes creating a personalized treatment plan for each patient. He takes into account your individual anatomy, desired results, and lifestyle to recommend the most suitable implant type, size, and placement for a natural and beautiful outcome.</p>
                        <br />
                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Commitment to Safety and Comfort:</h3>
                        <p>  Dr. Garg prioritizes patient safety above all else. He adheres to the highest surgical standards and utilizes advanced techniques to minimize risks associated with breast augmentation surgery. He also ensures a comfortable experience throughout the process, from consultation to recovery.</p><br />

                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Achieving Natural-Looking Results:</h3>
                        <p> Dr. Garg combines his surgical expertise with an artistic eye for breast aesthetics. He understands the importance of creating natural-looking results that complement your body shape and proportions.</p>
                        <br />
                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Open Communication and Support:</h3>

                        <p> Dr. Garg believes in clear and open communication. He will discuss all aspects of the procedure, address your concerns thoroughly, and answer your questions in a way that empowers you to make informed decisions throughout your breast augmentation journey. His team will also provide ongoing support during recovery.</p>
                        <h3><FontAwesomeIcon icon={faCheck} className='mark' />  <br />
                            State-of-the-Art Facilities and Advanced Techniques:</h3>

                        <p>At Shape U Deserve, we pride ourselves on offering state-of-the-art facilities and the latest techniques in breast augmentation surgery. Our modern surgical suites are equipped with cutting-edge technology, ensuring a safe and comfortable environment for our patients.</p>
                        <br />
                        <h3> <FontAwesomeIcon icon={faCheck} className='mark' /> Hear from Our Satisfied Patients </h3>
                        <p>Numerous satisfied patients have shared positive reviews about Dr. Garg and Shape U Deserve.  These testimonials showcase Dr. Garg's dedication to achieving beautiful, natural-looking results that exceed expectations.</p>

                        <blockquote> <em>"Quote about positive experience with recovery and results from Patient A" </em>- Patient  Testimonials.</blockquote>

                    </div>
                    {/* ------------------------------------------------------------------------------------------>> Why Choose us <<------------------------------------------------------------------------------------------------------------------------------ */}


                    {/* ------------------------------------------------------------------------->> WHAT TO EXPECT AFTER SURGERY <<---------------------------------------------------------------------------------------------------- */}
                    {/* ------------------------------------------------------------------------->> WHAT TO EXPECT AFTER SURGERY <<---------------------------------------------------------------------------------------------------- */}

                    <div className="tab-pane fade" id="nav-expect" role="tabpanel" aria-labelledby="nav-expect-tab">


                        <h2>Breast Augmentation: Recovery, Results, and Before & After Photos </h2><br />
                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Breast Augmentation Recovery: </h3>
                        <p>The recovery process after breast augmentation surgery varies depending on the individual and the type of procedure performed. However, here's a general overview of what you can expect:</p>

                        <ul>
                            <li><strong>The First Week:</strong> This period typically involves the most discomfort, with swelling, bruising, and tenderness around the breasts. Pain medication will be prescribed to manage discomfort. You'll likely wear a surgical bra for support and compression.</li>
                            <li><strong>Weeks 2-3:</strong> Most of the initial discomfort subsides, and swelling and bruising begin to decrease. You can gradually resume most light activities.</li>
                            <li><strong>Weeks 4-6:</strong> By this time, you should be feeling close to normal with minimal discomfort. You can resume most daily activities, including light exercise.</li>
                            <li><strong>6-8 Weeks:</strong> Strenuous activities like weightlifting are typically recommended to wait until 6-8 weeks after surgery to allow for optimal healing.</li>
                        </ul>
                        <br />

                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Breast Augmentation Results: </h3>
                        <p>The results of breast augmentation surgery can be long-lasting and very satisfying. Here's what you can expect:</p>
                        <ul>
                            <li><strong>Enhanced Breast Size and Shape:</strong> Implants can significantly increase breast volume and improve the overall shape and contour of your breasts.</li>
                            <li><strong>Improved Confidence:</strong> Many women experience a boost in self-confidence and body image after achieving their desired breast size and shape.</li>
                            <li><strong>Natural Appearance:</strong> Modern implants and surgical techniques can create a natural-looking breast augmentation that complements your body type.</li>
                        </ul>
                        <br />

                        <h3><FontAwesomeIcon icon={faCheck} className='mark' /> Before & After Photos:</h3>
                        <p>We understand the importance of visualizing your potential results. While individual results may vary, before and after photos can provide a general idea of what breast augmentation can achieve.</p>

                        <p><strong>Disclaimer:</strong> Results may vary. The before and after photos featured are for illustrative purposes only and do not guarantee specific outcomes.</p>

                    </div>

                    {/* ------------------------------------------------------------------------->> WHAT TO EXPECT AFTER SURGERY <<---------------------------------------------------------------------------------------------------- */}
                    {/* ------------------------------------------------------------------------->> WHAT TO EXPECT AFTER SURGERY <<---------------------------------------------------------------------------------------------------- */}


                    <div className="tab-pane fade nav-faq " id="nav-faq" role="tabpanel" aria-labelledby="nav-faq-tab">
                        <h2>Breast Augmentation: Frequently Asked Questions (FAQs)</h2>
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
                        {/* <!-- INSURANCE AND FINANCING --> */}

                        <h2> Insurance and Financing </h2>
                        <p><strong>At our facility, we prioritize transparency</strong>  to empower patients with a clear understanding of breast augmentation costs and build trust.</p>
                        <ul>
                            <li><strong>Financing options:</strong> We offer various financing options through third parties to help patients manage the cost of breast augmentation. We understand that the financial aspect of surgery can be a concern for many individuals, and our goal is to make our services accessible to a broader range of patients. By providing flexible financing solutions, we aim to alleviate the financial burden and make quality care more attainable for those seeking breast augmentation.</li>
                            <li><strong>Insurance coverage:</strong>  While some insurance providers may offer coverage for breast augmentation under specific circumstances, patients need to verify the details of their coverage with their individual insurance carriers. Insurance coverage for cosmetic procedures like breast augmentation can vary widely, and patients must clearly understand what expenses may be covered by their insurance plans.</li>
                        </ul>
                        <p> By offering transparent pricing, flexible financing options, and guidance on insurance coverage, we strive to support our patients in navigating the financial aspects of breast augmentation. Our commitment to affordability and accessibility is reflected in our comprehensive approach to insurance and financing, ensuring that patients can focus on their health and well-being without undue financial stress.</p><br />
                        <h2> Schedule Your Free Breast Augmentation Consultation Today! </h2>
                        <p>Ready to achieve your desired breast shape and enhance your confidence? Schedule a free consultation with our experienced cosmetic surgeon, Dr. Garg, at Shape U Deserve. During your consultation, we'll discuss your goals, answer your questions, and create a personalized plan to help you achieve your dream results.</p>

                        <p>Here's what you can expect:</p>

                        <ul>
                            <li><strong>A personalized consultation:</strong>  We'll listen to your unique goals and concerns.</li>
                            <li><strong>Expert advice:</strong>  Dr. Garg will provide insights and answer your questions about breast augmentation.</li>
                            <li><strong>A tailored treatment plan: </strong>  We'll work with you to create a plan that meets your individual needs and expectations.
                            </li>
                        </ul>
                        <i>     Don't wait to achieve the look you've always desired. Schedule your free consultation today by calling <a href="">+1 424-666-1260</a> or filling out our online form.</i>

                    </div>
                </div>
            </div>
            <Board />

            <TestMoni />
        </>

    );
}
