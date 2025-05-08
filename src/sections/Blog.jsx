export const Blog = () => {
  return (
    <section className="c-space my-10" id="blog">
      <p className="head-text">My Blog</p>
      <div className="border border-[var(--color-black-200)] bg-[var(--color-black-200)] rounded-lg h-96 md:h-full w-full px-5 text-white">
        <h1 className="text-2xl font-bold text-white my-6">
          My Journey with Three.js
        </h1>
        <p className="text-lg mb-4 text-[var(--color-white-600)]">
          My journey with Three.js has been exciting, creating 3D visuals for
          the web. I started by exploring the capabilities of Three.js, which
          allowed me to build interactive 3D scenes directly in the browser
          using just JavaScript. It opened up a whole new world of possibilities
          for me as a web developer, allowing me to combine my love for coding
          with my growing interest in graphics and design.
        </p>

        <h2 className="text-xl font-semibold mt-6 text-white">
          1 . Learning the Basics
        </h2>
        <p className="text-lg mb-4 text-[var(--color-white-600)] pl-4">
          I started with simple tutorials, learning how to create basic 3D
          shapes like cubes and spheres. Three.js made it easy to render these
          objects on the screen with minimal code.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          2. Building My First 3D Scene
        </h2>
        <p className="text-lg mb-4 pl-4 text-[var(--color-white-600)]">
          My first project was a rotating 3D cube. I learned how to add camera
          controls, lighting, and animation to bring the cube to life.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          3. Expanding to Interactive Projects
        </h2>
        <p className="text-lg mb-4 pl-4 text-[var(--color-white-600)]">
          As I gained confidence, I built the portfolio you are seeing right
          now, which taught me valuable skills in 3D web development, material
          properties, and animation techniques.
        </p>

        <h2 className="text-xl font-semibold mt-6">4. Looking Ahead</h2>
        <p className="text-lg mb-4 pl-4 text-[var(--color-white-600)]">
          Going forward, I’m excited to explore VR/AR with Three.js and create
          even more immersive web experiences.
        </p>

        <p className="text-lg mb-4 text-right">
          -If you're looking to dive into 3D web development, I highly recommend
          Three.js!
        </p>
      </div>
    </section>
  );
};
