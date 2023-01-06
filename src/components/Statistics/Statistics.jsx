import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import {makeRandomBackgroundColor} from '../../helpers/makeRandomBackgroundColor.js';

export const Statistics = ({ title, stats }) => {

  return (
    <section className={css.statistics}>
      {title ? <h2 className={css.title}>{title}</h2> : null}
      <ul className={css.statList}>

      {stats.map(({id, label, percentage}) => {
        return ( 
            <li style={makeRandomBackgroundColor()} key = {id} className={css.item}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
            </li>
        )})}
        
      </ul>
    </section>
  );
};


Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
            label:  PropTypes.string.isRequired,
            percentage:PropTypes.number.isRequired
        })).isRequired,
    title: PropTypes.string
}
