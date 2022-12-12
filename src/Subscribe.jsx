import SubHeader from "./Subscribe/SubHeader";
import SubStore from "./Subscribe/SubOnline";

function Subscribe() {
  return (
    <>
      <div className="overflow-hidden">
        <SubHeader />
        <SubStore />
      </div>
    </>
  );
}

export default Subscribe;
