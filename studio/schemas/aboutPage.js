import { MdInsertEmoticon } from 'react-icons/md'

export default {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  icon: MdInsertEmoticon,
  fields: [
    {
      name: 'name',
      title: "Your name or the header you'd like",
      description:
        'This is the about page information. You can add your name, a description, a main image which will show up on the about page, and you can add more images of you and they can be used in other parts of your website.',
      type: 'string',
    },
    {
      name: 'main_image',
      description: 'This is the image that will be seen in your about page.',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'body',
      description:
        'Ok so a little funky thing going on here is that if you want to center content make it into a h3 header... It is just a way that I got around allowing some stuff to be centered and some stuff not to. The H3 text looks large in here but in the site it will be the same size as a normal text.',
      title: 'Body',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'main_image',
    },
  },
}
