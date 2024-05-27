import React, { useEffect, useState } from "react";
import { Scrap, Scraps } from "../scrap";
import ScrapTable from "./ScrapTable";
import SelectedScrapTable from "./SelectedScrapTable";

function Listtable() {
    const [scrap, setScrap] = useState<Scraps>([]);
    const [selectedScraps, setSelectedScraps] = useState<Scraps>([]);

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
        setSelectedScraps((prevSelectedScraps) => [...prevSelectedScraps, scrapItem]);
        setTotalValue((prevTotalValue) => prevTotalValue + (scrapItem.MinimumValue + scrapItem.Maximumvalue) / 2);
        setTotalWeight((prevTotalWeight) => prevTotalWeight + scrapItem.Weight);
    };

    const handleDeleteScrap = (scrapItem: Scrap) => {
        setSelectedScraps((prevSelectedScraps) => prevSelectedScraps.filter(s => s !== scrapItem));
        setTotalValue((prevTotalValue) => prevTotalValue - (scrapItem.MinimumValue + scrapItem.Maximumvalue) / 2);
        setTotalWeight((prevTotalWeight) => prevTotalWeight - scrapItem.Weight);
    };

    return (
        <div>
            <ScrapTable scraps={scrap} onAdd={handleAddScrap} />
            <SelectedScrapTable 
                selectedScraps={selectedScraps} 
                totalValue={totalValue} 
                totalWeight={totalWeight} 
                onDelete={handleDeleteScrap} 
            />
        </div>
    );
}

export default Listtable;
