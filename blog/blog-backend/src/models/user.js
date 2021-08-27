import mongoose, { Schema } from 'mongoose';
// 해시만드는 함수와 해시를 검증하는 함수 만들기
import bcrypt from 'bcrypt';
// 로그인을 위한 토큰 발급하기
import jwt from 'jsonwebtoken';

const UserSchema = new Schema({
    username: String,
    hashedPassword: String,
});

// 인스턴스 메서드는 화살표 함수가 아닌 function / this는 문서 인스턴스를 가리킴
UserSchema.methods.setPassword = async function(password) {
    const hash = await bcrypt.hash(password, 10);
    this.hashedPassword = hash;
};

UserSchema.methods.checkPassword = async function(password) {
    const result = await bcrypt.compare(password, this.hashedPassword);
    return result; // true / false
};

UserSchema.methods.serialize = function() {
    const data = this.toJSON();
    delete data.hashedPassword;
    return data;
};

// 스태틱 함수 만들기 / this는 모델을 가리킴 여기서는 User임
UserSchema.statics.findByUsername = function(username) {
    return this.findOne({ username });
};

UserSchema.methods.generateToken = function() {
    const token = jwt.sign(
        // 첫번째 파라미터에는 토큰 안에 집어넣고 싶은 데이터를 넣기
        {
            _id: this.id,
            username: this.username,
        },
        process.env.JWT_SECRET, // 두번째 파라미터에는 JWT 암호를 넣기
        {
            expiresIn: '3d', // 3일 동안 유효함
        },
    );
    return token;
}

const User = mongoose.model('User', UserSchema);

export default User;