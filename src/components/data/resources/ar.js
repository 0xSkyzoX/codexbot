import { faShare, faCode, faStar, faCodeBranch, faMoon, faPlusCircle, faFire, faPenSquare, faQuestionCircle } from "@fortawesome/fontawesome-free-solid"
import commands from "./commands-ar.json"
const ar = {
     indexPage: {
          indexTitle: ["لنبدأ مع خادم", "الترميز باستخدام", "بوت كودكس"],
          indexDescription: "جعل تجربة الترميز الخاصة بك مع خادم المجتمع الخاص بك الخاص بك، وتصحيح الأخطاء في الترميز، ونشر ومشاركة المشاريع...",
          indexGetstarted: "ابدأ",
          indexTitleFeatures: "انظر ميزاتنا الخاصة",
          indexDescriptionMobile: ["جعل تجربة الترميز الخاصة بك مع خادم المجتمع الخاص بك", "، وتصحيح الأخطاء في الترميز، ونشر ومشاركة المشاريع..."],
          indexItemTitleFeatures: [
               "دعم الترميز الخاص",
               "مجتمع الترميز",
               "بوت CodeX Discord"
          ],
          indexItemDescriptionFeatures: [
               "CodeX من خلال الترميز الخاص، لذلك ندعم جميع ميزات الترميز الخاصة، مثل نشر الترميز والمشاريع، وما إلى ذلك... ويمكنك ربط حساب الترميز الخاص بك وتخصيص محتوى الترميز الخاص بك... تعرف على المزيد عن الترميز الخاص!",
               "خادم دعم CodeX، هذا هو خادم Discord يساعدك على التواصل والتحدث عن البرمجة والتصميم والذكاء الاصطناعي... أي شيء عن التكنولوجيا! ويمكنك مشاركة مشروعك هناك وجعل تجربتك مع ميزات بوت الترميز!",
               "سهل الاستخدام! ربط CodeX بـ بوت Discord ، وهذا يعني أنه يمكنك تخصيص هذا البوت واستخدامه بأي شكل تريده في خادمك الخاص ، والأفضل أنك يمكنك مشاركة مشاريعك والمشاركات التي ستظهر في هذا الموقع!"
          ]
     },
     navbar:
     {
          title: "CodeX",
          items: [
               "الأوامر",
               "خادم الدعم",
               "الميزات",
               "الرئيسية"
          ],
          button: "تسجيل الدخول"
     },
     footer: {
          title: "CodeX",
          footerElementsTitles: [
               "استكشاف الميزات",
               "CodeX Bot",
               "نظرة عامة",
               "حول CodeX",
               "المجتمع",
               "Special Code"
          ],
          footerElement1: [
               "مشاريع الرموز",
               "تخصيص الخادم",
               "خادم Discord الخاص بنا",
               "البرمجة هي شيء خاص"
          ],
          footerElement2: [
               "ابدأ مشروعك",
               "شارك رمزك",
               "استكشف المزيد من المشاريع",
               "ابدأ عمل فريق"
          ],
          footerElement3: [
               "نبذة عن",
               "اتصل بنا",
               "تعلم CodeX",
               "شروط الاستخدام",
               "سياسة الخصوصية"
          ],
          footerElement4: [
               "ما هو روبوت CodeX؟",
               "تعرف على فريق البرمجة...",
               "كيفية بدء مشروع؟",
               "خادم Discord، المجتمع..."
          ],
          footerElement5: [
               "مجتمع TeamX",
               "العمل معًا",
               "شارك رمزك",
               "إضافة أصدقاء المشروع",
               "الدردشة العامة على Discord",
               "افتح فريقك الخاص"
          ],
          footerElement6: [
               "حول رمز خاص",
               "خادم Discord",
               "الموقع الرسمي",
               "كيفية بدء عملك؟",
               "كيفية مشاركة المشاريع؟",
               "مستقبل البرمجة",
               "مشاريع رمز خاص",
               "تعلم المزيد من الميزات"
          ]
     },
     featuresPage: {
          title: ["ابدأ تجربتك في", "البرمجة مع", "ميزاتنا"],
          description: ["التجربة الأفضل مع ميزاتنا، تعلم واستمتع واكتب البرامج بينما", "استخدام ميزاتنا سيكون الأفضل، جرب ميزاتنا هنا!"],
          data: [{
          "name": "فريق البرمجة",
          "describe": "• استمتع واكتب البرامج مع فريقك!",
          "items": ["نشاط برمجة", "ليلة برمجة", "ابدأ فريقك الخاص", "تحدي برمجي"],
          "sponsor": "Special Code",
          "icons": [faStar, faMoon, faPlusCircle, faFire],
          "id": "first",
          "icon": faCode
          }, {
          "name": "مشروع البرمجة",
          "describe": "• ابدأ وأدارة مشروعك",
          "items": ["مشاركة المشروع", "إضافة فريق العمل", "إدارة بسهولة", "الحصول على الدعم"],
          "sponsor": "CodeX",
          "id": "two",
          "icons": [faShare, faPlusCircle, faPenSquare, faQuestionCircle],
          "icon": faCodeBranch
          }
     ]
},
     commandsPage: commands
}
export default ar