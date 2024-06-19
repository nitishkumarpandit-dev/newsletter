function formatDate(date: Date): string {
  // Define an array with month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the day, month, and year from the Date object
  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  // Format the date as "DD Month YYYY"
  const formattedDate = `${day} ${month} ${year}`;

  return formattedDate;
}

// Example usage:
const today = new Date();
const formatedDate = formatDate(today);

export const blogPosts = [
  {
    id: 0,
    profileImg: "/nitish.jpg",
    name: "Nitish's Newsletter",
    bio: "Empowering the web dev journey",
    date: formatedDate,
    title: "How to build project without without watching video",
    desc: "break tutorial hell",
  },
  {
    id: 1,
    profileImg: "/nitish.jpg",
    name: "Nitish's Newsletter",
    bio: "Empowering the web dev journey",
    date: formatedDate,
    title: "How to build project without without watching video",
    desc: "break tutorial hell",
  },
  {
    id: 2,
    profileImg: "/nitish.jpg",
    name: "Nitish's Newsletter",
    bio: "Empowering the web dev journey",
    date: formatedDate,
    title: "How to build project without without watching video",
    desc: "break tutorial hell",
  },
  {
    id: 3,
    profileImg: "/nitish.jpg",
    name: "Nitish's Newsletter",
    bio: "Empowering the web dev journey",
    date: formatedDate,
    title: "How to build project without without watching video",
    desc: "break tutorial hell",
  },
  {
    id: 4,
    profileImg: "/nitish.jpg",
    name: "Nitish's Newsletter",
    bio: "Empowering the web dev journey",
    date: formatedDate,
    title: "How to build project without without watching video",
    desc: "break tutorial hell",
  },
];
