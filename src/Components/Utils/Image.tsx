import React, { FC, ImgHTMLAttributes } from 'react';
import useImageError from '../../Hooks/useImageError';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  className?: string;
  isBaseURL?: boolean;
}


const Image: FC<ImageProps> = ({ src, className = '', isBaseURL = false, ...props }) => {
  const handleError = useImageError;
  const imageUrl = src;
  const ErrorImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png"

  return (
    <img
      src={imageUrl || ErrorImage}
      className={className}
      onError={handleError}
      alt={src}
      loading='lazy'
      {...props}
    />
  );
};

export default Image;
