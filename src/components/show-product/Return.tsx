import { useNavigate } from 'react-router-dom'
export const Return = () => {

  const navigate  = useNavigate();

  return (
    <div  className=' text-textGrayDark pt-6'>
      <span onClick={ () => navigate(-1) } className='hover:cursor-pointer hover:underline' >Go Back</span>
      
      </div>
  )
}
 