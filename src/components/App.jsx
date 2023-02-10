import { Component } from "react";
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from './API/api';
import { toast } from 'react-toastify';
import { MoreButton } from './Button/Button';
import Loader from './Loader/Loader'
import { Modal } from "./Modal/Modal";
import { Box } from './Box'
// ToastContainer,

export class App extends Component {

  state = {
    search: '',
    images: [],
    page: 1,
    isLoading: false,
    error: null
  };


  componentDidUpdate(prevProps, prevState) {
    const { page, search } = this.state;
    const perPage = 12;
    // const prevSearch = prevProps.search;
    // const currentSearch = this.props.search;
    if (prevState.search !== search || prevState.page !== page) {
      this.setState({ isLoading: true });
      fetchImages(search, page, perPage)
        .then(({ hits, totalHits }) => {
          const totalPages = totalHits / perPage;
          if (totalHits === 0) {
            this.setState({ isLoading: false });
            return toast.error('Sorry, no images found. Please, try again!');  
          }
          if (page === 1) {
            toast.success(`Hooray! We found ${totalHits} images.`);
          }
          if (page > totalPages) {
            toast.info("You've reached the end of search results.");
          }
          this.setState(({ images }) => ({
            images: [...images, ...hits],
            total: totalHits,
            isLoading: false,
          }));     
        })
      .catch(error => this.setState({ error }));
    };
  };


  handleSubmit = searchInput => {
    if (searchInput === this.state.search) {
      return;
    }
    this.setState({
      search: searchInput,
      images: [],
      page: 1,
      error: null
    });
  };


  onOpenModal = url => {
    this.setState({
      largeImage: url,
    });
};
  
  
  onModalClose = () => {
    this.setState({
      largeImage: '',
    });
   };
  
  
  onLoadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
      isLoading: true,
    }));
 };
  



  render() {
    
    const {images, total, largeImage, isLoading} = this.state;

    return (
   
    <Box
        listStyle="none"
        display="flex"
        flexDirection="column"
        alignItems="center"
        background-color= "#999999"
    >
      <Searchbar onSubmit={this.handleSubmit} />
      {images.length > 0 && (
        <>
          <ImageGallery images={images} onClick={this.onOpenModal} />
          {total !== images.length && (
            <MoreButton type="button" onClick={this.onLoadMore}>
              Load More
            </MoreButton>
          )}
        </>
      )}
        {largeImage && (
        <Modal closeModal={this.onModalClose} url={largeImage}/>
        )}
        {isLoading && <Loader />}
    </Box>
       
        
    );
  }
};
