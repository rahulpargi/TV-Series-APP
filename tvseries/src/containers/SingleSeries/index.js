import React ,{Component} from 'react';
import Loader from '../../components/Loader';

class SingleSeries extends Component{
    state={
        show:null
    }
    componentDidMount(){
        const{id}=this.props.match.params;
        fetch(`http://api.tvmaze.com/shows/${id}`)
            .then(response=>response.json())
            .then(json=>this.setState({show:json}))
    }
    render(){
        const {show}=this.state;
        console.log(show);
       
        return(
            <div>
                {show===null&&<Loader/>}
                {
                    show!==null
                    &&
                    <div>
                        <p>{show.name}</p>
                       
                        <p><img alt="Show Image" src={show.image.medium}/></p>
                        <p>Show Premiered - {show.premiered}</p>
                        <p>Language- {show.language}</p>
                        <p>Genre - {show.genres}</p>
                        <p>Rating - {show.rating.average}</p>
                        
                        

                    </div>
                }
            </div>
        )
    }
}
export default  SingleSeries;