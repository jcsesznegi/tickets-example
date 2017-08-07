import React from 'react';
import { connect } from 'react-redux';
import { addTicket } from '../actions';

let AddTicket = ({ dispatch }) => {
  let titleInput, textInput, prioritySelect;

  return (
    <div className="box">
      <form onSubmit={e => {
        e.preventDefault();
        if (!textInput.value.trim() 
		|| parseInt(prioritySelect.value) <= 0
	) {
          return;
        }
        dispatch(addTicket(titleInput.value, textInput.value, parseInt(prioritySelect.value)));
        titleInput.value = '';
        textInput.value = '';
        prioritySelect.value = '';
      }}>
        <input ref={node => {
          titleInput = node;
        }} />
        <textarea ref={node => {
          textInput = node;
        }} />
        <select ref={node => {
          prioritySelect = node;
        }}>
		<option value="">Priority</option>
		<option value="1">Low</option>
		<option value="2">Medium</option>
		<option value="3">High</option>
	</select>
        <button type="submit">
          Add Ticket
        </button>
      </form>
    </div>
  );
}
AddTicket = connect()(AddTicket);

export default AddTicket;
