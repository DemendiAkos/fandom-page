import React from 'react';
import { Scrap } from "../scrap";

interface SelectedScrapTableProps {
    selectedScraps: Scrap[];
    totalValue: number;
    totalWeight: number;
    onDelete: (scrap: Scrap) => void;
}

const SelectedScrapTable: React.FC<SelectedScrapTableProps> = ({ selectedScraps, totalValue, totalWeight, onDelete }) => {

    const calculateAverage = (min: number, max: number) => {
        if (typeof min === 'number' && typeof max === 'number') {
            return (min + max) / 2;
        }
        return 'N/A';
    };

    return (
        <div>
            <h2>Selected Scraps</h2>
            <table>
                <thead>
                    <tr>
                        <th>ScrapName</th>
                        <th>MinimumValue</th>
                        <th>Maximumvalue</th>
                        <th>AverageValue</th>
                        <th>Weight</th>
                        <th>Conductivity</th>
                        <th>IsTwoHanded</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedScraps.map((scrap, index) => (
                        <tr key={index}>
                            <td>{scrap.ScrapName}</td>
                            <td>{scrap.MinimumValue}</td>
                            <td>{scrap.Maximumvalue}</td>
                            <td>{calculateAverage(scrap.MinimumValue, scrap.Maximumvalue)}</td>
                            <td>{scrap.Weight}</td>
                            <td>{scrap.Conductivity}</td>
                            <td>{scrap.IsTwoHanded}</td>
                            <td>
                                <button onClick={() => onDelete(scrap)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h3>Total</h3>
            <p>Total Value: {totalValue}</p>
            <p>Total Weight: {totalWeight}</p>
        </div>
    );
};

export default SelectedScrapTable;
