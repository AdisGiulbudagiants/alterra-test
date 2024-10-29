import Contact from "./Contact"

const ContactsList = () => {
  return (
    <div className="w-[320px] min-h-[250px] bg-white border border-white rounded-[4px] shadow-md">
      <div className="pl-[25px] h-[60px] border-b border-[#eee] flex items-center">
        <h1>Список контактов</h1>
      </div>
      <div>
        <Contact />
      </div>
    </div>
  )
}

export default ContactsList
