const AddContact = () => {
  return (
    <div className="w-[320px] h-[250px] bg-white border border-white rounded-[4px] shadow-md">
      <div className="pl-[25px] h-[60px] border-b border-[#eee] flex items-center">
        <h1>Добавить контакт</h1>
      </div>
      <form className="gap-[10px] grid mt-[20px] px-[25px]">
        <input
          className="pl-[15px] h-[40px] rounded-[4px] border border-[#eee] placeholder:text-[#a8a8a8]"
          type="text"
          placeholder="Имя"
        />
        <input
          className="pl-[15px] h-[40px] rounded-[4px] border border-[#eee] placeholder:text-[#a8a8a8]"
          type="tel"
          placeholder="Телефон"
        />
      </form>
      <div className="flex justify-end pr-[25px]">
        <button
          className="mt-[15px] w-[97px] h-[40px] rounded-[4px] bg-[#4d59a1] text-white hover:-translate-y-1 active:bg-[#626fc1] transition ease-in-out"
          type="submit">
          Добавить
        </button>
      </div>
    </div>
  )
}

export default AddContact
