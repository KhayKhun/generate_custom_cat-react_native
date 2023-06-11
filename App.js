import React,{useState} from 'react';
import data from './data.json'
import { 
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Platform,
  Button,
  TextInput,
  Alert,
  ScrollView
} from 'react-native';

export default function App() {
  const [name,setName] = useState('');
  const [random,setRandom] = useState(null);
  console.log(random);
  function generateRandomNumber(maxValue, currentRandom) {
  let randomNumber = currentRandom;
  while (randomNumber === currentRandom) {
    randomNumber = Math.floor(Math.random() * (maxValue + 1));
  }
  return randomNumber;
}

  
// console.log(generateRandomNumber(data.length-1));

  const Reset = () =>{
    setRandom(null);
  }

  const GetCat = () => {
    if(name){
      const randomNum = generateRandomNumber(data.length-1,random);
      setRandom(randomNum);
    }else{
    Alert.alert('Meow says','Name is required',[{text : 'Okay'}]);
    }
  }
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Text style={styles.title}>If you were a cat?</Text>

      <TextInput placeholder='Enter your name' style={styles.input} onChangeText={text => setName(text)}/>
      
      <View style={{flexDirection : 'row',gap :10}}>
        <Button 
          title='Get My Cat'
          color='orange'
          onPress={GetCat}/>
        <Button 
          title='Reset'
          color='lightblue'
          onPress={Reset}/>
      </View>

      <View style={{flex :1,justifyContent : 'center'}}>
          {
          random != null ? 
          <View style={{flex :1,justifyContent : 'center',alignContent :'center'}}>
            <Image
            source={{
                uri : data[random].uri,
                width : 350,
                height : 400
              }}
              style={{resizeMode : 'contain'}}
            onError={err => console.log(err)}
              />
            <Text style={{color : 'white',fontSize :25}}>
              <Text style={{color : 'orange',fontSize :40}}>{name}</Text>
              <Text style={{color : 'teal'}}> would be </Text>
            {data[random].description}</Text>
          </View>
            :null
          }
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222',
    flex: 1,
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 20 : 0,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    color: 'white',
    marginTop: 20,
  },
  input :{
    width : '80%',
    color: '#000',
    padding : 20,
    backgroundColor : '#ddd'
  }
});
