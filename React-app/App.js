import { Provider } from 'react-redux';
import store from './store';
import MapScreen from './screens/MapScreen';
//import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import home from './screens/Home';
import Login from './screens/login';
import Destination from './screens/destination';
import ridedetails from './screens/ridedetails';
import daily from './screens/daily';  
import rent   from './screens/rent';
import schedule from './screens/schedule';
import rentalcars from './screens/rentalcars';
import payment from './screens/payment';
import signup from './screens/signup';
import waiting from './screens/waiting';


export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={home}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Signup"
              component={signup}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Destination"
              component={Destination}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ridedetails"
              component={ridedetails}
              options={{
                headerShown: false,
              }}
            />
             <Stack.Screen
              name="daily"
              component={daily}
              options={{
                headerShown: false,
              }}
            /> 
            <Stack.Screen
                name="waiting"
                component={waiting}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="rent"
                component={rent}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="schedule"
                component={schedule}
                options={{
                  headerShown: false,
                }}  
              />
              <Stack.Screen
                name="rentalcars"
                component={rentalcars}
                options={{
                  headerShown: false,
                }}  
              />
              <Stack.Screen
                name="payment"
                component={payment}
                options={{
                  headerShown: false,
                }}
              />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

