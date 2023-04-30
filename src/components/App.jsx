import { useState,useEffect } from "react";
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from './API/api';
import { toast } from 'react-toastify';
import { MoreButton } from './Button/Button';
import Loader from './Loader/Loader'
import { Modal } from "./Modal/Modal";
import { Box } from './Box'




export const App = () => {

  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [largeImage, setLargeImage] = useState('');
  const [total, setTotal] = useState('')
  
  useEffect(() => {
    const perPage = 12
    if (search) {
      setIsLoading(true)
    } 
    if (search !== '') {
          fetchImages (search, page, perPage)
      .then(({ hits, totalHits }) => {
        const totalPages = totalHits / perPage;
        if (totalHits === 0) {
          setIsLoading(false);
          return toast.error('Sorry, no images found. Please, try again!')
        }
        if (page === 1) {
          toast.success(`Hooray! We found ${totalHits} images.`);
        }
        if (page > totalPages) {
          toast.info("You've reached the end of search results.")
        }
        setImages(prevState =>[...prevState, ...hits]);
        setTotal(totalHits);
        setIsLoading(false);
        
      })
      .catch(setError(error))

    }
  },[error, page, search]);

  


  const handleSubmit = searchInput => {
    if (searchInput === search) {
      return;
    }
    setSearch(searchInput);
    setImages([]);
    setPage(1)
    setError(null)
  };


  const onOpenModal = url => {
    setLargeImage(url)
  };
  
  
  const onModalClose = () => {
    setLargeImage('')
   };
  
  
  const onLoadMore = () => {
    setPage(page + 1);
    setIsLoading(true);
 };
  
    
    return (
   
    <Box
        listStyle="none"
        display="flex"
        flexDirection="column"
        alignItems="center"
        background-color= "#999999"
    >
      <Searchbar onSubmit={handleSubmit} />
      {images.length > 0 && (
        <>
          <ImageGallery images={images} onClick={onOpenModal} />
          {total !== images.length && (
            <MoreButton type="button" onClick={onLoadMore}>
              Load More
            </MoreButton>
          )}
        </>
      )}
        {largeImage && (
        <Modal closeModal={onModalClose} url={largeImage}/>
        )}
        {isLoading && <Loader />}
    </Box>
       
        
    );
  
};
