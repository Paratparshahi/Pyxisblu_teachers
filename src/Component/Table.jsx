import React from 'react';
import './Table.css'
function Table() {
  return (
    <div className='Table-outer'>
    <table >
      <thead>
        <tr>
          <th>S.No</th>
          <th>Class</th>
          <th>Time</th>
          <th>Status</th>
         
        </tr>
      </thead>
      <tbody>
        {/* Render table rows and data dynamically here */}
        <tr>
       
        <td>
        Column 1 
        </td>
        <td>
          <a href="#demo-modal">Column 1 </a>
        </td>
        <td>
        Column 1 
        </td>
        <td>
        Column 1 
        </td>
        </tr>
        <tr>
        
        <td>
        Column 1 
        </td>
        <td>
        <a href="#demo-modal">Column 1 </a>
        </td>
        <td>
        Column 1 
        </td>
        <td>
        Column 1 
        </td>
        </tr>
        <tr>
       
        <td>
        Column 1 
        </td>
        <td>
        <a href="#demo-modal">Column 1 </a>
        </td>
        <td>
        Column 1 
        </td>
        <td>
        Column 1 
        </td>
        </tr>
        <tr>
        
        <td>
        Column 1 
        </td>
        <td>
        <a href="#demo-modal">Column 1 </a> 
        </td>
        <td>
        Column 1 
        </td>
        <td>
        Column 1 
        </td>
        </tr>
        <tr>
        
        <td>
        Column 1 
        </td>
        <td>
        <a href="#demo-modal">Column 1 </a>
        </td>
        <td>
        Column 1 
        </td>
        <td>
        Column 1 
        </td>
        </tr>
        <tr>
       
        <td>
        Column 1 
        </td>
        <td>
        <a href="#demo-modal">Column 1 </a>
        </td>
        <td>
        Column 1 
        </td>
        <td>
        Column 1 
        </td>
        </tr>
        <tr>
        
        <td>
        Column 1 
        </td>
        <td>
        <a href="#demo-modal">Column 1 </a>
        </td>
        <td>
        Column 1 
        </td>
        <td>
        Column 1 
        </td>
        </tr>
      </tbody>
    </table>
    <div id="demo-modal" class="modal">
    <div class="modal__content">
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

        <div class="modal__footer">
            Made with <i class="fa fa-heart"></i>, by <a href="https://twitter.com/denicmarko" target="_blank">@denicmarko</a>
        </div>

        <a href="#" class="modal__close">&times;</a>
    </div>
</div>
    </div>
  );
}

export default Table;
