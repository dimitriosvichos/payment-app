// Note: Left Side Menu Component for Dashboard
import Button from './ui/button';
import '../assets/LeftSideMenu.css';
import { useState } from 'react';
import MastercardImage from '../assets/mastercard.png';

export default function LeftSideMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className={`h-screen bg-white border-r overflow-hidden ${isMenuOpen ? 'sidebar' : 'sidebar-closed'}`}>

      {/* einai to logo kai to close icon */}
      <div className={`flex items-center justify-around  p-4 h-[100px]`}>

        <div className={`company-logo w-[190px] ${isMenuOpen ? 'fade-in' : 'fade-out'}`}>
          <img src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Company logo"/>
        </div>


        <Button size="icon" className={`w-[40px] h-[35px] rounded-[10px]`} variant="outline" onClick={toggleMenu}>
          <svg
            className={`h-5 w-[2.3rem]`}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </Button>
      </div>


      {/* einai to account balance container me leitourgika icons */}
      <div className={`account-balance flex flex-col justify-center pt-6 ${isMenuOpen ? 'show-menu-content' : 'hidden-menu-content' }`} >

        <div className="account-balance-title px-6">
          <p className="font-bold text-black">Account Balance</p>
        </div>

        <div className="account-balance-total pb-6 px-6">
          <p className="font-bold py-2"><span className='text-3xl'>$1,234,560</span><span className='text-xl text-gray-400'>.25</span></p>
          <span className="text-gray-600">-$1,060.00 in pending transanctions</span>
        </div>

        <div className="break"></div>

        <div className="account-balance-icons py-2">
          <div className="flex justify-around p-4">

            <div className="flex flex-col items-center">
              <Button className="w-12 h-12 rounded-full border-0 bg-white" variant="outline">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16v-6m0 0V8m0 8h8m-8 0H4" />
                </svg>
              </Button>

              <span className='pt-1 text-[15px]'>Send</span>
            </div>
            
            <div className="flex flex-col items-center">
              <Button className="w-12 h-12 rounded-full border-0 bg-white " variant="outline">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 12h14M18 9l3 3-3 3M21 12H3m9 3V9" />
                </svg>
              </Button>

              <span className='pt-1 text-[15px]'>Withdraw</span>
            </div>
            
            <div className="flex flex-col items-center">
              <Button className="w-12 h-12 rounded-full border-0 bg-white" variant="outline">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 17l6-6-6-6m14 12V5H6v14h12z" />
                </svg>

              </Button>

              <span className='pt-1 text-[15px]'>Statement</span>
            </div>
          </div>
        </div>
      </div>


      {/* einai to kommati me ta cards */}
      <div className={`cards-container ${isMenuOpen ? 'transition opacity-1 delay-700' : 'opacity-0' }`}>
        <div className="flex justify-between px-6 pb-4 pt-2">

          <div className="cards-title">
            <p className="font-bold text-black">Account Cards</p>
            <span className="text-gray-600 font-bold text-[13px]">For your company everyday expenses</span>
          </div>

          <div className="add-new-button">
            <Button size="icon" className="add-new-button w-[35px] h-[35px] rounded-full" variant="outline">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </Button>
          </div>
        </div>

        <div className="cards-content px-6">
          <div className="cards-content-item first-card flex justify-between p-5 items-end">
            <div className="cards-content-item-left">
              <p className='text-sm text-slate-300'>Virtual Card</p>
              <p className="font-bold text-white">**** 1234</p>
            </div>

            <div className="cards-content-item-right">
              <img src={MastercardImage} alt="mastercard logo" />
            </div>
          </div>

          <div className="cards-content-item second-card flex justify-between p-5 items-end">
            <div className="cards-content-item-left">
              <p className='text-sm text-slate-300'>Physical Card</p>
              <p className="font-bold text-white">**** 5678</p>
            </div>

            <div className="cards-content-item-right">
              <img src={MastercardImage} alt="mastercard logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
