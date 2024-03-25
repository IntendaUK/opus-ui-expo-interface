//React
import { useEffect } from 'react';

//System
import { registerFlow } from 'opus-ui';

//Styles
import './styles.css';

//Events
const onMessageFromExpo = ({ setState }, msg) => {
	const { event: eventName, value } = msg;

	setState({ [eventName]: value });
};

const onMsgToExpo = ({ state: { msgToExpo } }) => {
	if (!msgToExpo || !msgToExpo.length)
		return;

	const length = msgToExpo.length;
	msgToExpo.forEach(msg => {
		if (window.ReactNativeWebView)
			window.ReactNativeWebView.postMessage(JSON.stringify(msg));
	});

	msgToExpo.splice(0, length);
};

const onMount = ({ id, getHandler, state: { eventFlows } }) => {
	window.messageFromExpo = getHandler(onMessageFromExpo);

	const flows = Object.entries(eventFlows).map(([eventName, flowConfig]) => {
		const flow = {
			fromKey: eventName,
			...flowConfig
		};

		return flow;
	});

	registerFlow(flows, id);
};

//Export
export const ExpoInterface = ({ getHandler, state: { msgToExpo } }) => {
	useEffect(getHandler(onMount), []);
	useEffect(getHandler(onMsgToExpo), [JSON.stringify(msgToExpo)]);

	return null;
};
