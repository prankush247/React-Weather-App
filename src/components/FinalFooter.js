import React from 'react'

export default function FinalFooter(props) {
  return (
    <div>
      <footer id={`${props.mode === 'light' ? 'footerL' : 'footerD'}`}>
      <div className="f">&copy; Copyright - All Rights Reserved</div>
      <div className="f social-links">
        <a target='_blank' href="https://www.linkedin.com/in/prankush-billare-5b8285252/" id="linkedin">
          <i className="fab fa-linkedin"></i>
        </a>
        <a target='_blank' href="https://github.com/prankush247" id="github">
          <i className="fab fa-github"></i>
        </a>
        <a target='_blank' href="https://www.instagram.com/prankush247/" id="instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a target='_blank' href="https://twitter.com/prankvoid" id="twitter">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </footer>
    </div>
  )
}
