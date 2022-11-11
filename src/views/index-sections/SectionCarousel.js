/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Card,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

// core components

const items = [
  {
    src: require("assets/img/soroush-karimi.jpg").default,
    altText: "Tyre repairing",
    caption: "Tyre repairing",
  },
  {
    src: require("assets/img/federico-beccari.png").default,
    altText: "Glass Repair",
    caption: "Glass Repair",
  },
  {
    src: require("assets/img/joshua-stannard.png").default,
    altText: "Repairing Engine",
    caption: "Repairing Engine",
  },
];

function SectionCarousel() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div style={{marginLeft:"2em",marginRight:"2em"}} className="section pt-o" id="carousel">
          <Row>
            <Col className="ml-auto mr-auto" md="6">
            <h2 className='title'>Brief Intro</h2>
                <h5 style={{color:"black",fontWeight:"300"}} className='description'>
                  We are an approved car workshop for all car brands, are
                  specialists in Mercedes and our workshop is located in the
                  middle of Oslo. At our car workshop, we only use original
                  parts for repairs of all car brands, as long as you as a
                  customer do not want anything else. We do this so that you can
                  keep your guarantee as far as possible. We place great emphasis on
                  keeping up to date on new products, solutions and courses. The
                  industry is developing rapidly and it is therefore a high
                  priority for us to keep up with developments in order to be
                  able to perform the best possible work.</h5>
                <br />
            </Col>
            <Col className="ml-auto mr-auto" md="6">
              <Card className="page-carousel">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items.map((item) => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                      >
                        <img src={item.src} alt={item.altText} />
                        <CarouselCaption
                          captionText={item.caption}
                          captionHeader=""
                        />
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="left carousel-control carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-left" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="right carousel-control carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-right" />
                    <span className="sr-only">Next</span>
                  </a>
                </Carousel>
              </Card>
            </Col>
          </Row>
      </div>{" "}
    </>
  );
}

export default SectionCarousel;
