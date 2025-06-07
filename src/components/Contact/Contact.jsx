import  './Contact.css'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaGithub, FaCodepen } from "react-icons/fa";

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9a15cfbf-46df-4039-b2c7-a441e1162f28");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div className='contact' id='contact'>
      {/* title */}
      <div className='text-center'>
        <h1>Contact</h1>
      </div>
      {/* contact-container */}
      <div className='contact-container flex justify-between flex-wrap'>
        {/* left */}
        <div className='contact-left basis-[35%]'>
          <h2>Let's work together!</h2>
          <p>I'm currently looking for job opportunities. feel free to leave a message or contact me anytime. — I'd love to hear from you!</p>
          {/* contact-details */}
          <div className='contact-detail'>
            <br />
            <div><MdEmail size={25}/>siriprapagerads@gmail.com</div>
            <br />
            <div><FaPhoneAlt size={25}/>+66 646980830</div>
            <br />
            <div><FaGithub size={25}/><a href="https://github.com/cilinia-gerads" target="_blank">cilinia-gerads</a></div>
            <br />
            <div><FaCodepen size={25}/><a href="https://codepen.io/Cili_Nia/pens/public" target='_blank'>@Cili_Nia</a></div>
          </div>
        </div>
        {/* right */}
        <form onSubmit={onSubmit} className='contact-right basis-[55%]'>
          <label htmlFor="">Your Name</label><br />
          <input type="text" placeholder='enter your name...' name='name' /><br />
          <label htmlFor="">Your Email</label><br />
          <input type="email" placeholder='your email...' name='email' /><br />
          <label htmlFor="">Write your message here</label><br />
          <textarea name="message" rows={5} placeholder='enter your message...'></textarea><br />
          <button className="btn-submit" type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
