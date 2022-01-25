import React, { useEffect, useState } from 'react';

import {Helmet} from "react-helmet";
import MaskInput from 'react-maskinput';

import { useGeneralContext } from '../../state/GeneralContext';
import useApodApi from '../../utils/hooks/useApodApi';
import Col from '../../components/Col';
import Button from '../../components/Button';
import Row from '../../components/Row';
import ImageCard from '../../components/ImageCard';

function HomePage() {
  const [ title, setTitle ] = useState("Img of the Day!");
  const { date, setDate } = useGeneralContext();
  const {response, error} = useApodApi('https://api.nasa.gov/planetary/apod', {date: date});

  const RenderHelmet = () => {

    return (
      <Helmet>
        <title>{title}</title>
      </Helmet>
    );
  }

  const RenderDateInput = () => {

    return (
      <>
        <Row>
          <Col md={12} lg={12} xl={12}>
            <h3>Please, choose your date of interest.</h3>
          </Col>
        </Row>
        <form onSubmit={handleDateSubmit}>
          <Row>
            <Col md={2} lg={2} xl={2}>
              <label >Date:</label>
              <MaskInput name="date" id="date" alwaysShowMask maskString="YYYY-MM-DD" mask="0000-00-00" size={30}/>
            </Col>
            <Col md={1} lg={1} xl={1} style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Button blue submit>Submit</Button>
            </Col>
          </Row>
        </form>
      </>
    );
  }

  const RenderError = () => {

    return (
      <>
        <Row>
          <Col md={12} lg={12} xl={12}>
            <p style={{color: "red"}}>There was an error, please try again.</p>
          </Col>
        </Row>
        <Row>
          <Col md={12} lg={12} xl={12}>
            <p style={{color: "red"}}>{error.response ? `${error.message}. Please check your input date` : null}</p>
          </Col>
        </Row>
      </>
    );
  }

  function handleDateSubmit(event) {
    event.preventDefault();
    console.log(event.target.date.value);
    setDate(event.target.date.value);
  }

  useEffect(() => {
    if(response){
      setTitle(response.data.title);
    }

  }, [response, date]);

  return (
    <section className="home-page">
      <RenderHelmet />
      <Row style={{height: "10%"}}>
        <Col md={12} lg={12} xl={12}>
          <h1>What mysteries may the galaxy hold for you today?</h1>
        </Col>
      </Row>
      {(!date || error) &&
        <RenderDateInput/>
      }
      {(date && response && !error) &&
        <Row style={{height: "90%"}}>
          <Col md={12} lg={12} xl={12} style={{height: "100%"}}>
            <ImageCard img={response.data.url} title={response.data.title} explanation={response.data.explanation} date={response.data.date}/>
          </Col>
        </Row>
      }
      {error &&
        <RenderError/>
      }
    </section>
  );
}

export default HomePage;
