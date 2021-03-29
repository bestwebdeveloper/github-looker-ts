import React from 'react';

import { SvgProps } from '../../types/Svg';
import { Circle, Svg } from './styles';

type LoadingIndicatorProps = SvgProps;

export function LoadingIndicator({ small }: LoadingIndicatorProps): JSX.Element {
  return (
    <Svg viewBox="-24 -24 48 48" small={small}>
      <Circle cx="0" cy="0" r="20" fill="none" strokeWidth="4" />
    </Svg>
  );
}
