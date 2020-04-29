import React from 'react';
import styles from './statistics.module.css';
import PropTypes from 'prop-types';
import {choseRandomColor} from "../../ui/choseRandomColor"

export const Statistics = ({title, stats}) => {
    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}
            <ul className={styles.statList}>
                {stats.map(({id, label, percentage}) => (
                        <li key={id}
                            style={{backgroundColor: choseRandomColor()}}
                        >
                            <span className={styles.label}>{label}</span>
                            <span className="percentage">{percentage}%</span>
                        </li>
                    )
                )}


            </ul>
        </section>
    )
};

Statistics.defaultProps = {
    title: "Upload stats"
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number
        })
    )
}


