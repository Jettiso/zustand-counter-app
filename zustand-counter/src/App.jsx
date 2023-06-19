import "./index.css";
import { useStore } from "./store";

function App() {
	const count = useStore((store) => store.count);
	const increase = useStore((store) => store.increaseCount);
	const decrease = useStore((store) => store.decreaseCount);
	const def = useStore((store) => store.removeCount);

	
	return (
		<div className='app__container'>
			<main>
				<div className='counter__container'>
					<h1>Simple Zustand Counter</h1>
					<div className='counter'>
						<button onClick={decrease}>-</button>
						<span>{count}</span>
						<button onClick={increase}>+</button>
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
