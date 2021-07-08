import { MdContacts } from 'react-icons/md'

export default {
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  icon: MdContacts,
  fields: [
    {
      name: 'name',
      title: "Your name or the header you'd like",
      description:
        'This is the about page information. You can add your name, a description, a main image which will show up on the about page, and you can add more images of you and they can be used in other parts of your website.',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      description:
        'Ok so a little funky thing going on here is that if you want to center content make it into a h3 header... It is just a way that I got around allowing some stuff to be centered and some stuff not to. The H3 text looks large in here but in the site it will be the same size as a normal text.',
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
