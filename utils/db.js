import { MongoClient } from 'mongodb';

const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || 27017;
const DB_DATABASE = process.env.DB_DATABASE || 'files_manager';
const url = `mongodb://${DB_HOST}:${DB_PORT}`;

// Mongo service operations class
class DBClient {
  constructor() {
    MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
      if (!err) {
        // console.log('Connected successfully to server');
        this.db = client.db(DB_DATABASE);
        this.usersCollection = this.db.collection('users');
        this.filesCollection = this.db.collection('files');
      } else {
        console.log(err.message);
        this.db = false;
      }
    });
  }

  // Check if Mongo connection is alive
  isAlive() {
    return Boolean(this.db);
  }

  // Return number of users in collection
  async nbUsers() {
    const numberOfUsers = this.usersCollection.countDocuments();
    return numberOfUsers;
  }

  // Return number of files in collection
  async nbFiles() {
    const numberOfFiles = this.filesCollection.countDocuments();
    return numberOfFiles;
  }
}

const dbClient = new DBClient();

export default dbClient;
