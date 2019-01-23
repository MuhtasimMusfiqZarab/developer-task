import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID c86c867234566a2462ef2c006f2b7d4357570a54822d2026c235627d27a7b315"
  }
});

/********************************************************** */
// The Previous long version in App js
// onSearchSubmit = async term => {
//     const response = await axios.get("https://api.unsplash.com/search/photos", {
//         params: { query: term },
//         headers: {
//             Authorization:
//                 "Client-ID c86c867234566a2462ef2c006f2b7d4357570a54822d2026c235627d27a7b315"
//         }
//     });
//     this.setState({ images: response.data.results });
// };
