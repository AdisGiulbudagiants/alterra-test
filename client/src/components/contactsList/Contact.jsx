import { RxCross2 } from "react-icons/rx"

const Contact = () => {
  return (
    <div className="h-[70px] px-[25px] flex flex-col justify-center border-b border-[#eee] last:border-0 hover:bg-gray-200 transition ease-in-out">
      <div className="flex items-center">
        <p className="mr-[5px]">Имя</p>
        <RxCross2 />
      </div>
      <p className="text-[#858585] text-[13px]">Номер</p>
    </div>
  )
}

export default Contact
