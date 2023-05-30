import React, { FC, memo } from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { store } from "./src/store/store";
import PostListScreen from "./src/screens/PostListScreen";
import PostDetailScreen from "./src/screens/PostDetailScreen";

const Stack = createStackNavigator();

const App: FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="PostList">
          <Stack.Screen
            name="PostList"
            component={PostListScreen}
            options={{ title: "Posts" }}
          />
          <Stack.Screen
            name="PostDetail"
            component={PostDetailScreen}
            options={{ title: "Post Detail" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default memo(App);
