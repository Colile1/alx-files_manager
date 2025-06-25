import redisClient from '../utils/redis';
import dbClient from '../utils/db';

class AppController {
  // Return Redis and DB status as JSON
  static getStatus(request, response) {
    const status = {
      redis: redisClient.isAlive(),
      db: dbClient.isAlive(),
    };
    response.status(200).send(status);
  }

  // Return user and file counts as JSON
  static async getStats(request, response) {
    const stats = {
      users: await dbClient.nbUsers(),
      files: await dbClient.nbFiles(),
    };
    response.status(200).send(stats);
  }
}

export default AppController;
