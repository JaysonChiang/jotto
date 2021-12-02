import { mount } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import App from './App';

// activate global mock to make sure getSecretWord doesn't make network call
import { getSecretWord as mockGetSecretWord } from './actions';
jest.mock('./actions');

/**
 * Setup funtion for App Component
 * @returns {Wrapper}
 */
const setup = () => {
  // use mount, because useEffect not called on `shallow`
  // https://github.com/airbn/enzyme/issues/2086
  return mount(<App />);
};

test('renders withow error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.exists()).toBe(true);
});

describe('get secret word', () => {
  beforeEach(() => {
    // clear the mock calls from previous tests
    mockGetSecretWord.mockClear();
  });

  test('get secret word on app mount', () => {
    const wrapper = setup();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });

  test('getSecretWord does not run on app update', () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();

    // using setProps because wrapper.update() doesn't trigger useEffect
    // https://github.com/enzymejs/enzyme/issue/2254
    wrapper.setProps();

    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
});
