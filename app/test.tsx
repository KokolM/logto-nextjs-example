'use client';

type Props = {
};

const SignIn = ({ }: Props) => {

    async function test() {
        console.log(await fetch('https://heymetest.joralmi.eu/api/ui/v1/users/my', {
          method: 'GET',
          credentials: "include",
        })
        )
      }

  return (
    <button
      onClick={() => {
        test();
      }}
    >
      Test
    </button>
  );
};

export default SignIn;