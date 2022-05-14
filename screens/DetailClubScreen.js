import React from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function DetailClubScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.imgLogo}></View>
            <View style={styles.hashBar}></View>
            <View style={styles.impormationBar}></View>
            <View style={styles.accessBar}>
                <View style={styles.btnAccess}>
                    <Text>신청하기</Text>
                </View>
            </View>
        </View>
    );
}

const styles = {
    imgLogo: {
        flex: 3,
        backgroundColor: 'blue',
    },
    hashBar: {
        flex: 0.5,
        backgroundColor: '#FFFFFF',
        boxShadow: '0 4 4 rgba(115, 114, 114, 0.25)',
    },
    impormationBar: {
        flex: 3,
        backgroundColor: "black",
    },
    accessBar: {
        flex: 0.5,
        backgroundColor: "skyblue",
    },
    btnAccess: {
        marginLeft: 6,
        marginTop: 17,
        flex: 0.6,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
}
export default DetailClubScreen;