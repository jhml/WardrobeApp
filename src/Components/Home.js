import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './Components/MyAwesomeReactComponent';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';

class Projects extends Component {

constructor() {
    super();
    this.state = {
      projects : []
    }
  }

  componentWillMount() {
    this.setState({projects: [
        {
          title : 'Business website',
          category: 'web design'
        },
        {
          title : 'Social app',
          category: 'Mobile'
        },
        {
          title : 'Ecommerce',
          category: 'web dev'
        } 
        ]});
  }
  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects: projects});
  }
    return (
      <div className="Home">
       <MuiThemeProvider>
         <AddProject addProject={this.handleAddProject.bind(this)} />
         <Projects projects={this.state.projects} />
       </MuiThemeProvider>
      </div>
    );
  }
}

export default Projects;
