import React from 'react'
import Introduction from './Introduction/Introduction'
import Proudct from './product/Proudct'
import Service from './service/Service'
import RiceMiddle from './riceMiddle/RiceMiddle'
import RiceNum from './riceMiddle/RiceNum'
import TeeMiddle from './teemiddle/TeeMiddle'
import HistoryMain from './historyMain/HistoryMain'
import PistachioMiddle from './PistachioMiddle/PistachioMiddle'
import PistachioMain from './PistachioMiddle/PistachioMain'
import Journal from './Journal/Journal'
import BlogMain from './BlogMain.js/BlogMain'
import SocialActivities from './Socialactivities/SocialActivities'
import Grouping from './grouping/Grouping'
import Footer from '../footer/Footer'

function Main() {
  return (
    <main>
        <Introduction />
        <Proudct />
        <Service />
        <RiceMiddle />
        <RiceNum />
        <TeeMiddle />
        <HistoryMain />
        <PistachioMiddle />
        <PistachioMain />
        <Journal />
        <BlogMain />
        <SocialActivities />
        <Grouping />
        <Footer />
    </main>
  )
}

export default Main