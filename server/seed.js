require("dotenv").config();
const mongoose = require("mongoose");
const Profile = require("./models/Profile");

const p = (g, n) => `https://randomuser.me/api/portraits/${g}/${n}.jpg`;

const sampleProfiles = [
  {
    name: "Emma",
    age: 24,
    photo: p("women", 47),
    bio: "Love travel and music",
    interests: ["Travel", "Music", "Food"],
  },
  {
    name: "Sophia",
    age: 22,
    photo: p("women", 45),
    bio: "Coffee | Nature | Photography",
    interests: ["Coffee", "Nature", "Photography"],
  },
  {
    name: "Priya",
    age: 25,
    photo: p("women", 44),
    bio: "Love traveling and meeting new people!",
    interests: ["Travel", "Music", "Food"],
  },
  {
    name: "Rahul",
    age: 28,
    photo: p("men", 12),
    bio: "Coffee and coding",
    interests: ["Coding", "Coffee"],
  },
  {
    name: "Ananya",
    age: 24,
    photo: p("women", 32),
    bio: "Nature lover and photographer",
    interests: ["Nature", "Photography"],
  },
  {
    name: "Aman",
    age: 27,
    photo: p("men", 15),
    bio: "Gym and movies",
    interests: ["Fitness", "Movies"],
  },
  {
    name: "Sneha",
    age: 26,
    photo: p("women", 49),
    bio: "Food and travel",
    interests: ["Food", "Travel"],
  },
  {
    name: "Vikram",
    age: 29,
    photo: p("men", 33),
    bio: "Adventure and road trips",
    interests: ["Adventure", "Travel"],
  },
];

mongoose
  .connect(process.env.MONGODB_URI)
  .then(async () => {
    await Profile.deleteMany();
    await Profile.insertMany(sampleProfiles);
    console.log("Sample profiles added!");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Seed failed:", err.message);
    process.exit(1);
  });
