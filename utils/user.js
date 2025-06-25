import redisClient from './redis';
import dbClient from './db';

// User utilities module
const userUtils = {
  // Get user id and redis key from request
  async getUserIdAndKey(request) {
    const obj = { userId: null, key: null };
    const xToken = request.header('X-Token');
    if (!xToken) return obj;
    obj.key = `auth_${xToken}`;
    obj.userId = await redisClient.get(obj.key);
    return obj;
  },

  // Get user from database
  async getUser(query) {
    const user = await dbClient.usersCollection.findOne(query);
    return user;
  },
};

export default userUtils;
