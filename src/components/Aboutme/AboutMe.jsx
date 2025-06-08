import './AboutMe.css'
import { useState } from 'react'
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import certi1 from '../assets/responsive-web-design_freecodecamp_certification_Siriprapa_Gerads.png'
import certi2 from '../assets/front-end-development-libraries_freecodecamp_certification_Siriprapa_Gerads.png'
import certi3 from '../assets/certificate-js.png'
import certi4 from '../assets/certificate-react.png'
import CertificateModal from '../Certificate/CertificateModal';
import Pic_1 from '../assets/pro-pic-3.jpg'


const AboutMe = () => {

  // tab title
  const [ activeTab, setActiveTab ] = useState(1);
  const toggleTab = (i) => {
    setActiveTab(i);
  }

  return (
    <div id="aboutme" className='aboutme'>
      <div className='aboutme-container flex justify-between flex-wrap'>
        <div className='aboutme-container-picture basis-[35%]'>
          <img src={Pic_1} alt="profile-picture" />
        </div>
        <div className='aboutme-container-info basis-[60%]'>
          <h1>About Me</h1>
          <p className='description'>
            My name is Siriprapa Gerads or Nia,
            I started learning to code about 10 months ago  
            before that, I was learning UX/UI design, which gave me a good advantage when I shifted into frontend development. 
            I've been fully focused on improving my skills in HTML, CSS, JavaScript, and React. I enjoy bringing designs to life in the browser and I'm excited to keep growing as a frontend developer
          </p>
          <br />
          {/* tab-title */}
          <div className='flex'>
            <p 
              className={activeTab === 1 ? "tab active-tab" : "tab"}
              onClick={() => toggleTab(1)}>
                Skills
            </p>
            <p 
              className={activeTab === 2 ? "tab active-tab" : "tab"}
              onClick={() => toggleTab(2)}>
                Certificate
            </p>
            <p 
              className={activeTab === 3 ? "tab active-tab" : "tab"}
              onClick={() => toggleTab(3)}>
              Education
            </p>
          </div>
          {/* tab-content */}
          {/* skills */}
          <div 
            className={activeTab === 1 ? "content active-content" : "content"}
            onClick={() => toggleTab(1)}>
              <ul className='skills'>
                <li><FaHtml5 size={20}/> HTML</li>
                <li><IoLogoCss3 size={20}/> CSS</li>
                <li><FaJs size={20}/> JavaScript</li>
                <li><FaReact size={20}/> React</li>
                <li><RiTailwindCssFill size={20}/> Tailwindcss</li>
                <li className='text-xs'>* Right now, I'm learning more about Git and GitHub, and I'm planning to dive into Next.js in the future.</li>
              </ul>
          </div>
          {/* certificates */}
          <div  
            className={activeTab === 2 ? "content certificate active-content" : "content certificate"}
            onClick={() => toggleTab(2)}>
              <ul>
                <li><strong>FreeCodeCamp</strong>  Responsive Web Design
                  <CertificateModal title="Responsive Web Design" image={certi1} />
                </li>
                <br />
                <li><strong>FreeCodeCamp</strong> Front End Development Libraries
                  <CertificateModal title="Front End Development Libraries" image={certi2}/>
                </li>
                <br />
                <li><strong>GreatStack</strong> JavaScript Fundamentals
                  <CertificateModal title="JavaScript Fundamentals" image={certi3} />
                </li><br />
                <li><strong>GreatStack</strong> React Hooks
                  <CertificateModal title="React Hooks" image={certi4} />
                </li>
                <br />
              </ul>
          </div>
          {/* education */}
          <div 
            className={activeTab === 3 ? "content active-content" : "content"}
            onClick={() => toggleTab(3)}>
              <ul>
                <li><span>2022</span><br /><strong> Mae Fah Luang University</strong> Bachelor of Business Administration (Tourism Management)</li><br />
                <br />
                <li><span>2024</span><br /><strong> Mydemy</strong> Fundamental UX/UI</li><br />
                <br />
                <li><span>2024-2025</span><br /><strong> FreeCodeCamp</strong> Responsive Design, Front End libraries, and JavaScript</li><br />
                <br />
              </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
