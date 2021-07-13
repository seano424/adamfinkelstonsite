import MediaAssetSource from "part:sanity-plugin-media/asset-source";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "artworkImages",
  title: "Artwork Images",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      id: uuidv4(),
      options: {
        hotspot: true,
        sources: [MediaAssetSource],
      },
    },
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
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
    {
      name: "currency",
      title: "Currency",
      description: "Keep this 'usd' for the purposes of this tutorial",
      type: "string",
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
    {
      name: "quantity",
      title: "Quantity",
      description:
        "Optional. If you don't set this, it imagines the quantity for this is unlimited.",
      type: "number",
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
  ],
  initialValue: {
    currency: "usd",
  },
};
