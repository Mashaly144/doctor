import FaqHeader from "../components/Health/Faq/FaqHeader";
import FaqText from "../components/Health/Faq/FaqText";
import HealthHeader from "../components/Health/HealthHeader";
import Tips from "../components/Health/Tips";

const Health = () => {
  return (
    <>
      <HealthHeader />
      <Tips />
      <FaqHeader />
      <FaqText />
    </>
  );
};
export default Health;
