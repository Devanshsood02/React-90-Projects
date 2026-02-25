import React from 'react'

const ContactForm = () => {
  return (
    <div>
        <form>
            <input type="text" placeholder='name' /> <br />
            <input type="email" placeholder='Email' /> <br />
            <textarea placeholder='message'></textarea>
        </form><br />
        <button type='submit'>Submit</button>
    </div>
  )
}

export default ContactForm