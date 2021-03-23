import * as React from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {Text, View} from 'ui';
import {
  useRestyle,
  spacing,
  border,
  backgroundColor,
  SpacingProps,
  BorderProps,
  BackgroundColorProps,
  VariantProps,
  createRestyleComponent,
  createVariant,
  useTheme,
} from '@shopify/restyle';
import {Theme} from './theme';

const buttonVariant = createVariant({themeKey: 'buttonVariants'});
const ButtonContainer = createRestyleComponent<
  VariantProps<Theme, 'buttonVariants'> & React.ComponentProps<typeof View>,
  Theme
>([buttonVariant], View);

const restyleFunctions = [
  buttonVariant as any,
  spacing,
  border,
  backgroundColor,
];

type Props = SpacingProps<Theme> &
  VariantProps<Theme, 'buttonVariants'> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> & {
    onPress: () => void;
    label?: string;
    loading?: boolean;
    disabled?: boolean;
  };

// type Props = {
//   label: string;
//   onPress: () => void;
//   variant?: 'primary' | 'outline';
// };

export const Button = ({
  onPress,
  label,
  // disabled = false,
  loading = false,
  variant = 'primary',
  ...rest
}: Props) => {
  const props = useRestyle(restyleFunctions, {...rest, variant});

  const textVariant = ('button_' + variant) as Partial<
    keyof Omit<Theme['textVariants'], 'defaults'>
  >;
  const theme = useTheme<Theme>();
  const {text} = theme.colors;

  return (
    <TouchableOpacity onPress={onPress}>
      <ButtonContainer backgroundColor="primary" {...props}>
        {loading ? (
          <ActivityIndicator color={text} />
        ) : (
          <Text
            fontSize={16}
            fontWeight="bold"
            textAlign="center"
            variant={textVariant}>
            {label}
          </Text>
        )}
      </ButtonContainer>
    </TouchableOpacity>
  );
};
