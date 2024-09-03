# BlogApp

A simple blogging application built with Node.js, Express, and MongoDB. This application allows users to create posts, comment on them, and like/unlike posts.

## Features

- Create, read, update, and delete blog posts.
- Add comments to posts.
- Like and unlike posts.
- RESTful API structure.

## Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing blog data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **dotenv**: Module to load environment variables from a `.env` file.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/BlogApp.git
   cd BlogApp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```plaintext
   DATABASE_URL=mongodb://your_mongo_db_url
   PORT=8000
   ```

4. Start the application:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:8000` to see the application in action.

## API Endpoints

### Posts
- `GET /api/v1/posts`: Retrieve all posts.
- `POST /api/v1/posts/create`: Create a new post.

### Comments
- `POST /api/v1/comments/create`: Create a new comment on a post.

### Likes
- `POST /api/v1/likes/create`: Like a post.
- `POST /api/v1/likes/unlike`: Unlike a post.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by various blogging platforms.
- Thanks to the open-source community for their contributions.