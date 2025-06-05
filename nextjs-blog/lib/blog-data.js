const blogPosts = [
  {
    slug: "the-ultimate-guide-to-full-body-workouts",
    title: "The Ultimate Guide to Full-Body Workouts",
    date: "23 JANUARY 2025",
    author: {
      name: "ALEX CARTER",
      avatar: "/images/placeholder-cover.jpg",
    },
    heroImage: "/images/gym-blog-cover.jpg",
    excerpt:
      "Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.",
    content: `Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus

mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus

With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus

mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus

mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean`,
    category: "Fitness",
  },
];

export const mockComments = [
  {
    id: "1",
    author: {
      name: "Kang Haerin",
      avatar: "/images/girl-placeholder.avif",
    },
    date: "22 Jul 2022",
    rating: 5,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum ...",
  },
  {
    id: "2",
    author: {
      name: "Kang Haerin",
      avatar: "/images/girl-placeholder.avif",
    },
    date: "22 Jul 2022",
    rating: 5,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum ...",
  },
];

export const relatedArticles = [
  {
    slug: "ultimate-guide-full-body-workouts",
    title: "The Ultimate Guide To Full-Body Workouts",
    excerpt:
      "Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for ...",
    image: "/images/exercise-outside.webp",
    author: "Alex Carter",
    category: "Fitness",
  },
  {
    slug: "5-tips-better-cardio-sessions",
    title: "5 Tips For Better Cardio Sessions",
    excerpt:
      "Improve your cardio performance with these simple yet effective techniques to maximize sta...",
    image: "/images/10_ways_exercise.jpg",
    author: "Maya Lee",
    category: "Fitness",
  },
  {
    slug: "meal-prep-basics-gym-enthusiasts",
    title: "Meal Prep Basics For Gym Enthusiasts",
    excerpt:
      "Fuel your workouts with balanced, easy-to-prepare meals. A guide on planning, prepping, and staying consi...",
    image: "/images/eat-before-workout.jpg",
    author: "Jordan Smith",
    category: "Nutrition",
  },
  {
    slug: "building-core-strength-exercises-benefits",
    title: "Building Core Strength: Exercises And Benefits",
    excerpt:
      "A strong core is essential for stability and injury prevention. Learn the best exercises to enhance your...",
    image: "/images/group-exercise-1.avif",
    author: "Emma Rodriguez",
    category: "Fitness",
  },
];

export const tourGuides = [
  {
    name: "Danielle Marsh",
    location: "Wonosobo, Jawa ten...",
    avatar: "/images/placeholder-cover.jpg",
    rating: 4.0,
  },
  {
    name: "Kang Haerin",
    location: "Bandung, Jawa barat",
    avatar: "/images/girl-placeholder.avif",
    rating: 5.0,
  },
];

export const sidebarArticles = [
  {
    title: "Two women in local stand are chatting during morning..",
    category: "Culinary",
    date: "13 Jun 2022",
    image: "/images/family.webp",
  },
  {
    title: "Enjoying the sunset on Padar Island together",
    category: "Travel",
    date: "22 Jul 2022",
    image: "/images/travel.webp",
  },
  {
    title: "The lush green surroundings of the campgrounds create a..",
    category: "Travel",
    date: "22 Jul 2022",
    image: "/images/healthy-picnic.jpg",
  },
];

export function getBlogPost(slug) {
  return blogPosts.find((post) => post.slug === slug) || null;
}

export function getAllBlogSlugs() {
  return blogPosts.map((post) => post.slug);
}

// Simulate API call for comments
export async function fetchComments() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return mockComments;
}
