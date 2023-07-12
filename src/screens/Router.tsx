import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import PostListScreen from './PostListScreen/PostListScreen';
import PostDetailScreen from './PostDetailScreen/PostDetailScreen';

const Router = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PostList"
          component={PostListScreen}
          options={{title: 'Posts'}}
        />
        <Stack.Screen
          name="PostDetail"
          component={PostDetailScreen}
          options={{title: 'Post Detail'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
