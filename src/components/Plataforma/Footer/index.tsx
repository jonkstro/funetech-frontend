import { Container } from "./styles";

import ImgFacebook from "../../../assets/images/facebook.png";
import ImgInstagram from "../../../assets/images/instagram.png";
import ImgTwitter from "../../../assets/images/twitter.png";
import Image from "next/image";

export function Footer() {
  return (
    <Container>
      <a href="https://www.facebook.com">
        <div>
          <Image
            width={50}
            src={ImgFacebook}
            alt={"Logo rede social facebook"}
          />
        </div>
      </a>
      <a href="https://www.instagram.com">
        <div>
          <Image
            width={50}
            src={ImgInstagram}
            alt={"Logo rede social instagram"}
          />
        </div>
      </a>
      <a href="https://www.twitter.com">
        <div>
          <Image width={50} src={ImgTwitter} alt={"Logo rede social twitter"} />
        </div>
      </a>
    </Container>
  );
}
