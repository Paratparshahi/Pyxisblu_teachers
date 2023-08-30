import React from 'react'
import './Product.css'
export const Product = () => {
  return (
    <div style={{padding:"20px"}}>
     <div style={{background: '#f8f9fa'
    ,border: "1px solid #dee2e6",
    padding: "1rem",
    borderRadius: "3px"}}>
       <h4 style={{font:"21px -apple-system",    margin: "0px 0px 14px",
       display:'flex',
       justifyContent:'left',
    fontFamily: "inherit;",
    fontWeight: "bold"
    ,lineHeight: "1.2;",
    color: "inherit;"}}>Teacher Profile</h4>
     </div>
     <br />
     <br />
     <div className='card' style={{padding:"16px",margin:"0px 0px 16px",borderRadius: "2px",
    background: '#ffffff',
    padding: '16px',
    boxSizing: 'border-box',
   
}}>
    <div style={{width:'100%',marginBottom:'1rem',display:"flex",justifyContent:'left'}}>
       <img src="https://tse1.mm.bing.net/th?id=OIP.IZLLSP-RG2LYdFvM_Pl1mQHaHa&pid=Api&P=0&h=180" alt="" style={{width:"5%",borderRadius:"50%"}}/>
    </div>
    <div  className='Details'>
    <div class="inner-card">
                                                <label>UserId</label><br/>
                                                <label> <b>2d263c72-0717-4acf-9a30-4e1f84a993b1</b></label>
                                        </div>
                                        <div class="inner-card">
                                                <label>UserName</label><br/>
                                                <label>
                                                        <b>pratik.kumar</b></label>
                                        </div>

                                        <div class="inner-card">
                                                <label>FirstName</label><br/>
                                                <label>
                                                        <b>Pratik</b></label>
                                        </div>

                                        <div class="inner-card">
                                                <label>MiddleName</label><br/>
                                                <label>
                                                        <b>Kumar</b></label>
                                        </div>
                                        <div class="inner-card">
                                                <label>LastName</label><br/>
                                                <label>
                                                        <b>Shahi</b></label>
                                        </div>
                                        <div class="inner-card">
                                                <label>DisplayName</label><br/>
                                                <label>
                                                        <b>Pratik</b></label>
                                        </div>
                                        <div class="inner-card">
                                                <label>Email</label><br/>
                                                <label> <b>pratikkumarshahi@gmail.com</b></label>
                                        </div>
                                        <div class="inner-card">
                                                <label>EmailConfirmed</label><br/>
                                                <label>
                                                        <b>pratikkumarshahi@gmail.com</b></label>
                                        </div>
                                        <div class="inner-card">
                                                <label>PhoneNumber</label><br/>
                                                <label>
                                                        <b>8434914725</b></label>
                                        </div>
                                        <div class="inner-card">
                                                <label>PhoneNumberConfirmed</label><br/>
                                                <label>
                                                        <b>8434914725</b></label>
                                        </div>
                                        <div class="inner-card">
                                                <label>LockoutEnabled</label><br/>
                                                <label>
                                                        <b>Yes</b></label>
                                        </div>
                                        <div class="inner-card">
                                                <label>AccessFailedCount</label><br/>
                                                <label>
                                                        <b>0</b></label>
                                        </div>
                                        <div class="inner-card">
                                                <label>Roles</label><br/>
                                                <label> <b>Administration, Student</b></label>
                                        </div>

    </div>
     </div>
    </div>
  )
}
