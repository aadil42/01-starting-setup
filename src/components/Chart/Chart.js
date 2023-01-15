import React from 'react';
import ChartBar from './ChartBar';

import { v4 as uuidv4 } from 'uuid';

// css
import './Chart.css';

const Chart = (props) => {    

    const values = props.dataPoints.map((dataPoint) => dataPoint.value);
    const maxValue = Math.max(...values);

    return(
        <div className="chart">
            {props.dataPoints.map((dataPoint) => {
                return <ChartBar 
                    key = {uuidv4()}
                    value={dataPoint.value}
                    maxValue={maxValue}
                    label={dataPoint.label}
                />;
            })}
        </div>
    );
}

export default Chart;