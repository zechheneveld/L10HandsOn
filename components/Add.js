import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../actions/actions';
const Add = props => {

  let currentName;
  let currentEpisodes;
  return (
    <div>
    Add
    <br/>
    <input placeholder="Name" ref={n => currentName = n}/>
    <br/>
    <input placeholder="Episodes" ref={e => currentEpisodes = e}/>
    <br/>
    <button onClick={() => {
      console.log(currentName.value);
      console.log(currentEpisodes.value);
      let episodesCheck = parseFloat(currentEpisodes.value);
      if(!isNaN(episodesCheck)){
        props.dispatch(addItem(currentName.value,episodesCheck));

        currentName.value = "";
        currentEpisodes.value = "";
      } else {
        console.log('Episode number is invalid');
      }
    }}>add</button>      
    </div>
  )
}

export default connect()(Add);