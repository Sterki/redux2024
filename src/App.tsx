import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { User } from "./features/user/User";
import { connect } from "react-redux";
import { incrementAsync, incrementCounter } from "./actions/counterActions";
import { getCounterAmount } from "./selectors/counterSelector";
import { AppDispatch, RootState } from "./app/store";

export type CounterActions = typeof incrementCounter | typeof incrementAsync;

interface StateProps {
  counter: number; // Assuming 'counter' is a slice of your state and it's a number
  status: string;
}

export const ConnectedCounter = connect(
  (state: RootState): StateProps => {
    return {
      counter: getCounterAmount(state),
      status: state.counter.status,
    };
  },
  (dispatch: AppDispatch) => {
    return {
      increment: () => dispatch(incrementCounter()),
      incrementAsync: (arg: number) => dispatch(incrementAsync(arg)),
    };
  }
)(Counter);

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <ConnectedCounter />
        <User />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className='App-link'
            href='https://reactjs.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            React
          </a>
          <span>, </span>
          <a
            className='App-link'
            href='https://redux.js.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Redux
          </a>
          <span>, </span>
          <a
            className='App-link'
            href='https://redux-toolkit.js.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className='App-link'
            href='https://react-redux.js.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
