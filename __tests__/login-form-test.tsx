/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import {
  fireEvent,
  render,
  RenderAPI,
  RenderOptions,
  waitFor,
} from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';

import {ThemeProvider} from '../src/ui/theme/index';
import {LoginForm} from 'screens/Login/LoginForm';
import {Login} from 'screens';

const customRender = (
  ui: React.ReactElement<any>,
  options?: RenderOptions | undefined,
): RenderAPI => render(ui, {wrapper: ThemeProvider, ...options});

const mockLoginForm = jest.fn();

describe('LoginForm Form ', () => {
  it('renders correctly', () => {
    const {queryByTestId} = customRender(<Login />);
    const title = queryByTestId('title');
    expect(title).toHaveTextContent('Sign In');
  });

  it('should display required error when values are empty', async () => {
    const {getByText, findByText, queryByText, getByTestId} = customRender(
      <LoginForm />,
    );

    const button = getByTestId('sign-in-button');
    expect(queryByText(/Email is required/i)).toBeNull();
    fireEvent.press(button);
    expect(await findByText(/Email is required/i)).not.toBeNull();
    expect(getByText(/Password is required/i)).not.toBeNull();
  });

  it('should display matching error when email is invalid', async () => {
    const {
      getByTestId,
      findByText,
      queryByText,
      getByPlaceholderText,
    } = customRender(<LoginForm />);

    const button = getByTestId('sign-in-button');
    const emailInput = getByPlaceholderText(/email/i);
    const passwordInput = getByPlaceholderText(/password/i);

    fireEvent.changeText(emailInput, 'yyyyy');
    fireEvent.changeText(passwordInput, 'dhfdf');
    fireEvent.press(button);

    expect(queryByText(/Email is required/i)).toBeNull();
    expect(await findByText(/Invalid Email Format/i)).not.toBeNull();
  });

  it('should call LoginForm whit correct values when values are valid', async () => {
    const {getByTestId, getByPlaceholderText} = customRender(
      <LoginForm login={mockLoginForm} />,
    );

    const button = getByTestId('sign-in-button');
    const emailInput = getByPlaceholderText(/email/i);
    const passwordInput = getByPlaceholderText(/password/i);

    fireEvent.changeText(emailInput, 'youssef@gmail.com');
    fireEvent.changeText(passwordInput, 'password');
    fireEvent.press(button);

    await waitFor(() => {
      expect(mockLoginForm).toBeCalledWith({
        email: 'youssef@gmail.com',
        password: 'password',
      });
    });
  });
});
