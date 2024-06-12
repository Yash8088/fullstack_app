import { signIn } from "@/lib/auth";

const LoginPage = () => {
  const handleGithubLogin = async () => {
    "use server";
    await signIn("github"); //on click sign in with github
  };
  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login with Github</button>
      </form>
    </div>
  );
};
export default LoginPage;
