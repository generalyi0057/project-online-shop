import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

import "./Main.sass";


const CAROUSEL_SLIDING_INTERVAL = 3000;

const Main = () => {
  return (
    <Container className="px-0" fluid="xxl">
      <Carousel
        className="homepage-carousel"
        indicators={false}
        interval={CAROUSEL_SLIDING_INTERVAL}
      >
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="https://dummyimage.com/800x400/23395D/EEE&text=dummy_image"
            alt="First slide"
          />
          {/*<Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>*/}
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="https://dummyimage.com/800x400/E94B35/EEE&text=dummy_image"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="https://dummyimage.com/800x400/00A185/EEE&text=dummy_image"
            alt="Third slide"
          />
        </Carousel.Item>
        {/*<Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>*/}
      </Carousel>
      <Container className="card-container" fluid>
        <Row className="align-items-stretch">
          <Col xs={12} md={4} lg={3} className="mb-3">
            <Card className="p-3 h-100">
              <Card.Title>Title</Card.Title>
              <Card.Body className="p-0">
                <Image className="w-100" src="https://dummyimage.com/100x100/808080/EEE&text=dummy_image" />
              </Card.Body>
              <Card.Footer className="px-0 pt-3 pb-0 bg-white border-0">
                <Card.Text>
                  See more
                </Card.Text>
              </Card.Footer>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={3} className="mb-3">
            <Card className="p-3 h-100">
              <Card.Title>Title</Card.Title>
              <Card.Body className="p-0 d-grid gap-1 grid-product-container">
                <div>
                  <Image className="w-100" src="https://dummyimage.com/100x100/808080/EEE&text=dummy_image" />
                </div>
                <div>
                  <Image className="w-100" src="https://dummyimage.com/100x100/808080/EEE&text=dummy_image" />
                </div>
                <div>
                  <Image className="w-100" src="https://dummyimage.com/100x100/808080/EEE&text=dummy_image" />
                </div>
                <div>
                  <Image className="w-100" src="https://dummyimage.com/100x100/808080/EEE&text=dummy_image" />
                </div>
              </Card.Body>
              <Card.Footer className="px-0 pt-3 pb-0 bg-white border-0">
                <Card.Text>
                  See more
                </Card.Text>
              </Card.Footer>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={3} className="mb-3">
            <Card className="p-3 h-100">
              <Card.Title>Title</Card.Title>
              <Card.Body className="p-0">
                <Image className="w-100" src="https://dummyimage.com/100x100/808080/EEE&text=dummy_image" />
              </Card.Body>
              <Card.Footer className="px-0 pt-3 pb-0 bg-white border-0">
                <Card.Text>
                  See more
                </Card.Text>
              </Card.Footer>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={3} className="mb-3">
            <Card className="p-3 h-100">
              <Card.Title>Title</Card.Title>
              <Card.Body className="p-0 d-grid gap-1 grid-product-container-2">
                <div>
                  <Image className="w-100" src="https://dummyimage.com/100x50/808080/EEE&text=dummy_image" />
                </div>
                <div>
                  <Image className="w-100" src="https://dummyimage.com/100x100/808080/EEE&text=dummy_image" />
                </div>
                <div>
                  <Image className="w-100" src="https://dummyimage.com/100x100/808080/EEE&text=dummy_image" />
                </div>
                <div>
                  <Image className="w-100" src="https://dummyimage.com/100x100/808080/EEE&text=dummy_image" />
                </div>
              </Card.Body>
              <Card.Footer className="px-0 pt-3 pb-0 bg-white border-0">
                <Card.Text>
                  See more
                </Card.Text>
              </Card.Footer>
            </Card>
          </Col>
          <Col xs={12} md={8} lg={6} className="mb-3">
            <Card className="p-3 h-100">
              <Card.Title>Title</Card.Title>
              <Card.Body className="p-0">
                <Image className="w-100" src="https://dummyimage.com/200x100/808080/EEE&text=dummy_image" />
              </Card.Body>
              <Card.Footer className="px-0 pt-3 pb-0 bg-white border-0">
                <Card.Text>
                  See more
                </Card.Text>
              </Card.Footer>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={3} className="mb-3">
            <Card className="p-3 h-100">
              <Card.Title>Title</Card.Title>
              <Card.Body className="p-0">
                <Image className="w-100" src="https://dummyimage.com/100x100/808080/EEE&text=dummy_image" />
              </Card.Body>
              <Card.Footer className="px-0 pt-3 pb-0 bg-white border-0">
                <Card.Text>
                  See more
                </Card.Text>
              </Card.Footer>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={3} className="mb-3">
            <Card className="p-3 h-100">
              <Card.Title>Title</Card.Title>
              <Card.Body className="p-0 d-grid gap-1 grid-product-container">
                <div>
                  <Image className="w-100" src="https://dummyimage.com/100x100/808080/EEE&text=dummy_image" />
                </div>
                <div>
                  <Image className="w-100" src="https://dummyimage.com/100x100/808080/EEE&text=dummy_image" />
                </div>
                <div>
                  <Image className="w-100" src="https://dummyimage.com/100x100/808080/EEE&text=dummy_image" />
                </div>
                <div>
                  <Image className="w-100" src="https://dummyimage.com/100x100/808080/EEE&text=dummy_image" />
                </div>
              </Card.Body>
              <Card.Footer className="px-0 pt-3 pb-0 bg-white border-0">
                <Card.Text>
                  See more
                </Card.Text>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Main;
