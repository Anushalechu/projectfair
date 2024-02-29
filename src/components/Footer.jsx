import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
        <div className='d-flex justify-content-center align-item-center mt-5 bg-success p-3'>
          <div className='footer d-flex align-item-center justify-content-evenly'>
            <div className='website' style={{ width: "400px" }}>
              <h5><i class="fa-solid fa-video text-warning me-2"></i>mediaplayer</h5>
              <p style={{textAlign:"justify", color:"white"}} >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi mollitia sequi, nulla laborum eaque nesciunt praesentium sint ducimus quaerat? Mollitia debitis amet asperiores, illum dolore beatae tenetur! Ipsum, hic commodi?</p>
            </div>
            <div className="link d-flex flex-column ms-5">
                 <h4>Links</h4>
                 <Link to='/' style={{textDecoration:"none",color:"white"}}>Landing Page</Link>
                 <Link to='/home' style={{textDecoration:"none",color:"white"}}>Home Page</Link>
                 <Link to='/watch' style={{textDecoration:"none",color:"white"}}>Watchhistory</Link>
            </div>
          </div>
          <div className="guides d-flex flex-column ms-5">
                 <h4>Guides</h4>
                 <Link to='http://react.dev/' target='_blank' style={{textDecoration:"none",color:"white"}}>React</Link>
                 <Link to='https://react-bootstarp.netlify.app/' target='_blank' style={{textDecoration:"none",color:"white"}}>React Bootstarp</Link>
                 <Link to='https://bootswatch.com/' target='_blank' style={{textDecoration:"none",color:"white"}}>Boots watch</Link>
            </div>
            <div className='contactus ms-5'>
               <h4>contact us</h4>
               <div className='d-flex'>
                   <input type="text" className='form-control' placeholder='enter your email' />
                   <button className='btn btn-warning ms-3'> subscribe</button>
               </div>
               <div className='d-flex justify-content-evenly'>
               <Link className='mt-3'><i class="fa-brands fa-facebook fa-2x"></i> </Link>
               <Link className='mt-3'><i class="fa-brands fa-instagram fa-2x"></i></Link>
               <Link className='mt-3'><i class="fa-brands fa-twitter fa-2x"></i></Link>
               <Link className='mt-3'><i class="fa-brands fa-whatsapp fa-2x"></i></Link>
               </div>
            </div>
        </div>
        <p className='ms-5 text-center'>copyright &copy; 2023 media player. Project fair Built with react</p>
        </>
        
      )
}

export default Footer