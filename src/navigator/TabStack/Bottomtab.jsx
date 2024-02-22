import { Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home/Home";
import Profile from "../../screens/Profile/Profile";
import { COLORS, icons, SIZES } from "../../constants";
import Order from "../../screens/Order/Order";
import Settings from "../../screens/Settings/Settings";

const BottomTab = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({

                tabBarIcon: ({ focused }) => {
                    let iconName;
                    if (route.name === "Home") {
                        iconName = focused ? icons.home : icons.home
                    } else if (route.name === "Profile") {
                        iconName = focused ? icons.profile : icons.profile
                    } else if (route.name === "order") {
                        iconName = focused ? icons.user : icons.user
                    } else if (route.name === "settings") {
                        iconName = focused ? icons.settings : icons.settings
                    }
                    return <Image source={iconName} style={{ height: SIZES.h2, width: SIZES.h2 }} />
                },
                headerShown: false,
                tabBarShowLabel: true,
                tabBarLabelPosition: "beside-icon",
                tabBarStyle: {
                    backgroundColor: COLORS.white,
                    height: SIZES.h1 * 1.5,
                    marginBottom: SIZES.h3,
                    padding: SIZES.h5 * 0.5
                }

            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Order" component={Order} />
            <Tab.Screen name="settings" component={Settings} />
        </Tab.Navigator>
    )
}

export default BottomTab
