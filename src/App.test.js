import { mount } from 'enzyme';
import { findByTestAttr ,storeFactory} from '../test/testUtils';
import App from './App';
import { Provider } from 'react-redux';

// activate global mock to make sure getSecretWord doesn't make network call
import { getSecretWord as mockGetSecretWord } from './actions';
jest.mock('./actions');

/**
 * Setup funtion for App Component
 * @returns {Wrapper}
 */
const setup = (initialState = {}) => {
  // use mount, because useEffect not called on `shallow`
  // https://github.com/airbn/enzyme/issues/2086
  const store = storeFactory(initialState);
  return mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

test('renders withow error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.exists()).toBe(true);
});

describe('get secret word', () => {
  let wrapper;
  beforeEach(() => {
    // clear the mock calls from previous tests
    mockGetSecretWord.mockClear();
    wrapper = wrapper = setup({ success: false });
  });

  test('get secret word on app mount', () => {
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });

  test('getSecretWord does not run on app update', () => {
    mockGetSecretWord.mockClear();

    // using setProps because wrapper.update() doesn't trigger useEffect
    // https://github.com/enzymejs/enzyme/issue/2254
    wrapper.setProps();

    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
});
