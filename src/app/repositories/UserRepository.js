import User from '../models/User';

class UserRepository {
  async create(user) {
    const createdUser = await User.create(user);
    return createdUser;
  }

  async findByEmail(email) {
    const user = await User.findOne({ where: { email } });
    return user;
  }
}

export default new UserRepository();
