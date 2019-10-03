import '../styles/main.scss';
import eat from './components/eat';
import fight from './components/fight';
import play from './components/play';
import sleep from './components/sleep';

const init = () => {
  eat.eatPrinter();
  fight.fightLog();
  play.playLog();
  sleep.sleepLog();
};
init();
