import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import d3Cloud from "d3-cloud";

const data2 = "I had an excellent experience with Prof. Drinea, which perhaps is not consistent with some of the earlier reviews. I found her to be an amazing lecturer who was capable of commanding the class's attention despite a biweekly 3 hour-long class over Zoom (Summer 2020), and I can genuinely say that I did not once feel lost in class, despite her rather rigorous treatment of the material. The homeworks are difficult (they remind me most of a challenging mathematics PSet, there is rarely any programming, and if there is, it's treated as extra credit), and the hardest problems come from the TAs, but I found them to really enhance my understanding of the material and be incredibly rewarding to complete. I am worried that organized cheating was rampant, since the averages were incredibly high despite the immense difficulty, but she will reassure you that if you really understand the homeworks, you will do well on the exam, which I found to be true in my case. Grading on individual assignments can be harsh, but is always very clear. The average on the final was around a 45%, but because I had taken the time to do each of the homeworks honestly, I easily did much better. I have no complaints regarding final grading, either. Lastly, Prof. Drinea is incredibly kind and caring despite the difficulty of the class, and I believe that she is ultimately very fair. I would absolutely recommend this class, and although Prof. Stein literally wrote the textbook, you cannot go wrong with Prof. Drinea."
  .split(" ")
  .map((d) => {
    const testObj = { text: d, size: 10 + Math.random() * 90 };
    console.log("test obj : ", testObj);
    return testObj;
  });

const WordCloud = ({ data }) => {
  const [cloud, setCloud] = useState(null);

  const margin = { top: 30, right: 50, bottom: 30, left: 50 };
  const width = 800 - margin.left - margin.right;
  const height = 600 - margin.top - margin.bottom;

  useEffect(() => {
    const fontSize = d3.scalePow().exponent(5).domain([0, 1]).range([40, 80]);

    // Adds a set of variables to each element in the data (we will use x and y later)
    d3Cloud()
      .size([width, height])
      .timeInterval(20)
      .words(data)
      //.rotate(function(d) { return 0; })
      .rotate(function () {
        // ~~(n) returns floor if n < 0, ceil if n>=0
        return ~~(Math.random() * 2) * 90;
      })
      .fontSize(function (d, i) {
        // console.log("d : ", d, " I : ", i);
        return fontSize(Math.random());
      })
      .fontWeight(["bold"])
      .text(function (d) {
        return d.text;
      })
      .on("end", (words) => setCloud(words))
      .start();
  }, [data, width, height]);

  console.log("data : ", data);
  console.log(cloud ? cloud : "no cloud");

  var color = d3.scaleOrdinal(d3.schemePastel1);

  return (
    <svg width={800} height={600}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <g transform={`translate(${width / 2},${height / 2})`}>
          {cloud ? (
            cloud.map((word, i) => (
              <text
                key={word.text}
                style={{
                  fill: color(i),
                  fontSize: word.size + "px",
                  fontFamily: word.font,
                }}
                textAnchor="middle"
                transform={`translate(${word.x},${word.y}) rotate(${word.rotate})`}
              >
                {word.text}
              </text>
            ))
          ) : (
            <div>No data available right now</div>
          )}
        </g>
      </g>
    </svg>
  );
};

export default WordCloud;
