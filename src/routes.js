import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './screens/Home/home'
import Curses from './screens/Curses/curses'


const AppStack = createStackNavigator()

const Routes = () => {

    return (
        <NavigationContainer>
            <AppStack.Navigator
                headerMode="none"
                screenOptions={{
                    cardStyle:{
                        backgroundColor: "#f0f0f5"
                    }
                }}>
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Curses" component={Curses} />
            </AppStack.Navigator>
        </NavigationContainer>

    )
}

export default Routes