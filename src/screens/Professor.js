import { React, useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import Reviews from "../components/Reviews/Reviews";
import Wordcloud from "../components/Wordcloud/Wordcloud";
import style from "../css/Homepage.module.css";
import { stopwords } from "./stopwords";

const Professor = ({ history }) => {
  const [profInfo, setProfInfo] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [cloudWords, setCloudWords] = useState([]);
  useEffect(() => {
    const fetchHotReviews = async () => {
      const prof = history.location.pathname.split("/")[2];
      let { data } = await axios.get("/profreviews");
      console.log("reviewdata : ", data);

      const cleanedReviews = data.slice(1).map((review) => ({
        ...review,
        prof_name: "Eleni Drinea",
        course_name: "Intro to Algorithms",
      }));
      setReviews(cleanedReviews);
      const wordCount = {};
      setProfInfo(data[0]);
      data.slice(1).forEach((val, ind) => {
        val.content.split(" ").forEach((word) => {
          const lower = word
            .toLowerCase()
            .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
          if (!stopwords.includes(lower) && lower) {
            wordCount[lower] ? (wordCount[lower] += 1) : (wordCount[lower] = 1);
          }
        });
        val.workload.split(" ").forEach((word) => {
          const lower = word
            .toLowerCase()
            .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
          if (!stopwords.includes(lower) && lower) {
            wordCount[lower] ? (wordCount[lower] += 1) : (wordCount[lower] = 1);
          }
        });
      });
      const frequent = Object.keys(wordCount).sort((first, second) => {
        return wordCount[second] - wordCount[first];
      });
      console.log("freq : ", frequent);
      setCloudWords(
        frequent.slice(0, 30).map((d) => {
          const testObj = {
            text: d,
            size: 10 + Math.random() * 90,
          };
          return testObj;
        })
      );
    };
    fetchHotReviews();
  }, []);

  return (
    <div className={style.app}>
      <Navbar />
      <div>
        {profInfo &&
          profInfo.name
            .split("0")
            .map((n) => n.charAt(0).toUpperCase() + n.slice(1))
            .join(" ")}
      </div>
      <div id={style.profContainer}>
        <Wordcloud data={cloudWords} />
        Reviews
        <Reviews reviews={reviews} words={cloudWords} type="PROF" />
      </div>
    </div>
  );
};

export default Professor;
/* <Wordcloud data={data} /> */
