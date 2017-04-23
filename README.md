# react-native-fullscreen-video

A full-screen video component on top of [react-native-video](https://github.com/react-native-community/react-native-video/)

[![npm version](https://badge.fury.io/js/react-native-fullscreen-video.svg)](https://badge.fury.io/js/react-native-fullscreen-video)
 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

One of the main issues of react-native-video is making video full-screen on android. To solve this issue, I've made this package that acts as full-screen video component.

## Installation
To install react-native-fullscreen-video, you can use install from git or use a javascript package manager (e.g. npm or yarn).

+ To install from git (master branch):
  ~~~~
  $ npm install git+https://github.com/mostafa/react-native-fullscreen-video.git
  ~~~~
+ To install using a javascript package manager, simply run this command (in this case we've used npm):
  ~~~~
  $ npm install --save react-native-fullscreen-video
  ~~~~

## Usage
Although not mandatory, you can use [react-native-router-flux](https://github.com/aksonov/react-native-router-flux) to define a scene containing this component and then pass the necessary arguments, so that the component plays the video. An example app would look like this:

~~~~
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import FullScreenVideo from 'fullscreenvideo';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="main" component={MainView} initial={true} hideNavBar={true} />
		  <Scene
            key="fullscreenVideo"
            component={FullScreenVideo}
            hideNavBar={true}
            duration={1} />
          </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('App', () => App);
~~~~

~~~~
import { Actions } from 'react-native-router-flux';
...
<TouchableOpacity onPress={() => { Actions.fullscreenVideo({src: "<video-url>"}) }} />
...
~~~~

By tapping on the `TouchableOpacity` component (although you can use other components), the full-screen video player would slide in and play the video in full-screen.

## Limitation(s)
1. Your app should be locked in [portrait orientation](http://stackoverflow.com/a/34086828/6999563), for this component to work.
2. I haven't tested it with any other routing/navigation package.
3. Not all properties are supported right now for the internal video component.
4. It doesn't contain any player controls.

## Contribution
Contribution is always welcome!

## License
[MIT](https://github.com/mostafa/react-native-fullscreen-video/blob/master/LICENSE)
