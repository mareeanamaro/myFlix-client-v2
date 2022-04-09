import React from 'react';
import propTypes from 'prop-types';
import axios from 'axios';
import { Button, Container, Row, Col, CardGroup, Card } from 'react-bootstrap';
import '../movie-view/movie-view.scss';

import { Link } from 'react-router-dom';

export class MovieView extends React.Component {

    addFav = (e, movie) => {
        const Username = localStorage.getItem('user');
        const token = localStorage.getItem('token');

        e.preventDefault;
        axios.patch(`https://flicking-through-flicks.herokuapp.com/users/${Username}/movies/${movie._id}`,
            {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(() => {
                alert('Movie added to your favorites.');
                window.open('/profile', '_self');
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    render() {
        const { movie, onBackClick } = this.props;
        return (
            <>
                <Container>
                    <Row className="m-3 mx-auto h-1">
                        <Col>
                            <CardGroup>
                                <Card>

                                    <Card.Img src={movie.ImagePath} />
                                    <Card.Body>
                                        <Card.Title>{movie.Title}</Card.Title>
                                        <Card.Subtitle><Link className="open-link" to={`/directors/${movie.Director.Name}`} >{ }{movie.Director.Name}</Link>, {movie.Release}</Card.Subtitle>
                                        <p></p>
                                        <Card.Text>{movie.Description}
                                        </Card.Text>
                                        <Card.Text><Link className="open-link" to={`/genres/${movie.Genre.Name}`}>{movie.Genre.Name}
                                        </Link></Card.Text>
                                        <Card.Text>
                                            {/* need to fix CORS issue */}
                                            <Button value={movie._id} onClick={(e) => this.addFav(e, movie)}>Add to Favorite Movies</Button>

                                        </Card.Text>

                                    </Card.Body>


                                </Card>
                            </CardGroup>
                            <Button onClick={() => { onBackClick() }}>Back</Button>
                        </Col>

                    </Row>
                </Container>
            </>)
    }
}

// MovieView.propTypes = {
//     movie: propTypes.shape({
//         Title: propTypes.string.isRequired,
//         Description: propTypes.string.isRequired,
//         Genre: propTypes.shape({
//             Name: propTypes.string,
//             Description: propTypes.string
//         }), 
//         Director: propTypes.shape({
//             Name: propTypes.string.isRequired,
//             Bio: propTypes.string,
//             Birth: propTypes.number,
//             Death: propTypes.number
//         }),
//         ImagePath: propTypes.string,
//         Featured: propTypes.bool,
//         Release: propTypes.number
//     }).isRequired,
// };

MovieView.propTypes = {
    movie: propTypes.shape({
        Title: propTypes.string
    }).isRequired,
    onBackClick: propTypes.func.isRequired
};