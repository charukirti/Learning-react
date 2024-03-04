function ProfileCard() {
  const imageUrl = './src/assets/charukirti.png'

  const handleClick = (e) => (e.target.style.display = 'none')
  return <img onClick={(e) => handleClick(e)} src={imageUrl} alt="" />
}

export default ProfileCard
