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
  AmbientLight,
  PointLight,
  staticResourceURL
} from 'react-360';
import Entity from 'Entity';

import {Animated, Easing} from 'react-native';

const {VideoModule} = NativeModules;


// Play a specific video

export default class Hello360 extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      pause : false,
      rotateValue : new Animated.Value(0)
    }
    // this.handleClick = this.handleClick.bind(this);
  }
  
  // handleClick(){
  //   console.log('click')
  //   if(this.state.pause){
  //     VideoModule.resume('myplayer')
  //     this.setState({ pause : false})
  //   } else {
  //     VideoModule.pause('myplayer')
  //     this.setState({ pause : true
  //     })
  //   }
  // }

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
    return (
      <View style={styles.panel}>
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
          <Entity source={{obj: asset('models/raiden/Raiden.obj'), mtl: asset('models/raiden/Raiden.mtl')}}
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
  panel: {
    // Fill the entire surface
    // width: 1000,
    // height: 600,
    backgroundColor: 'rgba(255, 255, 255, .4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('Hello360', () => Hello360);
