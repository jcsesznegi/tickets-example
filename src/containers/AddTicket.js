import React from 'react';
import { connect } from 'react-redux';
import { addTicket } from '../actions';

let AddTicket = ({ dispatch }) => {
  let input, select;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim() 
		|| parseInt(select.value) <= 0
	) {
          return;
        }
        dispatch(addTicket(input.value, parseInt(select.value)));
        input.value = '';
        select.value = '';
      }}>
        <input ref={node => {
          input = node;
        }} />
        <select ref={node => {
          select = node;
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
