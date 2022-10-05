export default class AbstractMail {
  async sendMail({ to, from, subject, body }) {
    throw new Error('Not implemented')
  }
}