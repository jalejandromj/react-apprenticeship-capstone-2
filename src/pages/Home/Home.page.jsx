import React, { useEffect } from 'react';

import { useGeneralContext } from '../../state/GeneralContext';
import useApodApi from '../../utils/hooks/useApodApi';
import Col from '../../components/Col';
import Button from '../../components/Button';
import Row from '../../components/Row';
import ImageCard from '../../components/ImageCard';
import { getTodayDateYMD } from '../../utils/utils';

function HomePage() {
  const today = getTodayDateYMD();
  const { date, setDate } = useGeneralContext();
  const {response, error} = useApodApi('https://api.nasa.gov/planetary/apod', {date: date});

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
              <input type="date" id="date" name="date" min="1995-01-01" max={today} required/>
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
    setDate(event.target.date.value);
  }

  useEffect(() => {

  }, [response, date]);

  return (
    <section className="home-page">
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
