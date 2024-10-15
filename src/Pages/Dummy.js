// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import { Chart, registerables } from 'chart.js';

// Chart.register(...registerables);

// const ChartComponent = ({ data }) => {
//   const timeLabels = data.map(item => item.time); // Extract time labels
//   const statusLabels = ['OFF', 'SB', 'D', 'ON'];
  
//   // Map status to a numeric scale for the y-axis
//   const numericData = data.map(item => {
//     switch (item.status.toUpperCase()) {
//       case 'OFF':
//         return 0;
//       case 'SB':
//         return 1;
//       case 'D':
//         return 2;
//       case 'ON':
//         return 3;
//       default:
//         return 0; // default to OFF if status is unknown
//     }
//   });

//   const chartData = {
//     labels: timeLabels,
//     datasets: [
//       {
//         label: 'Status',
//         data: numericData,
//         borderColor: 'blue',
//         backgroundColor: 'rgba(0, 0, 255, 0.2)',
//         fill: false,
//         tension: 0.4, // smooth lines
//       }
//     ],
//   };

//   const options = {
//     scales: {
//       y: {
//         title: {
//           display: true,
//           text: 'Status',
//         },
//         ticks: {
//           callback: (value) => statusLabels[value],
//         },
//         min: 0,
//         max: 3,
//       },
//       x: {
//         title: {
//           display: true,
//           text: 'Time',
//         },
//       },
//     },
//     plugins: {
//       tooltip: {
//         callbacks: {
//           label: (tooltipItem) => {
//             const index = tooltipItem.dataIndex;
//             return `${statusLabels[numericData[index]]} - ${timeLabels[index]}`;
//           },
//         },
//       },
//     },
//   };

//   return (
//     <div style={{width : '600px' , padding : '20px'}} >
//       <h2>Status Chart</h2>
//       <Line data={chartData} options={options} />
//     </div>
//   );
// };

// // Sample data
// const data = [
//   { status: 'OFF', time: '00:00' },
//   { status: 'OFF', time: '10:00' },
//   { status: 'SB', time: '10:01' },
//   { status: 'D', time: '21:42' },
//   { status: 'ON', time: '22:00' },
// ];

// export default function App() {
//   return <ChartComponent data={data} />;
// }


import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const ChartComponent = () => {
  // Sample static data
  const data = [
    { status: 'ON', time: '00:00' },
    { status: 'D', time: '10:00' },
  ];

  // Map status to a numeric scale for the left y-axis
  const numericData = data.map(item => {
    switch (item.status.toUpperCase()) {
      case 'OFF':
        return 0; // OFF
      case 'SB':
        return 1; // SB
      case 'D':
        return 2; // D
      case 'ON':
        return 3; // ON
      default:
        return 0; // Default to OFF if status is unknown
    }
  });

  // Create a combined dataset
  const chartData = {
    labels: data.map((_, index) => index + 1), // Dummy labels for data points
    datasets: [
      {
        label: 'Status & Time',
        data: numericData,
        borderColor: '#1890FF',
        backgroundColor: '#1890FF',
        fill: false,
        tension: 0.4, // Smooth lines
        yAxisID: 'y', // Use left y-axis for status
      }
    ],
  };

  const options = {
    scales: {
      y: {
        title: {
          display: true,
          text: '',
        },
        ticks: {
          callback: (value) => {
            switch (value) {
              case 0: return 'OFF';
              case 1: return 'SB';
              case 2: return 'D';
              case 3: return 'ON';
              default: return '';
            }
          },
        },
        min: 0,
        max: 3,
      },
      y1: { // Right y-axis for time
        title: {
          display: true,
          text: '',
        },
        position: 'right',
        ticks: {
          callback: (value) => {
            const hours = Math.floor(value / 60);
            const minutes = value % 60;
            return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`; // Format as HH:MM
          },
        },
        min: 0,
        max: 1440, // Total minutes in a day
      },
      x: {
        display: false, // Hide x-axis
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const index = tooltipItem.dataIndex;
            const status = [  'OFF', 'SB', 'D', 'ON'][numericData[index]];
            const time = data[index].time; // Get the corresponding time
            return `${status} - ${time}`;
          },
        },
      },
    },
  };

  return (
    <div style={{width : '600px' , margin : 'auto' , padding : '20px'}} >
      <Line data={chartData} options={options} />
    </div>
  );
};

export default function App() {
  return <ChartComponent />;
}


// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import { Chart, registerables } from 'chart.js';

// Chart.register(...registerables);

// const ChartComponent = () => {
//   // Sample static data
//   const data = [
//     { status: 'ON', time: '00:00' },
//     { status: 'D', time: '10:00' },
//     { status: 'SB', time: '21:42' },
//     { status: 'OFF', time: '22:00' },
//   ];

//   // Map status to a numeric scale for the left y-axis
//   const numericData = data.map(item => {
//     switch (item.status.toUpperCase()) {
//       case 'OFF':
//         return 3; // OFF (top)
//       case 'SB':
//         return 2; // SB
//       case 'D':
//         return 1; // D
//       case 'ON':
//         return 0; // ON (bottom)
//       default:
//         return 0; // Default to OFF if status is unknown
//     }
//   });

//   // Create a combined dataset
//   const chartData = {
//     labels: data.map((_, index) => index + 1), // Dummy labels for data points
//     datasets: [
//       {
//         label: 'Status & Time',
//         data: numericData,
//         borderColor: '#1890FF',
//         backgroundColor: '#1890FF',
//         fill: false,
//         tension: 0.4, // Smooth lines
//         yAxisID: 'y', // Use left y-axis for status
//       }
//     ],
//   };

//   const options = {
//     scales: {
//       y: {
//         title: {
//           display: true,
//           text: '',
//         },
//         ticks: {
//           callback: (value) => {
//             switch (value) {
//               case 0: return 'ON';
//               case 1: return 'D';
//               case 2: return 'SB';
//               case 3: return 'OFF';
//               default: return '';
//             }
//           },
//         },
//         min: 0,
//         max: 3,
//       },
//       y1: { // Right y-axis for time
//         title: {
//           display: true,
//           text: '',
//         },
//         position: 'right',
//         ticks: {
//           callback: (value) => {
//             const hours = Math.floor(value / 60);
//             const minutes = value % 60;
//             return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`; // Format as HH:MM
//           },
//         },
//         min: 0,
//         max: 1440, // Total minutes in a day
//       },
//       x: {
//         display: false, // Hide x-axis
//       },
//     },
//     plugins: {
//       tooltip: {
//         callbacks: {
//           label: (tooltipItem) => {
//             const index = tooltipItem.dataIndex;
//             const status = ['ON', 'D', 'SB', 'OFF'][numericData[index]];
//             const time = data[index].time; // Get the corresponding time
//             return `${status} - ${time}`;
//           },
//         },
//       },
//     },
//   };

//   return (
//     <div style={{ width: '600px', margin: 'auto', padding: '20px' }}>
//       <Line data={chartData} options={options} />
//     </div>
//   );
// };

// export default function App() {
//   return <ChartComponent />;
// }

