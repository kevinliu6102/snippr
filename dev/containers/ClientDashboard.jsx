import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { Menu, Image, List } from 'semantic-ui-react';
import { FetchSnypprs } from '../actions/FetchSnypprs';
import GoogleMaps from '../components/GoogleMaps';

class ClientDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nearbySnypprs: this.props.nearbySnypprs,
      clientAddress: '209 S Mednik Ave, Los Angeles, CA 90022',
    };
  }
  componentDidMount() {
    console.log(this.props, 'my props hog');
    this.props.FetchSnypprs(this.state.clientAddress);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />
          <Menu.Menu position="right">
            <Menu.Item name="logout" onClick={this.props.logout} />
          </Menu.Menu>
        </Menu>
        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={4}><code>
              <Image src="https://d1w2poirtb3as9.cloudfront.net/4d3bab3df8c05d96ddf9.jpeg" size="small" shape="circular" />
              Hi Ebrima
              <List>
                <List.Item>
                  <List.Content>
                    <List.Header>Home</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header>Profile</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header>Payment</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content onClick={this.props.logout}>
                    <List.Header>Log Out</List.Header>
                  </List.Content>
                </List.Item>
              </List>
            </code></Col>
            <Col xs={12} md={8}><code>
              <GoogleMaps google={window.google} />
            </code></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  nearbySnypprs: state.nearbySnypprs,
});

ClientDashboard.propTypes = {
  nearbySnypprs: PropTypes.arrayOf.isRequired,
  FetchSnypprs: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { FetchSnypprs })(ClientDashboard);
