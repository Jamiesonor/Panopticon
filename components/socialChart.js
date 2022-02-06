import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, LineController } from 'chart.js'; 
import { Chart, Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    LineController,
    Title,
    Tooltip,
    Legend
);

export default function SocialChart({ data }) {
    const options = {
        responsive: true,
        interaction: {
          intersect: false,
          mode: "index"
        },
        scales: {
            x: {
                stacked: true,
                ticks: {
                    maxTicksLimit: 10
                },
                grid: {
                    drawOnChartArea: false,
                }
            },
            y: {
                stacked: true,
                grid: {
                    drawOnChartArea: false,
                },
            },
        }
      }

    return(<Bar data={data} options={options} />)
}