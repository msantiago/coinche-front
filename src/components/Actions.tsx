import * as React from "react";
import globalStore from "../globalStore";
import { observer } from "mobx-react";
import moment from 'moment-timezone';


const style = {
	overflow: 'scroll',
	flex: 1,
};

const ulStyle = {
	paddingLeft: '20px',
};

export default observer(() =>
	<div style={style} >
		<ul style={ulStyle}>
			{
				[...globalStore.actions].reverse().slice(0, 20).map(
					(a: { text: string, ticks: number }, i: number) =>
						<li key={i} title={moment(a.ticks).format('[ le ]DD/MM/YYYY[ à ]HH:mm:ss')}>{a.text}</li>
					,
				)
			}
		</ul>
	</div>,
);
