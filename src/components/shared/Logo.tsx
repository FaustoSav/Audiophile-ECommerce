import { images } from '../images/Images'
import { NavLink } from 'react-router-dom'

export const Logo = () => {
  return (
    <div className='ml-12 mr-6 hover:cursor-pointer md:ml-0'>
      <NavLink to='/'>
        <img className=' md:w-[200px] lg:w-[250px]' src={images.heroLogo} alt="img-logo" />
      </NavLink>
    </div>
  )
}
