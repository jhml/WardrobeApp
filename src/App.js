import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Welcome from './Components/Welcome';
import Collections from './Components/Collections';
import AddCollection from './Components/AddCollection';
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './Components/MyAwesomeReactComponent';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import IconHome from 'material-ui/svg-icons/action/home';
import IconAddPair from 'material-ui/svg-icons/action/accessibility';
import IconList from 'material-ui/svg-icons/image/color-lens';


import './App.css';

const homeIcon = <IconHome />;
const addPairIcon = <IconAddPair />;
const listIcon = <IconList />;



class App extends Component {

  
  constructor() {
    super();

    if(sessionStorage.getItem('wardrobeEmail') === "") {
        var emailInSession = "";
    }
    else {
      emailInSession = sessionStorage.getItem('wardrobeEmail');
    }
    
    this.state = {
      projects : [],
      selectedIndex: 0,
      userEmail: emailInSession
    }
  }

  select = (index) => this.setState({selectedIndex: index});

  componentWillMount() {
    this.setState({projects: [
        {
          title : 'Ripped',
          category: 'Friday',
          shirtImage : './assets/images/top1.jpg',
          pantImage: './assets/images/jeans1.jpg'
        }
        ]});
  }
  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects: projects});
  }
  render() {



    return (
      <div className="App">
      <MuiThemeProvider>
      <Router>
            <div>
               <h2>Welcome hippie!!</h2>
               <hr />

              <Tabs>
                <Tab
                  label="Home"
                  icon={homeIcon}
                  containerElement={<Link to="/" />}/>
                <Tab
                  label="Add your pair"
                  icon={addPairIcon}
                  containerElement={<Link to="/AddCollection" />}/>
                <Tab
                  label="Past week collection"
                  icon={listIcon}
                  containerElement={<Link to="/Collections" />}/>
              </Tabs>
              
              <hr/>
               <Switch>
                  <Route exact path='/' component={Welcome} />
                  <Route  render={()=><AddCollection addProject={this.handleAddProject.bind(this)}/>}  exact path='/AddCollection'  />
                  <Route render={()=><Collections projects={this.state.projects}/>}  exact path='/Collections'  />
               </Switch>
            </div>
         </Router>
       
         
       </MuiThemeProvider>
      </div>
    );
  }
}
export default App;
