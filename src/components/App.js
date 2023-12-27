// // {
// //   /* <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
// //    */
// // }
// // import React, { useState, useEffect } from "react";
// // import "../styles/App.css";

// // const App = () => {
// //   const [text, setText] = useState("");
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     setTimeout(() => {
// //       setLoading(false);
// //       setText(text);
// //     }, 1000);
// //   }, []);

  
//   // useEffect(() => {
//   // //   const delay = 6000;
//   //   const timeout = setTimeout(() => {
//   //     setLoading(false);
//   //     setText(text);
//   //   }, 1000);
//   //   return () => clearTimeout(timeout);
//   // }, []);



//   // useEffect(() => {
//   //   const timeout = setTimeout(() => {
//   //     setLoading(false);
//   //     setText(text);
//   //   }, 1000);
// // }, []);
//   import React, { useState, useEffect } from "react";
//   import "../styles/App.css";

//   const App = () => {
//     const [text, setText] = useState("");
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//       setTimeout(() => {
//         setLoading(false);
//         setText(text);
//       }, 3000);
//     }, []);

//     return (
//       <div className="app">
//         <textarea
//           name="text"
//           value={text}
//           id="text"
//           onChange={(e) => setText(e.target.value)}
//           className="textarea"
//         ></textarea>

//         <div className="preview">
//           <p className="loading">{text}</p>
//         </div>
//       </div>
//     );
//   };

// export default App;


import React, { useState, useEffect } from "react";
import "../styles/App.css";
const App = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      setText(text);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="app">
      <textarea
        name="text"
        value={text}
        id="text"
        onChange={(e) => setText(e.target.value)}
        className="textarea"
      ></textarea>

      <div className="preview">
        {loading ? <p className="loading">Loading...</p> : <p>{text}</p>}
      </div>
    </div>
  );
};

export default App;
