import { useEffect, useState } from "react";
import {
  XYPlot,
  VerticalBarSeries,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
} from "react-vis";
import { useEntrainementContext } from "../context/useEntrainementContext";
import styles from "../styles/GraphiquePerformances.module.css";


const GraphiquePerformances = () => {
  const { dernieresPerformances, fetchData } = useEntrainementContext();

  useEffect(() => {
    // Appelle la fonction pour récupérer les données depuis le backend
    fetchData();
  }, [fetchData]);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  const prepareData = () => {
    return dernieresPerformances.map((performance) => ({
      x: performance.exercice,
      y: parseFloat(performance.poids),
    }));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.titre}>Graphique de Performances en Poids</h2>
      <div className={styles.graphique}>
        <XYPlot height={300} width={900} xType="ordinal">
          <VerticalGridLines style={{ stroke: "#B7E9ED" }} />
          <HorizontalGridLines style={{ stroke: "#B7E9ED" }} />
          <XAxis
            style={{
              line: { stroke: "#ADDDE1" },
              ticks: { stroke: "#ADDDE1" },
             
              text: { stroke: "none", fill: "#6b6b76", fontWeight: 600, fontSize: '15px' },
            }}
          />
          <YAxis
            title="Poids levé (kg)"
            style={{
              line: { stroke: "#ADDDE1" },
              ticks: { stroke: "#ADDDE1" },
               title: {  transform: 'translate(23.5px, 55px) rotate(45deg)', fontSize: '15px'},
              text: { stroke: "none", fill: "#6b6b76", fontWeight: 600 },
            }}
          />
          <VerticalBarSeries
            data={prepareData()}
            style={{ stroke: "#12939A", fill: "#12939A" }}
          />
        </XYPlot>
      </div>
    </div>
  );
};

export default GraphiquePerformances;
