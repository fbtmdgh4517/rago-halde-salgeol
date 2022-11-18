import mongoose from 'mongoose';

const { Schema } = mongoose;

const InterestsSchema = new Schema({
    coinName: String,
    // user: {
    //     type: mongoose.Types.ObjectId,
    //     ref: 'User',
    //     required: true,
    // },
});

const Interests = mongoose.model('Interests', InterestsSchema);
export default Interests;
