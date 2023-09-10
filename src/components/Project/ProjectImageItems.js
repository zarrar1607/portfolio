const ProjectImageItems = [
  { projectname: "f1tenth", filename: 'DeepLearning.AI TensorFlow Developer.jpg', title: 'f1tenth', value: 40 },
  { projectname: "f1tenth", filename: 'Letter Of Appreciation(2019).jpg', title: 'f1tenth', value: 40 },
  { projectname: 'f1tenth', filename: 'Letter Of Appreciation(2020).jpg', title: 'f1tenth', value: 40 },
  { projectname: 'f1tenth', filename: 'Google Data Analytics.jpg', title: 'f1tenth', value: 40 },
  { projectname: 'f1tenth', filename: 'Code Jam 2020.jpg', title: 'f1tenth2', value: 35 },
  { projectname: 'f1tenth', filename: 'Code Jam 2021.jpg', title: 'f1tenth2', value: 35 },
  { projectname: 'f1tenth', filename: 'Kick Start 2019.jpg', title: 'f1tenth2', value: 35 },
  { projectname: 'f1tenth', filename: 'Kick Start 2020.jpg', title: 'f1tenth2', value: 35 },
  { projectname: 'f1tenth', filename: 'Hour Of Code.jpg', title: 'f1tenth2', value: 35 },
  { projectname: 'f1tenth', filename: 'Innovatia Panoply.jpg', title: 'Innovatia Panoply', value: 30 },
  { projectname: "f1tenth2", filename: 'Hack Revolution 2019.jpg', title: 'Hack Revolution 2019', value: 30 },
  { projectname: 'f1tenth2', filename: 'Hack Revolution 2020.jpg', title: 'Hack Revolution 2020', value: 30 },
  { projectname: 'f1tenth2', filename: 'Imagine Hack 2020.jpg', title: 'Imagine Hack 2020', value: 30 },
  { projectname: 'f1tenth2', filename: 'JPMC Virtual Internship.jpg', title: 'JPMC Virtual Internship', value: 15 },
  { projectname: 'f1tenth2', filename: 'Mobile Application Development.jpg', title: 'Mobile Application Development', value: 15 },
  { projectname: 'f1tenth2', filename: 'Pantechelearning AI Internship certificate.jpg', title: 'Pantechelearning AI Internship Certificate', value: 15 },
  { projectname: 'f1tenth2', filename: 'Pantechelearning Data Science Internship.jpg', title: 'Pantechelearning Data Science Internship', value: 15 },
  { projectname: 'f1tenth2', filename: 'Microsoft Build 2020.jpg', title: 'Microsoft Build 2020', value: 20 },
  { projectname: 'f1tenth2', filename: 'Azure Cloud Services.jpg', title: 'Azure Cloud Services', value: 20 },
  { projectname: 'f1tenth2', filename: 'Mohammed Misbah Zarrar GCCDIndia.jpg', title: 'Mohammed Misbah Zarrar GCCDIndia', value: 20 },
  { projectname: 'f1tenth2', filename: 'Machine Learning Model Deployment using Flask.jpg', title: 'Machine Learning Model Deployment using Flask', value: 25 },
  { projectname: 'f1tenth', filename: 'Microsoft AI Classroom Series Certificate 2021.jpg', title: 'Microsoft AI Classroom Series Certificate 2021', value: 25 },
  { projectname: 'f1tenth', filename: 'Mohammed_Sep_2020_internship_4820.jpg', title: 'Mohammed Sep 2020 Internship', value: 25 },
  { projectname: 'f1tenth', filename: 'Machine Learning.jpg', title: 'Machine Learning', value: 25 },
  { projectname: 'f1tenth', filename: 'AWSOME Day Cofenerence 2022.jpg', title: 'AWSOME Day Conference 2022', value: 20 },
  { projectname: 'f1tenth', filename: 'Matlab Certificate.jpg', title: 'Matlab Certificate', value: 10 },
  { projectname: 'f1tenth', filename: 'Swift Study 2.jpg', title: 'Swift Study 2', value: 10 },
  { projectname: 'f1tenth', filename: 'Go Study 1.jpg', title: 'Go Study 1', value: 10 },
  { projectname: 'f1tenth', filename: 'JavaScript Study 5.jpg', title: 'JavaScript Study 5', value: 10 },
  { projectname: 'f1tenth', filename: 'Adobe Photoshop CS6.jpg', title: 'Adobe Photoshop CS6', value: 35 },
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
