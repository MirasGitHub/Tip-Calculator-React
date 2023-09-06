import { useState } from "react";
import Form from "./Form";
import Results from "./Results";

const initialCustomInput = "Custom";

const Calculator = () => {
	const [billAmount, setBillAmount] = useState<number | string>("");
	const [people, setPeople] = useState<any>("");

	const [totalAmount, setTotalAmount] = useState<number | string>(0);

	const [tip, setTip] = useState(0);

	const [peopleError, setPeopleError] = useState<any>("");

	const [customInput, setCustomInput] = useState<number | string>(
		initialCustomInput
	);

	const handleReset = () => {
		setBillAmount("");
		setPeople("");
		setTip(0);
		setTotalAmount(0);
		setPeopleError("");
		setCustomInput("");
	};

	return (
		<div className="container">
			<section className="calculator-section">
				<Form
					customInput={customInput}
					setCustomInput={setCustomInput}
					billAmount={billAmount}
					setBillAmount={setBillAmount}
					people={people}
					setPeople={setPeople}
					setTip={setTip}
					setTotalAmount={setTotalAmount}
					peopleError={peopleError}
					setPeopleError={setPeopleError}
				/>
			</section>
			<section className="result-section">
				<Results
					tip={tip}
					totalAmount={totalAmount}
					handleReset={handleReset}
				/>
			</section>
		</div>
	);
};

export default Calculator;
