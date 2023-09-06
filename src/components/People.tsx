const People = (props: {
	peopleError: string;
	people: number;
	handlePeopleInput: any;
	human: string;
}) => {
	return (
		<div className="people">
			<div className="people-labels">
				<label htmlFor="people">Number of People</label>
				<label htmlFor="people" className="error">
					Can't be zero
				</label>
				<p style={{ color: "#E17457" }}>{props.peopleError}</p>
			</div>
			<input
				type="number"
				id="people"
				placeholder="0"
				min={0}
				className={
					props.people === 0 || isNaN(props.people)
						? "people-input--error "
						: "people"
				}
				value={props.people}
				onChange={props.handlePeopleInput}
			/>
			<i>
				<img src={props.human} alt="dollar" />
			</i>
		</div>
	);
};

export default People;
