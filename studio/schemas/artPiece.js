import MediaAssetSource from "part:sanity-plugin-media/asset-source";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "artPiece",
  title: "Art Piece",
  type: "image",
  id: uuidv4(),
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
        "For now, price is in dollars, ie 50 = $50 | 500 = $500 | 1000 = $1000",
      type: "number",
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
    {
      name: "quantity",
      title: "Quantity",
      type: "number",
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
    {
      title: "Thumbnail examples of this image",
      name: "thumbnails",
      description:
        "Optional. If you would like to display more about how this image looks to the viewer. They will show up as little thumbnails under the main image and the user can click on them to see other perspectives of this image.",
      type: "array",
      of: [{ type: "image" }],
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
  ],
  initialValue: {
    currency: "usd",
  },
};
