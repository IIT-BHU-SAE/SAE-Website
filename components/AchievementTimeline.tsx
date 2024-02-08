import { Chrono } from "react-chrono";

const items = [
  {
    media: {
      name: "IIT Bombay",
      source: {
        url: "/images/tiimelineim.png"
      },
      type: "IMAGE"
    },
    title: "2018",
    cardTitle: "IIT Bombay",
    cardSubtitle: "- Top 10 in IFT'18 Techfest'18",
    cardDetailedText: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    
  },
  {
    media: {
      name: "IIT Guwahati",
      source: {
        url: "/images/tiimelineim.png"
      },
      type: "IMAGE"
    },
    title: "2019",
    cardTitle: "IIT Guwahati",
    cardSubtitle: "- 2nd Position Burnout'18 Techniche'19",
    cardDetailedText: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    
  },
  {
    media: {
      name: "IIT Varanasi",
      source: {
        url: "/images/tiimelineim.png"
      },
      type: "IMAGE"
    },
    title: "2019",
    cardTitle: "IIT Varanasi",
    cardSubtitle: "- 1st Position Axelerate'19 Technex'19",
    cardDetailedText: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    
  }
  
];

const AchievementTimeline = () => {
  return (
    
    <Chrono
      items={items}
      mediaSettings={{ align: 'right', fit: 'contain' }}
      enableBreakPoint verticalBreakPoint={900}
      mode="VERTICAL_ALTERNATING"
      itemWidth={600}
      fontWeight={{
        cardSubtitle: '',
      }}
      fontSizes={{
        cardSubtitle: '1.4rem', // Adjust the font size for cardSubtitle
        cardDetailedText: '1.9rem',   // Adjust the font size for cardText (if needed)
        cardTitle: '1.8rem',  // Adjust the font size for cardTitle
        title: '1.2rem',      // Adjust the font size for title (event title)
      }}
      theme={{
        primary: ' rgb(242, 84, 2)',
        secondary: 'white',
        titleColor: 'red',
        titleColorActive: 'red',
      }}
      
    />
    
  );
}

export default AchievementTimeline;