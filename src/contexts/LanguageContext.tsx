
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'te' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  te: {
    // Navigation
    'nav.about': 'మా గురించి',
    'nav.trustees': 'ధర్మకర్తలు',
    'nav.events': 'కార్యక్రమాలు',
    'nav.donate': 'దానం చేయండి',
    'nav.contact': 'సంప్రదించండి',
    
    // Hero Section
    'hero.title1': 'శ్రీ విశ్వనాథ',
    'hero.title2': 'గంగాభవాని ట్రస్ట్',
    'hero.quote': 'శివునికి జలాభిషేకం చేసేవాడు, గంగా కృపను మరియు విశ్వ శక్తిని పొందుతాడు.',
    'hero.mission': 'తెలంగాణలోని తాలమడ్లా గ్రామంలో శ్రీ విశ్వనాథ మరియు గంగాభవాని కోసం ఒక పవిత్ర నివాసం నిర్మించడంలో మాతో చేరండి - ధర్మం, భక్తి మరియు సాంస్కృతిక పునరుద్ధరణ కేంద్రం.',
    'hero.donateBtn': '🙏 దానం చేయండి',
    'hero.eventsBtn': '📅 కార్యక్రమాలు చూడండి',
    
    // About Section
    'about.title': 'మా పవిత్ర లక్ష్యం',
    'about.subtitle': 'తెలంగాణలోని తాలమడ్లా గ్రామంలో శ్రీ విశ్వనాథ మరియు గంగాభవాని కోసం దివ్య నివాసం నిర్మించడం',
    'about.mission.title': 'మా మిషన్',
    'about.mission.desc': 'ధర్మం, భక్తి మరియు సేవా భావనలను ప్రోత్సహించే పవిత్ర ఆలయం నిర్మించడం, ఇది భవిష్యత్ తరాలకు ఆధ్యాత్మిక మార్గదర్శకత్వం అందిస్తుంది.',
    'about.vision.title': 'మా దృష్టి',
    'about.vision.desc': 'సమాజంలో ఆధ్యాత్మిక విలువలను పెంపొందించే మరియు సేవా ధర్మాన్ని ప్రోత్సహించే కేంద్రంగా మారడం.',
    'about.values.title': 'మా విలువలు',
    'about.values.desc': 'సత్యం, అహింస, దయ మరియు నిస్వార్థ సేవ - ఇవే మా మార్గదర్శక సూత్రాలు.',
    
    // Trustees Section
    'trustees.title': 'మా గౌరవనీయ ధర్మకర్తలు',
    'trustees.subtitle': 'అనుభవజ్ఞులైన మరియు అంకితభావంతో కూడిన నాయకుల మార్గదర్శకత్వంలో',
    'trustees.founder': 'వ్యవస్థాపక ధర్మకర్త',
    'trustees.secretary': 'కార్యదర్శి',
    'trustees.treasurer': 'కోశాధికారి',
    'trustees.member': 'సభ్యుడు',
    
    // Events Section
    'events.title': 'మా పవిత్ర కార్యకలాపాలు & కార్యక్రమాలు',
    'events.subtitle': 'భక్తి మరియు సేవ ద్వారా, మేము వివిధ ఆధ్యాత్మిక, విద్యా మరియు సమాజ సేవా కార్యకలాపాలను నిర్వహిస్తాము, ఇవి దైవంతో మా బంధాన్ని బలపరుస్తాయి మరియు మానవత్వానికి సేవ చేస్తాయి.',
    'events.projector.title': 'ప్రభుత్వ పాఠశాలకు ప్రొజెక్టర్ దానం',
    'events.projector.desc': 'స్థానిక ప్రభుత్వ పాఠశాలలో డిజిటల్ అభ్యాసాన్ని మెరుగుపరచడానికి అత్యాధునిక ప్రొజెక్టర్లను దానం చేసి, 200+ విద్యార్థులకు ప్రయోజనం చేకూర్చాము.',
    'events.projector.impact': '200+ విద్యార్థులు లాభపడ్డారు',
    'events.bgcompetition.title': 'భగవద్గీత పోటీ',
    'events.bgcompetition.desc': 'యువతకు ఆధ్యాత్మిక జ్ఞాన పోటీని నిర్వహించి, పవిత్ర గ్రంథాల అవగాహన మరియు ధార్మిక విలువలను ప్రోత్సహించాము.',
    'events.bgcompetition.impact': '150+ పాల్గొనేవారు',
    'events.kalyanam.title': 'శివ కల్యాణం వేడుక',
    'events.kalyanam.desc': 'విస్తృత కర్మలతో శివుని దివ్య వివాహం యొక్క గొప్ప వేడుక, ప్రాంతం అంతటి నుండి భక్తులను ఒకచోట చేర్చింది.',
    'events.kalyanam.impact': '500+ భక్తులు హాజరయ్యారు',
    'events.construction.title': 'ఆలయ బేస్మెంట్ నిర్మాణం',
    'events.construction.desc': 'ఆలయ పునాది మరియు బేస్మెంట్ నిర్మాణం పూర్తి కావడంతో ముఖ్యమైన మైలురాయి సాధించబడింది, గణనీయ పురోగతిని సూచిస్తుంది.',
    'events.construction.impact': 'పునాది పూర్తయింది',
    'events.health.title': 'కమ్యూనిటీ హెల్త్ క్యాంప్',
    'events.health.desc': 'ఆరోగ్య నిపుణులతో భాగస్వామ్యంలో స్థానిక సమాజానికి ఉచిత వైద్య పరీక్షలు మరియు ఆరోగ్య అవగాహన కార్యక్రమాలు నిర్వహించాము.',
    'events.health.impact': '300+ మందికి సేవ',
    'events.annadanam.title': 'అన్నదాన కార్యక్రమం',
    'events.annadanam.desc': 'భక్తులు మరియు అవసరంలో ఉన్న సమాజ సభ్యులకు పోషకాహారంతో కూడిన భోజనం అందించే నియమిత ఉచిత భోజన పంపిణీ కార్యక్రమం.',
    'events.annadanam.impact': 'నెలకు 1000+ భోజనాలు',
    'events.impact.title': 'ఇప్పటివరకు మా ప్రభావం',
    'events.impact.devotees': 'భక్తులకు సేవ',
    'events.impact.events': 'కార్యక్రమాలు నిర్వహించబడ్డాయి',
    'events.impact.meals': 'భోజనాలు పంపిణీ',
    'events.impact.students': 'విద్యార్థులకు మద్దతు',
    
    // Categories
    'category.education': 'విద్య',
    'category.spiritual': 'ఆధ్యాత్మికం',
    'category.festival': 'పండుగ',
    'category.construction': 'నిర్మాణం',
    'category.health': 'ఆరోగ్యం',
    'category.service': 'సేవ',
    
    // Dates
    'date.september2024': 'సెప్టెంబర్ 2024',
    'date.august2024': 'ఆగస్టు 2024',
    'date.july2024': 'జులై 2024',
    'date.june2024': 'జూన్ 2024',
    'date.ongoing': 'కొనసాగుతున్నది',
    'date.monthly': 'నెలవారీ',
    
    // Footer
    'footer.motto': '"ప్రభువుకు సేవ చేయండి, ప్రజలకు సేవ చేయండి."',
    'footer.description': 'తెలంగాణలోని తాలమడ్లా గ్రామంలో శివుడు మరియు గంగామాత కోసం పవిత్ర నివాసం నిర్మించడం.',
    'footer.quicklinks': 'త్వరిత లింక్‌లు',
    'footer.connect': 'మాతో అనుసంధానం',
    'footer.registration': 'నమోదైన ట్రస్ట్ | PAN: ABJTS0488E | 80G సర్టిఫైడ్ | ISO సర్టిఫైడ్ | DARPAN లిస్టెడ్',
    'footer.copyright': '© 2024 శ్రీ విశ్వనాథ గంగాభవాని ట్రస్ట్. అన్ని హక్కులు రక్షితం.',
    'footer.established': 'స్థాపన ఏప్రిల్ 2024 | తాలమడ్లా గ్రామం, తెలంగాణ, భారతదేశం',
    
    // Recent Activities
    'recent.title': 'ఇటీవలి కార్యకలాపాలు',
    'recent.updates': 'తాజా అప్‌డేట్‌లు',
    'recent.foundation': 'ఆలయ పునాది పని పూర్తయింది',
    'recent.foundation.desc': 'భక్తుల ఆశీర్వాదాలతో మా పవిత్ర ఆలయం యొక్క బేస్మెంట్ నిర్మాణం విజయవంతంగా పూర్తయింది.',
    'recent.kalyanam.title': '500+ భక్తులు శివ కల్యాణంలో పాల్గొన్నారు',
    'recent.kalyanam.desc': 'శివుని దివ్య వివాహం యొక్క గొప్ప వేడుక ప్రాంతం అంతటి నుండి భక్తులను ఒకచోట చేర్చింది.',
    'recent.social': 'సోషల్ మీడియా',
    'recent.facebook': 'ఫేస్‌బుక్‌లో మమ్మల్ని అనుసరించండి',
    'recent.facebook.desc': 'రోజువారీ అప్‌డేట్‌లు మరియు ఆధ్యాత్మిక కంటెంట్',
    'recent.twitter': 'ట్విట్టర్‌లో కనెక్ట్ అవ్వండి',
    'recent.twitter.desc': 'మా ఆధ్యాత్మిక సమాజంలో చేరండి',
    'recent.youtube': 'యూట్యూబ్‌లో చూడండి',
    'recent.youtube.desc': 'ఆలయ కార్యక్రమాలు మరియు ఆధ్యాత్మిక ప్రవచనాలు',
    
    // Temple Plans
    'templeplans.title': 'పూర్తి ఆలయ నిర్మాణ ప్రణాళికలు',
    'templeplans.subtitle': 'మా పవిత్ర ఆలయ సముదాయానికి సమగ్ర నిర్మాణ డాక్యుమెంటేషన్ మరియు ప్రాజెక్ట్ సమాచారం',
    'templeplans.nav': 'హోమ్‌కు తిరిగి',
    'templeplans.click': 'పూర్తి పరిమాణంలో చూడటానికి ఏదైనా చిత్రంపై క్లిక్ చేయండి | అన్ని ప్రాజెక్ట్ వివరాలను తెలుసుకోవడానికి బాణాలను ఉపయోగించండి',
    'templeplans.return': 'హోమ్‌కు తిరిగి వెళ్ళండి'
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.trustees': 'Trustees',
    'nav.events': 'Events',
    'nav.donate': 'Donate',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title1': 'Shri Vishwanatha',
    'hero.title2': 'Gangabhavani Trust',
    'hero.quote': 'He who offers water to Lord Shiva, receives the grace of Ganga and the strength of the universe.',
    'hero.mission': 'Join us in building a sacred abode for Shri Vishwanatha and Gangabhavani — a center of dharma, devotion, and cultural revival in Talamadla village, Telangana.',
    'hero.donateBtn': '🙏 Donate Now',
    'hero.eventsBtn': '📅 View Events',
    
    // About Section
    'about.title': 'Our Sacred Mission',
    'about.subtitle': 'Building a divine abode for Shri Vishwanatha and Gangabhavani in Talamadla village, Telangana',
    'about.mission.title': 'Our Mission',
    'about.mission.desc': 'To build a sacred temple that promotes dharma, devotion, and service, providing spiritual guidance for future generations.',
    'about.vision.title': 'Our Vision',
    'about.vision.desc': 'To become a center that nurtures spiritual values in society and promotes the dharma of service.',
    'about.values.title': 'Our Values',
    'about.values.desc': 'Truth, non-violence, compassion, and selfless service - these are our guiding principles.',
    
    // Trustees Section
    'trustees.title': 'Our Honorable Trustees',
    'trustees.subtitle': 'Under the guidance of experienced and dedicated leaders',
    'trustees.founder': 'Founder Trustee',
    'trustees.secretary': 'Secretary',
    'trustees.treasurer': 'Treasurer',
    'trustees.member': 'Member',
    
    // Events Section
    'events.title': 'Our Sacred Activities & Events',
    'events.subtitle': 'Through devotion and service, we organize various spiritual, educational, and community welfare activities that strengthen our bond with the divine and serve humanity.',
    'events.projector.title': 'Projector Donation to Government School',
    'events.projector.desc': 'Donated state-of-the-art projectors to enhance digital learning in the local government school, benefiting 200+ students.',
    'events.projector.impact': '200+ students benefited',
    'events.bgcompetition.title': 'Bhagavad Gita Competition',
    'events.bgcompetition.desc': 'Organized a spiritual knowledge competition for youth, promoting understanding of sacred scriptures and dharmic values.',
    'events.bgcompetition.impact': '150+ participants',
    'events.kalyanam.title': 'Lord Shiva Kalyanam Celebration',
    'events.kalyanam.desc': 'Grand celebration of Lord Shiva\'s divine marriage with elaborate rituals, bringing together devotees from across the region.',
    'events.kalyanam.impact': '500+ devotees attended',
    'events.construction.title': 'Temple Basement Construction',
    'events.construction.desc': 'Major milestone achieved with completion of the temple\'s foundation and basement structure, marking significant progress.',
    'events.construction.impact': 'Foundation completed',
    'events.health.title': 'Community Health Camp',
    'events.health.desc': 'Free medical checkups and health awareness programs conducted for the local community in partnership with healthcare professionals.',
    'events.health.impact': '300+ people served',
    'events.annadanam.title': 'Annadanam Program',
    'events.annadanam.desc': 'Regular free meal distribution program serving nutritious food to devotees and the underprivileged community members.',
    'events.annadanam.impact': '1000+ meals monthly',
    'events.impact.title': 'Our Impact So Far',
    'events.impact.devotees': 'Devotees Served',
    'events.impact.events': 'Events Organized',
    'events.impact.meals': 'Meals Distributed',
    'events.impact.students': 'Students Supported',
    
    // Categories
    'category.education': 'Education',
    'category.spiritual': 'Spiritual',
    'category.festival': 'Festival',
    'category.construction': 'Construction',
    'category.health': 'Health',
    'category.service': 'Service',
    
    // Dates
    'date.september2024': 'September 2024',
    'date.august2024': 'August 2024',
    'date.july2024': 'July 2024',
    'date.june2024': 'June 2024',
    'date.ongoing': 'Ongoing',
    'date.monthly': 'Monthly',
    
    // Footer
    'footer.motto': '"Serve the Lord, Serve the People."',
    'footer.description': 'Building a sacred abode for Lord Shiva and Gangamatha in Talamadla village, Telangana.',
    'footer.quicklinks': 'Quick Links',
    'footer.connect': 'Connect With Us',
    'footer.registration': 'Registered Trust | PAN: ABJTS0488E | 80G Certified | ISO Certified | DARPAN Listed',
    'footer.copyright': '© 2024 Shri Vishwanatha Gangabhavani Trust. All rights reserved.',
    'footer.established': 'Established April 2024 | Talamadla Village, Telangana, India',
    
    // Recent Activities
    'recent.title': 'Recent Activities',
    'recent.updates': 'Latest Updates',
    'recent.foundation': 'Temple Foundation Work Completed',
    'recent.foundation.desc': 'The basement construction of our sacred temple has been successfully completed with devotees\' blessings.',
    'recent.kalyanam.title': '500+ Devotees Participated in Shiva Kalyanam',
    'recent.kalyanam.desc': 'A grand celebration of Lord Shiva\'s divine marriage brought together devotees from across the region.',
    'recent.social': 'Social Media',
    'recent.facebook': 'Follow us on Facebook',
    'recent.facebook.desc': 'Daily updates and spiritual content',
    'recent.twitter': 'Connect on Twitter',
    'recent.twitter.desc': 'Join our spiritual community',
    'recent.youtube': 'Watch on YouTube',
    'recent.youtube.desc': 'Temple events and spiritual discourses',
    
    // Temple Plans
    'templeplans.title': 'Complete Temple Architectural Plans',
    'templeplans.subtitle': 'Comprehensive architectural documentation and project information for our sacred temple complex',
    'templeplans.nav': 'Back to Home',
    'templeplans.click': 'Click on any image to view in full size | Use arrows to navigate through all project details',
    'templeplans.return': 'Return to Home'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('te'); // Default to Telugu

  useEffect(() => {
    const savedLanguage = localStorage.getItem('temple-language') as Language;
    if (savedLanguage && (savedLanguage === 'te' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('temple-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
