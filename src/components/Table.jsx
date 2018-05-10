import React from 'react';
import PropTypes from 'prop-types';

function Table(props) {
  return (
    <table className="table">
      <thead className="table__header">
        <tr className="table__row">
          <th className="table__heading">#</th>
          <th className="table__heading hide">Avatar</th>
          <th className="table__heading">Username</th>
          <th className="table__heading">Recent</th>
          <th className="table__heading">All</th>
        </tr>
      </thead>

      <tbody className="table__body">
        {props.displayPoints && props.displayPoints.map((data, index) =>
        (
          <tr className="table__row" key={data.username}>
            <td className="table__data">{index + 1}</td>
            <td className="table__data hide"><img className="table__img" src={data.img} alt="user avatar" /></td>
            <td className="table__data">{data.username}</td>
            <td className="table__data">{data.recent}</td>
            <td className="table__data">{data.alltime}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  displayPoints: PropTypes.arrayOf(PropTypes.object)
};

Table.defaultProps = {
  displayPoints: null
};

export default Table;

