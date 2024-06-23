const DivImages = ({ className, ImageSRC, ImageALT}) => {
  return (
    <div className={className}>
        <img src={ImageSRC} alt={ImageALT}/>
    </div>
  )
}

export default DivImages