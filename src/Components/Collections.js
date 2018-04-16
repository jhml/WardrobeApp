import React, { Component } from 'react';
import CollectItem from './CollectItem';

class Collections extends Component {

  render() { 
	let collectItems;
	if(this.props.projects) {
		collectItems = this.props.projects.map(project => {
			return  (
				<CollectItem key={project.title} project={project} />
				);
		});	
	}
    return (
      <div className="Collections">
      	<h2>Items that you have used this week!!</h2>
       	<hr />
      	{collectItems}
      </div>
    );
  }
}

export default Collections;
