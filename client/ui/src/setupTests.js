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
  screen
} = require("@testing-library/react");
const  { act: actHook, renderHook } = require("@testing-library/react-hooks");
const axios = require("axios");

jest.mock("axios");

global.React = React;
global.screen = screen;
global.render = render;
global.fireEvent = fireEvent;
global.cleanup = cleanup;
global.renderHook = renderHook;
global.waitForElement = waitForElement;
global.waitForElementToBeRemoved = waitForElementToBeRemoved;
global.act = act;
global.actHook = actHook;
global.mockApi = axios;

afterEach(() => {
  jest.clearAllMocks();
});
