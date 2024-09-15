let timelineElements = [
  {
    id: 18,
    project_title: "TinyLidarNet - End-to-End Network for F1tenth",
    project_name: "TinyLidarNet",
    project_type: "Research Paper | Masters Thesis -Ongoing | F1tenth Competition",
    project_domain: [
      'IROS 2024',
      'Deep Learning',
      'TinyML',
      'Robotics',
    ],
    date: "Feb 2023 - Oct 2024",
    year: 2024,
    skills: [
      'Python',
      'C/C++',
      'ROS',
      'TensorFlow',
      'TFLite',
      'Nvidia Jetson',
    ],
    description: (
      <>
        Prior research has demonstrated the effectiveness of end-to-end deep learning for robotic navigation, where the control signals are directly derived
        from raw sensory data. However, the majority of existing end-to-end navigation solutions are predominantly camera-based. In this paper, we introduce TinyLidarNet,
        a lightweight 2D LiDAR-based end-to-end deep learning model for autonomous racing.
        An F1TENTH vehicle using TinyLidarNet won 3rd place in the <a href="https://cps2023-race.f1tenth.org/" target="/blank"> 12th F1TENTH Autonomous Grand Prix competition</a>, demonstrating its competitive performance. We systematically
        analyze its performance on untrained tracks and computing requirements for real-time processing. We find that TinyLidarNet's 1D Convolutional Neural Network (CNN) based
        architecture significantly outperforms widely used Multi-Layer Perceptron (MLP) based architecture.
        In addition, we show that it can be processed in real-time on low-end micro-controller units (MCUs).
        <br/>
        <a href="https://github.com/zarrar1607/TinyLidarNet" target="_blank">
          <button className="btn btn-github" style={{ width: 'auto', margin: 'auto', marginTop: '10px', letterSpacing: '0px' }}>GitHub</button>
        </a>
        <span style={{padding:"20px"}}></span>
        <a href="#" target="_blank">
          <button className="btn btn-pdf" style={{ width: 'auto', margin: 'auto', marginTop: '10px', letterSpacing: '0px' }}>Paper</button>
        </a>
      </>
    ),
  },

  {
    id: 17,
    project_title: "Portfolio",
    project_name: "portfolio",
    project_type: "Fun",
    project_domain: [
      'Software Engineering',
    ],
    date: "Mar 2023 - July 2024",
    year: 2024,
    skills: [
      'React',
      'Figma',
      'BootStrap',
      'JavaScript',
      'HTML',
      'CSS'
    ],
    description: (
      <>
        To better showcase my projects and skills, I developed a personal portfolio website from scratch.
        This project highlights my proficiency in front-end development and design.
        <br />
        <a href="https://github.com/zarrar1607/portfolio" target="_blank">
          <button className="btn btn-github" style={{ width: 'auto', margin: 'auto', marginTop: '10px', letterSpacing: '0px' }}>GitHub</button>
        </a>
      </>
    ),
  },

  {
    id: 16,
    project_title: "Valentine-App",
    project_name: "valentine_app",
    project_type: "Fun",
    project_domain: [
      'Software Engineering',
    ],
    date: "Feb 2024",
    year: 2024,
    skills: [
      'React',
      'JavaScript',
      'HTML',
      'CSS'
    ],
    description: (
      <>
        This project was a fun exercise in React development, timed with Valentine’s Day. The app offers a playful, interactive experience.
        <br />
        <a href="https://zarrar1607.github.io/valentine-app/" target="_blank">
          <button className="btn" style={{ width: 'auto', margin: 'auto', marginTop: '10px', letterSpacing: '0px' }}>Website Link</button>
        </a>
        <br />
        <a href="https://github.com/zarrar1607/valentine-app" target="_blank">
          <button className="btn btn-github" style={{ width: 'auto', margin: 'auto', marginTop: '10px', letterSpacing: '0px' }}>GitHub</button>
        </a>
      </>
    ),
  },

  {
    id: 15,
    project_title: "KU Job Search Engine",
    project_name: "search_engine",
    project_type: "KU EECS 767 - Information Retrival Project",
    project_domain: [
      'Software Engineering',
      'Web Scraping',
    ],
    date: "Jan 2023 - Apr 2023",
    year: 2023,
    skills: [
      'Python',
      'HTML5',
      'CSS3',
      'Flask',
    ],
    description: (
      <>
        This project presents a basic job search engine developed using fundamental principles of information retrieval.
        Job search engine aims to provide job seekers with an efficient and straight-forward platform to discover relevant job
        listings based on their preferences and qualifications (on KU CAMPUS). This search engine is a keyword-based Search which
        enables users to enter keywords related to job titles, type of job, salary, or specific skills.
        <br />
        The engine performs a basic keyword matching algorithm to retrieve job postings that contain the relevant keywords,
        helping job seekers quickly identify potential opportunities. The engine displays key information relevant to the
        keyword job postings and provides direct URL's/links to the original job postings, redirecting users to the respective job
        portals or company websites for further details and application submissions.
        <br />
        <a href="https://github.com/zarrar1607/EECS-767-Search-Engine/" target="_blank">
          <button className="btn btn-github" style={{ width: 'auto', margin: 'auto', marginTop: '10px', letterSpacing: '0px' }}>GitHub</button>
        </a>
      </>
    ),
  },

  {
    id: 14,
    project_title: "Fine Tuning DeepPiCar",
    project_name: "Fine Tuning DeepPiCar",
    project_type: "Masters Project, University of Kansas",
    project_domain: [
      'Deep Learning',
      'Robotics',
    ],
    date: "Nov 2022 - Jan 2023",
    year: 2023,
    skills: [
      'Python',
      'C++',
    ],
    description: (
      <>
        Fine-tuned DeepPiCar model on a Pi Zero device using TensorFlow, adapting to environmental conditions
        and training key layers. This involved collecting data for new setups, such as increased light
        brightness, and selectively retraining key model layers on the device. Implemented "<a href='https://arxiv.org/pdf/2206.15472.pdf'>On-Device Training Under 256KB Memory</a>"
        paper, leveraging DAVE Architecture and TFLite API, to meet stringent time and space limitations.
        Aiming to balance memory management and inference accuracy, this project showcases my expertise in
        adapting deep learning models for real-world edge computing applications.
        <br/>
        <a href="/portfolio/Project/DeepPiCar_Fine Tuning_Report_Adhoc.pdf" target="_blank">
          <button className="btn btn-pdf" style={{ width: 'auto', margin: 'auto', marginTop: '10px', letterSpacing: '0px' }}>Report</button>
        </a>
      </>
    ),
  },


  {
    id: 13,
    project_title: "Synergistic Articulated Robotic Manipulator (SARM)",
    project_name: "SARM",
    project_type: "Bachelors Project, Osmania University",
    project_domain: [
      'Deep Learning',
      'Robotics',
    ],
    date: "Sep 2019 - Jun 2021",
    year: 2023,
    skills: [
      'Python',
      'C++',
      'TensorFlow',
    ],
    description: (
      <>
        In a team of 6, created a prototype for a completely autonomous industrial robotic arm with a combination
        of inverse kinematics program and computer vision to pick objects.
        Developed a computer vision using CNN with the aid of the TensorFlow API for the arm, so that it could identify
        and locate known objects within a workspace. Notably, we implemented a critical component - mapping the physical world to image coordinates.
        This feature enabled the robotic arm to recognize and precisely locate objects within its workspace, paving the way for intelligent and context-aware interactions.
      </>
    ),
  },

  {
    id: 12,
    project_title: "DeepLearning.AI TensorFlow Developer Specialization",
    project_name: "deeplearning_ai_tf",
    project_type: "Coursera",
    project_domain: [
      'Deep Learning',
      'Natural Language Processing',
      'Computer Vision',
    ],
    date: "May 2020 - May 2021",
    year: 2021,
    skills: [
      'TensorFlow',
      'Keras',
      'Python',
      'nltk',
      'Numpy',
      'Pandas',
    ],
    description: (
      <>
        Completed various projects during the course:
        <ul style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
          <li>Sequence Prediction Sunspot Data.</li>
          <li>NLP on IMDB movie reviews data-set and sentiment detection on News data-set.</li>
          <li>Hand game, rock, paper, and scissor image classifier.</li>
          <li>Horse vs Human image classifier.</li>
          <li>Cat vs dogs image classifier.</li>
          <li>etc...</li>
        </ul>
        <a href="https://github.com/zarrar1607/TensorFLow_Coursera/" target="_blank">
          <button className="btn btn-github" style={{ width: 'auto', margin: 'auto', marginTop: '10px', letterSpacing: '0px' }}>GitHub</button>
        </a>
      </>
    ),
  },

  {
    id: 11,
    project_title: "Exo-Skeleton",
    project_name: "exo_skeleton",
    project_type: "Fun",
    project_domain: [
      'Robotics',
      'Signal Processing',
      'Natural Language Processing',
    ],
    date: "Jan 2020 - Sep 2020",
    year: 2020,
    skills: [
      'Embedded C',
      'Arduino',
      'TensorFlow',
    ],
    description: (
      <>
        The goal of the project was to create a Lower Exoskeleton(for legs)
        to aid aged people in walking and an Upper Exoskeleton(for hands) and help in
        picking heavy objects (usually required in industries).
        Built an ML model that requires muscle signals extracted from an EMG sensor
        that allows the prediction of human muscle movement patterns: The predicted
        readings are sent to the motors for corresponding movements.
      </>
    ),
  },

  {
    id: 10,
    project_title: "Quad-legged Robot",
    project_name: "quad_robot",
    project_type: "Robocon 2019-2020 Competition & Research",
    project_domain: [
      'Robotics',
      'Computer Vision',
    ],
    date: "Aug 2019 - Aug 2020",
    year: 2020,
    skills: [
      'Embedded C',
      'Arduino',
      'Xbox Kinect',
      'Solid Works',
    ],
    description: (
      <>
        The goal was to build a 4 legged dog robot for
        the Robocon Competition 2019 - 2020.
        Programmed this robot to mimic the movements of a dog,
        horse, and spider. Its main function was to avoid obstacles
        ahead of the robot using a camera and 2D Lidar as sensors.
      </>
    ),
  },

  {
    id: 9,
    project_title: "TRM(Team Robocon MJCET) Website",
    project_name: "TRM_Website",
    project_type: "Department HOD Request, Osmania University",
    project_domain: [
      'Software Engineering',
    ],
    date: "Jul 2020 - Aug 2020",
    year: 2020,
    skills: [
      'HTML5',
      'CSS3',
      'BootStrap4',
      'JavaScript (ES6)',
      'JQuerry',
      'Agile Methodology',
    ],
    description: (
      <>
        Developed, designed, and documented a website template for the university team in response to a request from the Head of the Department of Electrical and Computer Engineering (ECE).
        This template, primarily focused on the Front-End, represents a fundamental design. The process began with creating low-fidelity wireframes and obtaining necessary approvals.
        This project marked their initial experience with proper website design. The website features team information, achievements, robots designed by the team, and various forms.
        <br />
        Website Link:
        <br />
        <a href="https://zarrar1607.github.io/Team-Robocon-MJCET-Website/" target="_blank">
          <button className="btn" style={{ width: 'auto', margin: 'auto', marginTop: '10px', letterSpacing: '0px' }}>TRM(Team Robocon MJCET) Website Template</button>
        </a>
        <br />
        <a href="https://github.com/zarrar1607/Team-Robocon-MJCET-Website" target="_blank">
          <button className="btn btn-github" style={{ width: 'auto', margin: 'auto', marginTop: '10px', letterSpacing: '0px' }}>GitHub</button>
        </a>
      </>
    ),
  },

  {
    id: 8,
    project_title: "Autonomous Door",
    project_name: "autonomous_door",
    project_type: "Fun",
    project_domain: [
      'Robotics',
    ],
    date: "Jun 2020 - Jul 2020",
    year: 2020,
    skills: [
      'Embedded C',
      'Arduino',
    ],
    description: (
      <>
        Embedded an RFID reader inside a door, attached a LED strip around the reader
        (for futuristic looks), covered them with a sheet, and attached a servo motor to
        the lock. So, whenever a valid RFID card is brought in the range of
        the reader, the door would automatically unlock and vice versa.
        Implemented using Arduino and Hash Table structure, where the valid RFID Card
        numbers are stored.
      </>
    ),
  },

  {
    id: 7,
    project_title: "Cartoon Emotions Detector",
    project_name: "Cartoon_Emotions_Detector",
    project_type: "HackerEarth Competition",
    project_domain: [
      'Deep Learning',
      'Computer Vision',
    ],
    date: "Apr 2020 - May 2020",
    year: 2020,
    skills: [
      'TensorFlow',
      'Keras',
      'Python',
    ],
    description: (
      <>
        Created a Machine Learning model using the
        TensorFlow API to detect emotions(angry, sad, surprised,
        and unknown) of characters (TOM & JERRY) in a video for participating
        in a competition at HackerEarth.
        Implemented deep learning technique using the single-shot detector framework.
        <br />
        <a href="https://github.com/zarrar1607/Tom-Jerry-Emtion-Detector" target="_blank">
          <button className="btn btn-github" style={{ width: 'auto', margin: 'auto', marginTop: '10px', letterSpacing: '0px' }}>GitHub</button>
        </a>
      </>
    ),
  },

  {
    id: 6,
    project_title: "Smart Head-Lights",
    project_name: "smart_head_lights",
    project_type: "CSI Hack Revolution 2020",
    project_domain: [
      'Robotics',
    ],
    date: "Jan 2020",
    year: 2020,
    skills: [
      'Embedded C',
      'Arduino',
    ],
    description: (
      <>
        Designed headlights that switch from high beam to low beam automatically
        when detecting light from an oncoming vehicle, improving road safety.
        Attached a photovoltaic cell to the headlights of a
        car.
      </>
    ),
  },

  {
    id: 5,
    project_title: "Pro-DustBin(ProDB)",
    project_name: "ProDB",
    project_type: "Microsoft Imagine Hack 2020",
    project_domain: [
      'Robotics',
      'Software Engineering',
    ],
    date: "Jan 2020",
    year: 2020,
    skills: [
      'Embedded C',
      'Arduino',
      'Android Studios'
    ],
    description: (
      <>
        Built an autonomous robot for an office environment that
        disposes garbage when filled and developed an
        application using Android Studios to call ProDB at the employer's
        sitting for collecting waste.
        Made ProDB capable of unloading the trash and going back to its
        permanent location, automatically.
      </>
    ),
  },

  {
    id: 4,
    project_title: "Soccer Bot",
    project_name: "soccer_bot",
    project_type: "Technoxian World Robotics Competition(Delhi, India)",
    project_domain: [
      'Software Engineering',
    ],
    date: "Aug 2019 - Sep 2019",
    year: 2019,
    skills: [
      'C/C++',
      'Embedded C',
      'Arduino',
    ],
    description: (
      <>
        Built agile and compact robots for playing soccer, featuring an attacker and a goalkeeper.
      </>
    ),
  },

  {
    id: 3,
    project_title: "Student Performance Analyzer (StuPA)",
    project_name: "STUPA",
    project_type: "Bachelor's Mini Project, MJCET",
    project_domain: [
      'Software Engineering',
    ],
    date: "Jan 2019 - Jun 2019",
    year: 2019,
    skills: [
      'C/C++',
      'Qt',
    ],
    description: (
      <>
        In a team of 3, created a visualizing C++ application to know the performance of each engineering student
        among others in the college.
        Led the team, weekly meetings, and managed project goals.
        Moreover, Implemented OOPS concepts, flat files, hash tables, quick sort, error handling mechanisms,
        and graphics libraries for plotting graphs.
        <br/>
        <a href="https://github.com/zarrar1607/StuPa" target="_blank">
          <button className="btn btn-github" style={{ width: 'auto', margin: 'auto', marginTop: '10px', letterSpacing: '0px' }}>GitHub</button>
        </a>
      </>
    ),
  },

  {
    id: 2,
    project_title: "ExcerPD",
    project_name: "ExcerPD",
    project_type: "Microsoft Imagine Hack 2019",
    project_domain: [
      'Software Engineering',
    ],
    date: "Feb 2019",
    year: 2019,
    skills: [
      'JAVA',
      'JAVA Applets',
      'SQL',
      'Tensorflow',
    ],
    description: (
      <>
        ExcerPD is an innovative application designed to assist users with exercising
         at home. Utilizing advanced pose detection technology, the app provides 
         real-time feedback and guidance to ensure proper exercise form and technique. 
         This project was developed as part of the Microsoft Imagine Hack 2019, leveraging Java, 
         Java Applets, and SQL for robust performance and user management.
      </>

    ),
  },
  {
    id: 1,
    project_title: "Hospedia",
    project_name: "Hospedia",
    project_type: "CSI Hack Revolution",
    project_domain: [
      'Software Engineering',
    ],
    date: "Jan 2019",
    year: 2019,
    skills: [
      'JAVA',
      'JAVA Applets',
      'SQL'
    ],
    description: (
      <>
        The project's main intention was directed towards helping the elderly who wish to perform Hajj in Saudi Arabia
        but may encounter communication problems. Essentially, the person would wear a badge with a QR code that could
        be scanned (using a java application). This would help access the person's medical history, including hospital
        visitations, doctors consulted, medications prescribed, and contact details (all stored in the SQL database).
      </>
    ),
  },
]

export default timelineElements
