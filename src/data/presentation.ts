type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "jakubchmielewski80@gmail.com",
  title: "Hi, I’m Jakub 👋",
  profile: "https://avatars.githubusercontent.com/u/53061612?v=4",
  description:
    "Software Engineer. I love open source 🔥",
  socials: [
    // {
    //   label: "X",
    //   link: "https://twitter.com/itsstormzz_",
    // },
    // {
    //   label: "Bento",
    //   link: "https://bento.me/m-wolff",
    // },
    {
      label: "Github",
      link: "https://github.com/chmielulu",
    },
  ],
};

export default presentation;
