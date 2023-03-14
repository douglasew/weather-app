import gato from "../../assets/img/cat.jpeg";

const AboutPage = () => {
  return (
    <div className="flex justify-center text-center items-center h-screen w-screen dark:bg-slate-900 ">
      <div>
        <img src={gato} width={350} height={350} className="rounded-3xl" />
        <div className="mt-10">
          <p className="dark:text-white">Version 2.1.0</p>
          <p className="dark:text-white">App desenvolvido por: </p>
          <a href={"https://github.com/douglasew"}>
            <p className="font-bold text-xl dark:text-white">@douglasew</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
