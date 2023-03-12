// import * as config from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { baseUrl } from '../Constants';
// import store from '../../store';
// import {LogoutSuccessfully} from '../../store/auth';
// import { useSelector , useDispatch} from 'react-redux';
// import { RootState } from '../store';
// let baseuri = baseUrl;
export const Request = async (method, url, data = {}, formData = false) => {
  console.log('url', baseuri + url +" "+ formData);
  // const token = useSelector((state: RootState) => state.auth.token);
  let headerObj = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  if (formData) {
    headerObj['Content-Type'] = 'multipart/form-data';
  }

  //
  const token = await AsyncStorage.getItem("@token")
  // console.log('tttttttttttttttttttttttttttttttt', data);
  if (token) {
    headerObj['authorization'] =   token;
  }
  // console.log({headerObj});
  let instance = axios.create({
    baseURL: baseuri,
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
    // base = RNFetchBlob.fetch(
    //   'POST',
    //   config.baseUrl + url,
    //   headerObj,
    // [
    //   {
    //     name: 'dash_image',
    //     filename: "profile"
    //     ,
    //     "type": data['mime'],
    //     data: RNFetchBlob.wrap(data['path'])
    //   }, { name: 'dash_id', data: String(data["id"]) },]
    // );

    // base = RNFetchBlob.fetch('POST', baseuri + url, headerObj, data);
  } else base = instance.get(url, {params: data});

  return base;
};
