import axios from "axios";

export default {
  // Gets all food specials 
  getfoodSpecials: function () {
    return axios.get("/api/foodspecials");
  },
  // Gets the food special with the given id
  getfoodSpecial: function (id) {
    return axios.get("/api/foodspecials/" + id);
  },
  // Deletes the food special with the given id
  deletefoodSpecial: function (id) {
    return axios.delete("/api/foodspecials/" + id);
  },
  // Gets all drink specials 
  getdrinkSpecials: function () {
    return axios.get("/api/drinkspecials");
  },
  // Gets the drink special with the given id
  getdrinkSpecial: function (id) {
    return axios.get("/api/drinkspecials/" + id);
  },
  // Deletes the food special with the given id
  deletedrinkSpecial: function (id) {
    return axios.delete("/api/drinkspecials/" + id);
  },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};
