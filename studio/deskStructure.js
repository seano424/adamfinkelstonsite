// /deskStructure.js
import S from "@sanity/desk-tool/structure-builder";

const hiddenDocTypes = (listItem) =>
  ![
    "artPiece",
    "artworkImages",
    "artwork",
    "mediaTag",
    "category",
    "vendor",
    "merch",
    "product",
    "blockContent",
    // "ad",
    "localeText",
    "localeBlockContent",
    "localeString",
    "productVariant",
  ].includes(listItem.getId());

export default () =>
  S.list()
    .title("Adam Finkelston's Studio")
    .items([...S.documentTypeListItems().filter(hiddenDocTypes)]);
