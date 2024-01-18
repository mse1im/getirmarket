import logo from "../../../public/logo.png";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Container from "../container/Container";
import Basket from "./basket/index";
import "./Header.scss";

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
  const navigate = useRouter();
  const goToHome = () => {
    navigate.push("/");
  };
  return (
    <header>
      <Container>
        <nav>
          <Image
            src={logo}
            alt="GetirMarket"
            width={141}
            height={41}
            onClick={goToHome}
          />
          <Basket />
        </nav>
      </Container>
    </header>
  );
};
export default Header;
