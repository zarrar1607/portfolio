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
    image_path: './/Project/f1tenth/',
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
    image_path: './/Project/f1tenth',
  },
]

export default timelineElements
