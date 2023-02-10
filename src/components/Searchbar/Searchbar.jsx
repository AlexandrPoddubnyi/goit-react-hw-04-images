import { Component } from "react";
import { Header, Form, Input,Button } from './Searchbar.styled';

export class Searchbar extends Component {

  state = {
    search:''
  }

  onChange = evt => {
    const searchValue = evt.currentTarget.value.toLowerCase();
    this.setState({ search: searchValue })
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.search.trim() === '') {
      return  alert('Введіть дані для пошуку')
    }

    this.props.onSubmit(this.state.search)
    this.setState({ search: '' })
  }


  render() {
    return (
      <Header className="searchbar">
  <Form className="form" onSubmit={this.handleSubmit}>
          <Input
            name='search'
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.search}
            onChange={this.onChange}
          />
          <Button type="submit" className="button">
      <span className="button-label">Search</span>
    </Button>
  </Form>
</Header>
    )
  }

}


