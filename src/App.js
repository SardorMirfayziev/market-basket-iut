import { useState } from "react";
import "./App.css";

const mainUrl = "https://54.165.164.131";

function App() {
  const [file, setFile] = useState();
  const fileHandler = ({ target }) => {
    console.log(target.files[0]);
    setFile(target.files[0]);
  };

  const submitHandler = () => {};

  return (
    <div className="wrapper">
      <h1
        style={{
          marginBottom: "40px",
        }}
      >
        Market basket analysis
      </h1>

      <form onSubmit={submitHandler} className="form">
        <h2
          style={{
            margin: "0 0 50px",
            textAlign: "center",
          }}
        >
          Submit a csv file
        </h2>
        <div>
          <input
            onChange={(e) => fileHandler(e)}
            type="file"
            id="file"
            hidden
          />
          <label htmlFor="file" className="file-upload">
            Choose a file
          </label>
        </div>

        <div className="uploaded-file">
          {file && <span>File uploaded: {file.name}</span>}
        </div>

        <div className="submit-btn">
          <button type="button">Submit</button>
        </div>
      </form>

      <div
        style={{
          padding: "20px",
          border: "1px solid gold",
          marginTop: "40px",
        }}
      >
        <h2>Most Frequent tuples</h2>
        {mock.map(([it1, it2], index) => (
          <div
            style={{
              display: "flex",
              marginBottom: "10px",
            }}
          >
            <p
              style={{
                margin: "0 10px 0 0",
              }}
            >
              {index})
            </p>
            <span>
              {it1}, {it2}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const mock = [
  ["whole milk", "tropical fruit"],
  ["white bread", "ham"],
  ["other vegetables", "tropical fruit"],
  ["sugar", "flour"],
  ["red/blush wine", "bottled beer"],
  ["citrus fruit", "tropical fruit"],
  ["tropical fruit", "whole milk"],
  ["whipped/sour cream", "whole milk"],
  ["processed cheese", "white bread"],
  ["herbs", "whole milk"],
  ["other vegetables", "herbs"],
  ["other vegetables", "butter"],
  ["whole milk", "curd"],
  ["whole milk", "pip fruit"],
  ["other vegetables", "pip fruit"],
  ["bottled beer", "liquor"],
  ["other vegetables", "pip fruit"],
  ["tropical fruit", "other vegetables"],
  ["yogurt", "whole milk"],
  ["other vegetables", "pip fruit"],
  ["other vegetables", "whole milk"],
  ["other vegetables", "tropical fruit"],
  ["whole milk", "butter"],
  ["whole milk", "pip fruit"],
  ["Instant food products", "hamburger meat"],
  ["whole milk", "butter"],
  ["citrus fruit", "whole milk"],
  ["long life bakery product", "chocolate"],
  ["long life bakery product", "chocolate"],
  ["other vegetables", "butter"],
  ["root vegetables", "butter"],
  ["sausage", "root vegetables"],
  ["citrus fruit", "pip fruit"],
  ["other vegetables", "whole milk"],
];

export default App;
