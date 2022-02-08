// import { useRef } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { FilmsView } from "./components/MoviesPage/MoviePage";
import { FilmsDetaile } from "./components/MoviesDetailesPage/MoviesDetailesPage";

export const App = () => {
  return (
    <>
      <Switch>
        <Route path="/films" exact>
          <FilmsView />
        </Route>
        <Route path="/films/:filmId">
          <FilmsDetaile />
        </Route>
        <Redirect from="/" to="/films" />
      </Switch>
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
