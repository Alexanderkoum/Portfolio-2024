import { SliderButton } from '@typeform/embed-react'
import ContactIcon from "../assets/paper-plane-regular.svg"

const Form = () => {
  return (
    <>
    <SliderButton id="K7x3jbo1" className="flex gap-2 items-center justify-center text-white nav-link">
      <span className='hidden sm:inline'>Contact</span> <img src={ContactIcon} alt="" />
    </SliderButton>
    </>
  )
}

export default Form;