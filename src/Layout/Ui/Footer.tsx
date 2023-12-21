import React from 'react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const [t] = useTranslation()
  return (
    <div className='Footer'>
     <div className="d-flex flex-column h-100">
   <footer className="w-100 py-4 flex-shrink-0">
    <div className="container py-4">
      <div className="row gy-4 gx-5">
        <div className="col-lg-4 col-md-6">
          <h5 className="h1 text-white">FB.</h5>
          <p className="small text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <p className="small text-muted mb-0">
            © Copyrights. All rights reserved.{" "}
            <a className="text-primary" href="#">
              Bootstrapious.com
            </a>
          </p>
        </div>
      
        <div className="col-lg-2 col-md-6">
          <h5 className="text-white mb-3">Quick links</h5>
          <ul className="list-unstyled text-muted">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Get started</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-6">
          <h5 className="text-white mb-3">Newsletter</h5>
          <p className="small text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt.
          </p>
         
        </div>
      </div>
    </div>
  </footer>
</div>

    </div>
  )
}

export default Footer