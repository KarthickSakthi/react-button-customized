import { Button } from "./lib";
import styles from './App.module.css'
function App() {
  function clickhere(){
    alert("click");
  }
  return (
    <Button
      className={styles.button}
    />
  );
}

export default App;
