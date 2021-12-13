import React, {useState} from 'react';
import {
  View,
  Image,
  TextInput,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-elements';
import {Text} from 'react-native-elements';
import styles from '../style';
import {Root, Popup} from 'react-native-popup-confirm-toast';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect} from 'react-redux';
import {Login, getUserById} from '../../../stores/action/auth';

const LoginScreen = props => {
  const [form, setForm] = useState({email: '', password: ''});
  const [isError, setIsError] = useState({email: false, password: false});
  const [isLoading, setIsLoading] = useState(false);
  const handleChangeForm = (text, name) => {
    setForm({...form, [name]: text});
    setIsError({...isError, [name]: false});
  };
  const getToken = async () => {
    // const dataToken = await AsyncStorage.getItem('token');
    // console.log(dataToken);
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (error, stores) => {
        stores.map((result, i, store) => {
          console.log({[store[i][0]]: store[i][1]});
          return true;
        });
      });
    });
  };
  const handleLogin = async () => {
    try {
      getToken();
      if (!form.email || !form.password) {
        setIsError({
          email: !form.email,
          password: !form.password,
        });
      } else {
        setIsLoading(true);
        const result = await props.Login(form);
        await props.getUserById(result.value.data.data.id);
        await AsyncStorage.setItem('token', result.value.data.data.token);
        await AsyncStorage.setItem(
          'refreshToken',
          result.value.data.data.refreshToken,
        );
        setTimeout(() => {
          setIsLoading(false);
          props.navigation.navigate('AppScreen', {screen: 'home'});
        }, 1000);
      }
    } catch (error) {
      setTimeout(() => {
        if (error.response.data.msg == 'Email not registed') {
          setIsError({
            email: true,
            password: false,
          });
        } else if (error.response.data.msg == 'Wrong password') {
          setIsError({
            password: true,
            email: false,
          });
        } else {
          Popup.show({
            type: 'danger',
            title: 'Error !',
            textBody: error.response.data.msg,
            buttonText: 'Close',
            callback: () => Popup.hide(),
          });
        }
        setIsLoading(false);
      }, 1000);
    }
  };
  return (
    <ScrollView style={styles.bg}>
      <Root>
        <View style={styles.container}>
          <Image
            source={require('../../../assets/images/logo.png')}
            width={305}
          />

          <Text h3 style={styles.h1}>
            Sign In
          </Text>
          <View>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={[styles.input, isError.email ? styles.inputInvalid : '']}
              placeholder="Input Your Email"
              onChangeText={text => handleChangeForm(text, 'email')}
            />
            <Text style={isError.email ? styles.invalid : styles.none}>
              Your Email Is Wrong
            </Text>
          </View>
          <View>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={[
                styles.input,
                isError.password ? styles.inputInvalid : '',
              ]}
              placeholder="Enter Your Password"
              secureTextEntry={true}
              onChangeText={text => handleChangeForm(text, 'password')}
            />
            <Text style={isError.password ? styles.invalid : styles.none}>
              Your Password Is Wrong
            </Text>
          </View>
          <View style={{width: '100%'}}>
            <TouchableOpacity
              style={styles.button}
              onPress={isLoading ? null : handleLogin}>
              {isLoading ? (
                <ActivityIndicator size="large" color="white" />
              ) : (
                <Text style={styles.buttonText}>Login Now</Text>
              )}
            </TouchableOpacity>
          </View>
          <Text style={styles.alReady}>
            Dont Have An Account ?{' '}
            <Text
              style={styles.alReadyLink}
              onPress={() => props.navigation.navigate('Register')}>
              Register
            </Text>
          </Text>
        </View>
      </Root>
    </ScrollView>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = {Login, getUserById};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
