import React from 'react';
import { Scrap } from "../scrap";

interface SelectedScrap extends Scrap {
    id: string;
}

interface SelectedScrapTableProps {
    selectedScraps: SelectedScrap[];
    totalValue: number;
    totalWeight: number;
    onDelete: (id: string) => void;
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
            <div className="mb-4">
                <h3 className="font-weight-bold">Total</h3>
                <p>Total Value: {totalValue}</p>
                <p>Total Weight: {totalWeight}</p>
            </div>
            <table className="table table-dark table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ScrapName</th>
                        <th scope="col">MinimumValue</th>
                        <th scope="col">Maximumvalue</th>
                        <th scope="col">AverageValue</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Conductivity</th>
                        <th scope="col">IsTwoHanded</th>
                        <th scope="col">DeleteButton</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedScraps.map((scrap) => (
                        <tr key={scrap.id}>
                            <td>{scrap.ScrapName}</td>
                            <td>{scrap.MinimumValue}</td>
                            <td>{scrap.Maximumvalue}</td>
                            <td>{calculateAverage(scrap.MinimumValue, scrap.Maximumvalue)}</td>
                            <td>{scrap.Weight}</td>
                            <td>{scrap.Conductivity}</td>
                            <td>{scrap.IsTwoHanded ? "Yes" : "No"}</td>
                            <td>
                                <button onClick={() => onDelete(scrap.id)} className="btn btn-danger">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SelectedScrapTable;
