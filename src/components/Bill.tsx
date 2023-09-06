const Bill = (props: {
	billAmount: any;
	setBillAmount: any;
	dollar: string;
}) => {
	return (
		<div className="bill">
			<div>
				<label htmlFor="bill">Bill</label>
			</div>
			<input
				type="number"
				placeholder="0"
				min={0}
				value={props.billAmount}
				onChange={(e) => props.setBillAmount(Math.abs(e.target.valueAsNumber))}
			/>
			<i>
				<img src={props.dollar} alt="dollar" />
			</i>
		</div>
	);
};

export default Bill;
