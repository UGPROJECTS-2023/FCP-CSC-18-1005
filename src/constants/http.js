import axios from 'axios'

function HttpRequests() {
    this.post = async (url, data, headers) => {
        return await axios.post(url, data, headers)
    }
    this.put = async (url, data, headers) => {
        return await axios.put(url, data, headers)
    }
    this.delete = async (url, data, headers) => {
        return await axios.delete(url, data, headers)
    }
    this.get = async (url, data, headers) => {
        return await axios.get(url, data, headers)
    }
}

const http = new HttpRequests()
export { http }
