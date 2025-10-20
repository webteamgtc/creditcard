export const getArabicOtpTemplate = (first_name, otp) => {
    return `
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <title>رمز التحقق GTC</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@400;700&display=swap');
  </style>
</head>
<body dir="rtl" style="margin:0;padding:0;background-color:#ffffff;font-family:'Noto Kufi Arabic', sans-serif; direction: rtl;">
  <table dir="rtl" width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Noto Kufi Arabic', sans-serif; padding: 20px;">
    <tr>
      <td align="center">

          <table width="650" cellpadding="0" cellspacing="0" style="border:1px solid #e0e0e0; border-radius:8px;padding:30px; padding-top: 20px">
          <tr>
            <td align="center" style="padding-bottom: 20px;">
              <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/email-test.png" alt="شعار GTC" style="width: 120px;" />
            </td>
          </tr>
          <tr>
            <td align="center" style="font-size:20px;font-weight:600;color:#253289;padding-bottom:10px;">
            لا تفوت فرصتك للانضمام إلى GTC!
            </td>
          </tr>
          <tr>
            <td align="center" style="font-size:14px;color:#4D4D70;padding-bottom:20px;">
             بدأت الانتقال إلينا ولكن لم تكمله بعد،  أكمل الآن واستمتع بتجربة تداول مميزة!
            </td>
          </tr>
          <tr>
            <td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td>
          </tr>
          <tr>
            <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
              عزيزي ${first_name || "العميل"},
            </td>
          </tr>
          <tr>
            <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
مع GTC، استمتع بتنفيذ سريع للصفقات، وعمليات سحب سريعة، فروق سعرية تنافسية، شروط سكالبينغ عادلة، ومكافآت تزيد أرباحك. تداول بثقة وذكاء.
            </td>
          </tr>
          <tr>
             <td style="font-size:24px;font-weight:600;color:#253289;padding:20px 0px;">
              ${otp}
            </td>
          </tr>
          <tr>
            <td style="font-size:14px;color:#4D4D70;padding-bottom:20px;">
              إذا كانت لديك أي أسئلة أو تحتاج إلى مساعدة إضافية، فلا تتردد في التواصل معنا عبر
              <a href="mailto:support@gtcfx.com" style="color:#0066cc;text-decoration:none;">support@gtcfx.com</a>.
            </td>
          </tr>
          <tr>
            <td style="font-size:14px;color:#4D4D70;padding-bottom:30px;">
              نتمنى لك يومًا سعيدًا،<br>
              فريق GTC
            </td>
          </tr>
          <tr>
            <td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td>
          </tr>
          <tr>
            <td style="padding-top: 0px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="right">
                    <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/email-test.png" alt="شعار GTC" style="width: 100px;" />
                  </td>
                  <td align="left" dir="rtl" style="font-size: 13px; color: #192055; line-height: 25px;">
                    📞 الهاتف: <span dir="ltr">+971 800 667788</span><br />
                    ✉️ البريد الإلكتروني: <a href="mailto:support@gtcfx.com" style="color: #192055; text-decoration: none;">support@gtcfx.com</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
           <!-- Legal Footer -->
            <tr>
  <td style="font-size: 11px; color: #666; padding: 20px 0px; line-height: 1.5;">
    <strong>حافظ على سرية معلومات الدخول الخاصة بحسابك في GTC. لا تشارك كلمة المرور أو تسمح لأي شخص آخر باستخدام حسابك. تذكر، أنت المسؤول عن كل ما يخص بياناتك وكلمات المرور والأمان، سواء الخاصة بحساب التداول أو منطقة العميل أو على منصات التداول.</strong><br/><br/>
    هذا الموقع مملوك ومدار من قبل GTC Global Ltd، وهي شركة محدودة مسجلة في موريشيوس (رقم الشركة: C188049) ومرخصة من قبل هيئة الخدمات المالية في موريشيوس (رقم الترخيص: GB22200292) للتداول كتاجر استثمار SEC-2.1B. العنوان المسجل: Cyberati Lounge, الطابق الأرضي، The Catalyst، Silicon Avenue، 40 Cybercity، 72201 Ebene، جمهورية موريشيوس. الخدمات والمنتجات المالية المروج لها على هذا الموقع مقدمة من GTC Global Ltd وGTC Global Trade Capital Co. Limited، وهي شركة مرخصة من قبل هيئة الخدمات المالية في فانواتو، جمهورية فانواتو، رقم الترخيص: 40354.<br/><br/>
    <strong style="font-weight: 600; color: #000;">GTC Global Ltd وGTC Global Trade Capital Co. Limited</strong> تنتميان إلى مجموعة GTC Financial Group، التي تتكون من مجموعة من الكيانات في جميع أنحاء العالم.<br/><br/>
    الاستثمار في المنتجات المشتقة ينطوي على مخاطر كبيرة وقد لا يكون مناسبًا لجميع المستثمرين. الرافعة المالية في هذه الأدوات يمكن أن تزيد من مستوى المخاطر وتؤدي إلى تعرض محتمل للخسائر. قبل اتخاذ أي قرار بالمشاركة في تداول العملات الأجنبية أو العقود مقابل الفروقات، من الضروري تقييم أهدافك الاستثمارية، ومستوى خبرتك، ومدى تحملك للمخاطر بعناية. يجب أن تستثمر فقط الأموال التي يمكنك تحمل خسارتها. نحن نشجعك بشدة على تثقيف نفسك جيدًا حول المخاطر المرتبطة، وإذا كانت لديك أي استفسارات، اطلب المشورة من مستشار مالي أو ضريبي مستقل.<br/><br/>
    <strong style="font-weight: 600; color: #000;">GTC Global Ltd وGTC Global Trade Capital Co. Limited</strong> لا تقدمان خدمات للأفراد المقيمين في ولايات قضائية معينة و/أو الولايات القضائية التي يكون فيها توزيع هذه الخدمات مخالفًا للقوانين أو اللوائح المحلية.<br/><br/>
    <strong style="font-weight: 600; color: #000;">الكيانات الأخرى في المجموعة:</strong><br/>
    المنتجات والخدمات المالية المقدمة على هذا الموقع <u>لا</u> يتم توفيرها من قبل الكيانات التالية في المجموعة، ولا يمكن اللجوء إلى هذه الكيانات. إذا كنت مهتمًا بالمنتجات والخدمات التي تقدمها كل من الكيانات التالية، يرجى زيارة مواقعهم الإلكترونية الخاصة.<br/><br/>
    <strong style="font-weight: 600; color: #000;">GTC Group LLC-FZ</strong> هي شركة قابضة مسجلة في دبي، الإمارات العربية المتحدة برقم الترخيص التجاري: 2311147.01. مكتبها المسجل في: Business Center 1، الطابق M، فندق الميدان، ند الشبا، دبي، الإمارات العربية المتحدة.<br/><br/>
    <strong style="font-weight: 600; color: #000;">GTC Multi Trading DMCC</strong> هي شركة محدودة مرخصة ومسجلة بموجب قوانين مركز دبي للسلع المتعددة (رقم: DMCC-312687) ومرخصة من قبل هيئة الأوراق المالية والسلع، الإمارات العربية المتحدة (رقم: 20222a2f8307) لممارسة نشاط الوساطة في السلع - التداول والتسوية. العنوان المسجل: الوحدة رقم: 1501، 1 Lake Plaza، القطعة رقم: JLT-PH2-T2A، ابراج بحيرات الجميرا، دبي، الإمارات العربية المتحدة.<br/><br/>
    يتم إدارة كل كيان ضمن مجموعة GTC Financial Group بشكل منفصل. المنتجات والخدمات المالية المقدمة على هذا الموقع يتم توفيرها فقط من قبل GTC Global Ltd وGTC Global Trade Capital Co. Limited.<br/><br/>
    جميع العلامات التجارية ملك لأصحابها المعنيين. جميع الحقوق محفوظة. GTC Global Ltd هي جزء من مجموعة GTC Financial Group، التي تتكون من مجموعة من الكيانات في جميع أنحاء العالم.<br/><br/>
    <strong>تحذير المخاطر:</strong> التداول في المنتجات ذات الرافعة المالية مثل الفوركس والمشتقات قد لا يكون مناسبًا لجميع المستثمرين لأنها تنطوي على درجة عالية من المخاطر على رأس مالك. يرجى التأكد من فهمك الكامل للمخاطر المرتبطة وطلب المشورة المستقلة إذا لزم الأمر.
  </td>
</tr>
          <tr>
            <td style="padding-top: 30px; text-align: center;">
              <table align="center" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 0 5px;"><a href="https://www.facebook.com/GTCFXGlobalTradeCapital"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width="20" /></a></td>
                  <td style="padding: 0 5px;"><a href="https://x.com/GTC_fx"><img src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png" alt="X" width="20" /></a></td>
                  <td style="padding: 0 5px;"><a href="https://www.youtube.com/channel/UCnKWakjm1b9Bm63xgwNFXHA"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" width="20" /></a></td>
                  <td style="padding: 0 5px;"><a href="https://linkedin.com/company/gtcfx-official"><img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" width="20" /></a></td>
                  <td style="padding: 0 5px;"><a href="https://www.instagram.com/gtcfxofficial/"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" width="20" /></a></td>
                  <td style="padding: 0 5px;"><a href="https://api.whatsapp.com/send/?phone=448000488461"><img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" width="20" /></a></td>
                  <td style="padding: 0 5px;"><a href="https://t.me/gtc_vip_signal"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="Telegram" width="20" /></a></td>
                  <td style="padding: 0 5px;"><a href="https://www.tiktok.com/@gtcgroup_official"><img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" alt="TikTok" width="20" /></a></td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" dir="rtl" style="font-size: 12px; color: #666666; padding-top: 15px; padding-bottom: 30px;">
              &copy; حقوق النشر 2025 GTCFX – جميع الحقوق محفوظة
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
};
export const englishOtpEmailTemplate = (first_name, otp) => {
    return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Don’t Miss Your Chance to Switch to GTC!</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
    </style>
  </head>
  <body style="margin:0;padding:0;background-color:#ffffff;font-family:'Poppins',sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Poppins', sans-serif; padding: 20px;">
      <tr>
        <td align="center">
       
          <table width="650" cellpadding="0" cellspacing="0" style="border:1px solid #e0e0e0; border-radius:8px;padding:30px; padding-top: 20px">
            <tr>
              <td align="center" style="padding-bottom: 20px;">
                <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/logo-email.jpg" alt="GTC Logo" style="width: 160px;" />
              </td>
            </tr>
            <tr>
              <td align="center" style="font-size:20px;font-weight:600;color:#253289;padding-bottom:10px;">
                Don’t Miss Your Chance to <br>

Switch to GTC!
              </td>
            </tr>
            <tr>
              <td align="center" style="font-size:14px;color:#4D4D70;padding-bottom:20px;">
                Confirm your email by entering the OTP that’s in this email.
              </td>
            </tr>
            <tr><td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td></tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
                Dear ${first_name || "Client"},
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
                You started switching to GTC but didn’t finish.
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
                Here’s the OTP that you’ll need to enter into the form.
              </td>
            </tr>
            <tr>
              <td style="font-size:24px;font-weight:600;color:#253289;padding:20px 0px;">
                ${otp}
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:20px;">
                If you need any help or assistance, simply reach out to our amazing Customer Care team via our Live Chat feature that’s on our website, 
                <a href="https://GTCFX.com">https://GTCFX.com</a>.
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
                Switch to GTC and experience tighter spreads, instant withdrawals, fair scalping rules, and better bonuses. Trade smarter with a broker that gets you.
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:30px;">
                Have a great day,<br>Your GTC Family
              </td>
            </tr>
            <tr><td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td></tr>
            <tr>
              <td style="padding-top: 0px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="left">
                      <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/logo-email.jpg" alt="GTC Logo" style="width: 160px;" />
                    </td>
                    <td align="right" style="font-size: 13px; color: #192055; line-height: 25px;">
                      📞 Phone: +971 800 667788<br/>
                      ✉️ Email: <a href="mailto:support@gtcfx.com" style="color: #192055; text-decoration: none;">support@gtcfx.com</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- Add Legal + Social sections here if needed -->
             <!-- Legal Footer -->
<tr>
  <td style="font-size: 11px; color: #666; padding: 20px 0px; line-height: 1.5;">
  <strong>Your login account and password must be kept confidential at all times. Passwords should never be shared or exposed to others. You should never let anyone else access your GTC trading account, or do anything else that might jeopardize the security of your account.</strong><br/><br/>
    <strong>You’re responsible for the confidentiality and use of all IDs, passwords, and other security data, methods, and devices in connection with the GTC client zone and the GTC trading platform(s).</strong> 
    <br/><br/>
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
</html>`;
};
export const vitnamoesOtpEmailTemplate = (first_name, otp) => {
    return `<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <title>Bạn đã đăng ký Cuộc thi GTC Demo</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
    </style>
  </head>
  <body style="margin:0;padding:0;background-color:#ffffff;font-family:'Poppins',sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Poppins', sans-serif; padding: 20px;">
      <tr>
        <td align="center">
            <table width="650" cellpadding="0" cellspacing="0" style="border-left:1px solid #e0e0e0; border-bottom: none; border-right:1px solid #e0e0e0; border-top-left-radius:8px; border-top-right-radius:8px;">
            <tr>
        <td align="center">
          <p style="margin: 0px; margin-bottom: 20px;"><img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/otp1.webp" alt="GTC Logo" style="width: 100%;border-radius:8px;" /></p>
         </td>
         </tr>
         </table>
          <table width="650" cellpadding="0" cellspacing="0" style="border:1px solid #e0e0e0; border-top:none; border-radius:8px;padding:30px; padding-top: 0px">
            <tr>
              <td align="center" style="padding-bottom: 20px;">
                <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/logo-email.jpg" alt="GTC Logo" style="width: 160px;" />
              </td>
            </tr>
            <tr>
              <td align="center" style="font-size:20px;font-weight:600;color:#253289;padding-bottom:10px;">
                Bạn đã đăng ký <br>Cuộc thi GTC Demo
              </td>
            </tr>
            <tr>
              <td align="center" style="font-size:14px;color:#4D4D70;padding-bottom:20px;">
                Xác nhận email của bạn bằng cách nhập mã OTP trong email này.
              </td>
            </tr>
            <tr><td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td></tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
                Kính gửi ${first_name || "Khách hàng"},
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
                Cảm ơn bạn một lần nữa vì đã đăng ký Cuộc thi Giao dịch Demo GTC.
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
                Đây là mã OTP bạn cần nhập vào biểu mẫu.
              </td>
            </tr>
            <tr>
              <td style="font-size:24px;font-weight:600;color:#253289;padding:20px 0px;">
                ${otp}
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:20px;">
                Nếu bạn cần bất kỳ sự giúp đỡ nào, hãy liên hệ với đội ngũ Chăm sóc Khách hàng tuyệt vời của chúng tôi qua tính năng Trò chuyện Trực tiếp trên trang web của chúng tôi, 
                <a href="https://GTCFX.com">https://GTCFX.com</a>.
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
                Chúng tôi hy vọng bạn hào hứng với Giải đấu Giao dịch Demo GTC sắp tới!
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:30px;">
                Chúc bạn một ngày tốt lành,<br>Gia đình GTC của bạn
              </td>
            </tr>
            <tr><td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td></tr>
            <tr>
              <td style="padding-top: 0px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="left">
                      <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/logo-email.jpg" alt="GTC Logo" style="width: 160px;" />
                    </td>
                    <td align="right" style="font-size: 13px; color: #192055; line-height: 25px;">
                      📞 Điện thoại: +971 800 667788<br/>
                      ✉️ Email: <a href="mailto:support@gtcfx.com" style="color: #192055; text-decoration: none;">support@gtcfx.com</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- Add Legal + Social sections here if needed -->
             <!-- Legal Footer -->
<tr>
  <td style="font-size: 11px; color: #666; padding: 20px 0px; line-height: 1.5;">
  <strong>Tài khoản đăng nhập và mật khẩu của bạn phải được giữ bí mật mọi lúc. Không bao giờ chia sẻ hoặc tiết lộ mật khẩu cho người khác. Bạn không bao giờ được cho phép bất kỳ ai khác truy cập vào tài khoản giao dịch GTC của mình hoặc thực hiện bất kỳ hành động nào có thể gây nguy hiểm cho bảo mật tài khoản của bạn.</strong><br/><br/>
    <strong>Bạn chịu trách nhiệm về tính bảo mật và việc sử dụng tất cả ID, mật khẩu và dữ liệu bảo mật khác, phương pháp và thiết bị liên quan đến khu vực khách hàng GTC và (các) nền tảng giao dịch GTC.</strong> 
    <br/><br/>
    Trang web này thuộc sở hữu và được điều hành bởi GTC Global Ltd, một công ty trách nhiệm hữu hạn được thành lập tại Mauritius (số công ty: C188049) và được cấp phép bởi Ủy ban Dịch vụ Tài chính Mauritius (Số GB22200292) để giao dịch với tư cách là Nhà môi giới Đầu tư SEC-2.1B. Địa chỉ đăng ký: Cyberati Lounge, Tầng trệt, The Catalyst, Silicon Avenue, 40 Cybercity, 72201 Ebene, Cộng hòa Mauritius. Các dịch vụ và sản phẩm tài chính được quảng bá trên trang web này được cung cấp bởi GTC Global Ltd và GTC Global Trade Capital Co. Limited, một công ty được ủy quyền bởi Ủy ban Dịch vụ Tài chính Vanuatu của Cộng hòa Vanuatu, Số Giấy phép Công ty: 40354.
    <br/><br/>
    <strong style="font-weight: 600; color: #000;">GTC Global Ltd và GTC Global Trade Capital Co. Limited</strong> thuộc Tập đoàn Tài chính GTC, bao gồm một nhóm thực thể trên toàn cầu.
    <br/><br/>
    Đầu tư vào các sản phẩm phái sinh có rủi ro đáng kể và có thể không phù hợp với tất cả nhà đầu tư. Sử dụng đòn bẩy trong các công cụ này có thể làm tăng mức độ rủi ro và khả năng tiếp xúc với tổn thất. Trước khi đưa ra bất kỳ quyết định nào để tham gia giao dịch ngoại hối hoặc CFD, điều cần thiết là bạn phải đánh giá cẩn thận mục tiêu đầu tư, mức độ kinh nghiệm và khả năng chấp nhận rủi ro của mình. Bạn chỉ nên đầu tư các khoản tiền mà bạn có thể để mất. Chúng tôi rất khuyến khích bạn nên tìm hiểu kỹ lưỡng về các rủi ro liên quan và nếu có bất kỳ câu hỏi nào, hãy tìm kiếm lời khuyên từ cố vấn tài chính hoặc thuế độc lập.
    <br/><br/>
    <strong style="font-weight: 600; color: #000;">GTC Global Ltd và GTC Global Trade Capital Co. Limited</strong> không cung cấp dịch vụ cho cá nhân cư trú tại các khu vực pháp lý cụ thể và/hoặc các khu vực pháp lý nơi việc phân phối các dịch vụ như vậy sẽ trái với luật hoặc quy định địa phương.
    <br/><br/>
    <strong style="font-weight: 600; color: #000;">Các Thực thể Khác trong Tập đoàn:</strong><br/>
    Các sản phẩm và dịch vụ tài chính được cung cấp trên trang web này <u>KHÔNG</u> được cung cấp bởi các thực thể tập đoàn sau đây và không thể khiếu nại với các thực thể sau. Nếu bạn quan tâm đến các sản phẩm và dịch vụ được cung cấp bởi từng thực thể sau, vui lòng truy cập trang web tương ứng của họ.
    <br/><br/>
    <strong style="font-weight: 600; color: #000;">GTC Group LLC-FZ</strong> là một công ty nắm giữ được thành lập tại Dubai, Các Tiểu vương quốc Ả Rập Thống nhất với Số Giấy phép Kinh doanh: 2311147.01. Văn phòng đăng ký tại Business Center 1, Tầng M, Meydan Hotel, Nad Al Sheba, Dubai, Các Tiểu vương quốc Ả Rập Thống nhất.
    <br/><br/>
    <strong style="font-weight: 600; color: #000;">GTC Multi Trading DMCC</strong> là một công ty trách nhiệm hữu hạn được cấp phép và thành lập theo luật của Trung tâm Đa Hàng hóa Dubai (Số DMCC-312687) và được cấp phép bởi Cơ quan Chứng khoán và Hàng hóa, Các Tiểu vương quốc Ả Rập Thống nhất (Số 202200000007) để thực hiện hoạt động Môi giới Hàng hóa - Giao dịch và Thanh toán. Địa chỉ đăng ký: Unit No: 1501, 1 Lake Plaza, Plot No: JLT-PH2-T2A, Jumeirah Lakes Towers, Dubai, Các Tiểu vương quốc Ả Rập Thống nhất.
    <br/><br/>
    Mỗi thực thể trong Tập đoàn Tài chính GTC được quản lý riêng biệt. Các sản phẩm và dịch vụ tài chính được cung cấp trên trang web này CHỈ được cung cấp bởi GTC Global Ltd và GTC Global Trade Capital Co. Limited.
    <br/><br/>
    Tất cả các nhãn hiệu là tài sản của chủ sở hữu tương ứng. Mọi quyền được bảo lưu. GTC Global Ltd là một phần của Tập đoàn Tài chính GTC, bao gồm một nhóm thực thể trên toàn cầu.
    <br/><br/>
    <strong>Cảnh báo Rủi ro:</strong> Giao dịch các sản phẩm có đòn bẩy như forex và phái sinh có thể không phù hợp với tất cả các nhà đầu tư vì chúng mang lại mức độ rủi ro cao đối với vốn của bạn. Vui lòng đảm bảo rằng bạn hiểu đầy đủ các rủi ro liên quan và tìm kiếm lời khuyên độc lập nếu cần thiết.
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
    &copy; Bản quyền 2025 GTCFX – Mọi quyền được bảo lưu
  </td>
</tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
};
export const chineseOtpEmailTemplate = (first_name, otp) => {
    return `<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <title>您已注册 GTC 模拟交易大赛</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
    </style>
  </head>
  <body style="margin:0;padding:0;background-color:#ffffff;font-family:'Poppins',sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Poppins', sans-serif; padding: 20px;">
      <tr>
        <td align="center">
  
          <table width="650" cellpadding="0" cellspacing="0" style="border:1px solid #e0e0e0; border-radius:8px;padding:30px; padding-top: 20px">
            <tr>
              <td align="center" style="padding-bottom: 20px;">
                <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/logo-email.jpg" alt="GTC Logo" style="width: 160px;" />
              </td>
            </tr>
            <tr>
              <td align="center" style="font-size:20px;font-weight:600;color:#253289;padding-bottom:10px;">
                更换至GTC  享更快出金与更低点差
              </td>
            </tr>
            <tr>
              <td align="center" style="font-size:14px;color:#4D4D70;padding-bottom:20px;">
               选择GTC，体验更低点差、即时出金、公平剥头皮规则及更优赠金<br>>与懂您的经纪商共启智能交易
              </td>
            </tr>
            <tr><td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td></tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
                尊敬的 ${first_name || "客户"},
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
              您已开始向GTC迁移但尚未完成流程。为保障您的交易权益，请优先处理以下关键步骤：


              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
                以下是您需要输入到表单中的 OTP：
              </td>
            </tr>
            <tr>
              <td style="font-size:24px;font-weight:600;color:#253289;padding:20px 0px;">
                ${otp}
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:20px;">
                如果您需要任何帮助，请通过我们网站的在线客服与客户服务团队联系： 
                <a href="https://GTCFX.com">https://GTCFX.com</a>。
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
               转向GTC，即刻体验更低点差、即时出金、公平剥头皮规则与更优赠金。选择懂您的经纪商，开启智能交易新时代。
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:30px;">
                祝您交易愉快，<br>您的 GTC 团队
              </td>
            </tr>
            <tr><td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td></tr>
            <tr>
              <td style="padding-top: 0px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="left">
                      <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/logo-email.jpg" alt="GTC Logo" style="width: 160px;" />
                    </td>
                    <td align="right" style="font-size: 13px; color: #192055; line-height: 25px;">
                      📞 电话: +971 800 667788<br/>
                      ✉️ 邮箱: <a href="mailto:support@gtcfx.com" style="color: #192055; text-decoration: none;">support@gtcfx.com</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
              <!-- Legal Footer -->
            <tr>
              <td style="font-size: 11px; color: #666; padding: 20px 0px; line-height: 1.5;">
                <strong>账户安全提醒</strong><br/>
                1. 请妥善保管账号密码，切勿透露给他人<br/>
                2. 禁止他人操作您的账户，防范安全风险<br/>
                3. 您需对账户密码及操作行为全权负责<br/><br/>
                本网站由GTC Global Ltd拥有和运营，该公司为一家在毛里求斯注册成立的有限责任公司（公司编号：C188049），并获得毛里求斯金融服务委员会（许可证编号：GB22200292）的许可，作为SEC-2.1B投资交易商进行交易。注册地址：Cyberati Lounge，地面层，The Catalyst，Silicon Avenue，40 Cybercity，72201 Ebene，毛里求斯共和国。本网站推广的金融服务和产品由GTC Global Ltd和GTC Global Trade Capital Co. Limited提供，后者是一家由瓦努阿图共和国瓦努阿图金融服务委员会授权的公司，公司许可证编号：40354。<br/><br/>
                <strong style="font-weight: 600; color: #000;">GTC Global Ltd和GTC Global Trade Capital Co. Limited</strong> 隶属于GTC金融集团，该集团由全球多家实体组成。<br/><br/>
                投资衍生品具有重大风险，可能不适合所有投资者。这些工具的杠杆作用可能会增加风险水平和潜在损失敞口。在决定参与外汇交易或差价合约（CFD）之前，仔细评估您的投资目标、经验水平和风险承受能力至关重要。您应仅投资您能承受损失的资金。我们强烈建议您全面了解相关风险，并在有任何疑问时，向独立的财务或税务顾问寻求建议。<br/><br/>
                <strong style="font-weight: 600; color: #000;">GTC Global Ltd和GTC Global Trade Capital Co. Limited</strong> 不向居住在特定司法管辖区和/或分发此类服务违反当地法律或法规的司法管辖区的个人提供服务。<br/><br/>
                <strong style="font-weight: 600; color: #000;">集团其他实体：</strong><br/>
                本网站提供的金融产品和服务<u>不</u>由以下集团实体提供，且无法向以下实体追索。如果您对以下实体提供的金融产品和服务感兴趣，请访问其各自的网站。<br/><br/>
                <strong style="font-weight: 600; color: #000;">GTC Group LLC-FZ</strong> 是一家在阿拉伯联合酋长国迪拜注册成立的控股公司，商业许可证编号：2311147.01。其注册办公地址为：Business Center 1，M层，Meydan Hotel，Nad Al Sheba，迪拜，阿拉伯联合酋长国。<br/><br/>
                <strong style="font-weight: 600; color: #000;">GTC Multi Trading DMCC</strong> 是一家根据迪拜多种商品中心（DMCC）法律许可和注册的有限责任公司（编号：DMCC-312687），并获得阿拉伯联合酋长国证券和商品管理局的许可（编号：20222a2f8307），从事商品经纪-交易和清算活动。注册地址：Unit No: 1501，1 Lake Plaza，Plot No: JLT-PH2-T2A，Jumeirah Lakes Towers，迪拜，阿拉伯联合酋长国。<br/><br/>
                GTC金融集团内的每个实体均独立管理。本网站提供的金融产品和服务仅由GTC Global Ltd和GTC Global Trade Capital Co. Limited提供。<br/><br/>
                所有商标均为其各自所有者的财产。保留所有权利。GTC Global Ltd是GTC金融集团的一部分，该集团由全球多家实体组成。<br/><br/>
                <strong>风险提示：</strong> 交易外汇和衍生品等杠杆产品可能不适合所有投资者，因为它们对您的资本构成高风险。请确保您充分了解相关风险，并在必要时寻求独立的建议。
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
                &copy; Copyright 2025 GTCFX – 保留所有权利
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
};

export const spanishOtpEmailTemplate = (first_name, otp) => {
    return `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Te has registrado para la Competencia Demo de GTC</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
    </style>
  </head>
  <body style="margin:0;padding:0;background-color:#ffffff;font-family:'Poppins',sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Poppins', sans-serif; padding: 20px;">
      <tr>
        <td align="center">
      
          <table width="650" cellpadding="0" cellspacing="0" style="border:1px solid #e0e0e0; border-radius:8px;padding:30px; padding-top: 20px">
            <!-- Logo -->
            <tr>
              <td align="center" style="padding-bottom: 20px;">
                <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/logo-email.jpg" alt="Logo GTC" style="width: 160px;" />
              </td>
            </tr>

            <!-- Heading -->
            <tr>
              <td align="center" style="font-size:20px;font-weight:600;color:#253289;padding-bottom:10px;">
                ¡No pierdas tu oportunidad <br>de cambiarte a GTC!
              </td>
            </tr>
            <tr>
              <td align="center" style="font-size:14px;color:#4D4D70;padding-bottom:20px;">
                Confirma tu correo electrónico ingresando el código OTP incluido en este correo.
              </td>
            </tr>

            <tr><td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td></tr>

            <!-- Greeting & OTP -->
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
                Estimado/a ${first_name || "Cliente"},
              </td>
            </tr>
        
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
                Este es el código OTP que deberás ingresar en el formulario:
              </td>
            </tr>
            <tr>
              <td style="font-size:24px;font-weight:600;color:#253289;padding:20px 0px;">
                ${otp}
              </td>
            </tr>

            <!-- Support Info -->
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:20px;">
                Si necesitas ayuda o asistencia, no dudes en contactar a nuestro equipo de Atención al Cliente a través del chat en vivo en nuestro sitio web: 
                <a href="https://GTCFX.com">https://GTCFX.com</a>.
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
                Cambia a GTC y experimenta spreads más ajustados, retiros instantáneos, reglas de scalping justas y mejores bonificaciones. Comercia de manera más inteligente con un bróker que te entiende.
              </td>
            </tr>

            <!-- Signoff -->
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:30px;">
                Que tengas un excelente día,<br>
                Tu familia GTC
              </td>
            </tr>

            <tr><td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td></tr>

            <!-- Contact Info -->
            <tr>
              <td style="padding-top: 0px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="left">
                      <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/logo-email.jpg" alt="Logo GTC" style="width: 160px;" />
                    </td>
                    <td align="right" style="font-size: 13px; color: #192055; line-height: 25px;">
                      📞 Teléfono: +971 800 667788<br/>
                      ✉️ Correo: <a href="mailto:support@gtcfx.com" style="color: #192055; text-decoration: none;">support@gtcfx.com</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Legal Footer -->
            <tr>
              <td style="font-size: 11px; color: #666; padding: 20px 0px; line-height: 1.5;">
                <strong>Importante:</strong><br/>
                Tu nombre de usuario y contraseña deben ser confidenciales en todo momento. Las contraseñas nunca deben ser compartidas ni expuestas a otras personas. Nunca debes permitir que nadie más acceda a tu cuenta de trading de GTC o haga algo que pueda poner en riesgo la seguridad de tu cuenta.<br/>
                Eres responsable de la confidencialidad y el uso de todos tus ID, contraseñas y otros datos, métodos y dispositivos de seguridad vinculados a la Zona de Clientes de GTC y a la(s) plataforma(s) de trading de GTC.<br/><br/>
                Este sitio web es propiedad y está operado por GTC Global Ltd, una empresa limitada registrada en Mauricio (número de empresa: C188049) y licenciada por la Comisión de Servicios Financieros de Mauricio (No. GB22200292) para operar como Dealer de Inversión SEC-2.1B. Dirección registrada: Cyberati Lounge, Planta Baja, The Catalyst, Silicon Avenue, 40 Cybercity, 72201 Ebene, República de Mauricio. Los servicios y productos financieros promocionados en este sitio web son ofrecidos por GTC Global Ltd y GTC Global Trade Capital Co. Limited, una empresa autorizada por la Comisión de Servicios Financieros de Vanuatu, República de Vanuatu, Número de Licencia de Empresa: 40354.<br/><br/>
                <strong style="font-weight: 600; color: #000;">GTC Global Ltd y GTC Global Trade Capital Co. Limited</strong> forman parte del GTC Financial Group, que consiste en un grupo de entidades en todo el mundo.<br/><br/>
                Invertir en productos derivados conlleva riesgos significativos y puede no ser adecuado para todos los inversores. El apalancamiento en estos instrumentos puede aumentar el nivel de riesgo y la exposición potencial a pérdidas. Antes de tomar cualquier decisión para participar en el trading de divisas extranjeras o CFDs, es esencial evaluar cuidadosamente tus objetivos de inversión, nivel de experiencia y tolerancia al riesgo. Solo debes invertir fondos que puedas permitirte perder. Te recomendamos encarecidamente que te informes completamente sobre los riesgos asociados y, si tienes alguna duda, busques el asesoramiento de un consultor financiero o fiscal independiente.<br/><br/>
                <strong style="font-weight: 600; color: #000;">GTC Global Ltd y GTC Global Trade Capital Co. Limited</strong> no prestan servicios a personas residentes en jurisdicciones específicas y/o jurisdicciones donde la distribución de dichos servicios sea contraria a la ley o regulación local.<br/><br/>
                <strong style="font-weight: 600; color: #000;">Otras Entidades del Grupo:</strong><br/>
                Los productos y servicios financieros ofrecidos en este sitio web <u>NO</u> son proporcionados por las siguientes entidades del grupo, y no se puede recurrir a dichas entidades. Si estás interesado en los productos y servicios ofrecidos por cada una de las siguientes entidades, visita sus respectivos sitios web.<br/><br/>
                <strong style="font-weight: 600; color: #000;">GTC Group LLC-FZ</strong> es una empresa holding registrada en Dubái, Emiratos Árabes Unidos, con Número de Licencia Comercial: 2311147.01. Su oficina registrada está en Business Center 1, Planta M, Hotel Meydan, Nad Al Sheba, Dubái, Emiratos Árabes Unidos.<br/><br/>
                <strong style="font-weight: 600; color: #000;">GTC Multi Trading DMCC</strong> es una empresa limitada licenciada y registrada bajo las leyes del Dubai Multi Commodities Centre (No. DMCC-312687) y licenciada por la Autoridad de Valores y Commodities, Emiratos Árabes Unidos (No. 20222a2f8307) para practicar la actividad de Correduría de Commodities - Trading y Liquidación. Dirección registrada: Unidad No: 1501, 1 Lake Plaza, Parcela No: JLT-PH2-T2A, Jumeirah Lakes Towers, Dubái, Emiratos Árabes Unidos.<br/><br/>
                Cada una de las entidades dentro del GTC Financial Group se gestiona de forma separada. Los productos y servicios financieros ofrecidos en este sitio web son SOLAMENTE proporcionados por GTC Global Ltd y GTC Global Trade Capital Co. Limited.<br/><br/>
                Todas las marcas comerciales son propiedad de sus respectivos dueños. Todos los derechos reservados. GTC Global Ltd forma parte del GTC Financial Group, que consiste en un grupo de entidades en todo el mundo.<br/><br/>
                <strong>Advertencia de Riesgo:</strong> El trading de productos apalancados, como forex y derivados, puede no ser adecuado para todos los inversores, ya que conlleva un alto grado de riesgo para tu capital. Asegúrate de comprender completamente los riesgos involucrados y busca asesoramiento independiente si es necesario.
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
                &copy; Copyright 2025 GTCFX – Todos los derechos reservados
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
};
export const portugueseOtpEmailTemplate = (first_name, otp) => {
    return `<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8" />
    <title>Você se registrou na Competição Demo da GTC</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
    </style>
  </head>
  <body style="margin:0;padding:0;background-color:#ffffff;font-family:'Poppins',sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Poppins', sans-serif; padding: 20px;">
      <tr>
        <td align="center">
       
          <table width="650" cellpadding="0" cellspacing="0" style="border:1px solid #e0e0e0; border-radius:8px;padding:30px; padding-top: 20px">
            <!-- Logo -->
            <tr>
              <td align="center" style="padding-bottom: 20px;">
                <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/logo-email.jpg" alt="Logo da GTC" style="width: 160px;" />
              </td>
            </tr>

            <!-- Heading -->
            <tr>
              <td align="center" style="font-size:20px;font-weight:600;color:#2a2f83;padding-bottom:10px;">
               Não perca sua chance de mudar para a GTC!
              </td>
            </tr>
            <tr>
              <td align="center" style="font-size:14px;color:#4D4D70;padding-bottom:20px;">
                Confirme seu e-mail inserindo o código OTP fornecido abaixo.
              </td>
            </tr>

            <tr><td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td></tr>

            <!-- Greeting & OTP -->
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
                Prezado(a) ${first_name || "Cliente"},
              </td>
            </tr>
           
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
                Aqui está o seu código OTP para inserir no formulário:
              </td>
            </tr>
            <tr>
              <td style="font-size:24px;font-weight:600;color:#253289;padding:20px 0px;">
                ${otp}
              </td>
            </tr>

            <!-- Support Info -->
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:20px;">
                Se precisar de ajuda ou suporte, entre em contato com a nossa equipe de Atendimento ao Cliente através do chat ao vivo disponível em nosso site: 
                <a href="https://GTCFX.com">https://GTCFX.com</a>.
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
                Mude para a GTC e experimente spreads mais apertados, retiradas instantâneas, regras de scalping justas e melhores bônus. Negocie de forma mais inteligente com um corretor que te entende.
              </td>
            </tr>

            <!-- Signoff -->
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:30px;">
                Tenha um ótimo dia,<br>
                Sua família GTC
              </td>
            </tr>

            <tr><td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td></tr>

            <!-- Contact Info -->
            <tr>
              <td style="padding-top: 0px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="left">
                      <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/logo-email.jpg" alt="Logo da GTC" style="width: 160px;" />
                    </td>
                    <td align="right" style="font-size: 13px; color: #192055; line-height: 25px;">
                      📞 Telefone: +971 800 667788<br/>
                      ✉️ E-mail: <a href="mailto:support@gtcfx.com" style="color: #192055; text-decoration: none;">support@gtcfx.com</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
           <tr>
  <td style="font-size: 11px; color: #666; padding: 20px 0px; line-height: 1.5;">
    <strong>Importante:</strong><br/>
    Sua conta e senha de login devem ser mantidas confidenciais o tempo todo. As senhas nunca devem ser compartilhadas ou expostas a terceiros. Você nunca deve permitir que outra pessoa acesse sua conta de trading GTC ou faça qualquer coisa que possa comprometer a segurança da sua conta.<br/>
    Você é responsável pela confidencialidade e pelo uso de todos os IDs, senhas e demais dados, métodos e dispositivos de segurança relacionados à área do cliente GTC e às plataformas de trading GTC.<br/><br/>
    Este site é de propriedade e operado pela GTC Global Ltd, uma empresa limitada incorporada em Maurício (número da empresa: C188049) e licenciada pela Comissão de Serviços Financeiros de Maurício (No. GB22200292) para atuar como Dealer de Investimento SEC-2.1B. Endereço registrado: Cyberati Lounge, Térreo, The Catalyst, Silicon Avenue, 40 Cybercity, 72201 Ebene, República de Maurício. Os serviços e produtos financeiros promovidos neste site são oferecidos pela GTC Global Ltd e GTC Global Trade Capital Co. Limited, uma empresa autorizada pela Comissão de Serviços Financeiros de Vanuatu, República de Vanuatu, Número de Licença da Empresa: 40354.<br/><br/>
    <strong style="font-weight: 600; color: #000;">GTC Global Ltd e GTC Global Trade Capital Co. Limited</strong> pertencem ao GTC Financial Group, que consiste em um grupo de entidades em todo o mundo.<br/><br/>
    Investir em produtos derivativos envolve riscos significativos e pode não ser adequado para todos os investidores. A alavancagem nesses instrumentos pode aumentar o nível de risco e a potencial exposição a perdas. Antes de tomar qualquer decisão para se engajar em trading de câmbio estrangeiro ou CFDs, é essencial avaliar cuidadosamente seus objetivos de investimento, nível de experiência e tolerância ao risco. Você deve investir apenas fundos que pode se dar ao luxo de perder. Encorajamos fortemente que você se informe completamente sobre os riscos associados e, se tiver alguma dúvida, procure aconselhamento de um consultor financeiro ou tributário independente.<br/><br/>
    <strong style="font-weight: 600; color: #000;">GTC Global Ltd e GTC Global Trade Capital Co. Limited</strong> não fornecem serviços para indivíduos residentes em jurisdições específicas e/ou jurisdições onde a distribuição de tais serviços seria contrária à lei ou regulamentação local.<br/><br/>
    <strong style="font-weight: 600; color: #000;">Outras Entidades do Grupo:</strong><br/>
    Os produtos e serviços financeiros oferecidos neste site <u>NÃO</u> são fornecidos pelas seguintes entidades do grupo, e nenhum recurso contra as seguintes entidades está disponível. Se você estiver interessado nos produtos e serviços oferecidos por cada uma das seguintes entidades, visite seus respectivos sites.<br/><br/>
    <strong style="font-weight: 600; color: #000;">GTC Group LLC-FZ</strong> é uma empresa holding incorporada em Dubai, Emirados Árabes Unidos, com Número de Licença Comercial: 2311147.01. Seu escritório registrado está em Business Center 1, Térreo, Meydan Hotel, Nad Al Sheba, Dubai, Emirados Árabes Unidos.<br/><br/>
    <strong style="font-weight: 600; color: #000;">GTC Multi Trading DMCC</strong> é uma empresa limitada licenciada e incorporada sob as leis do Dubai Multi Commodities Centre (No. DMCC-312687) e licenciada pela Autoridade de Valores Mobiliários e Commodities, Emirados Árabes Unidos (No. 20222a2f8307) para praticar a atividade de Corretagem de Commodities - Trading e Liquidação. Endereço registrado: Unidade No: 1501, 1 Lake Plaza, Lote No: JLT-PH2-T2A, Jumeirah Lakes Towers, Dubai, Emirados Árabes Unidos.<br/><br/>
    Cada uma das entidades dentro do GTC Financial Group é gerenciada separadamente. Os produtos e serviços financeiros oferecidos neste site são APENAS fornecidos pela GTC Global Ltd e GTC Global Trade Capital Co. Limited.<br/><br/>
    Todas as marcas registradas são propriedade de seus respectivos proprietários. Todos os direitos reservados. GTC Global Ltd faz parte do GTC Financial Group, que consiste em um grupo de entidades em todo o mundo.<br/><br/>
    <strong>Aviso de Risco:</strong> O trading de produtos alavancados, como forex e derivativos, pode não ser adequado para todos os investidores, pois envolve um alto grau de risco para seu capital. Certifique-se de compreender completamente os riscos envolvidos e procure aconselhamento independente, se necessário.
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
                &copy; Copyright 2025 GTCFX – Todos os direitos reservados
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
};
export const russianOtpEmailTemplate = (first_name, otp) => {
    return `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Вы зарегистрировались на демо-турнир GTC</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
    </style>
  </head>
  <body style="margin:0;padding:0;background-color:#ffffff;font-family:'Poppins',sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Poppins', sans-serif; padding: 20px;">
      <tr>
        <td align="center">
 
          <table width="650" cellpadding="0" cellspacing="0" style="border:1px solid #e0e0e0; border-radius:8px;padding:30px; padding-top: 20px">
            <!-- Logo -->
            <tr>
              <td align="center" style="padding-bottom: 20px;">
                <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/logo-email.jpg" alt="Логотип GTC" style="width: 160px;" />
              </td>
            </tr>

            <!-- Heading -->
            <tr>
              <td align="center" style="font-size:20px;font-weight:600;color:#2a2f83;padding-bottom:10px;">
              Не упустите свой шанс перейти на GTC!
              </td>
            </tr>
            <tr>
              <td align="center" style="font-size:14px;color:#4D4D70;padding-bottom:20px;">
                Подтвердите свой адрес электронной почты, введя OTP-код, указанный ниже.
              </td>
            </tr>

            <tr><td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td></tr>

            <!-- Greeting & OTP -->
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
                Уважаемый(ая) ${first_name || "Клиент"},
              </td>
            </tr>
          
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
                Ниже вы найдете одноразовый код подтверждения (OTP), который необходимо ввести в форму:
              </td>
            </tr>
            <tr>
              <td style="font-size:24px;font-weight:600;color:#253289;padding:20px 0px;">
                ${otp}
              </td>
            </tr>

            <!-- Support Info -->
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:20px;">
                Если вам нужна помощь, пожалуйста, свяжитесь с нашей службой поддержки через онлайн-чат на сайте <a href="https://GTCFX.com">https://GTCFX.com</a>.
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
               Перейдите на GTC и наслаждайтесь более узкими спредами, мгновенными выводами, справедливыми правилами скальпинга и лучшими бонусами. Торгуйте умнее с брокером, который вас понимает.
              </td>
            </tr>

            <!-- Signoff -->
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:30px;">
                Хорошего дня!<br>
                Ваша команда GTC
              </td>
            </tr>

            <tr><td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td></tr>

            <!-- Contact Info -->
            <tr>
              <td style="padding-top: 0px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="left">
                      <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/logo-email.jpg" alt="GTC Logo" style="width: 160px;" />
                    </td>
                    <td align="right" style="font-size: 13px; color: #192055; line-height: 25px;">
                      📞 Телефон: +971 800 667788<br/>
                      ✉️ Email: <a href="mailto:support@gtcfx.com" style="color: #192055; text-decoration: none;">support@gtcfx.com</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Legal Footer -->
            <tr>
              <td style="font-size: 11px; color: #666; padding: 20px 0px; line-height: 1.5;">
                <strong>Важно!</strong><br/>
                Ваш логин и пароль должны всегда храниться в тайне. Никогда не передавайте и не показывайте их другим. Никто, кроме вас, не должен иметь доступ к вашему торговому счёту GTC или выполнять действия, которые могут поставить под угрозу его безопасность.<br/>
                Вы несёте ответственность за конфиденциальность и использование всех ID, паролей и других методов и устройств безопасности в связи с Личным кабинетом GTC и торговой платформой(-ами) GTC.<br/><br/>
                Этот веб-сайт принадлежит и управляется GTC Global Ltd, компанией с ограниченной ответственностью, зарегистрированной в Маврикии (номер компании: C188049) и лицензированной Комиссией по финансовым услугам Маврикия (№ GB22200292) для торговли в качестве инвестиционного дилера SEC-2.1B. Зарегистрированный адрес: Cyberati Lounge, Первый этаж, The Catalyst, Silicon Avenue, 40 Cybercity, 72201 Ebene, Республика Маврикий. Финансовые услуги и продукты, продвигаемые на этом сайте, предоставляются GTC Global Ltd и GTC Global Trade Capital Co. Limited, компанией, уполномоченной Комиссией по финансовым услугам Вануату, Республика Вануату, номер лицензии компании: 40354.<br/><br/>
                <strong style="font-weight: 600; color: #000;">GTC Global Ltd и GTC Global Trade Capital Co. Limited</strong> входят в GTC Financial Group, которая состоит из группы организаций по всему миру.<br/><br/>
                Инвестирование в производные продукты сопряжено со значительными рисками и может не подходить для всех инвесторов. Использование кредитного плеча в этих инструментах может увеличить уровень риска и потенциальные убытки. Перед принятием решения об участии в торговле иностранной валютой или CFD необходимо тщательно оценить свои инвестиционные цели, уровень опыта и допустимый уровень риска. Вы должны инвестировать только те средства, которые можете позволить себе потерять. Мы настоятельно рекомендуем вам тщательно изучить связанные с этим риски и, при наличии вопросов, обратиться за консультацией к независимому финансовому или налоговому консультанту.<br/><br/>
                <strong style="font-weight: 600; color: #000;">GTC Global Ltd и GTC Global Trade Capital Co. Limited</strong> не предоставляют услуги лицам, проживающим в определённых юрисдикциях и/или юрисдикциях, где распространение таких услуг противоречит местным законам или регулированию.<br/><br/>
                <strong style="font-weight: 600; color: #000;">Другие организации группы:</strong><br/>
                Финансовые продукты и услуги, предлагаемые на этом сайте, <u>НЕ</u> предоставляются следующими организациями группы, и к ним нельзя предъявлять претензии. Если вы заинтересованы в продуктах и услугах, предлагаемых каждой из следующих организаций, посетите их соответствующие веб-сайты.<br/><br/>
                <strong style="font-weight: 600; color: #000;">GTC Group LLC-FZ</strong> — это холдинговая компания, зарегистрированная в Дубае, Объединённые Арабские Эмираты, с номером коммерческой лицензии: 2311147.01. Зарегистрированный офис находится по адресу: Business Center 1, этаж M, отель Meydan, Nad Al Sheba, Дубай, Объединённые Арабские Эмираты.<br/><br/>
                <strong style="font-weight: 600; color: #000;">GTC Multi Trading DMCC</strong> — это компания с ограниченной ответственностью, лицензированная и зарегистрированная в соответствии с законами Дубайского мультимодального товарного центра (№ DMCC-312687) и лицензированная Управлением по ценным бумагам и товарам Объединённых Арабских Эмиратов (№ 20222a2f8307) для осуществления деятельности по брокерскому обслуживанию товаров — торговле и клирингу. Зарегистрированный адрес: Unit No: 1501, 1 Lake Plaza, участок №: JLT-PH2-T2A, Jumeirah Lakes Towers, Дубай, Объединённые Арабские Эмираты.<br/><br/>
                Каждая организация в составе GTC Financial Group управляется отдельно. Финансовые продукты и услуги, предлагаемые на этом сайте, предоставляются ТОЛЬКО GTC Global Ltd и GTC Global Trade Capital Co. Limited.<br/><br/>
                Все товарные знаки принадлежат их соответствующим владельцам. Все права защищены. GTC Global Ltd является частью GTC Financial Group, которая состоит из группы организаций по всему миру.<br/><br/>
                <strong>Предупреждение о рисках:</strong> Торговля продуктами с кредитным плечом, такими как форекс и производные, может не подходить для всех инвесторов, поскольку связана с высоким уровнем риска для вашего капитала. Убедитесь, что вы полностью понимаете связанные риски, и при необходимости обратитесь за независимой консультацией.
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
                &copy; Copyright 2025 GTCFX – Все права защищены
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
};