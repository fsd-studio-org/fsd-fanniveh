import Image from 'next/image';

function FSDImage({
  src = 'public/template/600x400',
  alt = 'image',
  quality = 75,
  style = '',
  className = "",

  // priority for images in LCP
  priority = false,
  ...props
}) {

  return (
    <Image
      width={600}
      height={600}
      style={{
          objectFit: 'cover',
        }
      }
      className={className}
      src={src}
      alt={alt}
      priority={priority}
      // placeholder="blur"
      quality={quality}
      {...props}
      
    />
  );
}

export default FSDImage;