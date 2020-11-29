import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ResponsiveForm from '../NewEventForm/ResponsiveForm';

// MATERIAL UI COMPONENTS
import ListItemText from '@material-ui/core/ListItemText';
import DialogBox from '../DialogBox/DialogBox';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

class UserPage extends Component {


  
  // Upon Mount, this function will fetch User data depending on the User id
  componentDidMount = () => {
    this.props.dispatch({ type: 'USER_EVENT' , payload: this.props.store.user.id});
  }

  // This function will delete an event that corresponds to the event_id 
  deleteEvent = (event) => {
    console.log('whats up, were deleting suttf', event.event_id);
    this.props.dispatch({type: 'DELETE_ITEM', payload: event});
    window.location.reload(false);  
   }

   displayBandcamp = (funEvent) => {
    console.log(this.props.store.event.event[0].bandcamp);
    
    return {__html: funEvent.bandcamp}
  }

  render() {
        return (
      <div  className="container">
        <h1 className='whatsHappening'>{this.props.store.user.username}'s Upcoming Events:</h1>
         {this.props.store.event.event.map((funEvent) =>{
             return <Card key={funEvent.event_id}  className='userPost'>
                 

                  <CardContent>
                  <Typography gutterBottom variant="h4" component="h1">
                  {funEvent.title}
                  </Typography>

                  
                  <ListItemText primary={funEvent.address}/>

                  <ListItemText primary={funEvent.date}/>
                 

                  <img className='mediaClass' src={funEvent.image_url} alt="event picture"/> 

                 
                  <div className='mediaEmbed' dangerouslySetInnerHTML={this.displayBandcamp(funEvent)}></div>


                  

                  <Typography variant="body2" className='postDescription' component="p">
                  {funEvent.description}
                  </Typography>


                


                  <div className='deleteButton'>
                  <button onClick={() => this.deleteEvent(funEvent.event_id)} 
                  className='updateFormBtn'>Delete</button>  
                  </div>
                  <div className='updateButton'>
                  <DialogBox funEvent = { funEvent }/> 
                  </div>
                  
                  </CardContent>            
                  </Card>
                  
         })} 
  
      </div>
      
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
