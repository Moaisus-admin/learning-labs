import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Research from '../Research/Research'
import Advisory from '../Advisory/Advisory'
import Features from '../Features/Features'
import Main from '../Main/Main'
import ScrollAnimationComponent from '../scroller/Scroller'
import Overview from '../Overview/Overview'
import { Stickynav } from '../Stickynav/Stickynav'
import EmblaCarouselHome from '../Carousel/verticalHome/EmblaCarouselHome'
import { EmblaOptionsType } from 'embla-carousel'
import '@/components/Carousel/verticalHome/css/emblahome.css'
import FloatingFooter from '../footer/FloatingFooter'
import OurSolution from '../Overview/OurSolution'

interface ContentItem {
  title: string;
  description: string;
}
interface DataLeftProps {
  img: string,
  title: string;
  description: string;
  content: ContentItem[];
  singleContent: string;
}


const slidesx: DataLeftProps[] = [
  {
    title: "Maturity assessment tools",
    description: "Comprehensive industry specific assessments",
    singleContent: "Based on extensive research and in consultation with industry experts, our assessments assess various mental model, job holder maturity, team dynamics, organization agility & leadership relevant parameters. These assessments are available in our online platform. On completion of the same, a professional report with an overview of capability gaps and strengths is sent to the respondent.",
    content: [],
    img: '/images/toolcards/cardimg.png'
  },
  {
    title: "Immersive Business simulations",
    description: "The Iceberg Model and Maturity at Different Levels",
    singleContent: "",
    content: [
      {
        title: "The Iceberg Model",
        description: " Uncover hidden organizational dynamics, from surface events to deep-rooted challenges, with our Iceberg Model for organizational maturity."
      },
      {
        title: "Maturity at Different Levels",
        description: "Evaluate your organization’s progress across leadership, team performance, and structural maturity."
      },
    ],
    img: '/images/toolcards/cardimg2.png'
  },
  {
    title: "On-demand research & consultation",
    description: "Comprehensive Reports and Learning Journey",
    singleContent: "",
    content: [
      {
        title: "Gap Assessment and Learning Journey",
        description: "Identify critical gaps within your organization and embark on a tailored learning journey to bridge these gaps effectively."
      },
    ],
    img: '/images/toolcards/cardimg3.png'
  },

]


const slides2: DataLeftProps[] = [
  {
    title: "Overview ",
    description: "Drive Transformation with Business Simulations",
    singleContent: '"Tell me and I forget, Teach me and I remember, Involve me and I will learn. - John Dewey, (1938)"',
    content: [
      {
        title: "",
        description: "To drive transformation within an organization, team, or individual, a vivid and personal visualization of the desired future state, presented in real-life scenarios, is highly effective"
      }
      , {
        title: "",
        description: "Our business simulations foster self-discovery, new perspectives, and team camaraderie while instilling a drive for excellence through experiential learning."
      }
    ],
    img: '/images/toolcards/cardimg.png'
  },
  {
    title: "Example ",
    description: "Impactopia: Versatile Business Simulations",
    singleContent: "",
    content: [
      {
        title: "Impactopia Platform",
        description: 'Any organization can register to access Impactopia and browse through a variety of off-the-shelf business simulation games available for purchase.'
      },
      {
        title: "Informed Selections",
        description: ' The platform offers abundant media and detailed information to help organizations make informed decisions.'
      },
    ],
    img: '/images/toolcards/cardimg2.png'
  },
  {
    title: "Synopsis",
    description: "Comprehensive Reports and Learning Journey",
    singleContent: "",
    content: [
      {
        title: "Gap Assessment and Learning Journey",
        description: "Identify critical gaps within your organization and embark on a tailored learning journey to bridge these gaps effectively."
      },
    ],
    img: '/images/toolcards/cardimg3.png'
  },

]


function Home() {
  return (
    <div>
      <Header />
      <Main />
      <div id="sticked" className='z-50 bg-white'>
        <div id="table-of-contents" className=' bg-white z-50  '>
          <Overview />
          {/* <OurSolution /> */}
        </div>
        <Features />
      </div>

      {/* <Advisory /> */}
      <Research />
      <Footer />

     <FloatingFooter />
    </div>
  )
}

export default Home
