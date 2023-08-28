import 'boxicons'

const Contact = ()=>{
  const openTelegram = ()=>{
    window.open("https://t.me/NAlM3", "_blank")
  }
  const openGithub = ()=>{window.open('https://github.com/FollowNaim','_blank')}
  const openMail = ()=>{window.open('mailto:naimxf@gmail.com','_blank')}
  return(
    <div className="mt-[-5%] sm:mt-2 p-8 max-w-[500px] mx-auto">
    <div className="bg-stone-900 flex flex-col justify-center items-center p-4 rounded gap-4">
    <div>
    <h1 className="text-white text-2xl font-bold text-center mb-4">Connect With Naim</h1>
    </div>
    <div className="flex gap-4">
    
    <i class='bx bxl-telegram text-5xl text-white border-[1px] rounded bx-burst' onClick={openTelegram}></i>
    <i class='bx bxl-github text-5xl text-white border-[1px] rounded bx-fade-right' onClick={openGithub}></i>
    </div>
   <i class='bx bxs-envelope text-5xl text-white border-[1px] rounded bx-tada' onClick={openMail}></i>
    </div>
    </div>
    )
}
export default Contact;