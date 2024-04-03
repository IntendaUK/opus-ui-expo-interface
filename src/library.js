//Components
import { ExpoInterface } from './components/expoInterface';

//PropSpecs
import propsExpoInterface from './components/expoInterface/props';

import { registerComponentTypes } from '@intenda/opus-ui';

registerComponentTypes([{
	type: 'expoInterface',
	component: ExpoInterface,
	propSpec: propsExpoInterface
}]);
