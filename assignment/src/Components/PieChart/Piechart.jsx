
import React from 'react'
import { Doughnut } from 'react-chartjs-2';

export const data = {
    labels: ['Supplier-1', 'Supplier-2', 'Supplier-3', 'Supplier-4', 'Supplier-5', 'Supplier-6'],
    datasets: [
        {

            data: [800, 420, 420, 889, 1624, 889],
            backgroundColor: [
                '#FFC400',
                '#3BB85E',
                '#B54F69',
                '#E994B1',
                '#7C95EA',
                '#544B8D',
            ],
            borderWidth: 1,
        },
    ],
};

export const value = {
    "Supplier -1": "800 CO2e",
    "Supplier -1": "800 CO2e",
}

const options = {
    plugins: {
        legend: {
            display: false,
        },
        tooltips: {
            enabled: false,
        },
        datalabels: {
            color: 'white',
            display: true,
           
        },
    },
};

export const Piechart = () => {
    return <Doughnut data={data} options={options} />
}
