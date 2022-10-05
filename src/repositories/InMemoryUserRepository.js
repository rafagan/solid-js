import AbstractUserRepository from "./AbstractUserRepository.js";

export default class InMemoryUserRepository extends AbstractUserRepository {
  constructor() {
    super();
    this.users = {}
  }

  async findByEmail(email) {
    return this.users[email]
  }

  async save(user) {
    this.users[user.id] = user
  }
}