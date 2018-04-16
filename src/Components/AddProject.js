import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import fetch from 'isomorphic-fetch';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';


const styles = {
	  button: {
	    margin: 12,
	  },
	  exampleImageInput: {
	    cursor: 'pointer',
	    position: 'absolute',
	    top: 0,
	    bottom: 0,
	    right: 0,
	    left: 0,
	    width: '100%',
	    opacity: 0,
	  },
	};

class AddProject extends Component {

	
	constructor(){
		super();
		
		this.state = {
			newProject : {},
			file: '',
      		imagePreviewShirtUrl: '',
      		imagePreviewPantUrl: '',
      		infoStatus: ''
		}
	}

	static defaultProps = {
		categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "More office? eh"]
	}
	handleSubmit(e) {
		if(document.getElementById("text-title").value === ''){
			alert("Title is required");
		} else {
			this.setState({newProject: {
				title: document.getElementById("text-title").value,
				category: this.refs.category.value,
				shirtImage: this.state.imagePreviewShirtUrl,
				pantImage: this.state.imagePreviewPantUrl
			}}, function() {
				//console.log(this.state);
				//var newProject = this.props.newProject;
				this.props.addProject(this.state.newProject);
			});
		}

		e.preventDefault();
	}
	handleImageChange(e) {
	    e.preventDefault();

	    let reader = new FileReader();
	    //console.log();
	    let file = e.target.files[0];
	    if(e.target.id == "shirt-img")
	    {
		    reader.onloadend = () => {
		      this.setState({
		        file: file,
		        imagePreviewShirtUrl: reader.result
		      });
		    }
	    }
	    else {
	    	reader.onloadend = () => {
		      this.setState({
		        file: file,
		        imagePreviewPantUrl: reader.result
		      });
		    }
	    }
	    
	    reader.readAsDataURL(file)
	}

  render() { 
  	let {imagePreviewShirtUrl} = this.state;
  	let {imagePreviewPantUrl} = this.state;
  	let $imageShirtPreview = null;
  	let $imagePantPreview = null;
  	if (imagePreviewShirtUrl) {
      $imageShirtPreview = (<img src={imagePreviewShirtUrl} />);
    }
    if (imagePreviewPantUrl) {
      $imagePantPreview = (<img src={imagePreviewPantUrl} />);
    }
	let categoryOptions = this.props.categories.map(category => {
		return <option key={category} value={category}  >{category}</option>
	});
    return (
      <div >
      <div className="LeftAddProduct">
      	<h3>Add your pair</h3> 
      	<form id="fileuploadform" onSubmit={this.handleSubmit.bind(this)}>
      		<div>
      			<TextField
      				hintText="Title"
      				type="text"
      				 ref="title"
	      			id="text-title"/>
	      	
      		</div>
      		<br/>
      		<div>
  			  <RaisedButton
			      label="Choose a shirt image"
			      labelPosition="before"
			      containerElement="label">
			      <input type="file"  id = "shirt-img" onChange={this.handleImageChange.bind(this)} style={styles.exampleImageInput} />
			    </RaisedButton>
      		</div>
      		<br/><br/>
      		<div>
  			  <RaisedButton
			      label="Choose a pant image"
			      labelPosition="before"
			      containerElement="label">
			      <input type="file" id = "pant-img" onChange={this.handleImageChange.bind(this)} style={styles.exampleImageInput} />
			    </RaisedButton>
      		</div>
      		<br/><br/>
      		<div>
      			Category:
      			<select ref="category">
      				{categoryOptions}
      			</select>
      		</div>
      		<br/><br/>
      		<RaisedButton secondary={true} label="Save" type="submit" value="submit" />
      	</form>
      	</div>
      	<div className="RightAddProduct">
	      	 <div className="ImageBoxShirt">
	      	 	{$imageShirtPreview}
	      	 </div>
	      	 <div className="ImageBoxPant">
	      	 	{$imagePantPreview}
	      	 </div>
      	 </div>
      </div>
    );
  }
}

export default AddProject;
