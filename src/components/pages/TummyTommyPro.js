import React, { useEffect } from 'react';
import '../css/contact.css';
import banner from '../img/gif_for_top/tummy_tuck_video.mov'
import AOS from 'aos';


//ACCORDIAN css
import '../css/Pages.css';
import Tummy1 from '../img/home/Tummy1.jpg'

import TestMoni from './TestMoni'
import Board from './Board'





import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';




export default function TummyTommyPro() {

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-out-cubic",
    });
  }, []);

  const faqData = [
    {
      question: "Will I have a scar after tummy tuck surgery?",
      answer: "Yes, scarring is inevitable after a tummy tuck surgery. However, the scar is typically well-concealed within natural body contours, often hidden by underwear or swimwear."
    },
    {
      question: "How long is the recovery time after tummy tuck surgery? ",
      answer: "Recovery time varies depending on the individual and the extent of the procedure. However, you can expect to experience some initial discomfort for the first few weeks, with complete healing taking several months."
    },
    {
      question: "Am I a good candidate for tummy tuck surgery? ",
      answer: "Ideal candidates for tummy tuck surgery are generally healthy individuals with realistic expectations about the outcome. While a tummy tuck can address excess skin and laxity, it's not a weight loss surgery. Consulting with a board-certified plastic surgeon is crucial to determine if you're a good candidate for the procedure and discuss your individual goals."
    },
    {
      question: "Will tummy tuck surgery help me lose weight? ",
      answer: "No, a tummy tuck surgery is not a weight loss procedure. While it removes excess skin and fat, it's not designed for significant weight loss. Maintaining a healthy weight before and after surgery is crucial for optimal results and long-term satisfaction."
    },
    {
      question: ". How long will my tummy tuck results last?",
      answer: "The results of a tummy tuck surgery usually lasts long with proper diet, exercise, and weight management. However, aging and lifestyle factors can affect the results over time."
    },
    {
      question: "Can I get pregnant after having tummy tuck surgery? ",
      answer: "Yes, you can get pregnant after having tummy tuck surgery. However, it's recommended to wait until you've fully recovered from surgery and maintained a stable weight before attempting a pregnancy. Consulting with your doctor is crucial for discussing the best timing for pregnancy after a tummy tuck."
    },
  ];

  return (
    <>
      <div className="banner">
        {/* <img src={banner} alt="" /> */}
        <video className='video_css' src={banner} playsInline autoPlay muted loop style={{ width: '100%', height: '70%' }}></video>
        <h2 className='px-2 py-1'>Tummy Tuck</h2>
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
            <h1>Tummy Tuck Surgery (Abdominoplasty) in Los Angeles & Beverly Hills  </h1>
            <img src={Tummy1} alt="" height={400} data-aos="fade-right" style={{ float: "right", margin: "10px", }} />
            <p><i>Considering a tummy tuck to improve your abdominal appearance and regain your youthful belly tone? Tummy tuck surgery, medically known as abdominoplasty, aims to reshape and contour the abdominal laxity and weakness by removing excess skin and fats while tightening the belly muscle tissues. </i></p>
            <br />
            <p><strong>There are various types of tummy tucks, with the most common being full tummy tuck, mini tummy tuck, all tailor-made to precise wishes.</strong></p>
            <p>One common issue addressed is <i>diastasis recti</i>, where the stomach midline muscle tissues separate, often due to stretching by the pregnant uterus or other reasons. This surgical treatment facilitates restoring muscle integrity by repairing it.</p>

            <p><strong>Here's what a tummy tuck can achieve:</strong></p>
            <ul>
              <li>Create a trimmer, more toned midsection by removing excess skin and fat.</li>
              <li>Improve core strength and definition by tightening abdominal muscles.</li>
              <li>Repair diastasis recti, a condition where the stomach muscles separate, often after pregnancy.</li>
            </ul>
            <br />
            <h2>Understanding Tummy Tuck Surgery </h2>
            <h3><FontAwesomeIcon icon={faCheck} className='mark' />  What is a Tummy Tuck ?</h3>
            <p>Disappointed with lingering loose skin after weight loss? A tummy tuck, also known as abdominoplasty, removes excess skin and fat from the abdomen to create a trimmer, more toned appearance. It can also involve tightening the underlying muscles for a firmer core.
              While the desire for a flatter, more toned stomach is a common goal, the specific anatomical needs of each person vary. Thankfully, there are several types of tummy tucks available, each addressing different areas and concerns. Let's delve into the most common options:
            </p>
            <ul>
              <li><strong>Full Tummy Tuck: </strong> Often considered the most comprehensive procedure, a full tummy tuck targets the entire abdomen, from the ribs down to the pubic area. It addresses excess skin and tightens weakened muscles across the entire abdominal wall. This option is ideal for individuals with significant skin laxity and muscle separation throughout the abdomen, often resulting from significant weight loss, pregnancy, or aging.</li>
              <li><strong>Mini Tummy Tuck: </strong>This procedure focuses on the lower abdomen, specifically the area below the belly button. It's suitable for those with mild to moderate laxity concentrated in the lower abdominal region. A mini tummy tuck removes excess skin and tightens muscles in this targeted area, resulting in a smoother, more toned lower abdomen.</li>
              <li><strong>Extended Tummy Tuck: </strong> As the name suggests, this procedure goes beyond the standard tummy tuck by addressing not only the abdomen but also the flanks (love handles). It's ideal for individuals who have excess skin and loose muscles in both the abdomen and the flanks, creating a more contoured midsection and improved body definition.</li>
            </ul>
            <br />
            <p>While the above options are the most common, additional tummy tuck variations cater to specific needs:</p>
            <ul>
              <li><strong>360 Tummy Tuck:  </strong>This option takes a comprehensive approach, addressing the entire abdomen, flanks, and even the lower back. It's ideal for those seeking a complete body contour improvement, especially those with concerns about loose skin and weakened muscles in these areas.</li>
              <li><strong>Reverse Tummy Tuck: </strong> This specialized procedure focuses on the upper abdomen, above the belly button. It addresses excess skin and tightens muscles in this often-neglected area, leading to a smoother, more toned upper stomach.</li>
              <li><strong>Fleur-de-Lis Tummy Tuck: </strong> Designed for individuals with extreme skin laxity after massive weight loss or bariatric surgery, this procedure uses a unique incision pattern resembling a fleur-de-lis flower to achieve optimal skin removal and tightening.</li>
            </ul>
            <p>Tummy tuck, also known as abdominoplasty, can significantly improve your appearance and well-being in several ways:</p>
            <ul>
              <li><strong>Improved Body Contours: </strong> Imagine slipping into your favorite clothes with newfound confidence. Tummy tuck surgery removes excess skin and tightens weakened abdominal muscles, resulting in a flatter, smoother, and more defined midsection.</li>
              <li><strong>Enhanced Confidence: </strong> Feeling self-conscious about loose skin can be a thing of the past. A tummy tuck can dramatically improve your body image, allowing you to embrace your body with greater confidence. For example, you might feel more comfortable wearing swimsuits or fitted clothing.</li>
              <li><strong>Improved Back Support: </strong> In some cases, weak abdominal muscles can contribute to back pain. A tummy tuck, by tightening these muscles, can help alleviate back pain and improve your overall posture, leading to a more comfortable and active lifestyle.</li>
              <li><strong>Long-lasting Results: </strong> While the initial cost of a tummy tuck is a consideration, the long-lasting results can be a worthwhile investment. With proper care and lifestyle maintenance, a tummy tuck can deliver physical and emotional benefits for years to come.</li>
            </ul>
            <br />
            <h2>Ideal Candidates for Tummy Tuck Surgery </h2>
            <p>Tummy tuck surgery is not a weight loss solution, but it can effectively address loose skin and weakened abdominal muscles that remain after significant weight loss, pregnancy, or aging. Here are some characteristics of ideal candidates:</p>
            <br />
            <ul>
              <li><strong>Excess Skin and Laxity (Loose Skin): </strong> If you have significant loose skin in your abdomen that doesn't improve with diet and exercise, a tummy tuck can create a smoother, tighter midsection.</li>
              <li><strong>Stubborn Fat Deposits: </strong> Even with diet and exercise, some people struggle with stubborn pockets of fat in the abdomen. A tummy tuck can eliminate these pockets for a more sculpted appearance.</li>
              <li><strong>Diastasis Recti: </strong>This is a separation of the stomach muscles that can occur due to pregnancy or other factors. A tummy tuck can repair this separation and restore muscle integrity.</li>
              <li><strong>Good Overall Health: </strong> Being in good physical health is essential for undergoing any surgery, including a tummy tuck.</li>
              <li><strong>	Realistic Expectations: </strong> It's crucial to understand that a tummy tuck is a cosmetic procedure that improves appearance, not a magic bullet for weight loss. Maintaining a stable weight after surgery is essential for optimal long-term results.</li>
            </ul>
            <p>However, individuals planning significant weight loss should postpone the procedure until they achieve their goal weight, as future weight fluctuations can affect outcomes.</p>
            <br />
            <h2>Understanding Tummy Tuck Surgery Costs </h2>
            <p>Tummy tuck costs vary depending on several factors, including the chosen type of procedure (full or mini tummy tuck), the surgeon's expertise, and facility fees. Other considerations may also involve anesthesia and post-operative care costs. Here's a breakdown of some key elements that influence the price:</p>
            <ul>
              <li><strong>Chosen Type of Procedure: </strong> The cost can differ depending on whether you choose a full tummy tuck, mini tummy tuck, or another specialized procedure.</li>
              <li><strong>Surgeon's Expertise: </strong> The experience and qualifications of the surgeon can play a role in determining the cost.</li>
              <li><strong>Facility Fees: </strong> The hospital or surgical center where the procedure takes place will have its own associated fees.</li>
              <li><strong>Additional Costs: </strong> Anesthesia and post-operative care can also factor into the overall cost.</li>
            </ul>
            <p>Transparent pricing systems outline these elements, ensuring patients apprehend the breakdown of their tummy tuck surgical treatment charges. This facilitates informed decision-making and lets people plan for their financial investments in this procedure.</p>
          </div>


          <div className="tab-pane fade" id="nav-Before" role="tabpanel" aria-labelledby="nav-Before-tab">
            <h2>Tummy Tuck Surgery: Recovery, Results, and Before & After Photos </h2>
            <h3><FontAwesomeIcon icon={faCheck} className='mark' />  Tummy Tuck Recovery: What to Expect </h3>
            <p>Tummy tuck recovery is a journey, and while the initial discomfort might last a few weeks (typically 1-3 weeks), complete healing can take several months.  The key to a smooth recovery lies in following your doctor's post-operative instructions carefully.</p>
            <br />
            <p>What to Expect During Recovery: </p>
            <ul>
              <li><strong>Initial Pain: </strong> You can expect some pain during the first few weeks after surgery. Pain medication will be prescribed to manage discomfort.</li>
              <li><strong>Gradual Improvement: </strong> Over the next few weeks, the pain will gradually subside, and any soreness will lessen.</li>
              <li><strong>Long-Term Healing: </strong> Full healing can take several months, and patience is key. Your body is working hard to heal and adjust to its new contours.</li>
            </ul>
            <br />
            <h3><FontAwesomeIcon icon={faCheck} className='mark' />  Tummy Tuck Results:</h3>
            <p><strong>Patients can expect enhanced abdominal definition, decreased skin laxity, and a smoother body contour. </strong> It's important to remember that individual results will vary, and realistic expectations tailored to your specific anatomy are crucial for achieving long-lasting satisfaction.</p>
            <br />
            <h3><FontAwesomeIcon icon={faCheck} className='mark' />  Before & After Photos:</h3>
            <p>We understand the importance of visualizing your desired outcome. That's why we offer high-quality before and after photos of tummy tuck procedures. These photos can provide reassurance and inspiration as you consider this transformative surgery.</p>
          </div>



          {/* ------------------------------------------------------------------------------------------>> Why Choose us <<------------------------------------------------------------------------------------------------------------------------------ */}
          <div className="tab-pane fade why-choose" id="why-choose" role="tabpanel" aria-labelledby="nav-why-choose">
            <h2>Why Choose Dr. Garg for Your Tummy Tuck Surgery? </h2>
            <p>When it comes to achieving a flatter, more toned midsection, a tummy tuck can be a transformative procedure. But with numerous surgeons offering tummy tucks, why choose Dr. Garg? Here's what sets him apart:</p>
            <ul>
              <li><strong>Experience and Expertise:  </strong>Dr. Garg is a Diplomate American Board of Cosmetic Surgery with extensive experience performing tummy tuck surgeries. This ensures he possesses the highest qualifications and surgical skills to deliver exceptional results.</li>
              <li><strong>Focus on Patient Safety: </strong> Dr. Garg prioritizes patient safety above all else. He adheres to the highest surgical standards and utilizes advanced techniques to minimize risks associated with tummy tuck surgery.</li>
              <li><strong>Meticulous Attention to Detail: </strong> Dr. Garg combines his surgical expertise with an artistic eye for body contouring. He understands the importance of creating natural-looking results that complement your unique body shape and proportions.</li>
              <li><strong>Open Communication and Personalized Care:  </strong>Dr. Garg believes in clear and open communication. He will discuss all aspects of the procedure, address your concerns thoroughly, and answer your questions in a way that empowers you to make informed decisions throughout your tummy tuck journey.</li>              <li><strong>Proven Track Record of Satisfied Patients: </strong> Dr. Garg has a reputation for achieving exceptional results.  Consider including a section showcasing before-and-after photos from his previous tummy tuck patients (with their consent, of course!). Positive patient testimonials can also add a layer of trust and social proof.</li>
              <li><strong>Commitment to Continuous Learning: </strong> Dr. Garg is dedicated to staying at the forefront of his field. He actively participates in professional development and training to ensure he utilizes the latest advancements and techniques in tummy tuck surgery.</li>
            </ul>
            <br />

            <br /><h3><FontAwesomeIcon icon={faCheck} className='mark' /> Hear from Our Satisfied Patients</h3>
            <p>Numerous satisfied patients have shared positive reviews about Dr. Garg and Shape U Deserve.  These testimonials showcase Dr. Garg's dedication to achieving beautiful, natural-looking results that exceed expectations.</p>
            <blockquote> <em>"Quote about positive experience with recovery and results from Patient A" </em>- Patient  Testimonials.</blockquote>

          </div>
          {/* ------------------------------------------------------------------------------------------>> Why Choose us <<------------------------------------------------------------------------------------------------------------------------------ */}



          <div className="tab-pane fade" id="nav-expect" role="tabpanel" aria-labelledby="nav-expect-tab">
            <h2>Tummy Tuck Procedure Explained </h2>
            <p>A tummy tuck, or abdominoplasty, is a transformative surgical journey that reshapes and contours the abdominal area. This comprehensive procedure involves the precise removal of excess skin, followed by the meticulous tightening and repair of weakened abdominal muscles, ultimately sculpting a smoother, more toned midsection.</p>
            <br />
            <h3><FontAwesomeIcon icon={faCheck} className='mark' />  Consultation:</h3>
            <p>During the initial consultation, our experienced cosmetic surgeon in Los Angeles and Beverly Hills will take the time to understand your unique goals and concerns. This involves:</p>
            <ul>
              <li>Evaluating your medical history and overall health</li>
              <li>Discussing your desired outcomes for the tummy tuck procedure</li>
              <li>Explaining the details of the surgery, including potential risks and benefits</li>
              <li>Taking photographs for documentation and surgical planning</li>
              <li>Setting realistic expectations regarding the anticipated results</li>
            </ul>
            <h3><FontAwesomeIcon icon={faCheck} className='mark' />  Preoperative Preparation: </h3>
            <p>Getting ready for your tummy tuck involves following specific instructions to ensure a safe and successful procedure. These may include:</p>
            <ul>
              <li><strong>Obtaining medical clearance: </strong> Doctor will ensure you are healthy enough for surgery.</li>
              <li><strong>Nutritional restrictions: </strong> Adjustments to your diet may be recommended in the weeks leading up to the procedure.</li>
              <li><strong>Smoking cessation: </strong>  Quitting smoking for a set period is crucial, as it can impede the healing process.</li>
              <li><strong>Avoiding certain medications: </strong> Certain medications, including blood thinners and herbal supplements, may need to be avoided prior to surgery.</li>
            </ul>
            <br />
            <h3><FontAwesomeIcon icon={faCheck} className='mark' />  The Procedure:</h3>
            <ul>
              <li><strong>Anesthesia:  </strong>A tummy tuck is usually performed under general anesthesia, but in rare cases, local/regional anesthesia might be an option for very selective patients.</li>
              <li><strong>Incision: </strong> The location and type of incision will depend on the specific type of tummy tuck being performed.</li>
              <li><strong>Liposuction (Optional): </strong> In some cases, liposuction may be performed simultaneously to remove excess fat.</li>
              <li><strong>Muscle Repair: </strong> Weakened or separated abdominal muscles are tightened and repaired for improved core support.</li>
              <li><strong>	Skin Tightening: </strong> Excess skin is removed, and sometimes additional skin tightening procedures might be used.</li>
              <li><strong>Incision Closure: </strong> The incisions are closed with absorbable sutures (dissolve on their own over ti</li>
            </ul>
            <br />
            <h3><FontAwesomeIcon icon={faCheck} className='mark' />  Recovery:</h3>
            <p>Following surgery, you can expect:</p>
            <ul>
              <li><strong>Pain: </strong> Medication will be provided to manage discomfort.</li>
              <li><strong>Swelling: </strong> This is normal and will gradually subside over time.</li>
              <li><strong>Downtime: </strong> The amount of time needed for recovery will vary depending on the individual.</li>
            </ul>
            <br />
            <h3><FontAwesomeIcon icon={faCheck} className='mark' />  Follow-up Care:</h3>
            <p>Dr. Garg will provide specific instructions for recovery, which may include:</p>
            <ul>
              <li><strong>Wearing compression garments: </strong> These garments help reduce swelling and support healing.</li>
              <li><strong>Medication adherence: </strong> It's crucial to take medications as prescribed for pain management and healing.</li>
              <li><strong>Activity restrictions: </strong> You'll likely need to avoid strenuous activity for a period to allow for proper healing.</li>
            </ul>
            <br />
            <h3><FontAwesomeIcon icon={faCheck} className='mark' />  Realistic Expectations and Risks of Tummy Tuck Procedure</h3>
            <p>Tummy tuck surgery, like any surgery, carries some potential risks. These can include infection, bleeding, seroma (fluid accumulation), scarring, and temporary numbness. It's important to understand these potential risks and weigh them against the expected benefits.</p>
            <br />
            <h3><FontAwesomeIcon icon={faCheck} className='mark' />  Realistic Expectations </h3>
            <ul>
              <li><strong>Individualized Results: </strong> The final results of a tummy tuck can vary from patient to patient, depending on factors such as the extent of the procedure, individual healing processes, and adherence to post-operative care instructions. It's essential to have realistic expectations tailored to your specific anatomy and goals.</li>
              <li><strong>Importance of Consultation: </strong> Scheduling a consultation with an experienced and qualified plastic surgeon is vital to ensure a thorough understanding of the procedure, its risks, and realistic expectations. During this consultation, our surgeon will evaluate your unique needs and concerns, and develop a customized surgical plan to achieve your desired outcomes.</li>
            </ul>
            <br />
            <h3><FontAwesomeIcon icon={faCheck} className='mark' />  Risks of Tummy Tuck </h3>
            <ul>
              <li><strong>Potential Risks:  </strong>Like any surgical procedure, tummy tuck surgery carries potential risks and complications. These may include infection, bleeding, seroma (fluid accumulation), scarring, and temporary numbness in the treated area. However, experienced plastic surgeons take precautions to minimize these risks and provide guidance on how to reduce the risk of complications.</li>
              <li><strong>Scarring: </strong> While every effort is made to conceal incisions within natural body contours, some degree of scarring is inevitable. Your surgeon will discuss scar management techniques to help promote optimal healing and minimize the appearance of scars.</li>
              <li><strong>	Anesthesia Risks: </strong> As with any surgery involving anesthesia, there are potential risks associated with the administration of general anesthesia. Your anesthesiologist will thoroughly evaluate your medical history and take necessary precautions to ensure your safety during the procedure.</li>
              <li><strong>Surgical Risks: </strong> As with any invasive surgical procedure, there are inherent risks associated with tummy tuck surgery, such as bleeding, blood clots, and potential damage to surrounding structures. Your surgeon will explain these risks in detail and take appropriate measures to mitigate t</li>
            </ul>
            <br />
            <h2>Life After Tummy Tuck Surgery </h2>
            <p>The journey to a smoother, more toned midsection doesn't end with the tummy tuck procedure itself. The recovery process is an integral part of achieving your desired results and embracing your newfound confidence.</p>
            <br />
            <h3><FontAwesomeIcon icon={faCheck} className='mark' />  Tummy Tuck Recovery Timeline:</h3>
            <p>While the recovery experience can vary for each individual, patients can expect a gradual healing process. In the initial 7-10 days following the surgery, some degree of discomfort and pain is normal, which can be managed with prescribed medication. Over the subsequent few weeks, residual soreness may persist, but the body will continue to heal and recover.</p>
            <p>The full recovery process typically spans several months, during which time the swelling will subside, and the final contours will become more apparent. Patience and adherence to your surgeon's post-operative instructions are crucial during this transformative period.</p>
            <br />
            <h3><FontAwesomeIcon icon={faCheck} className='mark' />  Lifestyle Adjustments for Optimal Healing:</h3>
            <p>To support the healing process and protect the surgical results, certain lifestyle adjustments are necessary. Patients are advised to avoid strenuous physical activities, including lifting heavy objects, for a period specified by their surgeon. Additionally, wearing compression garments as directed can aid in minimizing swelling and promoting proper healing.</p>
            <br />
            <h3><FontAwesomeIcon icon={faCheck} className='mark' />  Maintaining Long-Lasting Results:</h3>
            <p>While a tummy tuck can provide a significant enhancement to your abdominal contours, maintaining the results requires a commitment to a healthy lifestyle. Adopting a balanced diet, engaging in regular exercise, and maintaining a stable weight will help ensure the longevity of your aesthetic enhancements. By prioritizing your well-being, you can continue to enjoy the benefits of your tummy tuck for years to come.</p>
            <p>Remember, the journey to a more confident and youthful you is a process, and our dedicated team will be by your side every step of the way. With proper care and patience, the rewards of your tummy tuck transformation will be well worth the investment in yourself.</p>
          </div>

          <div className="tab-pane fade nav-faq " id="nav-faq" role="tabpanel" aria-labelledby="nav-faq-tab">
            <h2>Tummy Tuck: Frequently Asked Questions (FAQs)</h2>
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
            <p>We will provide the information and various sources to help you arrange your finances for the procedure. Here are some options for you - </p>
            <ul>
              <li>We are very transparent about our costing structure. At the time of the consultation, we will share the details of the costs involved.</li>
              <li>Financing options like third parties financing will be discussed at the time of the consultation as well.</li>
            </ul>
            <br />
            <p><i>Tummy tuck surgery is generally considered an elective procedure and typically not covered by insurance.</i> However, there may be exceptions for medically necessary cases. These exceptions might include situations where excess skin removal is required after massive weight loss, or if the patient experiences chronic, debilitating pain or persistent rashes due to excess abdominal skin. </p>
            <br />
            <p><i> If you believe your situation might qualify for insurance coverage, we recommend contacting your insurance provider directly to verify your specific plan's coverage details and any requirements for pre-approval, such as a doctor's note outlining medical necessity.
            </i></p>

            <h2>Schedule Your Free Tummy Tuck Consultation Today! </h2>
            <p><strong>Ready to achieve a flatter, more toned midsection? </strong> Take the first step with a Free Tummy Tuck Consultation at Dr. Garg's office. </p>
            <p>During your consultation, Dr. Garg will:</p>
            <ul>
              <li>Discuss your goals for your tummy tuck.</li>
              <li>Assess your candidacy for the procedure.</li>
              <li>Recommend the best approach to achieve your desired results.</li>
            </ul>
            <p><strong>Don't wait to transform your confidence. </strong> <i>Schedule your free consultation today and see if a tummy tuck is right for you!</i></p>
          </div>
        </div>
      </div>
      <Board />
      <TestMoni />
    </>

  );
}
