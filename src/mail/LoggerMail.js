import AbstractMail from "./AbstractMail.js";

export default class LoggerMail extends AbstractMail {
  async sendMail({to, from, subject, body}) {
    console.log(`LoggerMail: Enviando e-mail: from=${JSON.stringify(from)}, to=${JSON.stringify(to)}, subject=${subject}, body=${body}`)
  }
}