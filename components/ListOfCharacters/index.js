import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    VrButton,
    NativeModules, 
    asset
} from 'react-360';

const {AudioModule} = NativeModules;

import {connect} from '../../Store';

import CharacterPreview from '../CharacterPreview';

class ListOfCharacters extends Component {

    componentDidMount(){
        AudioModule.playEnvironmental({
            source: asset('audio/Mortal_Kombat(Oharacter_select).mp3'),
            volume: 0.3, // play at 3/10 original volume
          });
    }

    render() {
        return (
            <View style={styles.listBox}>
                {
                Object.values(this.props.characters).map(character => {
                    return <CharacterPreview key={character.id} current={this.props.current} character={character}/>
                })
                }

            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    listBox : {
        width  : 600,
        borderWidth : 4,
        borderColor : '#fff',
        flexWrap : 'wrap',
        flexDirection : 'row',
        justifyContent : 'space-around',
        transform : [
            {translate : [ 20, 0, 0]}
        ]
    }
})

export default connect(ListOfCharacters);