/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';

import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ECScreen from './app/components/EmergencyCallScreen';
import ITScreen from './app/components/InstantTranslationScreen';
import MIScreen from './app/components/MedicalInsuranceScreen';
import MRScreen from './app/components/MedicalRecordScreen';
import OBScreen from './app/components/OnlineBookingScreen';
import SCScreen from './app/components/SymptomCheckerScreen';
import Search from './app/components/SearchHomeScreen';
import HeaderScreen from './app/components/HeaderScreen';
import CarouselScreen from './app/components/CarouselScreen';
import { TouchableHighlight } from 'react-native-gesture-handler';
import QuestionsScreen from "./app/components/QuestionsScreen";
import ResultAdultScreen from "./app/components/ResultAdultScreen";
import ResultChildScreen from "./app/components/ResultChildScreen";
import QuestionsChildScreen from "./app/components/QuestionsChildScreen";
import HLScreen from "./app/components/HospitalListScreen";
import DLScreen from "./app/components/DoctorListScreen";
import ProfileScreen from './app/components/ProfileScreen';
import TimeScreen from './app/components/TimeScreen';
import Icon from 'react-native-vector-icons/FontAwesome';





function HomeScreen({ navigation }) {

  return (
    <View>
      <HeaderScreen></HeaderScreen>

      <View style = {{flexDirection: 'row', justifyContent:"center"}}>
        <Search/>
      </View>

      <View style={{margin:10}}>
      <CarouselScreen/>
      </View>

      <View style={{marginTop: 20}} >
      <View style={{flexDirection: 'row', justifyContent:"space-evenly",}} >
      <TouchableHighlight onPress={() => navigation.navigate('MedicalRecord')} style = {styles.buttonContainer}>
        <View style={styles.button}>
          <Image
          source={require('./app/img/icons/MR.png')}
          style={styles.image}
          />
          <View style={styles.text}><Text>Medical</Text><Text>Record</Text></View>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={() => navigation.navigate('OnlineBooking')} style = {styles.buttonContainer}>
        <View style={styles.button}>
          <Image
          source={require('./app/img/icons/OB.png')}
          style={styles.image}
          />
          <View style={styles.text}><Text>Online</Text><Text>Booking</Text></View>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={() => navigation.navigate('SymptomChecker')} style = {styles.buttonContainer}>
        <View style={styles.button}>
          <Image
          source={require('./app/img/icons/SC.png')}
          style={styles.image}
          />
          <View style={styles.text}><Text>Symptom</Text><Text>Checker</Text></View>
        </View>
      </TouchableHighlight>
      </View>

      <View style={{flexDirection: 'row', justifyContent:"space-evenly",}}>
      <TouchableHighlight onPress={() => navigation.navigate('InstantTranslation')} style = {styles.buttonContainer}>
          <View style={styles.button}>
            <Image
            source={require('./app/img/icons/IT.png')}
            style={styles.image}
            />
            <View style={styles.text}><Text>Instant</Text><Text>Translation</Text></View>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => navigation.navigate('EmergencyCall')} style = {styles.buttonContainer}>
          <View style={styles.button}>
            <Image
            source={require('./app/img/icons/EC.png')}
            style={styles.image}
            />
            <View style={styles.text}><Text>Emergency</Text><Text>Call</Text></View>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => navigation.navigate('MedicalInsurance')} style = {styles.buttonContainer}>
          <View style={styles.button}>
            <Image
            source={require('./app/img/icons/MI.png')}
            style={styles.image}
            />
            <View style={styles.text}><Text>Medical</Text><Text>Insurance</Text></View>
          </View>
        </TouchableHighlight>
      </View>
    </View>
    </View>

  );
}

const Stack = createStackNavigator();

function App() {
  SplashScreen.hide();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
          height:100,
        },
        headerTransparent: 'true',
        headerTitleAlign:'center',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize:30,
        },
      }}>
        <Stack.Screen name="Home" component={HomeScreen}
        options={({navigation}) => ({ title: 'Medical_AU', headerRight: ()=>(
          <Icon name="user"
                onPress={() => navigation.navigate("Profile")}
                size={30} color="white" style={{marginRight:20}}/>
       )   
       
       })}/>
        <Stack.Screen name="EmergencyCall" component={ECScreen} options={({navigation}) => ({ title: 'Emergency Call', headerRight: ()=>(
          <Icon name="home"
                onPress={() => navigation.navigate("Home")}
                size={30} color="white" style={{marginRight:20}}/>
       )   
       
       })}/>
        <Stack.Screen name="InstantTranslation" component={ITScreen} options={({navigation}) => ({ title: 'Instant Translation', headerRight: ()=>(
          <Icon name="home"
                onPress={() => navigation.navigate("Home")}
                size={30} color="white" style={{marginRight:20}}/>
       )   
       
       })}/>
        <Stack.Screen name="MedicalInsurance" component={MIScreen} options={({navigation}) => ({ title: 'Medical Insurance', headerRight: ()=>(
          <Icon name="home"
                onPress={() => navigation.navigate("Home")}
                size={30} color="white" style={{marginRight:20}}/>
       )   
       
       })}/>
        <Stack.Screen name="MedicalRecord" component={MRScreen} options={({navigation}) => ({ title: 'Medical Record', headerRight: ()=>(
          <Icon name="home"
                onPress={() => navigation.navigate("Home")}
                size={30} color="white" style={{marginRight:20}}/>
       )   
       
       })}/>
        <Stack.Screen name="OnlineBooking" component={OBScreen} options={({navigation}) => ({ title: 'Online Booking', headerRight: ()=>(
          <Icon name="home"
                onPress={() => navigation.navigate("Home")}
                size={30} color="white" style={{marginRight:20}}/>
       )   
       
       })}/>
        <Stack.Screen name="HospitalList" component={HLScreen} options={({navigation}) => ({ title: 'Online Booking', headerRight: ()=>(
          <Icon name="home"
                onPress={() => navigation.navigate("Home")}
                size={30} color="white" style={{marginRight:20}}/>
       )   
       
       })}/>
        <Stack.Screen name="DoctorList" component={DLScreen} options={({navigation}) => ({ title: 'Doctor List', headerRight: ()=>(
          <Icon name="home"
                onPress={() => navigation.navigate("Home")}
                size={30} color="white" style={{marginRight:20}}/>
       )   
       
       })}/>
        <Stack.Screen name="SymptomChecker" component={SCScreen} options={({navigation}) => ({ title: 'Symptom Checker', headerRight: ()=>(
          <Icon name="home"
                onPress={() => navigation.navigate("Home")}
                size={30} color="white" style={{marginRight:20}}/>
       )   
       
       })}/>
        <Stack.Screen name="Questions" component={QuestionsScreen} options={({navigation}) => ({ title: 'Symptom Checker', headerRight: ()=>(
          <Icon name="home"
                onPress={() => navigation.navigate("Home")}
                size={30} color="white" style={{marginRight:20}}/>
       )   
       
       })}/>
        <Stack.Screen name="QuestionsChild" component={QuestionsChildScreen} options={({navigation}) => ({ title: 'Symptom Checker', headerRight: ()=>(
          <Icon name="home"
                onPress={() => navigation.navigate("Home")}
                size={30} color="white" style={{marginRight:20}}/>
       )   
       
       })}/>
        <Stack.Screen name="ResultAdult" component={ResultAdultScreen} options={({navigation}) => ({ title: 'Symptom Checker', headerRight: ()=>(
          <Icon name="home"
                onPress={() => navigation.navigate("Home")}
                size={30} color="white" style={{marginRight:20}}/>
       )   
       
       })}/>
        <Stack.Screen name="ResultChild" component={ResultChildScreen} options={({navigation}) => ({ title: 'Symptom Checker', headerRight: ()=>(
          <Icon name="home"
                onPress={() => navigation.navigate("Home")}
                size={30} color="white" style={{marginRight:20}}/>
       )   
       
       })}/>

       <Stack.Screen name="Profile" component={ProfileScreen} options={({navigation}) => ({ title: 'Profile', headerRight: ()=>(
          <Icon name="home"
                onPress={() => navigation.navigate("Home")}
                size={30} color="white" style={{marginRight:20}}/>
       )   
       
       })}/>

<Stack.Screen name="Time" component={TimeScreen} options={({navigation}) => ({ title: 'Time', headerRight: ()=>(
          <Icon name="home"
                onPress={() => navigation.navigate("Home")}
                size={30} color="white" style={{marginRight:20}}/>
       )   
       
       })}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    buttonContainer: {
      width: 100,
      height: 130,
      borderRadius: 20,
      margin: 10,
    },
    button: {
      flex: 1,
      backgroundColor: "#c7dbf1",
      padding: 10,
      width: 100,
      height: 130,
      borderRadius: 20,
      justifyContent: "space-around",
      alignItems:"center",
    },
    text: {
      textAlign: "center",
      justifyContent: "center",
      alignItems:"center",
    },
    row: {
      flexDirection:"row",
      alignContent:"space-between",
    },
    image: {
      tintColor: "#000000",
      resizeMode: "contain",
      height: 50,
      width: 50,
    },
    profileContainer: {
      width: 45,
      height: 45,
      borderRadius: 100,
      marginRight:30,
    },

    profile: {
      flex: 1,
      backgroundColor: "#fff",
      width: 45,
      height: 45,
      borderRadius: 100,
      justifyContent: "center",
      alignItems:"center",
    },
  });


export default App;
