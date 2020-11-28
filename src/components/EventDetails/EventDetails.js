import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Iframe from 'react-iframe';
//Styling and NPM components
// import Iframe from 'react-iframe'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import DialogBox from '../DialogBox/DialogBox';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

class EventDetails extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM

    // fires off funtions on pageload -- gets specific details from DB
    componentDidMount = () => {
     this.props.dispatch({ type: 'GET_DETAILS'});
    
      
    } 

    displayBandcamp = () => {
      console.log(this.props.store.event.event[0].bandcamp);
      
      return {__html: this.props.store.event.event[0].bandcamp}
    }

  render() {
    return (
      <div>
          
              <h1 className='whatsHappening'> Full Details! </h1>
             
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


                <Typography variant="body2"  component="p">
                {funEvent.description}
                </Typography>

                </CardContent>            
                </Card>
                
       })} 
       

          
        

      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(EventDetails);
