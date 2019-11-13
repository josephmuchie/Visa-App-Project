import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import view_home from './src/views/menu';
import view_scan from './src/views/scan';
import view_details from './src/views/details';
import view_picture from './src/views/picture';
import view_download from './src/views/download';


export const MainNavigator = createStackNavigator({
	Home: {screen: view_home},
	Scan: {screen: view_scan},
	Details: {screen: view_details},
	Picture: {screen: view_picture},
	Download: {screen: view_download},
}
,{
	defaultNavigationOptions: {
		title: 'EDUBAO',
		headerLeft: <LogoTitle />,
		headerStyle: {
		  backgroundColor: '#e3e3e3',
		},
		headerTintColor: '#606070',
	  },
}

);


const App = createAppContainer(MainNavigator);

export default App;