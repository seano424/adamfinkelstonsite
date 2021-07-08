import { BsImage } from 'react-icons/bs'

export default {
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  icon: BsImage,
  fields: [
    {
      name: 'name',
      title: "Your name or the header you'd like",
      description: 'This is the landing page information.',
      type: 'string',
    },
    {
      name: 'color',
      title: 'Header Color',
      type: 'colorPicker',
    },
    {
      title: 'Image Gallery',
      name: 'artPieces',
      description:
        'You can drag and drop images here before clicking the add item button or alternately you can add one image at a time by clicking the add item button. Each one recieves an image and optionally an image title & description. The captions can be added after you drag and drop by individually selecting each image. Clicking select in the add image module will give you a dashboard.',
      type: 'array',
      of: [{ type: 'artPiece' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'main_image',
    },
  },
}
