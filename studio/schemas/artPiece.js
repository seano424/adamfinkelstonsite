import MediaAssetSource from 'part:sanity-plugin-media/asset-source'

export default {
  name: 'artPiece',
  title: 'Art Piece',
  type: 'image',
  options: {
    hotspot: true,
    sources: [MediaAssetSource],
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
  ],
}
