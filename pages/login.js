import getProviders from "next-auth/react";
function Login() {
  return (
    <div>
      <h1>This is Login page</h1>
    </div>
  );
}

export default Login;
export async function getServerSideProps() {
  const providers = await getProviders();
}
