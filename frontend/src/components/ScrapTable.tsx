import React from 'react';
import { Scrap } from "../scrap";

interface ScrapTableProps {
    scraps: Scrap[];
    onAdd: (scrap: Scrap) => void;
}

const ScrapTable: React.FC<ScrapTableProps> = ({ scraps, onAdd }) => {
    const calculateAverage = (min: number, max: number) => {
        if (typeof min === 'number' && typeof max === 'number') {
            return (min + max) / 2;
        }
        return 'N/A';
    };

    return (
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
                    <th>AddButton</th>
                </tr>
            </thead>
            <tbody>
                {scraps.map((scrap, index) => (
                    <tr key={index}>
                        <td>{scrap.ScrapName}</td>
                        <td>{scrap.MinimumValue}</td>
                        <td>{scrap.Maximumvalue}</td>
                        <td>{calculateAverage(scrap.MinimumValue, scrap.Maximumvalue)}</td>
                        <td>{scrap.Weight}</td>
                        <td>{scrap.Conductivity}</td>
                        <td>{scrap.IsTwoHanded}</td>
                        <td>
                            <button onClick={() => onAdd(scrap)}>Add</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ScrapTable;
