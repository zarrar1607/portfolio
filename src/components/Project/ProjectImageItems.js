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
