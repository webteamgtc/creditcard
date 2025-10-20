import { NextResponse } from "next/server";
import { transporter, mailOptions } from "../../[locale]/config/nodemailer";

const generateEmailContent = (data) => {
  if (data?.locale == "ar") {
    return {
      html: `
<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <title>بريد التحقق من GTC</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@400;700&display=swap');
    </style>
  </head>
  <body style="margin:0;padding:0;background-color:#ffffff;font-family:'Noto Kufi Arabic',sans-serif; direction: rtl;">
    <table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Noto Kufi Arabic', sans-serif; padding: 20px; direction: rtl;">
      <tr>
        <td align="center">
          <table width="900" cellpadding="0" cellspacing="0" style="border:1px solid #e0e0e0;border-radius:8px;padding:30px;">
            <!-- Logo -->
            <tr>
              <td align="right" style="padding-bottom: 20px;">
                <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/email-test.png" alt="شعار GTC" style="width: 140px;" />
              </td>
            </tr>

            <!-- Heading -->
            <tr>
              <td style="font-size:20px;font-weight:600;color:#000000;padding-bottom:10px;">
                الانضمام إلى برنامج الشراكة GTC
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:20px;">
                لقد قمت للتو بتعبئة نموذج برنامج الشراكة مع GTC. إليك ما يجب فعله بعد ذلك.
              </td>
            </tr>

            <tr>
              <td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td>
            </tr>

         <!-- Greeting & OTP -->
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:10px;">
    مرحباً ${data?.nickname || "الاسم الأول"},
  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:10px;">
    نشكرك على تسجيل اهتمامك بالانضمام إلى برنامج الشراكة مع GTC.
  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:10px;">
    لقد بدأت للتو أولى خطواتك نحو برنامج الشراكة الخاص بـ GTC المصمم لمساعدتك على تنمية أعمالك في عالم الفوركس بسرعة وربحية أكبر.
  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:10px;">
    سيقوم أحد مدراء الشراكات المتخصصين لدينا بالتواصل معك قريباً لمساعدتك في تفعيل حسابك والإجابة عن أي استفسارات، بالإضافة إلى تزويدك بكافة التفاصيل التي تحتاجها لتحقيق أقصى استفادة من برنامجنا.
  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:10px;">
    هل لديك أي استفسار؟
  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:10px;">
    تواصل معنا مباشرة عبر الرقم: <span dir="ltr" style="unicode-bidi: embed;">+971 800 667788</span><br/>
    أو عبر البريد الإلكتروني: <a href="mailto:partners@gtcfx.com" style="color:#000000; text-decoration: underline;">partners@gtcfx.com</a>
  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:30px;">
    نحن هنا لدعمك،<br/>
    GTC فريق الشراكات،
  </td>
</tr>


            <tr>
              <td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td>
            </tr>

            <!-- Contact Info -->
            <tr>
              <td style="padding-top: 0px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="right">
                      <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/email-test.png" alt="شعار GTC" style="width: 140px;" />
                    </td>
                   <td align="right" dir="rtl" style="font-size: 13px; color: #192055; line-height: 25px; text-align: right;">
                    📞 الهاتف: <span dir="ltr">+971 800 667788</span><br/>
                    ✉️ البريد الإلكتروني: <a href="mailto:support@gtcfx.com" style="color: #192055; text-decoration: none;">support@gtcfx.com</a>
                  </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Legal and Social Footer -->
            <!-- You can reuse the same content from the English version as-is here (or translate if needed) -->
            <tr>
  <td style="font-size: 11px; color: #666; padding: 20px 0px; line-height: 1.5; text-align: right;" dir="rtl">
    هذا الموقع مملوك ومدار من قبل GTC Global Ltd، وهي شركة محدودة تم تأسيسها في موريشيوس (رقم الشركة: C188049) ومرخصة من قبل لجنة الخدمات المالية في موريشيوس (رقم الترخيص: GB22200292) لمزاولة نشاط وسيط استثمار من الفئة SEC-2.1B. العنوان المسجل: Cyberati Lounge، الطابق الأرضي، The Catalyst، Silicon Avenue، 40 Cybercity، 72201 إيبين، جمهورية موريشيوس.

    <br><br>

    <strong style="font-weight: 600; color: #000;">شركة GTC Global Ltd و GTC Global Trade Capital Co. Limited</strong> تنتميان إلى مجموعة GTC المالية، وهي مجموعة تضم عدة كيانات حول العالم.

    <br><br>

    ينطوي الاستثمار في المنتجات المشتقة على مخاطر كبيرة وقد لا يكون مناسبًا لجميع المستثمرين. يمكن أن يؤدي استخدام الرافعة المالية إلى زيادة المخاطر والخسائر المحتملة. قبل اتخاذ قرار التداول في الفوركس أو العقود مقابل الفروقات، يجب تقييم أهدافك الاستثمارية ومستوى خبرتك وقدرتك على تحمل المخاطر بعناية. يجب أن تستثمر فقط الأموال التي يمكنك تحمل خسارتها. نشجعك بشدة على التثقيف الكامل بالمخاطر واستشارة مستشار مالي أو ضريبي مستقل عند الحاجة.

    <br><br>

    <strong style="font-weight: 600; color: #000;">شركة GTC Global Ltd و GTC Global Trade Capital Co. Limited</strong> لا تقدمان خدمات للأشخاص المقيمين في ولايات قضائية محددة أو حيث يعتبر توزيع هذه الخدمات مخالفًا للقوانين المحلية.

    <br><br>

    <strong style="font-weight: 600; color: #000;">الكيانات الأخرى ضمن المجموعة:</strong><br>
    المنتجات والخدمات المالية المعروضة على هذا الموقع لا يتم تقديمها من قبل الكيانات التالية، ولا يمكن الرجوع إليها قانونياً. إذا كنت مهتمًا بخدمات هذه الكيانات، يرجى زيارة مواقعها الخاصة.

    <br><br>

    <strong style="font-weight: 600; color: #000;">GTC Group LLC-FZ</strong> هي شركة قابضة مسجلة في دبي، الإمارات العربية المتحدة برقم رخصة: 2311147.01. العنوان المسجل: Business Center 1، الطابق الأرضي، فندق Meydan، ند الشبا، دبي.

    <br><br>

    <strong style="font-weight: 600; color: #000;">GTC Multi Trading DMCC</strong> هي شركة مرخصة ومسجلة بموجب قوانين مركز دبي للسلع المتعددة (رقم: DMCC-312687) ومرخصة من هيئة الأوراق المالية والسلع الإماراتية (رقم: 202200000007) لمزاولة نشاط وساطة السلع - التداول والتقاص. العنوان المسجل: الوحدة رقم: 1501، برج ليك بلازا، القطعة JLT-PH2-T2A، أبراج بحيرات جميرا، دبي.

    <br><br>

    كل كيان ضمن مجموعة GTC المالية يُدار بشكل مستقل. المنتجات والخدمات المالية على هذا الموقع مقدمة فقط من قبل GTC Global Ltd و GTC Global Trade Capital Co. Limited.

    <br><br>

    جميع العلامات التجارية هي ملك لأصحابها. جميع الحقوق محفوظة. GTC Global Ltd جزء من مجموعة GTC المالية التي تضم كيانات في جميع أنحاء العالم.

    <br><br>

    <strong>تحذير من المخاطر:</strong> قد لا يكون تداول المنتجات ذات الرافعة المالية مثل الفوركس والمشتقات مناسبًا لجميع المستثمرين نظرًا لمستوى المخاطر العالي. الرجاء التأكد من فهمك الكامل للمخاطر واستشارة مستشار مستقل عند الحاجة.
  </td>
</tr>


            <!-- Social icons, disclaimer, and copyright -->

            <!-- Social Media Footer -->
<tr>
  <td style="padding-top: 30px; text-align: center;">
    <table align="center" cellpadding="0" cellspacing="0">
      <tr>
        <td style="padding: 0 5px;">
          <a href="https://www.facebook.com/GTCFXGlobalTradeCapital" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width="20" height="20" style="display:block;">
          </a>
        </td>
        <td style="padding: 0 5px;">
          <a href="https://x.com/GTC_fx" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png" alt="X" width="20" height="20" style="display:block;">
          </a>
        </td>
        <td style="padding: 0 5px;">
          <a href="https://www.youtube.com/channel/UCnKWakjm1b9Bm63xgwNFXHA" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" width="20" height="20" style="display:block;">
          </a>
        </td>
        <td style="padding: 0 5px;">
          <a href="https://linkedin.com/company/gtcfx-official" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" width="20" height="20" style="display:block;">
          </a>
        </td>
        <td style="padding: 0 5px;">
          <a href="https://www.instagram.com/gtcfxofficial/" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" width="20" height="20" style="display:block;">
          </a>
        </td>
        <td style="padding: 0 5px;">
          <a href="https://api.whatsapp.com/send/?phone=448000488461&text&type=phone_number&app_absent=0" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" width="20" height="20" style="display:block;">
          </a>
        </td>
        <td style="padding: 0 5px;">
          <a href="https://t.me/gtc_vip_signal" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="Telegram" width="20" height="20" style="display:block;">
          </a>
        </td>
        <td style="padding: 0 5px;">
          <a href="https://www.tiktok.com/@gtcgroup_official" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" alt="TikTok" width="20" height="20" style="display:block;">
          </a>
        </td>
      </tr>
    </table>
  </td>
</tr>

            <tr>
  <td align="center" dir="rtl" style="font-size: 12px; color: #666666; padding-top: 15px; padding-bottom: 30px;">
    &copy; حقوق النشر 2025 GTCFX – جميع الحقوق محفوظة
  </td>
</tr>
            ...
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`,
    };
  } else {
    return {
      html: `
      <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>GTC OTP Email</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
    </style>
  </head>
  <body style="margin:0;padding:0;background-color:#ffffff;font-family:'Poppins',sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Poppins', sans-serif; padding: 20px;">
      <tr>
        <td align="center">
          <table width="900" cellpadding="0" cellspacing="0" style="border:1px solid #e0e0e0;border-radius:8px;padding:30px;">
           <!-- Logo -->
            <tr>
              <td align="left" style="padding-bottom: 20px;">
                <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/email-test.png" alt="GTC Logo" style="width: 140px;" />
              </td>
            </tr>

            <!-- Heading -->
            <tr>
              <td style="font-size:20px;font-weight:600;color:#000000;padding-bottom:10px;">
                Joining the GTC Partnership Programme
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:20px;">
You’ve just filled in the GTC Partnership Programme form. Here’s what to do next.
              </td>
            </tr>

            <tr>
  <td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td>
</tr>

            <!-- Greeting & OTP -->
           <tr>
  <td style="font-size:14px; color:#000000; padding-bottom:10px;">
    Hi ${data?.nickname || "Client"},
  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:10px;">
    Thank you for registering your interest with us.
  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:10px;">
    You’ve just taken the first step towards the GTC Partnership Programme that’s geared at ensuring you grow your FX partnership business faster, meaning it’s a lot more rewarding.
  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:10px;">
    One of our outstanding Partnership Managers will call you.
  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:10px;">
    They’ll get you activated and walk you through our partnership programme.
  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:20px;">
    Need help? Simply call us on <a href="tel:+971800667788" style="color:#000000; text-decoration: underline;">+971 800 667788</a> or email us at <a href="mailto:partners@gtcfx.com" style="color:#000000; text-decoration: underline;">partners@gtcfx.com</a>.
  </td>
</tr>
<tr>
  <td style="font-size:14px; color:#000000; padding-bottom:30px;">
    Talk soon,<br/>
    The GTC Partnership Team
  </td>
</tr>

             <tr>
  <td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td>
</tr>

            <!-- Contact Info -->
            <tr>
              <td style="padding-top: 0px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="left">
                      <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/email-test.png" alt="GTC Logo" style="width: 140px;" />
                    </td>
                    <td align="right" style="font-size: 13px; color: #192055; line-height: 25px;">
                      📞 Phone: +971 800 667788<br/>
                      ✉️ Email: <a href="mailto:support@gtcfx.com" style="color: #192055; text-decoration: none;">support@gtcfx.com</a>
                    </td>
                  </tr>
                  
                </table>
              </td>
            </tr>

            <!-- Legal Footer -->
<tr>
  <td style="font-size: 11px; color: #666; padding: 20px 0px; line-height: 1.5;">
    This website is owned and operated by GTC Global Ltd, a limited company incorporated in Mauritius (company number: C188049) and licensed by the Financial Services Commission, Mauritius (No. GB22200292) to trade as an SEC-2.1B Investment Dealer. Registered Address: Cyberati Lounge, Ground Floor, The Catalyst, Silicon Avenue, 40 Cybercity, 72201 Ebene, Republic of Mauritius. The financial services and products promoted on this website are offered by GTC Global Ltd and GTC Global Trade Capital Co. Limited, a company authorised by the Vanuatu Financial Services Commission of the Republic of Vanuatu, Company License Number: 40354.
    <br/><br/>
    <stong style="font-weight: 600p; color: #000;">GTC Global Ltd and GTC Global Trade Capital Co. Limited</stong> belong to the GTC Financial Group, which consists of a group of entities across the globe.
    <br/><br/>
    Investing in derivative products carries significant risks and may not be suitable for all investors. Leveraging in these instruments can increase the level of risk and potential loss exposure. Before making any decision to engage in foreign exchange trading or CFDs, it is essential to carefully assess your investment objectives, level of experience, and risk tolerance. You should only invest funds that you can afford to lose. We strongly encourage you to educate yourself thoroughly about the associated risks and, if you have any questions, seek advice from an independent financial or tax advisor.
    <br/><br/>
    <stong style="font-weight: 600p; color: #000;">GTC Global Ltd and GTC Global Trade Capital Co. Limited</stong> do not provide services to individuals residing in specific jurisdictions and/or jurisdictions where distribution of such services would be contrary to local law or regulation.
    <br/><br/>
    <strong style="font-weight: 600p; color: #000;">Other Group Entities:</strong><br/>
    The financial products and services offered on this website are <u>NOT</u> provided by the following group entities, and no recourse against the following entities is available. If you are interested in the products and services offered by each of the following entities, please visit their respective websites.
    <br/><br/>
    <strong style="font-weight: 600p; color: #000;">GTC Group LLC-FZ</strong> is a holding company incorporated in Dubai, United Arab Emirates with Business License Number: 2311147.01. Its registered office is at Business Center 1, M Floor, Meydan Hotel, Nad Al Sheba, Dubai, United Arab Emirates.
    <br/><br/>
    <strong style="font-weight: 600p; color: #000;">GTC Multi Trading DMCC</strong> is a limited company licensed and incorporated under the laws of the Dubai Multi Commodities Centre (No. DMCC-312687) and licensed by the Securities and Commodities Authority, United Arab Emirates (No. 202200000007) to practice the activity of Commodity Brokerage - Trading and Clearing. Registered Address: Unit No: 1501, 1 Lake Plaza, Plot No: JLT-PH2-T2A, Jumeirah Lakes Towers, Dubai, United Arab Emirates.
    <br/><br/>
    Each of the entities within the GTC Financial Group is managed separately. The financial products and services offered on this website are ONLY provided by GTC Global Ltd and GTC Global Trade Capital Co. Limited.
    <br/><br/>
    All trademarks are the property of their respective owners. All rights reserved. GTC Global Ltd is part of the GTC Financial Group, which consists of a group of entities across the globe.
    <br/><br/>
    <strong>Risk Warning:</strong> Trading leveraged products such as forex and derivatives may not be suitable for all investors as they carry a high degree of risk to your capital. Please ensure that you fully understand the risks involved and seek independent advice if necessary.
  </td>
</tr>

<!-- Social Media Footer -->
<tr>
  <td style="padding-top: 30px; text-align: center;">
    <table align="center" cellpadding="0" cellspacing="0">
      <tr>
        <td style="padding: 0 5px;">
          <a href="https://www.facebook.com/GTCFXGlobalTradeCapital" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width="20" height="20" style="display:block;">
          </a>
        </td>
        <td style="padding: 0 5px;">
          <a href="https://x.com/GTC_fx" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png" alt="X" width="20" height="20" style="display:block;">
          </a>
        </td>
        <td style="padding: 0 5px;">
          <a href="https://www.youtube.com/channel/UCnKWakjm1b9Bm63xgwNFXHA" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" width="20" height="20" style="display:block;">
          </a>
        </td>
        <td style="padding: 0 5px;">
          <a href="https://linkedin.com/company/gtcfx-official" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" width="20" height="20" style="display:block;">
          </a>
        </td>
        <td style="padding: 0 5px;">
          <a href="https://www.instagram.com/gtcfxofficial/" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" width="20" height="20" style="display:block;">
          </a>
        </td>
        <td style="padding: 0 5px;">
          <a href="https://api.whatsapp.com/send/?phone=448000488461&text&type=phone_number&app_absent=0" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" width="20" height="20" style="display:block;">
          </a>
        </td>
        <td style="padding: 0 5px;">
          <a href="https://t.me/gtc_vip_signal" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="Telegram" width="20" height="20" style="display:block;">
          </a>
        </td>
        <td style="padding: 0 5px;">
          <a href="https://www.tiktok.com/@gtcgroup_official" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" alt="TikTok" width="20" height="20" style="display:block;">
          </a>
        </td>
      </tr>
    </table>
  </td>
</tr>

<tr>
  <td align="center" style="font-size: 12px; color: #666666; padding-top: 15px; padding-bottom: 30px;">
    &copy; Copyright 2025 GTCFX – All Rights Reserved
  </td>
</tr>


          </table>
        </td>
      </tr>
    </table>
  </body>
</html>

      
      `,
    };
  }
};

export async function POST(req) {
  const reqBody = await req.json();
  const mailOption = {
    from: '"GTCFX" <portal@mx4.gtcmail.com>',
    to: reqBody?.email,
  };
  try {
    await transporter.sendMail({
      ...mailOption,
      ...generateEmailContent(reqBody),
      subject: `Thank you for registering with GTC`,
    });
    return NextResponse.json(
      { message: "Success", email: reqBody?.email },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
