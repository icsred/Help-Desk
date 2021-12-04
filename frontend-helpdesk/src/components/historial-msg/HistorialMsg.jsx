import react from 'react'
import PropTypes from 'prop-types'
import './HistorialMsg.scss';

export const HistorialMsg = ({msg}) => {
  if (!msg) return null;

  return msg.map((row, i) => (
    <div key={i} className="historial">
      <div className="send font-weight-bold text-danger mt-2">
        <div className="creador">{row.from}</div>
        <div className="fecha">{row.date}</div>
      </div>
      <div className="mensaje mt-3">
        {row.mensaje}
      </div>
    </div>
  ));
    
};

HistorialMsg.propTypes = {
  msg: PropTypes.array.isRequired
}