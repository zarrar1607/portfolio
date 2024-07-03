const ProjectImageItems = [
  { projectname: "Fine Tuning DeepPiCar", videoUrl: 'https://www.youtube.com/embed/gDC6Y_qBBx4', title: 'Demo', value: 40 },
  { projectname: "SARM", videoUrl: 'https://www.youtube.com/embed/LKRGnL2vE6I?si=xbZLBehcrPjwevz1', title: 'Inverse Kinematics', value: 40 },
  { projectname: "SARM", videoUrl: 'https://www.youtube.com/embed/aJlN6HjxCJo?si=4fasQSBDD3SwdypE', title:' Arm grabs an Object', value: 40 },
  { projectname: "SARM", videoUrl: 'https://www.youtube.com/embed/6ONVZZ_8cmw?si=YfbNQ8Nt-WeVlZjx', title: 'OpenCV Object Localization', value: 40 },
  { projectname: "SARM", filename: 'Axis.jpeg', title: 'Axis', value: 40 },
  { projectname: "SARM", filename: '2D model.png', title: '2D model', value: 40 },
  { projectname: "SARM", filename: '3D model.png', title: '3D model', value: 40 },
  { projectname: "SARM", filename: 'Arm grab object.png', title: 'Arm grab objec', value: 40 },
  { projectname: "SARM", filename: 'inverse kinematics.png', title: 'Inverse Kinematic', value: 40 },
  { projectname: "SARM", filename: 'object masking.png', title: 'Object Masking', value: 40 },
  { projectname: "SARM", filename: 'opencv object localization.png', title: 'Opencv Object Localization', value: 40 },
  { projectname: "SARM", filename: 'prototype.png', title: 'Prototype', value: 40 },
  { projectname: "STUPA", filename: 'Stupa_UseCaseDiagram.png', title: 'Use Case Diagram', value: 40 },
  { projectname: "STUPA", filename: 'studaverage.gif', title: 'Student Average', value: 40 },
  { projectname: "STUPA", filename: 'studmarks.gif', title: 'Student Marks', value: 40 },
  { projectname: "STUPA", filename: 'studrank.gif', title: 'Student Rank', value: 40 },
  { projectname: "soccer_bot", videoUrl: 'https://www.youtube.com/embed/yfemA2Xahgg?si=lPL2AmU_6fYEbyCo', title: 'Teacher Side', value: 40 },
  { projectname: "ProDB", videoUrl: 'https://www.youtube.com/embed/kdjYZieqJ6M', title: 'Teacher Side', value: 40 },
  { projectname: "Cartoon_Emotions_Detector", videoUrl: 'https://www.youtube.com/embed/ftgs7JPIwMo?si=R5cEmQ3gHbdy1uI1', title: 'Teacher Side', value: 40 },
  { projectname: "autonomous_door", videoUrl: 'https://www.youtube.com/embed/V_rJiQAcWw0', title: 'Teacher Side', value: 40 },
  // { projectname: "TRM_Website", videoUrl: 'https://www.youtube.com/embed/yfemA2Xahgg?si=lPL2AmU_6fYEbyCo', title: 'Teacher Side', value: 40 },
  { projectname: "quad_robot", videoUrl: 'https://www.youtube.com/embed/2ds8zvqoLZk?si=BV50xEVeX9Pwq75V', title: 'Teacher Side', value: 40 },
  { projectname: "quad_robot", videoUrl: 'https://www.youtube.com/embed/cK5_ypHg2hM?si=eQKXTiNad4M-OZ98', title: 'Teacher Side', value: 40 },
  { projectname: "quad_robot", videoUrl: 'https://www.youtube.com/embed/MbkoWbZQ4uE?si=peJ8zX3WUxDwmx2m', title: 'Teacher Side', value: 40 },
  { projectname: "quad_robot", filename: 'TRM_lab.jpg', title: 'Teacher Side', value: 40 },
  { projectname: "quad_robot", filename: 'TRM_tshirt.jpg', title: 'Teacher Side', value: 40 },
  { projectname: "quad_robot", filename: 'TRM_hoodie.jpg', title: 'Teacher Side', value: 40 },
  // { projectname: "exo_skeleton", videoUrl: 'https://www.youtube.com/embed/yfemA2Xahgg?si=lPL2AmU_6fYEbyCo', title: 'Teacher Side', value: 40 },
  // { projectname: "valentine_app", videoUrl: 'https://www.youtube.com/embed/yfemA2Xahgg?si=lPL2AmU_6fYEbyCo', title: 'Teacher Side', value: 40 },
  // { projectname: "portfolio", videoUrl: 'https://www.youtube.com/embed/yfemA2Xahgg?si=lPL2AmU_6fYEbyCo', title: 'Teacher Side', value: 40 },
  // { projectname: "TinyLidarNet", videoUrl: 'https://www.youtube.com/embed/yfemA2Xahgg?si=lPL2AmU_6fYEbyCo', title: 'Teacher Side', value: 40 },
];
// Sort the array first by project name and then by value
ProjectImageItems.sort((a, b) => {
  // Compare project names first
  const projectComparison = a.projectname.localeCompare(b.projectname);

  // If project names are the same, compare by value
  if (projectComparison === 0) {
    return b.value - a.value; // Sort by value in descending order
  }

  return projectComparison; // Sort by project name
});


export default ProjectImageItems;
