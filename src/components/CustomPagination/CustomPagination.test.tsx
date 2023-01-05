import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import CustomPagination from './index';
import { setupStore } from '../../store/store';
import { Provider } from 'react-redux';
const store = setupStore();

describe('CustomPagination-component render test', () => {
  it('CustomPagination test-cases', () => {
    render(
      <Provider store={store}>
        <CustomPagination totalPages={2} page={1} />
      </Provider>,
    );

    // const pagination = screen.getByTestId('pagination') as HTMLInputElement;
    // expect(pagination).toBeInTheDocument();
    // expect(pagination).toBeVisible();
    // const prevBtn = screen.getByRole('button', {
    //   name: 'Go to previous page',
    // });
    // expect(prevBtn).toBeInTheDocument();
    // expect(prevBtn).toBeVisible();

    // const nextBtn = screen.getByRole('button', { name: 'Go to next page' });
    // expect(nextBtn).toBeInTheDocument();
    // expect(nextBtn).toBeVisible();

    // const page1 = screen.getByRole('button', { name: 'page 1' });
    // expect(page1).toBeInTheDocument();
    // expect(page1).toBeVisible();
    // expect(page1).toHaveAttribute('aria-current', 'true');

    // fireEvent.click(prevBtn);

    // const page2 = screen.getByRole('button', { name: 'page 1' });
    // expect(page2).toBeInTheDocument();
    // expect(page2).toBeVisible();
    // expect(page2).toHaveAttribute('aria-current', 'true');
  });
});
