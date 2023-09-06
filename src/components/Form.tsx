import { useEffect, useState } from "react";
import dollar from "../assets/images/$.png";
import human from "../assets/images/Group 8.png";
import { tips } from "../data/tipsData";
import Bill from "./Bill";
import People from "./People";

const Form = (props: {
	billAmount: number | string;
	setBillAmount: any;
	people: number | typeof NaN;
	setPeople: any;
	setTip: any;
	setTotalAmount: any;
	peopleError: string;
	setPeopleError: any;
	customInput: number | string;
	setCustomInput: any;
}) => {
	const [btnType, setBtnType] = useState<string>("button");

	useEffect(() => {
		if (props.people === 0 || isNaN(props.people)) {
			props.setPeopleError("Can't be zero!");
		} else if (props.people < 0) {
			props.setPeopleError("Should be at least 1 person!");
		} else {
			props.setPeopleError("");
		}
	}, [props.people]);

	const handleTipCalc = (tip: number): number | undefined => {
		if (
			props.people !== undefined &&
			props.people > 0 &&
			props.billAmount !== undefined &&
			Number(props.billAmount) > 0
		) {
			const tipAmount = Number(
				((Number(props.billAmount) * tip) / props.people).toFixed(2)
			);

			const total = Number(
				(Number(props.billAmount) + Number(props.billAmount) * tip) /
					props.people
			).toFixed(2);

			props.setTotalAmount(total);
			props.setTip(tipAmount);
			return tipAmount;
		} else {
			props.setPeopleError("Can't be zero!");
		}
	};

	const changeTipQuantity = (customInput: number): void => {
		if (btnType === "number" && customInput > 0) {
			handleTipCalc(Number(customInput));
		} else {
			setBtnType("number");
			props.setCustomInput("");
		}
	};

	const handlePeopleInput = (e: any): number => {
		return props.setPeople(
			Number(Math.trunc(Math.abs(e.target.valueAsNumber)))
		);
	};

	return (
		<div className="form">
			<Bill
				setBillAmount={props.setBillAmount}
				billAmount={props.billAmount}
				dollar={dollar}
			/>
			<br />
			<div className="tip-container">
				<p className="select-tip">Select Tip %</p>
				<div className="tip-buttons">
					{tips?.map((elem) => {
						return (
							<div key={elem.quantity}>
								<button onClick={() => handleTipCalc(elem.quantity)}>
									{elem.quantity * 100}%
								</button>
							</div>
						);
					})}
					<input
						className="custom-input"
						placeholder="Custom"
						type={btnType}
						style={{ color: "#547878" }}
						min={0}
						value={props.customInput}
						onChange={(e) =>
							props.setCustomInput(Math.abs(e.target.valueAsNumber))
						}
						onClick={() => changeTipQuantity(Number(props.customInput) / 100)}
					/>
				</div>
			</div>
			<br />
			<People
				human={human}
				people={props.people}
				peopleError={props.peopleError}
				handlePeopleInput={handlePeopleInput}
			/>
		</div>
	);
};

export default Form;
