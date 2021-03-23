import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export function Check(props: SvgProps) {
  return (
    <Svg width={28} height={28} fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 14c0 7.732-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0s14 6.268 14 14zm-14.893 2.053a1 1 0 01-1.414 0l-2.556-2.556a1 1 0 00-1.414 1.415l3.899 3.898a1 1 0 001.482.075l7.778-7.778a1 1 0 10-1.414-1.414l-6.36 6.36z"
        fill="#006CFF"
      />
    </Svg>
  );
}
