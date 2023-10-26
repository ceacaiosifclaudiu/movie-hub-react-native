import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import React from 'react'
import { View } from 'react-native'

const CustomDrawer = (props: any) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#333' }}>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View>
    )
}

export default CustomDrawer

