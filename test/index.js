const require("assert");
const hikeConfig = require("@gohike.nl/react-redirection")["hikeConfig"]
const Redirect = require("@gohike.nl/react-redirection").default;
const redirection = new Redirect();
const fetch = require("isomorphic-unfetch");
describe("hikeConfig", () => {
  it("should check if config exists", () => {
    assert(hikeConfig);
  });
  it("should check if it can fetch wordpress routes", () => {
    assert(hikeConfig.wordpress.routes);
  });
  it("should find redirection route", () => {
    assert(hikeConfig.wordpress.routes.redirection, "✅");
  });
});

describe("Redirect Class", () => {
  it("should create a new class", () => {
    assert(redirection);
  });
  it("should create a new redirection object", () => {
    assert(redirection.redirection);
  });
  it("should be able to fetch back-end data", () => {
    fetch(hikeConfig.wordpress.routes.redirection);
  });
});

