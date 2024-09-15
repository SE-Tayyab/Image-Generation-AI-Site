import mongoose from "mongoose";

// Define a schema for Post documents
const postSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,  // Corrected 'require' to 'required' for consistency
    },
    prompt: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    }
});

// Create a model from the schema, representing the 'posts' collection
const Post = mongoose.model('Post', postSchema);

// Export the Post model for use in other parts of the application
export default Post;
    