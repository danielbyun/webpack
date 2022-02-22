const button = document.createElement('button')
button.innerText = 'Click me'
button.onclick = () => {
  // render image
  import('./image_folder/image_viewer.js').then((module) => {
    // after module has been loaded
    console.log('module', module)
  })
}

document.body.appendChild(button)
