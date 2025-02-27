import Image from 'next/image'
import React from 'react'

const Section1 = () => {
    return (
        <div className='w-full min-h-screen flex sm:flex-col sm:gap-[6vw] gap-[1vw] items-center p-[2.5vw] sm:pt-[20vw] sm:px-[4vw] pt-[5.5vw]'>
            <div className='sm:w-full w-[50%] sm:h-fit h-[85vh] sm:bg-transparent  bg-zinc-100/40 rounded-2xl sm:p-0 p-[2.5vw] flex flex-col justify-between'>
                <div className='w-full'>
                    <h1 className='sm:text-[10vw] text-[5vw] capitalize leading-none'>Contact us</h1>
                    <p className='sm:text-[4.5vw] sm:w-full text-[1vw] w-[80%] sm:my-[4.5vw] my-[1vw] leading-1'>Our secure system ensures a smooth and hassle-free booking experience. Don’t wait for your dental needs—book your appointment online today.</p>
                </div>
                <form className='w-full mt-[1.5vw] sm:mt-[0] flex flex-col sm:gap-[3vw] gap-[1vw] sm:text-[3.5vw]'>
                    <div className='w-full flex'>
                        <input className='w-full p-[1.5vw] sm:py-[2.5vw] sm:px-[2vw] py-[.6vw] border border-black/20 rounded-md bg-transparent outline-none' type="text" placeholder='Name' />
                    </div>
                    <div className='w-full flex'>
                        <input className='w-full p-[1.5vw] sm:py-[2.5vw] sm:px-[2vw] py-[.6vw] border border-black/20 rounded-md bg-transparent outline-none' type="text" placeholder='Phone Number' />
                    </div>
                    <div className='w-full flex'>
                        <input className='w-full p-[1.5vw] sm:py-[2.5vw] sm:px-[2vw] py-[.6vw] border border-black/20 rounded-md bg-transparent outline-none' type="text" placeholder='E-Mail Address' />
                    </div>
                    <div className='w-full flex'>
                        <textarea className='w-full resize-none sm:h-[18vw] h-[7vw] p-[1.5vw] sm:py-[2.5vw] sm:px-[2vw] py-[.6vw] border border-black/20 rounded-md bg-transparent outline-none' placeholder='Write additional information'></textarea>
                    </div>
                    <div className='w-full flex items-center justify-center sm:h-[7vw] h-[4vw] sm:mt-[2vw]'>
                        <div className='text-white bg-black w-full text-center capitalize px-[1.5vw] transition-all duration-500 cursor-pointer sm:py-[4vw] py-[.6vw] rounded-full font-semibold'>
                            <h4 className='sm:text-[3.5vw] text-[1.1vw] font-normal'>Submit</h4>
                        </div>
                    </div>
                </form>
            </div>
            <div className='sm:w-full w-[50%] sm:h-fit h-[85vh] sm:gap-[6vw] gap-[1vw]  rounded-2xl flex flex-col sm:pt-[4vw]'>
                <div className='w-full h-[45%] rounded-2xl overflow-hidden'>
                    <Image className='w-full h-full object-cover' width={1000} height={1000} src="/unit2.jpg" alt="unit-image" />
                </div>
                <div className='w-full h-[55%] sm:h-[75%]  rounded-2xl sm:bg-transparent bg-zinc-100/40 flex  flex-wrap sm:p-0 p-[2.5vw] justify-between'>
                    <div className='w-[49%] sm:w-full h-fit sm:mb-[4vw]'>
                        <h4 className='sm:text-[5vw] text-[1vw] font-semibold'>Address</h4>
                        <p className='sm:text-[4.5vw] text-[1.1vw] sm:w-[80%] w-[98%] mt-[.2vw] text-black/70'><span className='font-semibold'>Unit 1</span> : Plot No. 12, Shed No. 9A, Sidco Industrial Estate, Vichoor, Manali New Town, Chennai - 600103, Tamilnadu, INDIA</p>
                    </div>
                    <div className='w-[49%] sm:w-full h-fit sm:mb-[4vw]'>
                        <h4 className='sm:text-[5vw] text-[1vw] font-semibold sm:hidden'><br /></h4>
                        <p className='sm:text-[4.5vw] text-[1.1vw] sm:w-[80%] w-[98%] mt-[.2vw] text-black/70'><span className='font-semibold'>Unit 2</span> : Plot No. 8-7, 8-8, 8-17, 8-18, APIIC Industrial Park, Attivaram Village, Ozili Mandal, Tirupati District, Andhra Pradesh -524 421.
                        </p>
                    </div>
                    <div className='w-[49%] h-fit'>
                        <h4 className='sm:text-[5vw] text-[1vw] font-semibold'>Contact Times</h4>
                        <p className='sm:text-[4.5vw] text-[1.1vw] sm:w-[80%] w-[60%] mt-[.2vw] text-black/70'>Monday to Saturday 10:00 am to 6:00 pm ,
                            Sunday Closed</p>
                    </div>
                    <div className='w-[49%] h-fit'>
                        <h4 className='sm:text-[5vw] text-[1vw] font-semibold'>E-Mail Adress</h4>
                        <p className='sm:text-[4.5vw] text-[1.1vw] sm:w-[80%] w-[60%] mt-[.2vw] text-black/70'>Info@allastir.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1