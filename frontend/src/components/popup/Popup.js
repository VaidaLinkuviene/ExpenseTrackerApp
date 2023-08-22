import DoughnutChart from '../doughnutChart/DoughnutChart';
import './Popup.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";


const element = <FontAwesomeIcon icon={faXmark} />;

const Popup = ({data, onClose, chartOptions}) => {
  
    return (
        <div className="popup-wrapper">
        <div className="popup-chart">
            <button className='close-popup' onClick={onClose}>{element}</button>
          <DoughnutChart data={data} chartOptions={chartOptions}/>
        </div>
        </div>
      );
    };


export default Popup