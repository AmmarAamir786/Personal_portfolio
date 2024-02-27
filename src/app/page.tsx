import Image from "next/image";
import Link from "next/link";
import fb from "@/assets/fb.png";
import insta from "@/assets/insta.png";
import linkdin from "@/assets/linkdin.png";
import yt from "@/assets/youtube.png";
import me from "@/assets/me.png";
import pheonix from "@/assets/illustrations/Pheonix.png";
import walk from "@/assets/3d/walk.gif";
import logo1 from "@/assets/logo1.png";
import logo2 from "@/assets/logo2.png";
import github from "@/assets/github.png";
import invoker from "@/assets/Voxel/invoker.gif";
import Description from "@/components/Home/Description";
import ImageCard from "@/components/Home/ImageCard";
import ProjectSection from "@/components/Projects/ProjectSection";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <main>
      <section className="margin flex lg:flex-row flex-col items-center justify-center gap-5 lg:text-left text-center">
        <div className=" lg:w-1/2 flex flex-col gap-10 md:pt-12 pt-6">
          <div className="flex flex-col gap-10 text-xl">
            <p>WELCOME!</p>
            <h1 className=" lg:text-6xl text-4xl">
              Hi, I am <span className=" text-amber-400">Ammar Aamir</span> a
              professional Digital Artisan
            </h1>
            {/* <p>
              An artisan of the digital realm, skilled in crafting immersive
              digital experiences through website development, design, 3D art,
              voxel art, and illustrations, with a keen eye for aesthetics.
            </p> */}
            <p>
              A professional front-end-web developer from Pakistan. My expertise
              includes using NextJs/React with TailwindCSS and Typescript to
              transform your ideas into responsive and dynamic code.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className=" text-xl">Find Me At:</p>

            <div className="flex gap-5 pb-5 lg:justify-start justify-center items-center">
              <Link href={"https://github.com/AmmarAamir786"}>
                <div>
                  <Image
                    src={github}
                    alt="github"
                    width={40}
                    className=" rounded-full"
                  ></Image>
                </div>
              </Link>
              <Link
                href={"https://www.facebook.com/ammar.aamir.94?mibextid=kFxxJD"}
              >
                <div>
                  <Image
                    src={fb}
                    alt="fb"
                    width={40}
                    className=" rounded-md"
                  ></Image>
                </div>
              </Link>
              <Link href={"https://www.instagram.com/ammar.aamir.786/"}>
                <div>
                  <Image
                    src={insta}
                    alt="insta"
                    width={40}
                    className=" rounded-md"
                  ></Image>
                </div>
              </Link>
              <Link href={"/"}>
                <div>
                  <Image
                    src={linkdin}
                    alt="linkdin"
                    width={40}
                    className=" rounded-md"
                  ></Image>
                </div>
              </Link>
              <Link
                href={
                  "https://www.youtube.com/channel/UCM-mGaA91IamCGKiEahbb1g"
                }
              >
                <div>
                  <Image
                    src={yt}
                    alt="youtube"
                    width={40}
                    className=" rounded-full"
                  ></Image>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex lg:justify-end items-center justify-center md:self-end">
          <Image
            src={me}
            alt="Ammar Hero Pic"
            width={480}
            placeholder="blur"
            loading="eager"
          ></Image>
        </div>
      </section>

      <Skills></Skills>

      <ProjectSection></ProjectSection>

      <section className="flex margin gap-5 mt-5">
        <div className="rounded-full bg-amber-400 w-2 h-2"></div>
        <div className="rounded-full bg-amber-400 w-2 h-2"></div>
        <div className="rounded-full bg-amber-400 w-full h-2"></div>
      </section>

      <section className="lg:h-screen flex items-center py-10 text-center lg:text-left">
        <div className="margin flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-0">
          <div className="w-full lg:w-1/2 flex lg:justify-start items-center justify-center">
            <Image
              src={pheonix}
              alt="pheonix"
              height={500}
              width={500}
              placeholder="blur"
            ></Image>
          </div>

          <Description
            h1="Illustrations"
            p="As an illustration expert, I breathe life into ideas through
            strokes of creativity. Whether it's vibrant digital
            illustrations or intricate hand-drawn sketches, my work captures
            narratives and emotions with precision. With a keen eye for detail
            and a passion for storytelling, I transform concepts into visually
            compelling illustrations that resonate with depth and imagination."
            href="/illustrations"
            buttontext="See Illustrations"
          ></Description>
        </div>
      </section>

      <section className="lg:h-screen flex items-center py-10 text-center lg:text-left bg-black">
        <div className="margin flex flex-col items-center justify-center gap-10 lg:gap-0 lg:flex-row-reverse">
          <div className="w-full lg:w-1/2 flex lg:justify-end items-center justify-center">
            <Image
              src={walk}
              alt="walk"
              height={500}
              width={500}
              loading="lazy"
            ></Image>
          </div>

          <Description
            h1="3-D Art"
            p="As a seasoned 3D artist and Blender expert I love creating
              lifelike models and animations. From architectural renderings to
              dynamic visuals, my work showcases Blender's versatility and
              my mastery of 3D design."
            href="/3d"
            buttontext="Explore 3D World"
          ></Description>
        </div>
      </section>

      <section className="lg:h-screen flex items-center py-10 text-center lg:text-left">
        <div className="margin flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-0">
          <div className="w-full lg:w-1/2 flex lg:justify-start items-center justify-center">
            <Image
              src={invoker}
              alt="invoker"
              height={500}
              width={500}
              loading="lazy"
            ></Image>
          </div>

          <Description
            h1="Voxel Art"
            p="I specialize in voxel artistry, transforming pixels into vibrant
            3D wonders. With an adept touch, I craft captivating voxel models
            and scenes. From charming game environments to pixelated
            masterpieces, my work reflects a mastery of voxel art techniques,
            bringing creativity to life in every block."
            href="/voxelart"
            buttontext="Discover Voxels"
          ></Description>
        </div>
      </section>

      <section className="lg:h-screen flex items-center py-10 text-center lg:text-left bg-black justify-center">
        <div className="margin flex flex-col items-center justify-center gap-12">
          <div className=" lg:text-6xl text-4xl text-amber-400">LOGOS</div>

          <div className="flex justify-center gap-10 flex-col lg:flex-row">
            <ImageCard
              src={logo1}
              alt="panaverse logo 1"
              width={580}
            ></ImageCard>
            <ImageCard
              src={logo2}
              alt="panaverse logo 2"
              width={580}
            ></ImageCard>
          </div>
        </div>
      </section>
    </main>
  );
}
