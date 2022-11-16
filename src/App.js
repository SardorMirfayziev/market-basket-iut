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
    </div>
  );
}

export default App;
