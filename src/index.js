import "./scss/styles.scss";
import "@babel/polyfill";

import View from "./js/view";
import Model from "./js/model";
import Controller from "./js/controller";

import "./loading-bar/loading-bar";


const view = new View();
const model = new Model();

const controller = new Controller(model, view);

