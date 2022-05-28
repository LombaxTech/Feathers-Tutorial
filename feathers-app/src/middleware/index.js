// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  // Add your custom middleware here. Remember that
  // in Express, the order matters.

  app.get("/get-rand-int", async (req, res) => {
    const randInt = Math.floor(Math.random() * 11);

    res.json(randInt);
  });
};
