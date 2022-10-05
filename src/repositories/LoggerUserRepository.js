import AbstractUserRepository from "./AbstractUserRepository.js";

export default class LoggerUserRepository extends AbstractUserRepository {
  async findByEmail(email) {
    console.log(`LoggerUserRepository: procurando usuário por e-mail ${email}`)
    return null
  }

  async save(user) {
    console.log(`LoggerUserRepository: salvando usuário: ${JSON.stringify(user)}`)
  }
}