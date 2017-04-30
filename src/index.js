import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

// Redux 관련 불러오기
import { createStore } from 'redux'
import reducers from './reducers';
import { Provider } from 'react-redux';

// 스토어를 생성합니다                   // 크롬 Redux DevTools 를 허용합니다
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


// Provider 는 리액트 앱 내에서 store 에 쉽게 접근 할 수 있게 해줍니다.
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
