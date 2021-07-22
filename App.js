import React from 'react';
import {StyleSheet} from 'react-native';
import LoginScreen from "./screens/loginScreen";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ConfigurateScreen from "./screens/ConfigurateScreen";
import CreateInvoiceScreen from "./screens/createInvoice";
import InvoiceScreen from "./screens/invoicesScreen";
import ProfileScreen from "./screens/profileScreen";
import ClientScreen from "./screens/clientsScreen";
import PreviewScreen from "./screens/previewScreen";
import DeliverAddressScreen from "./screens/deliveryAddressScreen";
import OrderStatusScreen from "./screens/orderStatusScreen";
import * as Font from 'expo-font';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={LoginScreen} options={{headerShown: false}}/>
                <Stack.Screen name="ConfigurateScreen" component={ConfigurateScreen} options={{headerShown: false}}/>
                <Stack.Screen name="CreateInvoiceScreen" component={CreateInvoiceScreen}
                              options={{headerShown: false}}/>
                <Stack.Screen name="InvoiceScreen" component={InvoiceScreen} options={{headerShown: false}}/>
                <Stack.Screen name="ProfileScreen" component={ProfileScreen}  options={{headerShown: false}}/>
                <Stack.Screen name="ClientScreen" component={ClientScreen} options={{headerShown: false}}/>
                <Stack.Screen name="PreviewScreen" component={PreviewScreen} options={{headerShown: false}}/>
                <Stack.Screen name="DeliverAddressScreen" component={DeliverAddressScreen}
                              options={{headerShown: false}}/>
                <Stack.Screen name="OrderStatusScreen" component={OrderStatusScreen} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
