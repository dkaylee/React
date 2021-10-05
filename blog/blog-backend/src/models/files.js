import mongoose, { Schema } from 'mongoose';

const filesSchema = new Schema({
  filename: String,
  filesize: String,
  filepath: String,
  type: String,

  post: {
    _id: mongoose.Types.ObjectId,
  },
});

const Files = mongoose.model('Files', filesSchema);

export default Files;
