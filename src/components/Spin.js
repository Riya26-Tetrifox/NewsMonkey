
import loading from './spined.gif'
const Spin=()=> {
    return (
      <div 
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <img 
          src={loading} 
          alt="loading" 
          style={{ width: "50px", height: "50px" }}
        />
      </div>
    );
  }
export default Spin
