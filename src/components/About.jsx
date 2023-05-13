
import React from 'react';
import robot from '../assets/robots.jpg'
import ec from '../assets/ec.jpg'
import is from '../assets/is.jpg'
import mbc from '../assets/mbc.png'
import {HiArrowNarrowRight} from 'react-icons/hi'



const About = () => {
  return (
    <div name='about' className='w-full  bg-[#ffffff] text-black '>
      <div className='flex flex-col justify-center items-center w-full '>
        <div className='max-w-[1000px] w-full grid grid-cols-2 '>
          <div className='text-2xl sm: pb-20'>
            Let's Collaborate
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>

          {/*---------AI+RPA is what we do ----------------*/}

         
          <div className='text-center sm:text-left '>
          <h1 className='text-3xl sm:text-4xl md:text-6xl font-serif'>
              AI + RPA is what we do
            </h1><br/>
            <p><h6 className='text-2x-l  sm:text-base md:text-3xl '>
              Future-Proof your business. Drive efficiency, profitability and deliver on customer experience
              </h6></p>
          </div>

            <div>
            <img src={robot} alt='RPA+AI' class="my-image" style={{ width: '1000px' }} />
            </div>
            <div>
            <a className="inline-flex items-center">
              <div className="flex items-center space-x-1 font-bold text-lg hover:text-blue-700">
                <p className='font-serif'>AI + RPA Automation</p>
              <div className="transition-opacity duration-300 hover:opacity-30 opacity-0 animate-pulse ml-2">
                <HiArrowNarrowRight className="h-6 w-6" />
              </div>
              </div>
            </a>
          </div><div></div>
          {/*--------------Make bolder Choices---------------- */}
          
          <div className='text-center sm:text-left '>
          <p><h1 className='text-3xl sm:text-4xl md:text-6xl font-serif '>
            Make Bolder Choices
            </h1></p><br/>
            <p><h6 className='text-2x-l  sm:text-base md:text-3xl '>
              Digital focused strategies to realize market-changing ideas
              </h6></p>
          </div>

            <div>
            <img src={mbc} alt='Make Bolder Choices' class="my-image" style={{ width: '1000px' }} />
            </div>
            <div>
            <a  className="inline-flex items-center">
              <div className="flex items-center space-x-1 font-bold text-lg hover:text-blue-700">
              <p className='font-serif'>Build Better Apps</p>
              <div className="transition-all duration-300 hover:opacity-30 opacity-0 animate-pulse ml-2">
                <HiArrowNarrowRight className="h-6 w-6" />
              </div>
              </div>
            </a>
          </div><div></div>
          {/*--------------Innovate with speed--------------- */}
          <div className='text-center sm:text-left '>
          <p><h1 className='text-3xl sm:text-4xl md:text-6xl font-serif '>
              Innovate with Speed
            </h1></p><br/>
            <p><h6 className='text-2x-l  sm:text-base md:text-3xl '>
            Create higher quality software, deliver on customer expectations and business goals
              </h6></p>
          </div>

            <div>
            <img src={is} alt='Innovate with Speed' class="my-image" style={{ width: '1000px' }} />
            </div>
            <div>
            <a className="inline-flex items-center">
              <div className="flex items-center space-x-1 font-bold text-lg hover:text-blue-700">
                <p className='font-serif'>DevOps</p>
              <div className="transition-all duration-300 hover:opacity-100 opacity-0 animate-pulse ml-2">
                <HiArrowNarrowRight className="h-6 w-6" />
              </div>
              </div>
            </a>
          </div><div></div>
          {/*--------------Embrace Cloud------------------------- */}
          <div className='text-center sm:text-left '>
          <p><h1 className='text-3xl sm:text-4xl md:text-6xl font-serif '>
              Embrace Cloud
            </h1></p><br/>
            <p><h6 className='text-2x-l  sm:text-base md:text-3xl '>
            With Cloud-First accelerate innovation and optimize performance
              </h6></p>
          </div>

            <div>
            <img src={ec} alt='Embrace Cloud' class="my-image" style={{ width: '1000px' }} />
            </div>
            <div>
            <a  className="inline-flex items-center">
              <div className="flex items-center space-x-1 font-bold text-lg hover:text-blue-700">
              <p className='font-serif'>Cloud Services</p>
              <div className="transition-all duration-300 hover:opacity-100 opacity-0 animate-pulse ml-2">
                <HiArrowNarrowRight className="h-6 w-6" />
              </div>
              </div>
            </a>
          </div>
        </div> 
      </div>
    </div>
    
  );
};

export default About;