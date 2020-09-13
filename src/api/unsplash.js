import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID ckQZPBWECMwxhVnFik9z975gbwNkXyw9LWQd_qHxxOc",
  },
});
