import { fireEvent, render, screen } from '@testing-library/react';
import Error from './Error';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(() => jest.fn),
}));

describe('Error render test', () => {
  const navigate = jest.fn();
  const useNavigateMock = useNavigate;
  beforeEach(() => {
    (useNavigateMock as jest.Mock).mockImplementation(() => navigate);
  });
  afterEach(() => {
    (useNavigateMock as jest.Mock).mockClear();
  });

  it('Error test case', () => {
    render(<Error />);
    const errorImage = screen.getByRole('img');
    expect(errorImage).toBeInTheDocument();
    expect(errorImage).toBeVisible();
    fireEvent.click(errorImage);
    expect(navigate).toHaveBeenLastCalledWith('/');
    expect(errorImage).toHaveStyle({ cursor: 'pointer' });
  });
});
