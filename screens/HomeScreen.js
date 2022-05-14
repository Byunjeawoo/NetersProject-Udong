import React from 'react';
import {Button, View, Text, StyleSheet, TouchableOpacity} from 'react-native';


function HomeScreen({navigation}){
    return (
        <View style={{flex:1}}>
            <View style={styles.SearchBar}>
                <Text style={styles.TextProject}>PROJECT</Text>
            </View>
            <View style={styles.RectangleMain}>
            </View>
            <View style={styles.NavBar}>
                <TouchableOpacity style={styles.NavBarHome} > 
                    <Text>홈</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.NavBarCollect} onPress={() => navigation.navigate('Collect')}>
                    <Text>모집공고</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.NavBarCommunity}>
                    <Text>커뮤니티</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.NavBarProfile}>
                    <Text>프로필</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = {
    SearchBar:{
        flex:1.3,
        flexDirection:"row",
        top:0,
        backgroundColor:"black",
    },
    TextProject:{
        width:1500,
        position: 'absolute',
        height: 31,
        left: 42,
        top: 49,
        /*font-family: 'Ligconsolata',*/
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 30,
        lineHeight: 31,
        color: '#3163AE',
    },
    RectangleMain:{
        flex:8,
        backgroundColor:"white",
    },
    NavBar:{
        flexDirection: "row",
        flex:1,
        backgroundColor:"white",
    },
    NavBarHome:{
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        borderWidth: 0.5,
        borderColor:'gray',
    },
    NavBarCollect:{
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        borderWidth: 0.5,
        borderColor:'gray',
    },
    NavBarCommunity:{
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        borderWidth: 0.5,
        borderColor:'gray',
    },
    NavBarProfile:{
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        borderWidth: 0.5,
        borderColor:'gray',
    },
}
export default HomeScreen;