import React from 'react'

export const Comment = () => {
  return (
    <div>
      <div style={{background: '#f8f9fa'
    ,border: "1px solid #dee2e6",
    padding: "1rem",
    borderRadius: "3px",width:"90%",margin:'auto'}}>
       <h4 style={{font:"21px -apple-system",    margin: "0px 0px 14px",
       display:'flex',
       justifyContent:'left',
    fontFamily: "inherit;",
    fontWeight: "bold"
    ,lineHeight: "1.2;",
    color: "inherit;"}}>Event List</h4>
     </div>
     <br />
     <br />
      <div className='Table-outer'>
      
    <table >
      <thead>
        <tr>
          <th>S.No</th>
          <th>Event</th>
          <th>Date</th>
          
        </tr>
      </thead>
      <tbody>
        {/* Render table rows and data dynamically here */}
        <tr>
        
        <td>
        Column 1 
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
        Column 1 
        </td>
        <td>
        Column 1 
        </td>
        </tr>
      </tbody>
    </table>
    </div>
    </div>
  )
}
