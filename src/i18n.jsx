import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: "Home",
        about: "About",
        aboutWebsite: "About Website",
        developerTeam: "Developer Team",
        contact: "Contact",
        programs: "Programs",
        bachelor: "Bachelor",
        master: "Master",
        doctoral: "Doctoral",
        diploma: "Diploma",
        admission: "Admission",
        newsEvents: "News & Events",
        campusLife: "Campus Life",
        facilities: "Facilities",
        scholars: "Scholarships & Financial Aid",
        academics: "Academics",
        faculty: "Faculty Members",
        research: "Research Projects",
      },
    },
    km: {
      translation: {
        home: "ទំព័រដើម",
        about: "អំពី",
        aboutWebsite: "អំពីគេហទំព័រ",
        developerTeam: "ក្រុមអ្នកអភិវឌ្ឍន៍",
        contact: "ទំនាក់ទំនង",
        programs: "កម្មវិធីសិក្សា",
        bachelor: "បរិញ្ញាបត្រ",
        master: "មហាវិទ្យាល័យ",
        doctoral: "បណ្ឌិត",
        diploma: "វគ្គបរិញ្ញាបត្រ",
        admission: "ការចូលរៀន",
        newsEvents: "ព័ត៌មាន & ព្រឹត្តិការណ៍",
        campusLife: "ជីវភាពនៅកម្រិតសាកលវិទ្យាល័យ",
        facilities: "មជ្ឈមណ្ឌល",
        scholars: "សាលាការងារ និង ការផ្តល់ជំនួយហិរញ្ញវត្ថុ",
        academics: "វិស័យសិក្សា",
        faculty: "សមាជិកគ្រឹះស្ថាន",
        research: "គម្រោងស្រាវជ្រាវ",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
