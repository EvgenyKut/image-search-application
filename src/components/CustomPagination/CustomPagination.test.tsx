import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import CustomPagination from './index';
import StateProvider from '../../providers/StateProvider';

describe('CustomPagination-component render test', () => {

  it('should have snapshot', () => {
    const tree = renderer
      .create(
        <StateProvider>
          <CustomPagination totalPages={20} page={1} />
        </StateProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('CustomPagination test-cases', () => {
    render(
      <StateProvider>
        <CustomPagination totalPages={20} page={1} />
      </StateProvider>,
    );
    const pagination = screen.getByTestId('pagination') as HTMLInputElement;
    expect(pagination).toBeInTheDocument();
    expect(pagination).toBeVisible();
    const prevBtn = screen.getByRole('button', {
      name: 'Go to previous page',
    });
    expect(prevBtn).toBeInTheDocument();
    expect(prevBtn).toBeVisible();

    const nextBtn = screen.getByRole('button', { name: 'Go to next page' });
    expect(nextBtn).toBeInTheDocument();
    expect(nextBtn).toBeVisible();


    const page1 = screen.getByRole('button', { name: 'page 1' });
    expect(page1).toBeInTheDocument();
    expect(page1).toBeVisible();
    expect(page1).toHaveAttribute("aria-current", "true");

    fireEvent.click(prevBtn);
  
    const page2 = screen.getByRole('button', { name: 'page 1' });
    expect(page2).toBeInTheDocument();
    expect(page2).toBeVisible();
    expect(page2).toHaveAttribute("aria-current", "true");

  });
});
