'use client';

type Props = {
  onSignOut: () => Promise<void>;
};

const SignOut = ({ onSignOut }: Props) => {
  return (
    <button
      onClick={() => {
        onSignOut();
        // window.open('https://heymetest.joralmi.eu/logto/sign-out', '_self');
      }}
    >
      Sign Out
    </button>
  );
};

export default SignOut;