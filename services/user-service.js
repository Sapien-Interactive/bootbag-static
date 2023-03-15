import { PRE_REGISTRATION_ENDPOINT } from '../constants'

export class UserService {
  static async register(email) {
    try {
      if (email.trim() !== '') {
        const payload = { email }
        return await this.sendRequest(
          PRE_REGISTRATION_ENDPOINT,
          JSON.stringify(payload)
        )
      }
    } catch (e) {
      throw e
    }
  }

  static async sendRequest(uri, payload) {
    const response = await fetch(uri, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: payload
    })
    return {
      status: response.status,
      data: response.json()
    }
  }
}
