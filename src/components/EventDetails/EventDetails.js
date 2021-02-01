import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

//Styling and NPM components
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


class EventDetails extends Component {

    // fires off funtions on pageload -- gets specific details from DB
    componentDidMount = () => {
     this.props.dispatch({ type: 'GET_DETAILS'});
    
      
    } 

    // this function helps the embeded link to display by using Reacts dangerouslySetInnerHTML
    displayBandcamp = () => {
      console.log(this.props.store.event.event[0].bandcamp);
      
      return {__html: this.props.store.event.event[0].bandcamp}
    }

  render() {
    return (
      <div className='container'>
          
              <h1 className='whatsHappening'>  </h1>
             
              {this.props.store.event.event.map((funEvent) =>{
                return <Card key={funEvent.event_id}  className='userPost'>
                 

                <CardContent>
                <Typography gutterBottom variant="h4" component="h1">
                {funEvent.title}
                </Typography>

                
                <a href={`https://www.google.com/maps/search/?api=1&query=${funEvent.address}`}>{funEvent.address}</a>
                
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
