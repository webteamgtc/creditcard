'use client';
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import OtpInput from "react-otp-input";
import { countryList } from "../context/useCountriesDetails";
import { useLocationDetail } from "../context/useLocationDetail";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Select from "react-select";


const IndIbForm = () => {
    const { countryData } = useLocationDetail();
    const [otpLoading, setOtpLoading] = useState(false)
    const [showOtp, setShowOtp] = useState(false)
    const [loading, setLoading] = useState(false);
    const [storedOtp, setStoredOtp] = useState("")
    const [isDisable, setIsDisable] = useState(true)
    const router = useRouter()

    const options = countryList.map((item) => ({
        value: item.en_short_name,
        label: (
            <div className="flex items-center gap-2">
                <img
                    src={`https://flagcdn.com/w40/${item.alpha_2_code.toLowerCase()}.png`}
                    alt={item.en_short_name}
                    className="w-5 h-4 object-cover"
                />
                <span>{item.en_short_name}</span>
            </div>
        ),
    }));

      useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    formik.setFieldValue("utm_source", params.get("utm_source") || "");
    formik.setFieldValue("utm_medium", params.get("utm_medium") || "");
    formik.setFieldValue("utm_campaign", params.get("utm_campaign") || "");
    formik.setFieldValue("utm_id", params.get("utm_id") || "");
    formik.setFieldValue("utm_term", params.get("utm_term") || "");
    formik.setFieldValue("utm_content", params.get("utm_content") || "");
    formik.setFieldValue("fbclid", params.get("fbclid") || "");
    formik.setFieldValue("gclid", params.get("gclid") || "");
  }, []);


    useEffect(() => {
        if (countryData?.country) {
            const filterData = countryList.find((item) => item?.alpha_2_code == countryData.country);
            formik.setFieldValue("country", filterData ? filterData?.en_short_name : "");
        }
    }, [countryData?.country, countryList]);






    const sendVerificationCode = () => {
        setOtpLoading(true)
        axios.post(`/api/otp-smtp`, {
            email: formik?.values?.email,
            first_name: formik?.values?.nickname,
            type: "0"
        }).then(res => {
            if (res?.data?.message) {
                setShowOtp(true)
                setStoredOtp(res?.data?.message?.slice(4, -3))
                toast.success("Otp send successfully!")
            }
            else {
                toast.error(res?.data?.message)
                setShowOtp(false)
            }
        }).catch(err => {
            setShowOtp(false)
        }).finally(() => {
            setOtpLoading(false)
        })
    }

    const generatePassword = (length = 12) => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
        return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    };

    const sendDataToDb = async (data) => {
        const emailData = axios.post(
            `/api/email`,
            JSON.stringify(data)
        ).then(res => {
            toast.success('Data inserted successfully');
            formik.resetForm();
            setLoading(false)
            localStorage.setItem('user', JSON.stringify(data));
            router.push("/india/ib/success",);
            formik.resetForm()
            setShowOtp(false)
        }).catch(err => {
            toast.error('Error inserting data: ' + result.error);
            setLoading(false)
        }).finally(() => {
            setLoading(false);
        })
    }

    const formik = useFormik({
        initialValues: {
            nickname: "",
            email: "",
            last_name: "",
            phone: "",
            password: generatePassword(),
            country: "",
            otp: "",
            terms: false,
             utm_source: "",
                utm_medium: "",
                utm_campaign: "",
                utm_id: "",
                utm_term: "",
                utm_content: "",
                fbclid: "",
                gclid: "",
        },
        validationSchema: Yup.object({
            nickname: Yup.string()
                .matches(/^[A-Za-z\s]+$/, "Full name can only contain letters.")
                .required("First name is required"),
            last_name: Yup.string()
                .matches(/^[A-Za-z\s]+$/, "Last name can only contain letters.")
                .required("Last name is required"),
            email: Yup.string().email("Invalid email address").required("Email is required"),
            phone: Yup.string().required("Phone number is required"),
            country: Yup.string().required("Country is required"),
            otp: Yup.string().length(6, "OTP must be 6 digits").required("OTP is required"),
            terms: Yup.bool().oneOf([true], "Please accept the terms and conditions"),
        }),
        onSubmit: async (values) => {
            try {
                setLoading(true);
                await axios.post("https://hooks.zapier.com/hooks/catch/16420445/u2djork/", JSON.stringify(values));
            } catch (error) {
            } finally {
                sendDataToDb(values, formik, setLoading)
            }
        },
    });

    const verifyOtpCode = async () => {
        if (formik.values.otp == storedOtp) {
            toast.success("Otp Verified Successfully!")
            setShowOtp(false)
            setIsDisable(false)
        }
        else {
            toast.error("Otp Verification Failed try again!")
        }
    }

   // console.log({ countryList, countryData, formik })



    return (


        <div className="relative max-w-xl mx-auto">
            <form onSubmit={formik.handleSubmit} className="relative text-sm rounded-3xl md:p-0 mx-auto form-setting text-left text-white">
                {/* Full Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                      <input type="hidden" name="utm_source" value={formik.values.utm_source} />
                            <input type="hidden" name="utm_medium" value={formik.values.utm_medium} />
                            <input type="hidden" name="utm_campaign" value={formik.values.utm_campaign} />
                            <input type="hidden" name="utm_id" value={formik.values.utm_id} />
                            <input type="hidden" name="utm_term" value={formik.values.utm_term} />
                            <input type="hidden" name="fbclid" value={formik.values.fbclid} />
                            <input type="hidden" name="gclid" value={formik.values.gclid} />
                            <input type="hidden" name="utm_content" value={formik.values.utm_content} />
                    <div className="relative">
                        <div className="text-sm mb-2">
                            <label>First Name</label>
                        </div>

                        <input
                            type="text"
                             inputMode="text"
                            autoComplete="off"
                            className={`w-full px-4 bg-[#1A1A47] py-3 pl-3 text-base border-[.5px] rounded-md border-opacity-10  ${formik.touched.nickname && formik.errors.nickname ? "border-red-500" : " border-[#ffffff1a] "} focus:outline-none`}

                            {...formik.getFieldProps("nickname")}
                        />
                        {formik.touched.nickname && formik.errors.nickname && (
                            <p className="text-red-500 text-left pt-1">{formik.errors.nickname}</p>
                        )}
                    </div>
                    <div className="relative">
                        <div className="text-sm mb-2">
                            <label>Last Name</label>
                        </div>

                        <input
                            type="text"
                             inputMode="text"
                                autoComplete="off"
                            className={`w-full px-4 bg-[#1A1A47] text-base py-3 pl-3 border-[.5px] rounded-md border-opacity-10  ${formik.touched.last_name && formik.errors.last_name ? "border-red-500" : " border-[#ffffff1a] "} focus:outline-none`}
                            {...formik.getFieldProps("last_name")}
                        />
                        {formik.touched.last_name && formik.errors.last_name && (
                            <p className="text-red-500  pt-1 text-left">{formik.errors.last_name}</p>
                        )}
                    </div>

                </div>


                <div className="grid grid-cols-1 gap-3 mb-3">
                    <div className="relative">
                        <div className="relative">
                            <div className="text-sm mb-2">
                                <label>Email</label>
                            </div>

                            <input
                                type="email"
                                className={`w-full bg-[#1A1A47] px-4 py-3 pl-3 text-base border-[.5px] border-[#ccccd679] rounded-md border-opacity-30 ${formik.touched.email && formik.errors.email ? "border-red-500" : "border-[#ffffff1a]"} focus:outline-none focus:bg-none`}
                                {...formik.getFieldProps("email")}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <p className="text-red-500 pt-1 text-left">{formik.errors.email}</p>
                            )}
                            <div className="absolute top-9 bg-primary right-3 rounded-md cursor-pointer text-white  py-1.5 px-2"
                                onClick={() => {
                                    sendVerificationCode()
                                }}
                            >
                                {otpLoading ? "Sending.." : "Get Code"}
                            </div>
                        </div>
                        {showOtp &&
                            <div className="grid grid-cols-1 gap-2">
                                <div>
                                    <p className="my-2 text-left pt-1">OTP has been sent to given Email</p>
                                    <OtpInput
                                        value={formik.values.otp}
                                        onChange={(otp) => formik.setFieldValue("otp", otp)}
                                        numInputs={6}
                                        containerStyle={{
                                            justifyContent: 'space-around',
                                            alignItems: "center",
                                            gap: "10px"
                                        }}
                                        renderInput={(props) =>  <input
                                            {...props}
                                            type="tel"             // Triggers number pad
                                            inputMode="numeric"    // Helps mobile keyboard detect numeric input
                                            pattern="[0-9]*"       // Optional: enforce numeric
                                            />}
                                        isInputNum
                                        inputStyle={{
                                            fontSize: '16px', // ✅ critical to stop iOS zoom
                                            borderRadius: '5px',
                                            paddingBottom: '10px',
                                            paddingTop: '10px',
                                            width: '20%',
                                            backgroundColor: '#1A1A47',
                                            color: '#fff',
                                            fontWeight: '700',
                                            outlineColor: '#f9c617',
                                            border:
                                                formik.touched.otp && formik.errors.otp
                                                ? '1px solid red'
                                                : '1px solid #ffffff1a',
                                            }}

                                    />
                                    {formik.touched.otp && formik.errors.otp && (
                                        <p className="text-red-500 text-sm mt-2">{formik.errors.otp}</p>
                                    )}

                                </div>
                                <div className=" bg-primary right-0 rounded-md cursor-pointer text-white  py-2 px-2 text-center mt-2 border border-[#ffffff1a]"
                                    onClick={() => {
                                        verifyOtpCode()
                                    }}
                                >
                                    Verify Code
                                </div>
                            </div>
                        }
                    </div>
                    <div className="relative">
                        <div className="text-sm mb-2 text-white">
                            <label htmlFor="phone">Mobile Number</label>
                        </div>
                        <PhoneInput
                            id="phone"
                            name="phone"
                            international
                            countryCallingCodeEditable={false}
                            defaultCountry={countryData?.country || "AE"}
                            value={formik.values.phone}
                            onChange={(phone) => formik.setFieldValue("phone", phone)}
                            className={`flex w-full overflow-hidden rounded-md text-base border border-[#ffffff1a] bg-[#1A1A47] phone-setting text-white focus:outline-none
    ${formik.touched.phone && formik.errors.phone ? "border-red-500" : ""}
  `}
                            style={{
                                display: 'flex',
                                width: '100%',
                                backgroundColor: '#1A1A47',
                                borderRadius: '0.5rem',
                                border: '1px solid rgba(255,255,255,0.1)',
                                padding: '0.75rem',
                                color: 'white',
                            }}
                        />

                        {formik.touched.phone && formik.errors.phone && (
                            <p className="text-red-500 text-sm text-left mt-1">{formik.errors.phone}</p>
                        )}
                    </div>


                </div>

                <div className="relative mb-3">
                    <div className="text-sm mb-2">
                        <label>Country of Residence</label>
                    </div>

                    <Select
                        name="country"
                        options={options}
                        classNamePrefix="react-select"
                        onChange={(selectedOption) => formik.setFieldValue("country", selectedOption?.value)}
                        onBlur={() => formik.setFieldTouched("country", true)}
                        value={options.find((opt) => opt.value === formik.values.country)} // ✅ ADD THIS LINE
                        className="text-white cpountry"
                        styles={{
                            control: (base, state) => ({
                                ...base,
                                backgroundColor: "#1A1A47",
                                borderColor: formik.touched.country && formik.errors.country ? "red" : "#ccccd679",
                                color: "white",
                            }),
                            singleValue: (base) => ({ ...base, color: "white" }),
                            menu: (base) => ({ ...base, backgroundColor: "#1A1A47", color: "white" }),
                        }}
                    />

                    {formik.touched.country && formik.errors.country && (
                        <p className="text-red-500 text-sm">{formik.errors.country}</p>
                    )}
                </div>

                <div className="mb-5">
                    <label
                        className={`block text-sm pb-2 ${formik.touched.terms && formik.errors.terms
                            ? "text-red-500"
                            : ""
                            }`}
                        htmlFor="terms"
                    >
                        {formik.touched.terms && formik.errors.terms
                            ? formik.errors.terms
                            : "Please accept the terms and conditions"}
                    </label>
                    <div className="flex items-start gap-1">
                        <input
                            type="checkbox"
                            name="terms"
                            id="terms"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value="checked"
                            className="h-5 w-5"
                        />
                       <p className="inline text-xs md:text-[13px] leading-normal">
  By clicking on the <strong>Get 80% in Rebates</strong> button, I confirm that I am over the age of 18, have read and agree to the{' '}
  <a
    className="text-secondary underline"
    href="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/pdf-files/Vanuatu.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    Client Agreement
  </a>{' '}
  & the{' '}
  <a
    className="text-secondary underline"
    href="/privacy-policy"
    target="_blank"
    rel="noopener noreferrer"
  >
    Privacy Policy
  </a>
  , I consent to GTC contacting me at reasonable times, and that my number is not on the Do Not Call Register (DNCR).
</p>

                    </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button disabled={isDisable} type="submit" className="bg-secondary cursor-pointer mb-10 text-white w-full font-bold py-4 px-8 rounded-md border border-[#ffffff1a]">
                        {loading ? "Submitting.." : "Get 80% in Rebates"}
                    </button>
                </div>
            </form>
        </div>

    );
};
export default IndIbForm