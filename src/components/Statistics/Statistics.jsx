import CSS from './Statistics.module.css';
import PropTypes from 'prop-types'

export const Statistics = ({ title, stats }) => {
  return title && <section className={CSS.statistics}> 
      <h2 className={CSS.title}>{title}</h2>
      <ul className={CSS.list}>
        {stats.map(({ id, label, percentage} ) =>
        <li className={CSS.item} key={id}>
          <span className={CSS.label}>{label}</span>
          <span className={CSS.percentage}>{percentage}%</span>
        </li>
        )}  
      </ul>
    </section>
  };


  Statistics.propTypes = {
    title:PropTypes.string,
    stats:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }),
    ), 
  }