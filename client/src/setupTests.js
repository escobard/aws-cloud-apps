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
  waitForDomChange,
  screen,
  renderHook,
  waitFor
} = require("@testing-library/react");
import { MockedProvider } from "@apollo/client/testing";

global.React = React;
global.screen = screen;
global.render = render;
global.fireEvent = fireEvent;
global.cleanup = cleanup;
global.renderHook = renderHook;
global.waitFor = waitFor;
global.waitForElement = waitForElement;
global.waitForDomChange = waitForDomChange;
global.waitForElementToBeRemoved = waitForElementToBeRemoved;
global.act = act;
global.MockedProvider = MockedProvider

afterEach(() => {
  jest.clearAllMocks();
});
