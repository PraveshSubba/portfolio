import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import BumbleBee from "../components/BumbleBee";
import { useMediaQuery } from "react-responsive";
import { HeroCamera } from "../components/HeroCamera";
import Button from "../components/Button";
import Dog from "../components/dog";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-20 mt-16 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hello, I am Pravesh <span className="waving-hand">😊</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Learning. Growing. Creating
        </p>
        <div className="w-full h-full absolute inset-0">
          <Canvas className="w-full h-full ">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera
                makeDefault
                position={[0, 0, 30]}
              ></PerspectiveCamera>

              <HeroCamera isMobile={isMobile}>
                <group>
                  <BumbleBee
                  position={isMobile ? [-2, -10.6, -12] : [-3, -11.9, -12]}
                  rotation={[0.2, 0.1, 0]}
                  scale={isMobile ? 0.09 : 0.094}
                />
                <Dog
                  scale={5}
                  position={[5, -10.8, -2]}
                  rotation={[-0.2, -0.6, 0]}
                />
                </group>
                
              </HeroCamera>

              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} intensity={0.5} />
            </Suspense>
          </Canvas>
        </div>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space ">
        <a href="#contact" className="w-fit ">
          <Button
            name="lets work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96 hover:[background-color:#4d4d4d]"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
