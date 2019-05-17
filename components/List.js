import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    shows: state.shows
  }
}

const List = props => (
  <div>
  List
  <ol>
    {props.shows.map(s => 
    <li>{s.name}
      <ul>
      <li>{s.episodes} Episodes</li>
      </ul> 
    </li>)}
  </ol>
  </div>
)

export default connect(mapStateToProps) (List);