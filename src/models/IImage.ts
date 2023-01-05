export interface IImage {
  imageId: number;
  imageUrl: string;
  imageDescription: string;
  imageLikes: number;
}

export interface IImageData {
  results: IImageRawData[];
  total: number;
  total_pages: number;
}

export interface IImageRawData {
  id: number;
  blur_hash: string;
  color: string;
  created_at: string;
  urls: {
    small: string;
    full: string;
    raw: string;
    regular: string;
    small_s3: string;
  };
  alt_description: string;
  likes: number;
  views: number;
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
