'use client';
import CustomButton from "@/app/components/common/CustomButton";
import { useTranslations } from "next-intl";

const ReferTables = ({setIsOpen}) => {
  const t = useTranslations("partner.comparisonTable");
  return (
        <section className="relative text-white py-8 md:py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-white z-0" />

      {/* Faded Background Image at Bottom Center */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-full z-0 opacity-20">
        <img
          src="/ib/layer5.webp" // ✅ change this path if needed
          alt="Decorative background"
          className="w-full h-auto object-contain object-bottom"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-8 justify-center text-center px-4 md:px-0">
        <h2 className="text-[21px] md:text-3xl xl:text-[40px] font-bold text-[#000032] capitalize max-w-3xl mx-auto leading-none md:leading-tight">
          {t("title")}
        </h2>

        <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-[#e0e4f6] gap-20">
            <table className="w-full text-sm md:text-base text-[#1e2c54]">
            <thead>
              <tr className="bg-[#f1f4fb] font-semibold text-[#1e2c54]">
                  <th className="py-4 px-5 ltr:text-left rtl:text-right">{t('colHeader1')}</th>
                  <th className="py-4 px-5 bg-gray-50 text-center">{t('colHeader2')}</th>
                  <th className="py-4 px-5 bg-gray-50 text-center">
                    <img src="/logo-blue.svg" alt="GTC Logo" className="h-8 inline-block" />
                  </th>
                </tr>
            </thead>
            <tbody>
              {[
                [t("col1.point1"), t("col2.point1"), t("col3.point1")],
                [t("col1.point2"), t("col2.point2"), t("col3.point2")],
                [t("col1.point3"), t("col2.point3"), t("col3.point3")],
                [t("col1.point4"), t("col2.point4"), t("col3.point4")],
                [t("col1.point5"), t("col2.point5"), t("col3.point5")],
                [t("col1.point6"), t("col2.point6"), t("col3.point6")],
                [
                  t("col1.point7"),
                  <span className="text-red-500 flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 8.586l4.95-4.95 1.414 1.414L11.414 10l4.95 4.95-1.414 1.414L10 11.414l-4.95 4.95-1.414-1.414L8.586 10l-4.95-4.95L5.05 3.636 10 8.586z"
                        clipRule="evenodd"
                      />
                    </svg>
                 
                  </span>,
                  <span className="text-green-600 flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                     {t("col3.point7")}
                  </span>,
                ],
              ].map(([feature, broker, gtc], idx) => (
                <tr key={idx} className="border-t border-[#e0e4f6]">
                 <td className="py-4 ltr:text-left rtl:text-right font-medium bg-gray-100 px-5">{feature}</td>
                <td className="py-4 text-center px-5">{broker}</td>
                <td className="py-4 text-center px-5">{gtc}</td>
                              </tr>
              ))}
            </tbody>
          </table>
        </div>

   <div className="flex justify-center md:mt-2">
      <CustomButton
           text={t('cta')}
          bgColor="bg-[#000032] hover:bg-[#4e4d71]"
          textColor="text-[#fff]"
           onClick={() => setIsOpen(true)}
          showIcon={false} // No SVG arrow
        />
   </div>
      
      </div>
    </section>
  );
};

export default ReferTables