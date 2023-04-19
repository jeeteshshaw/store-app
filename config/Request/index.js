
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { baseUrl } from '../Constants';
// import store from '../../store';
// import {LogoutSuccessfully} from '../../store/auth';
// import { RootState } from '../store';

export const Request = async (method, url, data = {}, formData = false) => {
  console.log('url', baseUrl + url +" "+ formData);
  
  let headerObj = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  if (formData) {
    headerObj['Content-Type'] = 'multipart/form-data';
  }

  //
  const token = await AsyncStorage.getItem("@token")
  console.log('tttttttttttttttttttttttttttttttt', token);
  if (token) {
    headerObj['authorization'] =  "Bearer "+ token;
  }
  // console.log({headerObj});
  let instance = axios.create({
    baseURL: baseUrl,
    timeout: 8000,
    headers: headerObj,
    validateStatus: status => {
      // console.log({status})
      if (status === 401) {
        // AsyncStorage.removeItem('token');
        // store.dispatch(LogoutSuccessfully());
      }
      return status >= 200 && status < 300;
    },
  });

  let base;

  if (method === 'post') {
    console.log('post');
    base = instance.post(url, data);
  } else if (method === 'put') {
    base = instance.put(url, data);
  } else if (method === 'patch') {
    base = instance.patch(url, data);
  } else if (method === 'delete') {
    base = instance.delete(url,data);
  } else if (method === 'upload') {

  } else base = instance.get(url, {params: data});

  return base;
};
