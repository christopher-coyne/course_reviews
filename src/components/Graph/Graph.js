/** App.js */
import {React, useEffect, useState} from "react";
import axios from 'axios';
import MultilineChart from "./MultilineChart/MultilineChart";
import Legend from "./Legend/Legend";
import cannon from "./cannon.json";
import blaer from "./blaer.json";
import kim from "./kim.json";
import lee from "./lee.json";
import nieh from "./nieh.json";
import rubenstein from "./rubenstein.json";
import stein from "./stein.json";
import portfolio from "./portfolio.json";
import "./styles.css";

const portfolioData = {
  name: "Portfolio",
  color: "#ffffff",
  items: portfolio.map((d) => ({ ...d, date: new Date(d.date) }))
};
const cannonData = {
  name: "cannon",
  color: "#d53e4f",
  items: cannon.map((d) => ({ ...d, date: new Date(d.date) }))
};
const blaerData = {
  name: "blaer",
  color: "#5e4fa2",
  items: blaer.map((d) => ({ ...d, date: new Date(d.date) }))
};
const kimData = {
  name: "kim",
  color: "#5e9cff",
  items: kim.map((d) => ({ ...d, date: new Date(d.date) }))
};
const niehData = {
  name: "nieh",
  color: "#be42fc",
  items: nieh.map((d) => ({ ...d, date: new Date(d.date) }))
};
const steinData = {
  name: "stein",
  color: "#fcf642",
  items: stein.map((d) => ({ ...d, date: new Date(d.date) }))
};
const rubensteinData = {
  name: "rubenstein",
  color: "#ffa142",
  items: rubenstein.map((d) => ({ ...d, date: new Date(d.date) }))
};
const leeData = {
  name: "lee",
  color: "#ff4262",
  items: lee.map((d) => ({ ...d, date: new Date(d.date) }))
};

const dimensions = {
  width: 600,
  height: 300,
  margin: {
    top: 30,
    right: 30,
    bottom: 80,
    left: 60
  },
};

const Graph = () => {
  /*
  const [ graphProfs, setGraphProfs ] = useState()
  useEffect(() => {
    const fetchGraphProfs = async () => {
      const { data } = await axios.get('/graphprofs')
      await setGraphProfs(data)
      console.log('graph profs : ', graphProfs)
    }
    fetchGraphProfs()
  }, []) */

  const [selectedItems, setSelectedItems] = useState([]);
  const legendData = [portfolioData, cannonData, blaerData, kimData, niehData, steinData, rubensteinData, leeData];
  const chartData = [
    portfolioData,
    ...[blaerData, cannonData, kimData, niehData, steinData, rubensteinData, leeData].filter((d) => selectedItems.includes(d.name))
  ];

  const finalChartData = [ ...[cannonData, blaerData, kimData, niehData, steinData, rubensteinData, leeData].filter((d) => selectedItems.includes(d.name)) ]
  const onChangeSelection = (name) => {
    const newSelectedItems = selectedItems.includes(name)
      ? selectedItems.filter((item) => item !== name)
      : [...selectedItems, name];
    setSelectedItems(newSelectedItems);
  };

  return (
    <div className="Graph">
      <Legend
        data={legendData}
        selectedItems={selectedItems}
        onChange={onChangeSelection}
      />
      <MultilineChart data={chartData} final={finalChartData} dimensions={dimensions} />
    </div>
  );
}

export default Graph;
