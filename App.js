/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import Axios from 'axios'
import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Button,
  PermissionsAndroid
} from 'react-native'
import NaverMapView from "react-native-naver-map"
import { WebView } from 'react-native-webview'

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// const P0 = {latitude: 37.564362, longitude: 126.977011};
// const P1 = {latitude: 37.565051, longitude: 126.978567};
// const P2 = {latitude: 37.565383, longitude: 126.976292};

// async function requestLocationPermission() {
//   try {
//     const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//             title: 'Location Permission',
//             message: 'show my location need Location permission',
//             buttonNeutral: 'Ask Me Later',
//             buttonNegative: 'Cancel',
//             buttonPositive: 'OK',
//         },
//     );
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         console.log('You can use the location');
//     } else {
//         console.log('Camera permission denied');
//     }
//   } catch (err) {
//     console.warn(err);
//   }
// }
  
// export default ()=>{
//   React.useEffect(() => {
//     requestLocationPermission();
//   }, []);
  
//   return <NaverMapView style={{width: '100%', height: '100%'}}
//                      showsMyLocationButton={true}>
//     {/* <Marker coordinate={P0}/>
//     <Marker coordinate={P1} pinColor="blue"/>
//     <Marker coordinate={P2} pinColor="red"/>
//     <Path coordinates={[P0, P1]}/>
//     <Polyline coordinates={[P1, P2]}/>
//     <Circle coordinate={P0} color={"rgba(255,0,0,0.3)"} radius={200}/> */}
//   </NaverMapView>
// }



export default ()=>{
  const [text, setText] = React.useState('')

  return (
    <WebView 
      source={{uri:'http://34.64.103.137:3000'}}
      // source={{uri:'https://vos-proto.site'}}
      // injectedJavaScript={`const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=0.5, maximum-scale=0.5, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `}
      // scalesPageToFit={false}
    />
    // <>
    //   <View style={{ flex: 3, justifyContent: "center", alignItems: "center" }}>
    //     <Text>Hello, world!</Text>
    //     <Text>Hello, world!</Text>
    //   </View>
    //   <View style={{ flex: 10, justifyContent: "center", alignItems: "center" }}>
    //     <Text>Hello, world!</Text>
    //     <Text>Hello, world!</Text>
    //   </View>
    // </>

    // <View style={{flex:0.5}}>
    //   <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
    //   <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
    //   <View style={{width: 414, height: 150, backgroundColor: 'steelblue'}} />
    //   <View style={{width: 360, height: 200, backgroundColor: 'pink'}} /> 
    // </View>
    
    // <>
    // <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
    //   <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
    //   <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
    //   <View style={{flex: 1, backgroundColor: 'steelblue'}} />
    // </View>
    // {/* <View style={{flex: 1, flexDirection: 'row'}}>
    //   <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
    //   <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
    //   <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
    // </View> */}
    // </>

    // <ScrollView style={{flex:1, backgroundColor:'grey'}}>
    //   <View style={{height:50, backgroundColor:'white'}} />
    //   <View style={{height:200, backgroundColor:'white'}}>
    //     <TextInput
    //       style={{height: 40, justifyContent: "center", alignItems: "center"}}
    //       placeholder="Type here to translate!"
    //       onChangeText={(text) => setText(()=>text)}
    //       value={text}
    //     />
    //   </View>
    //   <View style={{height:7, opacity:0}} />
    //   <View style={{height:200, backgroundColor:'white'}}>
    //     <Text style={{padding: 10, fontSize: 42}}>
    //       {text.split(' ').map((word) => word && '🍕').join(' ')}
    //     </Text>
    //     <Button title='test' onPress={(e)=>{
    //       Axios.get('http://52.78.244.105').then(res=>{
    //         alert(res.data)
    //       })
    //     }}></Button>
    //   </View>
    //   <View style={{height:7, opacity:0}} />
    //   <View style={{height:200, backgroundColor:'white'}} />
    //   <View style={{height:7, opacity:0}} />
    //   <View style={{height:200, backgroundColor:'white'}} />
    //   <View style={{height:7, opacity:0}} />
    //   <View style={{height:200, backgroundColor:'white'}} />
    //   <View style={{height:7, opacity:0}} />
    //   <View style={{height:200, backgroundColor:'white'}} />
    // </ScrollView>

  )
}

// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//                 ok!
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;
