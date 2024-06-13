function ImgDiv({ path, pos }) {
  return (
    <div className={`${pos} overflow-hidden`}>
      <div className='image' style={{ backgroundImage: `url(${path})` }}></div>
    </div>
  )
}

export default ImgDiv
