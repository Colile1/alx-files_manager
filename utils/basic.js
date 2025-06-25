import { ObjectId } from 'mongodb';

// Basic utilities module
const basicUtils = {
  // Check if Id is valid for Mongo
  isValidId(id) {
    try {
      ObjectId(id);
    } catch (err) {
      return false;
    }
    return true;
  },
};

export default basicUtils;
