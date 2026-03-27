// TypeScript interfaces for site data
export interface SocialLinks {
  email: string
  github: string
  linkedin: string
}

export interface Education {
  institution: string
  degree: string
  year: string
  logo: string
  courses: string[]
}

export interface Experience {
  company: string
  logo: string
  positions: {
    title: string
    description: string
  }[]
  bullets: string[]
}

export interface Project {
  title: string
  description: string
  link?: string
  linkText?: string
}

export interface SiteData {
  name: string
  title: string
  bio: string
  bioImageCaption: string
  endorsement: {
    text: string
    author: string
  }
  social: SocialLinks
  education: Education[]
  experience: Experience[]
  projects: Project[]
}

export const siteData: SiteData = {
  name: "Garfie Chiu",
  title: "I'm an Android Developer",
  bio: `Hi! My name is Garfie, a Chicago native.
I'm a software developer specializing in Android app development. I graduated from the University of Illinois at Chicago in 2019.
During that time, I took an internship at BMW Technology to help refactor some legacy code and notably created a maps library for integrating multiple map providers.
I now work at Groupon and- lo and behold, once again worked on map related features that led me to open-source <a href='https://github.com/garfiec/KatMaps' target='_blank' rel='noopener noreferrer'>KatMaps</a>.<br><br>

Besides my passion for maps, I love food, I love road tripping, I enjoy cars, and I love building things.
I enjoy grubbing food from all over the city, chefing up food, and watching food videos from the likes of Babish or Ugly Delicious.
I have strong inclinations towards taking the occasional weekend get away road-trip to nearby state parks for a hike.
I am highly enthusiastic on learning about, driving, and working on cars. I love my parent's Honda Odyssey as much as my former BMW E85 Z4 as much as my current Tesla Model 3.
As an engineer, I also have an affinity towards learning/building/tinkering with software/hardware (from micro-controllers to mechanical parts).`,
  bioImageCaption: "Me in a pool of Android plushies at the Urbana-Champaign hackathon.",
  endorsement: {
    text: "Garfie is a very talented junior Android Developer. He cares about maps, the soundproofing on his Tesla, and getting a good value at Costco.",
    author: "Fabio"
  },
  social: {
    email: "chiu.garfie@gmail.com",
    github: "garfiec",
    linkedin: "garfie-chiu"
  },
  education: [
    {
      institution: "University of Illinois at Chicago",
      degree: "Bachelors of Science in Computer Science",
      year: "2019",
      logo: "/img/uic.png",
      courses: [
        "Software Development for Mobile Platforms",
        "Databases",
        "Introduction to Networking",
        "Computer Systems",
        "Software Design",
        "Programming Languages Design and Implementation",
        "Languages and Automata",
        "Data Structures",
        "Computer Design",
        "Machine Organization"
      ]
    }
  ],
  experience: [
    {
      company: "Groupon",
      logo: "/img/groupon_logo.png",
      positions: [],
      bullets: [
        "Open-sourced <a href='https://github.com/garfiec/KatMaps' target='_blank' rel='noopener noreferrer'>KatMaps</a>, a Google Maps SDK wrapper for Android that improves the consumption of Google Maps APIs and provides additional functionality",
        "Led a hackathon project to make an indoor navigation app to navigate the Chicago corporate office. The app is complete with real-time high-accuracy positioning, turn-by-turn navigation, way points, and calendar event to room integration."
      ]
    },
    {
      company: "BMW Technology",
      logo: "/img/bmw_logo.png",
      positions: [
        {
          title: "Co-op",
          description: "Focused on designing and developing an Android Kotlin library to streamline the use of multiple geographic map providers like Google Maps, HERE Maps, and AutoNavi Maps through a common declarative API. Also worked on developing an Android app for employees to make snack purchases using their phones and analyzing battery impact of FindMate feature with Android Oreo behavioral changes in the Mini Connected app."
        },
        {
          title: "Summer Internship",
          description: "Worked primarily on BMW Connected Android app refactoring legacy login system and deploying smartphone testing farm for remote testing and automated UI testing. Documented solutions to common build issues. Helped identify issues with web app that prevented customers from using the Android app."
        }
      ],
      bullets: [
        "Developing an Android library to streamline use of multiple geographical map providers",
        "Created an Android app to enable digital payment of snack purchases for employees",
        "Assessed impact of Findmate with Android Oreo behavioral changes",
        "Investigated state of automated UI testing on the Android platform for UX validation",
        "Deployed smartphone testing farm with Docker for efficient remote testing on devices",
        "Refactored legacy login system to replace RxBindings into combined observable streams",
        "Identified and documented solutions to build issues with the BMW Connected app"
      ]
    }
  ],
  projects: [
    {
      title: "KatMaps",
      description: "Coming soon!"
    },
    {
      title: "Car Dex",
      description: "In this hackathon, the objective was to create an application of our choice that used Smartcar's APIs. Smartcar is a start-up that provides a common API that enables developers to communicate with a wide variety of internet connected cars from different manufacturers. Considering that I was recently working on the BMW Connected app at the time, I figured that a utility application would be the obvious choice and one that most groups would be doing. Thus, I decided that it would be fun to gamify the API with a geo-caching Android application."
    },
    {
      title: "Where Am I",
      description: `This is something I've wanted to do for a long time. I've previously created a proof-of-concept many moons ago via Tasker profiles (for the uninitiated, Tasker is a powerful automation app for Android), so I knew this was possible. The approach was simple, we live in an era that is fairly dense with WiFi access points. All I had to do was perform some simple WiFi triangulation on a few networks to determine what room I was in. Since I had to manually create a few dozen profiles in Tasker just to get various signal strengths from WiFi scans, I had to limit myself to two access points for room detection. Even with this severe limitation, I was able to get pretty good room level precision. I was able to map detect whether I was in my bedroom, kitchen, living room, or basement. With this context, one of my use cases was that I could tell Google Now to "play music" and it would know which room's Chromecast to play to (this was way before Google switched to Assistant and shortly before IoT devices became commonplace). This made me feel pretty cool at the time.<br><br>
Eventually, I had the technical skills to make something like this. In designing Where Am I, I wanted to be cross-platform, but with an priority emphasis on Android. I had no Android development experience at this time but wanted to ultimately port this library over to Android. This influenced my decision to write the library in Kotlin and use SQLite for persistence. I designed a common API where there could be multiple implementations of fingerprinting and implementations for different platforms. For fingerprinting, I let the user provide a name/tag for the location they're doing a WiFi scan snapshot of. The lookup algorithm works by checking how many of the access points fall within the min/max range for each relevant access point. A higher proportion of access points hitting the snapshot range will yield a higher confidence that the user is at the predicted location. The result was that I was able to distinguish between rooms on the UIC campus given a few meters apart with reasonable accuracy and precision.<br><br>
Funny thing is, in my attempt to find a way to get this library to perform Wifi scans on Windows, I noticed that someone else had created a library with the exact same name with the exact same goal but with Python and using scikit-learn instead of my more primitive fingerprinting method. It was like a deja vu moment for me. In the end, it was still fun to make, and I was able to build the thing I wanted to make for so long.`,
      link: "https://github.com/garfiec/WhereAmI",
      linkText: "Where Am I"
    },
    {
      title: "Course Availability Tracker",
      description: "Coming soon!"
    },
    {
      title: "Ventra Card Emulation",
      description: "Coming soon!"
    },
    {
      title: "Smile Bot 5000",
      description: `The intention is to make you feel morbid... Technology is often a double edged sword: it can help us but can also hurt us. I wanted to explore how technology can be used to elicit a response from people that's not always desirable. In many cases, the effects of technology on people are not apparent. In this case of this project, I wanted to exaggerated this malicious feeling.<br><br>
Smile Bot 5000 works by illuminating a lighted gallery platform only if the viewer puts on a big grin. Unfortunately for the viewer, the gallery pictures are depressing pictures of adults and kids having a terrible day and the only way they could see the gallery is by grinning through it... really makes you feel like a jerk afterwards.`,
      link: "https://introtonewmediaarts.wordpress.com/2019/04/10/smile-enforcement-bot-5000-wearable-interactive-project/",
      linkText: "Smile Enforcement Bot 5000"
    },
    {
      title: "Arduino Musical Instrument",
      description: "Coming soon!"
    }
  ]
}
