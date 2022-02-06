import { Chart as ChartJS, CategoryScale, BarElement, LinearScale, PointElement, LineController, LineElement, Title, Tooltip, Legend, Filler} from 'chart.js'; 
import { Chart } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineController,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export default function DataChart({ data }) {
    const options = {
        responsive: true,
        interaction: {
          intersect: false,
          mode: "index"
        },
        legend: {
          position: "top",
        },
        elements: {
            line: {
                borderWidth: 2
            },
            point: {
                radius: 0
            }
        },
        scales: {
            x: {
                ticks: {
                    maxTicksLimit: 10
                },
                grid: {
                    drawOnChartArea: false,
                }
            },
            y: {
                type: "linear",
                display: false,
                position: "right",
                grid: {
                    drawOnChartArea: false,
                },
            },
            y1: {
                type: "linear",
                display: false,
                position: "left",
                grid: {
                    drawOnChartArea: false,
                },
            },
            y2: {
                type: "linear",
                display: true,
                position: "right",
                grid: {
                    drawOnChartArea: false,
                },
            },
            y3: {
                beginAtZero: true,
                type: "linear",
                display: true,
                position: "left",
                grid: {
                    drawOnChartArea: false,
                },
            },
            y4: {
                type: "linear",
                display: false,
                position: "right",
                grid: {
                    drawOnChartArea: false,
                },
            },
            y5: {
                type: "linear",
                display: false,
                position: "right",
                grid: {
                    drawOnChartArea: false,
                },
            },
        }
      }

    return(<Chart data={data} options={options} />)
}