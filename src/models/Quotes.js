import mongoose from 'mongoose'
import shortid from 'shortid'

const { Schema, model } = mongoose

const QuoteSchema = new Schema({
  // @internal
  nameID: { type: String, default: shortid.generate },
  // The quotation text
  name: { type: String, required: true },
  // The full display name of the quote's author
  meaning: { type: String, required: true },
  // The author `slug` is a unique ID derived from the author's name.
  imageName: { type: String, required: true },
  // @deprecated in favor of authorSlug
  gender: { type: String, required: true },
  // An array of tags for this quote
  list: { type: [String], required: true },
  // The length of the quote (total number of characters)
  isFeatured: { type: Boolean, required: true },
  // Timestamp when item was added
  category: { type: String },
})

// To support full text search
QuoteSchema.index({ content: 'text', author: 'text' }, { name: 'textIndex' })

export default model('Quote', QuoteSchema)
