import { signIn } from "../../auth";

const SignIn = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button type="submit" className="py-2 px-4 bg-gray-200 rounded">
        Sign In With Google
      </button>
    </form>
  );
};

export default SignIn;
