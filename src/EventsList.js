import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const EventList = () => {
    
    const { Data: events, isPending, error }= useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="Event-list">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div> }
            {events.map((Event) => (
                <div className="Event-preview" key={Event.id}>
                    <h2>{ Event.title }</h2>
                    <p>{ Event.body }</p>
                    <Link to={`/Events/${Event.id}`}>                        
                        <button>View Details</button>
                    </Link>
                                                            
                </div>
            ))}
        </div>
     );
}
 
export default EventList;