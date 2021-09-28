import axios from "axios";


export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID V2JquMb87JDc7Fo_wIgMLCLRA6WNHLFWeo2EBAKhHHM",
  }
});