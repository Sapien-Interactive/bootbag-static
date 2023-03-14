export class UserService {
  static async register(email) {
    try {
      if (email.trim() !== '') {
        const payload = { email }
        const uri = `${process.env.FUNCTIONS_BASE_URL}/api-http-public-preRegistration`
        return await this.sendRequest(uri, JSON.stringify(payload))
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
