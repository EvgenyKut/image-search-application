import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import Login from './Login';
import { useNavigate } from 'react-router-dom';
import * as reactRedux from 'react-redux';
import { Dictionary } from '../constants/dictionary';
import { Routes } from '../constants/routes';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(() => jest.fn),
}));

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('Login render test', () => {
  const navigate = jest.fn();
  const useNavigateMock = useNavigate;
  const useDispatchMock = reactRedux.useDispatch;
  const useSelectorMock = reactRedux.useSelector;

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

  it('Login case', () => {
    render(<Login />);
    const form = screen.getByTestId('form');
    expect(form).toBeInTheDocument();
    expect(form).toBeVisible();

    const input = screen.getByTestId('input');
    expect(input).toBeInTheDocument();
    expect(input).toBeVisible();

    // eslint-disable-next-line testing-library/no-node-access
    const label = input.getElementsByTagName('label')[0];
    expect(label.textContent?.slice(0, -2)).toBe('Username');

    const button = screen.getByRole('button');
    expect(button.textContent).toBe(Dictionary.LOGIN_BTN);

    fireEvent.click(button);
    expect(navigate).toHaveBeenLastCalledWith(Routes.IMAGES);
  });
});
