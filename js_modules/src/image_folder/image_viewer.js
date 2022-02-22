// import big from '../assets/big.jpg'
import small from '../assets/small.jpg'
import '../styles/image_viewer.css'

// const bigImage = document.createElement('img')
// bigImage.src = big
// document.body.appendChild(bigImage)

export default () => {
  const image = document.createElement('img')

  image.src = small
  image.width = 300

  document.body.appendChild(image)
}
