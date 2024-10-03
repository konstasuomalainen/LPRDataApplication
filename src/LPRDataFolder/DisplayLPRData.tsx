import { useState } from "react";
import axios from "axios";

interface LPRDataType {
  Index: number;
  Kuntanro: string;
  "Kunnan nimi": string;
  Kustannuspaikka: string;
  "Lask.tili": string;
  Summa: number;
  Tili: string;
  Tiliryhmä: string;
  "Tiliryhmän nro": string;
  Toimiala: string;
  "Toimiala nro": string;
  Toimittaja: string;
  Toimittajanro: string;
  Tositenro: string;
  Tositepäivä: string;
  Vastuualue: string;
  "Vastuualue nro": string;
  "Y-tunnus": string;
  Year: number;
}

const DisplayLPRData = () => {
  const [LPRData, setLPRData] = useState<LPRDataType[]>([]);

  const [hasMore, setHasMore] = useState(true);
  const [number, setNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [year, setYear] = useState();
  const [selectedYear, setSelectedYear] = useState(0);
  const [buttonText, setButtonText] = useState("LOAD");
  const [sortDirection, setSortDirection] = useState("asc");

  const data = () => {
    console.log(setButtonText(""));
  };
  const sortData = (key: keyof LPRDataType) => {
    const sortedData = [...LPRData].sort((a, b) => {
      if (sortDirection === "asc") {
        return a[key] > b[key] ? 1 : -1;
      } else {
        return a[key] < b[key] ? 1 : -1;
      }
    });
    setLPRData(sortedData);
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };
  const fetchLPRData = async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    try {
      const limit = "50";
      const yearString = selectedYear.toString();
      const skip = number.toString();
      const res = await axios.get(
        `https://lprdatabackend-196740120714.europe-north1.run.app/data/${yearString}?limit=${limit}&skip=${skip}`
      );

      console.log("Fetched data:", res.data);

      if (res.data.length < Number(limit)) {
        setHasMore(false);
      }

      setLPRData((prevData) => [...prevData, ...res.data]);
      if (res.data.length > 0) {
        setYear(res.data[0].Year);
      } else {
        setYear(undefined);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const clearCurrentList = () => {
    setLPRData([]);
    data();
    setNumber(10);
  };

  const loadMore = () => {
    if (selectedYear !== year) {
      clearCurrentList();
    }
    fetchLPRData();
    if (!hasMore || isLoading) return;

    setNumber((prevNumber) => prevNumber + 50);
  };

  const handleYearClick = (selectYear: any) => {
    setSelectedYear(selectYear);
    console.log(selectYear);
  };
  return (
    <div className="bikeContainer">
      <h1>Lappeenrannan ostot {year !== undefined ? year : ""}</h1>
      <div className="buttons-container">
        <button
          id="active2020"
          onClick={() => handleYearClick(2020)}
          className={selectedYear == 2020 ? "loadMore2020" : "loadMore"}
        >
          {selectedYear == 2020 ? " Valittu 2020" : "2020"}
        </button>
        <button
          onClick={() => handleYearClick(2021)}
          className={selectedYear == 2021 ? "loadMore2020" : "loadMore"}
        >
          {selectedYear == 2021 ? " Valittu 2021" : "2021"}
        </button>
        <button
          onClick={() => handleYearClick(2022)}
          className={selectedYear == 2022 ? "loadMore2020" : "loadMore"}
        >
          {selectedYear == 2022 ? " Valittu 2022" : "2022"}
        </button>
        <button
          onClick={() => handleYearClick(2023)}
          className={selectedYear == 2023 ? "loadMore2020" : "loadMore"}
        >
          {selectedYear == 2023 ? " Valittu 2023" : "2023"}
        </button>
        {hasMore && (
          <button className="loadMore" onClick={loadMore}>
            {year === undefined ? buttonText : "LOAD MORE"}
          </button>
        )}
      </div>

      <table className="table-container">
        <thead>
          <tr>
            <th onClick={() => sortData("Index")} style={{ cursor: "pointer" }}>
              Index
            </th>
            <th
              onClick={() => sortData("Kuntanro")}
              style={{ cursor: "pointer" }}
            >
              Kuntanro
            </th>
            <th
              onClick={() => sortData("Kunnan nimi")}
              style={{ cursor: "pointer" }}
            >
              Kunnan nimi
            </th>
            <th
              onClick={() => sortData("Kustannuspaikka")}
              style={{ cursor: "pointer" }}
            >
              Kustannuspaikka
            </th>
            <th
              onClick={() => sortData("Lask.tili")}
              style={{ cursor: "pointer" }}
            >
              Lask.tili
            </th>
            <th onClick={() => sortData("Summa")} style={{ cursor: "pointer" }}>
              Summa
            </th>
            <th onClick={() => sortData("Tili")} style={{ cursor: "pointer" }}>
              Tili
            </th>
            <th
              onClick={() => sortData("Tiliryhmä")}
              style={{ cursor: "pointer" }}
            >
              Tiliryhmä
            </th>
            <th
              onClick={() => sortData("Tiliryhmän nro")}
              style={{ cursor: "pointer" }}
            >
              Tiliryhmän nro
            </th>
            <th
              onClick={() => sortData("Toimiala")}
              style={{ cursor: "pointer" }}
            >
              Toimiala
            </th>
            <th
              onClick={() => sortData("Toimiala nro")}
              style={{ cursor: "pointer" }}
            >
              Toimiala nro
            </th>
            <th
              onClick={() => sortData("Toimittaja")}
              style={{ cursor: "pointer" }}
            >
              Toimittaja
            </th>
            <th
              onClick={() => sortData("Toimittajanro")}
              style={{ cursor: "pointer" }}
            >
              Toimittajanro
            </th>
            <th
              onClick={() => sortData("Tositenro")}
              style={{ cursor: "pointer" }}
            >
              Tositenro
            </th>
            <th
              onClick={() => sortData("Tositepäivä")}
              style={{ cursor: "pointer" }}
            >
              Tositepäivä
            </th>
            <th
              onClick={() => sortData("Vastuualue")}
              style={{ cursor: "pointer" }}
            >
              Vastuualue
            </th>
            <th
              onClick={() => sortData("Vastuualue nro")}
              style={{ cursor: "pointer" }}
            >
              Vastuualue nro
            </th>
            <th
              onClick={() => sortData("Y-tunnus")}
              style={{ cursor: "pointer" }}
            >
              Y-tunnus
            </th>
          </tr>
        </thead>
        <tbody className="tableBody">
          {LPRData.map((journey) => (
            <tr key={journey.Index}>
              <td>{journey.Index}</td>
              <td>{journey.Kuntanro}</td>
              <td>{journey["Kunnan nimi"]}</td>
              <td>{journey.Kustannuspaikka}</td>
              <td>{journey["Lask.tili"]}</td>
              <td>{journey.Summa}</td>
              <td>{journey.Tili}</td>
              <td>{journey.Tiliryhmä}</td>
              <td>{journey["Tiliryhmän nro"]}</td>
              <td>{journey.Toimiala}</td>
              <td>{journey["Toimiala nro"]}</td>
              <td>{journey.Toimittaja}</td>
              <td>{journey.Toimittajanro}</td>
              <td>{journey.Tositenro}</td>
              <td>{new Date(journey.Tositepäivä).toLocaleDateString()}</td>
              <td>{journey.Vastuualue}</td>
              <td>{journey["Vastuualue nro"]}</td>
              <td>{journey["Y-tunnus"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayLPRData;
