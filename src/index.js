/* eslint-disable max-lines-per-function, max-lines */

//System
import React from 'react';
import ReactDOM from 'react-dom/client';

//Components
import { ExpoInterface } from './components/expoInterface';

//PropSpecs
import propsExpoInterface from './components/expoInterface/props';

//Opus Lib
import Opus from '@intenda/opus-ui';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<Opus
		registerComponentTypes={[{
			type: 'expoInterface',
			component: ExpoInterface,
			propSpec: propsExpoInterface
		}]}
		startupMda={{
			type: 'containerSimple',
			prps: {
				singlePage: true,
				mainAxisAlign: 'center',
				crossAxisAlign: 'center'
			},
			wgts: [{
				type: 'expoInterface',
				prps: { eventFlows: [] }
			}]
		}}
	/>
);
