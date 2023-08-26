import self from '../img/self.png';
import { colors } from '../colors/mainGradient';
import { Html, Javascript } from '@mui/icons-material';
import { css } from '@emotion/react';

export const info = {
  firstName: 'Nikhil',
  lastName: 'Verma',
  initials: 'NV', // the example uses first and last, but feel free to use three or more if you like.
  position: '💻 Full Stack Developer',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
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
      link: 'mailto:iamvermanikhil@gmail.com', // this should be https://yourname.com/resume.pdf once you've deployed
      icon: 'fa fa-envelope',
      label: 'Email',
    },
    {
      link: 'https://www.instagram.com/thevermanikhil/',
      icon: 'fa fa-instagram',
      label: 'instagram',
    },
    {
      link: 'https://github.com/nikhilverma17',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://www.linkedin.com/in/nihkil-verma-465848139/',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
    {
      link: 'https://twitter.com/thenikhil_verma',
      icon: 'fa-brands fa-x-twitter',
      label: 'twitter',
    },
  ],
  bio: "I'm Nikhil Verma, an enthusiastic aspiring full stack developer well-versed in HTML, CSS, JavaScript, Node.js, React.js, Python, and MongoDB. Proficient in both front-end and back-end technologies, I'm skilled at crafting interactive user interfaces, implementing responsive designs, and building robust server-side systems. Beyond coding, I find joy in culinary experiments, savoring diverse cuisines, indulging in novels that ignite my imagination, exploring new destinations, and immersing myself in the world of superhero comics and movies. Additionally, my fascination with mythology adds a rich layer to my interests. Eager to contribute my technical prowess, I'm actively seeking opportunities to leverage my skills in creating innovative, performance-driven web solutions.",
  skills: {
    // you dont havew to strictly follow the 'languages', 'frameworks', 'databases', 'cloudServices', and 'tools' categories. You can add your own if you'd like.
    // but the structure should be the same, an array of strings and the key should be one word, no spaces.
    languages: [
    'HTML', 
    'CSS',
    'Javascript',
    'Python',
    'C Language',
    'Sass',
  ],
    frameworks: [
      'React',
      'Bootstrap',
      'Express',
      'MERN Stack',
      'Django',
      
    ],
    databases: ['MySQl', 'MongoDB','Firebase',],
    cloudServices: ['Render', 'Google Analytics', 'Netlify'],
    tools: [
      'Git',
      'Postman',
      'npm',
      'yarn',
      'VS code',
      'Pip'
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
      label: 'cricket',
      emoji: '🏏',
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    //   for the null ones, the button will not show up
    {
      title: 'Rhythm Sync',
      live: 'https://rhythm-sync.netlify.app/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/nikhilverma17/Rhythmsync', // this should be a link to the **repository** of the project, where the code is hosted.
      paragraph:'"Rhythm Sync: The TypeScript music player reimagined. Switch between day and night backgrounds while enjoying interactive music playlists categorized for work, relaxation, and sleep. Elevate your experience with integrated nature sounds. Immerse yourself in a symphony of features that harmonize audio and visuals, transcending traditional music players."',
      image: 'https://www.linkpicture.com/q/WhatsApp-Image-2023-08-25-at-20.21.24.jpg',
    },
    {
      title: 'ChatGram',
      live: 'https://chat-gm.netlify.app/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/nikhilverma17/ChatGram', // this should be a link to the **repository** of the project, where the code is hosted.
      paragraph:'"Engage in seamless conversations with our real-time chat app powered by ReactJS. Experience instant messaging, intuitive design, and responsive interactions. Stay connected with friends and colleagues effortlessly. Share messages and media, all in a dynamic and user-friendly interface that keeps your conversations lively and vibrant."',
      image: 'https://www.linkpicture.com/q/WhatsApp-Image-2023-08-23-at-21.52.29.jpg',
    },
    {
      title: 'Foodopidea',
      live: 'https://foodopidea.netlify.app/',
      source: 'https://github.com/nikhilverma17/Foodopidea',
      paragraph:'"Foodopidea is a user-friendly web app built with React.js, offering a diverse collection of categorized recipes. Whether you are craving comfort food or exploring new cuisines, this app has you covered. Search for recipes easily and enjoy a culinary journey with step-by-step instructions and delightful visuals."',
      image: 'https://www.linkpicture.com/q/2_1718.jpg',
    },
    {
      title: 'Climate Compass',
      live: 'https://climate-compass.netlify.app/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/nikhilverma17/Climate-Compass', // this should be a link to the **repository** of the project, where the code is hosted.
      paragraph:'"Experience weather like never before with our React.js climate app, powered by OpenWeather API. Immerse yourself in weather animations and ambient sounds – hear rain when it pours. Available in all major Indian languages, stay connected with nature moods in a language you understand."',
      image: 'https://www.linkpicture.com/q/WhatsApp-Image-2023-08-23-at-21.55.00.jpg',
    },
    {
      title: 'To-Do List',
      live: 'https://td0-list.netlify.app/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/nikhilverma17/to-do-list', // this should be a link to the **repository** of the project, where the code is hosted.
      paragraph:'"Revolutionize task management using our React.js to-do list. Enjoy fluidity as you effortlessly add, delete, and reset tasks individually, elevating your organization. This user-centric app transforms your approach to task management, offering a seamless experience that enhances your daily productivity and empowers efficient workflows."',
      image: 'https://www.linkpicture.com/q/WhatsApp-Image-2023-08-23-at-21.59.19.jpg',
    },
    {
      title: 'Tally Counter',
      live: 'https://taly-counter.netlify.app/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/nikhilverma17/Tally-Counter', // this should be a link to the **repository** of the project, where the code is hosted.
      paragraph:'"Elevate your counting tasks with our React.js Tally Counter app. With each click, watch the count increment and decrease, granting you control and accuracy. This user-friendly app simplifies tracking and ensures an efficient tallying process, adapting seamlessly to your needs."',
      image: 'https://www.linkpicture.com/q/WhatsApp-Image-2023-08-23-at-22.08.08.jpg',
    },
    {
      title: 'Blogging Website',
      live: 'https://nikhilsblog.onrender.com', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/nikhilverma17/Nikhil-sBlog_Main', // this should be a link to the **repository** of the project, where the code is hosted.
      paragraph:'"Experience the simplicity of our Express.js application tailored for creating and viewing blog posts. Built on the foundation of MongoDB, it efficiently stores and manages your valuable content, guaranteeing a seamless user experience. Embrace a user-friendly platform that empowers you to share your thoughts effortlessly and explore posts."',
      image: 'https://www.linkpicture.com/q/WhatsApp-Image-2023-08-23-at-20.12.00.jpg',
    },
    {
      title: 'Dice Game',
      live: 'https://nikhilverma17.github.io/Dice-Game/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/nikhilverma17/Dice-Game', // this should be a link to the **repository** of the project, where the code is hosted.
      paragraph:'"Engage in a virtual dice game using JavaScript. Roll the dice and witness the randomized outcome of two players dice throws. Experience the thrill as the page dynamically updates to declare the winner or a draw, making each playthrough an exciting experience. A simple yet interactive project for enjoying friendly competition through random chance."',
      image: 'https://www.linkpicture.com/q/WhatsApp-Image-2023-08-23-at-20.10.39.jpg',
    },
    {
      title: 'Drum Kit',
      live: 'https://nikhilverma17.github.io/drum-kit/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/nikhilverma17/drum-kit', // this should be a link to the **repository** of the project, where the code is hosted.
      paragraph:'"Dive into an interactive drumming experience powered by JavaScript. Click drum buttons or use keyboard keys to trigger dynamic sounds, each corresponding to a unique drum element. Enjoy captivating animations and audio effects that bring your rhythm exploration to life, catering to both music lovers and tech enthusiasts."',
      image: 'https://www.linkpicture.com/q/WhatsApp-Image-2023-08-23-at-20.11.30.jpg',
    },
    {
      title: 'Simon Game',
      live: 'https://nikhilverma17.github.io/Simon-Game/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/nikhilverma17/Simon-Game', // this should be a link to the **repository** of the project, where the code is hosted.
      paragraph:'"Play the Simon Says game with jQuery. Repeat the pattern by clicking colored buttons, advancing through levels. Mistakes trigger dynamic effects and Game Over message. A collapsible section enhances the experience. A lively project for testing memory, featuring colorful animations and interactive design."',
      image: 'https://www.linkpicture.com/q/WhatsApp-Image-2023-08-23-at-20.10.58.jpg',
    }
  ],
};
