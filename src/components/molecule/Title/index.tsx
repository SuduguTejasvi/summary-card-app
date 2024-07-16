import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Text } from '../../atoms/Typography'; // Assuming Typography is in atoms/Typography/index.tsx
import { Icon } from '../../atoms/Icons'; // Assuming Icon is in atoms/Icon/index.tsx

import { TitleProps } from '../../../utils/interface';
import { TitleItem } from './style';

const SummaryTitle: React.FC<TitleProps> = ({ text, source, alternateText }) => {
	return (
		<Grid container style={TitleItem}>
			<Grid item>
				<Text variant="h4" text={text} />
			</Grid>
			<Grid item>
				<Icon source={source} alternateText={alternateText} />
			</Grid>
		</Grid>
	);
};

export default SummaryTitle;
