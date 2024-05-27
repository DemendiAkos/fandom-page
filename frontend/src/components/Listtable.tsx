import React, { useEffect, useState } from "react";
import { Scrap, Scraps } from "../scrap";
import ScrapTable from "./ScrapTable";
import SelectedScrapTable from "./SelectedScrapTable";
import { v4 as uuidv4 } from 'uuid';  

interface SelectedScrap extends Scrap {
    id: string;  
}

const Listtable: React.FC = () => {
    const [scrap, setScrap] = useState<Scraps>([]);
    const [selectedScraps, setSelectedScraps] = useState<SelectedScrap[]>([]);
    const [totalValue, setTotalValue] = useState<number>(0);
    const [totalWeight, setTotalWeight] = useState<number>(0);

    useEffect(() => {
        async function load() {
            try {
                const response = await fetch('http://localhost:3000/scrap');
                const data = await response.json() as Scraps;
                console.log('Fetched data:', data); 
                setScrap(data);
            } catch (error) {
                console.error('Failed to fetch scrap', error);
            }
        }
        load();
    }, []);

    const handleAddScrap = (scrapItem: Scrap) => {
        const newScrap = { ...scrapItem, id: uuidv4() };  
        setSelectedScraps((prevSelectedScraps) => [...prevSelectedScraps, newScrap]);
        setTotalValue((prevTotalValue) => prevTotalValue + (scrapItem.MinimumValue + scrapItem.Maximumvalue) / 2);
        setTotalWeight((prevTotalWeight) => prevTotalWeight + scrapItem.Weight);
    };

    const handleDeleteScrap = (id: string) => {
        const scrapItem = selectedScraps.find(s => s.id === id);
        if (scrapItem) {
            setSelectedScraps((prevSelectedScraps) => prevSelectedScraps.filter(s => s.id !== id));
            setTotalValue((prevTotalValue) => prevTotalValue - (scrapItem.MinimumValue + scrapItem.Maximumvalue) / 2);
            setTotalWeight((prevTotalWeight) => prevTotalWeight - scrapItem.Weight);
        }
    };

    return (
        <div className="container-fluid mt-4">
            <div className="row">
                <div className="col-md-6">
                    <div className="table-responsive">
                        <ScrapTable scraps={scrap} onAdd={handleAddScrap} />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="table-responsive">
                        <SelectedScrapTable 
                            selectedScraps={selectedScraps} 
                            totalValue={totalValue} 
                            totalWeight={totalWeight} 
                            onDelete={handleDeleteScrap} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Listtable;
