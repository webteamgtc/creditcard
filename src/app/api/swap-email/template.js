export const getArabicEmailMT5Templetes = (data) => {
  return `
 <!DOCTYPE html>
<html lang="ar">
  <head>
    <meta charset="UTF-8" />
    <title>You’ve Registered for the GTC Demo Competition
</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
    </style>
  </head>
  <body style="margin:0;padding:0;background-color:#ffffff;font-family:'Poppins',sans-serif; direction: rtl; text-align: right; ">
    <table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Poppins', sans-serif; padding: 20px; direction: rtl; text-align: right; ">
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
           <!-- Logo -->
            <tr>
              <td align="center" style="padding-bottom: 20px;">
                <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/logo-email.jpg" alt="GTC Logo" style="width: 160px;" />
              </td>
            </tr>

            <!-- Heading -->
            <tr>
              <td align="center" style="font-size:20px;font-weight:600;color:#2a2f83;padding-bottom:10px;">
                بيانات حسابك لمسابقة GTC للحسابات التجريبية
              </td>
            </tr>
            <tr>
              <td align="center" style="font-size:14px;color:#2a2f83;padding-bottom:20px;">
                نُرفق لك في هذا البريد جميع التفاصيل اللازمة للبدء في المسابقة.
              </td>
            </tr>

            <tr>
              <td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td>
            </tr>

            <!-- Greeting & Instructions -->
            <tr>
              <td style="font-size:14px;color:#2a2f83;padding-bottom:10px;">
                مرحباً ${data?.name},
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#2a2f83;padding-bottom:10px;">
                الأسواق بانتظارك، وأنت اليوم تبدأ أول خطوة لإثبات قدراتك في التداول.
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#2a2f83;padding-bottom:10px;">
                تم إنشاء حسابك التجريبي الجديد من GTC بنجاح، وهذه تفاصيل الوصول التي تمكّنك من الدخول لتبدأ رحلتك بثقة.
              </td>
            </tr>
            
            <!-- Account Info Box -->
            <tr>
              <td style="padding: 20px 0;">
                <h3 style="color: #b68756; font-size: 18px; margin: 0 0 16px 0;">تفاصيل حسابك التجريبي من GTC</h3>
                <table width="100%" cellpadding="0" cellspacing="0" style="border-radius: 10px; background-color: #fdf6ee; font-size: 14px; color: #4D4D70;">
                  <tr>
                    <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">عملة الحساب</td>
                    <td style="padding: 5px;">
                      <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px;">USD</div>
                    </td>
                  </tr>
                  <tr>
                    <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">رقم حساب التداول في GTC</td>
                    <td style="padding: 5px;">
                      <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px;">${data?.user}</div>
                    </td>
                  </tr>
                  <tr>
                    <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">كلمة المرور الخاصة بك</td>
                    <td style="padding: 5px;">
                      <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px;">${data?.password}</div>
                    </td>
                  </tr>
                  <tr>
                    <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">كلمة مرور المستثمر</td>
                    <td style="padding: 5px;">
                      <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px; border: 2px solid #a076f9;">${data?.invest_password}</div>
                    </td>
                  </tr>
                  <tr>
                    <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">منصة التداول التي ستستخدمها</td>
                    <td style="padding: 5px;">
                      <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px;">MT5</div>
                    </td>
                  </tr>
                  <tr>
                    <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">اسم السيرفر</td>
                    <td style="padding: 5px;">
                      <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px;">GTCGlobalTrade-Server</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- CTA Buttons -->
            <tr>
              <td align="center" style="padding: 0px 0 20px 0;">
                <p style="font-size: 16px; color: #202a6b; font-weight: 600; margin-bottom: 20px;">الوصول إلى منطقة العميل</p>
                <table cellpadding="0" cellspacing="0" role="presentation">
                  <tr>
                    <td align="center" style="padding: 0 10px;">
                      <a href="https://download.mql5.com/cdn/web/gtc.global.trade/mt5/gtcglobaltrade5setup.exe" style="background-color: #ffffff; border: 2px solid #b68756; border-radius: 8px; color: #b68756; font-weight: 600; padding: 12px 20px; text-decoration: none; display: inline-block;">
                        الوصول إلى منطقة العميل عبر (سطح المكتب)
                      </a>
                    </td>
                    <td align="center" style="padding: 0 10px;">
                      <a href="https://download.mql5.com/cdn/mobile/mt5/android?server=GTCGlobalTrade-Server" style="background: linear-gradient(to right, #b68756, #7b6036); border-radius: 8px; color: #ffffff; font-weight: 600; padding: 12px 20px; text-decoration: none; display: inline-block;">
                        الوصول إلى منطقة العميل عبر الهاتف المحمول
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="font-size:16px;color:#2a2f83;padding-bottom:10px; font-weight: 600;">
                هل تحتاج إلى أي مساعدة؟
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#2a2f83;padding-bottom:10px;">
                في حال كان لديك أي استفسار أو واجهت أي صعوبات، لا تتردد في التواصل معنا عبر البريد الإلكتروني <a href="mailto:support@gtcfx.com">support@gtcfx.com</a>. نحن هنا لخدمتك، وملتزمون بتقديم أفضل تجربة تداول لك.
              </td>
            </tr>
            
            <!-- Signoff -->
            <tr>
              <td style="font-size:16px;color:#2a2f83;padding-bottom:10px; font-weight: 600;">
                <br>
                مع أطيب التحيات،
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#2a2f83;padding-bottom:30px;">
                أنت الأفضل… وحان وقتك لتُثبت ذلك!<br>
                فريق GTC
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
                      <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/logo-email.jpg" alt="GTC Logo" style="width: 160px;" />
                    </td>
                    <td align="left" style="font-size: 13px; color: #192055; line-height: 25px;">
                      📞 الهاتف: +971 800 667788<br/>
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
    <strong style="font-weight: 600; color: #4D4D70;">GTC Global Ltd وGTC Global Trade Capital Co. Limited</strong> تنتميان إلى مجموعة GTC Financial Group، التي تتكون من مجموعة من الكيانات في جميع أنحاء العالم.<br/><br/>
    الاستثمار في المنتجات المشتقة ينطوي على مخاطر كبيرة وقد لا يكون مناسبًا لجميع المستثمرين. الرافعة المالية في هذه الأدوات يمكن أن تزيد من مستوى المخاطر وتؤدي إلى تعرض محتمل للخسائر. قبل اتخاذ أي قرار بالمشاركة في تداول العملات الأجنبية أو العقود مقابل الفروقات، من الضروري تقييم أهدافك الاستثمارية، ومستوى خبرتك، ومدى تحملك للمخاطر بعناية. يجب أن تستثمر فقط الأموال التي يمكنك تحمل خسارتها. نحن نشجعك بشدة على تثقيف نفسك جيدًا حول المخاطر المرتبطة، وإذا كانت لديك أي استفسارات، اطلب المشورة من مستشار مالي أو ضريبي مستقل.<br/><br/>
    <strong style="font-weight: 600; color: #4D4D70;">GTC Global Ltd وGTC Global Trade Capital Co. Limited</strong> لا تقدمان خدمات للأفراد المقيمين في ولايات قضائية معينة و/أو الولايات القضائية التي يكون فيها توزيع هذه الخدمات مخالفًا للقوانين أو اللوائح المحلية.<br/><br/>
    <strong style="font-weight: 600; color: #4D4D70;">الكيانات الأخرى في المجموعة:</strong><br/>
    المنتجات والخدمات المالية المقدمة على هذا الموقع <u>لا</u> يتم توفيرها من قبل الكيانات التالية في المجموعة، ولا يمكن اللجوء إلى هذه الكيانات. إذا كنت مهتمًا بالمنتجات والخدمات التي تقدمها كل من الكيانات التالية، يرجى زيارة مواقعهم الإلكترونية الخاصة.<br/><br/>
    <strong style="font-weight: 600; color: #4D4D70;">GTC Group LLC-FZ</strong> هي شركة قابضة مسجلة في دبي، الإمارات العربية المتحدة برقم الترخيص التجاري: 2311147.01. مكتبها المسجل في: Business Center 1، الطابق M، فندق الميدان، ند الشبا، دبي، الإمارات العربية المتحدة.<br/><br/>
    <strong style="font-weight: 600; color: #4D4D70;">GTC Multi Trading DMCC</strong> هي شركة محدودة مرخصة ومسجلة بموجب قوانين مركز دبي للسلع المتعددة (رقم: DMCC-312687) ومرخصة من قبل هيئة الأوراق المالية والسلع، الإمارات العربية المتحدة (رقم: 20222a2f8307) لممارسة نشاط الوساطة في السلع - التداول والتسوية. العنوان المسجل: الوحدة رقم: 1501، 1 Lake Plaza، القطعة رقم: JLT-PH2-T2A، ابراج بحيرات الجميرا، دبي، الإمارات العربية المتحدة.<br/><br/>
    يتم إدارة كل كيان ضمن مجموعة GTC Financial Group بشكل منفصل. المنتجات والخدمات المالية المقدمة على هذا الموقع يتم توفيرها فقط من قبل GTC Global Ltd وGTC Global Trade Capital Co. Limited.<br/><br/>
    جميع العلامات التجارية ملك لأصحابها المعنيين. جميع الحقوق محفوظة. GTC Global Ltd هي جزء من مجموعة GTC Financial Group، التي تتكون من مجموعة من الكيانات في جميع أنحاء العالم.<br/><br/>
    <strong>تحذير المخاطر:</strong> التداول في المنتجات ذات الرافعة المالية مثل الفوركس والمشتقات قد لا يكون مناسبًا لجميع المستثمرين لأنها تنطوي على درجة عالية من المخاطر على رأس مالك. يرجى التأكد من فهمك الكامل للمخاطر المرتبطة وطلب المشورة المستقلة إذا لزم الأمر.
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
                &copy; Copyright 2025 GTCVIP – جميع الحقوق محفوظة
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`
};

export const chineseEmailMT5Template = (data) => {
  return `
  <!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <title>GTC模拟交易赛参赛凭证</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Noto+Sans+SC:wght@400;700&display=swap');
      body { font-family: 'Noto Sans SC', 'Poppins', sans-serif; }
    </style>
  </head>
  <body style="margin:0;padding:0;background-color:#ffffff;font-family:'Noto Sans SC', 'Poppins', sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Noto Sans SC', 'Poppins', sans-serif; padding: 20px;">
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
           <!-- Logo -->
            <tr>
              <td align="center" style="padding-bottom: 20px;">
                <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/logo-email.jpg" alt="GTC Logo" style="width: 160px;" />
              </td>
            </tr>

            <!-- Heading -->
            <tr>
              <td align="center" style="font-size:20px;font-weight:600;color:#2a2f83;padding-bottom:10px;">
                GTC模拟交易赛参赛凭证
              </td>
            </tr>
            <tr>
              <td align="center" style="font-size:14px;color:#2a2f83;padding-bottom:20px;">
                您的赛事账户凭证已备份至本邮件，请查收
              </td>
            </tr>

            <tr>
              <td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td>
            </tr>

            <!-- Greeting & Instructions -->
            <tr>
              <td style="font-size:14px;color:#2a2f83;padding-bottom:10px;">
                尊敬的${data?.name}：
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#2a2f83;padding-bottom:10px;">
                您的参赛账户已开通，随时可登录参赛。
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#2a2f83;padding-bottom:10px;">
                您的GTC模拟交易赛账户已创建完成，登录方式如下：
              </td>
            </tr>
            
            <!-- Account Info Box -->
            <tr>
              <td style="padding: 20px 0;">
                <h3 style="color: #b68756; font-size: 18px; margin: 0 0 16px 0;">账户信息</h3>
                <table width="100%" cellpadding="0" cellspacing="0" style="border-radius: 10px; background-color: #fdf6ee; font-size: 14px; color: #4D4D70;">
                  <tr>
                    <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">账户货币</td>
                    <td style="padding: 5px;">
                      <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px;">USD</div>
                    </td>
                  </tr>
                  <tr>
                    <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">交易账号</td>
                    <td style="padding: 5px;">
                      <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px;">${data?.user}</div>
                    </td>
                  </tr>
                  <tr>
                    <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">主密码</td>
                    <td style="padding: 5px;">
                      <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px;">${data?.password}</div>
                    </td>
                  </tr>
                  <tr>
                    <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">只读密码</td>
                    <td style="padding: 5px;">
                      <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px; border: 2px solid #a076f9;">${data?.invest_password}</div>
                    </td>
                  </tr>
                  <tr>
                    <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">交易平台</td>
                    <td style="padding: 5px;">
                      <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px;">MT5</div>
                    </td>
                  </tr>
                  <tr>
                    <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">服务器</td>
                    <td style="padding: 5px;">
                      <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px;">GTCGlobalTrade-Server</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- CTA Buttons -->
            <tr>
              <td align="center" style="padding: 0px 0 20px 0;">
                <p style="font-size: 16px; color: #202a6b; font-weight: 600; margin-bottom: 20px;">快速访问通道</p>
                <table cellpadding="0" cellspacing="0" role="presentation">
                  <tr>
                    <td align="center" style="padding: 0 10px;">
                      <a href="https://download.mql5.com/cdn/web/gtc.global.trade/mt5/gtcglobaltrade5setup.exe" style="background-color: #ffffff; border: 2px solid #b68756; border-radius: 8px; color: #b68756; font-weight: 600; padding: 12px 20px; text-decoration: none; display: inline-block;">
                        电脑端登录入口
                      </a>
                    </td>
                    <td align="center" style="padding: 0 10px;">
                      <a href="https://download.mql5.com/cdn/mobile/mt5/android?server=GTCGlobalTrade-Server" style="background: linear-gradient(to right, #b68756, #7b6036); border-radius: 8px; color: #ffffff; font-weight: 600; padding: 12px 20px; text-decoration: none; display: inline-block;">
                        移动端登录入口
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="font-size:16px;color:#2a2f83;padding-bottom:10px; font-weight: 600;">
                遇到问题？
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#2a2f83;padding-bottom:10px;">
                请联系客服邮箱 <a href="mailto:support@gtcfx.com">support@gtcfx.com</a>，我们将尽快协助您。
              </td>
            </tr>
            
            <!-- Signoff -->
            <tr>
              <td style="font-size:16px;color:#2a2f83;padding-bottom:10px; font-weight: 600;">
                <br>
                祝交易顺利
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#2a2f83;padding-bottom:30px;">
                GTC泽汇团队
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
                      <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/logo-email.jpg" alt="GTC Logo" style="width: 160px;" />
                    </td>
                    <td align="right" style="font-size: 13px; color: #192055; line-height: 25px;">
                      📞 电话: +971 800 667788<br/>
                      ✉️ 电子邮件: <a href="mailto:support@gtcfx.com" style="color: #192055; text-decoration: none;">support@gtcfx.com</a>
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
                <strong style="font-weight: 600; color: #4D4D70;">GTC Global Ltd和GTC Global Trade Capital Co. Limited</strong> 隶属于GTC金融集团，该集团由全球多家实体组成。<br/><br/>
                投资衍生品具有重大风险，可能不适合所有投资者。这些工具的杠杆作用可能会增加风险水平和潜在损失敞口。在决定参与外汇交易或差价合约（CFD）之前，仔细评估您的投资目标、经验水平和风险承受能力至关重要。您应仅投资您能承受损失的资金。我们强烈建议您全面了解相关风险，并在有任何疑问时，向独立的财务或税务顾问寻求建议。<br/><br/>
                <strong style="font-weight: 600; color: #4D4D70;">GTC Global Ltd和GTC Global Trade Capital Co. Limited</strong> 不向居住在特定司法管辖区和/或分发此类服务违反当地法律或法规的司法管辖区的个人提供服务。<br/><br/>
                <strong style="font-weight: 600; color: #4D4D70;">集团其他实体：</strong><br/>
                本网站提供的金融产品和服务<u>不</u>由以下集团实体提供，且无法向以下实体追索。如果您对以下实体提供的金融产品和服务感兴趣，请访问其各自的网站。<br/><br/>
                <strong style="font-weight: 600; color: #4D4D70;">GTC Group LLC-FZ</strong> 是一家在阿拉伯联合酋长国迪拜注册成立的控股公司，商业许可证编号：2311147.01。其注册办公地址为：Business Center 1，M层，Meydan Hotel，Nad Al Sheba，迪拜，阿拉伯联合酋长国。<br/><br/>
                <strong style="font-weight: 600; color: #4D4D70;">GTC Multi Trading DMCC</strong> 是一家根据迪拜多种商品中心（DMCC）法律许可和注册的有限责任公司（编号：DMCC-312687），并获得阿拉伯联合酋长国证券和商品管理局的许可（编号：20222a2f8307），从事商品经纪-交易和清算活动。注册地址：Unit No: 1501，1 Lake Plaza，Plot No: JLT-PH2-T2A，Jumeirah Lakes Towers，迪拜，阿拉伯联合酋长国。<br/><br/>
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
                &copy; Copyright 2025 GTCVIP – 保留所有权利
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`
};

export const spanishEmailMT5Template = (data) => {
  return `
  <!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Tus credenciales GTC Demo</title>
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
           <!-- Logo -->
            <tr>
              <td align="center" style="padding-bottom: 20px;">
                <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/logo-email.jpg" alt="GTC Logo" style="width: 160px;" />
              </td>
            </tr>

            <!-- Heading -->
            <tr>
              <td align="center" style="font-size:20px;font-weight:600;color:#2a2f83;padding-bottom:10px;">
                Tus credenciales GTC Demo
              </td>
            </tr>
            <tr>
              <td align="center" style="font-size:14px;color:#2a2f83;padding-bottom:20px;">
                Hemos incluido tus datos de acceso en este correo. ¡Prepárate para competir y ganar!
              </td>
            </tr>

            <tr>
              <td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td>
            </tr>

            <!-- Greeting & Instructions -->
            <tr>
              <td style="font-size:14px;color:#2a2f83;padding-bottom:10px;">
                Estimado/a ${data?.name},
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#2a2f83;padding-bottom:10px;">
                ¡Ahora estás listo para dominar los mercados y probar que de verdad eres el mejor trader del mundo!
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#2a2f83;padding-bottom:10px;">
                Tu nueva cuenta demo de trading GTC ya está lista. A continuación, te explicamos cómo puedes acceder:
              </td>
            </tr>
            
            <!-- Account Info Box -->
            <tr>
              <td style="padding: 20px 0;">
                <h3 style="color: #b68756; font-size: 18px; margin: 0 0 16px 0;">Información sobre tu cuenta demo de GTC</h3>
                <table width="100%" cellpadding="0" cellspacing="0" style="border-radius: 10px; background-color: #fdf6ee; font-size: 14px; color: #4D4D70;">
                  <tr>
                    <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">Moneda de la Cuenta</td>
                    <td style="padding: 5px;">
                      <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px;">USD</div>
                    </td>
                  </tr>
                  <tr>
                    <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">Número de Cuenta de Trading GTC</td>
                    <td style="padding: 5px;">
                      <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px;">${data?.user}</div>
                    </td>
                  </tr>
                  <tr>
                    <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">Tu Contraseña</td>
                    <td style="padding: 5px;">
                      <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px;">${data?.password}</div>
                    </td>
                  </tr>
                  <tr>
                    <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">Contraseña de Inversor</td>
                    <td style="padding: 5px;">
                      <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px; border: 2px solid #a076f9;">${data?.invest_password}</div>
                    </td>
                  </tr>
                  <tr>
                    <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">Plataforma de Trading</td>
                    <td style="padding: 5px;">
                      <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px;">MT5</div>
                    </td>
                  </tr>
                  <tr>
                    <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">Nombre del Servidor</td>
                    <td style="padding: 5px;">
                      <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px;">GTCGlobalTrade-Server</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- CTA Buttons -->
            <tr>
              <td align="center" style="padding: 0px 0 20px 0;">
                <p style="font-size: 16px; color: #202a6b; font-weight: 600; margin-bottom: 20px;">Accede a tu zona de clientes de GTC</p>
                <table cellpadding="0" cellspacing="0" role="presentation">
                  <tr>
                    <td align="center" style="padding: 0 10px;">
                      <a href="https://download.mql5.com/cdn/web/gtc.global.trade/mt5/gtcglobaltrade5setup.exe" style="background-color: #ffffff; border: 2px solid #b68756; border-radius: 8px; color: #b68756; font-weight: 600; padding: 12px 20px; text-decoration: none; display: inline-block;">
                        Accede a la Zona de Clientes GTC para Escritorio
                      </a>
                    </td>
                    <td align="center" style="padding: 0 10px;">
                      <a href="https://download.mql5.com/cdn/mobile/mt5/android?server=GTCGlobalTrade-Server" style="background: linear-gradient(to right, #b68756, #7b6036); border-radius: 8px; color: #ffffff; font-weight: 600; padding: 12px 20px; text-decoration: none; display: inline-block;">
                        Accede a la Zona de Clientes GTC para Móvil
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="font-size:16px;color:#2a2f83;padding-bottom:10px; font-weight: 600;">
                ¿Necesitas ayuda?
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#2a2f83;padding-bottom:10px;">
                Si tienes alguna duda o necesitas asistencia adicional, por favor, no dudes en contactarnos en <a href="mailto:support@gtcfx.com">support@gtcfx.com</a>. Estamos aquí para apoyarte y garantizar que tu experiencia con nosotros sea inmejorable.
              </td>
            </tr>
            
            <!-- Signoff -->
            <tr>
              <td style="font-size:16px;color:#2a2f83;padding-bottom:10px; font-weight: 600;">
                <br>
                Saludos cordiales,
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#2a2f83;padding-bottom:30px;">
                Eres increíble y pronto le mostrarás al mundo de lo que eres capaz.<br>
                El Equipo GTC
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
                      <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/logo-email.jpg" alt="GTC Logo" style="width: 160px;" />
                    </td>
                    <td align="right" style="font-size: 13px; color: #192055; line-height: 25px;">
                      📞 Teléfono: +971 800 667788<br/>
                      ✉️ Correo electrónico: <a href="mailto:support@gtcfx.com" style="color: #192055; text-decoration: none;">support@gtcfx.com</a>
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
                <strong style="font-weight: 600; color: #4D4D70;">GTC Global Ltd y GTC Global Trade Capital Co. Limited</strong> forman parte del GTC Financial Group, que consiste en un grupo de entidades en todo el mundo.<br/><br/>
                Invertir en productos derivados conlleva riesgos significativos y puede no ser adecuado para todos los inversores. El apalancamiento en estos instrumentos puede aumentar el nivel de riesgo y la exposición potencial a pérdidas. Antes de tomar cualquier decisión para participar en el trading de divisas extranjeras o CFDs, es esencial evaluar cuidadosamente tus objetivos de inversión, nivel de experiencia y tolerancia al riesgo. Solo debes invertir fondos que puedas permitirte perder. Te recomendamos encarecidamente que te informes completamente sobre los riesgos asociados y, si tienes alguna duda, busques el asesoramiento de un consultor financiero o fiscal independiente.<br/><br/>
                <strong style="font-weight: 600; color: #4D4D70;">GTC Global Ltd y GTC Global Trade Capital Co. Limited</strong> no prestan servicios a personas residentes en jurisdicciones específicas y/o jurisdicciones donde la distribución de dichos servicios sea contraria a la ley o regulación local.<br/><br/>
                <strong style="font-weight: 600; color: #4D4D70;">Otras Entidades del Grupo:</strong><br/>
                Los productos y servicios financieros ofrecidos en este sitio web <u>NO</u> son proporcionados por las siguientes entidades del grupo, y no se puede recurrir a dichas entidades. Si estás interesado en los productos y servicios ofrecidos por cada una de las siguientes entidades, visita sus respectivos sitios web.<br/><br/>
                <strong style="font-weight: 600; color: #4D4D70;">GTC Group LLC-FZ</strong> es una empresa holding registrada en Dubái, Emiratos Árabes Unidos, con Número de Licencia Comercial: 2311147.01. Su oficina registrada está en Business Center 1, Planta M, Hotel Meydan, Nad Al Sheba, Dubái, Emiratos Árabes Unidos.<br/><br/>
                <strong style="font-weight: 600; color: #4D4D70;">GTC Multi Trading DMCC</strong> es una empresa limitada licenciada y registrada bajo las leyes del Dubai Multi Commodities Centre (No. DMCC-312687) y licenciada por la Autoridad de Valores y Commodities, Emiratos Árabes Unidos (No. 20222a2f8307) para practicar la actividad de Correduría de Commodities - Trading y Liquidación. Dirección registrada: Unidad No: 1501, 1 Lake Plaza, Parcela No: JLT-PH2-T2A, Jumeirah Lakes Towers, Dubái, Emiratos Árabes Unidos.<br/><br/>
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
                &copy; Copyright 2025 GTCVIP – Todos los derechos reservados
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`
};
export const vietnameseEmailMT5Template = (data) => {
  return `
<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <title>Thông tin đăng nhập tài khoản GTC Demo của bạn</title>
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
           <!-- Logo -->
            <tr>
              <td align="center" style="padding-bottom: 20px;">
                <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/logo-email.jpg" alt="GTC Logo" style="width: 160px;" />
              </td>
            </tr>

            <!-- Heading -->
            <tr>
              <td align="center" style="font-size:20px;font-weight:600;color:#2a2f83;padding-bottom:10px;">
                Thông tin đăng nhập tài khoản GTC Demo của bạn
              </td>
            </tr>
            <tr>
              <td align="center" style="font-size:14px;color:#2a2f83;padding-bottom:20px;">
                Chúng tôi đã bao gồm thông tin đăng nhập của bạn trong email này. Hãy sẵn sàng để cạnh tranh và chiến thắng!
              </td>
            </tr>

            <tr>
              <td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td>
            </tr>

            <!-- Greeting & Instructions -->
            <tr>
              <td style="font-size:14px;color:#2a2f83;padding-bottom:10px;">
                Kính gửi ${data?.name},
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#2a2f83;padding-bottom:10px;">
                Bây giờ bạn đã sẵn sàng để làm chủ thị trường và chứng minh rằng bạn thực sự là nhà giao dịch giỏi nhất thế giới!
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#2a2f83;padding-bottom:10px;">
                Tài khoản demo giao dịch GTC mới của bạn đã sẵn sàng. Dưới đây là cách bạn có thể truy cập:
              </td>
            </tr>
            
            <!-- Account Info Box -->
            <tr>
              <td style="padding: 20px 0;">
                <h3 style="color: #b68756; font-size: 18px; margin: 0 0 16px 0;">Thông tin về tài khoản demo GTC của bạn</h3>
                <table width="100%" cellpadding="0" cellspacing="0" style="border-radius: 10px; background-color: #fdf6ee; font-size: 14px; color: #4D4D70;">
                  <tr>
                    <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">Tiền tệ tài khoản</td>
                    <td style="padding: 5px;">
                      <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px;">USD</div>
                    </td>
                  </tr>
                  <tr>
                    <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">Số tài khoản GTC</td>
                    <td style="padding: 5px;">
                      <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px;">${data?.user}</div>
                    </td>
                  </tr>
                  <tr>
                    <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">Mật khẩu của bạn</td>
                    <td style="padding: 5px;">
                      <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px;">${data?.password}</div>
                    </td>
                  </tr>
                  <tr>
                    <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">Mật khẩu nhà đầu tư</td>
                    <td style="padding: 5px;">
                      <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px; border: 2px solid #a076f9;">${data?.invest_password}</div>
                    </td>
                  </tr>
                  <tr>
                    <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">Nền tảng giao dịch</td>
                    <td style="padding: 5px;">
                      <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px;">MT5</div>
                    </td>
                  </tr>
                  <tr>
                    <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">Tên máy chủ</td>
                    <td style="padding: 5px;">
                      <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px;">GTCGlobalTrade-Server</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- CTA Buttons -->
            <tr>
              <td align="center" style="padding: 0px 0 20px 0;">
                <p style="font-size: 16px; color: #202a6b; font-weight: 600; margin-bottom: 20px;">Truy cập vào khu vực khách hàng GTC của bạn</p>
                <table cellpadding="0" cellspacing="0" role="presentation">
                  <tr>
                    <td align="center" style="padding: 0 10px;">
                      <a href="https://download.mql5.com/cdn/web/gtc.global.trade/mt5/gtcglobaltrade5setup.exe" style="background-color: #ffffff; border: 2px solid #b68756; border-radius: 8px; color: #b68756; font-weight: 600; padding: 12px 20px; text-decoration: none; display: inline-block;">
                        Truy cập khu vực khách hàng GTC trên máy tính
                      </a>
                    </td>
                    <td align="center" style="padding: 0 10px;">
                      <a href="https://download.mql5.com/cdn/mobile/mt5/android?server=GTCGlobalTrade-Server" style="background: linear-gradient(to right, #b68756, #7b6036); border-radius: 8px; color: #ffffff; font-weight: 600; padding: 12px 20px; text-decoration: none; display: inline-block;">
                        Truy cập khu vực khách hàng GTC trên di động
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="font-size:16px;color:#2a2f83;padding-bottom:10px; font-weight: 600;">
                Bạn có cần trợ giúp không?
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#2a2f83;padding-bottom:10px;">
                Nếu bạn có bất kỳ câu hỏi nào hoặc cần hỗ trợ thêm, vui lòng liên hệ với chúng tôi tại <a href="mailto:support@gtcfx.com">support@gtcfx.com</a>. Chúng tôi luôn sẵn sàng hỗ trợ bạn và đảm bảo bạn có trải nghiệm tốt nhất với chúng tôi.
              </td>
            </tr>
            
            <!-- Signoff -->
            <tr>
              <td style="font-size:16px;color:#2a2f83;padding-bottom:10px; font-weight: 600;">
                <br>
                Trân trọng,
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#2a2f83;padding-bottom:30px;">
                Bạn thật tuyệt vời và bạn sắp cho cả thế giới thấy những gì bạn có thể làm.<br>
                Đội ngũ GTC
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

            <!-- Legal Footer -->
            <tr>
              <td style="font-size: 11px; color: #666; padding: 20px 0px; line-height: 1.5;">
                <strong>Quan trọng:</strong><br/>
                Tên người dùng và mật khẩu của bạn phải được giữ bí mật mọi lúc. Không bao giờ được chia sẻ hoặc tiết lộ mật khẩu cho người khác. Bạn không bao giờ được cho phép bất kỳ ai khác truy cập vào tài khoản giao dịch GTC của bạn hoặc thực hiện bất kỳ hành động nào có thể gây nguy hiểm cho bảo mật tài khoản của bạn.<br/>
                Bạn chịu trách nhiệm về tính bảo mật và việc sử dụng tất cả ID, mật khẩu và dữ liệu, phương pháp và thiết bị bảo mật khác liên quan đến Khu vực Khách hàng GTC và (các) nền tảng giao dịch GTC.<br/><br/>
                Trang web này thuộc sở hữu và được điều hành bởi GTC Global Ltd, một công ty trách nhiệm hữu hạn được đăng ký tại Mauritius (số công ty: C188049) và được cấp phép bởi Ủy ban Dịch vụ Tài chính Mauritius (Số GB22200292) để hoạt động với tư cách Nhà môi giới Đầu tư SEC-2.1B. Địa chỉ đăng ký: Cyberati Lounge, Tầng trệt, The Catalyst, Silicon Avenue, 40 Cybercity, 72201 Ebene, Cộng hòa Mauritius. Các dịch vụ và sản phẩm tài chính được quảng bá trên trang web này được cung cấp bởi GTC Global Ltd và GTC Global Trade Capital Co. Limited, một công ty được ủy quyền bởi Ủy ban Dịch vụ Tài chính Vanuatu, Cộng hòa Vanuatu, Số Giấy phép Công ty: 40354.<br/><br/>
                <strong style="font-weight: 600; color: #4D4D70;">GTC Global Ltd và GTC Global Trade Capital Co. Limited</strong> là một phần của GTC Financial Group, bao gồm một nhóm thực thể trên toàn thế giới.<br/><br/>
                Đầu tư vào các sản phẩm phái sinh có rủi ro đáng kể và có thể không phù hợp với tất cả nhà đầu tư. Đòn bẩy trong các công cụ này có thể làm tăng mức độ rủi ro và khả năng thua lỗ tiềm năng. Trước khi quyết định tham gia giao dịch ngoại hối hoặc CFD, điều cần thiết là bạn phải đánh giá cẩn thận mục tiêu đầu tư, mức độ kinh nghiệm và khả năng chấp nhận rủi ro của mình. Bạn chỉ nên đầu tư số tiền mà bạn có thể để mất. Chúng tôi khuyên bạn nên tìm hiểu đầy đủ về các rủi ro liên quan và nếu có bất kỳ nghi ngờ nào, hãy tìm kiếm lời khuyên từ một cố vấn tài chính hoặc thuế độc lập.<br/><br/>
                <strong style="font-weight: 600; color: #4D4D70;">GTC Global Ltd và GTC Global Trade Capital Co. Limited</strong> không cung cấp dịch vụ cho cư dân ở các khu vực pháp lý cụ thể và/hoặc các khu vực pháp lý nơi việc phân phối các dịch vụ như vậy trái với luật hoặc quy định địa phương.<br/><br/>
                <strong style="font-weight: 600; color: #4D4D70;">Các Thực thể Khác trong Tập đoàn:</strong><br/>
                Các sản phẩm và dịch vụ tài chính được cung cấp trên trang web này <u>KHÔNG</u> được cung cấp bởi các thực thể tập đoàn sau và không thể khiếu nại với các thực thể đó. Nếu bạn quan tâm đến các sản phẩm và dịch vụ được cung cấp bởi từng thực thể sau, vui lòng truy cập trang web tương ứng của họ.<br/><br/>
                <strong style="font-weight: 600; color: #4D4D70;">GTC Group LLC-FZ</strong> là một công ty nắm giữ được đăng ký tại Dubai, Các Tiểu vương quốc Ả Rập Thống nhất, với Số Giấy phép Kinh doanh: 2311147.01. Văn phòng đăng ký tại Business Center 1, Tầng M, Hotel Meydan, Nad Al Sheba, Dubai, Các Tiểu vương quốc Ả Rập Thống nhất.<br/><br/>
                <strong style="font-weight: 600; color: #4D4D70;">GTC Multi Trading DMCC</strong> là một công ty trách nhiệm hữu hạn được cấp phép và đăng ký theo luật của Trung tâm Đa Hàng hóa Dubai (Số DMCC-312687) và được cấp phép bởi Cơ quan Chứng khoán và Hàng hóa, Các Tiểu vương quốc Ả Rập Thống nhất (Số 20222a2f8307) để thực hiện hoạt động Môi giới Hàng hóa - Giao dịch và Thanh toán. Địa chỉ đăng ký: Đơn vị số: 1501, 1 Lake Plaza, Lô đất số: JLT-PH2-T2A, Jumeirah Lakes Towers, Dubai, Các Tiểu vương quốc Ả Rập Thống nhất.<br/><br/>
                Mỗi thực thể trong GTC Financial Group được quản lý riêng biệt. Các sản phẩm và dịch vụ tài chính được cung cấp trên trang web này CHỈ được cung cấp bởi GTC Global Ltd và GTC Global Trade Capital Co. Limited.<br/><br/>
                Tất cả các nhãn hiệu thương mại là tài sản của chủ sở hữu tương ứng. Mọi quyền được bảo lưu. GTC Global Ltd là một phần của GTC Financial Group, bao gồm một nhóm thực thể trên toàn thế giới.<br/><br/>
                <strong>Cảnh báo Rủi ro:</strong> Giao dịch các sản phẩm có đòn bẩy, như forex và phái sinh, có thể không phù hợp với tất cả các nhà đầu tư, vì chúng mang lại mức độ rủi ro cao đối với vốn của bạn. Hãy đảm bảo bạn hiểu rõ các rủi ro liên quan và tìm kiếm lời khuyên độc lập nếu cần thiết.
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
                &copy; Bản quyền 2025 GTCVIP – Mọi quyền được bảo lưu
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`
};
export const portugueseEmailMT5Template = (data) => {
  return `
  <!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8" />
    <title>Credenciais da competição GTC</title>
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
           <!-- Logo -->
            <tr>
              <td align="center" style="padding-bottom: 20px;">
                <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/logo-email.jpg" alt="GTC Logo" style="width: 160px;" />
              </td>
            </tr>

            <!-- Heading -->
            <tr>
              <td align="center" style="font-size:20px;font-weight:600;color:#2a2f83;padding-bottom:10px;">
                Credenciais da competição GTC
              </td>
            </tr>
            <tr>
              <td align="center" style="font-size:14px;color:#2a2f83;padding-bottom:20px;">
                Adicionamos todas as suas credenciais neste e-mail para que você esteja pronto!
              </td>
            </tr>

            <tr>
              <td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td>
            </tr>

            <!-- Greeting & Instructions -->
            <tr>
              <td style="font-size:14px;color:#2a2f83;padding-bottom:10px;">
                Olá ${data?.name},
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#2a2f83;padding-bottom:10px;">
                Agora você está pronto para enfrentar o mundo e provar que é realmente o melhor trader do planeta!
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#2a2f83;padding-bottom:10px;">
                Sua nova conta Demo Trading GTC foi criada. Confira como acessá-la:
              </td>
            </tr>
            
            <!-- Account Info Box -->
            <tr>
              <td style="padding: 20px 0;">
                <h3 style="color: #b68756; font-size: 18px; margin: 0 0 16px 0;">Informações da sua Demo Trading GTC</h3>
                <table width="100%" cellpadding="0" cellspacing="0" style="border-radius: 10px; background-color: #fdf6ee; font-size: 14px; color: #4D4D70;">
                  <tr>
                    <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">Moeda da Conta</td>
                    <td style="padding: 5px;">
                      <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px;">USD</div>
                    </td>
                  </tr>
                  <tr>
                    <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">Número da Conta GTC</td>
                    <td style="padding: 5px;">
                      <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px;">${data?.user}</div>
                    </td>
                  </tr>
                  <tr>
                    <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">Sua Senha</td>
                    <td style="padding: 5px;">
                      <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px;">${data?.password}</div>
                    </td>
                  </tr>
                  <tr>
                    <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">Senha de Investidor</td>
                    <td style="padding: 5px;">
                      <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px; border: 2px solid #a076f9;">${data?.invest_password}</div>
                    </td>
                  </tr>
                  <tr>
                    <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">Plataforma de Trading</td>
                    <td style="padding: 5px;">
                      <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px;">MT5</div>
                    </td>
                  </tr>
                  <tr>
                    <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">Nome do Servidor</td>
                    <td style="padding: 5px;">
                      <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px;">GTCGlobalTrade-Server</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- CTA Buttons -->
            <tr>
              <td align="center" style="padding: 0px 0 20px 0;">
                <p style="font-size: 16px; color: #202a6b; font-weight: 600; margin-bottom: 20px;">Acesse a Área do Cliente GTC</p>
                <table cellpadding="0" cellspacing="0" role="presentation">
                  <tr>
                    <td align="center" style="padding: 0 10px;">
                      <a href="https://download.mql5.com/cdn/web/gtc.global.trade/mt5/gtcglobaltrade5setup.exe" style="background-color: #ffffff; border: 2px solid #b68756; border-radius: 8px; color: #b68756; font-weight: 600; padding: 12px 20px; text-decoration: none; display: inline-block;">
                        Acesse a Área do Cliente GTC para Desktop
                      </a>
                    </td>
                    <td align="center" style="padding: 0 10px;">
                      <a href="https://download.mql5.com/cdn/mobile/mt5/android?server=GTCGlobalTrade-Server" style="background: linear-gradient(to right, #b68756, #7b6036); border-radius: 8px; color: #ffffff; font-weight: 600; padding: 12px 20px; text-decoration: none; display: inline-block;">
                        Acesse a Área do Cliente GTC para Mobile
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="font-size:16px;color:#2a2f83;padding-bottom:10px; font-weight: 600;">
                Precisa de ajuda?
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#2a2f83;padding-bottom:10px;">
                Se você tiver qualquer dúvida ou precisar de assistência adicional, não hesite em nos contatar pelo e-mail <a href="mailto:support@gtcfx.com">support@gtcfx.com</a>. Estamos aqui para te apoiar e garantir que sua experiência conosco seja a melhor de todas!
              </td>
            </tr>
            
            <!-- Signoff -->
            <tr>
              <td style="font-size:16px;color:#2a2f83;padding-bottom:10px; font-weight: 600;">
                <br>
                Atenciosamente,
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#2a2f83;padding-bottom:30px;">
                Você já sabe do seu potencial. Agora é a vez do mundo descobrir.<br>
                Família GTC
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
                      <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/logo-email.jpg" alt="GTC Logo" style="width: 160px;" />
                    </td>
                    <td align="right" style="font-size: 13px; color: #192055; line-height: 25px;">
                      📞 Telefone: +971 800 667788<br/>
                      ✉️ E-mail: <a href="mailto:support@gtcfx.com" style="color: #192055; text-decoration: none;">support@gtcfx.com</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

          <tr>
  <td style="font-size: 11px; color: #666; padding: 20px 0px; line-height: 1.5;">
    <strong>Importante:</strong><br/>
    Sua conta e senha de login devem ser mantidas confidenciais o tempo todo. As senhas nunca devem ser compartilhadas ou expostas a terceiros. Você nunca deve permitir que outra pessoa acesse sua conta de trading GTC ou faça qualquer coisa que possa comprometer a segurança da sua conta.<br/>
    Você é responsável pela confidencialidade e pelo uso de todos os IDs, senhas e demais dados, métodos e dispositivos de segurança relacionados à área do cliente GTC e às plataformas de trading GTC.<br/><br/>
    Este site é de propriedade e operado pela GTC Global Ltd, uma empresa limitada incorporada em Maurício (número da empresa: C188049) e licenciada pela Comissão de Serviços Financeiros de Maurício (No. GB22200292) para atuar como Dealer de Investimento SEC-2.1B. Endereço registrado: Cyberati Lounge, Térreo, The Catalyst, Silicon Avenue, 40 Cybercity, 72201 Ebene, República de Maurício. Os serviços e produtos financeiros promovidos neste site são oferecidos pela GTC Global Ltd e GTC Global Trade Capital Co. Limited, uma empresa autorizada pela Comissão de Serviços Financeiros de Vanuatu, República de Vanuatu, Número de Licença da Empresa: 40354.<br/><br/>
    <strong style="font-weight: 600; color: #4D4D70;">GTC Global Ltd e GTC Global Trade Capital Co. Limited</strong> pertencem ao GTC Financial Group, que consiste em um grupo de entidades em todo o mundo.<br/><br/>
    Investir em produtos derivativos envolve riscos significativos e pode não ser adequado para todos os investidores. A alavancagem nesses instrumentos pode aumentar o nível de risco e a potencial exposição a perdas. Antes de tomar qualquer decisão para se engajar em trading de câmbio estrangeiro ou CFDs, é essencial avaliar cuidadosamente seus objetivos de investimento, nível de experiência e tolerância ao risco. Você deve investir apenas fundos que pode se dar ao luxo de perder. Encorajamos fortemente que você se informe completamente sobre os riscos associados e, se tiver alguma dúvida, procure aconselhamento de um consultor financeiro ou tributário independente.<br/><br/>
    <strong style="font-weight: 600; color: #4D4D70;">GTC Global Ltd e GTC Global Trade Capital Co. Limited</strong> não fornecem serviços para indivíduos residentes em jurisdições específicas e/ou jurisdições onde a distribuição de tais serviços seria contrária à lei ou regulamentação local.<br/><br/>
    <strong style="font-weight: 600; color: #4D4D70;">Outras Entidades do Grupo:</strong><br/>
    Os produtos e serviços financeiros oferecidos neste site <u>NÃO</u> são fornecidos pelas seguintes entidades do grupo, e nenhum recurso contra as seguintes entidades está disponível. Se você estiver interessado nos produtos e serviços oferecidos por cada uma das seguintes entidades, visite seus respectivos sites.<br/><br/>
    <strong style="font-weight: 600; color: #4D4D70;">GTC Group LLC-FZ</strong> é uma empresa holding incorporada em Dubai, Emirados Árabes Unidos, com Número de Licença Comercial: 2311147.01. Seu escritório registrado está em Business Center 1, Térreo, Meydan Hotel, Nad Al Sheba, Dubai, Emirados Árabes Unidos.<br/><br/>
    <strong style="font-weight: 600; color: #4D4D70;">GTC Multi Trading DMCC</strong> é uma empresa limitada licenciada e incorporada sob as leis do Dubai Multi Commodities Centre (No. DMCC-312687) e licenciada pela Autoridade de Valores Mobiliários e Commodities, Emirados Árabes Unidos (No. 20222a2f8307) para praticar a atividade de Corretagem de Commodities - Trading e Liquidação. Endereço registrado: Unidade No: 1501, 1 Lake Plaza, Lote No: JLT-PH2-T2A, Jumeirah Lakes Towers, Dubai, Emirados Árabes Unidos.<br/><br/>
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
                &copy; Copyright 2025 GTCVIP – Todos os direitos reservados
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`
};
export const russianEmailMT5Template = (data) => {
  return `
 <!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Ваши данные для Турнира GTC</title>
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
           <!-- Logo -->
            <tr>
              <td align="center" style="padding-bottom: 20px;">
                <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/logo-email.jpg" alt="GTC Logo" style="width: 160px;" />
              </td>
            </tr>

            <!-- Heading -->
            <tr>
              <td align="center" style="font-size:20px;font-weight:600;color:#2a2f83;padding-bottom:10px;">
                Ваши данные для Турнира GTC
              </td>
            </tr>
            <tr>
              <td align="center" style="font-size:14px;color:#2a2f83;padding-bottom:20px;">
                Мы добавили все ваши данные в это письмо, чтобы вы были готовы!
              </td>
            </tr>

            <tr>
              <td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td>
            </tr>

            <!-- Greeting & Instructions -->
            <tr>
              <td style="font-size:14px;color:#2a2f83;padding-bottom:10px;">
                Привет, ${data?.name},
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#2a2f83;padding-bottom:10px;">
                Теперь вы готовы бросить вызов миру и доказать, что вы действительно лучший трейдер на планете!
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#2a2f83;padding-bottom:10px;">
                Ваш новый демо-счёт GTC уже создан, и вот как вы можете к нему получить доступ.
              </td>
            </tr>
            
            <!-- Account Info Box -->
            <tr>
              <td style="padding: 20px 0;">
                <h3 style="color: #b68756; font-size: 18px; margin: 0 0 16px 0;">Информация о вашем демо-счёте GTC</h3>
                <table width="100%" cellpadding="0" cellspacing="0" style="border-radius: 10px; background-color: #fdf6ee; font-size: 14px; color: #000;">
                  <tr>
                    <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">Валюта счёта</td>
                    <td style="padding: 5px;">
                      <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px;">USD</div>
                    </td>
                  </tr>
                  <tr>
                    <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">Номер демо-счёта GTC</td>
                    <td style="padding: 5px;">
                      <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px;">${data?.user}</div>
                    </td>
                  </tr>
                  <tr>
                    <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">Ваш пароль</td>
                    <td style="padding: 5px;">
                      <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px;">${data?.password}</div>
                    </td>
                  </tr>
                  <tr>
                    <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">Инвесторский пароль</td>
                    <td style="padding: 5px;">
                      <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px; border: 2px solid #a076f9;">${data?.invest_password}</div>
                    </td>
                  </tr>
                  <tr>
                    <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">Торговая платформа</td>
                    <td style="padding: 5px;">
                      <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px;">MT5</div>
                    </td>
                  </tr>
                  <tr>
                    <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">Имя сервера</td>
                    <td style="padding: 5px;">
                      <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px;">GTCGlobalTrade-Server</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- CTA Buttons -->
            <tr>
              <td align="center" style="padding: 0px 0 20px 0;">
                <p style="font-size: 16px; color: #202a6b; font-weight: 600; margin-bottom: 20px;">Вход в ваш Личный кабинет GTC</p>
                <table cellpadding="0" cellspacing="0" role="presentation">
                  <tr>
                    <td align="center" style="padding: 0 10px;">
                      <a href="https://download.mql5.com/cdn/web/gtc.global.trade/mt5/gtcglobaltrade5setup.exe" style="background-color: #ffffff; border: 2px solid #b68756; border-radius: 8px; color: #b68756; font-weight: 600; padding: 12px 20px; text-decoration: none; display: inline-block;">
                        Перейти в Личный кабинет GTC (Desktop)
                      </a>
                    </td>
                    <td align="center" style="padding: 0 10px;">
                      <a href="https://download.mql5.com/cdn/mobile/mt5/android?server=GTCGlobalTrade-Server" style="background: linear-gradient(to right, #b68756, #7b6036); border-radius: 8px; color: #ffffff; font-weight: 600; padding: 12px 20px; text-decoration: none; display: inline-block;">
                        Перейти в Личный кабинет GTC (Mobile)
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="font-size:16px;color:#2a2f83;padding-bottom:10px; font-weight: 600;">
                Нужна помощь?
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#2a2f83;padding-bottom:10px;">
                Если у вас есть вопросы или вам нужна дополнительная помощь, пожалуйста, свяжитесь с нами по адресу <a href="mailto:support@gtcfx.com">support@gtcfx.com</a>. Мы здесь, чтобы поддержать вас и сделать ваше участие максимально комфортным и результативным.
              </td>
            </tr>
            
            <!-- Signoff -->
            <tr>
              <td style="font-size:16px;color:#2a2f83;padding-bottom:10px; font-weight: 600;">
                <br>
                С наилучшими пожеланиями,
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#2a2f83;padding-bottom:30px;">
                Вы лучший — и скоро весь мир это увидит!<br>
                Команда GTC
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
                      <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/logo-email.jpg" alt="GTC Logo" style="width: 160px;" />
                    </td>
                    <td align="right" style="font-size: 13px; color: #4D4D70; line-height: 25px;">
                      📞 Телефон: +971 800 667788<br/>
                      ✉️ Электронная почта: <a href="mailto:support@gtcfx.com" style="color: #192055; text-decoration: none;">support@gtcfx.com</a>
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
                &copy; Copyright 2025 GTCVIP – Все права защищены
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`
};

export const englishEmailMT5Template = (data) => {
  return `
 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>You’ve Registered for the GTC Demo Competition
</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
    </style>
  </head>
  <body style="margin:0;padding:0;background-color:#ffffff;font-family:'Poppins',sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Poppins', sans-serif; padding: 20px;">
      <tr>
        <td align="center">
          <table width="650" cellpadding="0" cellspacing="0" style="border:1px solid #e0e0e0;border-radius:8px;padding:30px;">
           <!-- Logo -->
            <tr>
              <td align="center" style="padding-bottom: 20px;">
                <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/logo-email.jpg" alt="GTC Logo" style="width: 160px;" />
              </td>
            </tr>

            <!-- Heading -->
            <tr>
              <td align="center" style="font-size:20px;font-weight:600;color:#000000;padding-bottom:10px;">
             Thank you for joining us! 🌟

              </td>
            </tr>
            <tr>
              <td align="center" style="font-size:14px;color:#000000;padding-bottom:20px;">
              Just wanted to say a big thank you for signing up!
              </td>
            </tr>

            <tr>
  <td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td>
</tr>

            <!-- Greeting & OTP -->
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                 Hi ${data?.name},
              </td>
            </tr>
             <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">

 <p style="margin: 0 0 15px;">
     We’re really happy to have you with us. 😊
    </p>

  

              </td>
            </tr>

   
            </tr>
               <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
You’ve taken the first step toward enjoying trading for life with GTC.
              </td>
            </tr>

                <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
One of our team members will reach out to you soon and guide you through the next steps, nice and easy.
              </td>
            </tr>

                <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
If you need anything in the meantime, feel free to contact us at <a href="mailto:support@gtcfx.com">support@gtcfx.com</a>
              </td>
            </tr>
            
            
            

            
 <tr>
              <td style="font-size:16px;color:#000000;padding-bottom:10px; font-weight: 600;">
                <br>
             Best Regard,

              </td>
            </tr>
            <!-- Signoff -->
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:30px;">
                Have an even better great day,<br>
                Your GTC Team

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
    &copy; Copyright 2025 GTCVIP – All Rights Reserved
  </td>
</tr>


          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
 `
};