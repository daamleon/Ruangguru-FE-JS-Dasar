async function process_argv() {
  let { argv } = process;
  argv = argv.slice(2);
  const result = await studentActivitiesRegistration(argv);

  return result;
}

async function getStudentActivities() {
  const response = await fetch("http://localhost:3001/activities");
  const activities = await response.json();
  return activities;
}

async function studentActivitiesRegistration(data) {
  const method = data[0];

  if (method === "CREATE") {
    const [_, name, day] = data;
    const newStudent = await addStudent(name, day);
    return newStudent;
  }

  if (method === "DELETE") {
    const [_, id] = data;
    const result = await deleteStudent(id);
    return result;
  }

  throw new Error("Invalid method");
}

async function addStudent(name, day) {
  const activities = await getStudentActivities();
  const studentActivities = activities.filter((activity) =>
    activity.days.includes(day)
  );

  const newStudentData = {
    name,
    activities: studentActivities.map((activity) => ({
      name: activity.name,
      desc: activity.desc,
    })),
  };

  const response = await fetch("http://localhost:3001/students", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newStudentData),
  });

  return await response.json();
}

async function deleteStudent(id) {
  const response = await fetch(`http://localhost:3001/students/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await response.json();
}

process_argv()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = {
  studentActivitiesRegistration,
  getStudentActivities,
  addStudent,
  deleteStudent,
};
