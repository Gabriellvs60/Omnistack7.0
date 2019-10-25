import {createAppContainer, createStackNavigator} from 'react-navigarion';

import Feed from './pages/Feed';
import New from './pages/New';

export default createAppContainer(
    createStackNavigator({
        Feed,
        New,
    })
);
