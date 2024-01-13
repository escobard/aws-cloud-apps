// TODO - get rid of this file as it is not working as expected with Jest + npm module project
// necessary to allow testing globally of jest snapshots
const React = require('react');
const {
  act,
  render,
  fireEvent,
  cleanup,
  waitForElement,
  waitForElementToBeRemoved,
  screen,
  renderHook,
  waitFor
} = require("@testing-library/react");
const axios = require("axios");

jest.mock("axios");

global.React = React;
global.screen = screen;
global.render = render;
global.fireEvent = fireEvent;
global.cleanup = cleanup;
global.renderHook = renderHook;
global.waitFor = waitFor;
global.waitForElement = waitForElement;
global.waitForElementToBeRemoved = waitForElementToBeRemoved;
global.act = act;
global.actHook = actHook;
global.mockApi = axios;

afterEach(() => {
  jest.clearAllMocks();
});
