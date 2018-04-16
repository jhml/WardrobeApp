import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class CollectItem extends Component {
  render() {
  	console.log(this.props.project + "Inside");
  	return (
	<Card className="Collection">
	    <CardMedia
	      overlay={<CardTitle title="Shirt" />}>
	      <img className="maxImageWidth" src={this.props.project.shirtImage} alt="" />
	    </CardMedia>
	    <CardMedia
	      overlay={<CardTitle title="Pant" />}>
	      <img  className="maxImageHeight" src={this.props.project.pantImage} alt="" />
	    </CardMedia>
	    <CardTitle title={this.props.project.category} subtitle={this.props.project.title} />
	  </Card>
    );
  }
}

export default CollectItem;
