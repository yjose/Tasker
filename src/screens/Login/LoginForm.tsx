import * as React from 'react';
import {useForm} from 'react-hook-form';
import {Button, Input, Text, View} from 'ui';

type FormData = {
  email: string;
  password: string;
  firstName: string;
};

const validation = {
  email: {
    required: {value: true, message: 'Email is required'},
    pattern: {
      value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Invalid Email Format',
    },
  },
  password: {
    required: {value: true, message: 'Password is required'},
  },
};

export const LoginForm = ({login}: {login?: (data: FormData) => void}) => {
  const {handleSubmit, errors, setValue, register} = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    login?.(data);
  };
  React.useEffect(() => {
    register('email', validation.email);
    register('password', validation.password);
  }, [register]);

  return (
    <>
      <View marginVertical="xl">
        <Input
          placeholder="Email"
          onChangeText={t => setValue('email', t)}
          error={errors.email}
        />

        <Input
          placeholder="Password"
          onChangeText={t => setValue('password', t)}
          secureTextEntry={true}
          error={errors.password}
        />
        <Text color="grey" textAlign="right">
          FORGOT?
        </Text>
      </View>
      <Button
        label="Sign in"
        onPress={handleSubmit(onSubmit)}
        testID="sign-in-button"
      />
      <Button
        variant="outline"
        label="Create account"
        onPress={() => console.log('button 1')}
      />
    </>
  );
};
