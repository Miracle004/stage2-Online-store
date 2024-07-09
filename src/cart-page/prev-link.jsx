import returnArrow from '../assets/back-arrow.png'
import {Link} from 'react-router-dom'

function Prev(){
    return(
        <section id="prev-nav">
            <Link to='/'><img src={returnArrow} alt="back-arrow"/></Link>
            <p>Back</p>
        </section>
    )
}

export default Prev