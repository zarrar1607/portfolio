const ProjectImageItems = [
  { projectname: "Fine Tuning DeepPiCar", videoUrl: 'https://www.youtube.com/embed/gDC6Y_qBBx4', title: 'Demo', value: 40 },
  //{ projectname: "Fine Tuning DeepPiCar", filename: 'DeepLearning.AI TensorFlow Developer.jpg', title: 'f1tenth', value: 40 },

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
