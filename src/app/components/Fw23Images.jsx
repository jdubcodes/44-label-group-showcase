import Image from 'next/image'
import fw23 from '@/config/fw23'

export default function Fw23Images() {
  const imgWidth = 300
  const imgHeight = 100

  return (
    <div className=''>
      <div className='grid grid-cols-10 grid-rows-3 align-middle h-screen w-full pt-11 px-8 pb-8 absolute gap-2 top-0 left-0'>
        <div className='overflow-hidden pos-1'>
          <div className='bg-[url("/fw23/FW23_LOOKBOOK_01_1.webp")] image hover:movement'></div>
        </div>
        <div className='overflow-hidden pos-2'>
          <div className='bg-[url("/fw23/FW23_LOOKBOOK_01_2.webp")] image hover:movement'></div>
        </div>
        <div className='overflow-hidden pos-9'>
          <div className='bg-[url("/fw23/FW23_LOOKBOOK_03_1.webp")] image hover:movement'></div>
        </div>
        <div className='overflow-hidden pos-5'>
          <div className='bg-[url("/fw23/FW23_LOOKBOOK_04_1.webp")] image hover:movement'></div>
        </div>
        <div className='overflow-hidden pos-17'>
          <div className='bg-[url("/fw23/FW23_LOOKBOOK_05_1.webp")] image hover:movement'></div>
        </div>
        <div className='overflow-hidden pos-12'>
          <div className='bg-[url("/fw23/FW23_LOOKBOOK_06_1.webp")] image hover:movement'></div>
        </div>
        <div className='overflow-hidden pos-4'>
          <div className='bg-[url("/fw23/FW23_LOOKBOOK_07_1.webp")] image hover:movement'></div>
        </div>
        <div className='overflow-hidden pos-3'>
          <div className='bg-[url("/fw23/FW23_LOOKBOOK_09_1.webp")] image hover:movement'></div>
        </div>
        <div className='overflow-hidden pos-18'>
          <div className='bg-[url("/fw23/FW23_LOOKBOOK_12_1.webp")] image hover:movement'></div>
        </div>
        <div className='overflow-hidden pos-7'>
          <div className='bg-[url("/fw23/FW23_LOOKBOOK_13_1.webp")] image hover:movement'></div>
        </div>
        <div className='overflow-hidden pos-10'>
          <div className='bg-[url("/fw23/FW23_LOOKBOOK_15_1.webp")] image hover:movement'></div>
        </div>
        <div className='overflow-hidden pos-8'>
          <div className='bg-[url("/fw23/FW23_LOOKBOOK_16_1.webp")] image hover:movement'></div>
        </div>
        <div className='overflow-hidden pos-15'>
          <div className='bg-[url("/fw23/FW23_LOOKBOOK_18_1.webp")] image hover:movement'></div>
        </div>
        <div className='overflow-hidden pos-16'>
          <div className='bg-[url("/fw23/FW23_LOOKBOOK_20_1.webp")] image hover:movement'></div>
        </div>
        <div className='overflow-hidden pos-11'>
          <div className='bg-[url("/fw23/FW23_LOOKBOOK_21_1.webp")] image hover:movement'></div>
        </div>
        <div className='overflow-hidden pos-6'>
          <div className='bg-[url("/fw23/FW23_LOOKBOOK_24_1.webp")] image hover:movement'></div>
        </div>
        <div className='overflow-hidden pos-13'>
          <div className='bg-[url("/fw23/FW23_LOOKBOOK_26_2.webp")] image hover:movement'></div>
        </div>
        <div className='overflow-hidden pos-14'>
          <div className='bg-[url("/fw23/FW23_LOOKBOOK_34_1.webp")] image hover:movement'></div>
        </div>
      </div>
    </div>
  )
}
