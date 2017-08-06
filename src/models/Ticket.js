const Immutable = require('immutable');
/**
 * Ticket
 * Ticketのモデル
 */
export default class Ticket extends Immutable.Record({
	id         : 0,
	title      : '',
	text       : '',
	priority   : 0,
	completed  : false
}) {
}
