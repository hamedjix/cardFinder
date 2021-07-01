import { Alert, Container } from 'react-bootstrap';

const Search = ({ searchfield, setSearchfield, searchedItems }) => {
  return (
    <Container className='text-center my-4'>
      <input
        className='form-control mb-2'
        type='text'
        placeholder='Search amoung below Titles'
        onChange={(e) => setSearchfield(e.target.value)}
        value={searchfield}
      />
      <Alert variant='primary'>
        Search Result Items : <strong>{searchedItems.length}</strong>
      </Alert>
    </Container>
  );
};

export default Search;
