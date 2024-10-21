import React, { useState } from 'react';
import '../css/faq.css';
import '../css/Pages.css';
import '../css/contact.css';


import Banner from '../img/patients-review/Faq1.jpg';
import faqGif from '../img/home/faq_gif.mp4'

export default function MainFaq() {
    const [activeAccordion1, setActiveAccordion1] = useState(null);
    const [activeAccordion2, setActiveAccordion2] = useState(null);
    const [activeAccordion3, setActiveAccordion3] = useState(null);
    const [activeAccordion4, setActiveAccordion4] = useState(null);
    const [activeAccordion5, setActiveAccordion5] = useState(null);
    const [activeAccordion6, setActiveAccordion6] = useState(null);
    const [activeAccordion7, setActiveAccordion7] = useState(null);
    const [activeAccordion8, setActiveAccordion8] = useState(null);
    const [activeAccordion9, setActiveAccordion9] = useState(null);
    const [activeAccordion11, setActiveAccordion11] = useState(null);
    const [activeAccordion12, setActiveAccordion12] = useState(null);
    const [activeAccordion13, setActiveAccordion13] = useState(null);
    const [activeAccordion14, setActiveAccordion14] = useState(null);
    const [activeAccordion15, setActiveAccordion15] = useState(null);
    const [activeAccordion16, setActiveAccordion16] = useState(null);
    const [activeAccordion17, setActiveAccordion17] = useState(null);
    const [activeAccordion18, setActiveAccordion18] = useState(null);
    const [activeAccordion19, setActiveAccordion19] = useState(null);
    const [activeAccordion20, setActiveAccordion20] = useState(null);
    const [activeAccordion21, setActiveAccordion21] = useState(null);
    const [activeAccordion22, setActiveAccordion22] = useState(null);
    const [activeAccordion23, setActiveAccordion23] = useState(null);
    const [activeAccordion24, setActiveAccordion24] = useState(null);
    const [activeAccordion25, setActiveAccordion25] = useState(null);
    const [activeAccordion26, setActiveAccordion26] = useState(null);
    const [activeAccordion27, setActiveAccordion27] = useState(null);

    const data1 = [
        {
            question: "What is the difference between traditional liposuction and Lipo 360? ",
            answer: "Traditional liposuction typically focuses on one specific area of the body, whereas Lipo 360 targets multiple regions around the midsection, such as the upper and lower abdominals, flanks, and lower and mid back. This comprehensive approach provides a more balanced and contoured appearance."
        },
        {

            question: "Am I a good candidate for Lipo 360?",
            answer: "Ideal candidates for Lipo 360 are individuals in good overall health, stable body weight, and realistic expectations about the procedure’s outcomes. It is essential to consult with a qualified Cosmetic surgeon to determine if Lipo 360 is the best option for you."
        },
        {

            question: "How long does the Lipo 360 procedure take? ",
            answer: "The duration of the Lipo 360 procedure can vary depending on the extent of the treatment, but it typically takes 2 to 4 hours to complete."
        },
        {

            question: "What is the recovery time for Lipo 360?",
            answer: "Recovery time varies from person to person, but most patients can expect to return to work and light daily activities within 1 to 2 weeks after the procedure. Full recovery and resuming strenuous activities can take up to 6 weeks."
        },
        {

            question: "Are the results of Lipo 360 permanent?",
            answer: "The fat cells removed during Lipo 360 are permanently eliminated. However, maintaining a healthy lifestyle with a balanced diet and regular exercise is essential to preserve the results, as remaining fat cells can still enlarge with weight gain."
        },
        {

            question: "What are the potential risks and complications of Lipo 360?",
            answer: "As with any surgical procedure, Lipo 360 carries some risks, including infection, bleeding, skin sensation changes, skin contour irregularities, and anesthesia-related complications. Discuss these risks with your surgeon during the consultation to ensure you understand the procedure thoroughly."
        },
        {

            question: "How much does Lipo 360 cost?",
            answer: "The cost of Lipo 360 varies depending on factors such as geographical location, the surgeon’s expertise, and the extent of the treatment. It is best to consult with a Cosmetic surgeon for a personalized estimate."
        },
        {

            question: "What is the recovery time for Lipo 360?",
            answer: "Lipo 360 is typically considered a cosmetic procedure, which means most insurance providers do not cover it. It is essential to check with your insurance provider and discuss payment options with your surgeon."
        },
        {

            question: "Can Lipo 360 be combined with other procedures?",
            answer: "Lipo 360 can be combined with other cosmetic procedures, such as a tummy tuck or Brazilian butt lift, to achieve a more comprehensive body transformation."
        },
        {

            question: "How do I choose the right surgeon for my Lipo 360 procedure?",
            answer: "When choosing a surgeon for Lipo 360, it is essential to research their qualifications, experience, and results with similar procedures. Look for board-certified Cosmetic surgeons with positive reviews and before-and-after photos to ensure you find the right fit"
        }
    ];



    const data2 = [
        {
            question: "What is a Mommy Makeover? ",
            answer: "A Mommy Makeover is a comprehensive suite of cosmetic procedures designed to help women regain their pre-pregnancy body shape. It usually includes treatments such as a tummy tuck, breast augmentation or lift, and liposuction."
        },
        {
            question: "Who is an ideal candidate for a Mommy Makeover?",
            answer: "The perfect candidate for a Mommy Makeover is a woman who has undergone physical changes due to pregnancy and childbirth and wants to restore her pre-pregnancy figure. She should have good overall health and realistic expectations about the outcomes."
        },
        {
            question: "How soon after childbirth can I get a Mommy Makeover? ",
            answer: "It’s recommended to wait at least six months after delivery or after you’ve stopped breastfeeding. This gives your body adequate time to recover from the stresses of pregnancy and childbirth."
        },
        {

            question: "What is the recovery time for a Mommy Makeover?",
            answer: "The recovery time varies based on the individual and the specific procedures performed, but typically, it may take several weeks to a few months."
        },
        {

            question: "Are the results of a Mommy Makeover permanent?",
            answer: "While the results of a Mommy Makeover can be long-lasting, factors such as aging, weight fluctuations, and subsequent pregnancies can affect the longevity of the results."
        },
        {

            question: "Is it safe to have multiple procedures at once?",
            answer: "Yes, it is generally safe to have multiple procedures simultaneously, provided they are performed by a skilled and experienced professional. However, it may increase recovery time."
        },
        {

            question: "Will there be scarring after a Mommy Makeover?",
            answer: "Any surgical procedure is likely to leave some form of scarring. However, experienced surgeons use techniques to minimize and strategically place these scars where they can be easily concealed."
        },
        {

            question: "What are the risks associated with a Mommy Makeover?",
            answer: "As with any surgical procedure, a Mommy Makeover carries risks such as infection, bleeding, and reactions to anesthesia. It’s essential to discuss these risks with your healthcare provider."
        },
        {

            question: "How much does a Mommy Makeover cost?",
            answer: "The cost of a Mommy Makeover varies widely based on the specific procedures chosen and the geographic location. It’s best to consult with a professional for an accurate quote."
        },
        {

            question: "Can I get a Mommy Makeover if I plan to have more children?",
            answer: "While having more children after a Mommy Makeover is possible, future pregnancies may alter the results. It’s generally recommended to consider a Mommy Makeover once you’ve finished having children."
        }
    ]


    const data3 = [
        {

            question: "What are the leading causes of back and bra fat? ",
            answer: "Back and bra fat can be caused by a combination of factors, such as genetics, hormones, age, and lifestyle choices. Some people are more prone to accumulating fat in these areas due to their genetic makeup. Hormonal changes, especially during menopause, can also lead to fat deposits in the upper and middle back. Sedentary lifestyles, poor diet, and lack of exercise also contribute to the development of back and bra fat."
        },
        {

            question: "How can I reduce back and bra fat through exercise?",
            answer: "Incorporating targeted exercises into your fitness routine can help tone and strengthen the muscles in your back, making the area look leaner. Some practical activities for reducing back and bra fat include push-ups, pull-ups, seated rows, bent-over rows, and reverse flies. In addition to these exercises, engaging in regular cardiovascular activities, such as running, swimming, or cycling, is essential to promote overall fat loss."
        },
        {

            question: "Can changing my diet help reduce back and bra fat?",
            answer: "Yes, a balanced and healthy diet can contribute to fat loss in general, including back and bra fat. Focus on consuming whole foods rich in nutrients, such as lean proteins, whole grains, fruits, and vegetables. Avoid processed foods, sugary snacks, and excessive consumption of unhealthy fats. Drinking plenty of water and controlling portion sizes will also help manage your weight and reduce fat deposits."
        },
        {

            question: "Does wearing the right bra helps minimize the appearance of back and bra fat?",
            answer: "Wearing a well-fitted and supportive bra can help smooth out the back and bra fat appearance. Look for bras with comfortable straps and a wide back band that provides adequate support without digging into your skin. Ensure the bra cup size is correct to avoid unnecessary bulging or squeezing."
        },
        {

            question: "Are there any non-invasive treatments to reduce back and bra fat?",
            answer: "Yes, non-invasive treatments like cryo-lipolysis (fat freezing) and radiofrequency devices can help to reduce fat deposits in the back and bra area. These treatments work by targeting and destroying fat cells, which are then naturally eliminated by the body. However, these treatments may require multiple sessions, and individual results may vary."
        },
        {

            question: "What is liposuction, and how does it help with back and bra fat?",
            answer: "Liposuction is a surgical procedure that removes excess fat deposits from specific body areas, including the back and bra area. A small cannula is inserted through tiny incisions to break up and remove fat cells, resulting in a slimmer and more contoured appearance. Liposuction can provide more immediate and dramatic results compared to non-invasive treatments."
        },
        {

            question: "Is liposuction a permanent solution for back and bra fat?",
            answer: "While liposuction removes fat cells from the treated area, it is not a guarantee against future weight gain. Maintaining a healthy lifestyle, including regular exercise and a balanced diet, is essential to maintain liposuction results. Fat cells may accumulate in other areas of the body if weight gain occurs after the procedure."
        },
        {

            question: "What is the recovery time for liposuction?",
            answer: "Recovery time after liposuction can vary between individuals and depends on factors such as the amount of fat removed and the technique used. Generally, most people can return to work and daily activities within one to two weeks. Following your surgeon’s post-operative instructions is essential to ensure a smooth recovery and minimize potential complications."
        },
        {

            question: "Are there any risks or side effects associated with liposuction?",
            answer: "Liposuction carries risks and potential side effects, as with any surgical procedure. These may include bruising, swelling, infection, scarring, and changes in skin sensation. More severe complications, such as blood clots, anesthesia risks, or damage to surrounding tissues, may occur in rare cases. Choosing a qualified and experienced surgeon to minimize these risks and ensure the best possible outcome is crucial."
        },
        {

            question: "How do I choose the right surgeon for my Lipo 360 procedure?",
            answer: "The cost of liposuction for back and bra fat can vary depending on factors such as the geographic location, the surgeon’s experience, the extent of the procedure, and any additional treatments that may be performed simultaneously. Generally, liposuction costs can range from a few thousand dollars to over $10,000. It is important to note that most insurance companies do not cover liposuction, a cosmetic procedure."
        }
    ]


    const data4 = [


        {

            question: "What is a Brazilian Butt Lift, and how is it different from a traditional butt lift?",
            answer: "A Brazilian Butt Lift involves removing fat from other body areas, such as the hips, abdomen, and thighs, and injecting it into the buttocks to enhance their shape and size. In contrast, a traditional butt lift involves removing excess skin and tissue to lift and reshape the buttocks."
        },
        {

            question: " How long does a Brazilian Butt Lift procedure take?",
            answer: "The duration of a Brazilian Butt Lift procedure can vary, depending on the extent of the surgery and the amount of fat that needs to be transferred. Typically, it takes around 2-3 hours to complete the surgery."
        },
        {

            question: "What is the recovery time for a Brazilian Butt Lift?",
            answer: "The recovery time for a Brazilian Butt Lift can vary, but most patients can resume their daily activities within 1-2 weeks. However, it may take 6-8 weeks to recover and return to strenuous activities fully."
        },
        {

            question: "Are there any risks associated with a Brazilian Butt Lift?",
            answer: "Like any surgery, some risks are associated with a Brazilian Butt Lift. These include infection, bleeding, scarring, and changes in skin sensation. However, you can minimize these risks by choosing a qualified and experienced surgeon."
        },
        {

            question: "Is a Brazilian Butt Lift painful?",
            answer: "You will be under anesthesia during the surgery so you won’t feel any pain. However, you may experience some discomfort and soreness in the days following the procedure. Your surgeon will prescribe medication to manage any pain or discomfort."
        },
        {

            question: " How long do the results of a Brazilian Butt Lift last?",
            answer: "The results of a Brazilian Butt Lift can be long-lasting, but they can vary from person to person. Maintaining a healthy lifestyle, including a balanced diet and regular exercise, helps prolong the results."
        },
        {

            question: "Can I sit or lie down after a Brazilian Butt Lift?",
            answer: "After a Brazilian Butt Lift, you must avoid sitting or lying down directly on your buttocks for at least two weeks. Your surgeon will provide specific instructions on how to sit or lie down without putting pressure on your buttocks."
        },
        {

            question: "What kind of anesthesia is used for a Brazilian Butt Lift?",
            answer: " A Brazilian Butt Lift is usually performed under general anesthesia, meaning you will fall asleep during the surgery."
        },
        {

            question: "Who is a good candidate for a Brazilian Butt Lift?",
            answer: "A good candidate for a Brazilian Butt Lift is someone who is in good health, has enough fat in other areas of the body to be transferred to the buttocks, and has realistic expectations about the outcome of the surgery."
        },
        {

            question: "How much does a Brazilian Butt Lift cost?",
            answer: "The cost of a Brazilian Butt Lift can vary depending on several factors, including the extent of the surgery, the surgeon’s experience, and the facility’s location. Discussing the cost with your surgeon during your initial consultation is essential."
        }
    ]


    const data5 = [


        {

            question: "What is breast augmentation?",
            answer: "Breast augmentation is a surgical procedure that involves inserting breast implants or transferring fat from other parts of the body to enhance the breasts’ size, shape, and symmetry."
        },
        {

            question: "How long does the breast augmentation surgery take?",
            answer: "The duration of breast augmentation surgery varies depending on the technique used and the extent of the procedure. Typically, it takes 1-2 hours to complete."
        },
        {

            question: "Is breast augmentation painful?",
            answer: "There may be some discomfort and pain after breast augmentation surgery, but it can be managed with pain medications prescribed by your surgeon."
        },
        {

            question: "What type of anesthesia is used for breast augmentation surgery?",
            answer: "Breast augmentation surgery is usually performed under general anesthesia, which means you will be asleep during the procedure."
        },
        {

            question: "What are the risks of breast augmentation surgery?",
            answer: "Like any surgical procedure, breast augmentation carries some risks, such as infection, bleeding, implant rupture, and changes in nipple or breast sensation."
        },
        {

            question: " How long do breast implants last?",
            answer: "The lifespan of breast implants varies depending on the type of implant and the individual patient. Generally, breast implants can last 10 to 20 years or longer."
        },
        {

            question: "Can breast augmentation correct asymmetrical breasts?",
            answer: "Yes, breast augmentation can help correct asymmetrical breasts by enhancing the size and shape of one or both breasts."
        },
        {

            question: "Can breast augmentation be combined with other procedures?",
            answer: " Yes, breast augmentation can be combined with other cosmetic procedures such as breast lift, tummy tuck, or liposuction to achieve a more comprehensive body transformation."
        },
        {

            question: "Who is a good candidate for breast augmentation?",
            answer: "Good candidates for breast augmentation are women who are in good health, have realistic expectations, and are unhappy with the size or shape of their breasts. It is essential to discuss your goals and concerns with your surgeon to determine if breast augmentation is the right option for you."
        },
        {

            question: "How long does it take to recover from breast augmentation surgery?",
            answer: "Recovery time after breast augmentation surgery varies depending on the individual patient and the extent of the procedure. Most patients can resume normal activities within a week or two, but strenuous activities should be avoided for several weeks."
        }
    ]



    const data6 = [

        {

            question: "What is a breast lift?",
            answer: "A breast lift, also known as mastopexy, is a surgical procedure that lifts and reshapes sagging or drooping breasts to create a more youthful and attractive appearance."
        },
        {

            question: "Who is a good candidate for a breast lift?",
            answer: "Good candidates for breast lift surgery are women who are generally in good health, have realistic expectations for the procedure’s outcome, and are unhappy with the appearance of their sagging or drooping breasts."
        },
        {

            question: "How long does a breast lift procedure take?",
            answer: "The length of a breast lift procedure depends on the extent of the surgery and the technique used but it typically takes around 2-3 hours."
        },
        {

            question: "What is the recovery time for breast lift surgery?",
            answer: "Recovery time for breast lift surgery varies depending on the individual and the extent of the surgery, but most patients can return to normal activities within 1-2 weeks."
        },
        {

            question: "Will I have scars after a breast lift procedure?",
            answer: "Like any surgical procedure, breast augmentation carries some risks, such as infection, bleeding, implant rupture, and changes in nipple or breast sensation."
        },
        {

            question: "Can a breast lift be combined with other procedures?",
            answer: "Yes, a breast lift can be combined with other procedures, such as breast augmentation or reduction, depending on the individual’s needs and goals"
        },
        {

            question: "How long do the results of a breast lift procedure last?",
            answer: "The results of a breast lift procedure can be long-lasting, but factors such as aging, weight fluctuations, and pregnancy can affect the appearance of the breasts over time."
        },
        {

            question: "Is breast lift surgery painful?",
            answer: " Patients can expect some discomfort and soreness after breast lift surgery, but this can be managed with pain medication prescribed by our surgeons."
        },
        {

            question: "Are there any risks or complications associated with breast lift surgery?",
            answer: "Like any surgery, breast lift surgery carries some risks and potential complications, but our surgeons take every precaution to minimize these risks and ensure a safe and successful outcome."
        },
        {

            question: "Will I need to stay overnight in the hospital after a breast lift procedure?",
            answer: "Most breast lift procedures are performed on an outpatient basis, so patients can typically return home the same day."
        }
    ]


    const data7 = [


        {

            question: "What is breast reduction surgery?",
            answer: "It is a procedure that removes excess breast tissue and skin to reduce the size and reshape the breasts. This procedure can also alleviate physical discomfort associated with the weight and size of the breasts. "
        },
        {

            question: "Who is a good candidate for breast reduction surgery?",
            answer: "Good candidates for surgery are women who have breasts that are too large for their body, experience physical discomfort due to their breast size, and have realistic expectations about the outcome of the surgery."
        },
        {

            question: "What happens during breast reduction surgery?",
            answer: "During surgery, the surgeon will make incisions around the areola and down to the breast crease. They will then remove excess breast tissue and skin and reposition the nipple and areola to a higher position on the breast."
        },
        {

            question: "What is the recovery process like after breast reduction surgery?",
            answer: "The recovery process after surgery can take several weeks. Patients may experience bruising, swelling, and discomfort during this time. Following your surgeon’s post-operative instructions is essential to ensure a smooth recovery."
        },
        {

            question: "Will breast reduction surgery leave scars?",
            answer: "It will leave scars, but the incisions are usually well-hidden under clothing and will fade over time."
        },
        {

            question: "Will breast reduction surgery affect my ability to breastfeed?",
            answer: "It can potentially affect a woman’s ability to breastfeed. However, many women are still able to breastfeed successfully after the procedure."
        },
        {

            question: "How long does breast reduction surgery take?         ",
            answer: "The length of surgery will depend on the individual case, but the procedure typically takes 2-4 hours to complete."
        },
        {

            question: "Are there any risks associated with breast reduction surgery?",
            answer: " As with any surgical procedure, there are risks associated with surgery, including bleeding, infection, scarring, and changes in nipple sensation. "
        },
        {

            question: "Will insurance cover the cost of breast reduction surgery?",
            answer: "In some cases, insurance may cover the cost of surgery if it is deemed medically necessary. However, checking with your insurance provider to see if they cover the procedure is essential."
        },
        {

            question: "How long will the results of breast reduction surgery last?",
            answer: "The results of surgery are long-lasting, but factors such as weight gain, pregnancy, and aging can affect the size and shape of the breasts over time."
        }
    ]


    const data8 = [


        {

            question: "What is breast revision surgery?       ",
            answer: "Breast revision surgery is a procedure that is performed to correct any complications or dissatisfaction resulting from a previous breast enhancement surgery. This surgery may involve removing or replacing breast implants or addressing asymmetry or capsular contracture. "
        },
        {

            question: "Who is a good candidate for breast revision surgery?",
            answer: "Women who have had previous breast enhancement surgery and are experiencing issues such as implant rupture, capsular contracture, or dissatisfaction with the size or shape of their breasts may be good candidates for breast revision surgery."
        },
        {

            question: "What can I expect during breast revision surgery?        ",
            answer: "During the breast revision surgery, the surgeon will address the specific concerns you discussed during your consultation. This may involve removing or replacing implants, adjusting the placement of the implants, or correcting any asymmetry. The surgery is typically performed under general anesthesia and may take several hours to complete. "
        },
        {

            question: "What is the recovery time for breast revision surgery?",
            answer: "The recovery time for breast revision surgery may vary depending on the specific procedures performed. However, most patients can expect to take one to two weeks off work and avoid strenuous physical activity for several weeks after surgery."
        },
        {

            question: "What are the risks associated with breast revision surgery?       ",
            answer: "As with any surgical procedure, there are risks associated with breast revision surgery. These risks may include infection, bleeding, scarring, and changes in nipple or breast sensation. Your surgeon will discuss these risks with you during your consultation.  "
        },
        {

            question: "How long do breast implants typically last?   ",
            answer: "Breast implants are not designed to last a lifetime and may need to be replaced at some point. The lifespan of breast implants can vary depending on the type of implant and the individual patient."
        },
        {

            question: "What is capsular contracture? ",
            answer: "Capsular contracture is a complication that can occur after breast augmentation surgery. It occurs when scar tissue forms around the breast implant and tightens, causing the breast to feel stiff and distorted.  "
        },
        {

            question: "Can breast revision surgery fix capsular contracture?  ",
            answer: "Yes, breast revision surgery can be used to address capsular contracture. The surgeon may remove the scar tissue or replace the implant to correct the issue.  "
        },
        {

            question: "Will breast revision surgery leave visible scars?",
            answer: "Breast revision surgery may leave some visible scars, but the extent of scarring will depend on the specific procedures performed. Your surgeon will work to minimize scarring and will provide you with aftercare instructions to promote optimal healing."
        },
        {

            question: "How do I choose a plastic surgeon for breast revision surgery?",
            answer: "When choosing a plastic surgeon for breast revision surgery, it is essential to do your research and choose a board-certified surgeon with experience performing breast revision surgery. You should also schedule a consultation to discuss your goals and ensure you feel comfortable with the surgeon’s approach and communication style."
        }
    ]



    const data9 = [


        {

            question: "What is a tummy tuck?",
            answer: "A tummy tuck, or abdominoplasty, is a surgical procedure that removes excess fat and loose skin from the abdominal area and tightens the underlying muscles. The goal is to create a smoother, flatter, and more toned abdominal contour. Different tummy tucks, including full, mini, and Avelar abdominoplasty, cater to specific patient needs."
        },
        {

            question: "How much does a tummy tuck cost?",
            answer: "The cost of a tummy tuck can vary depending on several factors, such as the surgeon’s experience, the type of procedure, and the geographical location. On average, tummy tuck costs range from $5,000 to $15,000. Consult with your surgeon to get an accurate estimate for your specific case. "
        },
        {

            question: "What is the recovery time for a tummy tuck?",
            answer: "Recovery time for a tummy tuck varies depending on the individual and the extent of the surgery. Most patients can return to work within two to four weeks, but full recovery may take six to eight weeks. Following your surgeon’s post-operative instructions is essential for optimal healing and results. "
        },
        {

            question: "Is a tummy tuck safe?",
            answer: "Tummy tuck procedures are generally safe when performed by an experienced, board-certified plastic surgeon. As with any surgery, risks are involved, such as infection, bleeding, and anesthesia complications. Discuss your medical history and concerns with your surgeon to ensure the best possible outcome."
        },
        {

            question: "Can a tummy tuck help with weight loss? ",
            answer: "A tummy tuck is not a weight loss procedure but a body contouring surgery targeting excess skin and fat in the abdominal area. It is best suited for individuals who have already achieved a stable weight through diet and exercise but have loose skin and stubborn fat deposits. "
        },
        {

            question: "Can a tummy tuck remove stretch marks? ",
            answer: "A tummy tuck may help reduce the appearance of stretch marks located on the lower abdomen, as this skin is often removed during the procedure. However, it may not eliminate all stretch marks, especially those higher on the abdomen."
        },
        {

            question: "How long do tummy tuck results last?",
            answer: "Tummy tuck results are long-lasting if you maintain a stable weight and follow a healthy lifestyle. Significant weight fluctuations and pregnancies can affect the results and require additional surgery to restore the desired appearance."
        },
        {

            question: "Can a tummy tuck be combined with other procedures?  ",
            answer: "A tummy tuck is often combined with other procedures like liposuction, breast augmentation, or a lower body lift to achieve a more comprehensive body contouring result. Discuss your goals with your surgeon to determine the best combination of procedures for you.  "
        },
        {

            question: "Will there be scars after a tummy tuck?",
            answer: "Scarring is a normal part of the healing process after a tummy tuck. The scar’s length and visibility depend on the procedure type and your body’s healing abilities. Your surgeon will place the incisions in inconspicuous locations, and with proper care, scars generally fade and become less noticeable over time."
        },
        {

            question: "Am I a good candidate for a tummy tuck?",
            answer: "Ideal candidates for a tummy tuck are healthy, non-smoking individuals with realistic expectations about the procedure’s outcomes. They should be close to their ideal weight with stable weight history and have excess skin, fat, or weakened abdominal muscles that cannot be addressed through diet and exercise alone. It’s best to consult a board-certified plastic surgeon to determine if a tummy tuck is right for you."
        }
    ]


    const data11 = [


        {

            question: "What is liposuction?",
            answer: "Liposuction is a cosmetic procedure that involves using a suction technique to remove excess fat from specific body areas, such as the hips, thighs, and stomach. The procedure can help reshape and contour the body and is commonly used to achieve a more defined silhouette."
        },
        {

            question: "What are the benefits of liposuction?",
            answer: "The benefits of liposuction include a reduction in stubborn fat deposits that may not respond to diet and exercise, improved body contour and shape, and a boost in self-confidence. The procedure is also minimally invasive and has a relatively short recovery time compared to other surgical procedures.   "
        },
        {

            question: "Is liposuction safe?",
            answer: "Liposuction is generally considered safe when performed by a qualified and experienced surgeon. However, as with any surgical procedure, risks include infection, bleeding, and anesthesia-related complications. It’s important to discuss the risks and benefits of the procedure with your surgeon before deciding."
        },
        {

            question: "What is the difference between liposuction and a thigh lift?",
            answer: "Liposuction is a procedure that removes excess fat from specific areas of the body, while a thigh lift involves removing excess skin and tissue from the thigh area. Thigh lifts are typically recommended for patients who have lost significant weight or have excess skin due to aging or genetics."
        },
        {

            question: "Can liposuction be used to treat cellulite?",
            answer: "Liposuction is not typically recommended for treating cellulite, as it primarily targets excess fat deposits rather than the dimpled appearance associated with cellulite. Other non-surgical treatments available may be more effective for treating cellulite, such as radiofrequency, laser, or ultrasound therapies."
        },
        {

            question: "Is there a minimum age requirement for liposuction?",
            answer: "There is no minimum age requirement for liposuction, but it is generally recommended for patients who have reached their ideal weight and have maintained a stable weight for at least six months. It’s also essential for patients to have realistic expectations and understand that liposuction is not a substitute for a healthy diet and regular exercise."
        },
        {

            question: "What is the recovery time for liposuction?",
            answer: "The recovery time for liposuction varies depending on the extent of the procedure and the patient’s individual healing process. In general, patients can expect to experience some swelling and bruising for several days after the procedure, and may need to take a few days off work to rest and recover. Most patients can resume normal activities within a week or two of the procedure."
        },
        {

            question: "Will the results of liposuction be permanent?",
            answer: "Liposuction results can be long-lasting, but it’s essential to maintain a healthy diet and exercise routine to prevent the recurrence of excess fat deposits. Weight gain after the procedure can also affect the results of the procedure"
        },
        {

            question: "What can I expect during a thigh lift procedure?",
            answer: "Excess skin and tissue will be removed from the thigh area during a thigh lift procedure to create a more toned and contoured appearance. The procedure typically takes a few hours and is performed under general anesthesia. Patients can expect some swelling, bruising, and discomfort after the procedure and must wear compression garments to aid in the healing process."
        },
        {

            question: "How long will the results of a thigh lift last?",
            answer: "The results of a thigh lift can be long-lasting, but it’s essential to maintain a healthy lifestyle to prevent the recurrence of excess skin and tissue. Factors such as aging, weight gain, and genetics can also affect the longevity of the results. Your surgeon can provide more information about what to expect regarding long-term results."
        }
    ]


    const data12 = [


        {

            question: "What is buccal fat removal?",
            answer: "Buccal fat removal is a cosmetic procedure involving excess fat from the cheeks to create a more contoured facial appearance."
        },
        {

            question: "How is buccal fat removal performed?",
            answer: "Buccal fat removal is typically performed under local anesthesia and involves making small incisions inside the mouth to access the buccal fat pads. The fat is then carefully removed to create a more defined facial structure."
        },
        {

            question: "Who is a good candidate for buccal fat removal?",
            answer: "Good candidates for buccal fat removal include individuals who have a round or chubby face and are looking to achieve a more contoured and defined facial appearance."
        },
        {

            question: "What is the recovery process like after buccal fat removal?",
            answer: "Recovery time varies from person to person, but most patients can expect to experience some swelling and bruising for the first few days after the procedure. Following your surgeon’s post-operative instructions is essential to ensure proper healing and recovery."
        },
        {

            question: "Are there any risks or complications associated with buccal fat removal?",
            answer: "As with any surgical procedure, there are risks and potential complications related to buccal fat removal, such as infection, bleeding, and nerve damage. However, these risks can be minimized by choosing a qualified and experienced plastic surgeon."
        },
        {

            question: "How long do the results of buccal fat removal last?",
            answer: "The results of buccal fat removal are generally permanent as long as a healthy diet and exercise routine are maintained."
        },
        {

            question: "Can buccal fat removal be combined with other procedures?",
            answer: "Yes, buccal fat removal can be combined with other cosmetic procedures such as facelifts, neck lifts, and chin implants to achieve a more comprehensive facial rejuvenation."
        },
        {

            question: " Is there any scarring after buccal fat removal?",
            answer: "No, there is typically no scarring after buccal fat removal as the incisions are made inside the mouth."
        },
        {

            question: "How much does buccal fat removal cost?",
            answer: "The cost of buccal fat removal varies depending on several factors, such as the surgeon’s experience and location. Discussing the cost and financing options with your surgeon during your consultation is essential.    "
        },
        {

            question: "How do I choose the right plastic surgeon for my buccal fat removal procedure?",
            answer: "When choosing a plastic surgeon for your buccal fat removal procedure, it is essential to look for a board-certified and experienced surgeon with a proven track record of success. You should also schedule a consultation to discuss your goals and concerns with the surgeon to ensure you feel comfortable and confident with their approach."
        }
    ]




    //Neck and chin liposuction FAQs?

    const data13 = [


        {

            question: "What is neck and jowl liposuction?",
            answer: "Neck and jowl liposuction is a cosmetic procedure that removes excess fat from the neck and jowl area, resulting in a more defined and youthful appearance. It’s a minimally invasive alternative to a traditional facelift and is ideal for those looking to improve the neck and lower face contours.  "
        },
        {

            question: "How does neck and jowl liposuction work?",
            answer: "The procedure involves inserting a small cannula tube through tiny incisions in the skin. The cannula is connected to a vacuum device that suctions out unwanted fat cells, effectively sculpting and contouring the neck and jowl area."
        },
        {

            question: "Is neck and jowl liposuction suitable for everyone?",
            answer: "Only some people are suitable candidates for neck and jowl liposuction. Ideal candidates have good overall health, good skin elasticity, and are at or near their ideal body weight. It’s essential to consult with a qualified plastic surgeon to determine if the procedure is right for you."
        },
        {

            question: "What is the recovery time for neck and jowl liposuction?",
            answer: "Recovery time varies among individuals but generally ranges from one to two weeks. Most patients can return to work and light activities within a week, while strenuous activities should be avoided for at least two weeks.   "
        },
        {

            question: "Are there any risks or side effects associated with neck and jowl liposuction?",
            answer: "As with any surgical procedure, there are risks and potential side effects. These may include bruising, swelling, infection, scarring, and changes in skin sensation. It’s essential to discuss these risks with your surgeon during your consultation."
        },
        {

            question: "How long do the results of neck and jowl liposuction last?",
            answer: "The neck and jowl liposuction results are long-lasting, as the fat cells removed during the procedure do not grow back. However, it’s essential to maintain a healthy lifestyle and stable weight to preserve the results."
        },
        {

            question: "How much does neck and jowl liposuction cost?",
            answer: "The cost of neck and jowl liposuction varies depending on factors such as the surgeon’s experience, geographic location, and the extent of the procedure. It’s essential to obtain a personalized quote from your chosen plastic surgeon."
        },
        {

            question: "Can neck and jowl liposuction be combined with other procedures?",
            answer: "Yes, neck and jowl liposuction can be combined with other procedures, such as a facelift or chin augmentation, to enhance overall results. Discuss your desired outcome with your surgeon to determine the best combination of procedures for you."
        },
        {

            question: "How do I find a qualified surgeon for neck and jowl liposuction?",
            answer: "It’s crucial to choose a board-certified plastic surgeon with extensive experience in neck and jowl liposuction. Research online reviews, ask for recommendations, and schedule consultations to find the right surgeon."
        },
        {

            question: "What should I expect during my consultation for neck and jowl liposuction?",
            answer: "During your consultation, your surgeon will assess your medical history, discuss your goals and expectations, and examine your neck and jowl area. They will also explain the procedure, recovery process, and potential risks. This interaction is the perfect opportunity to ask any questions and address any concerns."
        }
    ]


    //Face Lift Surgery FAQs?

    const data14 = [


        {

            question: "What is a facelift?",
            answer: "A facelift is a cosmetic surgical procedure designed to address the signs of aging in the face and neck. It involves removing excess skin and tightening underlying tissues to create a more youthful, lifted appearance. "
        },
        {

            question: "Am I a good candidate for a facelift?",
            answer: "Good candidates for facelift surgery are generally healthy adults with significant signs of aging in the face and neck, such as sagging skin, jowls, and deep wrinkles. Having realistic expectations and a clear understanding of the procedure and recovery process is essential."
        },
        {

            question: "What should I expect during a facelift procedure?",
            answer: "You will be given anesthesia during a facelift procedure to ensure your comfort. Your surgeon will make incisions around your ears and possibly your hairline, then lift and reposition underlying tissues and remove excess skin. The incisions will then be closed with sutures."
        },
        {

            question: "How long does recovery take after a facelift?",
            answer: "Recovery time varies depending on the extent of the procedure and individual healing factors. Most patients can expect some swelling and bruising for several weeks and should plan to take time off work and avoid strenuous activity during the initial recovery period."
        },
        {

            question: "Are there any risks or complications associated with facelift surgery?",
            answer: "As with any surgical procedure, there are risks and potential complications associated with facelift surgery. These may include bleeding, infection, scarring, and nerve damage. Your surgeon will discuss these risks with you before the procedure."
        },
        {

            question: "Can a facelift be combined with other procedures?",
            answer: "Yes, facelift surgery can be combined with other cosmetic procedures, such as eyelid or brow lift, to achieve more comprehensive rejuvenation."
        },
        {

            question: "How long will the results of a facelift last?",
            answer: "The results of a facelift can last for several years, but the aging process will continue. Proper skincare and sun protection can help prolong the results."
        },
        {

            question: "What is a mini facelift?",
            answer: "A mini facelift is a less invasive version of a traditional facelift, typically involving shorter incisions and less extensive tissue manipulation. It is often recommended for patients with mild to moderate signs of aging. "
        },
        {

            question: "How much does a facelift cost?",
            answer: "The cost of a facelift varies depending on several factors, including the extent of the procedure and the surgeon’s experience and location. Discussing all costs with your surgeon before proceeding with the procedure is essential."
        },
        {

            question: "How do I choose the right surgeon for my facelift?",
            answer: "When selecting a surgeon for your facelift, looking for a board-certified plastic surgeon with extensive experience and a record of successful outcomes is vital. You should also schedule a consultation to discuss your goals and ensure that you feel comfortable and confident in the surgeon’s abilities."
        }
    ]


    //Blepharoplasty-eyelid lift FAQs?

    const data15 = [


        {

            question: "What is a blepharoplasty?",
            answer: "A blepharoplasty, also known as an eyelid lift, is a cosmetic procedure that involves removing excess skin and fat from the upper and/or lower eyelids. This can help reduce puffiness and sagging skin and improve vision in some cases."
        },
        {

            question: "Who is a good candidate for a blepharoplasty?",
            answer: "Good candidates for blepharoplasty are generally healthy individuals with realistic expectations for the procedure’s outcome. They may have sagging skin or puffiness around the eyes, which can be caused by aging, genetics, or other factors."
        },
        {

            question: "How is a blepharoplasty performed?",
            answer: "Blepharoplasty is typically performed on an outpatient basis under local anesthesia. The surgeon will make incisions in the eyelids’ natural creases to remove excess skin and fat. The incisions are then closed with sutures or surgical tape."
        },
        {

            question: "Is a blepharoplasty a painful procedure?",
            answer: "Most patients experience some discomfort after blepharoplasty, but this can usually be managed with pain medication prescribed by the surgeon. Some swelling and bruising are expected but will typically subside within a week or two."
        },
        {

            question: "How long does it take to recover from a blepharoplasty?",
            answer: "Recovery times can vary depending on the extent of the procedure, but most patients can return to normal activities within a week or two. Following your surgeon’s instructions for post-operative care is essential to ensure optimal healing."
        },
        {

            question: "Are there any risks associated with a blepharoplasty?",
            answer: "As with any surgical procedure, some risks are associated with a blepharoplasty, including bleeding, infection, and changes in vision. However, these risks are rare and can usually be managed with proper care."
        },
        {

            question: "Will I have visible scars after a blepharoplasty?",
            answer: "The incisions made during a blepharoplasty are typically made in the eyelids’ natural creases, which can help minimize visible scarring. Over time, any scars that do form should fade and become less noticeable."
        },
        {

            question: "Can a blepharoplasty be combined with other cosmetic procedures?",
            answer: "Yes, a blepharoplasty can be combined with other cosmetic procedures, such as a facelift or brow lift, to achieve more comprehensive results. Your surgeon can help you determine which combination of procedures will best suit your needs."
        },
        {

            question: "How long will the results of blepharoplasty last?",
            answer: "The results of a blepharoplasty can be long-lasting, but aging and other factors may eventually cause some sagging and puffiness to return. Maintaining a healthy lifestyle and following proper skin care can help prolong the procedure’s results."
        },
        {

            question: "How do I know if a blepharoplasty is right for me?",
            answer: "If you are bothered by sagging skin or puffiness around your eyes, a blepharoplasty may be a good option for you. The best way to determine if the procedure is right for you is to schedule a consultation with a qualified cosmetic surgeon. During your consultation, you can discuss your concerns and goals with the surgeon and learn more about the procedure and what you can expect from the results. The surgeon can also evaluate your overall health and assess whether you are a good candidate for the procedure. Ultimately, the decision to undergo a blepharoplasty should be based on your individual needs and goals, as well as the advice of a qualified cosmetic surgeon."
        }
    ]



    //Brow Lift FAQs?

    const data16 = [


        {
            question: "What is a brow lift?",
            answer: "A brow lift is a cosmetic procedure that involves lifting the eyebrows and smoothing out the forehead to improve the appearance of sagging or drooping eyebrows."
        },
        {
            question: "Who is a good candidate for a brow lift?",
            answer: "Good candidates for a brow lift are individuals with sagging or drooping eyebrows due to aging or other factors and are in good overall health.    "
        },
        {
            question: "How is a brow lift performed?",
            answer: "A brow lift can be performed using various techniques, including endoscopic, coronal, and temporal approaches. The chosen technique will depend on the individual’s specific needs and goals."
        },
        {
            question: "Is a brow lift a painful procedure?",
            answer: "A brow lift is typically performed under general anesthesia so patients do not feel any pain during the procedure. After the procedure, patients may experience some discomfort or mild pain, which can be managed with medication."
        },
        {
            question: "How long does it take to recover from a brow lift?",
            answer: "The recovery time for a brow lift varies depending on the individual and the chosen technique. However, most patients can return to work and normal activities within one to two weeks after the procedure."
        },
        {
            question: "Are there any risks or complications associated with a brow lift?",
            answer: "As with any surgical procedure, a brow lift has risks and potential complications. These may include infection, bleeding, scarring, and nerve damage.  "
        },
        {
            question: "Will a brow lift leave visible scars?",
            answer: "A brow lift can leave small incision scars, which are typically well hidden and fade over time."
        },
        {
            question: "How long do the results of a brow lift last?",
            answer: "The results of a brow lift can last several years, but the duration of the results varies depending on the individual and their skin elasticity."
        },
        {
            question: "Can a brow lift be combined with other procedures?",
            answer: "Yes, a brow lift can be combined with other cosmetic procedures such as eyelid surgery, facelift, or dermal fillers to achieve a more comprehensive rejuvenation."
        },
        {

            question: "How much does a brow lift cost?",
            answer: "The cost of a brow lift varies depending on the individual’s specific needs and the chosen technique. Factors such as the surgeon’s experience and location can also affect the cost."
        }
    ]


    //Skin aesthetic procedures FAQs?

    const data17 = [


        {
            question: "What is a skin aesthetic procedure?",
            answer: "A skin aesthetic procedure is a treatment that aims to improve the appearance and health of your skin. It can involve various techniques, including laser therapy, chemical peels, microdermabrasion, and injectables like Botox and dermal fillers."
        },
        {
            question: "Who can benefit from a skin aesthetic procedure?",
            answer: "GAnyone who wants to improve the appearance or health of their skin can benefit from a skin aesthetic procedure. It can address various concerns, including acne, fine lines, wrinkles, hyperpigmentation, sun damage, and uneven skin tone. "
        },
        {
            question: "Are skin aesthetic procedures safe?",
            answer: "Skin aesthetic procedures are generally safe when performed by trained and licensed professionals. However, some risks are associated with specific treatments, such as skin irritation, allergic reactions, and scarring. Discussing the potential risks and benefits of any procedure with your healthcare provider is essential."
        },
        {
            question: "How long does a skin aesthetic procedure take?",
            answer: "The length of a skin aesthetic procedure can vary depending on the treatment and the extent of the area being treated. Some treatments can be completed in as little as 30 minutes, while others may take several hours or require multiple sessions."
        },
        {

            question: "Is there any downtime after a skin aesthetic procedure?",
            answer: "The rest associated with a skin aesthetic procedure can vary depending on the treatment and the individual. Some treatments may require little to no downtime, while others may require several days or even weeks of recovery time."
        },
        {

            question: "How long do the results of a skin aesthetic procedure last?",
            answer: "The duration of the results of a skin aesthetic procedure can vary depending on the treatment and the individual. Some treatments may provide temporary results, while others may provide long-lasting or permanent results."
        },
        {

            question: "Are skin aesthetic procedures expensive?",
            answer: "The cost of a skin aesthetic procedure can vary depending on the treatment and the location. Some treatments can be relatively inexpensive, while others may be more costly. Discussing the cost of any procedure with your healthcare provider before undergoing treatment is essential."
        },
        {

            question: "How do I prepare for a skin aesthetic procedure?",
            answer: "The preparation required for a skin aesthetic procedure can vary depending on the treatment. It is essential to discuss the specific requirements with your healthcare provider. Generally, you may be advised to avoid certain medications or skincare products before the procedure."
        },
        {

            question: "How do I choose the suitable skin aesthetic procedure for me?",
            answer: "Choosing the right skin aesthetic procedure depends on your unique needs and concerns. It is essential to consult with a trained and licensed healthcare provider who can evaluate your skin and recommend the most appropriate treatment."
        },
        {

            question: "Are there any side effects associated with skin aesthetic procedures?",
            answer: "Some skin aesthetic procedures may have side effects, such as redness, swelling, bruising, or discomfort. These side effects are usually temporary and will subside within a few days. It is essential to discuss any potential side effects with your healthcare provider before undergoing treatment."
        }
    ]


    //Vaginal rejuvenation: labiaplasty FAQs?

    const data18 = [


        {

            question: "What is labiaplasty?",
            answer: "Labiaplasty is a surgical procedure that involves reshaping and reducing the size of the labia minora or majora, the folds of skin surrounding the vaginal opening."
        },
        {

            question: "Who is a good candidate for labiaplasty?",
            answer: "Women who are self-conscious about the appearance of their labia and experience discomfort during sexual or physical activity may be good candidates for labiaplasty."
        },
        {

            question: "How long does the procedure take?",
            answer: "Labiaplasty usually takes one to two hours to complete, depending on the extent of the surgery."
        },
        {

            question: "Is labiaplasty painful?",
            answer: "Labiaplasty is performed under anesthesia, so patients should not experience pain during the procedure. After the procedure, patients may experience mild to moderate discomfort, but this can be managed with pain medication."
        },
        {

            question: "What is the recovery time for labiaplasty?",
            answer: "Most patients can return to work and other normal activities within a week to ten days after the procedure. However, swelling and bruising may take several weeks to subside entirely."
        },
        {

            question: "What are the risks of labiaplasty?",
            answer: "Like any surgical procedure, labiaplasty carries some risks, including bleeding, infection, scarring, and changes in sensation. However, these risks can be minimized by choosing a qualified and experienced surgeon."
        },
        {

            question: "Will labiaplasty affect my ability to have children?",
            answer: "Labiaplasty does not generally affect a woman’s ability to have children or to deliver a baby vaginally."
        },
        {

            question: "How long do the results of labiaplasty last?",
            answer: "The labiaplasty results are typically long-lasting, although some women may experience changes in the appearance of their labia over time due to natural aging or other factors."
        },
        {

            question: "How much does labiaplasty cost?",
            answer: "The cost of labiaplasty can vary depending on the surgeon’s fees, the location of the practice, and other factors. Discussing the procedure’s cost with your surgeon before scheduling the surgery is essential."
        },
        {

            question: "What should I expect during the consultation for labiaplasty?",
            answer: "During the consultation, your surgeon will review your medical history and perform a physical examination. You will have the opportunity to discuss your goals for the procedure and ask any questions you may have about the surgery and recovery process."
        }
    ]



    const data19 = [


        {

            question: "What is labiaplasty?",
            answer: "Labiaplasty is a surgical procedure that involves reshaping and reducing the size of the labia minora or majora, the folds of skin surrounding the vaginal opening."
        },
        {

            question: "Who is a good candidate for labiaplasty?",
            answer: "Women who are self-conscious about the appearance of their labia and experience discomfort during sexual or physical activity may be good candidates for labiaplasty."
        },
        {

            question: "How long does the procedure take?",
            answer: "Labiaplasty usually takes one to two hours to complete, depending on the extent of the surgery."
        },
        {

            question: "Is labiaplasty painful?",
            answer: "Labiaplasty is performed under anesthesia, so patients should not experience pain during the procedure. After the procedure, patients may experience mild to moderate discomfort, but this can be managed with pain medication."
        },
        {

            question: "What is the recovery time for labiaplasty?",
            answer: "Most patients can return to work and other normal activities within a week to ten days after the procedure. However, swelling and bruising may take several weeks to subside entirely."
        },
        {

            question: "What are the risks of labiaplasty?",
            answer: "Like any surgical procedure, labiaplasty carries some risks, including bleeding, infection, scarring, and changes in sensation. However, these risks can be minimized by choosing a qualified and experienced surgeon."
        },
        {

            question: "Will labiaplasty affect my ability to have children?",
            answer: "Labiaplasty does not generally affect a woman’s ability to have children or to deliver a baby vaginally."
        },
        {

            question: "How long do the results of labiaplasty last?",
            answer: "The labiaplasty results are typically long-lasting, although some women may experience changes in the appearance of their labia over time due to natural aging or other factors."
        },
        {

            question: "How much does labiaplasty cost?",
            answer: "The cost of labiaplasty can vary depending on the surgeon’s fees, the location of the practice, and other factors. Discussing the procedure’s cost with your surgeon before scheduling the surgery is essential."
        },
        {

            question: "What should I expect during the consultation for labiaplasty?",
            answer: "During the consultation, your surgeon will review your medical history and perform a physical examination. You will have the opportunity to discuss your goals for the procedure and ask any questions you may have about the surgery and recovery process."
        }
    ]


    //Daddy Makeover FAQs?

    const data20 = [


        {

            question: "What is a Daddy Makeover?",
            answer: "A Daddy Makeover is a personalized wellness and aesthetic program designed for men. It typically involves non-invasive treatments, fitness advice, and nutritional guidance to address common age-related changes such as weight gain, hair loss, skin aging, and muscle loss."
        },
        {

            question: "Who is a good candidate for a Daddy Makeover?",
            answer: "Any man experiencing changes in body shape, fitness levels, skin health, or overall confidence due to aging can benefit from a Daddy Makeover. The program is personalized to fit individual needs and goals."
        },
        {

            question: "What treatments are included in a Daddy Makeover?",
            answer: "The treatments vary based on individual needs. They can include a mix of non-invasive aesthetic procedures, fitness programs, and nutritional guidance."
        },
        {

            question: "How long does it take to see results from a Daddy Makeover?",
            answer: "The timeline for seeing results can vary, but typically clients start noticing changes within a few weeks of starting the program."
        },
        {

            question: "Is the Daddy Makeover procedure safe?",
            answer: "Yes, the procedures involved in a Daddy Makeover are non-invasive and conducted by trained professionals. Safety is a top priority."
        },
        {

            question: "Are the results of a Daddy Makeover permanent?",
            answer: "While the results can be long-lasting, maintaining them requires adherence to a healthy lifestyle, including regular exercise and a balanced diet."
        },
        {
            question: "Can I combine a Daddy Makeover with other treatments?",
            answer: "Yes, the Daddy Makeover can be combined with other treatments. Your practitioner can provide personalized advice based on your health history and goals."
        },
        {

            question: "Does a Daddy Makeover help with weight loss?",
            answer: "A Daddy Makeover can include fitness and nutritional guidance, supporting weight loss and muscle gain when followed consistently."
        },
        {

            question: "How is a Daddy Makeover different from a Mommy Makeover?",
            answer: "While both aim at body transformation and overall well-being, a Daddy Makeover specifically addresses men’s aging concerns, such as hair loss, skin health, and muscle tone."
        },
        {

            question: " What is the recovery process like after a Daddy Makeover?",
            answer: "As the Daddy Makeover typically includes non-invasive treatments, the recovery process is usually straightforward, with clients able to return to their daily routine soon after procedures. It is advisable to follow all aftercare instructions provided by the practitioner."
        }
    ]


    const data21 = [


        {

            question: "What is Vaser Liposuction?",
            answer: "Vaser Liposuction is a minimally invasive body sculpting procedure that uses ultrasound technology to selectively break down and remove stubborn fat deposits, providing a more contoured and toned appearance."
        },
        {

            question: "How is Vaser Liposuction different from traditional liposuction?",
            answer: "Unlike traditional liposuction, Vaser Liposuction utilizes ultrasound energy to break down fat cells, allowing for more precise fat removal with minimal damage to surrounding tissues. This results in a faster recovery and less post-operative discomfort."
        },
        {

            question: "Is Vaser Liposuction safe?",
            answer: "Yes, Vaser Liposuction is a safe procedure with a low risk of complications when performed by an experienced and qualified professional. It is FDA-approved and has been used successfully on thousands of patients."
        },
        {

            question: "How much does Vaser Liposuction cost?",
            answer: "The cost of Vaser Liposuction varies depending on factors such as the size and number of areas being treated, the clinic’s location, and the surgeon’s expertise. It is best to consult with a professional to receive a personalized quote."
        },
        {

            question: "What areas of the body can be treated with Vaser Liposuction?",
            answer: "Vaser Liposuction can effectively target and treat multiple areas of the body, including the abdomen, thighs, arms, back, and chin."
        },
        {

            question: "How long does the Vaser Liposuction procedure take?",
            answer: "The duration of a Vaser Liposuction procedure depends on the size and number of areas being treated. Generally, it takes about 1-4 hours to complete."
        },
        {

            question: "What is the recovery time for Vaser Liposuction?",
            answer: "Recovery time varies depending on the individual and the extent of the procedure, but most patients can return to their daily activities within a week. It is essential to follow the post-operative care instructions provided by your physician."
        },
        {

            question: "Are the results of Vaser Liposuction permanent?",
            answer: "The fat cells removed during Vaser Liposuction are permanently gone. However, it is essential to maintain a healthy lifestyle, including regular exercise and a balanced diet, to prevent the remaining fat cells from expanding."
        },
        {
            question: "Can Vaser Liposuction help with weight loss?",
            answer: "Vaser Liposuction is not a weight loss solution but a body contouring procedure. It is best suited for individuals close to their ideal weight but who struggle with stubborn fat deposits in specific areas."
        },
        {

            question: "Are there any side effects or risks associated with Vaser Liposuction?",
            answer: "As with any surgical procedure, there are potential risks and side effects. Some common side effects include swelling, bruising, and temporary discomfort. Serious complications are rare, especially when a qualified professional performs the procedure."
        }
    ]




    const data22 = [
        {
            question: "What is cellulite, and what causes it?",
            answer: "Cellulite is a condition characterized by the dimpled, uneven appearance of the skin, typically found on the thighs, buttocks, and abdomen. It results from fat accumulation beneath the skin, pushing against the connective tissue and causing the skin to pucker. Genetics, hormones, and lifestyle choices contribute to cellulite development."
        },
        {
            question: "How does Aveli work to reduce cellulite?",
            answer: "Aveli uses advanced laser technology to target and break down the fibrous bands of connective tissue responsible for the dimpling effect associated with cellulite. The treatment also stimulates collagen production, resulting in smoother, firmer skin."
        },
        {
            question: "Is Aveli safe?",
            answer: "Yes, Aveli is a minimally invasive and FDA-approved treatment for cellulite reduction. It is considered a safe and effective option for most individuals."
        },
        {
            question: "How long does the Aveli treatment take?",
            answer: "The Aveli treatment typically takes about one hour per session, depending on the size of the treatment area."
        },
        {
            question: "How many Aveli sessions are required for optimal results?",
            answer: "The number of sessions needed varies depending on the individual and the severity of their cellulite. Generally, most people achieve optimal results after 3 to 4 treatments."
        },
        {
            question: "Are there any side effects associated with Aveli?",
            answer: "Some mild side effects may include temporary redness, swelling, or bruising at the treatment site. These side effects usually subside within a few days."
        },
        {
            question: "How soon can I see the results after Aveli treatment?",
            answer: "Results can be visible as soon as the first session, with gradual improvements over time. Optimal results are typically seen after a series of treatments."
        },
        {
            question: "Is Aveli suitable for all skin types?",
            answer: "Yes, Aveli is effective and safe for all skin types and tones."
        },
        {
            question: "How long do Aveli's results last?",
            answer: "Aveli provides long-lasting results, with many individuals experiencing a significant reduction in cellulite for up to two years or more. However, maintaining a healthy lifestyle can help prolong the results."
        },
        {
            question: "Can Aveli be combined with other treatments?",
            answer: "Aveli can be combined with other treatments, such as body contouring and skin tightening procedures, to enhance overall results. Consult a professional to determine the best treatment plan for your needs."
        }
    ];

    const data23 = [
        {
            question: "What is cellulite, and how does Vaser Smooth help?",
            answer: "Cellulite is a common skin condition where fat deposits push through the connective tissue beneath the skin, creating a dimpled, lumpy appearance. Vaser Smooth uses ultrasound technology to break down these fibrous bands and stimulate collagen production, resulting in smoother, more toned skin."
        },
        {
            question: "Is Vaser Smooth safe?",
            answer: "Yes, Vaser Smooth is a safe and minimally invasive cosmetic procedure. It is FDA-approved and performed by qualified medical professionals who ensure patient safety and satisfaction."
        },
        {
            question: "Are there any side effects of Vaser Smooth?",
            answer: "Some common side effects of Vaser Smooth include mild swelling, bruising, and temporary numbness in the treated area. These side effects usually subside within a few days to a week."
        },
        {
            question: "How many Vaser Smooth treatments are needed to see results?",
            answer: "The number of treatments required varies from person to person, but most individuals experience noticeable improvement after just one session. For optimal results, multiple treatments may be recommended."
        },
        {
            question: "Is Vaser Smooth painful?",
            answer: "Vaser Smooth is generally considered to be a comfortable procedure. Patients may experience mild discomfort during the treatment, but local anesthesia is used to minimize any pain."
        },
        {
            question: "How long do Vaser Smooth results last?",
            answer: "Vaser Smooth results can be long-lasting, especially when combined with a healthy lifestyle and regular exercise. Maintaining a stable weight can help prolong the effects of the treatment."
        },
        {
            question: "Can Vaser Smooth be combined with other cosmetic procedures?",
            answer: "Vaser Smooth can be combined with other cosmetic procedures like liposuction, tummy tucks, or body lifts, depending on individual needs and goals."
        },
        {
            question: "How much does Vaser Smooth cost?",
            answer: "The cost of Vaser Smooth varies depending on factors such as the treatment area, the number of sessions required, and the provider’s fees. It is best to consult with a professional to get a personalized quote."
        },
        {
            question: "How long is the recovery time after Vaser Smooth?",
            answer: "Recovery time after a Vaser Smooth treatment is minimal. Most patients can resume their daily activities within 24 to 48 hours, while more strenuous activities may be resumed after one to two weeks, depending on individual healing and the doctor’s recommendations."
        },
        {
            question: "How long does a Vaser Smooth treatment take?",
            answer: "A typical Vaser Smooth treatment session lasts 45 minutes to an hour, depending on the size of the treatment area."
        }
    ];


    const data24 = [
        {
            question: "What is Renuvion skin tightening and body contouring?",
            answer: "Renuvion is a cutting-edge cosmetic procedure that uses radiofrequency energy and helium plasma to tighten loose skin and improve overall body contours effectively. It’s a minimally invasive treatment with long-lasting results and minimal recovery time, making it an ideal choice for those seeking to enhance their appearance without undergoing major surgery."
        },
        {
            question: "How does Renuvion work?",
            answer: "Renuvion uses a unique combination of radiofrequency energy and helium plasma to heat the tissues beneath the skin. This process stimulates collagen and elastin production, leading to firmer, smoother, and more youthful-looking skin. The energy also helps to contract the tissues, improving the overall body contour."
        },
        {
            question: "Is Renuvion safe?",
            answer: "Renuvion is considered a safe and effective treatment for skin tightening and body contouring. The FDA has approved it and has undergone extensive clinical trials to ensure its safety and effectiveness."
        },
        {
            question: "Who is an ideal candidate for Renuvion?",
            answer: "Ideal candidates for Renuvion are individuals who experience mild to moderate skin laxity and want to improve their body contours without undergoing invasive surgery. However, consulting with a qualified medical professional is essential to determine if Renuvion is the right choice for you."
        },
        {
            question: "What areas of the body can be treated with Renuvion?",
            answer: "Renuvion can effectively treat various body areas, including the abdomen, arms, thighs, neck, and lower face. It’s a versatile treatment that can address multiple concerns simultaneously."
        },
        {
            question: "How long do the results of Renuvion last?",
            answer: "The results of Renuvion can be long-lasting, with many patients experiencing improved skin tone and body contours for several years after their procedure. However, individual results may vary, and it’s essential to maintain a healthy lifestyle to prolong the benefits of the treatment."
        },
        {
            question: "How many Renuvion treatments will I need?",
            answer: "Most patients achieve their desired results with just one Renuvion treatment. However, your medical professional may recommend additional treatments based on your individual needs and goals."
        },
        {
            question: "Is there any downtime after a Renuvion procedure?",
            answer: "Renuvion is a minimally invasive treatment with minimal downtime. Most patients can return to normal activities within a few days after the procedure. However, following your medical professional’s post-treatment care instructions is essential for the best results."
        },
        {
            question: "Are there any side effects of Renuvion?",
            answer: "Some patients may experience temporary side effects such as redness, swelling, and bruising in the treated area. However, these side effects typically subside within a few days to a week following the treatment."
        },
        {
            question: "How much does Renuvion cost?",
            answer: "The cost of Renuvion varies depending on the treatment area, the provider’s expertise, and your location. It’s essential to consult with a qualified medical professional to discuss the cost and financing options for your Renuvion procedure."
        }
    ];


    const data25 = [
        {
            question: "What is power-assisted liposuction (PAL)?",
            answer: "Power-assisted liposuction (PAL) is an advanced body contouring procedure that uses a vibrating tipped cannula to break down and remove fat cells more efficiently than traditional liposuction techniques, often resulting in more precise and smoother results."
        },
        {
            question: "How does PAL differ from traditional liposuction?",
            answer: "PAL utilizes a vibrating cannula to assist in the fat cell breakdown and removal process, making it easier and more efficient than traditional liposuction methods relying solely on manual suctioning."
        },
        {
            question: "Is PAL suitable for everyone?",
            answer: "PAL is an effective body contouring technique for many individuals. Still, consulting with a qualified medical professional is essential to determine if this procedure is appropriate for your specific needs and goals."
        },
        {
            question: "How long is the recovery period after PAL?",
            answer: "The recovery period for PAL varies depending on the individual and the extent of the procedure. Most patients can expect to return to normal activities within a week or two, while some may require additional healing time."
        },
        {
            question: "Are there any risks or side effects associated with PAL?",
            answer: "As with any surgical procedure, there are potential risks and side effects. These may include bruising, swelling, infection, and temporary numbness. However, PAL is considered a relatively safe procedure when performed by an experienced surgeon."
        },
        {
            question: "What areas of the body can be treated with PAL?",
            answer: "PAL can treat various body areas, including the abdomen, hips, thighs, arms, and back."
        },
        {
            question: "How much does power-assisted liposuction cost?",
            answer: "The cost of PAL varies depending on the region, surgeon, and the extent of the procedure. It’s essential to consult with a qualified medical professional to discuss your specific needs and obtain an accurate estimate."
        },
        {
            question: "How long do the results of PAL last?",
            answer: "The results of PAL can be long-lasting, provided you maintain a healthy lifestyle and stable weight. Following your surgeon’s recommendations for post-operative care and lifestyle adjustments is essential to ensure the best possible outcome."
        },
        {
            question: "Can PAL be combined with other cosmetic procedures?",
            answer: "PAL can be combined with other cosmetic procedures to achieve a more comprehensive body transformation. Consult with your surgeon to determine the best treatments for your individual goals."
        },
        {
            question: "How can I find a qualified surgeon for PAL?",
            answer: "To find a qualified surgeon for PAL, it’s essential to research their credentials, experience, and patient reviews. You can also consult with professional organizations, such as the American Society of Plastic Surgeons, for a list of board-certified surgeons in your area."
        }
    ];


    const data26 = [
        {
            question: "What is Morpheus8 treatment?",
            answer: "Morpheus8 is a minimally invasive skin rejuvenation treatment that combines micro-needling and radiofrequency technology to stimulate collagen production, tighten skin, and improve overall skin texture."
        },
        {
            question: "How does Morpheus8 work?",
            answer: "Morpheus8 uses fractional radiofrequency energy to penetrate the skin through tiny micro-needles, which helps stimulate collagen production, tighten the skin, and improve the overall appearance of the skin’s texture."
        },
        {
            question: "Is Morpheus8 suitable for all skin types?",
            answer: "Yes, Morpheus8 is ideal for all skin types and tones. It is a safe and effective treatment for individuals looking to improve their skin’s appearance and texture."
        },
        {
            question: "What are the main benefits of Morpheus8 treatment?",
            answer: "Morpheus8 treatment offers several benefits, including reducing the appearance of fine lines, wrinkles, acne scars, and sagging skin. It also helps improve the skin’s texture, tightness, and overall appearance."
        },
        {
            question: "How many Morpheus8 treatments are needed for optimal results?",
            answer: "Most patients see optimal results after 1-3 Morpheus8 treatments, depending on their skin concerns and desired outcomes. Your practitioner will create a personalized treatment plan based on your unique needs."
        },
        {
            question: "Is there any downtime after the Morpheus8 treatment?",
            answer: "Morpheus8 treatment involves minimal downtime. Most patients can resume normal activities within 24-48 hours after the procedure, with only mild redness and swelling at the treatment site."
        },
        {
            question: "Are there any side effects associated with Morpheus8?",
            answer: "Side effects of Morpheus8 are generally mild and may include redness, swelling, or bruising at the treatment site. These side effects typically subside within a few days following the procedure."
        },
        {
            question: "How long do the results of Morpheus8 last?",
            answer: "The results of Morpheus8 can last up to 12 months or longer, depending on the individual’s skin type and lifestyle factors. Regular maintenance treatments can prolong the effects of the treatment."
        },
        {
            question: "Can Morpheus8 be combined with other cosmetic treatments?",
            answer: "Morpheus8 can be combined with other cosmetic treatments, such as dermal fillers, Botox, or laser skin resurfacing, to achieve comprehensive facial rejuvenation results."
        },
        {
            question: "How much does the Morpheus8 treatment cost?",
            answer: "The cost of Morpheus8 treatment varies depending on the treatment area, the number of sessions required, and the practitioner’s experience. It is best to consult with a qualified professional for a personalized quote based on your specific needs."
        }
    ];


    const data27 = [
        {
            question: "How long does a Potenza treatment session last?",
            answer: "A typical Potenza Skin Face Treatment session lasts 30 minutes to an hour, depending on the size and number of treated areas."
        },
        {
            question: "How many Potenza treatments are needed for optimal results?",
            answer: "The number of Potenza treatments required varies for each individual, but 3 to 4 sessions spaced 4 to 6 weeks apart are generally recommended for optimal results."
        },
        {
            question: "When can I expect to see results after a Potenza treatment?",
            answer: "You may start noticing skin texture and tone improvements after just one Potenza Skin Face Treatment, but optimal results are typically seen after a series of treatments."
        },
        {
            question: "Are there any side effects of Potenza?",
            answer: "Side effects of Potenza are generally mild and can include temporary redness, swelling, or bruising at the treatment site. These usually resolve within a few days."
        },
        {
            question: "Is there any downtime after a Potenza treatment?",
            answer: "There is minimal to no downtime after a Potenza treatment. Most people can return to their normal activities immediately following the procedure."
        },
        {
            question: "Can Potenza be combined with other treatments?",
            answer: "Yes, Potenza can be safely combined with other cosmetic treatments such as Botox, fillers, or chemical peels to enhance overall results."
        },
        {
            question: "Who is a good candidate for Potenza treatments?",
            answer: "Potenza is suitable for individuals of all skin types and tones looking to improve skin texture, tone, and firmness. However, it’s always best to consult a qualified professional to determine if Potenza is the proper treatment for your needs."
        },
        {
            question: "How long do the results of Potenza treatments last?",
            answer: "Results of Potenza Skin Face Treatment can last for several months to a year, depending on the individual and their skincare routine. Maintenance treatments may be recommended to prolong the effects."
        },
        {
            question: "Is Potenza safe for all skin types?",
            answer: "Yes, Potenza is safe for all skin types and tones, as the radiofrequency energy used in the treatment can be adjusted to accommodate different skin sensitivities."
        },
        {
            question: "How much does a Potenza treatment cost?",
            answer: "The cost of Potenza treatments can vary depending on the size and number of areas being treated, as well as the location and experience of the provider. It’s essential to consult with a qualified professional to discuss treatment options and pricing."
        }
    ];



    return (
        <>
            <div className="faq-banner-container banner">
                {/* <video className='sliderVid' src={faqGif} autoPlay muted loop style={{ width: '100%', height: '100%' }}></video> */}
                <img src="https://www.searchenginejournal.com/wp-content/uploads/2022/07/faq-632c0874710c1-sej.png" alt="" style={{ height: "550px" }} />
            </div>
            <div className="accordion-main-container">
                {/* FAQ = 1 */}
                <h2 className='faq-heading'>Lipo 360 FAQs?</h2>
                <div className="accordion faq1" id="accordionExample1">
                    {data1.map((item, index) => (
                        <div className="accordion-item" key={`accordionItem1${index}`}>
                            <h2 className="accordion-header" id={`heading1${index + 1}`}>
                                <button
                                    className={`accordion-button ${activeAccordion1 === index ? '' : 'collapsed'}`}
                                    type="button"
                                    onClick={() => setActiveAccordion1(activeAccordion1 === index ? null : index)}
                                    aria-expanded={activeAccordion1 === index ? 'true' : 'false'}
                                    aria-controls={`collapse1${index + 1}`}
                                >
                                    {item.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse1${index + 1}`}
                                className={`accordion-collapse collapse ${activeAccordion1 === index ? 'show' : ''}`}
                                aria-labelledby={`heading1${index + 1}`}
                                data-bs-parent="#accordionExample1"
                            >
                                <div className="accordion-body">{item.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* FAQ = 2 */}
                <h2 className='faq-heading'>Mommy makeover FAQs?</h2>
                <div className="accordion faq2" id="accordionExample2">
                    {data2.map((item, index) => (
                        <div className="accordion-item" key={`accordionItem2${index}`}>
                            <h2 className="accordion-header" id={`heading2${index + 1}`}>
                                <button
                                    className={`accordion-button ${activeAccordion2 === index ? '' : 'collapsed'}`}
                                    type="button"
                                    onClick={() => setActiveAccordion2(activeAccordion2 === index ? null : index)}
                                    aria-expanded={activeAccordion2 === index ? 'true' : 'false'}
                                    aria-controls={`collapse2${index + 1}`}
                                >
                                    {item.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse2${index + 1}`}
                                className={`accordion-collapse collapse ${activeAccordion2 === index ? 'show' : ''}`}
                                aria-labelledby={`heading2${index + 1}`}
                                data-bs-parent="#accordionExample2"
                            >
                                <div className="accordion-body">{item.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* FAQ = 3*/}
                <h2 className='faq-heading'>Body lift procedure FAQs?</h2>
                <div className="accordion faq3" id="accordionExample3">
                    {data3.map((item, index) => (
                        <div className="accordion-item" key={`accordionItem2${index}`}>
                            <h2 className="accordion-header" id={`heading2${index + 1}`}>
                                <button
                                    className={`accordion-button ${activeAccordion3 === index ? '' : 'collapsed'}`}
                                    type="button"
                                    onClick={() => setActiveAccordion3(activeAccordion3 === index ? null : index)}
                                    aria-expanded={activeAccordion2 === index ? 'true' : 'false'}
                                    aria-controls={`collapse2${index + 1}`}
                                >
                                    {item.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse2${index + 1}`}
                                className={`accordion-collapse collapse ${activeAccordion3 === index ? 'show' : ''}`}
                                aria-labelledby={`heading2${index + 1}`}
                                data-bs-parent="#accordionExample3"
                            >
                                <div className="accordion-body">{item.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>


                {/* FAQ = 4*/}
                <h2 className='faq-heading'>Brazilian Butt Lift​ FAQs?</h2>
                <div className="accordion faq4" id="accordionExample4">
                    {data4.map((item, index) => (
                        <div className="accordion-item" key={`accordionItem4${index}`}>
                            <h2 className="accordion-header" id={`heading4${index + 1}`}>
                                <button
                                    className={`accordion-button ${activeAccordion4 === index ? '' : 'collapsed'}`}
                                    type="button"
                                    onClick={() => setActiveAccordion4(activeAccordion4 === index ? null : index)}
                                    aria-expanded={activeAccordion4 === index ? 'true' : 'false'}
                                    aria-controls={`collapse4${index + 1}`}
                                >
                                    {item.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse4${index + 1}`}
                                className={`accordion-collapse collapse ${activeAccordion4 === index ? 'show' : ''}`}
                                aria-labelledby={`heading4${index + 1}`}
                                data-bs-parent="#accordionExample4"
                            >
                                <div className="accordion-body">{item.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>


                {/* FAQ = 5 */}
                <h2 className='faq-heading'>Breast Augmentation​ FAQs?</h2>
                <div className="accordion faq1" id="accordionExample5">
                    {data5.map((item, index) => (
                        <div className="accordion-item" key={`accordionItem5${index}`}>
                            <h2 className="accordion-header" id={`heading5${index + 1}`}>
                                <button
                                    className={`accordion-button ${activeAccordion5 === index ? '' : 'collapsed'}`}
                                    type="button"
                                    onClick={() => setActiveAccordion5(activeAccordion5 === index ? null : index)}
                                    aria-expanded={activeAccordion5 === index ? 'true' : 'false'}
                                    aria-controls={`collapse5${index + 1}`}
                                >
                                    {item.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse5${index + 1}`}
                                className={`accordion-collapse collapse ${activeAccordion5 === index ? 'show' : ''}`}
                                aria-labelledby={`heading5${index + 1}`}
                                data-bs-parent="#accordionExample5"
                            >
                                <div className="accordion-body">{item.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>


                {/* FAQ = 6 */}
                <h2 className='faq-heading'>Breast Lift FAQs?</h2>
                <div className="accordion faq2" id="accordionExample6">
                    {data6.map((item, index) => (
                        <div className="accordion-item" key={`accordionItem6${index}`}>
                            <h2 className="accordion-header" id={`heading6${index + 1}`}>
                                <button
                                    className={`accordion-button ${activeAccordion6 === index ? '' : 'collapsed'}`}
                                    type="button"
                                    onClick={() => setActiveAccordion6(activeAccordion6 === index ? null : index)}
                                    aria-expanded={activeAccordion6 === index ? 'true' : 'false'}
                                    aria-controls={`collapse6${index + 1}`}
                                >
                                    {item.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse6${index + 1}`}
                                className={`accordion-collapse collapse ${activeAccordion6 === index ? 'show' : ''}`}
                                aria-labelledby={`heading6${index + 1}`}
                                data-bs-parent="#accordionExample6"
                            >
                                <div className="accordion-body">{item.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>



                {/* FAQ = 7 */}
                <h2 className='faq-heading'>Breast Reduction FAQs?</h2>
                <div className="accordion faq3" id="accordionExample7">
                    {data7.map((item, index) => (
                        <div className="accordion-item" key={`accordionItem7${index}`}>
                            <h2 className="accordion-header" id={`heading7${index + 1}`}>
                                <button
                                    className={`accordion-button ${activeAccordion7 === index ? '' : 'collapsed'}`}
                                    type="button"
                                    onClick={() => setActiveAccordion7(activeAccordion7 === index ? null : index)}
                                    aria-expanded={activeAccordion7 === index ? 'true' : 'false'}
                                    aria-controls={`collapse7${index + 1}`}
                                >
                                    {item.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse7${index + 1}`}
                                className={`accordion-collapse collapse ${activeAccordion7 === index ? 'show' : ''}`}
                                aria-labelledby={`heading7${index + 1}`}
                                data-bs-parent="#accordionExample7"
                            >
                                <div className="accordion-body">{item.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>



                {/* FAQ = 8 */}
                <h2 className='faq-heading'>Breast Revision FAQs?</h2>
                <div className="accordion faq4" id="accordionExample8">
                    {data8.map((item, index) => (
                        <div className="accordion-item" key={`accordionItem8${index}`}>
                            <h2 className="accordion-header" id={`heading8${index + 1}`}>
                                <button
                                    className={`accordion-button ${activeAccordion8 === index ? '' : 'collapsed'}`}
                                    type="button"
                                    onClick={() => setActiveAccordion8(activeAccordion8 === index ? null : index)}
                                    aria-expanded={activeAccordion8 === index ? 'true' : 'false'}
                                    aria-controls={`collapse8${index + 1}`}
                                >
                                    {item.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse8${index + 1}`}
                                className={`accordion-collapse collapse ${activeAccordion8 === index ? 'show' : ''}`}
                                aria-labelledby={`heading8${index + 1}`}
                                data-bs-parent="#accordionExample8"
                            >
                                <div className="accordion-body">{item.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>


                {/* FAQ = 9 */}
                <h2 className='faq-heading'>Tummy tuck FAQs?</h2>
                <div className="accordion faq1" id="accordionExample9">
                    {data9.map((item, index) => (
                        <div className="accordion-item" key={`accordionItem9${index}`}>
                            <h2 className="accordion-header" id={`heading9${index + 1}`}>
                                <button
                                    className={`accordion-button ${activeAccordion9 === index ? '' : 'collapsed'}`}
                                    type="button"
                                    onClick={() => setActiveAccordion9(activeAccordion9 === index ? null : index)}
                                    aria-expanded={activeAccordion9 === index ? 'true' : 'false'}
                                    aria-controls={`collapse9${index + 1}`}
                                >
                                    {item.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse9${index + 1}`}
                                className={`accordion-collapse collapse ${activeAccordion9 === index ? 'show' : ''}`}
                                aria-labelledby={`heading9${index + 1}`}
                                data-bs-parent="#accordionExample9"
                            >
                                <div className="accordion-body">{item.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>


                {/* FAQ = 11 */}
                <h2 className='faq-heading'>Legs procedures FAQs?</h2>
                <div className="accordion faq2" id="accordionExample11">
                    {data11.map((item, index) => (
                        <div className="accordion-item" key={`accordionItem11${index}`}>
                            <h2 className="accordion-header" id={`heading11${index + 1}`}>
                                <button
                                    className={`accordion-button ${activeAccordion11 === index ? '' : 'collapsed'}`}
                                    type="button"
                                    onClick={() => setActiveAccordion11(activeAccordion11 === index ? null : index)}
                                    aria-expanded={activeAccordion11 === index ? 'true' : 'false'}
                                    aria-controls={`collapse11${index + 1}`}
                                >
                                    {item.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse11${index + 1}`}
                                className={`accordion-collapse collapse ${activeAccordion11 === index ? 'show' : ''}`}
                                aria-labelledby={`heading11${index + 1}`}
                                data-bs-parent="#accordionExample11"
                            >
                                <div className="accordion-body">{item.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>


                {/* FAQ = 12 */}
                <h2 className='faq-heading'>Buccal Fat Removal FAQs?</h2>
                <div className="accordion faq3" id="accordionExample12">
                    {data12.map((item, index) => (
                        <div className="accordion-item" key={`accordionItem12${index}`}>
                            <h2 className="accordion-header" id={`heading12${index + 1}`}>
                                <button
                                    className={`accordion-button ${activeAccordion12 === index ? '' : 'collapsed'}`}
                                    type="button"
                                    onClick={() => setActiveAccordion12(activeAccordion12 === index ? null : index)}
                                    aria-expanded={activeAccordion12 === index ? 'true' : 'false'}
                                    aria-controls={`collapse12${index + 1}`}
                                >
                                    {item.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse12${index + 1}`}
                                className={`accordion-collapse collapse ${activeAccordion12 === index ? 'show' : ''}`}
                                aria-labelledby={`heading12${index + 1}`}
                                data-bs-parent="#accordionExample12"
                            >
                                <div className="accordion-body">{item.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>


                {/* FAQ = 13 */}
                <h2 className='faq-heading'>Neck and chin liposuction FAQs?</h2>
                <div className="accordion faq4" id="accordionExample13">
                    {data13.map((item, index) => (
                        <div className="accordion-item" key={`accordionItem13${index}`}>
                            <h2 className="accordion-header" id={`heading13${index + 1}`}>
                                <button
                                    className={`accordion-button ${activeAccordion13 === index ? '' : 'collapsed'}`}
                                    type="button"
                                    onClick={() => setActiveAccordion13(activeAccordion13 === index ? null : index)}
                                    aria-expanded={activeAccordion13 === index ? 'true' : 'false'}
                                    aria-controls={`collapse13${index + 1}`}
                                >
                                    {item.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse13${index + 1}`}
                                className={`accordion-collapse collapse ${activeAccordion13 === index ? 'show' : ''}`}
                                aria-labelledby={`heading13${index + 1}`}
                                data-bs-parent="#accordionExample13"
                            >
                                <div className="accordion-body">{item.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>


                {/* FAQ = 14 */}
                <h2 className='faq-heading'>Face Lift Surgery FAQs?</h2>
                <div className="accordion faq1" id="accordionExample14">
                    {data14.map((item, index) => (
                        <div className="accordion-item" key={`accordionItem14${index}`}>
                            <h2 className="accordion-header" id={`heading14${index + 1}`}>
                                <button
                                    className={`accordion-button ${activeAccordion14 === index ? '' : 'collapsed'}`}
                                    type="button"
                                    onClick={() => setActiveAccordion14(activeAccordion14 === index ? null : index)}
                                    aria-expanded={activeAccordion14 === index ? 'true' : 'false'}
                                    aria-controls={`collapse14${index + 1}`}
                                >
                                    {item.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse14${index + 1}`}
                                className={`accordion-collapse collapse ${activeAccordion14 === index ? 'show' : ''}`}
                                aria-labelledby={`heading14${index + 1}`}
                                data-bs-parent="#accordionExample14"
                            >
                                <div className="accordion-body">{item.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>


                {/* FAQ = 15 */}
                <h2 className='faq-heading'>Blepharoplasty-eyelid lift FAQs?</h2>
                <div className="accordion faq2" id="accordionExample15">
                    {data15.map((item, index) => (
                        <div className="accordion-item" key={`accordionItem15${index}`}>
                            <h2 className="accordion-header" id={`heading15${index + 1}`}>
                                <button
                                    className={`accordion-button ${activeAccordion15 === index ? '' : 'collapsed'}`}
                                    type="button"
                                    onClick={() => setActiveAccordion15(activeAccordion15 === index ? null : index)}
                                    aria-expanded={activeAccordion15 === index ? 'true' : 'false'}
                                    aria-controls={`collapse15${index + 1}`}
                                >
                                    {item.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse15${index + 1}`}
                                className={`accordion-collapse collapse ${activeAccordion15 === index ? 'show' : ''}`}
                                aria-labelledby={`heading15${index + 1}`}
                                data-bs-parent="#accordionExample15"
                            >
                                <div className="accordion-body">{item.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>


                {/* FAQ = 16 */}
                <h2 className='faq-heading'>Brow Lift FAQs?</h2>
                <div className="accordion faq3" id="accordionExample16">
                    {data16.map((item, index) => (
                        <div className="accordion-item" key={`accordionItem16${index}`}>
                            <h2 className="accordion-header" id={`heading16${index + 1}`}>
                                <button
                                    className={`accordion-button ${activeAccordion16 === index ? '' : 'collapsed'}`}
                                    type="button"
                                    onClick={() => setActiveAccordion16(activeAccordion16 === index ? null : index)}
                                    aria-expanded={activeAccordion16 === index ? 'true' : 'false'}
                                    aria-controls={`collapse16${index + 1}`}
                                >
                                    {item.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse16${index + 1}`}
                                className={`accordion-collapse collapse ${activeAccordion16 === index ? 'show' : ''}`}
                                aria-labelledby={`heading16${index + 1}`}
                                data-bs-parent="#accordionExample16"
                            >
                                <div className="accordion-body">{item.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>



                {/* FAQ = 17 */}
                <h2 className='faq-heading'>Skin aesthetic procedures FAQs?</h2>
                <div className="accordion faq4" id="accordionExample17">
                    {data17.map((item, index) => (
                        <div className="accordion-item" key={`accordionItem17${index}`}>
                            <h2 className="accordion-header" id={`heading17${index + 1}`}>
                                <button
                                    className={`accordion-button ${activeAccordion17 === index ? '' : 'collapsed'}`}
                                    type="button"
                                    onClick={() => setActiveAccordion17(activeAccordion17 === index ? null : index)}
                                    aria-expanded={activeAccordion17 === index ? 'true' : 'false'}
                                    aria-controls={`collapse17${index + 1}`}
                                >
                                    {item.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse17${index + 1}`}
                                className={`accordion-collapse collapse ${activeAccordion17 === index ? 'show' : ''}`}
                                aria-labelledby={`heading17${index + 1}`}
                                data-bs-parent="#accordionExample17"
                            >
                                <div className="accordion-body">{item.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>


                {/* FAQ = 18 */}
                <h2 className='faq-heading'>Vaginal rejuvenation: labiaplasty FAQs?</h2>
                <div className="accordion faq1" id="accordionExample18">
                    {data18.map((item, index) => (
                        <div className="accordion-item" key={`accordionItem18${index}`}>
                            <h2 className="accordion-header" id={`heading18${index + 1}`}>
                                <button
                                    className={`accordion-button ${activeAccordion18 === index ? '' : 'collapsed'}`}
                                    type="button"
                                    onClick={() => setActiveAccordion18(activeAccordion18 === index ? null : index)}
                                    aria-expanded={activeAccordion18 === index ? 'true' : 'false'}
                                    aria-controls={`collapse18${index + 1}`}
                                >
                                    {item.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse18${index + 1}`}
                                className={`accordion-collapse collapse ${activeAccordion18 === index ? 'show' : ''}`}
                                aria-labelledby={`heading18${index + 1}`}
                                data-bs-parent="#accordionExample18"
                            >
                                <div className="accordion-body">{item.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>


                {/* FAQ = 19 */}
                <h2 className='faq-heading'>Male Gynecomastia Surgery FAQs?</h2>
                <div className="accordion faq2" id="accordionExample19">
                    {data19.map((item, index) => (
                        <div className="accordion-item" key={`accordionItem19${index}`}>
                            <h2 className="accordion-header" id={`heading19${index + 1}`}>
                                <button
                                    className={`accordion-button ${activeAccordion19 === index ? '' : 'collapsed'}`}
                                    type="button"
                                    onClick={() => setActiveAccordion19(activeAccordion19 === index ? null : index)}
                                    aria-expanded={activeAccordion19 === index ? 'true' : 'false'}
                                    aria-controls={`collapse19${index + 1}`}
                                >
                                    {item.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse19${index + 1}`}
                                className={`accordion-collapse collapse ${activeAccordion19 === index ? 'show' : ''}`}
                                aria-labelledby={`heading19${index + 1}`}
                                data-bs-parent="#accordionExample19"
                            >
                                <div className="accordion-body">{item.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>


                {/* FAQ = 20 */}
                <h2 className='faq-heading'>Daddy Makeover FAQs?</h2>
                <div className="accordion faq3" id="accordionExample20">
                    {data20.map((item, index) => (
                        <div className="accordion-item" key={`accordionItem20${index}`}>
                            <h2 className="accordion-header" id={`heading20${index + 1}`}>
                                <button
                                    className={`accordion-button ${activeAccordion20 === index ? '' : 'collapsed'}`}
                                    type="button"
                                    onClick={() => setActiveAccordion20(activeAccordion20 === index ? null : index)}
                                    aria-expanded={activeAccordion20 === index ? 'true' : 'false'}
                                    aria-controls={`collapse20${index + 1}`}
                                >
                                    {item.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse20${index + 1}`}
                                className={`accordion-collapse collapse ${activeAccordion20 === index ? 'show' : ''}`}
                                aria-labelledby={`heading20${index + 1}`}
                                data-bs-parent="#accordionExample20"
                            >
                                <div className="accordion-body">{item.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>


                {/* FAQ = 21 */}
                <h2 className='faq-heading'>Vaser Liposuction FAQs?</h2>
                <div className="accordion faq4" id="accordionExample21">
                    {data21.map((item, index) => (
                        <div className="accordion-item" key={`accordionItem21${index}`}>
                            <h2 className="accordion-header" id={`heading21${index + 1}`}>
                                <button
                                    className={`accordion-button ${activeAccordion21 === index ? '' : 'collapsed'}`}
                                    type="button"
                                    onClick={() => setActiveAccordion21(activeAccordion21 === index ? null : index)}
                                    aria-expanded={activeAccordion21 === index ? 'true' : 'false'}
                                    aria-controls={`collapse21${index + 1}`}
                                >
                                    {item.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse21${index + 1}`}
                                className={`accordion-collapse collapse ${activeAccordion21 === index ? 'show' : ''}`}
                                aria-labelledby={`heading21${index + 1}`}
                                data-bs-parent="#accordionExample21"
                            >
                                <div className="accordion-body">{item.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>




                {/* FAQ = 22 */}
                <h2 className='faq-heading'>Aveli FAQs?</h2>
                <div className="accordion faq1" id="accordionExample22">
                    {data22.map((item, index) => (
                        <div className="accordion-item" key={`accordionItem22${index}`}>
                            <h2 className="accordion-header" id={`heading22${index + 1}`}>
                                <button
                                    className={`accordion-button ${activeAccordion22 === index ? '' : 'collapsed'}`}
                                    type="button"
                                    onClick={() => setActiveAccordion22(activeAccordion22 === index ? null : index)}
                                    aria-expanded={activeAccordion22 === index ? 'true' : 'false'}
                                    aria-controls={`collapse22${index + 1}`}
                                >
                                    {item.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse22${index + 1}`}
                                className={`accordion-collapse collapse ${activeAccordion22 === index ? 'show' : ''}`}
                                aria-labelledby={`heading22${index + 1}`}
                                data-bs-parent="#accordionExample22"
                            >
                                <div className="accordion-body">{item.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>



                {/* FAQ = 23 */}
                <h2 className='faq-heading'>Vaser smooth FAQs?</h2>
                <div className="accordion faq2" id="accordionExample23">
                    {data23.map((item, index) => (
                        <div className="accordion-item" key={`accordionItem23${index}`}>
                            <h2 className="accordion-header" id={`heading23${index + 1}`}>
                                <button
                                    className={`accordion-button ${activeAccordion23 === index ? '' : 'collapsed'}`}
                                    type="button"
                                    onClick={() => setActiveAccordion23(activeAccordion23 === index ? null : index)}
                                    aria-expanded={activeAccordion23 === index ? 'true' : 'false'}
                                    aria-controls={`collapse23${index + 1}`}
                                >
                                    {item.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse23${index + 1}`}
                                className={`accordion-collapse collapse ${activeAccordion23 === index ? 'show' : ''}`}
                                aria-labelledby={`heading23${index + 1}`}
                                data-bs-parent="#accordionExample23"
                            >
                                <div className="accordion-body">{item.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>



                {/* FAQ = 24 */}
                <h2 className='faq-heading'>Renuvion FAQs?</h2>
                <div className="accordion faq3" id="accordionExample24">
                    {data24.map((item, index) => (
                        <div className="accordion-item" key={`accordionItem24${index}`}>
                            <h2 className="accordion-header" id={`heading24${index + 1}`}>
                                <button
                                    className={`accordion-button ${activeAccordion24 === index ? '' : 'collapsed'}`}
                                    type="button"
                                    onClick={() => setActiveAccordion24(activeAccordion24 === index ? null : index)}
                                    aria-expanded={activeAccordion24 === index ? 'true' : 'false'}
                                    aria-controls={`collapse24${index + 1}`}
                                >
                                    {item.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse24${index + 1}`}
                                className={`accordion-collapse collapse ${activeAccordion24 === index ? 'show' : ''}`}
                                aria-labelledby={`heading24${index + 1}`}
                                data-bs-parent="#accordionExample24"
                            >
                                <div className="accordion-body">{item.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* FAQ = 25 */}
                <h2 className='faq-heading'>Power assisted liposuction (pal)​ FAQs?</h2>
                <div className="accordion faq4" id="accordionExample25">
                    {data25.map((item, index) => (
                        <div className="accordion-item" key={`accordionItem25${index}`}>
                            <h2 className="accordion-header" id={`heading25${index + 1}`}>
                                <button
                                    className={`accordion-button ${activeAccordion25 === index ? '' : 'collapsed'}`}
                                    type="button"
                                    onClick={() => setActiveAccordion25(activeAccordion25 === index ? null : index)}
                                    aria-expanded={activeAccordion25 === index ? 'true' : 'false'}
                                    aria-controls={`collapse25${index + 1}`}
                                >
                                    {item.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse25${index + 1}`}
                                className={`accordion-collapse collapse ${activeAccordion25 === index ? 'show' : ''}`}
                                aria-labelledby={`heading25${index + 1}`}
                                data-bs-parent="#accordionExample25"
                            >
                                <div className="accordion-body">{item.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>



                {/* FAQ = 26 */}
                <h2 className='faq-heading'>Morpheus8​ FAQs?</h2>
                <div className="accordion faq1" id="accordionExample26">
                    {data26.map((item, index) => (
                        <div className="accordion-item" key={`accordionItem26${index}`}>
                            <h2 className="accordion-header" id={`heading26${index + 1}`}>
                                <button
                                    className={`accordion-button ${activeAccordion26 === index ? '' : 'collapsed'}`}
                                    type="button"
                                    onClick={() => setActiveAccordion26(activeAccordion26 === index ? null : index)}
                                    aria-expanded={activeAccordion26 === index ? 'true' : 'false'}
                                    aria-controls={`collapse26${index + 1}`}
                                >
                                    {item.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse26${index + 1}`}
                                className={`accordion-collapse collapse ${activeAccordion26 === index ? 'show' : ''}`}
                                aria-labelledby={`heading26${index + 1}`}
                                data-bs-parent="#accordionExample26"
                            >
                                <div className="accordion-body">{item.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* FAQ = 27 */}
                <h2 className='faq-heading'>Potenza FAQs?</h2>
                <div className="accordion faq2" id="accordionExample27">
                    {data27.map((item, index) => (
                        <div className="accordion-item" key={`accordionItem27${index}`}>
                            <h2 className="accordion-header" id={`heading27${index + 1}`}>
                                <button
                                    className={`accordion-button ${activeAccordion27 === index ? '' : 'collapsed'}`}
                                    type="button"
                                    onClick={() => setActiveAccordion27(activeAccordion27 === index ? null : index)}
                                    aria-expanded={activeAccordion27 === index ? 'true' : 'false'}
                                    aria-controls={`collapse27${index + 1}`}
                                >
                                    {item.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse27${index + 1}`}
                                className={`accordion-collapse collapse ${activeAccordion27 === index ? 'show' : ''}`}
                                aria-labelledby={`heading27${index + 1}`}
                                data-bs-parent="#accordionExample27"
                            >
                                <div className="accordion-body">{item.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



        </>
    );
}
