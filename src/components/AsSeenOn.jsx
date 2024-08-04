import '../css/as-seen-on.css'

import TiktokLarge from '../media/tiktok-large.webp'
import InstagramLarge from '../media/instagram-large.webp'
import FacebookLarge from '../media/facebook-large.webp'

const AsSeenOn = () => {
    return (
        <div className="seen-on">
            <div className="seen-on-inner">
                <h2>As seen on...</h2>
                <img alt="" src={InstagramLarge} style={{marginTop: "15px"}} draggable="false" />
                <img alt="" src={TiktokLarge} style={{marginBottom: "5px", height: "45px"}} draggable="false" />
                <img alt="" src={FacebookLarge}  draggable="false" />
            </div>
        </div>
    )
}

export default AsSeenOn