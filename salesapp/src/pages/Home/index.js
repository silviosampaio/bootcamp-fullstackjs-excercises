import React from 'react';

import {SafeAreaView} from 'react-native';
import {Container, Row, Label, Box} from '../../components';

import AreaChart from '../../components/charts/area';
import DonutChart from '../../components/charts/donut';
import BarChart from '../../components/charts/bar';

const Home = () => {
  return (
    <Container>
      <SafeAreaView>
        <Row spaced zIndex="1">
          <Label type="title" color="dark" align="center">
            $ 59,231,90
          </Label>
          <Label align="center">
            Last 7 Days: <Label color="success">+123%</Label>
          </Label>
        </Row>
        <Row fluid marginTop="-50px">
          <AreaChart />
        </Row>
        <Row>
          <Box>
            <Row fluid>
              <Label type="subtitle" color="primary">
                Sales Result
              </Label>
              <Label>Last 7 days</Label>
            </Row>
            <Row fluid>
              <DonutChart />
            </Row>
          </Box>
        </Row>
        <Row marginTop="20px">
          <Box>
            <Row fluid>
              <Label type="subtitle" color="primary">
                Sales x Refundeds
              </Label>
              <Label>Last 7 days</Label>
            </Row>
            <Row fluid>
              <BarChart />
            </Row>
          </Box>
        </Row>
      </SafeAreaView>
    </Container>
  );
};

export default Home;
