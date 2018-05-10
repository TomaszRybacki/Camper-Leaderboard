import React, { Fragment } from 'react';
import axios from 'axios';

import Table from './Table.jsx';


class CamperLeaderboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recentPoints: null,
      allTimePoints: null,
      displayPoints: null
    };
  }

  componentDidMount() {
    axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then(response => this.setState({ recentPoints: response.data }));

    axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
      .then(response => this.setState({ allTimePoints: response.data }));
  }

  handleListChange = (event) => {
    const points = event.target.id;
    this.setState({ displayPoints: this.state[points] });
  }


  render() {
    return (
      <Fragment>
        <header className="header">
          <p className="header__txt">Table of the Free Code Camp campers who have earned the most brownie points.</p>
          <button className="header__button" id="recentPoints" onClick={event => this.handleListChange(event)}>
            Last month score list
          </button>
          <button className="header__button" id="allTimePoints" onClick={event => this.handleListChange(event)}>
            All time score list
          </button>
        </header>
        <Table displayPoints={this.state.displayPoints} />
      </Fragment>
    );
  }
}


export default CamperLeaderboard;
