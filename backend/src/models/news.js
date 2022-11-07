import mongoose from 'mongoose';

const { Schema } = mongoose;

const NewsSchema = new Schema({
    title: String,
    link: String,
    description: String,
    pubDate: Date,
});

const News = mongoose.model('News', NewsSchema);
export default News;
