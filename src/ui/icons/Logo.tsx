import * as React from 'react';
import Svg, {SvgProps, Rect, Mask, G, Path} from 'react-native-svg';

export function Logo(props: SvgProps) {
  return (
    <Svg width={128} height={128} fill="none" {...props}>
      <Rect
        opacity={0.6}
        x={8}
        y={16}
        width={112}
        height={112}
        rx={32}
        fill="#fff"
      />
      <Mask id="prefix__a" x={0} y={0} width={128} height={128}>
        <Rect width={128} height={128} rx={32} fill="#fff" />
      </Mask>
      <G mask="url(#prefix__a)">
        <Path fill="#fff" d="M0 0h128v128H0z" />
        <Rect width={128} height={128} rx={32} fill="#fff" />
        <Path
          fill="#F45E6D"
          d="M152.184 9.5l7.071 7.071-123.49 123.49-7.07-7.071z"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M56.332 85.045a2 2 0 002.827 0l76.685-76.647a4.78 4.78 0 016.757 0 4.772 4.772 0 010 6.751L61.107 96.602a4.78 4.78 0 01-7.08-.358L35.399 77.632a4.771 4.771 0 010-6.751 4.78 4.78 0 016.757 0l14.176 14.164z"
          fill="#006CFF"
        />
        <Path
          fill="#61DEA4"
          d="M133.184 46.5l7.071 7.071L23.776 170.05l-7.07-7.071z"
        />
      </G>
    </Svg>
  );
}
