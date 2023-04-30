import {useState } from "react";
import { Header, Form, Input,Button } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {

  const [search, setSearch] = useState('')

  const onChange = evt => setSearch(evt.target.value);

  const handleSubmit = event => {
    event.preventDefault();

    if (search.trim() === '') {
      return alert('Введіть дані для пошуку')
    }
    onSubmit(search);
    setSearch('');
  };

  
  return (
    <Header className="searchbar">
      <Form className="form" onSubmit={handleSubmit}>
        <Input
          name='search'
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={search}
          onChange={onChange}
        />
        <Button type="submit" className="button">
          <span className="button-label">Search</span>
        </Button>
      </Form>
    </Header>
  )
};


