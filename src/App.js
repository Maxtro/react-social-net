import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import Dialogs from './Components/Dialogs/Dialogs'
import News from './Components/News/News'
import Music from './Components/Music/Music'
import Settings from './Components/Settings/Settings'
import { Route } from 'react-router-dom';

const App = (props) => {

  return (
  
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>

        {/* <Route path='/dialogs' component={Dialogs} />
        <Route path='/profile' component={Profile} />
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} /> */}

        <Route path='/dialogs' render={() => <Dialogs 
                  dialogsData={props.state.profilePage.dialogsData} 
                  messagesData={props.state.messagesPage.messagesData} />} />
        <Route path='/profile' render={() => <Profile 
                  postData={props.state.profilePage.postData} 
                  addPost={props.addPost}
                  updatePostText = { props.updatePostText }
                  newPostText={props.state.profilePage.newPostText} />} />
        <Route path='/news' render={() => <News />} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/settings' render={() => <Settings />} />

      </div>
    </div>
  
  );
}

export default App;
