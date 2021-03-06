import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ParkDetails } from '../screens/Details/ParkDetails';
import { PeopleDetails } from '../screens/Details/PeopleDetails';
import { ReviewDetails } from '../screens/Details/ReviewDetails';

// import { EventNav } from './EventStackNav';

const DetailsStack = createNativeStackNavigator();

export const DetailsStackNav = () => {
  return (
    <DetailsStack.Navigator screenOptions={{ headerShown: false }}>
      <DetailsStack.Screen name="ParkDetails" component={ParkDetails} />
      <DetailsStack.Screen name="PeopleDetails" component={PeopleDetails} />
      <DetailsStack.Screen name="ReviewDetails" component={ReviewDetails} />
      {/* <DetailsStack.Screen name="EventNav" component={EventNav} /> */}
    </DetailsStack.Navigator>
  );
};
