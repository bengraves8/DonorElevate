import { icons } from './icons';

export const illinoisState = {
  name: "Illinois State Athletics",
  logo: "https://insiderinbox.co/wp-content/uploads/2024/08/3rd-kdkdk.png",
  summary: "How Illinois State Athletics transformed their donor engagement strategy through personalized communication and exclusive content delivery.",
  heroImage: "https://insiderinbox.co/wp-content/uploads/2025/02/Illinois-State-Athletics.jpg",
  keyMetrics: [
    { value: "42%", label: "Donor retention increase" },
    { value: "1,200+", label: "Active supporters" },
    { value: "89%", label: "Message open rate" },
    { value: "6 months", label: "Implementation period" }
  ],
  topVideos: [
    {
      title: "Basketball Victory",
      description: "Behind-the-scenes celebration after a crucial conference win",
      videoUrl: "https://insiderinbox.co/wp-content/uploads/2025/02/ISU-basketball-win.mp4",
      category: "Basketball,Victory",
      stats: {
        openRate: "95%",
        viewRate: "180%"
      }
    },
    {
      title: "Football Gameday",
      description: "Exclusive pre-game preparation and team entrance",
      videoUrl: "https://insiderinbox.co/wp-content/uploads/2025/02/ISU-football-entrance.mp4",
      category: "Football,Gameday",
      stats: {
        openRate: "92%",
        viewRate: "165%"
      }
    },
    {
      title: "Donor Appreciation",
      description: "Special thank you message from student-athletes",
      videoUrl: "https://insiderinbox.co/wp-content/uploads/2025/02/ISU-thank-you.mp4",
      category: "Appreciation",
      stats: {
        openRate: "97%",
        viewRate: "210%"
      }
    }
  ],
  goals: [
    {
      title: "Donor Growth",
      target: "35% increase",
      achieved: "42% increase",
      status: "completed",
      date: "Q4 2024"
    },
    {
      title: "Engagement Rate",
      target: "80%",
      achieved: "89%",
      status: "completed",
      date: "Q3 2024"
    },
    {
      title: "Content Strategy",
      target: "Weekly updates",
      achieved: "3x weekly",
      status: "completed",
      date: "Q4 2024"
    }
  ],
  strategies: [
    {
      title: "Personalized Content",
      icon: icons.bookOpen('red'),
      description: "Tailored content strategy for different donor segments",
      results: [
        "Sport-specific updates",
        "Donor impact stories",
        "Behind-the-scenes access"
      ]
    },
    {
      title: "Multi-Channel Engagement",
      icon: icons.messageSquare('red'),
      description: "Integrated communication across multiple platforms",
      results: [
        "SMS campaigns",
        "Email newsletters",
        "Social media integration"
      ]
    },
    {
      title: "Event Strategy",
      icon: icons.trophy('red'),
      description: "Enhanced gameday and special event experiences",
      results: [
        "VIP access",
        "Exclusive events",
        "Meet-and-greets"
      ]
    },
    {
      title: "Data Analytics",
      icon: icons.barChart('red'),
      description: "Comprehensive tracking and analysis",
      results: [
        "Engagement metrics",
        "Response rates",
        "Content performance"
      ]
    }
  ],
  timeline: [
    {
      date: "July 2024",
      title: "Program Launch",
      description: "Initial rollout of new donor engagement strategy",
      milestone: true
    },
    {
      date: "August 2024",
      title: "Content Strategy",
      description: "Implementation of personalized content program",
      milestone: false
    },
    {
      date: "September 2024",
      title: "First Success",
      description: "Achieved 85% open rate on first major campaign",
      milestone: true
    },
    {
      date: "October 2024",
      title: "Event Integration",
      description: "Launch of enhanced gameday experience program",
      milestone: false
    },
    {
      date: "November 2024",
      title: "Donor Milestone",
      description: "Surpassed 1,000 active supporters",
      milestone: true
    },
    {
      date: "December 2024",
      title: "Program Success",
      description: "Exceeded all initial program objectives",
      milestone: true
    }
  ],
  results: [
    {
      icon: icons.trendingUp('red'),
      value: "42% Growth",
      label: "In donor retention"
    },
    {
      icon: icons.users('red'),
      value: "1,200+",
      label: "Active supporters"
    },
    {
      icon: icons.trophy('red'),
      value: "89%",
      label: "Message open rate"
    }
  ],
  testimonial: {
    quote: "The transformation in our donor engagement has been remarkable. We're now able to provide a level of personalization and access that has significantly strengthened our relationships with supporters.",
    author: "Sarah Mitchell",
    role: "Associate AD for Development",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
};