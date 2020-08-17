import React from 'react';
// components
import { MultiSelectComponent } from 'components';
import { Col, Container, Row } from 'react-bootstrap';
// api
import { getLocationsByQuery } from 'api';
// redux
import { connect } from 'react-redux';
// app css
import 'App.css';

// main app class
class App extends React.Component<{}, { results: [] }> {
  constructor(props: any) {
    super(props);
    this.state = {
      results: []
    }
  }

  handleKeyPress = async (e: any) => {
    if (e.length > 0) {
      let res: any = await getLocationsByQuery(e);
      let result = res?.data.results.sort((a: any, b: any) => {
        return (
          a.asl - b.asl
        )
      }).slice(0, 5);
      
      this.setState({
        results: result
      });
    } else {
      this.setState({
        results: []
      })
    }
  }

  render() {
    const { results } = this.state;

    return (
      <Container>
        <Row className="mt-4">
          <Col lg={4} md={4}>
            <MultiSelectComponent
              id="multi-select-locations"
              label="Select Locations"
              leftIcon={<img src={require('assets/map.svg')} alt="map-icon"/>}
              placeholder="type and search"
              onChange={this.handleKeyPress}
              items={results}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect()(App);