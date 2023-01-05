import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import { useAppDispatch, useKeyListener } from '../../hooks';
import { changeImagePage } from '../../store/reducers/PaginationSlice';
import styles from './customPagination.module.css';
import { paginationFormatter } from './helper';

import { Pagination as Pagination2 } from 'antd';

// const App: React.FC = () => <Pagination defaultCurrent={1} total={50} />;

// export default App;

type PaginationProps = {
  totalPages: number;
  page: number;
};

const CustomPagination: React.FC<PaginationProps> = ({ totalPages, page }) => {
  const dispatch = useAppDispatch();

  useKeyListener('ArrowRight', () =>
    dispatch(
      changeImagePage({
        page: paginationFormatter(page, totalPages, 'increase'),
      }),
    ),
  );
  useKeyListener('ArrowLeft', () =>
    dispatch(
      changeImagePage({
        page: paginationFormatter(page, totalPages, 'decrease'),
      }),
    ),
  );

  const handlePaginationChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    dispatch(changeImagePage({ page: value }));
  };

  return (
    <Pagination
      color="primary"
      page={page}
      count={totalPages}
      onChange={handlePaginationChange}
      className={styles.wrapper}
      siblingCount={0}
      tabIndex={0}
      data-testid="pagination"
      variant="outlined"
      shape="rounded"
    />
  );
};

export default CustomPagination;
