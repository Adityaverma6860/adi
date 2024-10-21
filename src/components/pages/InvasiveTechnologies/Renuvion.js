import React from 'react';
import RenuvionImage from './technologies/Renuvion.jpeg'; // Correct import statement for the image file
import './technologies/technologies.css'
import Board from '../Board';
import Board2 from '../Board2';
import TestMoni from '../TestMoni';

export default function Renuvion() {
  return (
    <>
      <div className="VaserLipo-container">
        <div className="content">
          <h2>RENUVION</h2>
          <p>Welcome to shapeudeserve.com, the ultimate destination to unlock your journey toward achieving the body and confidence you’ve always desired. Our state-of-the-art Renuvion procedure, an innovative, non-invasive skin tightening and body contouring treatment, will help you reclaim your youthful appearance and self-esteem. Renuvion combines the power of radiofrequency energy and helium plasma. This revolutionary technology provides unparalleled skin rejuvenation results with minimal downtime.</p>
          <br />
          <p><strong>Revitalize Your Appearance with Renuvion (J Plasma) Skin Tightening: </strong> When it comes to combating wrinkles, sagging skin, and the effects of aging, Renuvion, also known as J Plasma, has emerged as a cutting-edge skin tightening treatment. This revolutionary technology utilizes advanced radio frequency skin tightening and rejuvenates the skin, addressing concerns ranging from loose skin to saggy neck. If you’re considering skin tightening procedures, understanding the benefits and options of Renuvion can be a game-changer.</p>
          {/* Add more information or details here */}
        </div>
        <div className="img-technologies">
          <img src={RenuvionImage} alt="Renuvion" height={500} /> {/* Use the imported image variable */}
        </div>

      </div>
      <div className="content-with-video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/est-V8Gg2I4?si=USoq0R0LMQHyCVhl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <div className="content">
          <p><strong>Exploring Renuvion (J Plasma) Skin Tightening:</strong> Renuvion, powered by J Plasma technology, delivers precise and controlled radio frequency energy beneath the skin’s surface. This energy triggers a rejuvenating process that stimulates collagen production and tightens loose skin, effectively reducing the appearance of wrinkles and sagging.</p>
          <p>Unlocking Youthful Vitality – Benefits of Skin Tightening: Skin tightening procedures with Renuvion offer numerous benefits, including improved skin texture, reduction in fine lines and wrinkles, and enhanced skin elasticity. Whether it’s the neck tightening you desire or addressing loose skin on the stomach, this treatment provides a non-surgical solution with remarkable results.</p>
        </div>
      </div>
      <br />
      <div className="green-content">
        <p>resultCustomized Approach – Tighten Neck Skin and More: Renuvion’s versatility allows it to be utilized on various areas of the body, including the neck, stomach, and more. Whether you’re dealing with saggy neck skin or loose skin on the stomach, this technology offers a tailored approach to meet your specific needs.</p>
        <p><strong>Youthful Contours, Confident You – Addressing Loose Skin: </strong> Surgery for loose skin was once the primary option, but Renuvion’s non-invasive approach has changed the game. With minimal downtime and natural-looking results, individuals are regaining their youthful contours and confidence without undergoing surgery.</p>
        <p><strong>Cost Considerations – Exploring J Plasma Cost: </strong> While considering skin tightening procedures, understanding the cost, including J Plasma cost, is essential. The investment is not only in your appearance but also in the boost of self-esteem that comes with rejuvenated and tightened skin.</p>
        <p>Renuvion (J Plasma) skin tightening offers a revolutionary solution to address sagging skin, wrinkles, and loose skin. Whether you’re interested in neck tightening, tightening loose skin on stomach, or other body parts, this advanced technology provides remarkable results without the need for surgery. Consultation with a skilled practitioner allows you to explore personalized options that align with your aesthetic goals. By choosing Renuvion, you’re choosing to revitalize your appearance, unlock youthful vitality, and embrace a more confident version of yourself.</p>

      </div>
      <Board />

      <div className="vaserlipo">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/K4vSrYp9NGQ?si=zZWn8RaTTUdU17sN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/cOyZd4hYJd4?si=RH3dt78oaH91AbFU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      <div className="vaserlipo">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/vo4Mct62Al4?si=z19NpWDebWhQM8np" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/W-NLHwPy1HY?si=3bq9EP9zmUPDrWus" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      <Board2 />

      <TestMoni />
    </>
  );
}
