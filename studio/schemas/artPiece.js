import MediaAssetSource from "part:sanity-plugin-media/asset-source";

export default {
  name: "artPiece",
  title: "Art Piece",
  type: "image",
  options: {
    hotspot: true,
    sources: [MediaAssetSource],
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
    {
      name: "price",
      title: "Price",
      description:
        "For now, add cents as zeroes, ie 500 = $5 | 5000 = $50 | 10000 = $100",
      type: "number",
    },
    {
      name: "quantity",
      title: "Quantity",
      description:
        "Optional. If you don't set this, it imagines the quantity for this is unlimited.",
      type: "number",
    },
  ],
  initialValue: {
    currency: "usd",
  },
};
