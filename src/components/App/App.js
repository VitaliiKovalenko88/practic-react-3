// import { useRef } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import { HomePage } from "../HomePage/HomePage";
import { MoviesPage } from "../MoviesPage/MoviesPage";
import { MoviesDetaile } from "../MoviesDetailesPage/MoviesDetailesPage";

export const App = () => {
  return (
    <>
      <Navigation />
      <div>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MoviesDetaile />
          </Route>

          <Route>
            <Redirect from="/" to="/movies" />
          </Route>
        </Switch>
      </div>
    </>
  );
};

// export class App extends Component {
//   nameRef = createRef();
//   ageRef = createRef();

//   showMessage = (e) => {
//     e.preventDefault();
//     alert(`${this.nameRef.current.value}: ${this.ageRef.current.value}`);
//     e.current.reset();
//   };

//   render() {
//     return (
//       <form>
//         <label>
//           Name
//           <input ref={this.nameRef}></input>
//         </label>
//         <label>
//           Age
//           <input ref={this.ageRef}></input>
//         </label>
//         <button onClick={this.showMessage}>нажми меня</button>
//       </form>
//     );
//   }
// }
// export const App = () => {
//   const nameRef = useRef(null);
//   const ageRef = useRef(null);

//   const showMessage = (e) => {
//     e.preventDefault();
//     alert(`${nameRef.current.value}: ${ageRef.current.value}`);
//   };

//   return (
//     <form>
//       <label>
//         Name
//         <input ref={nameRef}></input>
//       </label>
//       <label>
//         Age
//         <input ref={ageRef}></input>
//       </label>
//       <button onClick={showMessage}>нажми меня</button>
//     </form>
//   );
// };
