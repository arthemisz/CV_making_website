export const EMPTY_CV_STATE = {
  personal: { fullName: "", email: "", phone: "", location: "", linkedin: "", github: "" },
  education: [],
  experience: [],
  skills: []
};

export const MOCK_CV_DATA = {
  personal: {
    fullName: "Abebe Abebe",
    email: "abebe.abebe@student.edu",
    phone: "+251 92 345 6789",
    location: "Addis Ababa, Ethiopia",
    linkedin: "linkedin.com/in/abebe-abebe",
    github: "github.com/abebe"
  },
  education: [
    {
      id: "ed1",
      school: "Rift Valley University",
      degree: "B.Sc.",
      field: "Computer Science (in progress)",
      startDate: "2023-09",
      endDate: ""
    }
  ],
  experience: [
    {
      id: "ex1",
      company: "Campus IT Help Desk",
      role: "Student Volunteer",
      startDate: "2025-09",
      endDate: "",
      description: "Helped fellow students troubleshoot laptop and Wi-Fi issues, wrote simple step-by-step guides for common problems."
    }
  ],
  skills: ["HTML", "CSS", "JavaScript", "React", "Problem Solving"]
};