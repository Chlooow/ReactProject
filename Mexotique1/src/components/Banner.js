import '../styles/Banner.css'
import logo from '../assets/flag-400.png'

function Banner() {
    const title = 'Epayi ya Makoundou'
    return (
        <div className='lmj-banner'>
            <img src={logo} alt='Epayi ya Makoundou' className='lmj-logo' />
            <h1 className='lmj-tilte'> {title} </h1>
        </div>
    )
}

export default Banner;