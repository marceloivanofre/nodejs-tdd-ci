import UserRepository from '../repositories/UserRepository';

class UserController {
  async store(req, res) {
    try {
      const userExists = await UserRepository.findByEmail(req.body.email);

      if (userExists) {
        return res.status(404).json({ error: 'Email is already in use' });
      }

      const user = await UserRepository.create(req.body);

      return res.status(201).json({ id: user.id });
    } catch (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default new UserController();
