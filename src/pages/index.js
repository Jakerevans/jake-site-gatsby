import React from "react"
import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import logo from '../assets/images/me.png'; // Tell Webpack this JS file uses this image

export default class Home extends React.Component {


  componentDidMount() {

  }

  render() {
    return  <Layout>
              <h1 style={rotatingText}>Web Developer</h1>
              <Carousel style={carouselWrapper}>
                <Carousel.Item style={carouselItem}>
                  <Carousel.Caption>
                    <img src={logo} /> 
                    <h3>Web Developer & Consultant</h3>
                    <p>7+ Years of Web Development Experience</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={carouselItem}>
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={carouselItem}>
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Layout>;
  }
}

const rotatingText = {
  display:'none',
};

const carouselItem = {
  height: '300px',
};

const carouselWrapper = {
  top: '10vh',
};

