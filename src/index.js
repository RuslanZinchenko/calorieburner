import "./scss/styles.scss";
import "@babel/polyfill";

import "./progress-bar/loading-bar";
//import "./loading-bar/loading-bar";

import View from "./js/view";
import Model from "./js/model";
import Controller from "./js/controller";
import array from "./js/filter";

import "./js/filter";
import "./js/array";
import "./js/slider";

import "./js/progress-bar.js";
import "./js/progress-bar1.js";

const view = new View();
const model = new Model();

const controller = new Controller(model, view);
