const { ARController, ARToolkit } = require('artoolkit5-js')
const { createCanvas, loadImage } = require('canvas')

const canvas = createCanvas(640, 480)

const options = { canvas: canvas, orientation: 'landscape' }

loadImage('data/img.jpg').then((image) => {
  console.log('Image loaded: ', image)
  ARController.initWithImage(image, './data/camera_para.dat', options)
    .catch(err => {
      console.log('Something went wrong', err)
    })
})
