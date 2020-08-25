import React from "react";
import styled from "styled-components";
import { lighten } from "polished";

const Results = () => {
	console.log(`Results rendered`);

	return (
		<>
			<ResultsWrapper>
				<Details>
					<p>[searched Pokemon] Details:</p>
					<Data>data</Data>
				</Details>
				<Strong>
					{" "}
					<p>
						[searched Pokemon] <br /> Strong against:
					</p>
					<Data>data</Data>
				</Strong>
				<Neutral>
					{" "}
					<p>
						[searched Pokemon] <br /> Neutral against:
					</p>
					<Data>data</Data>
				</Neutral>
				<Weak>
					{" "}
					<p>
						[searched Pokemon] <br /> Weak against:
					</p>
					<Data>data</Data>
				</Weak>
			</ResultsWrapper>
		</>
	);
};

const ResultsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 80vh;
	margin: 0.5rem 1rem;
`;
const Details = styled.div`
	box-shadow: 10px 5px 5px gray;
	margin: 1rem;
	padding: 1rem;
`;
const Strong = styled(Details)`
	background-color: ${(props) => lighten(0.55, props.theme.colors.green)};
`;
const Neutral = styled(Details)`
	background-color: ${(props) => lighten(0.2, props.theme.colors.gray)};
`;
const Weak = styled(Details)`
	background-color: ${(props) => lighten(0.4, props.theme.colors.primary)};
`;
const Data = styled.div`
	border: ${(props) => `2px solid ${props.theme.colors.dark}`};
	padding: 1rem;
	border-radius: 0.5rem;
`;

export default Results;
