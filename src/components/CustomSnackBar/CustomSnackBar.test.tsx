import { render, screen } from '@testing-library/react';
import CustomSnackBar from './index';
import * as reactRedux from 'react-redux';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(() => jest.fn),
}));

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('CustomSnackBar render test', () => {
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
    snackBarReducer: {
      type: 'info',
      notification: 'No actual photos by search test',
      isOpen: true,
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

  it('Snackbar test case', () => {
    render(<CustomSnackBar />);
    const snackbar = screen.getByTestId('snackbar');
    expect(snackbar).toBeInTheDocument();
    expect(snackbar).toBeVisible();
    expect(snackbar).toHaveTextContent(mockStore.snackBarReducer.notification);
  });
});
