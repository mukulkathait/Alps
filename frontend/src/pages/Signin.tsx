import { Quote } from "../components/auth/Quote";
import { SigninComponent } from "../components/auth/SigninComponent";

export const Signin = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <SigninComponent />
      </div>
      <div className="hidden lg:block">
        <Quote />
      </div>
    </div>
  );
};
