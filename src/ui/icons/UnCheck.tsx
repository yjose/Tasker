import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export function UnCheck(props: SvgProps) {
  return (
    <Svg width={28} height={28} fill="none" {...props}>
      <Path
        opacity={0.2}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 14c0 7.732-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0s14 6.268 14 14zm-2 0c0 6.627-5.373 12-12 12S2 20.627 2 14 7.373 2 14 2s12 5.373 12 12z"
        fill="#252A31"
      />
    </Svg>
  );
}
