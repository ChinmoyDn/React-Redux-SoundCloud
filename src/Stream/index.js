import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './../actions'
import Stream from './presenter';

function mapStateToProps(state){
  const { user } = state.auth;
  const {  tracks, activeTrack } = state.tracks;
  return {
    user,
    tracks,
    activeTrack
  }
}

function mapDispactchToProps(dispatch) {
  return {
    onAuth: bindActionCreators(actions.auth, dispatch),
    onPlay: bindActionCreators(actions.playTrack, dispatch)
  }
}

export default connect(mapStateToProps, mapDispactchToProps)(Stream);
