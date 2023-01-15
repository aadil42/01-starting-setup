import React from 'react';
import ChartBar from './ChartBar';

import { v4 as uuidv4 } from 'uuid';

// css
import './Chart.css';

const Chart = (props) => {    

    return(
        <div className="chart">
            {props.dataPoints.map((dataPoint) => {
                return <ChartBar 
                    key = {uuidv4()}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />;
            })}
        </div>
    );
}

export default Chart;