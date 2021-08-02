import Header from "../Components/Header"
import MethodSide from "../Components/MethodsSide"

export default function Home() {
  return (
    <div>
      <Header sx={{ position: "sticky", top: "0" }} />
        <MethodSide />
    </div>
  );
}
