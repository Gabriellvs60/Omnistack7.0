import React, { Component } from 'react';
import api from '../services/api';
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import camera from '../assets/camera.png';

export default class Feed extends Component {
    state = {
        feed: [],
    };

    static navigationOptions=({navigation}) => ({
     headerRight:(
        <TouchableOpacity style={{marginRight: 20}} onPress={() => navigation.navigate('New')}>
        <Image source={camera} />
        </TouchableOpacity>
     ),
    });

    async componentDidMount(){
        //this.registerToSocket();
        const response = await api.get('posts');
                
        this.setState({feed : response.data});
    }

    render() {
    return (
    <View>
        <FlatList
        data={this.state.feed}
        keyExtractor={post => post._id}
        //item guarda as informações de cada post
        renderItem={(item) => (
            <View/>
        )}
        />
    </View>
    );
  }
}
