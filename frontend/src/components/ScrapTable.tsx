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
        <table className="table table-sm table-dark table-hover">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">ScrapName</th>
                    <th scope="col">MinimumValue</th>
                    <th scope="col">Maximumvalue</th>
                    <th scope="col">AverageValue</th>
                    <th scope="col">Weight</th>
                    <th scope="col">Conductivity</th>
                    <th scope="col">IsTwoHanded</th>
                    
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
                            <button onClick={() => onAdd(scrap)} className="btn btn-primary">
                                Add
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ScrapTable;
