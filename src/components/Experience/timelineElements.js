let timelineElements = [
  {
    id: 7,
    company: "Pinnacle Technology",
    title: "Full-Stack Software Developer",
    location: "Kansas, United States",
    description: (
      <ul>
        <li>
          Contribute to the development of hardware-software solutions for preclinical CNS data acquisition, supporting real-time analysis and experimentation on rat/mouse models.
        </li>
        <li>
          Added feature for saving graphs in high-quality DPI Imaging formats (SVG, PDF) using QCP. Fixed the zooming, scaling, and scroll behavior on graphs using QModifiers.
        </li>
        <li>
          Prototyped YOLOv8, SSD MobileNet, and Fast R-CNN for XY tracking of rat detection at ~100 ms inference time on a single-core CPU and deployed in C++. 
          Investigating DeepSort to enhance real-time object tracking using Kalman Filters.
        </li>
      </ul>
    ),
    date: "Current",
    year: 2025,
  },
  {
    id: 6,
    company: "The University of Kansas",
    title: "Graduate Teaching Assistant (OS)",
    location: "Kansas, United States",
    description: (
      <ul>
        <li>
          Conducted 2 weekly labs for Operating Systems every semester, overseeing a class of 40 students.
        </li>
        <li>
          Assisted <strong>Dr. Heechul Yun</strong> (Spring 2023, 2024) and <strong>Dr. Prasad Kulkarni</strong> (Fall 2023, 2024) in teaching, exam creation, grading, and proctoring
        </li>
        <li>
          Fostered an inclusive learning environment by leading group discussions, providing tailored student support, 
          encouraging participation, and designing course modules with examples from the real for optimized understanding and engagement. 
        </li>
        <li>
          Developed a website for course updates, lab materials,  and resources for students’ accessibility and clarity:<br></br>
          <a href="https://zarrar1607.github.io/KUEECS678-Spring2024/" target="blank">
            <button className="btn" style={{width:'auto', margin:'auto', marginTop:'10px', letterSpacing:'0px'}}>KU EECS678 Operating System Website - Spring2024</button>
          </a>
        </li>
      </ul>
    ),
    date: "Jan 2023 - Dec 2024",
    year: 2024,
  },
  {
    id: 5,
    company: "Rademacher Financial, Inc.",
    title: "Full-Stack Software Developer",
    location: "Kansas, United States",
    description:
      (
        <>
          <ul>
            <li>Gained hands-on experience in C++ and the Qt framework, specializing in coding, debugging, and optimizing software in a trading/financial company.</li>
            <li>Designed user-friendly interfaces using the QT UI Manager, enhancing the overall user experience.</li>
            <li>Improved software efficiency by 75% through backend file import optimizations, utilizing QThreads and data processing techniques.</li>
            <li>Acquired proficiency in both front-end and back-end development tasks, contributing to a well-rounded skill set for software development roles.</li>
            <li>Successfully transformed backend processes from asynchronous to synchronous, eliminating delays in communication between modules thereby enhancing system efficiency, no loss of signals, and ensuring seamless data flow within the application.</li>
            <li>Improved PostgreSQL performance by implementing data partitioning and indexing, reducing data fetching times by 50% and enhancing retrieval for 1,000+ accounts, improving processing efficiency by 30%.</li>
            <li>Automated fee schedule calculations and quarterly updates for 15,000+ holdings, streamlining client financial operations and significantly reducing manual effort.</li>
            <li>Designed responsive, real-time validating UIs with optimized SQL query models, cutting UI load times from 20 to 0.2 seconds and elevating user experience for Billing Reviews that in-house financial advisors use.</li>
            <li>Verified financial trading algorithms (CRS, RSI) using automated Excel tools, improving accuracy and supporting more informed trade decisions for advisors.</li>

          </ul>
        </>
      ),
    date: "May 2023 - Aug 2024",
    year: 2024,
  },
  {
    id: 4,
    company: "Agile Technology Solutions, KU ",
    title: "Quality Assurance Engineer",
    location: "Kansas, United States",
    description: (
      <ul>
        <li>
          Initially, I was situated with the QA team to get hands-on with the products that have already been developed. Made use of SpringBoot and Postgres SQL to remove bugs
        </li>
        <li>
          I worked here for a month and then I got the Teaching Assistant job which wavied my tution fee.
        </li>
      </ul>
    ),
    date: "Nov 2022 - Dec 2022",
    year: 2022,
  },
  {
    id: 3,
    company: "Pantechelearning",
    title: "Data Science & AI Intern",
    location: "Remote",
    description: (
      <ul>
        <li>A 30-day internship of learning
        Concepts: Data Aggregation, Visualization, Statistical Analysis.
        using</li>
        <li>
          Libraries: Pandas, Numpy, Matplotlib, Seaborn, and Sklearn, OpenCV, TensorFlow, MediaPipe, NLTK,
        </li>
        <li>
          Tools: Tableau and Power -Bi, AWS, Azure,
        and to apply the gained skills on industrial level projects.
        </li>
      </ul>
    ),
    date: "Dec 2021 - Feb 2022",
    year: 2022,
  },
  {
    id: 2,
    company: "InMovidu Technologies Pvt Limited",
    title: "Web Developer Intern",
    location: "Remote",
    description: (
      <ul>
        <li>
          Internship program in Web Development HTML and CSS:
        </li>
        <li>
          Initially, the organizations taught the freshers, and after 2 weeks gave the assignment to complete.
        </li>
      </ul>
    ),
    date: "Sep 2020",
    year: 2020,
  },
  {
    id: 1,
    company: "JPMorgan Chase & Co.",
    title: "Intern",
    location: "Remote",
    description:
      (
        <>
          Over the period of May 2020, through the InsideSherpa platform, I completed practical task modules in:
          <br />
          <ul>
            <li>
              Establishing Financial Data Feeds
            </li>
            <li>
              Frontend Web Development
            </li>
            <li>
              Data Visualization with Chase's Perspective
            </li>
          </ul>
        </>
      ),
    date: "May 2020",
    year: '2020',
  },
]

export default timelineElements
