import { v4 } from 'uuid'

export default class User {
  constructor(name = '', email = '', password = '', id = null) {
    this.id = id || v4()
    this.name = name
    this.email = email
    this.password = password
  }
}