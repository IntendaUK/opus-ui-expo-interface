/* eslint-disable max-len */

import { spliceWhere } from '@intenda/opus-ui';

const props = {
	msgToExpo: {
		type: 'object',
		desc: 'Setting this state value, causes an event to be fired in the expo wrapper',
		dft: () => [],
		spec: {
			event: 'string',
			value: 'string'
		},

		setAction: (oldValue = [], newValue) => {
			if (!newValue.push)
				newValue = [ newValue];

			newValue.forEach(({ event, value }) => {
				spliceWhere(oldValue, o => o.event === event && o.value === value);
				oldValue.push({
					event,
					value
				});
			});

			return oldValue;
		}
	},
	eventFlows: {
		type: 'object',
		desc: 'A list of events to listen to from expo and where the values should be flowed. Each key-value pair defines an event name and a flow for that event.',
		spec: {
			eventNameA: {
				to: 'toId',
				toKey: 'toKey'
			}
		}
	}
};

export default props;
