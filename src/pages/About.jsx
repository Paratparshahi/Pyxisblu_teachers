import React from 'react'
import './About.css'
export const About = () => {
  return (
    <div className='Logo-outer' >
    <div className='Logo'>
      <img src='https://pyxisblu.com/wp-content/uploads/2023/03/PyxisBlu-Logo-1.png'></img>

      <p>Our feet are on the ground, but our ambitions are above the clouds.</p>
    </div>
    <br />
    <br />
    <form action="">
    <div className='form-outer'>
  <span class='blocking-span'>
    <input type="text" class="inputText" required/>
    <span class="floating-label">Username</span>
  </span>
</div>
      <div className='form-outer'>
      <span class='blocking-span'>
    <input type="text" class="inputText" required/>
    <span class="floating-label">Password</span>
  </span>
      </div>
      <br />
      <div>
        <button>Sign In</button>
      </div>
    </form>
    <br />
  </div>
  )
}
