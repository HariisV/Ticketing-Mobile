import React, {useState} from 'react';
import {
  View,
  Image,
  TextInput,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {Text} from 'react-native-elements';
import styles from '../style';
import axios from '../../../utils/axios';
import Input from '../../../components/Auth/input';
import {Root, Popup} from 'react-native-popup-confirm-toast';

const Register = props => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
  });
  const [isError, setIsError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeForm = (text, name) => {
    setForm({...form, [name]: text});
  };

  const handleRegister = async () => {
    try {
      setIsLoading(true);
      const result = await axios.post('/auth/register', form);
      setTimeout(() => {
        setIsLoading(false);
        Popup.show({
          type: 'success',
          title: 'Success!',
          textBody: 'Success Register, Verif Now. ',
          callback: () => props.navigation.navigate('Login'),
          buttonText: 'Login Now',
        });
      }, 3000);
    } catch (error) {
      setTimeout(() => {
        setIsLoading(false);
        setIsError(error.response.data.msg);
      }, 2000);
      console.log(error.response.data.msg);
    }
  };
  console.log(isError);
  return (
    <ScrollView style={styles.bg}>
      <Root>
        <View style={[styles.container, {marginTop: 0}]}>
          <Text h3 style={[styles.h1, {marginTop: 20, marginBottom: 10}]}>
            Register
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '48%', marginRight: '2%'}}>
              <Input
                isError={isError}
                handleChangeForm={handleChangeForm}
                name="firstName"
                text="First Name"
                placeholder="First Name"
              />
            </View>
            <View style={{width: '48%', marginLeft: '2%'}}>
              <Input
                isError={isError}
                handleChangeForm={handleChangeForm}
                name="lastName"
                text="Last Name"
                placeholder="Last Name"
              />
            </View>
          </View>
          <Input
            isError={isError}
            handleChangeForm={handleChangeForm}
            name="email"
            text="Email"
            placeholder="Input Your Mail"
          />
          <Input
            isError={isError}
            handleChangeForm={handleChangeForm}
            name="password"
            text="Password"
            isPassword={true}
            placeholder="Create A Password"
          />
          <Input
            isError={isError}
            handleChangeForm={handleChangeForm}
            name="phoneNumber"
            text="Phone Number"
            isNumber={true}
            placeholder="Enter You Phone Number"
          />

          {!form.email ||
          !form.password ||
          !form.firstName ||
          !form.lastName ||
          !form.phoneNumber ? (
            <Text style={{marginTop: 20, textAlign: 'center'}}>
              Semua Input Harus Diisi
            </Text>
          ) : isError ? (
            <Text style={{marginTop: 20, textAlign: 'center'}}>{isError}</Text>
          ) : null}
          <View style={{width: '100%'}}>
            <TouchableOpacity
              style={[styles.button, {marginTop: 10}]}
              onPress={
                isLoading ||
                !form.email ||
                !form.password ||
                !form.firstName ||
                !form.lastName ||
                !form.phoneNumber
                  ? null
                  : handleRegister
              }>
              {isLoading ? (
                <ActivityIndicator size="large" color="white" />
              ) : !form.email ||
                !form.password ||
                !form.firstName ||
                !form.lastName ||
                !form.phoneNumber ? (
                <>
                  <Text style={styles.buttonText}>Invalid Value</Text>
                </>
              ) : (
                <Text style={styles.buttonText}>Registers</Text>
              )}
            </TouchableOpacity>
          </View>
          <Text style={styles.alReady}>
            Already Have An Account?{' '}
            <Text
              style={styles.alReadyLink}
              onPress={() => props.navigation.navigate('Login')}>
              Login Now
            </Text>
          </Text>
        </View>
      </Root>
    </ScrollView>
  );
};

export default Register;
