import React from "react";
import { Provider } from 'react-redux';
// import { StackNavigator, DrawerNavigator } from "react-navigation";
import { createDrawerNavigator, createStackNavigator, createAppContainer } from "react-navigation";

import SideBar from "./components/sidebar";
import Login from '../src/containers/login';
import PIForm from '../src/containers/pi-form';
import Home from '../src/containers/home';
import TopmenuProfile from '../src/containers/topmenu-profile';
import TopmenuEvent from '../src/containers/topmenu-event';
import TopmenuExerciseDictionary from '../src/containers/topmenu-exercisedictionary';
import ExerciseDetails from '../src/containers/exercise-details';
import Diary from '../src/containers/diary';
import DiaryBody from '../src/containers/diary-body';
import DiaryDiet from '../src/containers/diary-diet';
import EnterMeal from '../src/containers/enter-meal';
import DietSettings from '../src/containers/diet-settings';
import DiaryExercise from '../src/containers/diary-exercise';
import Course from './containers/course';
import Challenge from "./containers/challenge";
import CustomChallengeDetails from './containers/custom-challenge-details';
import YourChallenge from './containers/challenge-yourchallenge';
import GetChallenge from './containers/challenge-getchallenge';
import ChallengeGeneration from './containers/challenge-generation';
import ChallengeGenerationExerciseList from './containers/challenge-generation-exerciselist';
import ChallengeDetails from './containers/challenge-details';

import configureStore from './redux/configureStore';

const store = configureStore();

const Drawer = createDrawerNavigator(
  {
    Home: { screen: Home },
    Diary: { screen: Diary },
    Course: { screen: Course },
    Challenge: { screen: Challenge },
    TopmenuProfile: { screen: TopmenuProfile },
    TopmenuExercisedictionary: { screen: TopmenuExerciseDictionary },
    TopmenuEvent: { screen: TopmenuEvent },
    // TopmenuArchive: { screen: TopmenuArchive },
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = createStackNavigator(
  {
    Drawer: { screen: Drawer },

    PIForm: { screen: PIForm },
    Login: { screen: Login },
    // Home: { screen: Home },
    ExerciseDetails: { screen: ExerciseDetails },
    Diary: { screen: Diary },
    DiaryBody: { screen: DiaryBody },
    DiaryDiet: { screen: DiaryDiet },
    DiaryExercise: { screen: DiaryExercise },
    EnterMeal: { screen: EnterMeal },
    DietSettings: { screen: DietSettings },
    Course: { screen: Course },
    Challenge: { screen: Challenge },
    CustomChallengeDetails: { screen: CustomChallengeDetails },
    YourChallenge: { screen: YourChallenge },
    GetChallenge: { screen: GetChallenge },
    ChallengeGeneration: { screen: ChallengeGeneration },
    ChallengeGenerationExerciseList: { screen: ChallengeGenerationExerciseList },
    ChallengeDetails: { screen: ChallengeDetails },
  },
  {
    initialRouteName: "Login",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <Provider store={store}>
      <AppContainer />
    </Provider>;
  }
}