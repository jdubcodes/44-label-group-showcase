import fw23 from '@/config/fw23'
import ImgDiv from './common/ImgDiv'

export default function Fw23Images() {
  return (
    <div className='h-screen w-full grid grid-cols-10 grid-rows-6 gap-1 align-middle p-10 absolute top-0 left-0'>
      {fw23.map((img, index) => (
        <ImgDiv path={img.path} pos={img.pos} key={index} />
      ))}
      <p className='absolute text-black -rotate-90 -left-[3.75rem] bottom-[6.5rem] z-10 text-sm font-semibold'>
        FW23 | BLAME SOCIETY
      </p>
    </div>
  )
}
