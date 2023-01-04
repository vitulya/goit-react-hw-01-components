import css from './Statistics.module.css';
import PropTypes from 'prop-types';


export const Statistics = ({ title, stats }) => {


  const randomBg = () => {
    const color = `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
    return {backgroundColor: color}
  }

  return (
    <section className={css.statistics}>
      {title ? <h2 className={css.title}>{title}</h2> : null}
      <ul className={css.statList}>

      {stats.map(({id, label, percentage}) => {
        return ( 
            <li style={randomBg()} key = {id} className={css.item}>
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
