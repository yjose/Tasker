import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export function Plus(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 9a2 2 0 002 2h5a1 1 0 110 2h-5a2 2 0 00-2 2v5a1 1 0 11-2 0v-5a2 2 0 00-2-2H4a1 1 0 110-2h5a2 2 0 002-2V4a1 1 0 112 0v5z"
        fill="#006CFF"
      />
    </Svg>
  );
}
