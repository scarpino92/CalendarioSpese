import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
    const chartDataPoints = [
        { label: 'Gen', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'Mag', value: 0 },
        { label: 'Giu', value: 0 },
        { label: 'Lug', value: 0 },
        { label: 'Ago', value: 0 },
        { label: 'Set', value: 0 },
        { label: 'Ott', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dic', value: 0 },
    ];

    for(const expense of props.expenses){
        const expenseMonth = expense.date.getMonth(); // Jan => 0
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    return <Chart dataPoints={chartDataPoints}/>
};

export default ExpensesChart;