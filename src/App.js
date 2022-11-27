/* 
    importing used packages from node modules 
*/

//importing usestate from react in order to save local state
import { useState } from "react";

// importing css files
import "./App.css";
import Loading from "./loading";

const mainUrl = "http://127.0.0.1:5000/upload";

// main app function renders the whole page
function App() {
  // usestate function returns the current state and set state function to change the value of the state with rendering
  const [file, setFile] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [allItems, setAllItems] = useState([]);
  // file handler function to set the uploaded file to local state
  const fileHandler = ({ target }) => {
    console.log(target.files[0]);
    setFile(target.files[0]);
  };

  // after the user submits the form this function sends request to backend
  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    // fetch is an api for sending asyncrounous http requests
    const res = await fetch(mainUrl, {
      method: "post",
      body: formData,
    });

    const data = await res.json();
    setIsLoading(false);
    setAllItems(data);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
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
              <button>Submit</button>
            </div>
          </form>

          {allItems.length !== 0 && (
            <div
              style={{
                padding: "20px",
                border: "1px solid gold",
                marginTop: "40px",
              }}
            >
              <h2>Most Frequent tuples</h2>
              {
                // mapping the resulted array and displaying to the screen
                allItems?.map(([it1, it2], index) => (
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
                ))
              }
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default App;
