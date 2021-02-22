import React from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
} from "../styles/hero/hero";
import Video from "../assets/videos/herobg_video.mp4";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg
          src={Video}
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
        ></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroH1>馬上尋找下一段旅程吧！</HeroH1>
          <HeroP>想去哪個縣市走走呢？</HeroP>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
