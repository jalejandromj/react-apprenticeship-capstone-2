import React, { useEffect } from 'react';

import Col from '../../components/Col';
import Row from '../../components/Row';

function HomePage() {

  useEffect(() => {


  }, []);

  return (
    <section className="home-page">
      <Row>
        <Col md={12} lg={6} xl={4}>
          <h1>HomePage</h1>
        </Col>
      </Row>
    </section>
  );
}

export default HomePage;
