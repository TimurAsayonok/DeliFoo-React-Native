import * as types from './types'
import ReactNative from 'react-native'
const {NavigationExperimental} = ReactNative
const {jumpToIndex} = NavigationExperimental.StateUtils

export function setTab(tabIndex){
  return(dispatch, getState) => {
    const {tabs} = getState();
    console.log(tabs);
    dispatch(Object.assign({type: types.SET_TAB}, jumpToIndex(tabs, tabIndex)));
  }
}
