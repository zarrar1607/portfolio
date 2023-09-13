let timelineElements = [
  {
    id: 7,
    project_title: "End-to-End Network for F1tenth",
    //project_name: "f1tenth",
    project_type: "Masters Thesis -Ongoing",
    project_domain: [
      'DeepLearning',
      'Robotics',
    ],
    date: "Feb 2023 - Present",
    year: 2023,
    /*skills: [
      'Python',
      'ROS',
      'C++',
    ],*/
    description: (
      <>
        <img src={process.env.PUBLIC_URL + `/Coming Soon.webp`} alt={`Coming Soon`} style={{height:'300px'}}/> 
      </>
    ),
  },
  {
    id: 6,
    project_title: "Fine Tuning DeepPiCar",
    project_name: "Fine Tuning DeepPiCar",
    project_type: "Masters Project, University of Kansas",
    project_domain: [
      'DeepLearning',
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
        brightness, and selectively retraining key model layers on the device. Implemented "<a href = 'https://arxiv.org/pdf/2206.15472.pdf'>On-Device Training Under 256KB Memory</a>"
        paper, leveraging DAVE Architecture and TFLite API, to meet stringent time and space limitations.
        Aiming to balance memory management and inference accuracy, this project showcases my expertise in 
        adapting deep learning models for real-world edge computing applications."
      </>
    ),
  },

  {
    id: 5,
    project_title: "Synergistic Articulated Robotic Manipulator (SARM)",
    project_name: "SARM",
    project_type: "Bachelors Project, Osmania University",
    project_domain: [
      'DeepLearning',
      'Robotics',
    ],
    date: "Sept 2019 - Jun 2021",
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

]

export default timelineElements
