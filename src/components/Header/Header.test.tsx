import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import Header from './index';
import * as reactRedux from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ThemeToggler from '../ThemeToggler';
import { greetingFormatting } from '../Greeting/helper';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(() => jest.fn),
}));

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('Header', () => {
  const navigate = jest.fn();
  const useSelectorMock = reactRedux.useSelector;
  const useNavigateMock = useNavigate;

  const mockStore = {
    authReducer: {
      name: '',
      isAuth: false,
    },
    searchFocusReducer: {
      focus: false,
    },
  };

  beforeEach(() => {
    (useSelectorMock as jest.Mock).mockImplementation((selector) =>
      selector(mockStore),
    );
    (useNavigateMock as jest.Mock).mockImplementation(() => navigate);
  });

  afterEach(() => {
    (useSelectorMock as jest.Mock).mockClear();
    (useNavigateMock as jest.Mock).mockClear();
  });

  it('snapshot', () => {
    const tree = renderer
      .create(
        <Header>
          <div>test</div>
        </Header>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Header (not auth)', () => {
    render(
      <Header>
        <ThemeToggler />
      </Header>,
    );
    const toggler = screen.getByTestId('theme-toggler');
    expect(toggler).toBeInTheDocument();
    expect(toggler).toBeVisible();

    const lightMode = screen.getByTestId('light');
    expect(lightMode).toBeInTheDocument();
    expect(lightMode).toHaveStyle({ display: 'block' });

    const greeting = screen.getByTestId('greeting');
    expect(greeting).toBeInTheDocument();
    const value = greetingFormatting('', new Date().getHours());
    expect(greeting.textContent).toBe(value);
  });
});

describe('Header, auth', () => {
  const navigate = jest.fn();
  const useDispatchMock = reactRedux.useDispatch;
  const useSelectorMock = reactRedux.useSelector;
  const useNavigateMock = useNavigate;

  const userName = 'Evgeny';

  const mockStore = {
    authReducer: {
      name: userName,
      isAuth: true,
    },
    searchFocusReducer: {
      focus: false,
    },
  };

  beforeEach(() => {
    (useDispatchMock as jest.Mock).mockImplementation(() => () => {}); // eslint-disable-line
    (useSelectorMock as jest.Mock).mockImplementation((selector) =>
      selector(mockStore),
    );
    (useNavigateMock as jest.Mock).mockImplementation(() => navigate);
  });

  afterEach(() => {
    (useDispatchMock as jest.Mock).mockClear();
    (useSelectorMock as jest.Mock).mockClear();
    (useNavigateMock as jest.Mock).mockClear();
  });

  it('Header auth behavior', () => {
    render(
      <Header>
        <ThemeToggler />
      </Header>,
    );
    const toggler = screen.getByTestId('theme-toggler');
    expect(toggler).toBeInTheDocument();
    expect(toggler).toBeVisible();

    const lightMode = screen.getByTestId('light');
    expect(lightMode).toBeInTheDocument();
    expect(lightMode).toHaveStyle({ display: 'block' });

    const greeting = screen.getByTestId('greeting');
    expect(greeting).toBeInTheDocument();
    const value = greetingFormatting(userName, new Date().getHours());
    expect(greeting.textContent).toBe(value);

    const logoutBtn = screen.getByRole('button');
    expect(logoutBtn.textContent).toBe('Logout');
    expect(logoutBtn).toBeInTheDocument();
    expect(logoutBtn).toBeVisible();

    fireEvent.click(logoutBtn);
    expect(navigate).toHaveBeenLastCalledWith('/');
  });
});
