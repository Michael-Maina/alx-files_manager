import sha1 from 'sha1';
import dbClient from '../utils/db';

class UsersController {
  static async postNew(request, response) {
    const { email, password } = request.body;

    if (!email) {
      response.status(400).send({ error: 'Missing email' });
    }

    if (!password) {
      response.status(400).send({ error: 'Missing password' });
    }

    const user = await dbClient.users.find({ email });
    if (user) {
      response.status(400).send({ error: 'Already exist' });
    }

    const newUser = await dbClient.users.insertOne({ email, password: sha1(password) });
    response.status(201).send({ id: newUser.insertedId, email });
  }
}

module.exports = UsersController;
