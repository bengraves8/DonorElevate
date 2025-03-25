import { icons } from './icons';

export const westVirginia = {
  name: "West Virginia Athletics",
  logo: "https://insiderinbox.co/wp-content/uploads/2025/03/IMG_9740.jpg",
  summary: "The Mountaineer Athletic Club to launch a three-month trial of Insider Inbox, a platform that delivers selfie-style video messages directly to donors via text and email. This approach enhances donor relationships, strengthens engagement, and supports MAC's major giving strategy.",
  heroImage: "https://insiderinbox.co/wp-content/uploads/2025/03/milanpuskarstadium-2709680015.jpg",
  keyMetrics: [
    { value: "$2,500", label: "Trial Investment" },
    { value: "3 Months", label: "Trial Period" },
    { value: "85%", label: "Funds from Top Donors" },
    { value: "March '25", label: "Start Date" }
  ],
  goals: [
    {
      title: "Major Gift Support",
      target: "Strengthen relationships",
      achieved: "Leading to $100k+ gifts",
      status: "upcoming",
      date: "March 2025"
    },
    {
      title: "Top Donor Focus", 
      target: "Engage top 2 levels",
      achieved: "Engage the 85%",
      status: "upcoming",
      date: "March 2025"
    },
    {
      title: "Trial Evaluation",
      target: "Measure success",
      achieved: "Plan next steps",
      status: "upcoming",
      date: "June 2025"
    }
  ],
  strategies: [
    {
      title: "Engaging Top Donors",
      icon: icons.trophy('blue'),
      description: "Engage top two donor levels, who contribute ~85% of total funds",
      results: [
        "Strengthen personal connections with direct video messaging",
        "Drive major gifts through consistent, targeted outreach",
        "Enhance fundraising, integrate with existing strategies"
      ]
    },
    {
      title: "Compliance & Safety",
      icon: icons.bookOpen('blue'),
      description: "Clear process for donor communication and opt-outs",
      results: [
        "Introductory email first",
        "Easy opt-out process",
        "TCPA & CTIA compliant"
      ]
    },
    {
      title: "Trial Timeline",
      icon: icons.messageSquare('blue'),
      description: "Structured 3-month evaluation period",
      results: [
        "March: Launch & first message",
        "April: Focus on top donors",
        "June: Evaluate & plan"
      ]
    },
    {
      title: "Low Risk, High Reward",
      icon: icons.barChart('blue'),
      description: "Minimal investment with significant potential",
      results: [
        "$2,500 trial investment",
        "3-month structured test",
        "Clear success metrics"
      ]
    }
  ],
  timeline: [
    {
      date: "March 2025",
      title: "Trial Launch",
      description: "Introduce Insider Inbox to MAC donors with first video message from key athletics figure",
      milestone: true
    },
    {
      date: "April 2025",
      title: "Top Donor Focus",
      description: "Maintain regular outreach with personalized video updates and exclusive content",
      milestone: true
    },
    {
      date: "June 2025",
      title: "Evaluation",
      description: "Analyze engagement, viewership, and impact to develop long-term strategy",
      milestone: true
    }
  ],
  provenSuccess: {
    title: "Proven Success from Other Programs",
    description: "Our track record of success with other athletic programs demonstrates the potential impact for MAC:",
    cases: [
      {
        name: "UTEP Athletics",
        logo: "https://insiderinbox.co/wp-content/uploads/2024/08/Group-1.png",
        image: "https://insiderinbox.co/wp-content/uploads/2025/02/utep-football-helmet-pic-860x531-109621804.png",
        highlights: [
          "Secured two $5M major gifts within 60 days",
          "50.14% click rate from top donors",
          "38,000+ messages sent to broader base",
          "Sold out crowd achieved through targeted messaging"
        ],
        quote: {
          text: "The dual-strategy approach has transformed how we engage with our supporters. We've achieved unprecedented fundraising success while maintaining strong connections.",
          author: "Michael Levy",
          role: "Deputy AD for Revenue Generation",
          avatar: "https://insiderinbox.co/wp-content/uploads/2025/02/Michael-Levy-Utep-Good.png"
        }
      },
      {
        name: "Penn State Athletics",
        logo: "https://insiderinbox.co/wp-content/uploads/2024/08/Group-2.png",
        image: "https://insiderinbox.co/wp-content/uploads/2025/02/alex-korolkoff-b_y4wUk6WhE-unsplash-3-scaled.jpg",
        highlights: [
          "28 teams actively using the platform",
          "80% platform adoption rate",
          "92% donor satisfaction",
          "6x higher repeat donor likelihood"
        ],
        quote: {
          text: "Insider Inbox allows our head coaches to foster deeper connections with our top 20% donors to generate the funds necessary to support their program's needs.",
          author: "Alyssa Francona",
          role: "Senior Associate AD for Advancement",
          avatar: "https://insiderinbox.co/wp-content/uploads/2025/02/alyssa-francona-headshot-1.png"
        }
      },
      {
        name: "Ohio State Men's Lacrosse",
        logo: "https://insiderinbox.co/wp-content/uploads/2024/08/OSU-Logo.png",
        image: "https://insiderinbox.co/wp-content/uploads/2025/02/OSU-Lax-huddle.png",
        highlights: [
          "22.8% growth in 11th Man Club membership",
          "66.7% average link open rate",
          "189% video engagement rate",
          "260% peak video view rate"
        ],
        quote: {
          text: "The engagement we've seen through Insider Inbox has been incredible. Our 11th Man Club members are more connected to our program than ever before.",
          author: "Nick Myers",
          role: "Head Coach, Ohio State Men's Lacrosse",
          avatar: "https://insiderinbox.co/wp-content/uploads/2025/02/Screenshot-2025-02-20-at-12.30.14-PM.png"
        }
      }
    ]
  },
  results: [
    {
      icon: icons.trendingUp('blue'),
      value: "Low Risk",
      label: "$2,500 trial investment"
    },
    {
      icon: icons.users('blue'),
      value: "Top 2",
      label: "Donor levels targeted"
    },
    {
      icon: icons.trophy('blue'),
      value: "3 Months",
      label: "To prove value"
    }
  ],
  testimonial: {
    quote: "Insider Inbox is a proven, low-risk way to strengthen donor relationships and drive major gifts. Programs like Ohio State, UTEP, and Penn State have seen measurable success, and this $2,500 trial lets MAC test it with minimal investment. It’s simple to implement, highly effective, and could make a significant impact on top-tier donor engagement.",
    author: "Ben Graves",
    role: "CEO, Stacked Sports",
    avatar: "https://ca.slack-edge.com/T036KLGJF-U036UG5RV-12f53388586c-72"
  }
};