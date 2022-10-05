import LoggerUserRepository from "../../repositories/LoggerUserRepository.js";
import LoggerMail from "../../mail/LoggerMail.js";
import CreateUserUseCase from "./CreateUserUseCase.js";
import CreateUserController from "./CreateUserController.js";

export default new CreateUserController(
  new CreateUserUseCase(
    new LoggerUserRepository(),
    new LoggerMail()
  )
)