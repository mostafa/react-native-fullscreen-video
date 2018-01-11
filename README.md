# ![](https://raw.githubusercontent.com/mostafa/react-native-fullscreen-video/master/assets/RNFSV-logo.png) react-native-fullscreen-video

A full-screen video component on top of [react-native-video](https://github.com/react-native-community/react-native-video/)

[![npm version](https://badge.fury.io/js/react-native-fullscreen-video.svg)](https://badge.fury.io/js/react-native-fullscreen-video)
[![npm](https://img.shields.io/npm/dt/react-native-fullscreen-video.svg)](https://www.npmjs.com/package/react-native-fullscreen-video)
 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

One of the main issues of react-native-video is making video full-screen on Android. To solve this issue, I've made this package that acts as a full-screen video component.

## Demo
![](https://raw.githubusercontent.com/mostafa/react-native-fullscreen-video/master/assets/demo.gif)

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

## Example
A simple app is provided as an [example](https://github.com/mostafa/react-native-fullscreen-video/tree/master/example).

## Usage
Although not mandatory, you can use [react-native-router-flux](https://github.com/aksonov/react-native-router-flux) to define a scene containing this component and then pass the necessary arguments, so that the component plays the video. The example app looks like this:

~~~~
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import FullScreenVideo from 'react-native-fullscreen-video';
import MainView from './app/mainview';

export default class example extends Component {
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

AppRegistry.registerComponent('example', () => example);
~~~~

~~~~
import { Actions } from 'react-native-router-flux';
...
<TouchableOpacity onPress={() => { Actions.fullscreenVideo({src: "<video-url>"}) }} />
...
~~~~

By tapping on the `TouchableOpacity` component (or your own desired component), the full-screen video component would slide in and play the video in full-screen.

## Limitation(s)
1. `FIXED` <s>Your app should be locked in [portrait orientation](http://stackoverflow.com/a/34086828/6999563), for this component to work.</s> Your app no longer needs to be locked in portrait orientation.
2. I haven't tested it with any other routing/navigation package, other than react-native-router-flux.
3. Not all properties are supported right now for the internal video component.
4. It doesn't contain any player controls.

## Contribution
Contribution is always welcome!

## License
[MIT](https://github.com/mostafa/react-native-fullscreen-video/blob/master/LICENSE)
