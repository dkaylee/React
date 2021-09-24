import mongoose, { Schema } from 'mongoose';

const uploadSchema = new Schema({
  filename: String,
  filesize: String,
  filepath: String,
  type: String,
  publishedDate: {
    type: Date,
    default: Date.now, // 현재 날짜를 기본 값으로 지정
  },
  post: {
    _id: mongoose.Types.ObjectId,
  },
});

const Upload = mongoose.model('Upload', uploadSchema);

export default Upload;
