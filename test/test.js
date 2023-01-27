const express = require("express");
const app = express();
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
let should = chai.should();
const { describe, it } = require("mocha");
require("dotenv").config();

const api = `http://localhost:${process.env.port}/api`;
chai.use(chaiHttp);

describe("Get requests for dog cards", () => {
  it("returns 200 status code for success get all dog cards", (done) => {
    chai
      .request(api)
      .get("/cards")
      .end((error, response) => {
        const responseBody = response.body;
        expect(responseBody.status).to.equal(200);
        done();
      });
  });

  it("returns an array with 0 or more objects", (done) => {
    chai
      .request(api)
      .get("/cards")
      .end((error, response) => {
        const responseBody = response.body;
        responseBody.data.should.be.a("array");
        done();
      });
  });
});

describe("Create dog card", () => {
  it("returns 201 status code for success creation", (done) => {
    let newCard = {
      title: "Doggie test",
      image: "images/dog3.jpeg",
      link: "About Dog test",
      desciption: "Demo desciption about Dog test",
    };
    chai
      .request(api)
      .post("/cards")
      .send(newCard)
      .end((error, response, body) => {
        const responseBody = response.body;
        expect(responseBody.status).to.equal(201);
        done();
      });
  });

  it("returns 400 status code for incomplete card", (done) => {
    let newCard = {
      image: "images/dog3.jpeg",
      link: "About Dog test",
      desciption: "Demo desciption about Dog test",
    };
    chai
      .request(api)
      .post("/cards")
      .send(newCard)
      .end((error, response, body) => {
        const responseBody = response.body;
        expect(responseBody.status).to.equal(400);
        done();
      });
  });
});
