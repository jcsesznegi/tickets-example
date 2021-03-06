import React from 'react';
import FilterLink from '../containers/FilterLink';

const TicketListControls = () => (
  <div className="ticketControls">
    <label>Filters</label>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </div>
);
export default TicketListControls;
