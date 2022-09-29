import axios from 'axios'
import { APP_SERVER_URL } from 'src/api/api-url'
import { saveToStorage } from 'src/services/auth/authHelper'
import { IAuthResponse } from 'src/store/user/types'

export const AuthService = {
  async login(email: string, password: string) {
    const { data } = await axios.get<IAuthResponse>(`${APP_SERVER_URL}/user`)

    // Fake
    const isCorrectUserData = email === 'test@takeoff.ru' && password === 'testpass'

    if (!isCorrectUserData) {
      throw 'Incorrect email or password'
    }

    if (data.accessToken && isCorrectUserData) {
      saveToStorage(data)
    }

    return data
  },
}
