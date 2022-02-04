import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'; 
import { Bar } from 'react-chartjs-2';

Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
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