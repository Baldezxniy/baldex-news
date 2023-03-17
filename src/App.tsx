import React, { FC, useState } from './lib/teact/teact';

type StateProps = {

}

const App: FC = () => {
  const [a, setA] = useState(1);
  return (
    <div>
      <button onClick={() => setA(a + 1)}>
        click
      </button>
      {a}

      <Bpp />
    </div>
  )
}

const Bpp: FC = () => {
  const [num, setNum] = useState(1);

  return (
    <div>
      <button onClick={() => setNum((prev: number) => prev + 1)}>
        Клик
      </button>
      {num}

    </div>
  )
}


export default App;
