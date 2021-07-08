import { IoIosColorPalette } from 'react-icons/io'

export default {
  title: 'Art',
  name: 'art',
  type: 'document',
  icon: IoIosColorPalette,
  fields: [
    // ... lots of fields, probably ...
    {
      title: 'Gallery Title',
      name: 'title',
      description:
        "Here you are able to add artwork for a gallery. The gallery can receive a title, a description, a feature image, and as many pieces as you'd like. Each piece can recieve a title/caption. Everything automatically saves even if you hit the X button or leave the page. Everything can be edited, changed, or deleted as you see fit. Changes will be reflected almost immediately give or take 5 minutes. Images can be dragged and dropped to save time.",
      type: 'string',
    },
    {
      title: 'Gallery Description',
      name: 'description',
      description: 'This is an optional field to describe the gallery.',
      type: 'blockContent',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'This is required! Just press generate :) Slugs cannot have white spaces so if you want to put your own slug in just make sure to add hyphens or these things: - i.e. i-am-an-example-of-a-slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'category',
      title: 'Art Category',
      description: 'Photographs or Prints',
      type: 'string',
      options: {
        list: [
          { title: 'Prints', value: 'prints' },
          { title: 'Photographs', value: 'photographs' },
        ],
        layout: 'dropdown',
      },
    },
    {
      title: 'Feature Image',
      description: 'This is the feature image for the gallery',
      name: 'featureImage',
      type: 'image',
      options: {
        hotspot: true,
      },
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
      title: 'title',
      category: 'category',
      // subtitle: `Directed by: ${director ? director : "unknown"}`,
      media: 'featureImage',
    },
    prepare({ title, category, media }) {
      return {
        title,
        subtitle: `Category: ${category}`,
        media,
      }
    },
  },
}
