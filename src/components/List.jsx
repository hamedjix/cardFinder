import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Post from './Post';
import Pagination from './Pagination';

const List = ({ searchedItems, setPosts }) => {
  const [currentPage, setCurrentPage] = useState(1);

  //Variables
  const itemsPerPage = 9;

  //Use Effect
  useEffect(() => {
    //API
    const getPosts = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      console.log('request sent');
    };
    getPosts();
  }, []);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchedItems.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Container>
      <Row className='justify-content-center'>
        {currentItems.map((post) => (
          <Col key={post.id}>
            <Post post={post} />
          </Col>
        ))}
      </Row>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={searchedItems.length}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
};

export default List;
