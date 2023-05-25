import React from 'react'

export default function Contact() {
  return (
    <div className='min-vh'>
      <div className='main'>
        <h1>Contact Me</h1>
        <p className='justify'>
          I'm available to assist you on your projects and also bringing your 
          ideas to life.
          If you have any request or enquiries, I'm just an email away. click the
          button below to email me.
        </p>
        <a href="mailto:arinzecyril123@gmail.com">
          <button className="email-btn fa-regular fa-envelope" >  
            <span className="mgn-lft">Email</span>
          </button>
        </a>
      </div>
    </div>
  )
}
