import React from 'react';
import {
  AppRegistry,
  NativeModules,
  Environment,
  StyleSheet,
  VrButton,
  Text,
  View,
  asset,
  Image,
  AmbientLight,
  PointLight,
  staticResourceURL
} from 'react-360';
import Entity from 'Entity';
import {Animated, Easing} from 'react-native';

import {connect} from '../../Store';

class CharacterModel extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      rotateValue : new Animated.Value(0)
    }
  }

  componentDidMount(){
   
    this.runAnimation()
    
  }

  runAnimation() {
    this.state.rotateValue.setValue(0);
    Animated.timing(this.state.rotateValue, {
        toValue: 360,
        duration: 8000,
        easing: Easing.linear(Easing.linear)
    }).start(() => this.runAnimation());
  }

  render() {
    let { current, characters } = this.props
    return (
      <View style={styles.panel}>
        <Image style={styles.bgImage} source={ asset('images/mortal_kombat.jpg')} />
        <Text style={styles.title}>{characters[current].name}</Text>
        <AmbientLight intensity={1} />
        <PointLight
          style={{
            color: '#FFFFFF',
            transform: [
              {translate: [0, 0, 0]}
            ]
          }}
        />
        <Animated.View
          style={{
            transform: [
              {translate : [ 0, -10, -20]},
              {rotateY: this.state.rotateValue}
            ]
          }}>
          <Entity source={{obj: asset(`models${characters[current].path}.obj`), mtl: asset(`models${characters[current].path}.mtl`)}}
            lit={true}
            style={{
              transform: [
                {translate: [0, 0, 0]},
                {scale: 10}
              ]
          }} />
        </Animated.View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  title : {
    position : 'absolute',
    top : 0,
    fontSize : 5,
    transform : [
      {translate : [ 0, 20, -20]}
    ]
  },
  panel: {
    justifyContent: 'center',
    alignItems: 'center',
    position : 'relative'
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  bgImage : {
    position : 'absolute',
    top : 0,
    left : 0,
    width : 200 ,
    height : 100,
    transform : [
      { translate : [-120, 30, -50] },
      {rotateX : -70}
    ]

  }
});

export default connect(CharacterModel)


