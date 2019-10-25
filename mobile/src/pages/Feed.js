import React, { Component } from 'react';
import api from '../services/api';
import { StyleSheet,Text, View, Image, TouchableOpacity, FlatList } from 'react-native';

import camera from '../assets/camera.png';
import more from '../assets/more.png';
import like from '../assets/like.png';
import comment from '../assets/comment.png';
import send from '../assets/send.png';

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
    <View style={styles.container}>
        <FlatList
        data={this.state.feed}
        
        keyExtractor={post => post._id}
        //item guarda as informações de cada post
        renderItem={({item}) => (
        <View style={styles.feedItem}>
            <View style={styles.feedItemHeader}>
                <View style={styles.userInfo}>
                    <Text style={styles.name}>{item.author}</Text>
                    <Text style={styles.place}>{item.place}</Text>
                </View>
                <Image source={more}/>
            </View>
            <Image style={styles.feedImage} source={{uri: `http://10.0.2.2:3333/files/${item.image}`}} />
            <View style={styles.feedItemFooter}>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={() => {}}>
                        <Image source = {like} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={() => {}}>
                        <Image source = {comment} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={() => {}}>
                        <Image source = {send} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.likes}>{item.likes} curtidas</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.hashtags}>{item.hashtags}</Text>
            </View>
        </View>
        )}
        />
    </View>
    );
  }
}

const styles = StyleSheet.create({
container:{
    //ocupa a largura e altura total da tela
    flex: 1,
},
feedItem: {
    //distancia do alto
    marginTop: 20
},  
feedItemHeader:{
    //distanciar da esq e direita
    paddingHorizontal: 15,
    //icone alinhe ao nome e place
    flexDirection: 'row',
    //joga pro canto o icone
    justifyContent : 'space-between',
    //alinha o icone com textos da direita
    alignItems: 'center',
},
 name:{
     fontSize: 14,
     color: '#000'
 },
 place: {
     fontSize: 12,
     color: '#666',
     //distancia do nome
     marginTop: 2
 },
 feedImage : {
     width : '100%',
     height: 400,
     //distancia do header e footer
     marginVertical : 15,
 },
 feedItemFooter: {
     paddingHorizontal : 15,
 },
 actions: {
     flexDirection : 'row'
 },
 action:{
     marginRight: 8,
 },
 likes: {
     marginTop: 15,
     fontWeight: 'bold',
     color: '#000'
 },
 hashtags: {
 color: '#7159c1'
 },
});