import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-white p-8 mb-12">
      <div className="text-center max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <Avatar className="w-52 h-52">
            <AvatarImage
              className="w-full h-full rounded-full"
              src="../avatar.jpeg"
            />
            <AvatarFallback className="text-2xl">AP</AvatarFallback>
          </Avatar>
        </div>
        <h1 className="text-4xl font-bold mb-4">
          Hi, I'm <span className="text-teal-400 hover:text-teal-700 cursor-pointer">Ayush Pandey</span>
        </h1>
        <p className="text-lg mb-6">
          I'm a passionate software engineer with a strong focus on building robust, scalable systems and solving complex problems.
          With a solid foundation in backend technologies and a deep understanding of software architecture, I aim to deliver efficient and maintainable solutions.
        </p>
        <p className="text-lg mb-8">
          Welcome to my portfolio! Explore my projects and feel free to get in touch if you're interested in collaborating or learning more about my work in software development.
        </p>
      </div>
    </div>
  );
};
