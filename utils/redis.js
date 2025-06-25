import redis from 'redis';
import { promisify } from 'util';

// Redis service operations class
class RedisClient {
  constructor() {
    this.client = redis.createClient();
    this.getAsync = promisify(this.client.get).bind(this.client);

    this.client.on('error', (error) => {
      console.log(`Redis client not connected to the server: ${error.message}`);
    });

    this.client.on('connect', () => {
      // console.log('Redis client connected to the server');
    });
  }

  // Check if Redis connection is alive
  isAlive() {
    return this.client.connected;
  }

  // Get value for key in redis
  async get(key) {
    const value = await this.getAsync(key);
    return value;
  }

  // Set key in redis with TTL
  async set(key, value, duration) {
    this.client.setex(key, duration, value);
  }

  // Delete key in redis
  async del(key) {
    this.client.del(key);
  }
}

const redisClient = new RedisClient();

export default redisClient;
