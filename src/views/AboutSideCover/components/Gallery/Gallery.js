import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Lightbox from 'react-image-lightbox';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';

const Gallery = () => {
  const theme = useTheme();
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const photos = [
    {
      src: 'https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2JlY29taW5nLWRvY3Rvci5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH19fQ==',
      source:
        'https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2JlY29taW5nLWRvY3Rvci5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH19fQ==',
      rows: 1,
      cols: 2,
    },
    {
      src: 'https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1507/wavebreakmediamicro150740002/42520586-team-von-%C3%A4rzten-die-gemeinsam-an-patienten-datei-in-arztpraxis.jpg',
      source:
        'https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1507/wavebreakmediamicro150740002/42520586-team-von-%C3%A4rzten-die-gemeinsam-an-patienten-datei-in-arztpraxis.jpg',
      rows: 1,
      cols: 1,
    },
    {
      src: 'https://cdn9.dissolve.com/p/D2115_275_757/D2115_275_757_1200.jpg',
      source:
        'https://cdn9.dissolve.com/p/D2115_275_757/D2115_275_757_1200.jpg',
      rows: 1,
      cols: 1,
    },
    {
      src: 'https://st.depositphotos.com/1010613/2766/i/950/depositphotos_27663941-stock-photo-portrait-of-happy-doctors-working.jpg',
      source:
        'https://st.depositphotos.com/1010613/2766/i/950/depositphotos_27663941-stock-photo-portrait-of-happy-doctors-working.jpg',
      rows: 1,
      cols: 2,
    },
  ];

  return (
    <Box>
      <Box display={'flex'} justifyContent={'flex-end'} marginBottom={2}>
        <Button
          color="primary"
          size="large"
          endIcon={
            <svg
              width={16}
              height={16}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          }
          onClick={() => openLightbox(0)}
        >
          Open the gallery
        </Button>
      </Box>
      <Box>
        <ImageList
          variant="quilted"
          cols={3}
          rowHeight={isMd ? 300 : 200}
          gap={isMd ? 16 : 4}
        >
          {photos.map((item, i) => (
            <ImageListItem key={i} cols={item.cols} rows={item.rows}>
              <LazyLoadImage
                height={'100%'}
                width={'100%'}
                src={item.src}
                alt="..."
                effect="blur"
                onClick={() => openLightbox(i)}
                style={{
                  objectFit: 'cover',
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                  cursor: 'poiner',
                  borderRadius: 8,
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      {viewerIsOpen && (
        <Lightbox
          mainSrc={photos[currentImage].src}
          nextSrc={photos[(currentImage + 1) % photos.length].src}
          prevSrc={
            photos[(currentImage + photos.length - 1) % photos.length].src
          }
          onCloseRequest={() => closeLightbox()}
          onMovePrevRequest={() =>
            setCurrentImage((currentImage + photos.length - 1) % photos.length)
          }
          onMoveNextRequest={() =>
            setCurrentImage((currentImage + 1) % photos.length)
          }
          reactModalStyle={{ overlay: { zIndex: 1500 } }}
        />
      )}
    </Box>
  );
};

export default Gallery;
