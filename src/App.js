import React from 'react';
import './App.css';
import {
  Card, CardImg, CardText, CardBody, CardDeck,
  CardTitle, Button,
  Row, Col
} from 'reactstrap';
import img1 from './assets/image/318x180.svg'
import img2 from './assets/image/256x186.svg'
import TopNav from './Nav';
import LandingPage from './LandingPage';
import Footer from "./Footer";

function App() {
  return (
    <div className="card-text-center">
    
      <div className="overflow">
      <TopNav />
      <LandingPage />  
      
     
        <CardDeck>
          <Card>
          <CardImg top width="100%" src={img1} alt="Image 1" />
            <CardBody>
              <CardTitle>Tier 1 Story Headline</CardTitle>
              <CardText>This is a wider card with supporting text.</CardText>
              <Button>View</Button>
            </CardBody>
          </Card>
          <Card>
          <CardImg top width="100%" src={img1} alt="Image 1" />
            <CardBody>
              <CardTitle>Tier 1 Story Headline</CardTitle>
              <CardText>This is a wider card with supporting text.</CardText>
              <Button>View</Button>
            </CardBody>
          </Card>
          <Card>
          <CardImg top width="100%" src={img1} alt="Image 1" />
            <CardBody>
              <CardTitle>Tier 1 Story Headline</CardTitle>
              <CardText>This is a wider card with supporting text.</CardText>
              <Button>View</Button>
            </CardBody>
          </Card>
        </CardDeck>
        <CardDeck>
          <Card>
          <CardImg top width="100%" src={img1} alt="Image 1" />
            <CardBody>
              <CardTitle>Tier 1 Story Headline</CardTitle>
              <CardText>This is a wider card with supporting text.</CardText>
              <Button>View</Button>
            </CardBody>
          </Card>
          <Card>
          <CardImg top width="100%" src={img1} alt="Image 1" />
            <CardBody>
              <CardTitle>Tier 1 Story Headline</CardTitle>
              <CardText>This is a wider card with supporting text.</CardText>
              <Button>View</Button>
            </CardBody>
          </Card>
          <Card>
          <CardImg top width="100%" src={img1} alt="Image 1" />
            <CardBody>
              <CardTitle>Tier 1 Story Headline</CardTitle>
              <CardText>This is a wider card with supporting text.</CardText>
              <Button>View</Button>
            </CardBody>
          </Card>
        </CardDeck>
        <Row>
        <Col>
          <Card>
            <Row className="no-gutters">
              <Col md="4">
                <CardImg
                  top
                  width="100%"
                  src={img2}
                  alt="Image 2"
                />
              </Col>
              <Col md="8">
                <CardBody>
                  <CardTitle>Tier 2 Story Headline</CardTitle>
                  <CardText>
                    Some quick example text to build on the card title.
                  </CardText>
                  <Button>View</Button>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col>
          <Card>
            <Row className="no-gutters">
              <Col md="4">
                <CardImg
                  top
                  width="100%"
                  src={img2}
                  alt="Image 2"
                />
              </Col>
              <Col md="8">
                <CardBody>
                  <CardTitle>Tier 2 Story Headline</CardTitle>
                  <CardText>
                    Some quick example text to build on the card title.
                  </CardText>
                  <Button>View</Button>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col>
          <Card>
            <Row className="no-gutters">
              <Col md="4">
                <CardImg
                  top
                  width="100%"
                  src={img2}
                  alt="Image 2"
                />
              </Col>
              <Col md="8">
                <CardBody>
                  <CardTitle>Tier 2 Story Headline</CardTitle>
                  <CardText>
                    Some quick example text to build on the card title.
                  </CardText>
                  <Button>View</Button>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Row className="no-gutters">
              <Col md="4">
                <CardImg
                  top
                  width="100%"
                  src={img2}
                  alt="Image 2"
                />
              </Col>
              <Col md="8">
                <CardBody>
                  <CardTitle>Tier 2 Story Headline</CardTitle>
                  <CardText>
                    Some quick example text to build on the card title.
                  </CardText>
                  <Button>View</Button>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col>
          <Card>
            <Row className="no-gutters">
              <Col md="4">
                <CardImg
                  top
                  width="100%"
                  src={img2}
                  alt="Image 2"
                />
              </Col>
              <Col md="8">
                <CardBody>
                  <CardTitle>Tier 2 Story Headline</CardTitle>
                  <CardText>
                    Some quick example text to build on the card title.
                  </CardText>
                  <Button>View</Button>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col>
          <Card>
            <Row className="no-gutters">
              <Col md="4">
                <CardImg
                  top
                  width="100%"
                  src={img2}
                  alt="Image 2"
                />
              </Col>
              <Col md="8">
                <CardBody>
                  <CardTitle>Tier 2 Story Headline</CardTitle>
                  <CardText>
                    Some quick example text to build on the card title.
                  </CardText>
                  <Button>View</Button>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Row className="no-gutters">
              <Col md="4">
                <CardImg
                  top
                  width="100%"
                  src={img2}
                  alt="Image 2"
                />
              </Col>
              <Col md="8">
                <CardBody>
                  <CardTitle>Tier 2 Story Headline</CardTitle>
                  <CardText>
                    Some quick example text to build on the card title.
                  </CardText>
                  <Button>View</Button>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col>
          <Card>
            <Row className="no-gutters">
              <Col md="8">
                <CardBody>
                  <CardTitle>Tier 3 Story Headline</CardTitle>
                  <CardText>
                    Some quick example text to build on the card title.
                  </CardText>
                  <Button>View</Button>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col>
          <Card>
            <Row className="no-gutters">
              <Col md="8">
                <CardBody>
                  <CardTitle>Tier 3 Story Headline</CardTitle>
                  <CardText>
                    Some quick example text to build on the card title.
                  </CardText>
                  <Button>View</Button>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      </div>
      <Footer />
    </div>
  );
}

export default App;
