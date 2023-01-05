export interface IImage {
  id: number;
  url: string;
  alt: string;
  likes: number;
}

export interface IImageData {
  results: IImageRaw[];
  total: number;
  total_pages: number;
}

export interface IImageRaw {
  id: number;
  urls: {
    small: string;
  };
  alt_description: string;
  likes: number;
}

export type TypeImageFetch = {
  page: number;
  query: string;
};

export interface IData {
  images: IImage[];
  total: number;
  total_pages: number;
}
