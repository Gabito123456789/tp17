import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreateScreen from './screens/CreateScreen';
import ReadScreen from './screens/ReadScreen';
import UpdateScreen from './screens/UpdateScreen';
import DeleteScreen from './screens/DeleteScreen';
import { Button, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ justifyContent: 'center', backgroundColor: '#ecf0f1' }}>
      <Text style={{ fontSize: 24, marginBottom: 40, fontFamily: 'Arial', fontWeight: 'bold', display: 'flex', textAlign: 'center' }}>
        Welcome to Your App
      </Text>
      <View style={{ marginBottom: 20 }}>
        <Button title="Create" onPress={() => navigation.navigate('Create')} color="#2ecc71" />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Button title="Read" onPress={() => navigation.navigate('Read')} color="#e74c3c" />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Button title="Update" onPress={() => navigation.navigate('Update')} color="#f39c12" />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Button title="Delete" onPress={() => navigation.navigate('Delete')} color="#9b59b6" />
      </View>
    </View>
  );
};

const ip = '10.0.7.72';

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: { fontSize: 12, fontFamily: 'Verdana', fontWeight: 'bold' },
          activeTintColor: '#3498db',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Create"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="plus" color={color} size={size} />
            ),
          }}
        >
          {(props) => <CreateScreen {...props} ip={ip} />}
        </Tab.Screen>
        <Tab.Screen
          name="Read"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="list" color={color} size={size} />
            ),
          }}
        >
          {(props) => <ReadScreen {...props} ip={ip} />}
        </Tab.Screen>
        <Tab.Screen
          name="Update"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="pencil" color={color} size={size} />
            ),
          }}
        >
          {(props) => <UpdateScreen {...props} ip={ip} />}
        </Tab.Screen>
        <Tab.Screen
          name="Delete"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="trash" color={color} size={size} />
            ),
          }}
        >
          {(props) => <DeleteScreen {...props} ip={ip} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
