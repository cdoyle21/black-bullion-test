import React, { FC, useState } from 'react';
import { Image } from './OptimisedImageWithFallback.styles';

interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const OptimisedImageWithFallback: FC<Props> = ({ src, alt, width, height }) => {
  const [imageError, setImageError] = useState(false);
  const fallbackImage = 'https://bbb2bprod.wpenginepowered.com/wp-content/uploads/2023/10/Logo.svg';

  const handleError = () => setImageError(true);

  return (
    <Image
      loading="lazy"
      src={imageError ? fallbackImage : src}
      alt={alt}
      onError={handleError}
      width={width}
      height={height}
    />
  );
};

export default OptimisedImageWithFallback;
