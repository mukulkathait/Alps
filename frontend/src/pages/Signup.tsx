import { Quote } from "../components/auth/Quote";
import { SignupComponent } from "../components/auth/SignupComponent";

export const Signup = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <SignupComponent />
      </div>
      <div className="hidden lg:block">
        <Quote />
      </div>
    </div>
  );
};
