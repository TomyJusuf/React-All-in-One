const Image = ({ image, alt }) => {
  return (
    <>
      <img src={image} width={300} alt={alt} object-fit="cover" />
    </>
  )
}
export default Image
