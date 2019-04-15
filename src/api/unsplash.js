import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 756b74e860246332a22f8d7eb680a8526d4bdf21a2ffc0a16243072c63d47f85"
  }
});
