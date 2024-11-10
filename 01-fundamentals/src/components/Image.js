const Image = ({ img }) => {
  return (
    <>
      <img src={img.img} width={300} alt={img.title} object-fit="cover" />
    </>
  )
}
export default Image
