const Results = (props: {
	tip: number;
	totalAmount: number | string;
	handleReset(): void;
}) => {
	return (
		<div>
			<div className="tip-per-person">
				<p>
					Tip Amount
					<span>/ person</span>
				</p>
				<h4>{props?.tip ? `$${props?.tip} ` : "$0.00"}</h4>
			</div>
			<div className="total-per-person">
				<p>
					Total
					<span>/ person</span>
				</p>
				<h4>{props.totalAmount ? `$${props?.totalAmount}` : `$0.00`}</h4>
			</div>
			<div
				className={
					props.totalAmount ? "reset-btn--active" : "reset-btn--disabled"
				}
			>
				<button
					onClick={props.handleReset}
					disabled={Number(props.totalAmount) > 0 ? false : true}
				>
					Reset
				</button>
			</div>
		</div>
	);
};

export default Results;
