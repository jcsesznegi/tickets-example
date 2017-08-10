import React from 'react';
import { connect } from 'react-redux';
import { addTicket } from '../actions';

let AddTicket = ({ dispatch }) => {
  let titleInput, textInput, prioritySelect;

  return (
    <div className="box addTicket">
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
        <div>
          <label>題名</label>
          <input size={60} ref={node => {
            titleInput = node;
          }} />
        </div>
	<div>
	  <label>説明</label>
          <textarea cols={60} rows={10} ref={node => {
            textInput = node;
          }} />
	</div>
	<div>
	  <label>優先度</label>
          <select ref={node => {
            prioritySelect = node;
          }}>
            <option value="">Priority</option>
	    <option value="1">Low</option>
	    <option value="2">Medium</option>
	    <option value="3">High</option>
	  </select>
	</div>
	<div>
          <button type="submit">
            Add Ticket
          </button>
	</div>
      </form>
    </div>
  );
}
AddTicket = connect()(AddTicket);

export default AddTicket;
