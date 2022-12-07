import React from 'react'
import playStore from "../../../images/playstore.png"
import appStore from "../../../images/Appstore.png"
import "./Footer.css"

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download APP for IOS and Android mobile phone</p>
        <img src={playStore} alt="PlayStore" />
        <img src={appStore} alt="AppStore" />
      </div>
      <div className="midFooter">
        <h1>House Of Fitness</h1>
        <p>High Quality is our First Priority</p>
        <p>Developed with ❤️ by - &copy; Savan Patel</p>
      </div>
      <div className="rightFooter">
        <h4>Follow Me</h4>
        <a target="blank" href="https://github.com/Patel-Savan">GitHub</a>
        <a target="blank" href="https://www.facebook.com/profile.php?id=100009297031652&mibextid=ZbWKwL">Facebook</a>
        <a target="blank" href="https://www.linkedin.com/in/savan-patel-6a0b17217/">LinkedIn</a>
      </div>
    </footer>
  )
}

export default Footer
