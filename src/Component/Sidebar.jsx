import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import './Sidebar.css'
const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboardinginnes",
            icon:<FaTh/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt/>
        },
        {
            path:"/analytics",
            name:"Analytics",
            icon:<FaRegChartBar/>
        },
        {
            path:"/comment",
            name:"Comment",
            icon:<FaCommentAlt/>
        },
        {
            path:"/product",
            name:"Product",
            icon:<FaShoppingBag/>
        },
        {
            path:"/productList",
            name:"Product List",
            icon:<FaThList/>
        }
    ]
    return (
        <div className="container" style={{display:'flex'}}>
           <div style={{width: isOpen ? "auto" : "50px"}} className="sidebar">
               <div className="top_section">
                   <div style={{marginLeft: isOpen ? "50px" : "0px",justifyContent:'end',minWidth:"auto"}}  className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
                   <div style={{margin:"auto"}}>
                   <img src="http://pluspng.com/img-png/user-png-icon-young-user-icon-2400.png"  alt=""  style={{width:'50px',margin:"auto",display: isOpen ? "block" : "none"}}/>
                   <span style={{display: isOpen ? "block" : "none"}}>Pratik Kumar</span>
                   <span style={{display: isOpen ? "block" : "none"}}>Administration</span>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}
                           </div>
                       </NavLink>
                   ))
               }
           </div>
           <main style={{width:"100%",textAlign:'center'}}>{children}</main>
        </div>
    );
};

export default Sidebar;