import React, { useState } from 'react';
import SignIn from './SignIn';
import Main from './Main';
import config from '../config.json';

export default () => {
  const [name, setName] = useState('');
  if(config.SignInEnabled && name === ''){
    return <SignIn setName={setName}/>;
  
  // 文字列が渡ってきた場合のみ、メイン画面に遷移する。
  }else{
    return <Main name={name} />
  }
};
