const express = require("express");
const Twig = require("twig");
const axios = require("axios");

const PORT = process.env.PORT || 3000;
const API_URL = "https://jsonplaceholder.typicode.com/posts";

const app = express();

const api = {
  async getPosts() {
    try {
      const { data } = await axios.get(API_URL);
      return data;
    } catch (err) {
      console.log(err);
      return [];
    }
  }
};

const view = {
  render(template, data) {
    return new Promise((resolve, reject) => {
      Twig.renderFile(template, data, (err, html) => {
        if (err) {
          return reject(err);
        }
        return resolve(html);
      });
    });
  }
};

app.get("/", async (req, res) => {
  const posts = await api.getPosts();
  const html = await view.render("app.twig.html", { posts });
  return res.send(html);
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
