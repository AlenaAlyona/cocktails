// import React, { useState, useEffect } from "react";

// import axios from "axios";

// export default function Categories() {
//   const [categories, set_categories] = useState([]);
//   // const history = useHistory();
//   // const params = useParams();
//   // console.log("PARAMS", params);

//   useEffect(() => {
//     async function DataFetching() {
//       console.log("I'm gonna fetch some data!");

//       const res = await axios.get(
//         "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
//       );

//       console.log("LOOK WHAT I HAVE:", res);
//       set_categories(res.data.drinks);
//       // history.push(`/`);
//     }

//     DataFetching();
//   }, []);

//   return (
//     <div>
//       {categories.map((category) => {
//         return (
//           <div>
//             <h4>{ name={category.strCategory} }</h4>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
