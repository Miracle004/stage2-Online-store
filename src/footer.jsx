

function Footer(){
    const tiktokIcon = './src/assets/tiktok-icon.png'
    const instagramIcon = './src/assets/instagram-icon.png'
    const facbookIcon = './src/assets/facebook-icon.png'
    return(
        <footer>
            <h2>TechDepot</h2>
            <hr />
            <div className="additionalInfo">
                <ul>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Our Team</li>
                    <li>Partners</li>
                </ul>
                <ul>
                    <li>Company</li>
                    <li>Contact</li>
                    <li>Client</li>
                    <li>Employment</li>
                </ul>
                <ul>
                    <li>Enquiries</li>
                    <li>Prices</li>
                    <li>Warranty</li>
                    <li>Customer Service</li>
                </ul>
                <ul>
                    <li>Follow Us</li>
                    <li>@techdepot</li>
                    <li>
                        <img src={tiktokIcon} alt="" />
                        <img src={instagramIcon} alt="" />
                        <img src={facbookIcon} alt="" />
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
