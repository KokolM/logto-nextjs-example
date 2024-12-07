'use client';

type Props = {
  onSignIn: () => Promise<void>;
};

const SignIn = ({ onSignIn }: Props) => {
  return (
    <button
      onClick={() => {
        onSignIn();
        // window.open('https://heymetest.joralmi.eu/logto/sign-in', '_self');
      }}
    >
      Sign In
    </button>
  );
};

export default SignIn;