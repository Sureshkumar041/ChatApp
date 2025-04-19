// const {mongoose} = require("mongoose");

// const fileSchema = mongoose.Schema(
//   {
//     filename: { type: String },
//     path: { type: String },
//     mimetype: { type: String },
//   },
//   { timestamps: true, versionKey: false }
// );

// const File = mongoose.model("File", fileSchema, "File");
// module.exports = File;

const { Schema, model, Document } = require("mongoose");

const fileSchema = new Schema(
  {
    filename: { type: String },
    path: { type: String },
    mimetype: { type: String },
  },
  { timestamps: true, versionKey: false }
);

const File = model("File", fileSchema, "File");
module.exports = File;
