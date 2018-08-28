import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    VrButton,
    Image,
    asset
} from 'react-360';

import { setCurrent } from '../../Store';

class CharacterPreview extends Component {
    constructor(props) {
        super(props);
        
        this.getCharacter = this.getCharacter.bind(this);
    }
  
    getCharacter(){
        setCurrent(this.props.character.name)
    }

    render() {
        let {current, character} = this.props;
        return (
        
                <VrButton style={[ styles.btn , (current == character.name) ? styles.brdrCurrentCharacter : null ]}
                    onClick={this.getCharacter}>
                    <Image style={styles.btnImage} source={asset(`${character.thumbnail}`)}/>
                    {/* <Text style={styles.btnText}>{character.name}</Text> */}
                </VrButton>
        
        );
    }
}

const styles = StyleSheet.create({
    btn: {
        position : 'relative',
        marginTop : 10,
        marginBottom : 10,
        borderWidth : 4,
        borderColor : '#777',
        width: 100,
        height: 100,
        overflow: 'hidden',
        borderRadius : 5
    },
    brdrCurrentCharacter : {
        borderColor : '#f00'
    },
    btnText : {
        color : '#000'
    },
    btnImage : {
        position: 'absolute',
        top : 0,
        left : 0,
        bottom : 0,
        width: '100%',
    }

})

export default CharacterPreview;