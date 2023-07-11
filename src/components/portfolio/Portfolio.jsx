import React from 'react';
import './style.css';
import NavBar from './NavBar';
import Section from './Section';
import myimage from '../images/myimg.jpg';

function Portfolio(){

  const  headerLinks=['Home','About','Skills','Qualifications','Projects'];
  const  footerLinks=['LinkedIn','FaceBook','Instagram','Twitter','Github'];

const aboutDesc=`
  My name is Love gupta. And I belongs to Kanpur, Uttar Pradesh India. I did my bechlor in computer Application from college of Management Studies,Kanpur in 2022. And I also completed master diploma in computer Information and Management in 2017. Currently I am learning webdevelopment and dsa in Acciojob.
  
  In My college I made some good project in web development. I like to contribute in open source. I have also done one internship in web development at LeurerTech software solutions, Banglore remotely. Apart from this I have also done 2 internship in content writing. 
   I am self motivated ,hardworking , fast learner.My hobbies are watching Anime, spending time in nature , reading tech blogs. I want to become good web developer and also blockchain developer. ` ;

const SkillsDesc=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis modi nihil laboriosam cumque iusto, unde cum deleniti non nam quo mollitia temporibus sit facere veniam, consequuntur, qui minima consequatur fuga pariatur excepturi eveniet placeat aperiam recusandae. Inventore, praesentium, beatae reiciendis quos minus autem ab doloremque fugit maiores doloribus sit quia!";

const QualiDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptate atque quis a dolor ex ipsum odio eum laudantium soluta qui, amet asperiores ut placeat reiciendis esse illo neque officiis laboriosam. Rerum adipisci quas excepturi perferendis, cupiditate tenetur nemo architecto expedita. Neque repudiandae beatae autem assumenda accusantium culpa aliquid excepturi.";

const projectDesc=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit illo exercitationem expedita sequi explicabo, perspiciatis aperiam odio, officia deserunt perferendis laboriosam amet ad soluta at sint nam similique hic, atque neque saepe beatae? Obcaecati voluptatibus facere adipisci sed iure quaerat magni sapiente excepturi incidunt? In beatae repellat optio quibusdam tempora laudantium, voluptate id ullam. Id fuga, accusantium natus, officia sapiente iste praesentium laudantium obcaecati eveniet facilis nam sint pariatur reprehenderit.";


return(
<div className="container">
    <NavBar text="Love gupta" links={headerLinks}/>


    <main>
    <Section heading="About Me" desc={aboutDesc} image={myimage} id={headerLinks[1]}/>
    <hr />
    <Section heading="Skills" desc={SkillsDesc} id={headerLinks[2]}/>
     <hr />
    <Section heading="Qualifications" desc={QualiDesc} id={headerLinks[3]}/>
    <hr />
    <Section heading="Projects" desc={projectDesc} id={headerLinks[4]}/>
   </main>


    <NavBar text="&copy; 2023 All Copyright are reserved By Love gupta " links={footerLinks}/>
</div>
);
}
export default Portfolio;
