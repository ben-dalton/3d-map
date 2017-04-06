import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'
import React from 'react'

let UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <div>
    <button onClick={onUndo} disabled={!canUndo}>
      <div className="glyphicon glyphicon-arrow-left" />
    </button>
    <button onClick={onRedo} disabled={!canRedo}>
      <div className="glyphicon glyphicon-arrow-right" />
    </button>
  </div>
);

const mapStateToProps = (state) => {
  return {
    canUndo: state.past.length > 0,
    canRedo: state.future.length > 0
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUndo: () => dispatch(UndoActionCreators.undo()),
    onRedo: () => dispatch(UndoActionCreators.redo())
  }
}

UndoRedo = connect(
  mapStateToProps,
  mapDispatchToProps
)(UndoRedo)

export default UndoRedo;
