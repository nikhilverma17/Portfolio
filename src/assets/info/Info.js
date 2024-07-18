import self from '../img/self.png';
import { colors } from '../colors/mainGradient';
import { Html, Javascript } from '@mui/icons-material';
import { css } from '@emotion/react';

export const info = {
  firstName: 'Nikhil',
  lastName: 'Verma',
  initials: 'NV',
  position: '📊 Data Analyst',
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: '🎓',
      text: 'I pursued MCA at Integral University, Lucknow',
    },
    {
      emoji: '📍',
      text: 'Presently residing in Palia Kalan, India.',
    },
    {
      emoji: '👨🏻‍💻',
      text: 'Enthusiastic about learning cutting-edge technologies.',
    },
  ],
  socials: [
    {
      link: 'mailto:iamvermanikhil@gmail.com',
      icon: 'fa fa-envelope',
      label: 'Email',
    },
    {
      link: 'https://www.instagram.com/thevermanikhil/',
      icon: 'fa fa-instagram',
      label: 'Instagram',
    },
    {
      link: 'https://github.com/nikhilverma17',
      icon: 'fa fa-github',
      label: 'GitHub',
    },
    {
      link: 'https://www.linkedin.com/in/nihkil-verma-465848139/',
      icon: 'fa fa-linkedin',
      label: 'LinkedIn',
    },
    {
      link: 'https://twitter.com/thenikhil_verma',
      icon: 'fa-brands fa-x-twitter',
      label: 'Twitter',
    },
  ],
  bio: "I'm Nikhil Verma, a dedicated Data Analyst proficient in analyzing and interpreting complex data sets to drive meaningful insights and strategic business decisions. Skilled in SQL, Python, data visualization, and statistical analysis, I excel in transforming raw data into actionable recommendations. I also have experience with the MERN stack (MongoDB, Express.js, React.js, Node.js), enabling me to develop full-stack applications. Beyond data, I have a passion for culinary experiments, exploring diverse cuisines, and immersing myself in novels and superhero comics. Eager to contribute my analytical skills, I am actively seeking opportunities to leverage data in innovative ways.",
  skills: {
    languages: [
      'SQL',
      'Python',
      'R',
      'JavaScript',
      'C++',
    ],
    frameworks: [
      'MERN Stack',
    ],
    tools: [
      'Excel',
      'Power BI',
      'Tableau',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'MySQL',
      'Data Cleaning',
    ],
  },
  hobbies: [
    {
      label: 'Novels',
      emoji: '📖',
    },
    {
      label: 'Video Games',
      emoji: '🎮',
    },
    {
      label: 'Movies',
      emoji: '📺',
    },
    {
      label: 'Cooking',
      emoji: '🔪',
    },
    {
      label: 'Traveling',
      emoji: '✈️',
    },
    {
      label: 'Cricket',
      emoji: '🏏',
    },
  ],
  portfolio: [
    {
      title: 'Tableau Dashboard for F.r.i.e.n.d.s. ',
      live: 'https://public.tableau.com/app/profile/nikhil.verma7393/viz/TheOneWithAllStats/Dashboard1#2', // If not applicable, leave it as an empty string
      source: 'https://github.com/nikhilverma17/FRIENDS-DASHBOARD', // If not applicable, leave it as an empty string
      paragraph: '"Created a Tableau dashboard for Friends TV series, integrating data from Google, Wikipedia, and the official site. Visualized IMDb ratings, character dialogues per season, and screen appearances, revealing viewer trends and episode popularity. This interactive tool provides deep insights into viewer preferences and character dynamics, enhancing understanding of the sitcoms appeal and narrative structure."',
      image: 'https://i.postimg.cc/NjC0ck4y/Screenshot-2024-07-18-163824.png', // Image URL if available
    }, 
    {
      title: 'Dashboard for T20 World Cup Statistics',
      live: ' ',
      source: 'https://github.com/nikhilverma17/Icc-T20-World-Cup-Stats',
      paragraph: '"Developed a Power BI dashboard analyzing T20 World Cup (2007-2024) batting and bowling stats using ESPN Cricinfo data. Extracted match details, player performances, and team stats via web scraping and APIs. Designed interactive visualizations with slicers and filters for dynamic data exploration, aiding informed decisions across tournaments."',
      image: 'https://i.postimg.cc/85mQ11Sy/Screenshot-2024-07-18-164119.png',
    },       
    {
      title: 'Rhythm Sync',
      live: 'https://rhythm-sync.netlify.app/',
      source: 'https://github.com/nikhilverma17/Rhythmsync',
      paragraph: '"Rhythm Sync: The TypeScript music player reimagined. Switch between day and night backgrounds while enjoying interactive music playlists categorized for work, relaxation, and sleep. Elevate your experience with integrated nature sounds. Immerse yourself in a symphony of features that harmonize audio and visuals, transcending traditional music players."',
      image: 'https://i.postimg.cc/x8bgT8vM/Screenshot-2024-07-18-161934.png',
    },
    {
      title: 'ChatGram',
      live: 'https://chat-gm.netlify.app/',
      source: 'https://github.com/nikhilverma17/ChatGram',
      paragraph: '"Engage in seamless conversations with our real-time chat app powered by ReactJS. Experience instant messaging, intuitive design, and responsive interactions. Stay connected with friends and colleagues effortlessly. Share messages and media, all in a dynamic and user-friendly interface that keeps your conversations lively and vibrant."',
      image: 'https://i.postimg.cc/YqdfK1KZ/Screenshot-2024-07-18-162520.png',
    },
    {
      title: 'Foodopidea',
      live: 'https://foodopidea.netlify.app/',
      source: 'https://github.com/nikhilverma17/Foodopidea',
      paragraph: '"Foodopidea is a user-friendly web app built with React.js, offering a diverse collection of categorized recipes. Whether you are craving comfort food or exploring new cuisines, this app has you covered. Search for recipes easily and enjoy a culinary journey with step-by-step instructions and delightful visuals."',
      image: 'https://i.postimg.cc/85dMyvmy/Screenshot-2024-07-18-162651.png',
    },
    {
      title: 'Climate Compass',
      live: 'https://climate-compass.netlify.app/',
      source: 'https://github.com/nikhilverma17/Climate-Compass',
      paragraph: '"Experience weather like never before with our React.js climate app, powered by OpenWeather API. Immerse yourself in weather animations and ambient sounds – hear rain when it pours. Available in all major Indian languages, stay connected with nature moods in a language you understand."',
      image: 'https://i.postimg.cc/QxY5nhcr/Screenshot-2024-07-18-162733.png',
    },
    {
      title: 'To-Do List',
      live: 'https://td0-list.netlify.app/',
      source: 'https://github.com/nikhilverma17/to-do-list',
      paragraph: '"Revolutionize task management using our React.js to-do list. Enjoy fluidity as you effortlessly add, delete, and reset tasks individually, elevating your organization. This user-centric app transforms your approach to task management, offering a seamless experience that enhances your daily productivity and empowers efficient workflows."',
      image: 'https://i.postimg.cc/qqbtYxhG/Screenshot-2024-07-18-162813.png',
    },
    {
      title: 'Tally Counter',
      live: 'https://taly-counter.netlify.app/',
      source: 'https://github.com/nikhilverma17/Tally-Counter',
      paragraph: '"Elevate your counting tasks with our React.js Tally Counter app. With each click, watch the count increment and decrease, granting you control and accuracy. This user-friendly app simplifies tracking and ensures an efficient tallying process, adapting seamlessly to your needs."',
      image: 'https://i.postimg.cc/rFH0NgLV/Screenshot-2024-07-18-162901.png',
    },
    {
      title: 'Blogging Website',
      live: 'https://nikhilsblog.onrender.com',
      source: 'https://github.com/nikhilverma17/Nikhil-sBlog_Main',
      paragraph: '"Experience the simplicity of our Express.js application tailored for creating and viewing blog posts. Built on the foundation of MongoDB, it efficiently stores and manages your valuable content, guaranteeing a seamless user experience. Embrace a user-friendly platform that empowers you to share your thoughts effortlessly and explore posts."',
      image: 'https://www.linkpicture.com/q/WhatsApp-Image-2023-08-23-at-20.12.00.jpg',
    },
    {
      title: 'Dice Game',
      live: 'https://nikhilverma17.github.io/Dice-Game/',
      source: 'https://github.com/nikhilverma17/Dice-Game',
      paragraph: '"Engage in a virtual dice game using JavaScript. Roll the dice and witness the randomized outcome of two players dice throws. Experience the thrill as the page dynamically updates to declare the winner or a draw, making each playthrough an exciting experience. A simple yet interactive project for enjoying friendly competition through random chance."',
      image: 'https://i.postimg.cc/2y6y4LcL/Screenshot-2024-07-18-162948.png',
    },
    {
      title: 'Drum Kit',
      live: 'https://nikhilverma17.github.io/drum-kit/',
      source: 'https://github.com/nikhilverma17/drum-kit',
      paragraph: '"Dive into an interactive drumming experience powered by JavaScript. Click drum buttons or use keyboard keys to trigger dynamic sounds, each corresponding to a unique drum element. Enjoy captivating animations and audio effects that bring your rhythm exploration to life, catering to both music lovers and tech enthusiasts."',
      image: 'https://i.postimg.cc/jSN5QbXc/Screenshot-2024-07-18-163024.png',
    },
    {
      title: 'Simon Game',
      live: 'https://nikhilverma17.github.io/Simon-Game/',
      source: 'https://github.com/nikhilverma17/Simon-Game',
      paragraph: '"Play the Simon Says game with jQuery. Repeat the pattern by clicking colored buttons, advancing through levels. Mistakes trigger dynamic effects and Game Over message. A collapsible section enhances the experience. A lively project for testing memory, featuring colorful animations and interactive design."',
      image: 'https://i.postimg.cc/85CN3Qhq/Screenshot-2024-07-18-163138.png',
    }
  ],
};

