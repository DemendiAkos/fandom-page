import { useEffect, useState } from "react";
import { Scraps } from "./scrap";



function Listtable() {

    const [scrap, setScrap] = useState([] as Scraps)

    useEffect(() => {
      async function load(){
        const response =  await fetch('http://localhost:3000/scrap')
        const scrap = await response.json() as Scraps;
        setScrap(scrap);
      }
    
      load()
      
    })

    return (
        <div>
            <table>

                <tr>
                    <th>ScrapName</th>
                    <th>MinimumValue</th>
                    <th>MaximumValue</th>
                    <th>AverageValue</th>
                    <th>Weight</th>
                    <th>Conductivity</th>
                    <th>IsTwoHanded</th>
                    <th>AddButton</th>
                </tr>
{
    scrap.map((scrap,index)=> (<tr key={index}><td>{scrap.ScrapName}</td> <td>{scrap.MinimumValue}</td><td>{scrap.Maximumvalue}</td><td>{(scrap.MinimumValue+scrap.Maximumvalue)/2}</td><td>{scrap.Weight}</td><td>{scrap.Conductivity}</td><td>{scrap.IsTwoHanded}</td><td><button>Add</button></td></tr>)) 

}
            </table>
        </div>
    )

}
export default Listtable

