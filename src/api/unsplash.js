import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID kfQfyADgD0U3W6Rwb-wFWUxMec8TGQv-zBxj4IvlCXk",
  },
});
