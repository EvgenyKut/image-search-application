import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { IImage } from '../models/IImage';
import Spinner from '../components/Spinner';
import useGetImages from '../hooks/useGetImages';
import { onBlur } from '../store/reducers/SearchFocusSlice';
import {
  CustomPagination,
  Input,
  ImageCard,
  Form,
  Container,
} from '../components';
import { Dictionary } from '../constants/dictionary';

const ImagesSearch = () => {
  const dispatch = useAppDispatch();
  const { page } = useAppSelector((state) => state.paginationReducer);

  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = () => {
    setSearchValue(inputValue);
    dispatch(onBlur());
  };

  const { imagesData, loading, totalPages } = useGetImages(searchValue);

  return (
    <>
      {loading && <Spinner />}
      {!loading && (
        <Container>
          <Form onSubmit={handleSubmit}>
            <Input
              value={inputValue}
              onChange={(e: any) => setInputValue(e.target.value)}
              label={Dictionary.SEARCH_BTN}
            />
            <Button
              onClick={handleSubmit}
              variant="contained"
              color="primary"
              type="submit"
            >
              {Dictionary.SEARCH_BTN}
            </Button>
          </Form>
          <Box style={{ minHeight: '630px', marginTop: '1rem' }}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              {imagesData.map((image: IImage) => (
                <Grid item xs="auto" sm="auto" md="auto" key={image.id}>
                  <ImageCard url={image.url} alt={image.alt} />
                </Grid>
              ))}
            </Grid>
          </Box>
          {!!totalPages && (
            <CustomPagination totalPages={totalPages} page={page} />
          )}
        </Container>
      )}
    </>
  );
};

export default ImagesSearch;
