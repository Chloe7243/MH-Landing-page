import {
  FaSquareGithub,
  FaLinkedin,
  FaXTwitter,
  FaCircleInfo,
} from "react-icons/fa6";
import { TbCalendarSearch } from "react-icons/tb";
import { RiUserSearchFill } from "react-icons/ri";

import "./App.css";
import Card from "./UI/Card";
import Logo from "./UI/Logo";
import pcVideo from "./assets/Movie Hunt.mp4";

function App() {
  const iconClass =
    "rounded-md w-8 aspect-square text-lg flex items-center justify-center float-left mr-2 mt-1.5";
  const navLinkClasses = "hidden sm:block";
  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full p-6 py-4 flex items-center justify-between bg-opacity-50 backdrop-blur-lg drop-shadow-sm z-40 border-b">
        <Logo />

        <div className="flex items-center gap-6">
          <a href="#about" className={`${navLinkClasses}`}>
            About
          </a>
          <a
            href="https://movie-hunt-rn6cp2b7z-my-team-06f1be3d.vercel.app/"
            className={`${navLinkClasses}`}
          >
            Get Started
          </a>
        </div>
      </nav>

      <main className="p-8 sm:px-10 lg:px-20 mt-20 max-w-[90rem] m-auto flex flex-col gap-10">
        {/* SECTION WITH VIDEOS */}
        <div className="flex justify-center relative items-center gap-10 flex-wrap">
          <h1 className="font-extrabold md:text-5xl xl:text-6xl text-4xl capitalize lg:py-6" style={{lineHeight:"1.7"}}>
            Discover, Stream, Enjoy: Your Ultimate Cinematic Companion!
          </h1>

          <video autoPlay muted loop className="md:max-h-[85vh]">
            <source src={pcVideo} type="video/mp4" />
            Sorry, your browser doesn't support videos.
          </video>
        </div>

        {/* ABOUT SECTION */}
        <div id="about" className={`flex flex-col gap-8 items-center`}>
          <h2 className="font-bold text-4xl text-center">About</h2>
          <p>
            Welcome to our app, your ultimate destination for discovering the
            perfect movie or show to watch! Whether you're in the mood for a
            thrilling action flick, a heartwarming romantic comedy, or an
            intense drama, we've got you covered. With our user-friendly
            interface and extensive database, you can easily hunt for your next
            cinematic adventure. Say goodbye to endless scrolling and
            indecision, and hello to hours of entertainment tailored to your
            preferences. Let us help you find your next favorite film or
            binge-worthy series. Whether it's streaming platforms, cinemas, or
            rental services, we've got you covered with all the information you
            need to access your chosen entertainment seamlessly. Never miss out
            on the latest releases or hidden gems again. Happy hunting!
          </p>

          {/* ABOUT SECTION CARDS */}
          <div
            className={`flex gap-10 flex-wrap justify-center mt-10`}
          >
            <Card>
              <p className={`bg-black ${iconClass}`}>
                <TbCalendarSearch className="text-white" />
              </p>
              <p>
                With our app, you have the power to search for movies or shows
                based on their release year. Whether you're nostalgic for
                classics from decades past or eager to explore the latest
                releases, our intuitive search function allows you to filter and
                discover content from any era, ensuring you find exactly what
                you're looking for.
              </p>
            </Card>
            <Card>
              <p className={`bg-green-800 ${iconClass}`}>
                <RiUserSearchFill className="text-white" />
              </p>
              <p>
                Unleash the full potential of your movie or show hunt by
                searching based on your favorite actors or actresses. Our app
                enables you to explore a vast array of titles featuring your
                preferred performers, whether it's the iconic roles of a beloved
                star or the breakout performances of emerging talent.
              </p>
            </Card>
            <Card>
              <p className={`bg-blue-800 ${iconClass}`}>
                <FaCircleInfo className="text-white" />
              </p>
              <p>
                Say goodbye to endless browsing and confusion about where to
                find your desired content. Our app provides comprehensive
                information about existing and upcoming movies or shows,
                including details on where to watch them.
              </p>
            </Card>
          </div>
        </div>
      </main>

      <footer className="flex justify-center items-center  gap-4 text-2xl h-20">
        <a href="https://github.com/Chloe7243/movie-hunt" target="_blank">
          <FaSquareGithub />
        </a>

        <a
          href="www.linkedin.com/in/stephanie-oluoha-09abb01aa"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/just__steph_" target="_blank">
          <FaXTwitter />
        </a>
      </footer>
    </>
  );
}

export default App;
