import { useEffect } from "react";
import heroBanner from "@/assets/img-hero-banner.webp";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { registerUser } from "@/services/registrationService";

// Zod Schema
const registrationSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  country: z.string().min(1, "Country is required"),
  code: z.string().min(1, "Code is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email("Invalid email address"),
  experience: z.string().min(1, "Experience is required"),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

// Mock Data Countries
const countries = [
  { name: "Thailand", code: "+66" },
  { name: "Japan", code: "+81" },
  { name: "United States", code: "+1" },
  { name: "United Kingdom", code: "+44" },
  { name: "Singapore", code: "+65" },
];

export default function Hero() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      country: "",
      code: "",
      phone: "",
      email: "",
      experience: "",
      terms: false,
    },
  });

  const selectedCountry = watch("country");

  useEffect(() => {
    const countryData = countries.find((c) => c.name === selectedCountry);
    if (countryData) {
      setValue("code", countryData.code);
    } else {
      setValue("code", "");
    }
  }, [selectedCountry, setValue]);

  const onSubmit = async (data: RegistrationFormData) => {
    try {
      const response = await registerUser(data);

      toast.success("Registration Successful!", {
        position: "top-center",
        description: `Welcome, ${data.firstName} ${data.lastName}`,
      });
      console.log("Response:", response.data);
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Registration Failed", {
        position: "top-center",
        description: "Please try again later.",
      });
    }
  };

  return (
    <div
      className="relative w-full min-h-[600px] py-12 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroBanner})` }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center mb-10 w-full font-sofia font-semibold">
          <h1 className="text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-[#c69c6d] drop-shadow-lg mb-2">
            LOREM IPSUM DOLOR
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold uppercase tracking-tight text-white drop-shadow-lg">
            SIT AMET TOSIK
          </h2>
        </div>

        <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8 w-full max-w-2xl">
          <h3 className="text-xl font-bold text-center text-gray-900 mb-6">
            Lorem ipsum dolor sit amet
          </h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  {...register("firstName")}
                  className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-1 text-sm ${
                    errors.firstName
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-green-500"
                  }`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  {...register("lastName")}
                  className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-1 text-sm ${
                    errors.lastName
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-green-500"
                  }`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-8 gap-2">
              <div className="md:col-span-4">
                <select
                  {...register("country")}
                  className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-1 text-sm text-gray-700 ${
                    errors.country
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-green-500"
                  }`}
                >
                  <option value="">Country</option>
                  {countries.map((c) => (
                    <option key={c.name} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
                {errors.country && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.country.message}
                  </p>
                )}
              </div>
              <div className="md:col-span-1">
                <input
                  type="text"
                  placeholder="Code"
                  {...register("code")}
                  readOnly
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 text-sm bg-gray-100 cursor-not-allowed"
                />
              </div>
              <div className="md:col-span-3">
                <input
                  type="tel"
                  placeholder="Phone"
                  {...register("phone")}
                  className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-1 text-sm ${
                    errors.phone
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-green-500"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                  className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-1 text-sm ${
                    errors.email
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-green-500"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <select
                  {...register("experience")}
                  className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-1 text-sm text-gray-700 ${
                    errors.experience
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-green-500"
                  }`}
                >
                  <option value="">Experience</option>
                  <option value="Novice">Novice</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Expert">Expert</option>
                </select>
                {errors.experience && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.experience.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center gap-2">
                <input
                  id="terms"
                  type="checkbox"
                  {...register("terms")}
                  className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                />
                <label htmlFor="terms" className="text-xs text-gray-500">
                  I have read and accepted the{" "}
                  <a href="#" className="text-red-500 hover:underline">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-red-500 hover:underline">
                    Terms and Conditions
                  </a>
                </label>
              </div>
              {errors.terms && (
                <p className="text-red-500 text-xs mt-1 flex items-center justify-center">
                  {errors.terms.message}
                </p>
              )}
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-20 bg-[#1a9d55] hover:bg-[#158045] text-white font-bold py-3 px-4 rounded transition-colors uppercase text-sm mt-4 ${
                  isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Submitting..." : "Join Now"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
