// "use client"
// // import CommonMainForm from "../components/MainForm";

// export default function Home() {
//   return (
//       <section className="py-10 lg:py-[70px] br-primary">
     
//       <div className="max-w-[1380px] mx-auto px-4">
       
//           <div className="grid grid-cols-1 gap-4 md:gap-8 items-center h-full">

//               <div className="max-w-sm mx-auto">
//       ghhgh
//               </div>
//               {/* <CommonMainForm /> */}
      
//           </div>
        
//       </div>
//     </section>
//   );
// }

import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href="/about">{t('about')}</Link>
    </div>
  );
}
