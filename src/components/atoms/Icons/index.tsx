import React from 'react';
// import { InfoOutlined } from '@material-ui/icons';
import { useStyles } from './style';
import { IconProps } from '../../../utils/interface';
export const Icon = ({ source ,alternateText}: IconProps) => {
	return <img src={source} alt={alternateText} />;
};
