import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import colors from '../styles/colors';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import userImage from '../assets/marcos.png';
import fonts from '../styles/fonts';

export default function Header() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá</Text>
                <Text style={styles.userName}>Marcos</Text>
            </View>

            <Image style={styles.image} source={userImage} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: getStatusBarHeight(),
    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text,
    },
    userName: {
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 40,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 40,
    },
})