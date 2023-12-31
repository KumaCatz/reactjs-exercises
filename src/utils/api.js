import axios from "axios"

const api = axios.create({
  baseURL: 'http://localhost:2500'
})

export const GET = async (url) => {
  try {
    const resp = await api.get(url)
    return resp.data
  } catch(error) {
    alert (error.response.data.message)
  }
}
export const POST = async (url, body) => {
  try {
    const resp = await api.get(url, body)
    return resp.data
  } catch(error) {
    alert (error.response.data.message)
  }
}