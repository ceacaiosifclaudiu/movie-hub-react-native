import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import FavoriteScreen from '../screens/FavoriteScreen';
import HomeScreen from '../screens/HomeScreen';
import MovieScreen from '../screens/MovieScreen';
import PersonScreen from '../screens/PersonScreen';
import SearchScreen from '../screens/SearchScreen';
import CustomDrawer from './CustomDrawer';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const drawerItems = [
    {
        name: 'HomeScreen',
        component: HomeScreen,
        iconSource: require("../assets/Home.png"),
    },
    {
        name: 'Search',
        component: SearchScreen,
        iconSource: require("../assets/search.png"),
    },
    {
        name: 'Favorite',
        component: FavoriteScreen,
        iconSource: require("../assets/favoriteWhite.png"),
    },
];

const DrawerContent = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerActiveTintColor: 'white',
                drawerInactiveTintColor: 'gray'
            }}
            drawerContent={(props) => <CustomDrawer {...props} />}
        >
            {drawerItems.map((item) => (
                <Drawer.Screen
                    key={item.name}
                    name={item.name}
                    component={item.component}
                    options={{
                        drawerIcon: () => (
                            <Image
                                source={item.iconSource}
                                style={{ width: 25, height: 25 }}
                            />
                        ),
                    }}
                />
            ))}
        </Drawer.Navigator>
    );
};

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={DrawerContent} />
                <Stack.Screen name="Movie" component={MovieScreen} />
                <Stack.Screen name="Person" component={PersonScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation